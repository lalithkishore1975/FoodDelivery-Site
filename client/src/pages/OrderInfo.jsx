import { useState } from "react";

export default function OrderInfo() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");

  const getLocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });

      // Optional: Fetch address using reverse geocoding API (OpenStreetMap)
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await res.json();
      setAddress(data.display_name || "Address not found");
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Choose Delivery Location</h2>

      <button
        onClick={getLocation}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Use My Current Location
      </button>

      {location && (
        <div className="text-sm text-gray-700 mb-4">
          <p><strong>Lat:</strong> {location.latitude}</p>
          <p><strong>Lng:</strong> {location.longitude}</p>
          <p><strong>Address:</strong> {address}</p>
        </div>
      )}

      <button
        className="w-full bg-green-600 text-white py-2 rounded"
        onClick={() => alert("Order Confirmed at: " + address)}
      >
        Confirm Order
      </button>
    </div>
  );
}
