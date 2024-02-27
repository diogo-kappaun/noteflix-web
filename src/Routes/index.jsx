import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        containerStyle={{
          top: 8,
        }}
        toastOptions={{
          className: '',
          style: {
            background: '#f4f4f5',
            color: '#09090b',
          },
          iconTheme: {
            primary: '#09090b',
          },
        }}
      />
      <AppRoutes />
      <AuthRoutes />
    </BrowserRouter>
  )
}
