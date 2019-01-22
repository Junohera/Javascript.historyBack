/**
 * utility Code
 */

export default {
  /**********************************************************************************
   * 주민등록번호 마스킹 처리 
   * @param 9011071234567 
   * @return 901107 - 1****** 
   **********************************************************************************/
  MaskingSsn: function(custSsn) {
    let firstSsn = custSsn.substr(0, 6);
    let lastSsn = custSsn.substr(6, 13);
    let Ssn = firstSsn + " - " + lastSsn.replace(/.{6}$/, '******');
    return Ssn;
  },

  /**********************************************************************************
   * addCommas
   * 숫자에 콤마 삽입
   * @param 1000000
   * @returns 1,000,000
   **********************************************************************************/
  addCommas: function(nStr) {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  },
  /**********************************************************************************
   * getTimeCustomFormat
   * 날짜포맷 hpCommonGetTimeCustomFormat("#YYYY#-#MM#-#DD# #hh#:#mm#:#ss#")
   * @param 날짜포맷
   **********************************************************************************/
  getTimeCustomFormat: function(formatString, date) {
    let YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhh, hh, h, mm, m, ss, s, dMod, th, ccc, c;
    let dateObject;
    if (date !== null || typeof(date) !== "undefined") {
      dateObject = date;

    } else {
      dateObject = new Date();
    };

    YY = ((YYYY = dateObject.getFullYear()) + "").slice(-2);
    MM = (M = dateObject.getMonth() + 1) < 10 ? ('0' + M) : M;
    MMM = (MMMM = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][M - 1]).substring(0, 3);
    DD = (D = dateObject.getDate()) < 10 ? ('0' + D) : D;
    DDD = (DDDD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dateObject.getDay()]).substring(0, 3);
    th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) === 1) ? 'st' : (dMod === 2) ? 'nd' : (dMod === 3) ? 'rd' : 'th';
    formatString = formatString.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);

    h = (hhh = dateObject.getHours());
    //if (h==0) h=24;
    //if (h>12) h-=12;
    hh = h < 10 ? ('0' + h) : h;
    //AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
    mm = (m = dateObject.getMinutes()) < 10 ? ('0' + m) : m;
    ss = (s = dateObject.getSeconds()) < 10 ? ('0' + s) : s;
    let mi = dateObject.getMilliseconds();
    ccc = (c = mi) < 10 ? ('00' + c) : ((c = mi) < 100 ? ('0' + c) : c);
    return formatString.replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h).replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s).replace("#ccc#", ccc).replace("#ccc#", c);
  },
  /**********************************************************************************
   * today
   * 오늘 날짜를 리턴
   **********************************************************************************/
  today: function() {
    let now = new Date();
    let year = now.getFullYear();
    let mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
    let day = now.getDate() > 9 ? '' + now.getDate() : '0' + now.getDate();
    return year + mon + day;
  },
  /**********************************************************************************
   * addDate
   * 날짜 더하기
   * @param pInterval 'y':년도, 'm':월, 'd':일
   * @param pAddVal   계산하고자 하는 수
   * @param pYyyymmdd 기준일
   * @returns
   **********************************************************************************/
  addDate: function(pInterval, pAddVal, pYyyymmdd) {
    let yyyy, mm, dd;
    let cDate, cYear, cMonth, cDay;

    yyyy = pYyyymmdd.substr(0, 4);
    mm = pYyyymmdd.substr(4, 2);
    dd = pYyyymmdd.substr(6, 2);

    if (pInterval === "y") {
      yyyy = (yyyy * 1) + (pAddVal * 1);
    } else if (pInterval === "m") {
      mm = (mm * 1) + (pAddVal * 1);
    } else if (pInterval === "d") {
      dd = (dd * 1) + (pAddVal * 1);
    }

    cDate = new Date(yyyy, mm - 1, dd); // 12월, 31일을 초과하는 입력값에 대해 자동으로 계산된 날짜가 만들어짐.
    cYear = cDate.getFullYear();
    cMonth = cDate.getMonth() + 1;
    cDay = cDate.getDate();

    cMonth = cMonth < 10 ? "0" + cMonth : cMonth;
    cDay = cDay < 10 ? "0" + cDay : cDay;
    return "" + cYear + cMonth + cDay;
  },
  /**
   * calculate date
   * @param date
   * @param minus
   * @param plus
   * @param month
   */
  calculDate: function(date, minus, plus, month) {
    let now = new Date();
    let resultDate;
    //일계산
    if (month === null || "".equals(month)) {
      if (!"".equals(date)) now = new Date(date.substring(4, 6) + '/' + date.substring(6, 8) + '/' + date.substring(0, 4));
      let rDate = new Date(now.setDate((now.getDate() - minus + plus)));
      let year = rDate.getFullYear(),
        month = rDate.getMonth() + 1,
        day = rDate.getDate();
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      resultDate = year + "" + month + "" + day;
    } else { //월계산
      if (!"".equals(date)) now = new Date(date.substring(4, 6) + '/' + date.substring(6, 8) + '/' + date.substring(0, 4));
      let rDate = new Date(now.setMonth((now.getMonth() - minus + plus)));
      let year = rDate.getFullYear(),
        month = rDate.getMonth() + 1,
        day = rDate.getDate();
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      resultDate = year + "" + month + "" + day;
    }
    return resultDate;
  },
  /**
   * urlencoded 형태문자열을 JSON형태로 리턴한다.
   */
  searchToJson: function(param) {
    let pairs = param.split("&"),
      obj = {},
      pair;
    for (let i in pairs) {
      if (pairs[i] === "")
        continue;
      pair = pairs[i].split("=");
      obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return obj;
  },
  /**
   * 현재시간 리턴
   * @return string
   */
  getTime: function() {
    return new Date().getTime();
  },
  /**
   * 모바일 브라우저인지 웹브라우저인지 체크하여 boolean값을 리턴한다.
   * @returns boolean
   */
  isMobile: function() {
    let mobileKeyWords = ['iPhone', 'iPad', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson'];
    let isMobile = false;
    for (let word in mobileKeyWords) {
      isMobile = navigator.userAgent.indexOf(mobileKeyWords[word]) !== -1;
      if (isMobile) return true;
    }
    return false;
  },
  /**
   * value가 null, undefiend, empty 인지 비교한다.
   * @param value
   * @returns {Boolean}
   */
  isEmpty: function(value) {
    if (!this.isNotUndefined(value)) {
      return false;
    }
    if (value !== null) {
      if (value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  },
  isString: function(v) {
    return typeof(v) === 'string';
  },
  isObject: function(v) {
    return typeof(v) === 'object';
  },
  isNumber: function(v) {
    let reInteger = /^\d+$/;
    return reInteger.test(v);
  },
  isArray: function(v) {
    if (v && 'object' === typeof v) {
      if (v instanceof Array)
        return true;
    }
    return false;
  },
  isFunction: function(v) {
    return typeof v === "function";
  },
  /**
   * 문자열을 url encode하여 리턴한다.
   * @param str encod될 문자열.
   * @returns
   */
  encode: function(str) {
    let s0, i, s, u;
    s0 = "";
    for (i = 0; i < str.length; i++) {
      s = str.charAt(i);
      u = str.charCodeAt(i);
      if (s === " ") {
        s0 += "+";
      } else {
        if (u === 0x2a || u === 0x2d || u === 0x2e || u === 0x5f || ((u >= 0x30) && (u <= 0x39)) || ((u >= 0x41) && (u <= 0x5a)) || ((u >= 0x61) && (u <= 0x7a))) {
          s0 = s0 + s;
        } else {
          if ((u >= 0x0) && (u <= 0x7f)) {
            s = "0" + u.toString(16);
            s0 += "%" + s.substr(s.length - 2);
          } else if (u > 0x1fffff) {
            s0 += "%" + (0xf0 + ((u & 0x1c0000) >> 18)).toString(16);
            s0 += "%" + (0x80 + ((u & 0x3f000) >> 12)).toString(16);
            s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
            s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
          } else if (u > 0x7ff) {
            s0 += "%" + (0xe0 + ((u & 0xf000) >> 12)).toString(16);
            s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
            s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
          } else {
            s0 += "%" + (0xc0 + ((u & 0x7c0) >> 6)).toString(16);
            s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
          }
        }
      }
    }
    return s0;
  },
  /**
   * encode된 문자열을 decode하여 리턴한다. 
   * @param str 문자열
   * @return
   */
  decode: function(str) {
    let s0, i, j, s, ss, u, n, f;
    s0 = "";
    for (i = 0; i < str.length; i++) {
      s = str.charAt(i);
      if (s === "+") {
        s0 += " ";
      } else {
        if (s !== "%") {
          s0 += s;
        } else {
          u = 0;
          f = 1;
          while (true) {
            ss = "";
            for (j = 0; j < 2; j++) {
              let sss = str.charAt(++i);
              if (((sss >= "0") && (sss <= "9")) || ((sss >= "a") && (sss <= "f")) || ((sss >= "A") && (sss <= "F"))) {
                ss += sss;
              } else {
                --i;
                break;
              }
            }
            n = parseInt(ss, 16);
            if (n <= 0x7f) {
              u = n;
              f = 1;
            }
            if ((n >= 0xc0) && (n <= 0xdf)) {
              u = n & 0x1f;
              f = 2;
            }
            if ((n >= 0xe0) && (n <= 0xef)) {
              u = n & 0x0f;
              f = 3;
            }
            if ((n >= 0xf0) && (n <= 0xf7)) {
              u = n & 0x07;
              f = 4;
            }
            if ((n >= 0x80) && (n <= 0xbf)) {
              u = (u << 6) + (n & 0x3f);
              --f;
            }
            if (f <= 1) {
              break;
            }
            if (str.charAt(i + 1) === "%") {
              i++;
            } else {
              break;
            }
          }
          s0 += String.fromCharCode(u);
        }
      }
    }
    return s0;
  },
  values: function(object) {

    let arr = [];

    if (this.isObject(object)) {
      let keys = Object.keys(object);

      for (let i = 0; i < keys.length; i++) {
        arr.push(object[keys[i]]);
      }
    }

    return arr;

  }
}