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
      Bounds: {}
    },
    required: ['Bounds']
  }
}
