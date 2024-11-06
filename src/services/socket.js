import { io } from "socket.io-client";
const SetSocket = io(`${import.meta.env.VITE_APP_SOCKET_URL}`);

export default SetSocket;
