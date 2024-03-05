import { Axios, AxiosInstance } from 'axios';
import { createContext } from 'react';

export const BillingSystemContext = createContext<AxiosInstance | undefined>(undefined)