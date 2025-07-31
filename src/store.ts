import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { CryptoCurrency, CryptoPrice, Pair } from './types'
import { fetchCurrentCryptoPrice, getCryptos} from './services/CryptoService'

type CryptoStore = {
  cryptocurrencies: CryptoCurrency[];
  result: CryptoPrice
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};


export const useCryptoStore = create<CryptoStore>() (devtools((set) => ({
    cryptocurrencies: [],
    result:{} ,
    fetchCryptos: async() => {
       const cryptocurrencies = await getCryptos()
       set(() => ({
           cryptocurrencies
       }))
    },
    loading: false,
    fetchData: async(pair) => {
       set(() => ({ 
        loading: true 
      }))

       const result =await fetchCurrentCryptoPrice(pair)
       
       set(() => ({
         result,
         loading: false
       }))
    }

})))