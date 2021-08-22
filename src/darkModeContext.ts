import { createContext, Dispatch, SetStateAction } from 'react';

export const darkModeContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);
