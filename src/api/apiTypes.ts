export type AdressSugestions = {
  suggestions: Array<Suggestion>;
};

export type Suggestion = {
  data:
    | {
        area: null | string;
        area_fias_id: null | string;
        area_kladr_id: null | string;
        area_type: null | string;
        area_type_full: null | string;
        area_with_type: null | string;
        beltway_distance: null | string;
        beltway_hit: null | string;
        block: null | string;
        block_type: null | string;
        block_type_full: null | string;
        capital_marker: null | string;
        city: null | string;
        city_area: null | string;
        city_district: null | string;
        city_district_fias_id: null | string;
        city_district_kladr_id: null | string;
        city_district_type: null | string;
        city_district_type_full: null | string;
        city_district_with_type: null | string;
        city_fias_id: null | string;
        city_kladr_id: null | string;
        city_type: null | string;
        city_type_full: null | string;
        city_with_type: null | string;
        country: null | string;
        country_iso_code: null | string;
        divisions: null;
        entrance: null;
        federal_district: null | string;
        fias_actuality_state: null | string;
        fias_code: null;
        fias_id: null | string;
        fias_level: null | string;
        flat: null | string;
        flat_area: null | string;
        flat_cadnum: null | string;
        flat_fias_id: null | string;
        flat_price: null | string;
        flat_type: null | string;
        flat_type_full: null | string;
        floor: null | string;
        geo_lat: null | string;
        geo_lon: null | string;
        geoname_id: null | string;
        history_values: null | string;
        house: null | string;
        house_cadnum: null | string;
        house_fias_id: null | string;
        house_kladr_id: null | string;
        house_type: null | string;
        house_type_full: null | string;
        kladr_id: null | string;
        metro: null | string;
        okato: null | string;
        oktmo: null | string;
        postal_box: null | string;
        postal_code: null | string;
        qc: null | string;
        qc_complete: null | string;
        qc_geo: null | string;
        qc_house: null | string;
        region: null | string;
        region_fias_id: null | string;
        region_iso_code: null | string;
        region_kladr_id: null | string;
        region_type: null | string;
        region_type_full: null | string;
        region_with_type: null | string;
        room: null | string;
        room_cadnum: null | string;
        room_fias_id: null | string;
        room_type: null | string;
        room_type_full: null | string;
        settlement: null | string;
        settlement_fias_id: null | string;
        settlement_kladr_id: null | string;
        settlement_type: null | string;
        settlement_type_full: null | string;
        settlement_with_type: null | string;
        source: null | string;
        square_meter_price: null | string;
        stead: null | string;
        stead_cadnum: null | string;
        stead_fias_id: null | string;
        stead_type: null | string;
        stead_type_full: null | string;
        street: null | string;
        street_fias_id: null | string;
        street_kladr_id: null | string;
        street_type: null | string;
        street_type_full: null | string;
        street_with_type: null | string;
        tax_office: null | string;
        tax_office_legal: null | string;
        timezone: null | string;
        unparsed_parts: null | string;
      }
    | undefined;
  value: string | null;
  unrestricted_value: string | null;
};
