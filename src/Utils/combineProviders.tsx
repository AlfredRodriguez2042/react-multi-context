import React, { FC } from 'react'

export const combineProviders = (...providers: Array<FC<any>>) => {
  return providers.reduce(
    (AccumulatedProvider, CurrentProvider) => {
      return ({ children }: any): React.ReactElement => (
        <AccumulatedProvider>
          <CurrentProvider>{children}</CurrentProvider>
        </AccumulatedProvider>
      )
    },
    ({ children }: any) => <>{children}</>
  )
}
