import { render, screen } from '@testing-library/react-native'

import { ThemedText } from '@/components/ThemedText'

describe('<ThemedText />', () => {
  test('Text renders correctly on HomeScreen', () => {
    render(<ThemedText>Welcome!</ThemedText>)

    expect(screen.getByText('Welcome!')).toBeVisible()
  })
})
