# Fleet Management Application

## Overview

This the Fleet Management, a code test application

## Features

- View a list of all vehicles in the fleet
- View detailed information about each vehicle
- Add new vehicles to the fleet
- Update existing vehicle information
- Remove vehicles from the fleet
- Track vehicle status (active/inactive)
- Manage equipment associated with each vehicle

## Technology Stack

- React 18
- TypeScript
- Material-UI for styling
- React Router for navigation
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Install dependencies:

   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
|-- components/
|   |-- AddVehicle.tsx
|   |-- HeaderBar.tsx
|   |-- Layout.tsx
|   |-- UpdateVehicle.tsx
|   |-- VehicleDetails.tsx
|   |-- VehicleList.tsx
|   |-- VehicleListItem.tsx
|-- contexts/
|   |-- VehicleContext.tsx
|-- types/
|   |-- equiptment.d.ts
|   |-- props.d.ts
|   |-- vehicles.d.ts
|-- App.tsx
|-- index.tsx
```
