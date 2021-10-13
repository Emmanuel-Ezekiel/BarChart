import dayjs from 'dayjs'

const meta = {
  category: 'date',
  legends: ['Positive', 'Neutral', 'Negative'],
  data_type: 'number_of_response',
}
export function generateBarSeries(numberOfDataPoints) {
  const series = generateSeries(numberOfDataPoints)
  return {
    meta,
    series,
  }
}

function generateSeries(numberOfDataPoints) {
  const startDateString = '1 Jan 2019 UTC'
  const startDate = dayjs(startDateString)

  return Array(numberOfDataPoints)
    .fill(null)
    .map((_, index) => {
      const min = 20
      const max = 60
      return {
        label: startDate.add(index, 'day').toISOString(),
        value: [
          randomNumber(min, max),
          randomNumber(min, max),
          randomNumber(min, max),
        ],
      }
    })
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export const barSeriesBetweenMonths = {
  meta,
  series: [
    {
      label: '2009-02-15T00:00:00.000Z',
      value: [0, 0, 0],
    },
    {
      label: '2009-02-16T00:00:00.000Z',
      value: [34, 25, 28],
    },
    {
      label: '2009-02-17T00:00:00.000Z',
      value: [0, 0, 0],
    },
    {
      label: '2009-02-18T00:00:00.000Z',
      value: [25, 82, 77],
    },
    {
      label: '2009-02-19T00:00:00.000Z',
      value: [33, 19, 25],
    },
    {
      label: '2009-02-20T00:00:00.000Z',
      value: [44, 29, 71],
    },
    {
      label: '2009-02-21T00:00:00.000Z',
      value: [65, 31, 71],
    },
    {
      label: '2009-02-22T00:00:00.000Z',
      value: [0, 0, 0],
    },
    {
      label: '2009-02-23T00:00:00.000Z',
      value: [67, 73, 57],
    },
    {
      label: '2009-02-24T00:00:00.000Z',
      value: [86, 44, 41],
    },
    {
      label: '2009-02-25T00:00:00.000Z',
      value: [27, 18, 43],
    },
    {
      label: '2009-02-26T00:00:00.000Z',
      value: [73, 66, 34],
    },
    {
      label: '2009-02-27T00:00:00.000Z',
      value: [90, 68, 10],
    },
    {
      label: '2009-02-28T00:00:00.000Z',
      value: [14, 32, 15],
    },
    {
      label: '2009-03-01T00:00:00.000Z',
      value: [0, 0, 0],
    },
    {
      label: '2009-03-02T00:00:00.000Z',
      value: [69, 70, 65],
    },
    {
      label: '2009-03-03T00:00:00.000Z',
      value: [0, 0, 0],
    },
    {
      label: '2009-03-04T00:00:00.000Z',
      value: [39, 57, 10],
    },
    {
      label: '2009-03-05T00:00:00.000Z',
      value: [38, 20, 62],
    },
    {
      label: '2009-03-06T00:00:00.000Z',
      value: [61, 65, 39],
    },
    {
      label: '2009-03-07T00:00:00.000Z',
      value: [58, 80, 68],
    },
    {
      label: '2009-03-08T00:00:00.000Z',
      value: [21, 51, 74],
    },
    {
      label: '2009-03-09T00:00:00.000Z',
      value: [25, 90, 68],
    },
    {
      label: '2009-03-10T00:00:00.000Z',
      value: [0, 0, 0],
    },
    {
      label: '2009-03-11T00:00:00.000Z',
      value: [19, 86, 22],
    },
    {
      label: '2009-03-12T00:00:00.000Z',
      value: [0, 0, 0],
    },
    {
      label: '2009-03-13T00:00:00.000Z',
      value: [75, 18, 44],
    },
    {
      label: '2009-03-14T00:00:00.000Z',
      value: [0, 0, 0],
    },
    {
      label: '2009-03-15T00:00:00.000Z',
      value: [0, 0, 0],
    },
  ],
}
