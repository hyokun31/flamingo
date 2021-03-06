/**
 * HashMap 구현 Javascript 클래스
 *
 * @class
 *
 * @example
 * var map1 = new OG.common.HashMap({
 *     'key1': 'value1',
 *     'key2': 'value2'
 * });
 *
 * console.log(map1.get('key1'));
 *
 * var map2 = new OG.common.HashMap();
 * map2.put('key1', 'value1');
 * map2.put('key2', 'value2');
 *
 * console.log(map2.get('key1'));
 *
 * @param {Object} jsonObject key:value 매핑 JSON 오브젝트
 * @author <a href="mailto:sppark@uengine.org">Seungpil Park</a>
 */
OG.common.HashMap = function (jsonObject) {
	/**
	 * key:value 매핑 JSON 오브젝트
	 * @type Object
	 */
	this.map = jsonObject || {};
};
OG.common.HashMap.prototype = {
	/**
	 * key : value 를 매핑한다.
	 *
	 * @param {String} key 키
	 * @param {Object} value 값
	 */
	put: function (key, value) {
		this.map[key] = value;
	},

	/**
	 * key 에 대한 value 를 반환한다.
	 *
	 * @param {String} key 키
	 * @return {Object} 값
	 */
	get: function (key) {
		return this.map[key];
	},

	/**
	 * 주어진 key 를 포함하는지 여부를 반환한다.
	 *
	 * @param {String} key 키
	 * @return {Boolean}
	 */
	containsKey: function (key) {
		return this.map.hasOwnProperty(key);
	},

	/**
	 * 주어진 value 를 포함하는지 여부를 반환한다.
	 *
	 * @param {Object} value 값
	 * @return {Boolean}
	 */
	containsValue: function (value) {
		var prop;
		for (prop in this.map) {
			if (this.map[prop] === value) {
				return true;
			}
		}
		return false;
	},

	/**
	 * Empty 여부를 반환한다.
	 *
	 * @return {Boolean}
	 */
	isEmpty: function () {
		return this.size() === 0;
	},

	/**
	 * 매핑정보를 클리어한다.
	 */
	clear: function () {
		var prop;
		for (prop in this.map) {
			delete this.map[prop];
		}
	},

	/**
	 * 주어진 key 의 매핑정보를 삭제한다.
	 *
	 * @param {String} key 키
	 */
	remove: function (key) {
		if (this.map[key]) {
			delete this.map[key];
		}
	},

	/**
	 * key 목록을 반환한다.
	 *
	 * @return {String[]} 키목록
	 */
	keys: function () {
		var keys = [], prop;
		for (prop in this.map) {
			keys.push(prop);
		}
		return keys;
	},

	/**
	 * value 목록을 반환한다.
	 *
	 * @return {Object[]} 값목록
	 */
	values: function () {
		var values = [], prop;
		for (prop in this.map) {
			values.push(this.map[prop]);
		}
		return values;
	},

	/**
	 * 매핑된 key:value 갯수를 반환한다.
	 *
	 * @return {Number}
	 */
	size: function () {
		var count = 0, prop;
		for (prop in this.map) {
			count++;
		}
		return count;
	},

	/**
	 * 객체 프라퍼티 정보를 JSON 스트링으로 반환한다.
	 *
	 * @return {String} 프라퍼티 정보
	 * @override
	 */
	toString: function () {
		var s = [], prop;
		for (prop in this.map) {
			s.push("'" + prop + "':'" + this.map[prop] + "'");
		}

		return "{" + s.join() + "}";
	}
};
OG.common.HashMap.prototype.constructor = OG.common.HashMap;
OG.HashMap = OG.common.HashMap;