import { Device } from '@/models/Device';
import React, { createContext, useContext, useState } from 'react';

type DeviceMap = {
  tv: Device;
  coffee: Device;
  ac: Device;
  db: Device;
};

const defaultDevices: DeviceMap = {
  tv: new Device('TV'),
  coffee: new Device('Kahve Makinesi'),
  ac: new Device('Klima'),
  db: new Device('Veritabanı'),
};

const DeviceContext = createContext<{
  devices: DeviceMap;
  setDevices: React.Dispatch<React.SetStateAction<DeviceMap>>;
} | null>(null);

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const [devices, setDevices] = useState(defaultDevices);

  return (
    <DeviceContext.Provider value={{ devices, setDevices }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevices = () => {
  const context = useContext(DeviceContext);
  if (!context) throw new Error('useDevices must be used within DeviceProvider');
  return context;
};

