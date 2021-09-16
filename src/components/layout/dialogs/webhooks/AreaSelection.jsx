import React from 'react'
import { useQuery } from '@apollo/client'

import Query from '@services/Query'
import ScanAreaTile from '@components/tiles/ScanArea'

export default function AreaSelection({
  map, webhookMode, setWebhookMode, selectedAreas, setSelectedAreas,
}) {
  const { data } = useQuery(Query.webhook('geojson'))

  if (data && data.webhookGeojson) {
    return (
      <ScanAreaTile
        map={map}
        item={data.webhookGeojson}
        webhookMode={webhookMode}
        setWebhookMode={setWebhookMode}
        selectedAreas={selectedAreas}
        setSelectedAreas={setSelectedAreas}
      />
    )
  }
  return null
}
