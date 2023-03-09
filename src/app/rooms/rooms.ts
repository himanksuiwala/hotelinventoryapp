export interface Room{
    totalRooms?:number;
    availableRooms?:number;
    bookedRooms?:number;
}

export interface RoomList{
    roomNumber:number,
    rootType:string;
    amenities:string;
    price:number;
    photos:string;
    checkInTime:Date;
    checkOutTime:Date;
    rating:number
}
