
export class Device {
    static nextId = 0;
    static all: Device[] = [];

    id: number;
    name: string;
    ip: string;
    connected: boolean;

    constructor(name: string, ip: string = '') {
        this.name = name;
        this.id = Device.nextId++;
        this.ip = ip;
        this.connected = false;
        if (!Device.all.includes(this)) 
            Device.all.push(this);                  
    }

    connect() {
        this.connected = true;

        /* 
            react-native-ble-plx
            Using this library to connect to the device
        */
    }

    disconnect() {
        this.connected = false;
    }

    toggleConnection() {
        this.connected = !this.connected;
    }
}
