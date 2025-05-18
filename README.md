# kumandaMobile

A lightweight crossplatform(for now android only) mobile app to communicate with other devices via bluetooth.

## Dependencies
- npx version 10.9.2
- npm version 10.9.2
- expo version 0.24.13

## Quick Start

```bash
$git clone ....
$cd kumandaMobile
$npm i
$npx expo prebuild 
$npx expo run:android # This requires a wired android device with ADB enabled or If you have emulator it recognises 
```

## To-Do
- [DONE] Create Class Device
  Device Has -> Name, ConnectionStatus, DeviceID and PACKAGE 
  - [ONPROGRESS] Package
	In Future It can be prepared using additional infos
	  like if u've got an AC u set the TEMP giving the number 
	  we send the data inside of the package
- [ONPROGRESS] BLE Integration
