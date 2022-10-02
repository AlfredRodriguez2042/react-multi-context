export const combineReducers = (reducers: any) => {
  return (state: any, action: any) => {
    return Object.keys(reducers).reduce(
      (acc, reducer) => ({
        ...acc,
        ...reducers[reducer]({ [reducer]: acc[reducer] }),
        action,
      }),
      state
    )
  }
}
