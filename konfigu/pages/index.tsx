
import { useState } from "react";

export default function Home() {
  const [type, setType] = useState("");
  const [width, setWidth] = useState(300);
  const [depth, setDepth] = useState(300);
  const [height, setHeight] = useState(240);
  const [roof, setRoof] = useState("");
  const [wood, setWood] = useState("");

  const calculatePrice = () => {
    let base = 5000;
    if (type === "u-steny") base += 1000;
    if (roof === "sedlova") base += 3000;
    if (roof === "pultova") base += 2000;
    if (wood === "modrin") base += 2500;
    if (wood === "borovice") base += 1000;
    return base + (width * depth * 0.01);
  };

  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto space-y-6 font-sans">
      <h1 className="text-3xl font-bold text-center">Konfigurátor dřevěné pergoly</h1>

      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium">Typ pergoly</span>
          <select onChange={e => setType(e.target.value)} className="w-full mt-1 border rounded px-3 py-2">
            <option value="">Vyberte typ</option>
            <option value="volne-stojici">Volně stojící</option>
            <option value="u-steny">U stěny</option>
            <option value="rohova">Rohová</option>
          </select>
        </label>

        <div className="grid grid-cols-3 gap-4">
          <label className="block">
            <span className="text-sm font-medium">Šířka (cm)</span>
            <input type="number" value={width} onChange={e => setWidth(+e.target.value)} className="w-full mt-1 border rounded px-2 py-1" />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Hloubka (cm)</span>
            <input type="number" value={depth} onChange={e => setDepth(+e.target.value)} className="w-full mt-1 border rounded px-2 py-1" />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Výška (cm)</span>
            <input type="number" value={height} onChange={e => setHeight(+e.target.value)} className="w-full mt-1 border rounded px-2 py-1" />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-medium">Typ střechy</span>
          <select onChange={e => setRoof(e.target.value)} className="w-full mt-1 border rounded px-3 py-2">
            <option value="">Vyberte střechu</option>
            <option value="rovna">Rovná</option>
            <option value="sedlova">Sedlová</option>
            <option value="pultova">Pultová</option>
            <option value="bez">Bez střechy</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium">Materiál</span>
          <select onChange={e => setWood(e.target.value)} className="w-full mt-1 border rounded px-3 py-2">
            <option value="">Vyberte dřevo</option>
            <option value="smrk">Smrk</option>
            <option value="modrin">Modřín</option>
            <option value="borovice">Borovice</option>
          </select>
        </label>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl text-center">
        <h2 className="text-xl font-semibold mb-2">Odhadovaná cena</h2>
        <p className="text-2xl font-bold">{calculatePrice().toFixed(0)} Kč</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Odeslat poptávku</button>
      </div>
    </main>
  );
}
