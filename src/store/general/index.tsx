import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GeneralState {
  darkMode: boolean,
  currentRoute: string
}

const initialState: GeneralState = {
    darkMode: true,
    currentRoute: '/'
}

export const GeneralSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    setCurrentRoute: (state, action: PayloadAction<string>) => {
      state.currentRoute = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setDarkMode, setCurrentRoute } = GeneralSlice.actions

export default GeneralSlice.reducer