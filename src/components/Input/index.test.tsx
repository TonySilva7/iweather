import {render, screen} from '@testing-library/react-native'
import { Input } from '.'

describe("Component: <Input />", () => {
  it("should be render the input", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Test" />)

    expect(getByPlaceholderText("Test")).toBeTruthy()
  })

  it("should  be render without activity indicator if isLoading prop is undefined", () => {
    render(<Input />)
    const activityIndicator = screen.queryByTestId('activity-indicator');
    expect(activityIndicator).toBeNull();
  })

  it("should  be render with activity indicator if isLoading prop is true", () => {
    render(<Input isLoading={true} />)

    const activityIndicator = screen.getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
  })
})