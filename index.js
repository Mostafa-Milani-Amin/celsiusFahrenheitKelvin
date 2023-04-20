const celsiusFahrenheitKelvin = temp => (!/[cfk]/i.test(temp[temp.length - 1]) || /[cfk]/i.test(temp[0]) || temp[0] === ' ') ? new Error('invalid input; the valid format is #C (or #c) or #F (or #f) or #K (or #k).') : (/c/i.test(temp) ? `${(temp.replace(/c/i, '') * (9 / 5) + 32)} °F / ${(temp.replace(/c/i, '') - (-273.15))} °K` : ((/f/i.test(temp) ? `${((temp.replace(/f/i, '') - 32) / 1.8)} °C / ${(temp.replace(/f/i, '') -32) / 1.8 + 273.15} °K` : `${(temp.replace(/k/i, '') - 273.15)} °C / ${1.8 * (temp.replace(/k/i, '') - 273.15) + 32} °F`)));

export default celsiusFahrenheitKelvin;
