import React from 'react'
import {MapboxProvider, MapGL, Source, Layer} from '@react-mapboxgl/core'
import Hover from '@react-mapboxgl/hover'
import glStyle from '../../res/sputnik2.json'

const token = process.env.MapboxAccessToken; // eslint-disable-line
const mapOptions = {
	// style: 'mapbox://styles/mapbox/streets-v9',
	style: glStyle,
	// bbox: [[-123.881836, 25.063209], [-65.170898, 48.848451]],
	// center: [-95.844727, 39.620499],
	// zoom: 3,
	center: [37, 55],
	zoom: 5,
	padding: 30,
	containerStyle: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 1
	}
}


const ExampleMap = () => {
	return (
		<MapboxProvider accessToken={token}>
			<MapGL {...mapOptions}>
				{/* Source to be used by layers (U.S. state polygons) */}
				<Source
					id='states'
					type='geojson'
					data='https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces.geojson'
				/>

				{/* State fill layer */}
				<Layer
					id='states-fill'
					source='states'
					type='fill'
					paint={{
						'fill-color': '#627BC1',
						'fill-opacity': 0.5
					}}
				/>

				{/* State borders layer */}
				<Layer
					id='states-borders'
					source='states'
					type='line'
					paint={{
						'line-color': '#627BC1',
						'line-width': 2
					}}
				/>

				{/* Declarative handler for hovering a layer's features.

				 This component optionally allows a function as the
				 *children*, similar to how libraries like react-motion do. You can
				 leverage that to filter layers or otherwise modify them.

				 The *property* should be a member of `feature.properties` that
				 uniquely identifies each feature.
				 */}
				<Hover layer='states-fill' property='name'>
					{({properties: names}) => (
						<Layer
							id='states-hover'
							source='states'
							type='fill'
							paint={{
								'fill-color': '#627BC1',
								'fill-opacity': 1
							}}
							filter={[
								'==',
								'name',
								names[0] || ''
							]}
						/>
					)}
				</Hover>
			</MapGL>
		</MapboxProvider>
	)
}

export default ExampleMap