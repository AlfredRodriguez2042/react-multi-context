import { combineProviders } from '../Utils/combineProviders'
import AuthProvider from './AuthContext'
const providers: any[] = [AuthProvider]
// export const AppContextProvider=()=> providers.reduce((AccumutalatedComponents,CurrentComponent)=>{
//     return({children}:any):React.ReactElement=>(<AccumutalatedComponents>
//     <CurrentComponent>{children}</CurrentComponent>
// </AccumutalatedComponents>)

// },[])

export const AppContextProvider = combineProviders(...providers)
