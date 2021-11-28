/*import React, { useState } from 'react';
import { Map, TileLayer, Marker, FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";


const DrawProperty = () => {

    //map state
    const [mapLayers, setMapLayers] = useState([]);
    
    const _created = e => console.log(e);
    
    map functions
    const _onCreate = (e) => {
        console.log(e);

        const { layerType, layer } = e;
        if (layerType === "polygon") {
            const { _leaflet_id } = layer;

            setMapLayers((layers) => [
                ...layers,
                layer.toGeoJSON(),     //layer.getLatLngs()[0]
            ]);
        }
    };

    const _onEdited = (e) => {
        console.log(e);
        const {
            layers: { _layers },
        } = e;

        Object.values(_layers).map(({ _leaflet_id, editing }) => {
            setMapLayers((layers) =>
                layers.map((l) =>
                    l.id === _leaflet_id
                        ? { ...l, latlngs: { ...editing.latlngs[0] } }
                        : l
                )
            );
        });
    };

    const _onDeleted = (e) => {
        console.log(e);
        const {
            layers: { _layers },
        } = e;

        Object.values(_layers).map(({ _leaflet_id }) => {
            setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
        });
    };

    return (

        <Map center={[50.233353, -121.597779]} zoom={8} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[50.233353, -121.597779]}></Marker>
                <FeatureGroup>
                    <EditControl position="topright"
                        onCreated={_onCreate}
                        onEdited={_onEdited}
                        onDeleted={_onDeleted}
                        draw={{
                            rectangle: false,
                            polyline: false,
                            circle: false,
                            circlemarker: false,
                            marker: false,
                        }}
                        edit={{
                            featureGroup: editableLayers, //REQUIRED!!
                            edit: false,
                            remove: false
                        }} />
                </FeatureGroup>
                <code className="text-left">{"{ \"property\": " + JSON.stringify((mapLayers[0])) + "}"}</code>
            </Map>
                
    );
};


export default DrawProperty;

*/