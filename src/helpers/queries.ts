export const PROVIDER_LIST = {
  "order": {
    "datamart_daily_user_activities.activities": "desc"
  },
  "dimensions": [
    "datamart_daily_user_activities.provider"
  ]
}

export const ACTIVITIES_PER_PROVIDER = {
  "order": {
    "datamart_daily_user_activities.activities": "desc"
  },
  "measures": [
    "datamart_daily_user_activities.activities"
  ],
  "timeDimensions": [
    {
      "dimension": "datamart_daily_user_activities.date"
    }
  ],
  "dimensions": [
    "datamart_daily_user_activities.provider"
  ]
}

export const ACTIVITIES_MONTHLY = {
  "order": {
    "datamart_daily_user_activities.date": "asc"
  },
  "measures": [
    "datamart_daily_user_activities.activities"
  ],
  "timeDimensions": [
    {
      "dimension": "datamart_daily_user_activities.date",
      "granularity": "month"
    }
  ]
}