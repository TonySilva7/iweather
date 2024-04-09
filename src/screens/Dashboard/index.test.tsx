import { mockWeatherAPIResponse } from "../../__mocks__/api/mockWeatherAPIResponse"
import { customRender, screen, act, fireEvent, waitFor, waitForElementToBeRemoved } from "@utils/testes/customRender"
import { api } from "@services/api"
import { Dashboard } from "@screens/Dashboard"
import { saveStorageCity, getStorageCity } from "@libs/asyncStorage/cityStorage"
import { mockCityAPIResponse } from '../../__mocks__/api/mockCityAPIResponse'



describe("Screen: Dashboard", () => {
  it('should be show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: '1',
      name: 'Rio do Sul, BR',
      latitude: 123,
      longitude: 456
    }

    await saveStorageCity(city)

    customRender(<Dashboard />)

    await waitFor(() => expect(screen.findByText(/rio do sul/i, {}, { timeout: 3000 })).toBeTruthy);

    // const cityName = await waitFor(() => screen.getByText(/rio do sul/i));
    // expect(cityName).toBeTruthy() 
  })

  it('should be show another selected weather city', async () =>{
    const city = {
      id: '1',
      name: 'Rio do Sul, BR',
      latitude: 123,
      longitude: 456
    }
    await saveStorageCity(city)
    jest.spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })

      customRender(<Dashboard />)


    await waitForElementToBeRemoved(() => screen.queryByTestId('loading'))

    const cityName = 'São Paulo'

    await waitFor(() => act(() => {
      const search = screen.getByTestId('search-input')
      fireEvent.changeText(search, cityName)
    }))

    await waitFor(() => act(() => {
      fireEvent.press(screen.getByText(cityName, { exact: false }))
    }))

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy()

  })
})