import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('should check if two words are anagrams', async () => {
  render(<App />)

  const word1Input = screen.getByLabelText('Word 1:')
  const word2Input = screen.getByLabelText('Word 2:')
  const checkButton = screen.getByRole('button', { name: 'Check Anagram' })

  userEvent.type(word1Input, 'listen')
  userEvent.type(word2Input, 'silent')
  userEvent.click(checkButton)

  expect(
    await screen.findByText('Yeah success: The words are anagrams.')
  ).toBeInTheDocument()
})

test('should check if the words are no anagrams', async () => {
  render(<App />)

  const word1Input = screen.getByLabelText('Word 1:')
  const word2Input = screen.getByLabelText('Word 2:')
  const checkButton = screen.getByRole('button', { name: 'Check Anagram' })

  userEvent.type(word1Input, 'listen')
  userEvent.type(word2Input, 'another')
  userEvent.click(checkButton)

  expect(
    await screen.findByText('The words are not anagrams.')
  ).toBeInTheDocument()
})
