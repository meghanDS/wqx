export default {
  if: {
    properties: {
      FrequencyClassType: {
        enum: ['Measured Characteristic']
      }
    },
    required: ['FrequencyClassType']
  },
  then: {
    properties: {
      Units: {}
    },
    required: ['Units']
  }
}
