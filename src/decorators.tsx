import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/ThemeProvider'

export function testQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  })
}

export function withQueryClient(story: () => React.ReactNode) {
  const queryClient = testQueryClient()
  return <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
}

export function withThemeProvider(story: () => React.ReactNode) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {story()}
    </ThemeProvider>
  )
}
