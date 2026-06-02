import { useEffect, useState } from 'react'

export function useTyping(words: readonly string[]) {
  const [wordIndex, setWordIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const word = words[wordIndex]

  useEffect(() => {
    const speed = deleting ? 38 : 74
    const pause = !deleting && letterIndex === word.length ? 1050 : 0
    const timer = window.setTimeout(() => {
      if (!deleting && letterIndex < word.length) {
        setLetterIndex((value) => value + 1)
      } else if (!deleting && letterIndex === word.length) {
        setDeleting(true)
      } else if (deleting && letterIndex > 0) {
        setLetterIndex((value) => value - 1)
      } else {
        setDeleting(false)
        setWordIndex((value) => (value + 1) % words.length)
      }
    }, speed + pause)

    return () => window.clearTimeout(timer)
  }, [deleting, letterIndex, word.length, words.length])

  return word.slice(0, letterIndex)
}
