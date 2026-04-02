(function(){
'use strict';
var $p;
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.g() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.vp();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.vj(x0);
  }
}
function $dp_compareTo__O__I(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__compareTo__O__I(instance, x0);
    }
    case "number": {
      return $f_jl_Double__compareTo__O__I(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__compareTo__O__I(instance, x0);
    }
    default: {
      if ((instance instanceof $Long)) {
        return $f_jl_Long__compareTo__O__I(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__compareTo__O__I(instance.c, x0);
      } else {
        return instance.vk(x0);
      }
    }
  }
}
function $dp_compareTo__T__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__compareTo__T__I(instance, x0);
  } else {
    return instance.vl(x0);
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.p(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.p.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.x();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.x.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.vq(x0);
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.vs(x0);
  }
}
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1);
  } else {
    return instance.vu(x0, x1);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $dp_trim__T(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__trim__T(instance);
  } else {
    return instance.vw();
  }
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
function $ct_O__($thiz) {
  return $thiz;
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.p = (function(that) {
  return (this === that);
});
$p.u = (function() {
  var i = this.x();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.u();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.v = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.g = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.v = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.g = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.v = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.v = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.v = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.v = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.v = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.g = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.v = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.v = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.g = (function() {
  return new $ac_D(this.a.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    C: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.a;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.v = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.g = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    C: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
var $d_Lcom_raquo_airstream_core_InternalObserver = new $TypeData().i(1, "com.raquo.airstream.core.InternalObserver", ({
  aI: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).kJ() + "@") + $thiz.x());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.eD();
  return ((x === (void 0)) ? $thiz.ex() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().re(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))), $m_s_PartialFunction$().hM, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.re = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.th = (function(onTry, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTry, handleObserverErrors, this);
});
var $d_Lcom_raquo_airstream_core_Observer$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$, "com.raquo.airstream.core.Observer$", ({
  cR: 1
}));
var $n_Lcom_raquo_airstream_core_Observer$;
function $m_Lcom_raquo_airstream_core_Observer$() {
  if ((!$n_Lcom_raquo_airstream_core_Observer$)) {
    $n_Lcom_raquo_airstream_core_Observer$ = new $c_Lcom_raquo_airstream_core_Observer$();
  }
  return $n_Lcom_raquo_airstream_core_Observer$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_ObserverList$() {
}
$p = $c_Lcom_raquo_airstream_core_ObserverList$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_ObserverList$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_ObserverList$() {
}
$h_Lcom_raquo_airstream_core_ObserverList$.prototype = $p;
$p.qG = (function(this$, observer) {
  var index = (this$.indexOf(observer) | 0);
  var shouldRemove = (index !== (-1));
  if (shouldRemove) {
    this$.splice(index, 1);
  }
  return shouldRemove;
});
var $d_Lcom_raquo_airstream_core_ObserverList$ = new $TypeData().i($c_Lcom_raquo_airstream_core_ObserverList$, "com.raquo.airstream.core.ObserverList$", ({
  cU: 1
}));
var $n_Lcom_raquo_airstream_core_ObserverList$;
function $m_Lcom_raquo_airstream_core_ObserverList$() {
  if ((!$n_Lcom_raquo_airstream_core_ObserverList$)) {
    $n_Lcom_raquo_airstream_core_ObserverList$ = new $c_Lcom_raquo_airstream_core_ObserverList$();
  }
  return $n_Lcom_raquo_airstream_core_ObserverList$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Signal$() {
  this.fp = 0;
  this.fp = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.qq = (function() {
  if ((this.fp === 2147483647)) {
    this.fp = 1;
  } else {
    this.fp = ((1 + this.fp) | 0);
  }
  return this.fp;
});
var $d_Lcom_raquo_airstream_core_Signal$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Signal$, "com.raquo.airstream.core.Signal$", ({
  cV: 1
}));
var $n_Lcom_raquo_airstream_core_Signal$;
function $m_Lcom_raquo_airstream_core_Signal$() {
  if ((!$n_Lcom_raquo_airstream_core_Signal$)) {
    $n_Lcom_raquo_airstream_core_Signal$ = new $c_Lcom_raquo_airstream_core_Signal$();
  }
  return $n_Lcom_raquo_airstream_core_Signal$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction(code) {
  this.iK = null;
  this.lh = null;
  this.iL = 0;
  this.iK = code;
  this.lh = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().ho();
  this.iL = ((x === (void 0)) ? 1 : ((1 + x.iL) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().ht === (-1)) || (this.iL > $m_Lcom_raquo_airstream_core_Transaction$().ht))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().d2(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().ht));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bp) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().eK.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kc(this);
  }
}
$p = $c_Lcom_raquo_airstream_core_Transaction.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction() {
}
$h_Lcom_raquo_airstream_core_Transaction.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction, "com.raquo.airstream.core.Transaction", ({
  cW: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$() {
  this.ht = 0;
  this.li = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.ht = 1000;
  this.li = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.pw = (function(transaction) {
  try {
    transaction.iK.e(transaction);
    var x = transaction.lh;
    if ((x !== (void 0))) {
      while (x.vr()) {
        x.vm().vv(transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().d2(e$2);
  }
});
var $d_Lcom_raquo_airstream_core_Transaction$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$, "com.raquo.airstream.core.Transaction$", ({
  cX: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$;
function $m_Lcom_raquo_airstream_core_Transaction$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$)) {
    $n_Lcom_raquo_airstream_core_Transaction$ = new $c_Lcom_raquo_airstream_core_Transaction$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$;
}
function $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V($thiz) {
  if ((($thiz.hu.length | 0) === 0)) {
    if ((($thiz.eK.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
        while ((($thiz.eK.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kc($thiz.eK.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      while ((($thiz.hu.length | 0) > 0)) {
        var callback = $thiz.hu.shift();
        try {
          callback.e(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().d2(e$2);
        }
      }
      while ((($thiz.eK.length | 0) > 0)) {
        var _trx = $thiz.eK.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().kc(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bp = false;
  this.hu = null;
  this.eK = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bp = false;
  this.hu = $m_Lcom_raquo_ew_JsArray$().cS($m_sr_ScalaRunTime$().cJ(new ($d_F1.r().C)([])));
  this.eK = $m_Lcom_raquo_ew_JsArray$().cS($m_sr_ScalaRunTime$().cJ(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$onStart$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$onStart$() {
}
$h_Lcom_raquo_airstream_core_Transaction$onStart$.prototype = $p;
var $d_Lcom_raquo_airstream_core_Transaction$onStart$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$onStart$, "com.raquo.airstream.core.Transaction$onStart$", ({
  cY: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$onStart$;
function $m_Lcom_raquo_airstream_core_Transaction$onStart$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$onStart$)) {
    $n_Lcom_raquo_airstream_core_Transaction$onStart$ = new $c_Lcom_raquo_airstream_core_Transaction$onStart$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$onStart$;
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, transaction) {
  return $thiz.eL.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.hv.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.hv.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().cS($m_sr_ScalaRunTime$().cJ(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.eL.set(parent, newChildren);
  }
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O($thiz, parent) {
  var maybeParentChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var x = (((maybeParentChildren === (void 0)) || ((maybeParentChildren.length | 0) > 0)) ? maybeParentChildren : (void 0));
  if ((x === (void 0))) {
    return (void 0);
  } else {
    var nextChild = x.shift();
    if (((x.length | 0) === 0)) {
      (!(!$thiz.eL.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.hv = null;
  this.eL = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.hv = $m_Lcom_raquo_ew_JsArray$().cS($m_sr_ScalaRunTime$().cJ(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.eL = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.kc = (function(newTransaction) {
  var x = this.ho();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().pw(newTransaction);
    this.sS(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.sS = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.ho();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().l(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.uh(transaction$tailLocal1);
    transaction$tailLocal1.iK = $m_Lcom_raquo_airstream_core_Transaction$().li;
    var maybeNextTransaction = this.ho();
    if ($m_sr_BoxesRunTime$().l(maybeNextTransaction, (void 0))) {
      if (((this.eL.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.eL.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.ay + (transactions.length | 0)) | 0);
          numChildren.ay = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.ay) + " children for ") + (this.eL.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().pw(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.uh = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().l(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.ho();
      if ((!$m_sr_BoxesRunTime$().l(maybeParentTransaction, (void 0)))) {
        doneTransaction$tailLocal1 = maybeParentTransaction;
      } else {
        return (void 0);
      }
    } else {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, maybeNextChildTrx);
      return (void 0);
    }
  }
});
$p.ho = (function() {
  return this.hv[0];
});
var $d_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $TypeData().i($c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$, "com.raquo.airstream.core.Transaction$pendingTransactions$", ({
  cZ: 1
}));
var $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
function $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  if ((!$n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$)) {
    $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = new $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$();
  }
  return $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$Config(onWillStart, onStart, onStop) {
  this.lm = null;
  this.lk = null;
  this.ll = null;
  this.lm = onWillStart;
  this.lk = onStart;
  this.ll = onStop;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config.prototype = $p;
var $d_Lcom_raquo_airstream_custom_CustomSource$Config = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config, "com.raquo.airstream.custom.CustomSource$Config", ({
  d2: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$Config$() {
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$Config$;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$Config$() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$Config$.prototype = $p;
$p.sf = (function(onStart, onStop) {
  return new $c_Lcom_raquo_airstream_custom_CustomSource$Config(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => (void 0))), onStart, onStop);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$Config$, "com.raquo.airstream.custom.CustomSource$Config$", ({
  d3: 1
}));
var $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
function $m_Lcom_raquo_airstream_custom_CustomSource$Config$() {
  if ((!$n_Lcom_raquo_airstream_custom_CustomSource$Config$)) {
    $n_Lcom_raquo_airstream_custom_CustomSource$Config$ = new $c_Lcom_raquo_airstream_custom_CustomSource$Config$();
  }
  return $n_Lcom_raquo_airstream_custom_CustomSource$Config$;
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, subscription) {
  var index = ($thiz.e5.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.e5.splice(index, 1);
    if ((!$thiz.c1.c())) {
      subscription.qu();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.hz.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.hz.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.lS = null;
  this.e5 = null;
  this.fq = false;
  this.hz = null;
  this.c1 = null;
  this.fr = 0;
  this.lS = onAccessAfterKilled;
  this.e5 = $m_Lcom_raquo_ew_JsArray$().cS($m_sr_ScalaRunTime$().cJ(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.fq = true;
  this.hz = $m_Lcom_raquo_ew_JsArray$().cS($m_sr_ScalaRunTime$().cJ(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.c1 = $m_s_None$();
  this.fr = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.pg = (function() {
  if ((!(!this.c1.c()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.lS);
      this.c1 = new $c_s_Some(newOwner);
      this.fq = false;
      this.fr = 0;
      var i = 0;
      var originalNumSubs = (this.e5.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.fr) | 0);
        this.e5[ix].qt(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.fq = true;
      this.fr = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.bp || (!when))) {
      f();
    } else {
      this$4.bp = true;
      try {
        f();
      } finally {
        this$4.bp = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.sK = (function() {
  if ((!this.c1.c())) {
    this.fq = false;
    var arr = this.e5;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].qu();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.c1;
    if ((!this$4.c())) {
      this$4.A().qj();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.fq = true;
    this.c1 = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.s8 = (function(subscription, prepend) {
  if (prepend) {
    this.fr = ((1 + this.fr) | 0);
    this.e5.unshift(subscription);
  } else {
    this.e5.push(subscription);
  }
  var this$1 = this.c1;
  if ((!this$1.c())) {
    var x0 = this$1.A();
    subscription.qt(x0);
  }
});
$p.us = (function(subscription) {
  if (this.fq) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.hz.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  d8: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.hA = null;
  this.lT = null;
  this.hB = null;
  this.hA = dynamicOwner;
  this.lT = activate;
  this.hB = $m_s_None$();
  dynamicOwner.s8(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.iu = (function() {
  this.hA.us(this);
});
$p.qt = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.hB = this.lT.e(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bp || (!when))) {
    f();
  } else {
    this$2.bp = true;
    try {
      f();
    } finally {
      this$2.bp = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.qu = (function() {
  var this$1 = this.hB;
  if ((!this$1.c())) {
    this$1.A().iu();
    this.hB = $m_s_None$();
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription, "com.raquo.airstream.ownership.DynamicSubscription", ({
  d9: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription$;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription$.prototype = $p;
$p.iG = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => new $c_s_Some(activate.e(owner)))), prepend);
});
$p.qZ = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => {
    activate.e(owner);
    return $m_s_None$();
  })), prepend);
});
var $d_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicSubscription$, "com.raquo.airstream.ownership.DynamicSubscription$", ({
  da: 1
}));
var $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
function $m_Lcom_raquo_airstream_ownership_DynamicSubscription$() {
  if ((!$n_Lcom_raquo_airstream_ownership_DynamicSubscription$)) {
    $n_Lcom_raquo_airstream_ownership_DynamicSubscription$ = new $c_Lcom_raquo_airstream_ownership_DynamicSubscription$();
  }
  return $n_Lcom_raquo_airstream_ownership_DynamicSubscription$;
}
function $f_Lcom_raquo_airstream_ownership_Owner__$init$__V($thiz) {
  $thiz.px($m_Lcom_raquo_ew_JsArray$().cS($m_sr_ScalaRunTime$().cJ(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.ge();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.ge().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.ge().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.ge().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.ge().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.iU)) {
    $thiz.lW.I();
    $thiz.iU = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.lX = null;
  this.lW = null;
  this.iU = false;
  this.lX = owner;
  this.lW = cleanup;
  this.iU = false;
  owner.qy(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.iu = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.lX, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  dc: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.lY = null;
  this.lZ = null;
  this.e6 = null;
  this.eM = false;
  this.lY = activate;
  this.lZ = deactivate;
  this.e6 = $m_s_None$();
  this.eM = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.tD = (function() {
  var this$1 = this.e6;
  return ((!this$1.c()) && (!this$1.A().hA.c1.c()));
});
$p.uN = (function(nextOwner) {
  if (this.eM) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.e6;
  if ((!this$1.c())) {
    var x0 = this$1.A();
    var x$2 = x0.hA;
    var $x_1 = ((nextOwner === null) ? (x$2 === null) : (nextOwner === x$2));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.tD() && (!nextOwner.c1.c()))) {
      this.eM = true;
    }
    var this$3 = this.e6;
    if ((!this$3.c())) {
      this$3.A().iu();
      this.e6 = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iG(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((parentOwner) => {
      if ((!this.eM)) {
        this.lY.I();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        if ((!this.eM)) {
          this.lZ.I();
        }
      })));
    })), false);
    this.e6 = new $c_s_Some(newPilotSubscription);
    this.eM = false;
  }
});
$p.sw = (function() {
  if (this.eM) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.e6;
  if ((!this$1.c())) {
    this$1.A().iu();
  }
  this.e6 = $m_s_None$();
});
var $d_Lcom_raquo_airstream_ownership_TransferableSubscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_TransferableSubscription, "com.raquo.airstream.ownership.TransferableSubscription", ({
  dd: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$() {
}
$p = $c_Lcom_raquo_airstream_state_Var$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$() {
}
$h_Lcom_raquo_airstream_state_Var$.prototype = $p;
$p.pt = (function(initial) {
  return new $c_Lcom_raquo_airstream_state_SourceVar(new $c_s_util_Success(initial));
});
var $d_Lcom_raquo_airstream_state_Var$ = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$, "com.raquo.airstream.state.Var$", ({
  dh: 1
}));
var $n_Lcom_raquo_airstream_state_Var$;
function $m_Lcom_raquo_airstream_state_Var$() {
  if ((!$n_Lcom_raquo_airstream_state_Var$)) {
    $n_Lcom_raquo_airstream_state_Var$ = new $c_Lcom_raquo_airstream_state_Var$();
  }
  return $n_Lcom_raquo_airstream_state_Var$;
}
/** @constructor */
function $c_Lcom_raquo_airstream_web_DomEventStream$() {
}
$p = $c_Lcom_raquo_airstream_web_DomEventStream$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_web_DomEventStream$;
/** @constructor */
function $h_Lcom_raquo_airstream_web_DomEventStream$() {
}
$h_Lcom_raquo_airstream_web_DomEventStream$.prototype = $p;
$p.se = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().q5(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().sf(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      eventTarget.addEventListener(eventKey, eventHandler, useCapture);
    })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      eventTarget.removeEventListener(eventKey, eventHandler, useCapture);
    })));
  })));
});
var $d_Lcom_raquo_airstream_web_DomEventStream$ = new $TypeData().i($c_Lcom_raquo_airstream_web_DomEventStream$, "com.raquo.airstream.web.DomEventStream$", ({
  dk: 1
}));
var $n_Lcom_raquo_airstream_web_DomEventStream$;
function $m_Lcom_raquo_airstream_web_DomEventStream$() {
  if ((!$n_Lcom_raquo_airstream_web_DomEventStream$)) {
    $n_Lcom_raquo_airstream_web_DomEventStream$ = new $c_Lcom_raquo_airstream_web_DomEventStream$();
  }
  return $n_Lcom_raquo_airstream_web_DomEventStream$;
}
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$() {
}
$p = $c_Lcom_raquo_ew_JsArray$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_ew_JsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$() {
}
$h_Lcom_raquo_ew_JsArray$.prototype = $p;
$p.cS = (function(items) {
  return [...$m_sjsr_Compat$().v8(items)];
});
var $d_Lcom_raquo_ew_JsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$, "com.raquo.ew.JsArray$", ({
  dl: 1
}));
var $n_Lcom_raquo_ew_JsArray$;
function $m_Lcom_raquo_ew_JsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$)) {
    $n_Lcom_raquo_ew_JsArray$ = new $c_Lcom_raquo_ew_JsArray$();
  }
  return $n_Lcom_raquo_ew_JsArray$;
}
/** @constructor */
function $c_Lcom_raquo_ew_JsArray$RichJsArray$() {
}
$p = $c_Lcom_raquo_ew_JsArray$RichJsArray$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_ew_JsArray$RichJsArray$;
/** @constructor */
function $h_Lcom_raquo_ew_JsArray$RichJsArray$() {
}
$h_Lcom_raquo_ew_JsArray$RichJsArray$.prototype = $p;
$p.t6 = (function(this$, cb) {
  var i = 0;
  var len = (this$.length | 0);
  while ((i < len)) {
    cb(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_Lcom_raquo_ew_JsArray$RichJsArray$ = new $TypeData().i($c_Lcom_raquo_ew_JsArray$RichJsArray$, "com.raquo.ew.JsArray$RichJsArray$", ({
  dm: 1
}));
var $n_Lcom_raquo_ew_JsArray$RichJsArray$;
function $m_Lcom_raquo_ew_JsArray$RichJsArray$() {
  if ((!$n_Lcom_raquo_ew_JsArray$RichJsArray$)) {
    $n_Lcom_raquo_ew_JsArray$RichJsArray$ = new $c_Lcom_raquo_ew_JsArray$RichJsArray$();
  }
  return $n_Lcom_raquo_ew_JsArray$RichJsArray$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_DomApi$() {
  this.ma = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.pK($m_Lcom_raquo_laminar_api_package$().n.bo().l5());
  this.ma = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.s9 = (function(parent, child) {
  try {
    parent.appendChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.a0 instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
  }
});
$p.uo = (function(parent, child) {
  try {
    parent.removeChild(child);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.a0 instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
  }
});
$p.tA = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.a0 instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
  }
});
$p.tz = (function(parent, newChild, referenceChild) {
  try {
    parent.insertBefore(newChild, referenceChild.nextSibling);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.a0 instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
  }
});
$p.uv = (function(parent, newChild, oldChild) {
  try {
    parent.replaceChild(newChild, oldChild);
    return true;
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (((e$2 instanceof $c_sjs_js_JavaScriptException) && (!(!(e$2.a0 instanceof DOMException))))) {
      return false;
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
  }
});
$p.tI = (function(node, ancestor) {
  var node$tailLocal1 = node;
  while (true) {
    if ((node$tailLocal1.parentNode !== null)) {
      var effectiveParentNode = node$tailLocal1.parentNode;
    } else {
      var maybeShadowHost = node$tailLocal1.host;
      var effectiveParentNode = ((maybeShadowHost === (void 0)) ? null : maybeShadowHost);
    }
    if ((effectiveParentNode === null)) {
      return false;
    }
    if ($m_sr_BoxesRunTime$().l(ancestor, effectiveParentNode)) {
      return true;
    }
    node$tailLocal1 = effectiveParentNode;
  }
});
$p.rX = (function(element, listener) {
  element.addEventListener(listener.ft.fs.gn, listener.jd, listener.je);
});
$p.up = (function(element, listener) {
  element.removeEventListener(listener.ft.fs.gn, listener.jd, listener.je);
});
$p.sI = (function(tag) {
  return document.createElement(tag.jm);
});
$p.tk = (function(element, attr) {
  var x = this.tl(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.j8.kr(x));
});
$p.tl = (function(element, attr) {
  var domValue = element.d4.getAttributeNS(null, attr.go);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.qP = (function(element, attr, value) {
  this.uJ(element, attr, attr.j8.ii(value));
});
$p.uJ = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.uq(element, attr);
  } else {
    element.d4.setAttribute(attr.go, domValue);
  }
});
$p.uq = (function(element, attr) {
  element.d4.removeAttribute(attr.go);
});
$p.uK = (function(element, prop, value) {
  this.uL(element, prop, prop.nh.ii(value));
});
$p.uL = (function(element, prop, value) {
  element.d4[prop.ni] = value;
});
$p.uM = (function(element, styleProp, value) {
  var ref = element.d4;
  var styleCssName = styleProp.eR;
  var prefixes = styleProp.eS;
  var styleValue = ((value === null) ? null : value);
  if ((styleValue === null)) {
    prefixes.bW(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.bW(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.pK = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.jn);
});
$p.to = (function(element, attr) {
  var x = this.tp(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.j9.kr(x));
});
$p.tp = (function(element, attr) {
  var $x_2 = element.e8;
  var this$1 = attr.hF;
  var $x_1 = $x_2.getAttributeNS((this$1.c() ? null : this$1.A()), attr.ja);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.qQ = (function(element, attr, value) {
  this.uQ(element, attr, attr.j9.ii(value));
});
$p.uQ = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.ut(element, attr);
  } else {
    var this$1 = attr.hF;
    if (this$1.c()) {
      element.e8.setAttribute(attr.hE, domValue);
    } else {
      var x0 = this$1.A();
      element.e8.setAttributeNS(x0, attr.hE, domValue);
    }
  }
});
$p.ut = (function(element, attr) {
  var $x_1 = element.e8;
  var this$1 = attr.hF;
  $x_1.removeAttributeNS((this$1.c() ? null : this$1.A()), attr.ja);
});
$p.sH = (function(text) {
  return document.createComment(text);
});
$p.sJ = (function(text) {
  return document.createTextNode(text);
});
$p.tE = (function(element) {
  return $m_sc_StringOps$().sz(element.tagName, 45);
});
$p.tq = (function(element) {
  if ((!(!(element instanceof HTMLInputElement)))) {
    return element.value;
  } else if ((!(!(element instanceof HTMLTextAreaElement)))) {
    return element.value;
  } else if ((!(!(element instanceof HTMLSelectElement)))) {
    return element.value;
  } else if ((!(!(element instanceof HTMLButtonElement)))) {
    return element.value;
  } else if ((!(!(element instanceof HTMLOptionElement)))) {
    return element.value;
  } else if (this.tE(element)) {
    var x = element.value;
    new $c_Lcom_raquo_laminar_DomApi$$anon$2(this);
    return ((x === (void 0)) ? (void 0) : (((typeof x) === "string") ? x : (void 0)));
  } else {
    return (void 0);
  }
});
$p.sN = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.sL(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.sL = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if (($m_sc_StringOps$(), (id !== ""))) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = (($m_sc_StringOps$(), (classes !== "")) ? ("." + classes.replace(this.ma, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.sM = (function(node) {
  return ((!(!(node instanceof Element))) ? node.outerHTML : ((!(!(node instanceof Text))) ? (("Text(" + node.textContent) + ")") : ((!(!(node instanceof Comment))) ? (("Comment(" + node.textContent) + ")") : ((node === null) ? "<null>" : (("OtherNode(" + $dp_toString__T(node)) + ")")))));
});
var $d_Lcom_raquo_laminar_DomApi$ = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$, "com.raquo.laminar.DomApi$", ({
  dn: 1
}));
var $n_Lcom_raquo_laminar_DomApi$;
function $m_Lcom_raquo_laminar_DomApi$() {
  if ((!$n_Lcom_raquo_laminar_DomApi$)) {
    $n_Lcom_raquo_laminar_DomApi$ = new $c_Lcom_raquo_laminar_DomApi$();
  }
  return $n_Lcom_raquo_laminar_DomApi$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_Seq(seq, scalaArray, jsArray) {
  this.j1 = null;
  this.mb = null;
  this.j0 = null;
  this.j1 = seq;
  this.mb = scalaArray;
  this.j0 = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.bW = (function(f) {
  if ((this.j1 !== null)) {
    this.j1.bW(f);
  } else if ((this.j0 !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().t6(this.j0, $m_sjs_js_Any$().q5(f));
  } else {
    $m_sc_ArrayOps$().t8(this.mb, f);
  }
});
var $d_Lcom_raquo_laminar_Seq = new $TypeData().i($c_Lcom_raquo_laminar_Seq, "com.raquo.laminar.Seq", ({
  dq: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_Seq$() {
  $n_Lcom_raquo_laminar_Seq$ = this;
  $m_sci_Nil$();
}
$p = $c_Lcom_raquo_laminar_Seq$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq$;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq$() {
}
$h_Lcom_raquo_laminar_Seq$.prototype = $p;
var $d_Lcom_raquo_laminar_Seq$ = new $TypeData().i($c_Lcom_raquo_laminar_Seq$, "com.raquo.laminar.Seq$", ({
  dr: 1
}));
var $n_Lcom_raquo_laminar_Seq$;
function $m_Lcom_raquo_laminar_Seq$() {
  if ((!$n_Lcom_raquo_laminar_Seq$)) {
    $n_Lcom_raquo_laminar_Seq$ = new $c_Lcom_raquo_laminar_Seq$();
  }
  return $n_Lcom_raquo_laminar_Seq$;
}
function $f_Lcom_raquo_laminar_api_AirstreamAliases__$init$__V($thiz) {
  $m_Lcom_raquo_airstream_core_Observer$();
  $m_Lcom_raquo_airstream_core_AirstreamError$();
  $thiz.j2 = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.ri = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    _$1.nj.d4.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cd().c1.c()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((c) => {
      if (ignoreNextActivation.i0) {
        var ev$5 = false;
        ignoreNextActivation.i0 = ev$5;
      } else {
        fn.e(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().qZ(element.cd(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((owner) => {
      activate.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element$2, owner));
    }))(element)), false);
  })), $m_Lcom_raquo_laminar_modifiers_Modifier$());
}
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$() {
  this.dx = null;
  $n_Lcom_raquo_laminar_codecs_package$ = this;
  this.dx = new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
  new $c_Lcom_raquo_laminar_codecs_package$$anon$2($m_Lcom_raquo_laminar_codecs_package$());
}
$p = $c_Lcom_raquo_laminar_codecs_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$() {
}
$h_Lcom_raquo_laminar_codecs_package$.prototype = $p;
var $d_Lcom_raquo_laminar_codecs_package$ = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$, "com.raquo.laminar.codecs.package$", ({
  dB: 1
}));
var $n_Lcom_raquo_laminar_codecs_package$;
function $m_Lcom_raquo_laminar_codecs_package$() {
  if ((!$n_Lcom_raquo_laminar_codecs_package$)) {
    $n_Lcom_raquo_laminar_codecs_package$ = new $c_Lcom_raquo_laminar_codecs_package$();
  }
  return $n_Lcom_raquo_laminar_codecs_package$;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V($thiz) {
  $thiz.mB = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.j3 = $thiz.mB;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__dataAttr__T__Lcom_raquo_laminar_keys_HtmlAttr($thiz, suffix) {
  return new $c_Lcom_raquo_laminar_keys_HtmlAttr(("data-" + suffix), $m_Lcom_raquo_laminar_codecs_package$().dx);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().dx);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.go, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().tk(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().qP(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.rh = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().dx, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.hE, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().to(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().qQ(el$2, attr, value);
  })), separator);
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_ChildInserter$() {
}
$p = $c_Lcom_raquo_laminar_inserters_ChildInserter$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_ChildInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_ChildInserter$() {
}
$h_Lcom_raquo_laminar_inserters_ChildInserter$.prototype = $p;
$p.sa = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, hooks) => {
    if ((!ctx.eQ)) {
      ctx.ik();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.v5(maybeLastSeenChild.D, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.D = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.v5 = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.eQ)) {
    ctx.ik();
  }
  var elem = ctx.e7;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().l(maybeLastSeenChild.L(), ctx.eP.L().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().ir(ctx.eO, newChildNode, ctx.eP, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().uu(ctx.eO, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = ((elem$1 - 1) | 0);
    elem$1 = ev$4;
  }
  ctx.ur(newChildNode);
  ctx.dy.clear();
  ctx.dy.set(newChildNode.L(), newChildNode);
  ctx.e7 = 1;
});
var $d_Lcom_raquo_laminar_inserters_ChildInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildInserter$, "com.raquo.laminar.inserters.ChildInserter$", ({
  e0: 1
}));
var $n_Lcom_raquo_laminar_inserters_ChildInserter$;
function $m_Lcom_raquo_laminar_inserters_ChildInserter$() {
  if ((!$n_Lcom_raquo_laminar_inserters_ChildInserter$)) {
    $n_Lcom_raquo_laminar_inserters_ChildInserter$ = new $c_Lcom_raquo_laminar_inserters_ChildInserter$();
  }
  return $n_Lcom_raquo_laminar_inserters_ChildInserter$;
}
function $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I($thiz, prevChildren, nextChildren, nextChildrenMap, parentNode, sentinelNode, prevChildrenCount, hooks) {
  var index = new $c_sr_IntRef(0);
  var currentChildrenCount = new $c_sr_IntRef(prevChildrenCount);
  var prevChildRef = new $c_sr_ObjectRef(sentinelNode.L().nextSibling);
  var lastIndexChild = new $c_sr_ObjectRef(sentinelNode);
  nextChildren.bW(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextChild) => {
    if ((currentChildrenCount.ay <= index.ay)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().ir(parentNode, nextChild, lastIndexChild.D, hooks);
      var ev$2 = nextChild.L();
      prevChildRef.D = ev$2;
      ev$2 = null;
      var ev$3 = ((1 + currentChildrenCount.ay) | 0);
      currentChildrenCount.ay = ev$3;
    } else if ((!$m_sr_BoxesRunTime$().l(nextChild.L(), prevChildRef.D))) {
      if ((!(!(!prevChildren.has(nextChild.L()))))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().ir(parentNode, nextChild, lastIndexChild.D, hooks);
        var ev$4 = nextChild.L();
        prevChildRef.D = ev$4;
        ev$4 = null;
        var ev$5 = ((1 + currentChildrenCount.ay) | 0);
        currentChildrenCount.ay = ev$5;
      } else {
        while (((!$m_sr_BoxesRunTime$().l(nextChild.L(), prevChildRef.D)) && (!$p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, prevChildRef.D)))) {
          var nextPrevChildRef = prevChildRef.D.nextSibling;
          $m_Lcom_raquo_laminar_nodes_ParentNode$().l0(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.D));
          var ev$6 = nextPrevChildRef;
          prevChildRef.D = ev$6;
          ev$6 = null;
          var ev$7 = ((currentChildrenCount.ay - 1) | 0);
          currentChildrenCount.ay = ev$7;
        }
        if ((!$m_sr_BoxesRunTime$().l(nextChild.L(), prevChildRef.D))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().ir(parentNode, nextChild, lastIndexChild.D, hooks);
          var ev$8 = nextChild.L();
          prevChildRef.D = ev$8;
          ev$8 = null;
        }
      }
    }
    if ((prevChildRef.D.nextSibling === null)) {
      var ev$9 = ((1 + index.ay) | 0);
      currentChildrenCount.ay = ev$9;
    } else {
      var ev$10 = prevChildRef.D.nextSibling;
      prevChildRef.D = ev$10;
      ev$10 = null;
    }
    var ev$11 = nextChild;
    lastIndexChild.D = ev$11;
    ev$11 = null;
    var ev$12 = ((1 + index.ay) | 0);
    index.ay = ev$12;
  })));
  while ((index.ay < currentChildrenCount.ay)) {
    var nextPrevChildRef$1 = prevChildRef.D.nextSibling;
    $m_Lcom_raquo_laminar_nodes_ParentNode$().l0(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.D));
    var ev$13 = nextPrevChildRef$1;
    prevChildRef.D = ev$13;
    ev$13 = null;
    var ev$14 = ((currentChildrenCount.ay - 1) | 0);
    currentChildrenCount.ay = ev$14;
  }
  return currentChildrenCount.ay;
}
function $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, ref) {
  return (!(!nextChildrenMap.has(ref)));
}
function $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, ref) {
  var x = prevChildren.get(ref);
  if ((x === (void 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("prevChildFromRef[children]: not found for " + ref));
  }
  return x;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_ChildrenInserter$() {
}
$p = $c_Lcom_raquo_laminar_inserters_ChildrenInserter$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_ChildrenInserter$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_ChildrenInserter$() {
}
$h_Lcom_raquo_laminar_inserters_ChildrenInserter$.prototype = $p;
$p.ps = (function(childrenSource, renderableSeq, renderableNode, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, hooks) => {
    if ((!ctx.eQ)) {
      ctx.ik();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childrenSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2) => ((components) => {
      this.v6(($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(components, null, null)), ctx$2, hooks);
    }))(ctx)), owner);
  })), initialHooks);
});
$p.v6 = (function(newChildren, ctx, hooks) {
  if ((!ctx.eQ)) {
    ctx.ik();
  }
  var newChildrenMap = $m_Lcom_raquo_laminar_inserters_InsertContext$().ub(newChildren);
  ctx.e7 = $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I(this, ctx.dy, newChildren, newChildrenMap, ctx.eO, ctx.eP, ctx.e7, hooks);
  ctx.dy = newChildrenMap;
});
var $d_Lcom_raquo_laminar_inserters_ChildrenInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildrenInserter$, "com.raquo.laminar.inserters.ChildrenInserter$", ({
  e1: 1
}));
var $n_Lcom_raquo_laminar_inserters_ChildrenInserter$;
function $m_Lcom_raquo_laminar_inserters_ChildrenInserter$() {
  if ((!$n_Lcom_raquo_laminar_inserters_ChildrenInserter$)) {
    $n_Lcom_raquo_laminar_inserters_ChildrenInserter$ = new $c_Lcom_raquo_laminar_inserters_ChildrenInserter$();
  }
  return $n_Lcom_raquo_laminar_inserters_ChildrenInserter$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, extraNodeCount, extraNodesMap) {
  this.eO = null;
  this.eP = null;
  this.eQ = false;
  this.e7 = 0;
  this.dy = null;
  this.eO = parentNode;
  this.eP = sentinelNode;
  this.eQ = strictMode;
  this.e7 = extraNodeCount;
  this.dy = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.ik = (function() {
  if ((this.eQ || (this.e7 !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().sM(this.eO.L())));
  }
  if ((this.dy === null)) {
    this.dy = new Map();
  }
  if ((!(!(!(this.eP.L() instanceof Comment))))) {
    var contentNode = this.eP;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().tA(this.eO.L(), newSentinelNode.jg, contentNode.L());
    this.eP = newSentinelNode;
    this.e7 = 1;
    this.dy.set(contentNode.L(), contentNode);
  }
  this.eQ = true;
});
$p.ur = (function(after) {
  var elem = this.e7;
  var elem$1 = 0;
  elem$1 = elem;
  while ((elem$1 > 0)) {
    var prevChildRef = after.L().nextSibling;
    if ((prevChildRef === null)) {
      var ev$3 = 0;
      elem$1 = ev$3;
    } else {
      var maybePrevChild = this.dy.get(prevChildRef);
      if ((maybePrevChild === (void 0))) {
        var ev$4 = 0;
        elem$1 = ev$4;
      } else if ((maybePrevChild !== (void 0))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().l0(this.eO, maybePrevChild);
        var ev$5 = ((elem$1 - 1) | 0);
        elem$1 = ev$5;
      }
    }
  }
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  e4: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_InsertContext$() {
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext$;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext$() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext$.prototype = $p;
$p.ux = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fR(parentNode, sentinelNode, hooks);
  return this.vb(parentNode, sentinelNode, strictMode);
});
$p.vb = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
$p.ub = (function(nodes) {
  var acc = new Map();
  nodes.bW(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((node) => {
    acc.set(node.L(), node);
  })));
  return acc;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  e5: 1
}));
var $n_Lcom_raquo_laminar_inserters_InsertContext$;
function $m_Lcom_raquo_laminar_inserters_InsertContext$() {
  if ((!$n_Lcom_raquo_laminar_inserters_InsertContext$)) {
    $n_Lcom_raquo_laminar_inserters_InsertContext$ = new $c_Lcom_raquo_laminar_inserters_InsertContext$();
  }
  return $n_Lcom_raquo_laminar_inserters_InsertContext$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$() {
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$.prototype = $p;
$p.qs = (function(items, separator) {
  if ((items === "")) {
    return $m_sci_Nil$();
  } else {
    var this$10 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => {
      $m_sc_StringOps$();
      return (_$1 !== "");
    })));
    $m_sci_List$();
    return $m_sci_Nil$().iB(this$10);
  }
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  e8: 1
}));
var $n_Lcom_raquo_laminar_keys_CompositeKey$;
function $m_Lcom_raquo_laminar_keys_CompositeKey$() {
  if ((!$n_Lcom_raquo_laminar_keys_CompositeKey$)) {
    $n_Lcom_raquo_laminar_keys_CompositeKey$ = new $c_Lcom_raquo_laminar_keys_CompositeKey$();
  }
  return $n_Lcom_raquo_laminar_keys_CompositeKey$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, processor) {
  this.fs = null;
  this.hD = false;
  this.j7 = false;
  this.hC = null;
  this.fs = eventProp;
  this.hD = shouldUseCapture;
  this.j7 = shouldBePassive;
  this.hC = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.qm = (function() {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ev) => {
    var this$2 = this.hC.e(ev);
    if (this$2.c()) {
      return $m_s_None$();
    } else {
      this$2.A();
      var x = $m_Lcom_raquo_laminar_DomApi$().tq(ev.target);
      return new $c_s_Some(((x === (void 0)) ? "" : x));
    }
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.fs, this.hD, this.j7, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  ec: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProcessor$() {
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor$() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor$.prototype = $p;
$p.kt = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  ed: 1
}));
var $n_Lcom_raquo_laminar_keys_EventProcessor$;
function $m_Lcom_raquo_laminar_keys_EventProcessor$() {
  if ((!$n_Lcom_raquo_laminar_keys_EventProcessor$)) {
    $n_Lcom_raquo_laminar_keys_EventProcessor$ = new $c_Lcom_raquo_laminar_keys_EventProcessor$();
  }
  return $n_Lcom_raquo_laminar_keys_EventProcessor$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_Key() {
}
$p = $c_Lcom_raquo_laminar_keys_Key.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_Key;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_Key() {
}
$h_Lcom_raquo_laminar_keys_Key.prototype = $p;
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr$() {
  this.rl = null;
  this.rm = null;
  this.rn = null;
  this.ro = null;
  this.rl = "http://www.w3.org/2000/svg";
  this.rm = "http://www.w3.org/1999/xlink";
  this.rn = "http://www.w3.org/XML/1998/namespace";
  this.ro = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.u3 = (function(namespace) {
  switch (namespace) {
    case "svg": {
      return "http://www.w3.org/2000/svg";
      break;
    }
    case "xlink": {
      return "http://www.w3.org/1999/xlink";
      break;
    }
    case "xml": {
      return "http://www.w3.org/XML/1998/namespace";
      break;
    }
    case "xmlns": {
      return "http://www.w3.org/2000/xmlns/";
      break;
    }
    default: {
      throw new $c_s_MatchError(namespace);
    }
  }
});
var $d_Lcom_raquo_laminar_keys_SvgAttr$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr$, "com.raquo.laminar.keys.SvgAttr$", ({
  ei: 1
}));
var $n_Lcom_raquo_laminar_keys_SvgAttr$;
function $m_Lcom_raquo_laminar_keys_SvgAttr$() {
  if ((!$n_Lcom_raquo_laminar_keys_SvgAttr$)) {
    $n_Lcom_raquo_laminar_keys_SvgAttr$ = new $c_Lcom_raquo_laminar_keys_SvgAttr$();
  }
  return $n_Lcom_raquo_laminar_keys_SvgAttr$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_lifecycle_MountContext(thisNode, owner) {
  this.nj = null;
  this.jb = null;
  this.nj = thisNode;
  this.jb = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  ej: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.rp = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.rp = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  eo: 1
}));
var $n_Lcom_raquo_laminar_modifiers_Modifier$;
function $m_Lcom_raquo_laminar_modifiers_Modifier$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_Modifier$)) {
    $n_Lcom_raquo_laminar_modifiers_Modifier$ = new $c_Lcom_raquo_laminar_modifiers_Modifier$();
  }
  return $n_Lcom_raquo_laminar_modifiers_Modifier$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  this.hG = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.hG = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  es: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
function $m_Lcom_raquo_laminar_modifiers_RenderableNode$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableNode$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableNode$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$() {
  this.by = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.by = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => _$4.v7())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  ex: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableText$;
function $m_Lcom_raquo_laminar_modifiers_RenderableText$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableText$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableText$ = new $c_Lcom_raquo_laminar_modifiers_RenderableText$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableText$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ParentNode$() {
}
$p = $c_Lcom_raquo_laminar_nodes_ParentNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ParentNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ParentNode$() {
}
$h_Lcom_raquo_laminar_nodes_ParentNode$.prototype = $p;
$p.fR = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.eJ(nextParent);
  if ((hooks !== (void 0))) {
    hooks.qw(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().s9(parent.L(), child.L());
  if (appended) {
    child.eF(nextParent);
  }
  return appended;
});
$p.l0 = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().l(child.L().parentNode, parent.L())) {
    child.eJ($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().uo(parent.L(), child.L());
    child.eF($m_s_None$());
  }
  return removed;
});
$p.ir = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.eJ(nextParent);
  if ((hooks !== (void 0))) {
    hooks.qw(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().tz(parent.L(), newChild.L(), referenceChild.L());
  newChild.eF(nextParent);
  return inserted;
});
$p.uu = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.fT().bO(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.eJ($m_s_None$());
      newChild.eJ(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.qw(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().uv(parent.L(), newChild.L(), oldChild.L());
      if (replaced) {
        oldChild.eF($m_s_None$());
        newChild.eF(newChildNextParent);
      }
    }
  }
  return replaced;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  eA: 1
}));
var $n_Lcom_raquo_laminar_nodes_ParentNode$;
function $m_Lcom_raquo_laminar_nodes_ParentNode$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ParentNode$)) {
    $n_Lcom_raquo_laminar_nodes_ParentNode$ = new $c_Lcom_raquo_laminar_nodes_ParentNode$();
  }
  return $n_Lcom_raquo_laminar_nodes_ParentNode$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveElement$;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveElement$() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveElement$.prototype = $p;
$p.va = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iG(element.cd(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  eB: 1
}));
var $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
function $m_Lcom_raquo_laminar_nodes_ReactiveElement$() {
  if ((!$n_Lcom_raquo_laminar_nodes_ReactiveElement$)) {
    $n_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $c_Lcom_raquo_laminar_nodes_ReactiveElement$();
  }
  return $n_Lcom_raquo_laminar_nodes_ReactiveElement$;
}
function $p_Lcom_raquo_laminar_receivers_ChildOptionReceiver$__emptyNode$lzyINIT1$1__sr_LazyRef__Lcom_raquo_laminar_nodes_CommentNode($thiz, emptyNode$lzy1$1) {
  if ((emptyNode$lzy1$1 === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  return (emptyNode$lzy1$1.i1 ? emptyNode$lzy1$1.i2 : emptyNode$lzy1$1.ty(new $c_Lcom_raquo_laminar_nodes_CommentNode("")));
}
function $p_Lcom_raquo_laminar_receivers_ChildOptionReceiver$__emptyNode$1__sr_LazyRef__Lcom_raquo_laminar_nodes_CommentNode($thiz, emptyNode$lzy1$2) {
  return (emptyNode$lzy1$2.i1 ? emptyNode$lzy1$2.i2 : $p_Lcom_raquo_laminar_receivers_ChildOptionReceiver$__emptyNode$lzyINIT1$1__sr_LazyRef__Lcom_raquo_laminar_nodes_CommentNode($thiz, emptyNode$lzy1$2));
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildOptionReceiver$() {
}
$p = $c_Lcom_raquo_laminar_receivers_ChildOptionReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildOptionReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildOptionReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildOptionReceiver$.prototype = $p;
$p.pf = (function(maybeChildSource) {
  var emptyNode$lzy1 = new $c_sr_LazyRef();
  $m_Lcom_raquo_laminar_api_package$();
  return $m_Lcom_raquo_laminar_inserters_ChildInserter$().sa(maybeChildSource.fh().hd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((emptyNode$lzy1$2) => ((_$1) => (_$1.c() ? $p_Lcom_raquo_laminar_receivers_ChildOptionReceiver$__emptyNode$1__sr_LazyRef__Lcom_raquo_laminar_nodes_CommentNode(this, emptyNode$lzy1$2) : _$1.A())))(emptyNode$lzy1))).fh(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hG, (void 0));
});
var $d_Lcom_raquo_laminar_receivers_ChildOptionReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildOptionReceiver$, "com.raquo.laminar.receivers.ChildOptionReceiver$", ({
  eG: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildOptionReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildOptionReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildOptionReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildOptionReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildOptionReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildOptionReceiver$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  this.rq = null;
  $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = this;
  this.rq = $m_Lcom_raquo_laminar_receivers_ChildOptionReceiver$();
}
$p = $c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildReceiver$, "com.raquo.laminar.receivers.ChildReceiver$", ({
  eH: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildReceiver$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
}
$p = $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildrenReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildrenReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildrenReceiver$, "com.raquo.laminar.receivers.ChildrenReceiver$", ({
  eI: 1
}));
var $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
function $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$() {
  if ((!$n_Lcom_raquo_laminar_receivers_ChildrenReceiver$)) {
    $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$ = new $c_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
  }
  return $n_Lcom_raquo_laminar_receivers_ChildrenReceiver$;
}
/** @constructor */
function $c_jl_Math$() {
}
$p = $c_jl_Math$.prototype = new $h_O();
$p.constructor = $c_jl_Math$;
/** @constructor */
function $h_jl_Math$() {
}
$h_jl_Math$.prototype = $p;
$p.uF = (function(d, scaleFactor) {
  var fpBitsDataView = $fpBitsDataView;
  fpBitsDataView.setFloat64(0, d, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  var e = (2047 & ((hi >>> 20) | 0));
  var newE = ((e + scaleFactor) | 0);
  var hi$1 = ((-2146435073) & hi);
  var java$lang$IntFloatBits$Int64Box$$value_$_lo = 0;
  var java$lang$IntFloatBits$Int64Box$$value_$_hi = 0;
  java$lang$IntFloatBits$Int64Box$$value_$_lo = lo;
  java$lang$IntFloatBits$Int64Box$$value_$_hi = hi$1;
  if ((!((((e - 1) | 0) >>> 0) <= 2045))) {
    var hi$2 = (2147483647 & hi);
    if ((((lo | hi$2) === 0) || (hi$2 >= 2146435072))) {
      return d;
    }
    var hi$3 = (1048575 & hi);
    var clz = ((hi$3 !== 0) ? Math.clz32(hi$3) : ((32 + Math.clz32(lo)) | 0));
    newE = ((newE - ((clz - 12) | 0)) | 0);
    var hi$4 = ((-2147483648) & hi);
    var y = ((clz - 11) | 0);
    var lo$2 = (((32 & y) === 0) ? (lo << y) : 0);
    var hi$5 = (((32 & y) === 0) ? (((((lo >>> 1) | 0) >>> (~y)) | 0) | (hi << y)) : (lo << y));
    var hi$6 = (1048575 & hi$5);
    var hi$7 = (hi$4 | hi$6);
    java$lang$IntFloatBits$Int64Box$$value_$_lo = lo$2;
    java$lang$IntFloatBits$Int64Box$$value_$_hi = hi$7;
  }
  if (((((newE - 1) | 0) >>> 0) <= 2045)) {
    var finalNewE = newE;
    var finalSignAndMantissa_$_lo = java$lang$IntFloatBits$Int64Box$$value_$_lo;
    var finalSignAndMantissa_$_hi = java$lang$IntFloatBits$Int64Box$$value_$_hi;
    var hi$8 = (finalNewE << 20);
    var hi$9 = (hi$8 | finalSignAndMantissa_$_hi);
    var fpBitsDataView$1 = $fpBitsDataView;
    fpBitsDataView$1.setInt32(0, finalSignAndMantissa_$_lo, true);
    fpBitsDataView$1.setInt32(4, hi$9, true);
    return (+fpBitsDataView$1.getFloat64(0, true));
  } else if (((((53 + newE) | 0) >>> 0) <= 53)) {
    var finalNewE$1 = ((54 + newE) | 0);
    var finalSignAndMantissa$1_$_lo = java$lang$IntFloatBits$Int64Box$$value_$_lo;
    var finalSignAndMantissa$1_$_hi = java$lang$IntFloatBits$Int64Box$$value_$_hi;
    var hi$10 = (finalNewE$1 << 20);
    var hi$11 = (hi$10 | finalSignAndMantissa$1_$_hi);
    var fpBitsDataView$2 = $fpBitsDataView;
    fpBitsDataView$2.setInt32(0, finalSignAndMantissa$1_$_lo, true);
    fpBitsDataView$2.setInt32(4, hi$11, true);
    return (5.551115123125783E-17 * (+fpBitsDataView$2.getFloat64(0, true)));
  } else {
    var finalNewE$2 = (2047 & (~(scaleFactor >> 31)));
    var hi$12 = ((-2147483648) & hi);
    var hi$13 = (finalNewE$2 << 20);
    var hi$14 = (hi$13 | hi$12);
    var fpBitsDataView$3 = $fpBitsDataView;
    fpBitsDataView$3.setInt32(0, 0, true);
    fpBitsDataView$3.setInt32(4, hi$14, true);
    return (+fpBitsDataView$3.getFloat64(0, true));
  }
});
var $d_jl_Math$ = new $TypeData().i($c_jl_Math$, "java.lang.Math$", ({
  f5: 1
}));
var $n_jl_Math$;
function $m_jl_Math$() {
  if ((!$n_jl_Math$)) {
    $n_jl_Math$ = new $c_jl_Math$();
  }
  return $n_jl_Math$;
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().d1("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
  var trace = [];
  var i = 0;
  while ((i < (lines.length | 0))) {
    var line = lines[i];
    if ((line !== "")) {
      var mtch = NormalizedFrameLine.exec(line);
      if ((mtch !== null)) {
        var classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, mtch[1]);
        var $x_5 = classAndMethodName[0];
        var $x_4 = classAndMethodName[1];
        var $x_3 = mtch[2];
        var x$2 = mtch[3];
        var $x_2 = parseInt(x$2);
        var x$3 = mtch[4];
        var $x_1 = trace.push(new $c_jl_StackTraceElement($x_5, $x_4, $x_3, ($x_2 | 0), ((x$3 !== (void 0)) ? (parseInt(x$3) | 0) : (-1))));
      } else {
        (trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1), (-1))) | 0);
      }
    }
    i = ((1 + i) | 0);
  }
  var len = (trace.length | 0);
  var result = new ($d_jl_StackTraceElement.r().C)(len);
  i = 0;
  while ((i < len)) {
    result.a[i] = trace[i];
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
  var PatBC = $m_jl_StackTrace$StringRE$().d1("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().d1("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().d1("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().d1("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().d1("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
  var matchBC = PatBC.exec(functionName);
  var matchBCOrS = ((matchBC !== null) ? matchBC : PatS.exec(functionName));
  if ((matchBCOrS !== null)) {
    return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchBCOrS[1]), $p_jl_StackTrace$__decodeMethodName__T__T($thiz, matchBCOrS[2])];
  } else {
    var matchCT = PatCT.exec(functionName);
    var matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchCTOrN[1]), "<init>"];
    } else {
      var matchM = PatM.exec(functionName);
      return ((matchM !== null) ? [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchM[1]), "<clinit>"] : ["<jscode>", functionName]);
    }
  }
}
function $p_jl_StackTrace$__decodeClassName__T__T($thiz, encodedName) {
  var dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  if ((!(!$m_jl_Utils$Cache$().fy.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.cj) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    var index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        var key = ("T" + index);
        var value = ("scala_Tuple" + index);
        dict[key] = value;
      }
      var key$1 = ("F" + index);
      var value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0);
    }
    $thiz.jt = dict;
    $thiz.cj = (((1 | $thiz.cj) << 24) >> 24);
  }
  return $thiz.jt;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.cj) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jt);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.cj) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.ju = dict;
    $thiz.cj = (((2 | $thiz.cj) << 24) >> 24);
  }
  return $thiz.ju;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.cj) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.ju);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.cj) << 24) >> 24) === 0)) {
    $thiz.js = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.cj = (((4 | $thiz.cj) << 24) >> 24);
  }
  return $thiz.js;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.cj) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.js);
}
function $p_jl_StackTrace$__decodeMethodName__T__T($thiz, encodedName) {
  if ((!(!encodedName.startsWith("init___")))) {
    return "<init>";
  } else {
    var methodNameLen = (encodedName.indexOf("__") | 0);
    return ((methodNameLen < 0) ? encodedName : encodedName.substring(0, methodNameLen));
  }
}
function $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, e) {
  return ((!(!(!(!(!e))))) ? [] : ((!(!(!(!(e.arguments && e.stack))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : ((!(!(!(!(e.stack && e.sourceURL))))) ? $p_jl_StackTrace$__extractSafari__O__O($thiz, e) : ((!(!(!(!(e.stack && e.number))))) ? $p_jl_StackTrace$__extractIE__O__O($thiz, e) : ((!(!(!(!(e.stack && e.fileName))))) ? $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) : ((!(!(!(!(e.message && e["opera#sourceloc"]))))) ? ((!(!(!(!(!e.stacktrace))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : ((!(!(!(!((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length)))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e))) : ((!(!(!(!((e.message && e.stack) && e.stacktrace))))) ? ((!(!(!(!(e.stacktrace.indexOf("called from line") < 0.0))))) ? $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)) : ((!(!(!(!(e.stack && (!e.fileName)))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : $p_jl_StackTrace$__extractOther__O__O($thiz, e)))))))));
}
function $p_jl_StackTrace$__extractChrome__O__O($thiz, e) {
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().d1("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().c0("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().c0("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().c0("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().c0("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().c0("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().c0("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().c0("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().c0("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().c0("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().c0("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().c0("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().c0("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().c0("Line (\\d+).*script (?:in )?(\\S+)", "i");
  var lines = e.message.split("\n");
  var result = [];
  var i = 2;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      (result.push(((("{anonymous}()@" + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().c0("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[3];
      var fnName = ((x !== (void 0)) ? x : "{anonymous}");
      (result.push(((((fnName + "()@") + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().d1("^(.*)@(.+):(\\d+)$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[1];
      var fnName = ((x !== (void 0)) ? (x + "()") : "global code");
      (result.push(((((fnName + "@") + mtch[2]) + ":") + mtch[3])) | 0);
    }
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera11__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().d1("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var location = ((((mtch[4] + ":") + mtch[1]) + ":") + mtch[2]);
      var x$3 = mtch[2];
      var fnName0 = ((x$3 !== (void 0)) ? x$3 : "global code");
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().d1("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().d1("<anonymous function>"), "{anonymous}");
      (result.push(((fnName + "@") + location)) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOther__O__O($thiz, e) {
  return [];
}
function $p_jl_StackTrace$__loop$1__I__T__T($thiz, i, encodedName$1) {
  while (true) {
    if ((i < ($p_jl_StackTrace$__compressedPrefixes__O($thiz).length | 0))) {
      var prefix = $p_jl_StackTrace$__compressedPrefixes__O($thiz)[i];
      if ((!(!encodedName$1.startsWith(prefix)))) {
        var dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        return (("" + dict[prefix]) + encodedName$1.substring(prefix.length));
      } else {
        i = ((1 + i) | 0);
      }
    } else {
      return ((!(!encodedName$1.startsWith("L"))) ? encodedName$1.substring(1) : encodedName$1);
    }
  }
}
/** @constructor */
function $c_jl_StackTrace$() {
  this.jt = null;
  this.ju = null;
  this.js = null;
  this.cj = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.sY = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  f9: 1
}));
var $n_jl_StackTrace$;
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$();
  }
  return $n_jl_StackTrace$;
}
/** @constructor */
function $c_jl_StackTrace$StringRE$() {
}
$p = $c_jl_StackTrace$StringRE$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$StringRE$;
/** @constructor */
function $h_jl_StackTrace$StringRE$() {
}
$h_jl_StackTrace$StringRE$.prototype = $p;
$p.d1 = (function(this$) {
  return new RegExp(this$);
});
$p.c0 = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  fa: 1
}));
var $n_jl_StackTrace$StringRE$;
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$();
  }
  return $n_jl_StackTrace$StringRE$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.21.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jv = null;
  this.nC = null;
  $n_jl_System$SystemProperties$ = this;
  this.jv = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.nC = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.kI = (function(key, default$1) {
  if ((this.jv !== null)) {
    var dict = this.jv;
    return ((!(!$m_jl_Utils$Cache$().fy.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.nC.kI(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  fd: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.fy = null;
  $n_jl_Utils$Cache$ = this;
  this.fy = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  fg: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bD: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.aP = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? ((array.a.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  fi: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.qT = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bY(a, new $ac_I(a.a.length), 0, end, comparator, ops);
  } else {
    this.cg(a, 0, end, comparator, ops);
  }
});
$p.uV = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bY(a, new $ac_I(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cg(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.qU = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var end = ((a.a.length >>> 1) | 0);
  if ((end > 16)) {
    this.bY(a, new $ac_J(((a.a.length >>> 1) | 0)), 0, end, comparator, ops);
  } else {
    this.cg(a, 0, end, comparator, ops);
  }
});
$p.uW = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bY(a, new $ac_J(((a.a.length >>> 1) | 0)), fromIndex, toIndex, comparator, ops);
  } else {
    this.cg(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.qV = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bY(a, new $ac_S(a.a.length), 0, end, comparator, ops);
  } else {
    this.cg(a, 0, end, comparator, ops);
  }
});
$p.uX = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bY(a, new $ac_S(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cg(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.qS = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bY(a, new $ac_C(a.a.length), 0, end, comparator, ops);
  } else {
    this.cg(a, 0, end, comparator, ops);
  }
});
$p.uU = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bY(a, new $ac_C(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cg(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.qR = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bY(a, new $ac_B(a.a.length), 0, end, comparator, ops);
  } else {
    this.cg(a, 0, end, comparator, ops);
  }
});
$p.uT = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bY(a, new $ac_B(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cg(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.gd = (function(array, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  var end = array.a.length;
  if ((end > 16)) {
    this.bY(array, $objectGetClass(array).y.Q().y.U(array.a.length), 0, end, comparator$1, ops);
  } else {
    this.cg(array, 0, end, comparator$1, ops);
  }
});
$p.uY = (function(array, fromIndex, toIndex, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bY(array, $objectGetClass(array).y.Q().y.U(array.a.length), fromIndex, toIndex, comparator$1, ops);
  } else {
    this.cg(array, fromIndex, toIndex, comparator$1, ops);
  }
});
$p.bY = (function(a, temp, start, end, comparator, ops) {
  var length = ((end - start) | 0);
  if ((length > 16)) {
    var middle = ((start + (((length + ((length >>> 31) | 0)) | 0) >> 1)) | 0);
    this.bY(a, temp, start, middle, comparator, ops);
    this.bY(a, temp, middle, end, comparator, ops);
    var outIndex = start;
    var leftInIndex = start;
    var rightInIndex = middle;
    while ((outIndex < end)) {
      if (((leftInIndex < middle) && ((rightInIndex >= end) || (comparator.Z(ops.bD(a, leftInIndex), ops.bD(a, rightInIndex)) <= 0)))) {
        ops.d3(temp, outIndex, ops.bD(a, leftInIndex));
        leftInIndex = ((1 + leftInIndex) | 0);
      } else {
        ops.d3(temp, outIndex, ops.bD(a, rightInIndex));
        rightInIndex = ((1 + rightInIndex) | 0);
      }
      outIndex = ((1 + outIndex) | 0);
    }
    temp.v(start, a, start, length);
  } else {
    this.cg(a, start, end, comparator, ops);
  }
});
$p.cg = (function(a, start, end, comparator, ops) {
  var n = ((end - start) | 0);
  if ((n >= 2)) {
    var aStart = ops.bD(a, start);
    var aStartPlusOne = ops.bD(a, ((1 + start) | 0));
    if ((comparator.Z(aStart, aStartPlusOne) > 0)) {
      ops.d3(a, start, aStartPlusOne);
      ops.d3(a, ((1 + start) | 0), aStart);
    }
    var m = 2;
    while ((m < n)) {
      var next = ops.bD(a, ((start + m) | 0));
      if ((comparator.Z(next, ops.bD(a, ((((start + m) | 0) - 1) | 0))) < 0)) {
        var iA = start;
        var iB = ((((start + m) | 0) - 1) | 0);
        while ((((iB - iA) | 0) > 1)) {
          var ix = ((((iA + iB) | 0) >>> 1) | 0);
          if ((comparator.Z(next, ops.bD(a, ix)) < 0)) {
            iB = ix;
          } else {
            iA = ix;
          }
        }
        var ix$2 = ((iA + ((comparator.Z(next, ops.bD(a, iA)) < 0) ? 0 : 1)) | 0);
        var i = ((start + m) | 0);
        while ((i > ix$2)) {
          ops.d3(a, i, ops.bD(a, ((i - 1) | 0)));
          i = ((i - 1) | 0);
        }
        ops.d3(a, ix$2, next);
      }
      m = ((1 + m) | 0);
    }
  }
});
$p.sm = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.a.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.a[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
$p.pU = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = ((a.a.length >>> 1) | 0);
  if ((((b.a.length >>> 1) | 0) !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a;
    var $x_2 = (i$1 << 1);
    var a$1_$_lo = $x_1[$x_2];
    var a$1_$_hi = $x_1[(($x_2 + 1) | 0)];
    var i$2 = i;
    var $x_3 = b.a;
    var $x_4 = (i$2 << 1);
    var b$1_$_lo = $x_3[$x_4];
    var b$1_$_hi = $x_3[(($x_4 + 1) | 0)];
    if ((!(((a$1_$_lo ^ b$1_$_lo) | (a$1_$_hi ^ b$1_$_hi)) === 0))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.kv = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.pV = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.pT = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.pS = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.pW = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.sZ = (function(a, value) {
  var toIndex = a.a.length;
  var i = 0;
  while ((i !== toIndex)) {
    var i$1 = i;
    a.a[i$1] = value;
    i = ((1 + i) | 0);
  }
});
$p.W = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).y.Q().y.U(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.kp = (function(original, newLength, newType) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.y.Q().y.U(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.pE = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.pI = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.pG = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.pH = (function(original, newLength) {
  var b = ((original.a.length >>> 1) | 0);
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.pF = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.sG = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.sF = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.pJ = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.ag = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).y.Q().y.U(retLength);
  original.v(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  fl: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $is_ju_Formattable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.bE)));
}
function $isArrayOf_ju_Formattable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bE)));
}
/** @constructor */
function $c_ju_Formatter$() {
  this.nL = null;
  this.nK = null;
  $n_ju_Formatter$ = this;
  this.nL = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g");
  this.nK = new $ac_I(new Int32Array([96, 126, 638, 770, 32, 256, 2, 126, (-1), (-1), (-1), (-1), (-1), (-1), 800, (-1), (-1), (-1), 124, (-1), (-1), (-1), (-1), 544, (-1), (-1)]));
}
$p = $c_ju_Formatter$.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$;
/** @constructor */
function $h_ju_Formatter$() {
}
$h_ju_Formatter$.prototype = $p;
$p.kN = (function(count) {
  if ((count <= 20)) {
    return "00000000000000000000".substring(0, count);
  } else {
    var result = "";
    var remaining = count;
    while ((remaining > 20)) {
      result = (result + "00000000000000000000");
      remaining = ((remaining - 20) | 0);
    }
    var $x_1 = result;
    var endIndex = remaining;
    return (("" + $x_1) + "00000000000000000000".substring(0, endIndex));
  }
});
$p.tM = (function(x) {
  if ((x === 0.0)) {
    return new $c_ju_Formatter$Decimal(((1.0 / x) < 0.0), "0", 0);
  } else {
    var negative$2 = (x < 0.0);
    var d = (negative$2 ? (-x) : x);
    var s = ("" + d);
    var ePos = $f_T__indexOf__I__I(s, 101);
    if ((ePos < 0)) {
      var e = 0;
    } else {
      var $x_2 = parseInt;
      var beginIndex = ((1 + ePos) | 0);
      var $x_1 = $x_2(s.substring(beginIndex));
      var e = ($x_1 | 0);
    }
    var significandEnd = ((ePos < 0) ? s.length : ePos);
    var dotPos = $f_T__indexOf__I__I(s, 46);
    if ((dotPos < 0)) {
      return new $c_ju_Formatter$Decimal(negative$2, s.substring(0, significandEnd), ((-e) | 0));
    } else {
      var $x_3 = s.substring(0, dotPos);
      var beginIndex$1 = ((1 + dotPos) | 0);
      var digits = (("" + $x_3) + s.substring(beginIndex$1, significandEnd));
      var digitsLen = digits.length;
      var i = 0;
      while (((i < digitsLen) && (digits.charCodeAt(i) === 48))) {
        i = ((1 + i) | 0);
      }
      var beginIndex$2 = i;
      return new $c_ju_Formatter$Decimal(negative$2, digits.substring(beginIndex$2), ((((-e) | 0) + ((significandEnd - ((1 + dotPos) | 0)) | 0)) | 0));
    }
  }
});
$p.tL = (function(x) {
  var unscaledValueWithSign = x.vz().u();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0);
  } else {
    var negative = (unscaledValueWithSign.charCodeAt(0) === 45);
    return new $c_ju_Formatter$Decimal(negative, (negative ? unscaledValueWithSign.substring(1) : unscaledValueWithSign), x.vt());
  }
});
var $d_ju_Formatter$ = new $TypeData().i($c_ju_Formatter$, "java.util.Formatter$", ({
  fr: 1
}));
var $n_ju_Formatter$;
function $m_ju_Formatter$() {
  if ((!$n_ju_Formatter$)) {
    $n_ju_Formatter$ = new $c_ju_Formatter$();
  }
  return $n_ju_Formatter$;
}
function $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal($thiz, roundingPos) {
  var digits = $thiz.dA;
  var digitsLen = digits.length;
  if ((roundingPos < 0)) {
    return new $c_ju_Formatter$Decimal($thiz.dz, "0", 0);
  } else if ((roundingPos >= digitsLen)) {
    return $thiz;
  } else if ((digits.charCodeAt(roundingPos) < 53)) {
    return ((roundingPos === 0) ? new $c_ju_Formatter$Decimal($thiz.dz, "0", 0) : new $c_ju_Formatter$Decimal($thiz.dz, digits.substring(0, roundingPos), (($thiz.d5 - ((digitsLen - roundingPos) | 0)) | 0)));
  } else {
    var lastNonNinePos = ((roundingPos - 1) | 0);
    while (((lastNonNinePos >= 0) && (digits.charCodeAt(lastNonNinePos) === 57))) {
      lastNonNinePos = ((lastNonNinePos - 1) | 0);
    }
    if ((lastNonNinePos < 0)) {
      var newUnscaledValue = "1";
    } else {
      var endIndex = lastNonNinePos;
      var newUnscaledValue = (digits.substring(0, endIndex) + $cToS((65535 & ((1 + digits.charCodeAt(lastNonNinePos)) | 0))));
    }
    var pos = ((1 + lastNonNinePos) | 0);
    var newScale = (($thiz.d5 - ((digitsLen - pos) | 0)) | 0);
    return new $c_ju_Formatter$Decimal($thiz.dz, newUnscaledValue, newScale);
  }
}
/** @constructor */
function $c_ju_Formatter$Decimal(negative, unscaledValue, scale) {
  this.dz = false;
  this.dA = null;
  this.d5 = 0;
  this.dz = negative;
  this.dA = unscaledValue;
  this.d5 = scale;
}
$p = $c_ju_Formatter$Decimal.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$Decimal;
/** @constructor */
function $h_ju_Formatter$Decimal() {
}
$h_ju_Formatter$Decimal.prototype = $p;
$p.qe = (function() {
  return (this.dA === "0");
});
$p.qJ = (function(precision) {
  $m_ju_Formatter$();
  if ((!(precision > 0))) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision");
  }
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision);
});
$p.uO = (function(newScale) {
  var roundingPos = ((((this.dA.length + newScale) | 0) - this.d5) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  if ((!(rounded.qe() || (rounded.d5 <= newScale)))) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large");
  }
  return ((rounded.qe() || (rounded.d5 === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.dz, (("" + rounded.dA) + $m_ju_Formatter$().kN(((newScale - rounded.d5) | 0))), newScale));
});
$p.u = (function() {
  return (((((("Decimal(" + this.dz) + ", ") + this.dA) + ", ") + this.d5) + ")");
});
var $d_ju_Formatter$Decimal = new $TypeData().i($c_ju_Formatter$Decimal, "java.util.Formatter$Decimal", ({
  fs: 1
}));
/** @constructor */
function $c_ju_Formatter$LocaleInfo() {
}
$p = $c_ju_Formatter$LocaleInfo.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$LocaleInfo;
/** @constructor */
function $h_ju_Formatter$LocaleInfo() {
}
$h_ju_Formatter$LocaleInfo.prototype = $p;
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.aQ, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().o7.exec($thiz.aQ);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var end = x.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        $thiz.V = ($thiz.V | $m_ju_regex_PatternCompiler$().qh(x.charCodeAt(value)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.V) !== 0)) {
      $thiz.V = (64 | $thiz.V);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var end$1 = x$1.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var value$1 = i$1;
        $thiz.V = ($thiz.V & (~$m_ju_regex_PatternCompiler$().qh(x$1.charCodeAt(value$1))));
        i$1 = ((1 + i$1) | 0);
      }
    }
    $thiz.b = (($thiz.b + m[0].length) | 0);
  }
}
function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
  var result = "";
  var len = s.length;
  var i = 0;
  while ((i !== len)) {
    var cp = $f_T__codePointAt__I__I(s, i);
    result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
    i = ((i + ((cp >= 65536) ? 2 : 1)) | 0);
  }
  return result;
}
function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
  var s = $m_ju_regex_PatternCompiler$().ff(cp);
  if ((cp < 128)) {
    switch (cp) {
      case 94:
      case 36:
      case 92:
      case 46:
      case 42:
      case 43:
      case 63:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124: {
        return ("\\" + s);
        break;
      }
      default: {
        return (((66 & $thiz.V) !== 2) ? s : (((((cp - 65) | 0) >>> 0) <= 25) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().ff(((32 + cp) | 0))) + "]") : (((((cp - 97) | 0) >>> 0) <= 25) ? ((("[" + $m_ju_regex_PatternCompiler$().ff(((cp - 32) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.aQ;
  var len = pattern.length;
  while (true) {
    if (($thiz.b !== len)) {
      switch (pattern.charCodeAt($thiz.b)) {
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          $thiz.b = ((1 + $thiz.b) | 0);
          continue;
          break;
        }
        case 35: {
          $thiz.kP();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.aQ;
  var len = pattern.length;
  var startOfRepeater = $thiz.b;
  var repeaterDispatchChar = ((startOfRepeater === len) ? 46 : pattern.charCodeAt(startOfRepeater));
  if (((((repeaterDispatchChar === 42) || (repeaterDispatchChar === 63)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
    switch (compiledToken.charCodeAt(0)) {
      case 94:
      case 36: {
        var isTokenAnAssertion = true;
        break;
      }
      case 40: {
        var isTokenAnAssertion = ((compiledToken.charCodeAt(1) === 63) && (compiledToken.charCodeAt(2) !== 58));
        break;
      }
      case 92: {
        var c = compiledToken.charCodeAt(1);
        var isTokenAnAssertion = ((c === 66) || (c === 98));
        break;
      }
      default: {
        var isTokenAnAssertion = false;
      }
    }
    var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
    var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
    if (($thiz.b !== len)) {
      switch (pattern.charCodeAt($thiz.b)) {
        case 43: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
          break;
        }
        case 63: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return ((("" + wrappedToken) + baseRepeater) + "?");
          break;
        }
        default: {
          return (("" + wrappedToken) + baseRepeater);
        }
      }
    } else {
      return (("" + wrappedToken) + baseRepeater);
    }
  } else {
    return compiledToken;
  }
}
function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
  var pattern = $thiz.aQ;
  var startOfRepeater = $thiz.b;
  $thiz.b = ((1 + $thiz.b) | 0);
  if ((repeaterDispatchChar === 123)) {
    var len = pattern.length;
    if ((($thiz.b === len) || (!((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9)))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    while ((($thiz.b !== len) && ((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9))) {
      $thiz.b = ((1 + $thiz.b) | 0);
    }
    if (($thiz.b === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    if ((pattern.charCodeAt($thiz.b) === 44)) {
      $thiz.b = ((1 + $thiz.b) | 0);
      while ((($thiz.b !== len) && ((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9))) {
        $thiz.b = ((1 + $thiz.b) | 0);
      }
    }
    if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 125))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  return pattern.substring(startOfRepeater, $thiz.b);
}
function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
  var end = ($thiz.c3.length | 0);
  var i = 0;
  while ((i < end)) {
    var value = i;
    var mapped = ($thiz.c3[value] | 0);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.c3[value] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = compiledToken.replace($m_ju_regex_PatternCompiler$().o8, ((arg1$2, arg2$2, arg3$2) => {
    var num = arg2$2.length;
    var t = ((num >>> 31) | 0);
    if (((((1 & ((num + t) | 0)) - t) | 0) === 0)) {
      return arg1$2;
    } else {
      var groupNumber = (parseInt(arg3$2, 10) | 0);
      return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2$2) + ((1 + groupNumber) | 0)) : arg1$2);
    }
  }));
  $thiz.c2 = ((1 + $thiz.c2) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.aQ;
  var len = pattern.length;
  if ((((1 + $thiz.b) | 0) === len)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern");
  }
  $thiz.b = ((1 + $thiz.b) | 0);
  var index = $thiz.b;
  var dispatchChar = pattern.charCodeAt(index);
  switch (dispatchChar) {
    case 100:
    case 68:
    case 104:
    case 72:
    case 115:
    case 83:
    case 118:
    case 86:
    case 119:
    case 87:
    case 112:
    case 80: {
      var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
      var x1$2 = cls.hK;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + cls.d6) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + cls.d6) + "}");
          break;
        }
        case 2: {
          return (("[" + cls.d6) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().it(cls.d6);
          break;
        }
        default: {
          throw new $c_jl_AssertionError(x1$2);
        }
      }
      break;
    }
    case 98: {
      if ((pattern.substring($thiz.b, ((4 + $thiz.b) | 0)) === "b{g}")) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported");
      } else if (((320 & $thiz.V) !== 0)) {
        $thiz.g4("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.V) !== 0)) {
        $thiz.g4("\\B with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\B";
      }
      break;
    }
    case 65: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "^";
      break;
    }
    case 71: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
      break;
    }
    case 90: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return (("(?=" + (((1 & $thiz.V) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])")) + "?$)");
      break;
    }
    case 122: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "$";
      break;
    }
    case 82: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
      break;
    }
    case 88: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
      break;
    }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: {
      var start = $thiz.b;
      var end = ((1 + start) | 0);
      while (true) {
        if (((end !== len) && ((((pattern.charCodeAt(end) - 48) | 0) >>> 0) <= 9))) {
          var s = pattern.substring(start, ((1 + end) | 0));
          var $x_1 = ((parseInt(s, 10) | 0) <= ((($thiz.c3.length | 0) - 1) | 0));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          end = ((1 + end) | 0);
        } else {
          break;
        }
      }
      var groupString = pattern.substring(start, end);
      var groupNumber = (parseInt(groupString, 10) | 0);
      if ((groupNumber > ((($thiz.c3.length | 0) - 1) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = ($thiz.c3[groupNumber] | 0);
      $thiz.b = end;
      return (("(?:\\" + compiledGroupNumber) + ")");
      break;
    }
    case 107: {
      $thiz.b = ((1 + $thiz.b) | 0);
      if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 60))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group");
      }
      $thiz.b = ((1 + $thiz.b) | 0);
      var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
      var dict = $thiz.gq;
      if ((!(!(!$m_jl_Utils$Cache$().fy.call(dict, groupName))))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = (dict[groupName] | 0);
      var compiledGroupNumber$2 = ($thiz.c3[groupNumber$2] | 0);
      $thiz.b = ((1 + $thiz.b) | 0);
      return (("(?:\\" + compiledGroupNumber$2) + ")");
      break;
    }
    case 81: {
      var start$2 = ((1 + $thiz.b) | 0);
      var end$2 = (pattern.indexOf("\\E", start$2) | 0);
      if ((end$2 < 0)) {
        $thiz.b = pattern.length;
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, pattern.substring(start$2));
      } else {
        $thiz.b = ((2 + end$2) | 0);
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, pattern.substring(start$2, end$2));
      }
      break;
    }
    default: {
      return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz));
    }
  }
}
function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
  var pattern = $thiz.aQ;
  var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
  switch (x1) {
    case 48: {
      return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
      break;
    }
    case 120: {
      return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
      break;
    }
    case 117: {
      return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
      break;
    }
    case 78: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
      break;
    }
    case 97: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 7;
      break;
    }
    case 116: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 9;
      break;
    }
    case 110: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 10;
      break;
    }
    case 102: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 12;
      break;
    }
    case 114: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 13;
      break;
    }
    case 101: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 27;
      break;
    }
    case 99: {
      $thiz.b = ((1 + $thiz.b) | 0);
      if (($thiz.b === pattern.length)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence");
      }
      var cp = $f_T__codePointAt__I__I(pattern, $thiz.b);
      $thiz.b = (($thiz.b + ((cp >= 65536) ? 2 : 1)) | 0);
      return (64 ^ cp);
      break;
    }
    default: {
      if ((((((x1 - 65) | 0) >>> 0) <= 25) || ((((x1 - 97) | 0) >>> 0) <= 25))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence");
      }
      $thiz.b = (($thiz.b + ((x1 >= 65536) ? 2 : 1)) | 0);
      return x1;
    }
  }
}
function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
  var pattern = $thiz.aQ;
  var len = pattern.length;
  var start = $thiz.b;
  var d1 = ((((1 + start) | 0) < len) ? ((pattern.charCodeAt(((1 + start) | 0)) - 48) | 0) : (-1));
  if (((d1 >>> 0) > 7)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence");
  }
  var d2 = ((((2 + start) | 0) < len) ? ((pattern.charCodeAt(((2 + start) | 0)) - 48) | 0) : (-1));
  if (((d2 >>> 0) > 7)) {
    $thiz.b = ((2 + $thiz.b) | 0);
    return d1;
  } else if ((d1 > 3)) {
    $thiz.b = ((3 + $thiz.b) | 0);
    return (((d1 << 3) + d2) | 0);
  } else {
    var d3 = ((((3 + start) | 0) < len) ? ((pattern.charCodeAt(((3 + start) | 0)) - 48) | 0) : (-1));
    if (((d3 >>> 0) > 7)) {
      $thiz.b = ((3 + $thiz.b) | 0);
      return (((d1 << 3) + d2) | 0);
    } else {
      $thiz.b = ((4 + $thiz.b) | 0);
      return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0);
    }
  }
}
function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
  var pattern = $thiz.aQ;
  var len = pattern.length;
  var start = ((1 + $thiz.b) | 0);
  if (((start !== len) && (pattern.charCodeAt(start) === 123))) {
    var innerStart = ((1 + start) | 0);
    var innerEnd = (pattern.indexOf("}", innerStart) | 0);
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence");
    }
    var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
    $thiz.b = ((1 + innerEnd) | 0);
    return cp;
  } else {
    var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
    $thiz.b = ((2 + start) | 0);
    return cp$2;
  }
}
function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
  var pattern = $thiz.aQ;
  var start = ((1 + $thiz.b) | 0);
  var end = ((4 + start) | 0);
  var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
  $thiz.b = end;
  var lowStart = ((2 + end) | 0);
  var lowEnd = ((4 + lowStart) | 0);
  if (((((-1024) & codeUnit) === 55296) && (pattern.substring(end, lowStart) === "\\u"))) {
    var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
    if ((((-1024) & low) === 56320)) {
      $thiz.b = lowEnd;
      return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low));
    } else {
      return codeUnit;
    }
  } else {
    return codeUnit;
  }
}
function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
  var pattern = $thiz.aQ;
  var len = pattern.length;
  if (((end === start) || (end > len))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
  }
  var i = start;
  while ((i < end)) {
    var value = i;
    var c = pattern.charCodeAt(value);
    if ((!((((((c - 48) | 0) >>> 0) <= 9) || ((((c - 65) | 0) >>> 0) <= 5)) || ((((c - 97) | 0) >>> 0) <= 5)))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
    }
    i = ((1 + i) | 0);
  }
  if ((((end - start) | 0) > 6)) {
    var cp = 1114112;
  } else {
    var s = pattern.substring(start, end);
    var cp = (parseInt(s, 16) | 0);
  }
  if ((cp > 1114111)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big");
  }
  return cp;
}
function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
  $thiz.b = ((1 + $thiz.b) | 0);
  switch (dispatchChar) {
    case 100:
    case 68: {
      var positive = $m_ju_regex_PatternCompiler$().o2;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().o5;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().o3;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().o6;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().o4;
      break;
    }
    case 112:
    case 80: {
      var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
      break;
    }
    default: {
      var positive;
      throw new $c_jl_AssertionError($bC(dispatchChar));
    }
  }
  return ((dispatchChar >= 97) ? positive : positive.u4());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.aQ;
  var len = pattern.length;
  var start = $thiz.b;
  if ((start === len)) {
    var property = "?";
  } else if ((pattern.charCodeAt(start) === 123)) {
    var innerStart = ((1 + start) | 0);
    var innerEnd = (pattern.indexOf("}", innerStart) | 0);
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family");
    }
    $thiz.b = innerEnd;
    var property = pattern.substring(innerStart, innerEnd);
  } else {
    var property = pattern.substring(start, ((1 + start) | 0));
  }
  var dict = $m_ju_regex_PatternCompiler$().jB;
  if ((!(!(!$m_jl_Utils$Cache$().fy.call(dict, property))))) {
    $thiz.g4("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.V) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().jB;
  var result = dict$1[property2];
  $thiz.b = ((1 + $thiz.b) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.aQ;
  var len = pattern.length;
  $thiz.b = ((1 + $thiz.b) | 0);
  var isNegated = (($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 94));
  if (isNegated) {
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.V) === 2), isNegated);
  while (($thiz.b !== len)) {
    var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return builder.t3();
          break;
        }
        case 38: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if ((($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 38))) {
            $thiz.b = ((1 + $thiz.b) | 0);
            builder.v2();
            break matchResult;
          } else {
            $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder);
            break matchResult;
          }
          break;
        }
        case 91: {
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz));
          break matchResult;
          break;
        }
        case 92: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if (($thiz.b === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence");
          }
          var index$2 = $thiz.b;
          var c2 = pattern.charCodeAt(index$2);
          switch (c2) {
            case 100:
            case 68:
            case 104:
            case 72:
            case 115:
            case 83:
            case 118:
            case 86:
            case 119:
            case 87:
            case 112:
            case 80: {
              builder.rU($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
              break matchResult;
              break;
            }
            case 81: {
              $thiz.b = ((1 + $thiz.b) | 0);
              var fromIndex = $thiz.b;
              var end = (pattern.indexOf("\\E", fromIndex) | 0);
              if ((end < 0)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
              }
              builder.rW(pattern, $thiz.b, end);
              $thiz.b = ((2 + end) | 0);
              break matchResult;
              break;
            }
            default: {
              $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder);
              break matchResult;
            }
          }
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & $thiz.V) !== 0)) {
            $thiz.b = ((1 + $thiz.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & $thiz.V) !== 0)) {
            $thiz.kP();
            break matchResult;
          }
          break;
        }
      }
      $thiz.b = (($thiz.b + ((x1 >= 65536) ? 2 : 1)) | 0);
      $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder);
    }
  }
  $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
}
function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
  var pattern = $thiz.aQ;
  var len = pattern.length;
  var start = $thiz.b;
  if (((((1 + start) | 0) === len) || (pattern.charCodeAt(((1 + start) | 0)) !== 63))) {
    $thiz.b = ((1 + start) | 0);
    $thiz.c2 = ((1 + $thiz.c2) | 0);
    $thiz.c3.push($thiz.c2);
    return (("(" + $thiz.hc(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var index$1 = ((2 + start) | 0);
    var c1 = pattern.charCodeAt(index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.b = ((3 + start) | 0);
      return ((("" + pattern.substring(start, ((3 + start) | 0))) + $thiz.hc(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var index$2 = ((3 + start) | 0);
      var c2 = pattern.charCodeAt(index$2);
      if ((((((c2 - 65) | 0) >>> 0) <= 25) || ((((c2 - 97) | 0) >>> 0) <= 25))) {
        $thiz.b = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.gq;
        if ((!(!$m_jl_Utils$Cache$().fy.call(dict, name)))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.c2 = ((1 + $thiz.c2) | 0);
        $thiz.c3.push($thiz.c2);
        var dict$1 = $thiz.gq;
        var value = ((($thiz.c3.length | 0) - 1) | 0);
        dict$1[name] = value;
        $thiz.b = ((1 + $thiz.b) | 0);
        return (("(" + $thiz.hc(true)) + ")");
      } else {
        if (((c2 !== 33) && (c2 !== 61))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.g4("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.b = ((3 + start) | 0);
      $thiz.c2 = ((1 + $thiz.c2) | 0);
      var groupNumber = $thiz.c2;
      return (((("(?:(?=(" + $thiz.hc(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.aQ;
  var len = pattern.length;
  var start = $thiz.b;
  while (true) {
    if (($thiz.b !== len)) {
      var index = $thiz.b;
      var c = pattern.charCodeAt(index);
      var $x_1 = ((((((c - 65) | 0) >>> 0) <= 25) || ((((c - 97) | 0) >>> 0) <= 25)) || ((((c - 48) | 0) >>> 0) <= 9));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.b = ((1 + $thiz.b) | 0);
    } else {
      break;
    }
  }
  if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 62))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'");
  }
  return pattern.substring(start, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
  if (((4 & $thiz.V) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if ((($thiz.b !== len$2) && (pattern$3.charCodeAt($thiz.b) === 45))) {
    $thiz.b = ((1 + $thiz.b) | 0);
    if (((4 & $thiz.V) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.b === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I(pattern$3, $thiz.b);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      builder$1.ib(startCodePoint);
      builder$1.ib(45);
    } else {
      $thiz.b = (($thiz.b + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      builder$1.rV(startCodePoint, endCodePoint);
    }
  } else {
    builder$1.ib(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.aQ = null;
  this.V = 0;
  this.hJ = false;
  this.b = 0;
  this.c2 = 0;
  this.c3 = null;
  this.gq = null;
  this.aQ = pattern;
  this.V = flags;
  this.hJ = false;
  this.b = 0;
  this.c2 = 0;
  this.c3 = [0];
  this.gq = ({});
}
$p = $c_ju_regex_PatternCompiler.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $p;
$p.sy = (function() {
  if (((256 & this.V) !== 0)) {
    this.V = (64 | this.V);
  }
  var isLiteral = ((16 & this.V) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.V) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.V) !== 0)) {
    this.g4("MULTILINE", "2018");
  }
  if (((256 & this.V) !== 0)) {
    this.g4("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.aQ);
  } else {
    if ((this.aQ.substring(this.b, ((2 + this.b) | 0)) === "\\G")) {
      this.hJ = true;
      this.b = ((2 + this.b) | 0);
    }
    var jsPattern = this.hc(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().jA ? "us" : "u");
  var jsFlags = (((66 & this.V) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.aQ, this.V, jsPattern, jsFlags, this.hJ, (((this.c3.length | 0) - 1) | 0), this.c3, this.gq);
});
$p.g4 = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$p.hc = (function(insideGroup) {
  var pattern = this.aQ;
  var len = pattern.length;
  var result = "";
  while ((this.b !== len)) {
    var dispatchCP = $f_T__codePointAt__I__I(pattern, this.b);
    matchResult: {
      switch (dispatchCP) {
        case 41: {
          if ((!insideGroup)) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'");
          }
          this.b = ((1 + this.b) | 0);
          return result;
          break;
        }
        case 124: {
          if ((this.hJ && (!insideGroup))) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level");
          }
          this.b = ((1 + this.b) | 0);
          result = (result + "|");
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & this.V) !== 0)) {
            this.b = ((1 + this.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & this.V) !== 0)) {
            this.kP();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().ff(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.c2;
      switch (dispatchCP) {
        case 92: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
          break;
        }
        case 91: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
          break;
        }
        case 40: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
          break;
        }
        case 94: {
          this.b = ((1 + this.b) | 0);
          var compiledToken = "^";
          break;
        }
        case 36: {
          this.b = ((1 + this.b) | 0);
          var compiledToken = "$";
          break;
        }
        case 46: {
          this.b = ((1 + this.b) | 0);
          var rejected = (((32 & this.V) !== 0) ? "" : (((1 & this.V) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().it(rejected);
          break;
        }
        default: {
          this.b = ((this.b + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
          var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP);
        }
      }
      result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken));
    }
  }
  if (insideGroup) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group");
  }
  return result;
});
$p.kP = (function() {
  var pattern = this.aQ;
  var len = pattern.length;
  while (true) {
    if ((this.b !== len)) {
      var index = this.b;
      var c = pattern.charCodeAt(index);
      var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      this.b = ((1 + this.b) | 0);
    } else {
      break;
    }
  }
});
var $d_ju_regex_PatternCompiler = new $TypeData().i($c_ju_regex_PatternCompiler, "java.util.regex.PatternCompiler", ({
  fR: 1
}));
function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
  try {
    new RegExp("", flags);
    return true;
  } catch (e) {
    return false;
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler$() {
  this.o7 = null;
  this.o8 = null;
  this.rv = false;
  this.ru = false;
  this.jA = false;
  this.o2 = null;
  this.rr = null;
  this.o5 = null;
  this.o3 = null;
  this.rs = null;
  this.o6 = null;
  this.o4 = null;
  this.rt = null;
  this.jB = null;
  this.rw = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.o7 = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.o8 = new RegExp("(\\\\+)(\\d+)", "g");
  this.rv = true;
  this.ru = true;
  this.jA = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.o2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.rr = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.o5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.o3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.rs = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.o6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.o4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.rt = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
  var r = ({});
  var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
  r.Lower = value;
  var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
  r.Upper = value$1;
  var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
  r.ASCII = value$2;
  var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
  r.Alpha = value$3;
  var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  r.Digit = value$4;
  var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
  r.Alnum = value$5;
  var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
  r.Punct = value$6;
  var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
  r.Graph = value$7;
  var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
  r.Print = value$8;
  var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
  r.Blank = value$9;
  var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
  r.Cntrl = value$10;
  var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
  r.XDigit = value$11;
  var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  r.Space = value$12;
  this.jB = r;
  this.rw = new RegExp("(?:^|_)[a-z]", "g");
}
$p = $c_ju_regex_PatternCompiler$.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $p;
$p.sx = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).sy();
});
$p.qh = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break;
    }
    case 100: {
      return 1;
      break;
    }
    case 109: {
      return 8;
      break;
    }
    case 115: {
      return 32;
      break;
    }
    case 117: {
      return 64;
      break;
    }
    case 120: {
      return 4;
      break;
    }
    case 85: {
      return 256;
      break;
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag");
    }
  }
});
$p.it = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().jA ? "." : "[\\d\\D]"));
});
$p.ff = (function(codePoint) {
  return String.fromCodePoint(codePoint);
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().i($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  fS: 1
}));
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.ck === "")) {
    $thiz.ck = alt;
  } else {
    $thiz.ck = (($thiz.ck + "|") + alt);
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.jD) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().it($thiz.a1);
    return (($thiz.ck === "") ? negThisSegment : (((("(?:(?!" + $thiz.ck) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.a1 === "") ? (($thiz.ck === "") ? "[^\\d\\D]" : (("(?:" + $thiz.ck) + ")")) : (($thiz.ck === "") ? (("[" + $thiz.a1) + "]") : (((("(?:" + $thiz.ck) + "|[") + $thiz.a1) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().ff(codePoint);
  return (((((((codePoint - 92) | 0) >>> 0) <= 1) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.jC = false;
  this.jD = false;
  this.gr = null;
  this.ck = null;
  this.a1 = null;
  this.jC = asciiCaseInsensitive;
  this.jD = isNegated;
  this.gr = "";
  this.ck = "";
  this.a1 = "";
}
$p = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $p;
$p.t3 = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.gr === "") ? conjunct : ((("(?:" + this.gr) + conjunct) + ")"));
});
$p.v2 = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.gr = (this.gr + (this.jD ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.ck = "";
  this.a1 = "";
});
$p.rU = (function(cls) {
  var x1 = cls.hK;
  switch (x1) {
    case 0: {
      this.a1 = ((this.a1 + ("\\p{" + cls.d6)) + "}");
      break;
    }
    case 1: {
      this.a1 = ((this.a1 + ("\\P{" + cls.d6)) + "}");
      break;
    }
    case 2: {
      this.a1 = (("" + this.a1) + cls.d6);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().it(cls.d6));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$p.rW = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I(str, i);
    this.ib(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$p.ib = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.a1 = (("" + s) + this.a1);
  } else {
    this.a1 = (("" + this.a1) + s);
  }
  if (this.jC) {
    if (((((codePoint - 65) | 0) >>> 0) <= 25)) {
      this.a1 = (("" + this.a1) + $m_ju_regex_PatternCompiler$().ff(((32 + codePoint) | 0)));
    } else if (((((codePoint - 97) | 0) >>> 0) <= 25)) {
      this.a1 = (("" + this.a1) + $m_ju_regex_PatternCompiler$().ff(((codePoint - 32) | 0)));
    }
  }
});
$p.rV = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.a1 = (s + this.a1);
  } else {
    this.a1 = (this.a1 + s);
  }
  if (this.jC) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.a1;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.a1 = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.a1;
      var start$3 = ((start$2 - 32) | 0);
      var end$3 = ((end$2 - 32) | 0);
      this.a1 = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().i($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  fT: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.jE)) {
    $thiz.jF = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.hK), $thiz.d6);
    $thiz.jE = true;
  }
  return $thiz.jF;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.jF = null;
  this.hK = 0;
  this.d6 = null;
  this.jE = false;
  this.hK = kind;
  this.d6 = data;
}
$p = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $p;
$p.u4 = (function() {
  return ((!this.jE) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.jF);
});
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().i($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  fU: 1
}));
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().un(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().um(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sR(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sQ(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().q4(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().l7(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.l7 = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = (+Math.floor((1.0E-9 * approxNum)));
    var approxRem = ((rlo - Math.imul(1000000000, (approxQuot | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = ((approxRem - 1000000000) | 0);
    }
    var this$7 = approxRem;
    var remStr = ("" + this$7);
    var $x_1 = approxQuot;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.q4 = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.sQ = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  } else {
    var $x_1 = this.iA(rlo, rhi, rlo$1, rhi$1, true);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  }
});
$p.sR = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo, hi);
    }
  } else {
    return this.iA(alo, ahi, blo, bhi, true);
  }
});
$p.um = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + ((((lo$2 & rlo$1) | ((lo$2 | rlo$1) & (~lo$3))) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((lo$2 - rlo$1) | 0);
      var hi$4 = ((((hi$2 - rhi$1) | 0) + ((((~lo$2) & rlo$1) | ((~(lo$2 ^ rlo$1)) & lo$4)) >> 31)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  } else {
    var $x_1 = this.iA(rlo, rhi, rlo$1, rhi$1, false);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if ((ahi < 0)) {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.un = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + ((((lo$2 & blo) | ((lo$2 | blo) & (~lo$3))) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((lo$2 - blo) | 0);
      var hi$4 = ((((hi$2 - bhi) | 0) + ((((~lo$2) & blo) | ((~(lo$2 ^ blo)) & lo$4)) >> 31)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else {
    return this.iA(alo, ahi, blo, bhi, false);
  }
});
$p.iA = (function(alo, ahi, blo, bhi, askQuotient) {
  var quot1 = 0;
  if ((bhi >= 0)) {
    var lo = (blo << 1);
    var hi = (((blo >>> 31) | 0) | (bhi << 1));
    if (((ahi === hi) ? ((alo >>> 0) >= (lo >>> 0)) : ((ahi >>> 0) > (hi >>> 0)))) {
      quot1 = 2;
      var lo$1 = ((alo - lo) | 0);
      var hi$1 = ((((ahi - hi) | 0) + ((((~alo) & lo) | ((~(alo ^ lo)) & lo$1)) >> 31)) | 0);
      var rem1_$_lo = lo$1;
      var rem1_$_hi = hi$1;
    } else {
      var rem1_$_lo = alo;
      var rem1_$_hi = ahi;
    }
  } else {
    var rem1_$_lo = alo;
    var rem1_$_hi = ahi;
  }
  var rem1LTUb = ((rem1_$_hi === bhi) ? ((rem1_$_lo >>> 0) < (blo >>> 0)) : ((rem1_$_hi >>> 0) < (bhi >>> 0)));
  if (askQuotient) {
    if (rem1LTUb) {
      var lo$2 = quot1;
      return $bL(lo$2, 0);
    } else {
      var lo$3 = ((1 + quot1) | 0);
      return $bL(lo$3, 0);
    }
  } else if (rem1LTUb) {
    return $bL(rem1_$_lo, rem1_$_hi);
  } else {
    var lo$4 = ((rem1_$_lo - blo) | 0);
    var hi$2 = ((((rem1_$_hi - bhi) | 0) + ((((~rem1_$_lo) & blo) | ((~(rem1_$_lo ^ blo)) & lo$4)) >> 31)) | 0);
    return $bL(lo$4, hi$2);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  fW: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().T(dest, j, $m_sr_ScalaRunTime$().ar(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.r().C)(len);
  $m_ju_Arrays$().sZ(result, (void 0));
  return result;
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.q0 = (function(it, evidence$1) {
  var n = it.s();
  if ((n > (-1))) {
    var elements = evidence$1.bu(n);
    var iterator = it.d();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().T(elements, i, iterator.f());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.aK();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.d();
    while (iterator$2.j()) {
      var elem = iterator$2.f();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().gb(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().ga(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
});
$p.ew = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.y.Z && $objectGetClass(dest).y.R(srcClass.y))) {
    src.v(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.pD = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  }
  if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().W(original, newLength);
  }
  if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().pG(original, newLength);
  }
  if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().sF(original, newLength);
  }
  if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().pH(original, newLength);
  }
  if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().sG(original, newLength);
  }
  if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().pF(original, newLength);
  }
  if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().pE(original, newLength);
  }
  if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().pI(original, newLength);
  }
  if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().pJ(original, newLength);
  }
  throw new $c_s_MatchError(original);
});
$p.sE = (function(original, newLength, ct) {
  var runtimeClass = ct.aK();
  if (((runtimeClass !== null) && (runtimeClass === $d_V.l()))) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if (runtimeClass.y.R($objectGetClass(original).y.Q().y)) {
    return (runtimeClass.y.X ? this.pD(original, newLength) : $m_ju_Arrays$().kp(original, newLength, $objectGetClass(runtimeClass.y.U(0))));
  } else {
    var dest = ct.bu(newLength);
    $m_s_Array$().ew(original, 0, dest, 0, $m_jl_reflect_Array$().aP(original));
    return dest;
  }
});
$p.pX = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().l(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  fX: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_Array$EmptyArrays$() {
  this.jG = null;
  this.oc = null;
  $n_s_Array$EmptyArrays$ = this;
  this.jG = new $ac_I(0);
  this.oc = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  fY: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  aY: 1
}));
var $d_F1 = new $TypeData().i(1, "scala.Function1", ({
  i: 1
}));
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
$p.pC = (function(xs) {
  return ((xs === null) ? null : $m_sc_ArrayOps$().r4(xs));
});
/** @constructor */
function $c_s_PartialFunction$() {
  this.of = null;
  this.hM = null;
  $n_s_PartialFunction$ = this;
  this.of = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => this.of));
  this.hM = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  g4: 1
}));
var $n_s_PartialFunction$;
function $m_s_PartialFunction$() {
  if ((!$n_s_PartialFunction$)) {
    $n_s_PartialFunction$ = new $c_s_PartialFunction$();
  }
  return $n_s_PartialFunction$;
}
function $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len$1, \u03b4this$2, ord$1) {
  if ((len$1 < 300)) {
    var a = $m_sr_ScalaRunTime$().pu(\u03b4this$2);
    $m_s_util_Sorting$().l4(a, 0, $m_jl_reflect_Array$().aP(a), ord$1);
    return a;
  } else {
    if ($d_O.R($objectGetClass(\u03b4this$2).y.Q().y)) {
      var a$2 = $m_ju_Arrays$().kp(\u03b4this$2, len$1, $d_O.r().l());
    } else {
      var dest = new $ac_O(len$1);
      $m_s_Array$().ew(\u03b4this$2, 0, dest, 0, $m_jl_reflect_Array$().aP(\u03b4this$2));
      var a$2 = dest;
    }
    $m_ju_Arrays$().gd(a$2, ord$1);
    return $m_s_Array$().sE(a$2, len$1, $m_s_reflect_ClassTag$().h2($objectGetClass(\u03b4this$2).y.Q()));
  }
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.oi = null;
  $n_sc_ArrayOps$ = this;
  this.oi = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_ArrayOps$().oi));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.v0 = (function(this$, ord) {
  var len = $m_jl_reflect_Array$().aP(this$);
  if ((len <= 1)) {
    return $m_sr_ScalaRunTime$().pu(this$);
  } else if ((this$ instanceof $ac_O)) {
    var a = $m_ju_Arrays$().W(this$, len);
    $m_ju_Arrays$().gd(a, ord);
    return a;
  } else if ((this$ instanceof $ac_I)) {
    if ((ord === $m_s_math_Ordering$Int$())) {
      var a$2 = $m_ju_Arrays$().pG(this$, len);
      $m_ju_Arrays$().qT(a$2);
      return a$2;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_J)) {
    if ((ord === $m_s_math_Ordering$Long$())) {
      var a$3 = $m_ju_Arrays$().pH(this$, len);
      $m_ju_Arrays$().qU(a$3);
      return a$3;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_C)) {
    if ((ord === $m_s_math_Ordering$Char$())) {
      var a$4 = $m_ju_Arrays$().pF(this$, len);
      $m_ju_Arrays$().qS(a$4);
      return a$4;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_B)) {
    if ((ord === $m_s_math_Ordering$Byte$())) {
      var a$5 = $m_ju_Arrays$().pE(this$, len);
      $m_ju_Arrays$().qR(a$5);
      return a$5;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_S)) {
    if ((ord === $m_s_math_Ordering$Short$())) {
      var a$6 = $m_ju_Arrays$().pI(this$, len);
      $m_ju_Arrays$().qV(a$6);
      return a$6;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_Z)) {
    if ((ord === $m_s_math_Ordering$Boolean$())) {
      var a$7 = $m_ju_Arrays$().pJ(this$, len);
      $m_s_util_Sorting$().l4(a$7, 0, a$7.a.length, $m_s_math_Ordering$Boolean$());
      return a$7;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else {
    return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
  }
});
$p.t8 = (function(this$, f) {
  var len = $m_jl_reflect_Array$().aP(this$);
  var i = 0;
  if ((this$ instanceof $ac_O)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_I)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_D)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_J)) {
    while ((i < len)) {
      var $x_2 = this$.a;
      var $x_3 = (i << 1);
      var $x_1_$_lo = $x_2[$x_3];
      var $x_1_$_hi = $x_2[(($x_3 + 1) | 0)];
      f.e($bL($x_1_$_lo, $x_1_$_hi));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_F)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_C)) {
    while ((i < len)) {
      f.e($bC(this$.a[i]));
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_B)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_S)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else if ((this$ instanceof $ac_Z)) {
    while ((i < len)) {
      f.e(this$.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    throw new $c_s_MatchError(this$);
  }
});
$p.r4 = (function(this$) {
  return $m_sci_ArraySeq$().fj($m_s_Array$().pD(this$, $m_jl_reflect_Array$().aP(this$)));
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  gh: 1
}));
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$();
  }
  return $n_sc_ArrayOps$;
}
/** @constructor */
function $c_sc_Hashing$() {
}
$p = $c_sc_Hashing$.prototype = new $h_O();
$p.constructor = $c_sc_Hashing$;
/** @constructor */
function $h_sc_Hashing$() {
}
$h_sc_Hashing$.prototype = $p;
$p.cA = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  gq: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.d();
  while (it.j()) {
    f.e(it.f());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.d();
  while ((res && it.j())) {
    res = (!(!p.e(it.f())));
  }
  return res;
}
function $f_sc_IterableOnceOps__foldLeft__O__F2__O($thiz, z, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    return $p_sc_IterableOnceOps__loop$1__F2__sc_IndexedSeq__I__I__O__O($thiz, op, $thiz, 0, $thiz.i(), z);
  } else {
    var result = z;
    var it = $thiz.d();
    while (it.j()) {
      result = op.bN(result, it.f());
    }
    return result;
  }
}
function $f_sc_IterableOnceOps__reduceLeft__F2__O($thiz, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    if (($thiz.i() > 0)) {
      var z = $thiz.o(0);
      return $p_sc_IterableOnceOps__loop$1__F2__sc_IndexedSeq__I__I__O__O($thiz, op, $thiz, 1, $thiz.i(), z);
    }
  }
  if (($thiz.s() === 0)) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
  var it = $thiz.d();
  if (it.j()) {
    var acc = it.f();
    while (it.j()) {
      acc = op.bN(acc, it.f());
    }
    return acc;
  } else {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  var x30 = $thiz.s();
  if ((x30 === (-1))) {
    return (!$thiz.d().j());
  }
  if ((x30 === 0)) {
    return true;
  }
  return false;
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.d();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.s();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().aP(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().aP(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.j())) {
    $m_sr_ScalaRunTime$().T(dest, i, it.f());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__sum__s_math_Numeric__O($thiz, num) {
  var x32 = $thiz.s();
  if ((x32 === (-1))) {
    return $thiz.dq(num.im(0), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2, y$2) => num.qD(x$2, y$2))));
  }
  if ((x32 === 0)) {
    return num.im(0);
  }
  return $thiz.du(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2$1, y$2$1) => num.qD(x$2$1, y$2$1))));
}
function $f_sc_IterableOnceOps__product__s_math_Numeric__O($thiz, num) {
  var x33 = $thiz.s();
  if ((x33 === (-1))) {
    return $thiz.dq(num.im(1), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2, y$2) => num.r2(x$2, y$2))));
  }
  if ((x33 === 0)) {
    return num.im(1);
  }
  return $thiz.du(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2$1, y$2$1) => num.r2(x$2$1, y$2$1))));
}
function $f_sc_IterableOnceOps__min__s_math_Ordering__O($thiz, ord) {
  var x34 = $thiz.s();
  if ((x34 === (-1))) {
    var it = $thiz.d();
    if (it.j()) {
      var acc = it.f();
      while (it.j()) {
        var x0 = acc;
        var x1 = it.f();
        acc = ord.cE(x0, x1);
      }
      return acc;
    } else {
      throw new $c_jl_UnsupportedOperationException("empty.min");
    }
  }
  if ((x34 === 0)) {
    throw new $c_jl_UnsupportedOperationException("empty.min");
  }
  return $thiz.du(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2, y$2) => ord.cE(x$2, y$2))));
}
function $f_sc_IterableOnceOps__max__s_math_Ordering__O($thiz, ord) {
  var x36 = $thiz.s();
  if ((x36 === (-1))) {
    var it = $thiz.d();
    if (it.j()) {
      var acc = it.f();
      while (it.j()) {
        var x0 = acc;
        var x1 = it.f();
        acc = ord.cD(x0, x1);
      }
      return acc;
    } else {
      throw new $c_jl_UnsupportedOperationException("empty.max");
    }
  }
  if ((x36 === 0)) {
    throw new $c_jl_UnsupportedOperationException("empty.max");
  }
  return $thiz.du(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2, y$2) => ord.cD(x$2, y$2))));
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.s() === 0) ? (("" + start) + end) : $thiz.cQ($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bh.t);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.bh;
  if ((start.length !== 0)) {
    jsb.t = (("" + jsb.t) + start);
  }
  var it = $thiz.d();
  if (it.j()) {
    var obj = it.f();
    jsb.t = (("" + jsb.t) + obj);
    while (it.j()) {
      if ((sep.length !== 0)) {
        jsb.t = (("" + jsb.t) + sep);
      }
      var obj$1 = it.f();
      jsb.t = (("" + jsb.t) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.t = (("" + jsb.t) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$1) {
  if (($thiz.s() >= 0)) {
    var length = $thiz.s();
    var destination = evidence$1.bu(length);
    $thiz.bm(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.aK();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.d();
    while (it.j()) {
      var elem = it.f();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().gb(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().ga(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
}
function $f_sc_IterableOnceOps__reversed__sc_Iterable($thiz) {
  var xs = $m_sci_Nil$();
  var it = $thiz.d();
  while (it.j()) {
    xs = new $c_sci_$colon$colon(it.f(), xs);
  }
  return xs;
}
function $p_sc_IterableOnceOps__loop$1__F2__sc_IndexedSeq__I__I__O__O($thiz, op$1, seq$1, at, end, acc) {
  var acc$tailLocal1 = acc;
  var at$tailLocal1 = at;
  while (true) {
    if ((at$tailLocal1 === end)) {
      return acc$tailLocal1;
    } else {
      var at$tailLocal1$tmp1 = ((1 + at$tailLocal1) | 0);
      var acc$tailLocal1$tmp1 = op$1.bN(acc$tailLocal1, seq$1.o(at$tailLocal1));
      at$tailLocal1 = at$tailLocal1$tmp1;
      acc$tailLocal1 = acc$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.oq = null;
  this.gw = null;
  this.oq = head;
  this.gw = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.tt = (function() {
  return this.oq.I().d();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  gA: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.ox = null;
  $n_sc_StringOps$ = this;
  this.ox = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.ox));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.sz = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.uB = (function(this$, arg) {
  return (false ? arg.vx() : arg);
});
$p.ey = (function(this$, args) {
  return $m_jl_String$().t9(this$, $m_sr_Arrays$().uH(args.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((arg$2) => this.uB(this$, arg$2)))), $d_O.l()));
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  gL: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$p = $c_scg_CommonErrors$.prototype = new $h_O();
$p.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $p;
$p.ha = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  gQ: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.oE = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().qf($m_jl_System$SystemProperties$().kI("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.oE = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  gZ: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sci_LazyList$EmptyMarker$() {
}
$p = $c_sci_LazyList$EmptyMarker$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$EmptyMarker$;
/** @constructor */
function $h_sci_LazyList$EmptyMarker$() {
}
$h_sci_LazyList$EmptyMarker$.prototype = $p;
var $d_sci_LazyList$EmptyMarker$ = new $TypeData().i($c_sci_LazyList$EmptyMarker$, "scala.collection.immutable.LazyList$EmptyMarker$", ({
  h2: 1
}));
var $n_sci_LazyList$EmptyMarker$;
function $m_sci_LazyList$EmptyMarker$() {
  if ((!$n_sci_LazyList$EmptyMarker$)) {
    $n_sci_LazyList$EmptyMarker$ = new $c_sci_LazyList$EmptyMarker$();
  }
  return $n_sci_LazyList$EmptyMarker$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.jO = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.kw = (function() {
  var state = this.jO;
  if ((state === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized");
  }
  return state.I();
});
$p.kL = (function(state) {
  if ((this.jO !== null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized");
  }
  this.jO = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  h4: 1
}));
/** @constructor */
function $c_sci_LazyList$MidEvaluation$() {
}
$p = $c_sci_LazyList$MidEvaluation$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$MidEvaluation$;
/** @constructor */
function $h_sci_LazyList$MidEvaluation$() {
}
$h_sci_LazyList$MidEvaluation$.prototype = $p;
var $d_sci_LazyList$MidEvaluation$ = new $TypeData().i($c_sci_LazyList$MidEvaluation$, "scala.collection.immutable.LazyList$MidEvaluation$", ({
  h6: 1
}));
var $n_sci_LazyList$MidEvaluation$;
function $m_sci_LazyList$MidEvaluation$() {
  if ((!$n_sci_LazyList$MidEvaluation$)) {
    $n_sci_LazyList$MidEvaluation$ = new $c_sci_LazyList$MidEvaluation$();
  }
  return $n_sci_LazyList$MidEvaluation$;
}
/** @constructor */
function $c_sci_MapNode$() {
  this.oH = null;
  $n_sci_MapNode$ = this;
  $m_s_reflect_ManifestFactory$IntManifest$();
  this.oH = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  hl: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (($m_jl_reflect_Array$().aP(as) - 1) | 0)));
}
/** @constructor */
function $c_sci_Node() {
}
$p = $c_sci_Node.prototype = new $h_O();
$p.constructor = $c_sci_Node;
/** @constructor */
function $h_sci_Node() {
}
$h_sci_Node.prototype = $p;
$p.qF = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > ((as.a.length - 1) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((as.a.length - 1) | 0));
  as.v(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = ((((as.a.length - ix) | 0) - 1) | 0);
  as.v(srcPos, result, ix, length);
  return result;
});
$p.tB = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.v(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.v(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  b7: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.gK = 0;
  $n_sci_Node$ = this;
  this.gK = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.eC = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.e0 = (function(mask) {
  return (1 << mask);
});
$p.tv = (function(bitmap, bitpos) {
  return $m_jl_Integer$().dm((bitmap & ((bitpos - 1) | 0)));
});
$p.cB = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.tv(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  hp: 1
}));
var $n_sci_Node$;
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$();
  }
  return $n_sci_Node$;
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.jS = null;
  this.bM = null;
  this.dj = null;
  this.fM = null;
  this.jT = null;
  this.oL = null;
  $n_sci_VectorStatics$ = this;
  this.jS = new $ac_O(0);
  this.bM = new ($d_O.r().r().C)(0);
  this.dj = new ($d_O.r().r().r().C)(0);
  this.fM = new ($d_O.r().r().r().r().C)(0);
  this.jT = new ($d_O.r().r().r().r().r().C)(0);
  this.oL = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.fV = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.v(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.F = (function(a, elem) {
  var ac = $m_ju_Arrays$().W(a, ((1 + a.a.length) | 0));
  ac.a[((ac.a.length - 1) | 0)] = elem;
  return ac;
});
$p.dn = (function(elem, a) {
  var ac = $objectGetClass(a).y.Q().y.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.v(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.ky = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.e(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = ((level - 1) | 0);
    while ((i < len)) {
      this.ky(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.cC = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.e(v1);
    if ((!Object.is(v1, v2))) {
      return this.tW(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.tW = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.v(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = f.e(a.a[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.ad = (function(n, a, f) {
  if ((n === 1)) {
    return this.cC(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.ad(((n - 1) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.tX(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.tX = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).y.Q().y.U(a.a.length);
  if ((at > 0)) {
    a.v(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.ad(((n - 1) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  hJ: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
/** @constructor */
function $c_scm_ArrayBuilder$() {
}
$p = $c_scm_ArrayBuilder$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder$;
/** @constructor */
function $h_scm_ArrayBuilder$() {
}
$h_scm_ArrayBuilder$.prototype = $p;
$p.gb = (function(runtimeClass) {
  return ((runtimeClass === $d_B.l()) ? 0 : ((runtimeClass === $d_S.l()) ? 0 : ((runtimeClass === $d_C.l()) ? 0 : ((runtimeClass === $d_I.l()) ? 0 : ((runtimeClass === $d_J.l()) ? $bL(0, 0) : ((runtimeClass === $d_F.l()) ? 0.0 : ((runtimeClass === $d_D.l()) ? 0.0 : ((runtimeClass === $d_Z.l()) ? false : ((runtimeClass === $d_V.l()) ? (void 0) : null)))))))));
});
$p.ga = (function(runtimeClass, a) {
  var len = (a.length | 0);
  if ((runtimeClass === $d_C.l())) {
    var result = new $ac_C(len);
    var i = 0;
    while ((i !== len)) {
      result.a[i] = (65535 & (a[i] | 0));
      i = ((1 + i) | 0);
    }
    return result;
  } else {
    var result$2 = runtimeClass.y.U(len);
    var i$2 = 0;
    while ((i$2 !== len)) {
      $m_sr_ScalaRunTime$().T(result$2, i$2, a[i$2]);
      i$2 = ((1 + i$2) | 0);
    }
    return result$2;
  }
});
var $d_scm_ArrayBuilder$ = new $TypeData().i($c_scm_ArrayBuilder$, "scala.collection.mutable.ArrayBuilder$", ({
  hR: 1
}));
var $n_scm_ArrayBuilder$;
function $m_scm_ArrayBuilder$() {
  if ((!$n_scm_ArrayBuilder$)) {
    $n_scm_ArrayBuilder$ = new $c_scm_ArrayBuilder$();
  }
  return $n_scm_ArrayBuilder$;
}
/** @constructor */
function $c_scm_HashMap$Node(_key, _hash, _value, _next) {
  this.eq = null;
  this.dl = 0;
  this.bU = null;
  this.aV = null;
  this.eq = _key;
  this.dl = _hash;
  this.bU = _value;
  this.aV = _next;
}
$p = $c_scm_HashMap$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashMap$Node;
/** @constructor */
function $h_scm_HashMap$Node() {
}
$h_scm_HashMap$Node.prototype = $p;
$p.h8 = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.dl) && $m_sr_BoxesRunTime$().l(k, \u03b4this$tailLocal1.eq))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.aV === null) || (\u03b4this$tailLocal1.dl > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.aV;
    }
  }
});
$p.cT = (function(f) {
  var \u03b4this$tailLocal3 = this;
  while (true) {
    f.bN(\u03b4this$tailLocal3.eq, \u03b4this$tailLocal3.bU);
    if ((\u03b4this$tailLocal3.aV !== null)) {
      \u03b4this$tailLocal3 = \u03b4this$tailLocal3.aV;
    } else {
      return (void 0);
    }
  }
});
$p.u = (function() {
  return ((((((("Node(" + this.eq) + ", ") + this.bU) + ", ") + this.dl) + ") -> ") + this.aV);
});
var $d_scm_HashMap$Node = new $TypeData().i($c_scm_HashMap$Node, "scala.collection.mutable.HashMap$Node", ({
  i5: 1
}));
/** @constructor */
function $c_scm_HashSet$Node(_key, _hash, _next) {
  this.fQ = null;
  this.dV = 0;
  this.bg = null;
  this.fQ = _key;
  this.dV = _hash;
  this.bg = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.t2 = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.dV) && $m_sr_BoxesRunTime$().l(k, \u03b4this$tailLocal1.fQ))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.bg === null) || (\u03b4this$tailLocal1.dV > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.bg;
    }
  }
});
$p.u = (function() {
  return ((((("Node(" + this.fQ) + ", ") + this.dV) + ") -> ") + this.bg);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  ib: 1
}));
/** @constructor */
function $c_scm_MutationTracker$() {
}
$p = $c_scm_MutationTracker$.prototype = new $h_O();
$p.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $p;
$p.kj = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  il: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.rC = null;
  this.rL = null;
  this.rD = null;
  this.rG = null;
  this.rH = null;
  this.rF = null;
  this.rE = null;
  this.rB = null;
  this.rM = null;
  this.rz = null;
  this.rK = null;
  this.rA = null;
  this.rI = null;
  this.rJ = null;
  $n_s_reflect_ClassTag$ = this;
  this.rC = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.rL = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.rD = $m_s_reflect_ManifestFactory$CharManifest$();
  this.rG = $m_s_reflect_ManifestFactory$IntManifest$();
  this.rH = $m_s_reflect_ManifestFactory$LongManifest$();
  this.rF = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.rE = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.rB = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.rM = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.rz = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.rK = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.rA = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.rI = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.rJ = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.h2 = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  iQ: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
/** @constructor */
function $c_sr_Arrays$() {
}
$p = $c_sr_Arrays$.prototype = new $h_O();
$p.constructor = $c_sr_Arrays$;
/** @constructor */
function $h_sr_Arrays$() {
}
$h_sr_Arrays$.prototype = $p;
$p.uH = (function(xs, clazz) {
  var length = xs.i();
  var arr = clazz.y.U(length);
  xs.bm(arr, 0, 2147483647);
  return arr;
});
var $d_sr_Arrays$ = new $TypeData().i($c_sr_Arrays$, "scala.runtime.Arrays$", ({
  jj: 1
}));
var $n_sr_Arrays$;
function $m_sr_Arrays$() {
  if ((!$n_sr_Arrays$)) {
    $n_sr_Arrays$ = new $c_sr_Arrays$();
  }
  return $n_sr_Arrays$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.l = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.sX(x, y) : ((x instanceof $Char) ? this.sV(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.sX = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.sW(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $Long)) {
      var $x_1 = $uJ(xn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = y.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.sW = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $Long)) {
      var $x_1 = $uJ(yn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      return (x2 === ((4.294967296E9 * x3_$_hi) + (x3_$_lo >>> 0.0)));
    } else {
      return (false && yn.p(x2));
    }
  } else if ((xn instanceof $Long)) {
    var $x_2 = $uJ(xn);
    var x3$2_$_lo = $x_2.l;
    var x3$2_$_hi = $x_2.h;
    if ((yn instanceof $Long)) {
      var $x_3 = $uJ(yn);
      var x2$3_$_lo = $x_3.l;
      var x2$3_$_hi = $x_3.h;
      return (((x3$2_$_lo ^ x2$3_$_lo) | (x3$2_$_hi ^ x2$3_$_hi)) === 0);
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * x3$2_$_hi) + (x3$2_$_lo >>> 0.0)) === x3$3);
    } else {
      return (false && yn.p($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.sV = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $Long)) {
      var $x_1 = $uJ(y);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = xc.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  jl: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  jp: 1
}));
/** @constructor */
function $c_sr_Scala3RunTime$() {
}
$p = $c_sr_Scala3RunTime$.prototype = new $h_O();
$p.constructor = $c_sr_Scala3RunTime$;
/** @constructor */
function $h_sr_Scala3RunTime$() {
}
$h_sr_Scala3RunTime$.prototype = $p;
$p.cF = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  jr: 1
}));
var $n_sr_Scala3RunTime$;
function $m_sr_Scala3RunTime$() {
  if ((!$n_sr_Scala3RunTime$)) {
    $n_sr_Scala3RunTime$ = new $c_sr_Scala3RunTime$();
  }
  return $n_sr_Scala3RunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.ar = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.a;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.T = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.a;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.pu = (function(xs) {
  if ((xs instanceof $ac_O)) {
    return xs.g();
  }
  if ((xs instanceof $ac_I)) {
    return xs.g();
  }
  if ((xs instanceof $ac_D)) {
    return xs.g();
  }
  if ((xs instanceof $ac_J)) {
    return xs.g();
  }
  if ((xs instanceof $ac_F)) {
    return xs.g();
  }
  if ((xs instanceof $ac_C)) {
    return xs.g();
  }
  if ((xs instanceof $ac_B)) {
    return xs.g();
  }
  if ((xs instanceof $ac_S)) {
    return xs.g();
  }
  if ((xs instanceof $ac_Z)) {
    return xs.g();
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.kb = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.cG(), (x.bx() + "("), ",", ")");
});
$p.ez = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().fj(xs));
});
$p.cJ = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  js: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.B = (function(hash, data) {
  var h = this.e2(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.e2 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.aX = (function(hash, length) {
  return this.sl((hash ^ length));
});
$p.sl = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.tR = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.sT = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().q4(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.E = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.sT((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.tR($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.tC = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  ju: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
}
$p = $c_sr_Statics$PFMarker$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
}
$h_sr_Statics$PFMarker$.prototype = $p;
var $d_sr_Statics$PFMarker$ = new $TypeData().i($c_sr_Statics$PFMarker$, "scala.runtime.Statics$PFMarker$", ({
  jv: 1
}));
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$();
  }
  return $n_sr_Statics$PFMarker$;
}
/** @constructor */
function $c_sjs_js_timers_package$() {
}
$p = $c_sjs_js_timers_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
}
$h_sjs_js_timers_package$.prototype = $p;
$p.uR = (function(interval, body) {
  return setTimeout((() => {
    body.I();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  jB: 1
}));
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$();
  }
  return $n_sjs_js_timers_package$;
}
/** @constructor */
function $c_sjsr_Compat$() {
}
$p = $c_sjsr_Compat$.prototype = new $h_O();
$p.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $p;
$p.v8 = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.i3;
  } else {
    var result = [];
    seq.bW(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  jM: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
/** @constructor */
function $c_s_util_Sorting$() {
}
$p = $c_s_util_Sorting$.prototype = new $h_O();
$p.constructor = $c_s_util_Sorting$;
/** @constructor */
function $h_s_util_Sorting$() {
}
$h_s_util_Sorting$.prototype = $p;
$p.au = (function(a, i0, iN, ord) {
  var n = ((iN - i0) | 0);
  if ((n < 2)) {
    return (void 0);
  }
  if ((ord.Z($m_sr_ScalaRunTime$().ar(a, i0), $m_sr_ScalaRunTime$().ar(a, ((1 + i0) | 0))) > 0)) {
    var temp = $m_sr_ScalaRunTime$().ar(a, i0);
    $m_sr_ScalaRunTime$().T(a, i0, $m_sr_ScalaRunTime$().ar(a, ((1 + i0) | 0)));
    $m_sr_ScalaRunTime$().T(a, ((1 + i0) | 0), temp);
  }
  var m = 2;
  while ((m < n)) {
    var next = $m_sr_ScalaRunTime$().ar(a, ((i0 + m) | 0));
    if ((ord.Z(next, $m_sr_ScalaRunTime$().ar(a, ((((i0 + m) | 0) - 1) | 0))) < 0)) {
      var iA = i0;
      var iB = ((((i0 + m) | 0) - 1) | 0);
      while ((((iB - iA) | 0) > 1)) {
        var ix = ((((iA + iB) | 0) >>> 1) | 0);
        if ((ord.Z(next, $m_sr_ScalaRunTime$().ar(a, ix)) < 0)) {
          iB = ix;
        } else {
          iA = ix;
        }
      }
      var ix$2 = ((iA + ((ord.Z(next, $m_sr_ScalaRunTime$().ar(a, iA)) < 0) ? 0 : 1)) | 0);
      var i = ((i0 + m) | 0);
      while ((i > ix$2)) {
        $m_sr_ScalaRunTime$().T(a, i, $m_sr_ScalaRunTime$().ar(a, ((i - 1) | 0)));
        i = ((i - 1) | 0);
      }
      $m_sr_ScalaRunTime$().T(a, ix$2, next);
    }
    m = ((1 + m) | 0);
  }
});
$p.S = (function(a, i0, iN, ord, scratch, evidence$2) {
  if ((((iN - i0) | 0) < 32)) {
    this.au(a, i0, iN, ord);
  } else {
    var iK = ((((i0 + iN) | 0) >>> 1) | 0);
    var sc = ((scratch === null) ? evidence$2.bu(((iK - i0) | 0)) : scratch);
    this.S(a, i0, iK, ord, sc, evidence$2);
    this.S(a, iK, iN, ord, sc, evidence$2);
    this.av(a, i0, iK, iN, ord, sc);
  }
});
$p.av = (function(a, i0, iK, iN, ord, scratch) {
  if ((ord.Z($m_sr_ScalaRunTime$().ar(a, ((iK - 1) | 0)), $m_sr_ScalaRunTime$().ar(a, iK)) > 0)) {
    var i = i0;
    var jN = ((iK - i0) | 0);
    var j = 0;
    while ((i < iK)) {
      $m_sr_ScalaRunTime$().T(scratch, j, $m_sr_ScalaRunTime$().ar(a, i));
      i = ((1 + i) | 0);
      j = ((1 + j) | 0);
    }
    var k = i0;
    j = 0;
    while (((i < iN) && (j < jN))) {
      if ((ord.Z($m_sr_ScalaRunTime$().ar(a, i), $m_sr_ScalaRunTime$().ar(scratch, j)) < 0)) {
        $m_sr_ScalaRunTime$().T(a, k, $m_sr_ScalaRunTime$().ar(a, i));
        i = ((1 + i) | 0);
      } else {
        $m_sr_ScalaRunTime$().T(a, k, $m_sr_ScalaRunTime$().ar(scratch, j));
        j = ((1 + j) | 0);
      }
      k = ((1 + k) | 0);
    }
    while ((j < jN)) {
      $m_sr_ScalaRunTime$().T(a, k, $m_sr_ScalaRunTime$().ar(scratch, j));
      j = ((1 + j) | 0);
      k = ((1 + k) | 0);
    }
  }
});
$p.uE = (function(a, from, until) {
  var i = from;
  var n = 0;
  while ((i < until)) {
    if ((!a.a[i])) {
      n = ((1 + n) | 0);
    }
    i = ((1 + i) | 0);
  }
  i = 0;
  while ((i < n)) {
    a.a[((from + i) | 0)] = false;
    i = ((1 + i) | 0);
  }
  while ((((from + i) | 0) < until)) {
    a.a[((from + i) | 0)] = true;
    i = ((1 + i) | 0);
  }
});
$p.l4 = (function(a, from, until, evidence$4) {
  $m_s_math_Ordering$();
  if ((a instanceof $ac_O)) {
    if ((($m_jl_reflect_Array$().aP(a) > 1) && (evidence$4 === null))) {
      throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "Ordering");
    }
    $m_ju_Arrays$().uY(a, from, until, evidence$4);
  } else if ((a instanceof $ac_I)) {
    if ((evidence$4 === $m_s_math_Ordering$Int$())) {
      $m_ju_Arrays$().uV(a, from, until);
    } else {
      var evidence$2 = $m_s_reflect_ManifestFactory$IntManifest$();
      if ((((until - from) | 0) < 32)) {
        this.au(a, from, until, evidence$4);
      } else {
        var iK = ((((from + until) | 0) >>> 1) | 0);
        var sc = new $ac_I(((iK - from) | 0));
        if ((((iK - from) | 0) < 32)) {
          this.au(a, from, iK, evidence$4);
        } else {
          var iK$1 = ((((from + iK) | 0) >>> 1) | 0);
          this.S(a, from, iK$1, evidence$4, sc, evidence$2);
          this.S(a, iK$1, iK, evidence$4, sc, evidence$2);
          this.av(a, from, iK$1, iK, evidence$4, sc);
        }
        if ((((until - iK) | 0) < 32)) {
          this.au(a, iK, until, evidence$4);
        } else {
          var iK$2 = ((((iK + until) | 0) >>> 1) | 0);
          this.S(a, iK, iK$2, evidence$4, sc, evidence$2);
          this.S(a, iK$2, until, evidence$4, sc, evidence$2);
          this.av(a, iK, iK$2, until, evidence$4, sc);
        }
        this.av(a, from, iK, until, evidence$4, sc);
      }
    }
  } else if ((a instanceof $ac_D)) {
    var evidence$2$1 = $m_s_reflect_ManifestFactory$DoubleManifest$();
    if ((((until - from) | 0) < 32)) {
      this.au(a, from, until, evidence$4);
    } else {
      var iK$3 = ((((from + until) | 0) >>> 1) | 0);
      var sc$1 = new $ac_D(((iK$3 - from) | 0));
      if ((((iK$3 - from) | 0) < 32)) {
        this.au(a, from, iK$3, evidence$4);
      } else {
        var iK$4 = ((((from + iK$3) | 0) >>> 1) | 0);
        this.S(a, from, iK$4, evidence$4, sc$1, evidence$2$1);
        this.S(a, iK$4, iK$3, evidence$4, sc$1, evidence$2$1);
        this.av(a, from, iK$4, iK$3, evidence$4, sc$1);
      }
      if ((((until - iK$3) | 0) < 32)) {
        this.au(a, iK$3, until, evidence$4);
      } else {
        var iK$5 = ((((iK$3 + until) | 0) >>> 1) | 0);
        this.S(a, iK$3, iK$5, evidence$4, sc$1, evidence$2$1);
        this.S(a, iK$5, until, evidence$4, sc$1, evidence$2$1);
        this.av(a, iK$3, iK$5, until, evidence$4, sc$1);
      }
      this.av(a, from, iK$3, until, evidence$4, sc$1);
    }
  } else if ((a instanceof $ac_J)) {
    if ((evidence$4 === $m_s_math_Ordering$Long$())) {
      $m_ju_Arrays$().uW(a, from, until);
    } else {
      var evidence$2$2 = $m_s_reflect_ManifestFactory$LongManifest$();
      if ((((until - from) | 0) < 32)) {
        this.au(a, from, until, evidence$4);
      } else {
        var iK$6 = ((((from + until) | 0) >>> 1) | 0);
        var sc$2 = new $ac_J(((iK$6 - from) | 0));
        if ((((iK$6 - from) | 0) < 32)) {
          this.au(a, from, iK$6, evidence$4);
        } else {
          var iK$7 = ((((from + iK$6) | 0) >>> 1) | 0);
          this.S(a, from, iK$7, evidence$4, sc$2, evidence$2$2);
          this.S(a, iK$7, iK$6, evidence$4, sc$2, evidence$2$2);
          this.av(a, from, iK$7, iK$6, evidence$4, sc$2);
        }
        if ((((until - iK$6) | 0) < 32)) {
          this.au(a, iK$6, until, evidence$4);
        } else {
          var iK$8 = ((((iK$6 + until) | 0) >>> 1) | 0);
          this.S(a, iK$6, iK$8, evidence$4, sc$2, evidence$2$2);
          this.S(a, iK$8, until, evidence$4, sc$2, evidence$2$2);
          this.av(a, iK$6, iK$8, until, evidence$4, sc$2);
        }
        this.av(a, from, iK$6, until, evidence$4, sc$2);
      }
    }
  } else if ((a instanceof $ac_F)) {
    var evidence$2$3 = $m_s_reflect_ManifestFactory$FloatManifest$();
    if ((((until - from) | 0) < 32)) {
      this.au(a, from, until, evidence$4);
    } else {
      var iK$9 = ((((from + until) | 0) >>> 1) | 0);
      var sc$3 = new $ac_F(((iK$9 - from) | 0));
      if ((((iK$9 - from) | 0) < 32)) {
        this.au(a, from, iK$9, evidence$4);
      } else {
        var iK$10 = ((((from + iK$9) | 0) >>> 1) | 0);
        this.S(a, from, iK$10, evidence$4, sc$3, evidence$2$3);
        this.S(a, iK$10, iK$9, evidence$4, sc$3, evidence$2$3);
        this.av(a, from, iK$10, iK$9, evidence$4, sc$3);
      }
      if ((((until - iK$9) | 0) < 32)) {
        this.au(a, iK$9, until, evidence$4);
      } else {
        var iK$11 = ((((iK$9 + until) | 0) >>> 1) | 0);
        this.S(a, iK$9, iK$11, evidence$4, sc$3, evidence$2$3);
        this.S(a, iK$11, until, evidence$4, sc$3, evidence$2$3);
        this.av(a, iK$9, iK$11, until, evidence$4, sc$3);
      }
      this.av(a, from, iK$9, until, evidence$4, sc$3);
    }
  } else if ((a instanceof $ac_C)) {
    if ((evidence$4 === $m_s_math_Ordering$Char$())) {
      $m_ju_Arrays$().uU(a, from, until);
    } else {
      var evidence$2$4 = $m_s_reflect_ManifestFactory$CharManifest$();
      if ((((until - from) | 0) < 32)) {
        this.au(a, from, until, evidence$4);
      } else {
        var iK$12 = ((((from + until) | 0) >>> 1) | 0);
        var sc$4 = new $ac_C(((iK$12 - from) | 0));
        if ((((iK$12 - from) | 0) < 32)) {
          this.au(a, from, iK$12, evidence$4);
        } else {
          var iK$13 = ((((from + iK$12) | 0) >>> 1) | 0);
          this.S(a, from, iK$13, evidence$4, sc$4, evidence$2$4);
          this.S(a, iK$13, iK$12, evidence$4, sc$4, evidence$2$4);
          this.av(a, from, iK$13, iK$12, evidence$4, sc$4);
        }
        if ((((until - iK$12) | 0) < 32)) {
          this.au(a, iK$12, until, evidence$4);
        } else {
          var iK$14 = ((((iK$12 + until) | 0) >>> 1) | 0);
          this.S(a, iK$12, iK$14, evidence$4, sc$4, evidence$2$4);
          this.S(a, iK$14, until, evidence$4, sc$4, evidence$2$4);
          this.av(a, iK$12, iK$14, until, evidence$4, sc$4);
        }
        this.av(a, from, iK$12, until, evidence$4, sc$4);
      }
    }
  } else if ((a instanceof $ac_B)) {
    if ((evidence$4 === $m_s_math_Ordering$Byte$())) {
      $m_ju_Arrays$().uT(a, from, until);
    } else {
      var evidence$2$5 = $m_s_reflect_ManifestFactory$ByteManifest$();
      if ((((until - from) | 0) < 32)) {
        this.au(a, from, until, evidence$4);
      } else {
        var iK$15 = ((((from + until) | 0) >>> 1) | 0);
        var sc$5 = new $ac_B(((iK$15 - from) | 0));
        if ((((iK$15 - from) | 0) < 32)) {
          this.au(a, from, iK$15, evidence$4);
        } else {
          var iK$16 = ((((from + iK$15) | 0) >>> 1) | 0);
          this.S(a, from, iK$16, evidence$4, sc$5, evidence$2$5);
          this.S(a, iK$16, iK$15, evidence$4, sc$5, evidence$2$5);
          this.av(a, from, iK$16, iK$15, evidence$4, sc$5);
        }
        if ((((until - iK$15) | 0) < 32)) {
          this.au(a, iK$15, until, evidence$4);
        } else {
          var iK$17 = ((((iK$15 + until) | 0) >>> 1) | 0);
          this.S(a, iK$15, iK$17, evidence$4, sc$5, evidence$2$5);
          this.S(a, iK$17, until, evidence$4, sc$5, evidence$2$5);
          this.av(a, iK$15, iK$17, until, evidence$4, sc$5);
        }
        this.av(a, from, iK$15, until, evidence$4, sc$5);
      }
    }
  } else if ((a instanceof $ac_S)) {
    if ((evidence$4 === $m_s_math_Ordering$Short$())) {
      $m_ju_Arrays$().uX(a, from, until);
    } else {
      var evidence$2$6 = $m_s_reflect_ManifestFactory$ShortManifest$();
      if ((((until - from) | 0) < 32)) {
        this.au(a, from, until, evidence$4);
      } else {
        var iK$18 = ((((from + until) | 0) >>> 1) | 0);
        var sc$6 = new $ac_S(((iK$18 - from) | 0));
        if ((((iK$18 - from) | 0) < 32)) {
          this.au(a, from, iK$18, evidence$4);
        } else {
          var iK$19 = ((((from + iK$18) | 0) >>> 1) | 0);
          this.S(a, from, iK$19, evidence$4, sc$6, evidence$2$6);
          this.S(a, iK$19, iK$18, evidence$4, sc$6, evidence$2$6);
          this.av(a, from, iK$19, iK$18, evidence$4, sc$6);
        }
        if ((((until - iK$18) | 0) < 32)) {
          this.au(a, iK$18, until, evidence$4);
        } else {
          var iK$20 = ((((iK$18 + until) | 0) >>> 1) | 0);
          this.S(a, iK$18, iK$20, evidence$4, sc$6, evidence$2$6);
          this.S(a, iK$20, until, evidence$4, sc$6, evidence$2$6);
          this.av(a, iK$18, iK$20, until, evidence$4, sc$6);
        }
        this.av(a, from, iK$18, until, evidence$4, sc$6);
      }
    }
  } else if ((a instanceof $ac_Z)) {
    if ((evidence$4 === $m_s_math_Ordering$Boolean$())) {
      this.uE(a, from, until);
    } else {
      var evidence$2$7 = $m_s_reflect_ManifestFactory$BooleanManifest$();
      if ((((until - from) | 0) < 32)) {
        this.au(a, from, until, evidence$4);
      } else {
        var iK$21 = ((((from + until) | 0) >>> 1) | 0);
        var sc$7 = new $ac_Z(((iK$21 - from) | 0));
        if ((((iK$21 - from) | 0) < 32)) {
          this.au(a, from, iK$21, evidence$4);
        } else {
          var iK$22 = ((((from + iK$21) | 0) >>> 1) | 0);
          this.S(a, from, iK$22, evidence$4, sc$7, evidence$2$7);
          this.S(a, iK$22, iK$21, evidence$4, sc$7, evidence$2$7);
          this.av(a, from, iK$22, iK$21, evidence$4, sc$7);
        }
        if ((((until - iK$21) | 0) < 32)) {
          this.au(a, iK$21, until, evidence$4);
        } else {
          var iK$23 = ((((iK$21 + until) | 0) >>> 1) | 0);
          this.S(a, iK$21, iK$23, evidence$4, sc$7, evidence$2$7);
          this.S(a, iK$23, until, evidence$4, sc$7, evidence$2$7);
          this.av(a, iK$21, iK$23, until, evidence$4, sc$7);
        }
        this.av(a, from, iK$21, until, evidence$4, sc$7);
      }
    }
  } else if ((a === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  } else {
    throw new $c_s_MatchError(a);
  }
});
var $d_s_util_Sorting$ = new $TypeData().i($c_s_util_Sorting$, "scala.util.Sorting$", ({
  jP: 1
}));
var $n_s_util_Sorting$;
function $m_s_util_Sorting$() {
  if ((!$n_s_util_Sorting$)) {
    $n_s_util_Sorting$ = new $c_s_util_Sorting$();
  }
  return $n_s_util_Sorting$;
}
/** @constructor */
function $c_s_util_boundary$() {
}
$p = $c_s_util_boundary$.prototype = new $h_O();
$p.constructor = $c_s_util_boundary$;
/** @constructor */
function $h_s_util_boundary$() {
}
$h_s_util_boundary$.prototype = $p;
$p.sq = (function(label) {
  throw $m_s_util_boundary$Break$().sg(label, (void 0));
});
var $d_s_util_boundary$ = new $TypeData().i($c_s_util_boundary$, "scala.util.boundary$", ({
  jQ: 1
}));
var $n_s_util_boundary$;
function $m_s_util_boundary$() {
  if ((!$n_s_util_boundary$)) {
    $n_s_util_boundary$ = new $c_s_util_boundary$();
  }
  return $n_s_util_boundary$;
}
/** @constructor */
function $c_s_util_boundary$Break$() {
}
$p = $c_s_util_boundary$Break$.prototype = new $h_O();
$p.constructor = $c_s_util_boundary$Break$;
/** @constructor */
function $h_s_util_boundary$Break$() {
}
$h_s_util_boundary$Break$.prototype = $p;
$p.sg = (function(label, value) {
  return new $c_s_util_boundary$Break(label, value);
});
var $d_s_util_boundary$Break$ = new $TypeData().i($c_s_util_boundary$Break$, "scala.util.boundary$Break$", ({
  jR: 1
}));
var $n_s_util_boundary$Break$;
function $m_s_util_boundary$Break$() {
  if ((!$n_s_util_boundary$Break$)) {
    $n_s_util_boundary$Break$ = new $c_s_util_boundary$Break$();
  }
  return $n_s_util_boundary$Break$;
}
/** @constructor */
function $c_s_util_control_NonFatal$() {
}
$p = $c_s_util_control_NonFatal$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NonFatal$;
/** @constructor */
function $h_s_util_control_NonFatal$() {
}
$h_s_util_control_NonFatal$.prototype = $p;
$p.sd = (function(t) {
  matchAlts1: {
    matchAlts2: {
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      break matchAlts1;
    }
    return false;
  }
  return true;
});
$p.e3 = (function(t) {
  return (this.sd(t) ? new $c_s_Some(t) : $m_s_None$());
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  jU: 1
}));
var $n_s_util_control_NonFatal$;
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$();
  }
  return $n_s_util_control_NonFatal$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.B = (function(hash, data) {
  var h = this.e2(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.e2 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.aX = (function(hash, length) {
  return this.hp((hash ^ length));
});
$p.hp = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.r6 = (function(x, y, seed) {
  var h = seed;
  h = this.B(h, $f_T__hashCode__I("Tuple2"));
  h = this.B(h, x);
  h = this.B(h, y);
  return this.aX(h, 2);
});
$p.fg = (function(x, seed, ignorePrefix) {
  var arr = x.bv();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.bx()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.B(h, $f_T__hashCode__I(x.bx()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.B(h, $m_sr_Statics$().E(x.bw(i)));
      i = ((1 + i) | 0);
    }
    return this.aX(h, arr);
  }
});
$p.ki = (function(x, seed, caseClassName) {
  var arr = x.bv();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.bx()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.B(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.B(h, $m_sr_Statics$().E(x.bw(i)));
      i = ((1 + i) | 0);
    }
    return this.aX(h, arr);
  }
});
$p.iF = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.d();
  while (iterator.j()) {
    var x = iterator.f();
    var h = $m_sr_Statics$().E(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.B(h$2, a);
  h$2 = this.B(h$2, b);
  h$2 = this.e2(h$2, c);
  return this.aX(h$2, n);
});
$p.ud = (function(xs, seed) {
  var it = xs.d();
  var h = seed;
  if ((!it.j())) {
    return this.aX(h, 0);
  }
  var x0 = it.f();
  if ((!it.j())) {
    return this.aX(this.B(h, $m_sr_Statics$().E(x0)), 1);
  }
  var x1 = it.f();
  var initial = $m_sr_Statics$().E(x0);
  h = this.B(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().E(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.j()) {
    h = this.B(h, prev);
    var hash = $m_sr_Statics$().E(it.f());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.B(h, hash);
      i = ((1 + i) | 0);
      while (it.j()) {
        h = this.B(h, $m_sr_Statics$().E(it.f()));
        i = ((1 + i) | 0);
      }
      return this.aX(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.hp(this.B(this.B(h0, rangeDiff), prev));
});
$p.b4 = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().aP(a);
  switch (l) {
    case 0: {
      return this.aX(h, 0);
      break;
    }
    case 1: {
      return this.aX(this.B(h, $m_sr_Statics$().E($m_sr_ScalaRunTime$().ar(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().E($m_sr_ScalaRunTime$().ar(a, 0));
      h = this.B(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().E($m_sr_ScalaRunTime$().ar(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.B(h, prev);
        var hash = $m_sr_Statics$().E($m_sr_ScalaRunTime$().ar(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.B(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.B(h, $m_sr_Statics$().E($m_sr_ScalaRunTime$().ar(a, i)));
            i = ((1 + i) | 0);
          }
          return this.aX(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hp(this.B(this.B(h0, rangeDiff), prev));
    }
  }
});
$p.uj = (function(start, step, last, seed) {
  return this.hp(this.B(this.B(this.B(seed, start), step), last));
});
$p.tw = (function(a, seed) {
  var h = seed;
  var l = a.i();
  switch (l) {
    case 0: {
      return this.aX(h, 0);
      break;
    }
    case 1: {
      return this.aX(this.B(h, $m_sr_Statics$().E(a.o(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().E(a.o(0));
      h = this.B(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().E(a.o(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.B(h, prev);
        var hash = $m_sr_Statics$().E(a.o(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.B(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.B(h, $m_sr_Statics$().E(a.o(i)));
            i = ((1 + i) | 0);
          }
          return this.aX(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hp(this.B(this.B(h0, rangeDiff), prev));
    }
  }
});
$p.tQ = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.c())) {
    var head = elems.q();
    var tail = elems.w();
    var hash = $m_sr_Statics$().E(head);
    h = this.B(h, hash);
    switch (rangeState) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.uj(initial, rangeDiff, prev, seed) : this.aX(h, n));
});
function $s_Lscorry_Main__main__AT__V(args) {
  $m_Lscorry_Main$().tS(args);
}
/** @constructor */
function $c_Lscorry_Main$() {
}
$p = $c_Lscorry_Main$.prototype = new $h_O();
$p.constructor = $c_Lscorry_Main$;
/** @constructor */
function $h_Lscorry_Main$() {
}
$h_Lscorry_Main$.prototype = $p;
$p.tS = (function(args) {
  var inputText = $m_Lcom_raquo_laminar_api_package$().n.j2.pt("1.2 3.5 5.8 9.1 9.1 10");
  var numsSignal = new $c_Lcom_raquo_airstream_misc_MapSignal(inputText.eN, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((text$2) => {
    try {
      var nums = $m_Lscorry_SummaryStatistics$().uf(text$2);
      return (nums.c() ? $m_s_None$() : new $c_s_Some(nums));
    } catch (e) {
      if ((e instanceof $c_jl_NumberFormatException)) {
        return $m_s_None$();
      } else {
        throw e;
      }
    }
  })), $m_s_None$());
  var statsSignal = new $c_Lcom_raquo_airstream_misc_MapSignal(numsSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    if (($m_s_None$() === x$1$2)) {
      return $m_sci_Seq$().ih();
    }
    if ((x$1$2 instanceof $c_s_Some)) {
      var nums$1 = x$1$2.dB;
      var modeVals = $m_Lscorry_SummaryStatistics$().u1(nums$1);
      var modeStr = (modeVals.c() ? "no mode" : $f_sc_IterableOnceOps__mkString__T__T__T__T(modeVals, "", ", ", ""));
      return $m_sci_Seq$().kh($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T4("N", ("" + nums$1.i()), "The number of observations in the data set", "https://en.wikipedia.org/wiki/Sample_size_determination"), new $c_T4("Arithmetic Mean", ("" + $m_Lscorry_SummaryStatistics$().he(nums$1)), "Sum of all values divided by the number of values", "https://en.wikipedia.org/wiki/Arithmetic_mean"), new $c_T4("Geometric Mean", ("" + $m_Lscorry_SummaryStatistics$().ti(nums$1)), "The nth root of the product of n values; useful for growth rates", "https://en.wikipedia.org/wiki/Geometric_mean"), new $c_T4("Median", ("" + $m_Lscorry_SummaryStatistics$().tZ(nums$1)), "The middle value when sorted; less sensitive to outliers than the mean", "https://en.wikipedia.org/wiki/Median"), new $c_T4("Mode", ("" + modeStr), "The most frequently occurring value(s); 'no mode' if all values are unique", "https://en.wikipedia.org/wiki/Mode_(statistics)"), new $c_T4("Variance", ("" + $m_Lscorry_SummaryStatistics$().rc(nums$1)), "Average of squared deviations from the mean; measures spread", "https://en.wikipedia.org/wiki/Variance"), new $c_T4("Std Dev", ("" + $m_Lscorry_SummaryStatistics$().v3(nums$1)), "Square root of variance; measures spread in the same unit as the data", "https://en.wikipedia.org/wiki/Standard_deviation"), new $c_T4("Range", ("" + $m_Lscorry_SummaryStatistics$().ui(nums$1)), "Difference between the maximum and minimum values", "https://en.wikipedia.org/wiki/Range_(statistics)")]));
    }
    throw new $c_s_MatchError(x$1$2);
  })), $m_s_None$());
  var corrInput = $m_Lcom_raquo_laminar_api_package$().n.j2.pt("1 2.1 ; 2.5 5 ; 3 4.3 ; 4.2 9 ; 5 7.5 ; 6.1 12 ; 7 10.4 ; 8.3 15");
  var corrSignal = new $c_Lcom_raquo_airstream_misc_MapSignal(corrInput.eN, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((text$2$1) => {
    try {
      var pairs = $m_Lscorry_SummaryStatistics$().qA(text$2$1);
      if ((pairs.i() < 2)) {
        return $m_sci_Seq$().ih();
      } else {
        var $x_4 = new $c_T4("N", (pairs.i() + " pairs"), "The number of paired observations", "https://en.wikipedia.org/wiki/Sample_size_determination");
        var rho = $m_Lscorry_SummaryStatistics$().v1(pairs);
        var p = $m_Lscorry_SummaryStatistics$().qC(rho, pairs.i());
        var $x_3 = new $c_T4("Spearman rho", ((rho + ", p = ") + $m_sc_StringOps$().ey("%.4f", $m_sr_ScalaRunTime$().ez(new $ac_O([p])))), "Spearman rank correlation: measures monotonic association using ranks instead of raw values. Ranges from -1 to +1. More robust to outliers than Pearson. The p-value tests the null hypothesis that there is no monotonic association (rho = 0). p < 0.05 is conventionally considered statistically significant; p < 0.01 is highly significant; p > 0.1 suggests no evidence of monotonic association. The p-value is computed using the t-distribution approximation: t = rho * sqrt((n-2)/(1-rho\u00b2)), which is accurate for n >= 10. Assumes: (1) both variables are at least ordinal, (2) the relationship is monotonic.", "https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient");
        var r = $m_Lscorry_SummaryStatistics$().qB(pairs);
        var p$2 = $m_Lscorry_SummaryStatistics$().qC(r, pairs.i());
        var $x_2 = new $c_T4("Pearson r", ((r + ", p = ") + $m_sc_StringOps$().ey("%.4f", $m_sr_ScalaRunTime$().ez(new $ac_O([p$2])))), "Pearson product-moment correlation coefficient: measures linear association between two variables. Ranges from -1 (perfect negative) to +1 (perfect positive). Assumes: (1) both variables are continuous, (2) the relationship is linear, (3) no significant outliers, (4) variables are approximately normally distributed.", "https://en.wikipedia.org/wiki/Pearson_correlation_coefficient");
        matchResult2: {
          var \u03b42$;
          var x4$1 = $m_Lscorry_SummaryStatistics$().ue(pairs);
          if ((x4$1 !== null)) {
            var \u03b42$ = x4$1;
            break matchResult2;
          }
          throw new $c_s_MatchError(x4$1);
        }
        var t = (+\u03b42$.fz);
        var df = (\u03b42$.fA | 0);
        var p$3 = (+\u03b42$.fB);
        var $x_1 = new $c_T4("Paired t-test", ((((("t = " + $m_sc_StringOps$().ey("%.4f", $m_sr_ScalaRunTime$().ez(new $ac_O([t])))) + ", df = ") + df) + ", p = ") + $m_sc_StringOps$().ey("%.4f", $m_sr_ScalaRunTime$().ez(new $ac_O([p$3])))), "Student's paired t-test: tests whether the mean difference between paired observations is zero. The p-value is the probability of observing a t-statistic this extreme if the true mean difference is zero (two-tailed). p < 0.05 is conventionally considered statistically significant, but consider effect size and sample size too. p < 0.01 is highly significant; p > 0.1 suggests no evidence against equal means. Related to Pearson r: both assume normality and continuous data. A significant Pearson r means the variables co-vary, while a significant t-test means their means differ. They are complementary \u2014 high correlation does not imply equal means, and equal means does not imply no correlation. Assumes: (1) differences are normally distributed, (2) pairs are independent, (3) data is continuous.", "https://en.wikipedia.org/wiki/Student%27s_t-test#Paired_samples");
        var dc = $m_Lscorry_SummaryStatistics$().ks(pairs);
        var p$4 = $m_Lscorry_SummaryStatistics$().sP(pairs, 999, 42, 0);
        return new $c_sci_$colon$colon($x_4, new $c_sci_$colon$colon($x_3, new $c_sci_$colon$colon($x_2, new $c_sci_$colon$colon($x_1, new $c_sci_$colon$colon(new $c_T4("dCor", (($m_sc_StringOps$().ey("%.4f", $m_sr_ScalaRunTime$().ez(new $ac_O([dc]))) + ", p = ") + $m_sc_StringOps$().ey("%.4f", $m_sr_ScalaRunTime$().ez(new $ac_O([p$4])))), "Distance correlation: measures both linear and non-linear association between two variables. Ranges from 0 (independent) to 1 (dependent). Unlike Pearson (linear only) and Spearman (monotonic only), dCor can detect arbitrary dependence structures. dCor = 0 if and only if the variables are statistically independent. The p-value is computed via a permutation test (999 permutations): it estimates the probability of observing a dCor this large or larger if the variables were truly independent. p < 0.05 suggests significant dependence; p < 0.01 is highly significant. No assumptions about the form of the relationship are needed.", "https://en.wikipedia.org/wiki/Distance_correlation"), $m_sci_Nil$())))));
      }
    } catch (e$1) {
      if ((((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1)) instanceof $c_jl_Exception)) {
        return new $c_sci_$colon$colon(new $c_T4("Invalid input", "", "", ""), $m_sci_Nil$());
      } else {
        throw e$1;
      }
    }
  })), $m_s_None$());
  var pairsSignal = new $c_Lcom_raquo_airstream_misc_MapSignal(corrInput.eN, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((text$2$2) => {
    try {
      var pairs$1 = $m_Lscorry_SummaryStatistics$().qA(text$2$2);
      return ((pairs$1.i() < 2) ? $m_s_None$() : new $c_s_Some(pairs$1));
    } catch (e$3) {
      if ((((e$3 instanceof $c_jl_Throwable) ? e$3 : new $c_sjs_js_JavaScriptException(e$3)) instanceof $c_jl_Exception)) {
        return $m_s_None$();
      } else {
        throw e$3;
      }
    }
  })), $m_s_None$());
  var app = $m_Lcom_raquo_laminar_api_package$().n.fd().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.qk().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Enter numbers separated by spaces", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $m_Lcom_raquo_laminar_api_package$().n.fS().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().n.qb().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.r7().r("text"), $m_Lcom_raquo_laminar_api_package$().n.rb().r($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(inputText.eN).A()), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().kt($m_Lcom_raquo_laminar_api_package$().n.qv(), false, false)).qm(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    inputText.iX.hi(_$1);
  })))])), $m_Lcom_raquo_laminar_api_package$().n.fd().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.pM().r("flex"), $m_Lcom_raquo_laminar_api_package$().n.pY().r("wrap"), $m_Lcom_raquo_laminar_api_package$().n.q7().r("2em"), $m_Lcom_raquo_laminar_api_package$().n.pn().r("flex-start"), $m_Lcom_raquo_laminar_api_package$().n.qx().r("auto"), $m_Lcom_raquo_laminar_api_package$().n.fd().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().ps(new $c_Lcom_raquo_airstream_misc_MapSignal(statsSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((items$2) => items$2.fW(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$1) => {
    var lbl = x$1$2$1.eU;
    var val_ = x$1$2$1.eV;
    var tip = x$1$2$1.eW;
    var url = x$1$2$1.eX;
    return new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().n.fS().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().n.qX().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.j3.pe("tip"), $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__dataAttr__T__Lcom_raquo_laminar_keys_HtmlAttr($m_Lcom_raquo_laminar_api_package$().n, "tip").r(tip), $m_Lcom_raquo_laminar_api_package$().n.i9().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, lbl, $m_Lcom_raquo_laminar_modifiers_RenderableText$().by), $m_Lcom_raquo_laminar_api_package$().n.iq().r(url), $m_Lcom_raquo_laminar_api_package$().n.iE().r("_blank")])), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, (": " + val_), $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $m_sci_Nil$()));
  }))))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hG, (void 0)))])), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_receivers_ChildOptionReceiver$()).pf(new $c_Lcom_raquo_airstream_misc_MapSignal(numsSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => {
    var this$59 = ((_$1$2.c() || (_$1$2.A().i() >= 2)) ? _$1$2 : $m_s_None$());
    if (this$59.c()) {
      return $m_s_None$();
    } else {
      var x0$7 = this$59.A();
      return new $c_s_Some($m_Lcom_raquo_laminar_api_package$().n.fd().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lscorry_Plots$().sp(x0$7), $m_Lcom_raquo_laminar_api_package$().n.fS().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().n.i9().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Box plot", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by), $m_Lcom_raquo_laminar_api_package$().n.iq().r("https://en.wikipedia.org/wiki/Box_plot"), $m_Lcom_raquo_laminar_api_package$().n.iE().r("_blank")]))])));
    }
  })), $m_s_None$()))])), $m_Lcom_raquo_laminar_api_package$().n.tu().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().n.qk().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Enter pairs of numbers (pairs separated by semicolons)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $m_Lcom_raquo_laminar_api_package$().n.fS().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().n.qb().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.r7().r("text"), $m_Lcom_raquo_laminar_api_package$().n.rb().r($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(corrInput.eN).A()), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().kt($m_Lcom_raquo_laminar_api_package$().n.qv(), false, false)).qm(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1$1) => {
    corrInput.iX.hi(_$1$1);
  })))])), $m_Lcom_raquo_laminar_api_package$().n.fd().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.pM().r("flex"), $m_Lcom_raquo_laminar_api_package$().n.pY().r("wrap"), $m_Lcom_raquo_laminar_api_package$().n.q7().r("2em"), $m_Lcom_raquo_laminar_api_package$().n.pn().r("flex-start"), $m_Lcom_raquo_laminar_api_package$().n.qx().r("auto"), $m_Lcom_raquo_laminar_api_package$().n.fd().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().ps(new $c_Lcom_raquo_airstream_misc_MapSignal(corrSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((items$2$1) => items$2$1.fW(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => {
    var lbl$1 = x$1$2$2.eU;
    var val_$1 = x$1$2$2.eV;
    var tip$1 = x$1$2$2.eW;
    var url$1 = x$1$2$2.eX;
    return new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().n.fS().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().n.qX().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.j3.pe("tip"), $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__dataAttr__T__Lcom_raquo_laminar_keys_HtmlAttr($m_Lcom_raquo_laminar_api_package$().n, "tip").r(tip$1), $m_Lcom_raquo_laminar_api_package$().n.i9().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, lbl$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().by), $m_Lcom_raquo_laminar_api_package$().n.iq().r(url$1), $m_Lcom_raquo_laminar_api_package$().n.iE().r("_blank")])), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, (": " + val_$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $m_sci_Nil$()));
  }))))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hG, (void 0)))])), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_receivers_ChildOptionReceiver$()).pf(new $c_Lcom_raquo_airstream_misc_MapSignal(pairsSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$2) => {
    if (_$3$2.c()) {
      return $m_s_None$();
    } else {
      var x0$16 = _$3$2.A();
      return new $c_s_Some($m_Lcom_raquo_laminar_api_package$().n.fd().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lscorry_Plots$().uG(x0$16), $m_Lcom_raquo_laminar_api_package$().n.fS().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().n.i9().aA($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Scatter plot", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by), $m_Lcom_raquo_laminar_api_package$().n.iq().r("https://en.wikipedia.org/wiki/Scatter_plot"), $m_Lcom_raquo_laminar_api_package$().n.iE().r("_blank")]))])));
    }
  })), $m_s_None$()))]))]));
  var this$128 = $m_Lcom_raquo_laminar_api_package$().n;
  var container = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => document.getElementById("app")));
  var rootNode = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => app));
  var p$1 = $m_Lcom_raquo_laminar_keys_EventProcessor$().kt(this$128.mG.uc(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().se(document, p$1.fs.gn, p$1.hD), p$1.hC), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container.I(), rootNode.I());
  })), this$128.vc());
});
var $d_Lscorry_Main$ = new $TypeData().i($c_Lscorry_Main$, "scorry.Main$", ({
  jY: 1
}));
var $n_Lscorry_Main$;
function $m_Lscorry_Main$() {
  if ((!$n_Lscorry_Main$)) {
    $n_Lscorry_Main$ = new $c_Lscorry_Main$();
  }
  return $n_Lscorry_Main$;
}
function $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, name) {
  $m_Lcom_raquo_laminar_api_package$().n.bo();
  return new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().dx, $m_s_None$());
}
function $p_Lscorry_Plots$__y$1__D__D__D__D__D__D($thiz, maxVal$1, minVal$1, pad$1, plotH$1, v) {
  return ((maxVal$1 === minVal$1) ? (pad$1 + (0.5 * plotH$1)) : (pad$1 + ((1.0 - ((v - minVal$1) / (maxVal$1 - minVal$1))) * plotH$1)));
}
function $p_Lscorry_Plots$__fmt$1__D__T($thiz, v) {
  return $m_sc_StringOps$().ey("%.1f", $m_sr_ScalaRunTime$().ez(new $ac_O([v])));
}
function $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement($thiz, xa, ya, xb, yb, color, sw) {
  return $m_Lcom_raquo_laminar_api_package$().n.bo().ql().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x1").r(("" + xa)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y1").r(("" + ya)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x2").r(("" + xb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y2").r(("" + yb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke").r(color), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke-width").r(sw)]));
}
function $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement($thiz, cx$1, boxW$1, yp, txt) {
  return $m_Lcom_raquo_laminar_api_package$().n.bo().hq().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x").r(("" + ((cx$1 + (0.5 * boxW$1)) + 8.0))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y").r(("" + (yp + 4.0))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "text-anchor").r("start"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "font-size").r("11"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, txt, $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)]));
}
function $p_Lscorry_Plots$__px$1__D__D__D__D__D__D($thiz, xMax$1, xMin$1, padLeft$1, plotW$1, v) {
  return ((xMax$1 === xMin$1) ? (padLeft$1 + (0.5 * plotW$1)) : (padLeft$1 + (((v - xMin$1) / (xMax$1 - xMin$1)) * plotW$1)));
}
function $p_Lscorry_Plots$__py$1__D__D__D__D__D__D($thiz, yMax$1, yMin$1, padTop$1, plotH$2, v) {
  return ((yMax$1 === yMin$1) ? (padTop$1 + (0.5 * plotH$2)) : (padTop$1 + ((1.0 - ((v - yMin$1) / (yMax$1 - yMin$1))) * plotH$2)));
}
function $p_Lscorry_Plots$__fmt$2__D__T($thiz, v) {
  return $m_sc_StringOps$().ey("%.1f", $m_sr_ScalaRunTime$().ez(new $ac_O([v])));
}
function $p_Lscorry_Plots$__ln$2__D__D__D__D__Lcom_raquo_laminar_nodes_ReactiveSvgElement($thiz, xa, ya, xb, yb) {
  return $m_Lcom_raquo_laminar_api_package$().n.bo().ql().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x1").r(("" + xa)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y1").r(("" + ya)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x2").r(("" + xb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y2").r(("" + yb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke").r("#ccc"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke-width").r("1")]));
}
/** @constructor */
function $c_Lscorry_Plots$() {
}
$p = $c_Lscorry_Plots$.prototype = new $h_O();
$p.constructor = $c_Lscorry_Plots$;
/** @constructor */
function $h_Lscorry_Plots$() {
}
$h_Lscorry_Plots$.prototype = $p;
$p.sp = (function(values) {
  var sorted = values.b6($m_s_math_Ordering$DeprecatedDoubleOrdering$());
  var minVal = (+sorted.q());
  var q1 = $m_Lscorry_SummaryStatistics$().kZ(sorted, 0.25);
  var med = $m_Lscorry_SummaryStatistics$().kZ(sorted, 0.5);
  var q3 = $m_Lscorry_SummaryStatistics$().kZ(sorted, 0.75);
  var maxVal = (+sorted.g5());
  return $m_Lcom_raquo_laminar_api_package$().n.bo().l5().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "width").r("100"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "height").r("280"), $m_Lcom_raquo_laminar_api_package$().n.bo().r3().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Box plot: the box spans Q1 (25th percentile) to Q3 (75th percentile), covering the middle 50% of the data (IQR). The red line marks the median. Whiskers extend to min and max. If the median is off-center in the box, the distribution is skewed.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), 50.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), "#333", "1"), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 35.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), 65.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), "#333", "1"), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 35.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), 65.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), "#333", "1"), $m_Lcom_raquo_laminar_api_package$().n.bo().uk().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").r("35"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").r(("" + $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q3))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "width").r("30"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "height").r(("" + ($p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q1) - $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q3)))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "fill").r("#6ca0dc"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "stroke").r("#333"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "stroke-width").r("1")])), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 35.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, med), 65.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, med), "#c00", "2"), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), $p_Lscorry_Plots$__fmt$1__D__T(this, maxVal)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q3), $p_Lscorry_Plots$__fmt$1__D__T(this, q3)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, med), $p_Lscorry_Plots$__fmt$1__D__T(this, med)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q1), $p_Lscorry_Plots$__fmt$1__D__T(this, q1)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), $p_Lscorry_Plots$__fmt$1__D__T(this, minVal))]));
});
$p.uG = (function(pairs) {
  var xs = pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => (+_$1$2.R))));
  var ys = pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => (+_$2$2.O))));
  var xMin = (+xs.ix($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var xMax = (+xs.iw($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var yMin = (+ys.ix($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var yMax = (+ys.iw($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var dots = pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var x = (+x$1$2.R);
    var y = (+x$1$2.O);
    return $m_Lcom_raquo_laminar_api_package$().n.bo().su().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "cx").r(("" + $p_Lscorry_Plots$__px$1__D__D__D__D__D__D(this, xMax, xMin, 60.0, 240.0, x))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "cy").r(("" + $p_Lscorry_Plots$__py$1__D__D__D__D__D__D(this, yMax, yMin, 20.0, 240.0, y))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "r").r("4"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "fill").r("#336699")]));
  })));
  var this$12 = new $c_sci_$colon$colon(xMin, new $c_sci_$colon$colon((0.5 * (xMin + xMax)), new $c_sci_$colon$colon(xMax, $m_sci_Nil$())));
  var f = ((v$3) => {
    var v$2 = (+v$3);
    return $m_Lcom_raquo_laminar_api_package$().n.bo().hq().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").r(("" + $p_Lscorry_Plots$__px$1__D__D__D__D__D__D(this, xMax, xMin, 60.0, 240.0, v$2))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").r("278"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").r("middle"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").r("11"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, $p_Lscorry_Plots$__fmt$2__D__T(this, v$2), $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)]));
  });
  if ((this$12 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0$2 = this$12.gE;
    var h = new $c_sci_$colon$colon(f(x0$2), $m_sci_Nil$());
    var t = h;
    var rest = this$12.a2;
    while ((rest !== $m_sci_Nil$())) {
      var x0$3 = rest.q();
      var nx = new $c_sci_$colon$colon(f(x0$3), $m_sci_Nil$());
      t.a2 = nx;
      t = nx;
      rest = rest.w();
    }
    var $x_1 = h;
  }
  var xTicks = $x_1;
  var this$18 = new $c_sci_$colon$colon(yMin, new $c_sci_$colon$colon((0.5 * (yMin + yMax)), new $c_sci_$colon$colon(yMax, $m_sci_Nil$())));
  var f$1 = ((v$3$1) => {
    var v$2$1 = (+v$3$1);
    return $m_Lcom_raquo_laminar_api_package$().n.bo().hq().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").r("52"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").r(("" + ($p_Lscorry_Plots$__py$1__D__D__D__D__D__D(this, yMax, yMin, 20.0, 240.0, v$2$1) + 4.0))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").r("end"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").r("11"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, $p_Lscorry_Plots$__fmt$2__D__T(this, v$2$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)]));
  });
  if ((this$18 === $m_sci_Nil$())) {
    var $x_2 = $m_sci_Nil$();
  } else {
    var x0$5 = this$18.gE;
    var h$1 = new $c_sci_$colon$colon(f$1(x0$5), $m_sci_Nil$());
    var t$1 = h$1;
    var rest$1 = this$18.a2;
    while ((rest$1 !== $m_sci_Nil$())) {
      var x0$6 = rest$1.q();
      var nx$1 = new $c_sci_$colon$colon(f$1(x0$6), $m_sci_Nil$());
      t$1.a2 = nx$1;
      t$1 = nx$1;
      rest$1 = rest$1.w();
    }
    var $x_2 = h$1;
  }
  var yTicks = $x_2;
  var xLabel = $m_Lcom_raquo_laminar_api_package$().n.bo().hq().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").r("180"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").r("298"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").r("middle"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").r("12"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "x: first number", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)]));
  var yLabel = $m_Lcom_raquo_laminar_api_package$().n.bo().hq().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").r("14"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").r("140"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").r("middle"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").r("12"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "transform").r("rotate(-90, 14, 140)"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "y: second number", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)]));
  return $m_Lcom_raquo_laminar_api_package$().n.bo().l5().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "width").r("320"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "height").r("300"), $m_Lcom_raquo_laminar_api_package$().n.bo().r3().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Scatter plot: each dot is a pair (x, y). Upward trend = positive correlation; downward = negative. A tight linear pattern means strong Pearson correlation; a tight monotonic (possibly curved) pattern means strong Spearman correlation. Scattered dots suggest weak or no association.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $p_Lscorry_Plots$__ln$2__D__D__D__D__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 60.0, 20.0, 60.0, 260.0), $p_Lscorry_Plots$__ln$2__D__D__D__D__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 60.0, 260.0, 300.0, 260.0), $m_Lcom_raquo_laminar_api_package$().n.bo().kF().bB(dots), $m_Lcom_raquo_laminar_api_package$().n.bo().kF().bB(xTicks), $m_Lcom_raquo_laminar_api_package$().n.bo().kF().bB(yTicks), xLabel, yLabel]));
});
var $d_Lscorry_Plots$ = new $TypeData().i($c_Lscorry_Plots$, "scorry.Plots$", ({
  jZ: 1
}));
var $n_Lscorry_Plots$;
function $m_Lscorry_Plots$() {
  if ((!$n_Lscorry_Plots$)) {
    $n_Lscorry_Plots$ = new $c_Lscorry_Plots$();
  }
  return $n_Lscorry_Plots$;
}
function $p_Lscorry_SummaryStatistics$__ranks__sci_Seq__sci_Seq($thiz, values) {
  var sorted = $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O(values.hs(), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$9$2) => (+_$9$2.R))), $m_s_math_Ordering$DeprecatedDoubleOrdering$());
  var ranked = new $ac_D(values.i());
  var i = 0;
  while ((i < sorted.i())) {
    var j = i;
    while (((j < ((sorted.i() - 1) | 0)) && ((+sorted.o(((1 + j) | 0)).R) === (+sorted.o(i).R)))) {
      j = ((1 + j) | 0);
    }
    var avgRank = ((0.5 * ((i + j) | 0)) + 1.0);
    var x = i;
    var end = j;
    if ((!(x > end))) {
      var i$1 = x;
      while (true) {
        var x0 = i$1;
        ranked.a[(sorted.o(x0).O | 0)] = avgRank;
        if ((i$1 === end)) {
          break;
        }
        i$1 = ((1 + i$1) | 0);
      }
    }
    i = ((1 + j) | 0);
  }
  return $m_sc_ArrayOps$().r4(ranked);
}
function $p_Lscorry_SummaryStatistics$__betacf__D__D__D__D($thiz, a, b, x) {
  var qab = (a + b);
  var qap = (a + 1.0);
  var qam = (a - 1.0);
  var elem = 0.0;
  elem = 1.0;
  var elem$1 = (1.0 - ((qab * x) / qap));
  var elem$2 = 0.0;
  elem$2 = elem$1;
  var x$1 = elem$2;
  if (((+Math.abs(x$1)) < 1.0E-30)) {
    elem$2 = 1.0E-30;
  }
  elem$2 = (1.0 / elem$2);
  var elem$3 = elem$2;
  var elem$4 = 0.0;
  elem$4 = elem$3;
  var local = new $c_s_util_boundary$Label();
  try {
    var i = 1;
    while (true) {
      var x0 = i;
      var m2 = (x0 << 1);
      var aa = (((x0 * (b - x0)) * x) / ((qam + m2) * (a + m2)));
      elem$2 = (1.0 + (aa * elem$2));
      var x$2 = elem$2;
      if (((+Math.abs(x$2)) < 1.0E-30)) {
        elem$2 = 1.0E-30;
      }
      elem = (1.0 + (aa / elem));
      var x$3 = elem;
      if (((+Math.abs(x$3)) < 1.0E-30)) {
        elem = 1.0E-30;
      }
      elem$2 = (1.0 / elem$2);
      elem$4 = (elem$4 * (elem$2 * elem));
      aa = ((((-(a + x0)) * (qab + x0)) * x) / ((a + m2) * (qap + m2)));
      elem$2 = (1.0 + (aa * elem$2));
      var x$4 = elem$2;
      if (((+Math.abs(x$4)) < 1.0E-30)) {
        elem$2 = 1.0E-30;
      }
      elem = (1.0 + (aa / elem));
      var x$5 = elem;
      if (((+Math.abs(x$5)) < 1.0E-30)) {
        elem = 1.0E-30;
      }
      elem$2 = (1.0 / elem$2);
      var del = (elem$2 * elem);
      elem$4 = (elem$4 * del);
      var x$6 = (del - 1.0);
      if (((+Math.abs(x$6)) < 1.0E-12)) {
        $m_s_util_boundary$().sq(local);
      }
      if ((i === 200)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if ((e instanceof $c_s_util_boundary$Break)) {
      var ex = e;
      if ((!ex.tJ(local))) {
        throw ex;
      }
    } else {
      throw e;
    }
  }
  return elem$4;
}
function $p_Lscorry_SummaryStatistics$__lnGamma__D__D($thiz, x) {
  var cof = new $c_sci_$colon$colon(76.18009172947146, new $c_sci_$colon$colon((-86.50532032941678), new $c_sci_$colon$colon(24.01409824083091, new $c_sci_$colon$colon((-1.231739572450155), new $c_sci_$colon$colon(0.001208650973866179, new $c_sci_$colon$colon((-5.395239384953E-6), $m_sci_Nil$()))))));
  var x$1 = (x + 5.5);
  var tmp = ((x + 5.5) - ((x + 0.5) * (+Math.log(x$1))));
  var ser = (1.000000000190015 + (+$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(cof).z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => ((+x$1$2.R) / ((x + 1.0) + (x$1$2.O | 0)))))).cH($m_s_math_Numeric$DoubleIsFractional$())));
  var x$2 = ((2.5066282746310007 * ser) / x);
  return ((-tmp) + (+Math.log(x$2)));
}
function $p_Lscorry_SummaryStatistics$__betai__D__D__D__D($thiz, a, b, x) {
  if ((x <= 0.0)) {
    return 0.0;
  } else if ((x >= 1.0)) {
    return 1.0;
  } else {
    var $x_4 = $p_Lscorry_SummaryStatistics$__lnGamma__D__D($thiz, (a + b));
    var $x_3 = $p_Lscorry_SummaryStatistics$__lnGamma__D__D($thiz, a);
    var $x_2 = $p_Lscorry_SummaryStatistics$__lnGamma__D__D($thiz, b);
    var $x_1 = Math.log(x);
    var x$1 = (1.0 - x);
    var x$2 = (((($x_4 - $x_3) - $x_2) + (a * (+$x_1))) + (b * (+Math.log(x$1))));
    var bt = (+Math.exp(x$2));
    return ((x < ((a + 1.0) / ((a + b) + 2.0))) ? ((bt * $p_Lscorry_SummaryStatistics$__betacf__D__D__D__D($thiz, a, b, x)) / a) : (1.0 - ((bt * $p_Lscorry_SummaryStatistics$__betacf__D__D__D__D($thiz, b, a, (1.0 - x))) / b)));
  }
}
function $p_Lscorry_SummaryStatistics$__distMatrix$1__I__sci_Seq__AAD($thiz, n$1, vs) {
  $m_s_reflect_ManifestFactory$DoubleManifest$();
  var evidence$1$1__runtimeClass;
  var evidence$1$1__runtimeClass = $d_D.r().l();
  if ((n$1 <= 0)) {
    var $x_1 = evidence$1$1__runtimeClass.y.U(0);
  } else {
    var componentType$1 = evidence$1$1__runtimeClass;
    var array = componentType$1.y.U(n$1);
    var i = 0;
    while ((i < n$1)) {
      var $x_5 = $m_sr_ScalaRunTime$();
      var $x_4 = i;
      var x0 = i;
      if ((n$1 <= 0)) {
        var $x_2 = new $ac_D(0);
      } else {
        var array$1 = new $ac_D(n$1);
        var i$1 = 0;
        while ((i$1 < n$1)) {
          var $x_3 = i$1;
          var x0$1 = i$1;
          var x = ((+vs.o(x0)) - (+vs.o(x0$1)));
          array$1.a[$x_3] = (+Math.abs(x));
          i$1 = ((1 + i$1) | 0);
        }
        var $x_2 = array$1;
      }
      $x_5.T(array, $x_4, $x_2);
      i = ((1 + i) | 0);
    }
    var $x_1 = array;
  }
  return $x_1;
}
function $p_Lscorry_SummaryStatistics$__doubleCenter$1__I__AAD__AAD($thiz, n$2, d) {
  var f = ((row$2) => ((+$f_sc_IterableOnceOps__sum__s_math_Numeric__O($m_s_Predef$().rf(row$2), $m_s_math_Numeric$DoubleIsFractional$())) / n$2));
  $m_s_reflect_ManifestFactory$DoubleManifest$();
  var len = d.a.length;
  var ys = new $ac_D(len);
  if ((len > 0)) {
    var i = 0;
    if ((d !== null)) {
      while ((i < len)) {
        var $x_1 = i;
        var x0 = d.a[i];
        ys.a[$x_1] = (+f(x0));
        i = ((1 + i) | 0);
      }
    } else if ((d instanceof $ac_I)) {
      while ((i < len)) {
        var $x_2 = i;
        var x0$1 = d.a[i];
        ys.a[$x_2] = (+f(x0$1));
        i = ((1 + i) | 0);
      }
    } else if ((d instanceof $ac_D)) {
      while ((i < len)) {
        var $x_3 = i;
        var x0$2 = d.a[i];
        ys.a[$x_3] = (+f(x0$2));
        i = ((1 + i) | 0);
      }
    } else if ((d instanceof $ac_J)) {
      while ((i < len)) {
        var $x_6 = i;
        var $x_4 = d.a;
        var $x_5 = (i << 1);
        var x0$3_$_lo = $x_4[$x_5];
        var x0$3_$_hi = $x_4[(($x_5 + 1) | 0)];
        ys.a[$x_6] = (+f($bL(x0$3_$_lo, x0$3_$_hi)));
        i = ((1 + i) | 0);
      }
    } else if ((d instanceof $ac_F)) {
      while ((i < len)) {
        var $x_7 = i;
        var x0$4 = d.a[i];
        ys.a[$x_7] = (+f(x0$4));
        i = ((1 + i) | 0);
      }
    } else if ((d instanceof $ac_C)) {
      while ((i < len)) {
        var $x_8 = i;
        var x0$5 = d.a[i];
        ys.a[$x_8] = (+f($bC(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((d instanceof $ac_B)) {
      while ((i < len)) {
        var $x_9 = i;
        var x0$6 = d.a[i];
        ys.a[$x_9] = (+f(x0$6));
        i = ((1 + i) | 0);
      }
    } else if ((d instanceof $ac_S)) {
      while ((i < len)) {
        var $x_10 = i;
        var x0$7 = d.a[i];
        ys.a[$x_10] = (+f(x0$7));
        i = ((1 + i) | 0);
      }
    } else if ((d instanceof $ac_Z)) {
      while ((i < len)) {
        var $x_11 = i;
        var x0$8 = d.a[i];
        ys.a[$x_11] = (+f(x0$8));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $c_s_MatchError(d);
    }
  }
  $m_s_reflect_ManifestFactory$DoubleManifest$();
  if ((n$2 <= 0)) {
    var colMeans = new $ac_D(0);
  } else {
    var array = new $ac_D(n$2);
    var i$1 = 0;
    while ((i$1 < n$2)) {
      var $x_12 = i$1;
      var x0$9 = i$1;
      var isEmpty = (n$2 <= 0);
      var scala$collection$immutable$Range$$lastElement = ((n$2 - 1) | 0);
      if (((n$2 <= 0) && (!isEmpty))) {
        $m_sci_Range$().uD(0, n$2, 1, false);
      }
      var b = $m_sci_IndexedSeq$().ae();
      var it = new $c_sci_RangeIterator(0, 1, scala$collection$immutable$Range$$lastElement, isEmpty);
      while (it.dR) {
        var x0$10 = it.kU();
        b.ac(d.a[x0$10].a[x0$9]);
      }
      array.a[$x_12] = ((+b.af().cH($m_s_math_Numeric$DoubleIsFractional$())) / n$2);
      i$1 = ((1 + i$1) | 0);
    }
    var colMeans = array;
  }
  var grandMean = ((+$f_sc_IterableOnceOps__sum__s_math_Numeric__O($m_s_Predef$().rf(ys), $m_s_math_Numeric$DoubleIsFractional$())) / n$2);
  $m_s_reflect_ManifestFactory$DoubleManifest$();
  var evidence$1$2__runtimeClass;
  var evidence$1$2__runtimeClass = $d_D.r().l();
  if ((n$2 <= 0)) {
    var $x_13 = evidence$1$2__runtimeClass.y.U(0);
  } else {
    var componentType$1 = evidence$1$2__runtimeClass;
    var array$1 = componentType$1.y.U(n$2);
    var i$2 = 0;
    while ((i$2 < n$2)) {
      var $x_17 = $m_sr_ScalaRunTime$();
      var $x_16 = i$2;
      var x0$11 = i$2;
      if ((n$2 <= 0)) {
        var $x_14 = new $ac_D(0);
      } else {
        var array$2 = new $ac_D(n$2);
        var i$3 = 0;
        while ((i$3 < n$2)) {
          var $x_15 = i$3;
          var x0$12 = i$3;
          array$2.a[$x_15] = (((d.a[x0$11].a[x0$12] - ys.a[x0$11]) - colMeans.a[x0$12]) + grandMean);
          i$3 = ((1 + i$3) | 0);
        }
        var $x_14 = array$2;
      }
      $x_17.T(array$1, $x_16, $x_14);
      i$2 = ((1 + i$2) | 0);
    }
    var $x_13 = array$1;
  }
  return $x_13;
}
function $p_Lscorry_SummaryStatistics$__meanProduct$1__I__AAD__AAD__D($thiz, n$5, a, b) {
  var elem = 0.0;
  elem = 0.0;
  var isEmpty = (n$5 <= 0);
  var scala$collection$immutable$Range$$lastElement = ((n$5 - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var isEmpty$1 = (n$5 <= 0);
      var scala$collection$immutable$Range$$lastElement$1 = ((n$5 - 1) | 0);
      if ((!isEmpty$1)) {
        var i$1 = 0;
        while (true) {
          var x0$1 = i$1;
          elem = (elem + (a.a[x0].a[x0$1] * b.a[x0].a[x0$1]));
          if ((i$1 === scala$collection$immutable$Range$$lastElement$1)) {
            break;
          }
          i$1 = ((1 + i$1) | 0);
        }
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return (elem / Math.imul(n$5, n$5));
}
/** @constructor */
function $c_Lscorry_SummaryStatistics$() {
}
$p = $c_Lscorry_SummaryStatistics$.prototype = new $h_O();
$p.constructor = $c_Lscorry_SummaryStatistics$;
/** @constructor */
function $h_Lscorry_SummaryStatistics$() {
}
$h_Lscorry_SummaryStatistics$.prototype = $p;
$p.he = (function(values) {
  return ((+values.cH($m_s_math_Numeric$DoubleIsFractional$())) / values.i());
});
$p.ti = (function(values) {
  var x = (+$f_sc_IterableOnceOps__product__s_math_Numeric__O(values, $m_s_math_Numeric$DoubleIsFractional$()));
  var y = (1.0 / values.i());
  return (+Math.pow(x, y));
});
$p.tZ = (function(values) {
  var sorted = values.b6($m_s_math_Ordering$DeprecatedDoubleOrdering$());
  var n = sorted.i();
  var t = ((n >>> 31) | 0);
  if (((((1 & ((n + t) | 0)) - t) | 0) === 1)) {
    return (+sorted.o((((n + ((n >>> 31) | 0)) | 0) >> 1)));
  } else {
    return (0.5 * ((+sorted.o((((((n + ((n >>> 31) | 0)) | 0) >> 1) - 1) | 0))) + (+sorted.o((((n + ((n >>> 31) | 0)) | 0) >> 1)))));
  }
});
$p.u1 = (function(values) {
  var m = $m_scm_Map$().bP();
  var it = values.d();
  while (it.j()) {
    var elem = it.f();
    var x$2 = (+elem);
    var f = ((this$2) => (() => this$2.dt()))(values);
    if ((!($objectGetClass(m) === $d_scm_HashMap.l()))) {
      matchResult2: {
        var $x_1;
        var x12 = m.bX(x$2);
        if ((x12 instanceof $c_s_Some)) {
          var $x_1 = x12.dB;
          break matchResult2;
        }
        if (($m_s_None$() === x12)) {
          var d = f();
          $p_scm_HashMap__put0__O__O__Z__s_Some(m, x$2, d, false);
          var $x_1 = d;
          break matchResult2;
        }
        throw new $c_s_MatchError(x12);
      }
    } else {
      var originalHash = $m_sr_Statics$().E(x$2);
      var hash = (originalHash ^ ((originalHash >>> 16) | 0));
      var idx = (hash & ((m.Q.a.length - 1) | 0));
      matchResult13: {
        var nd$2;
        var x36 = m.Q.a[idx];
        if ((x36 === null)) {
          var nd$2 = null;
          break matchResult13;
        }
        var nd$2 = x36.h8(x$2, hash);
      }
      if ((nd$2 !== null)) {
        var $x_1 = nd$2.bU;
      } else {
        var table0 = m.Q;
        var default$1 = f();
        if ((((1 + m.ca) | 0) >= m.gN)) {
          $p_scm_HashMap__growTable__I__V(m, (m.Q.a.length << 1));
        }
        $p_scm_HashMap__put0__O__O__Z__I__I__s_Some(m, x$2, default$1, false, hash, ((table0 === m.Q) ? idx : (hash & ((m.Q.a.length - 1) | 0))));
        var $x_1 = default$1;
      }
    }
    $x_1.ac(elem);
  }
  var result = $m_sci_HashMap$().gH;
  var mapIt = m.d();
  while (mapIt.j()) {
    var \u03b42$;
    var \u03b42$ = mapIt.f();
    var k = \u03b42$.R;
    var v$1 = \u03b42$.O;
    result = result.fk(k, v$1.af());
  }
  var counts = new $c_sc_MapView$MapValues(new $c_sc_MapView$Id(result), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => _$1$2.i())));
  var maxCount = ($f_sc_IterableOnceOps__max__s_math_Ordering__O(new $c_sc_MapView$Values(counts), $m_s_math_Ordering$Int$()) | 0);
  return ((maxCount === 1) ? $m_sci_Seq$().ih() : $f_sc_IterableOps__collect__s_PartialFunction__O(counts, new $c_Lscorry_SummaryStatistics$$anon$1(maxCount)).gf().b6($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
});
$p.rc = (function(values) {
  var m = this.he(values);
  return ((+values.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$3) => {
    var x$2 = (+x$3);
    return ((x$2 - m) * (x$2 - m));
  }))).cH($m_s_math_Numeric$DoubleIsFractional$())) / values.i());
});
$p.v3 = (function(values) {
  var x = this.rc(values);
  return (+Math.sqrt(x));
});
$p.ui = (function(values) {
  return ((+values.iw($m_s_math_Ordering$DeprecatedDoubleOrdering$())) - (+values.ix($m_s_math_Ordering$DeprecatedDoubleOrdering$())));
});
$p.kZ = (function(sorted, q) {
  var pos = (q * ((sorted.i() - 1) | 0));
  var lo = $doubleToInt(pos);
  var x = ((1 + lo) | 0);
  var y = ((sorted.i() - 1) | 0);
  var hi = ((x < y) ? x : y);
  var frac = (pos - lo);
  return (((+sorted.o(lo)) * (1.0 - frac)) + ((+sorted.o(hi)) * frac));
});
$p.uf = (function(input) {
  var $x_12 = $m_s_Predef$();
  var xs = $f_T__split__T__I__AT($f_T__trim__T(input), "\\s+", 0);
  var evidence$1 = $m_s_reflect_ClassTag$().h2($objectGetClass(xs).y.Q());
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aK();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  var i = 0;
  while ((i < xs.a.length)) {
    var x1 = i;
    var x = xs.a[x1];
    if (($m_sc_StringOps$(), (x !== ""))) {
      var unboxedElem = (isCharArrayBuilder ? $uC(x) : ((x === null) ? $m_scm_ArrayBuilder$().gb(elementClass) : x));
      jsElems.push(unboxedElem);
    }
    i = ((1 + i) | 0);
  }
  var xs$1 = $m_scm_ArrayBuilder$().ga(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  var f = ((_$3$2) => {
    $m_sc_StringOps$();
    return $m_jl_Double$().qz(_$3$2);
  });
  $m_s_reflect_ManifestFactory$DoubleManifest$();
  var len = xs$1.a.length;
  var ys = new $ac_D(len);
  if ((len > 0)) {
    var i$1 = 0;
    if ((xs$1 !== null)) {
      while ((i$1 < len)) {
        var $x_1 = i$1;
        var x0 = xs$1.a[i$1];
        ys.a[$x_1] = (+f(x0));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_I)) {
      while ((i$1 < len)) {
        var $x_2 = i$1;
        var x0$1 = xs$1.a[i$1];
        ys.a[$x_2] = (+f(x0$1));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_D)) {
      while ((i$1 < len)) {
        var $x_3 = i$1;
        var x0$2 = xs$1.a[i$1];
        ys.a[$x_3] = (+f(x0$2));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_J)) {
      while ((i$1 < len)) {
        var $x_6 = i$1;
        var $x_4 = xs$1.a;
        var $x_5 = (i$1 << 1);
        var x0$3_$_lo = $x_4[$x_5];
        var x0$3_$_hi = $x_4[(($x_5 + 1) | 0)];
        ys.a[$x_6] = (+f($bL(x0$3_$_lo, x0$3_$_hi)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_F)) {
      while ((i$1 < len)) {
        var $x_7 = i$1;
        var x0$4 = xs$1.a[i$1];
        ys.a[$x_7] = (+f(x0$4));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_C)) {
      while ((i$1 < len)) {
        var $x_8 = i$1;
        var x0$5 = xs$1.a[i$1];
        ys.a[$x_8] = (+f($bC(x0$5)));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_B)) {
      while ((i$1 < len)) {
        var $x_9 = i$1;
        var x0$6 = xs$1.a[i$1];
        ys.a[$x_9] = (+f(x0$6));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_S)) {
      while ((i$1 < len)) {
        var $x_10 = i$1;
        var x0$7 = xs$1.a[i$1];
        ys.a[$x_10] = (+f(x0$7));
        i$1 = ((1 + i$1) | 0);
      }
    } else if ((xs$1 instanceof $ac_Z)) {
      while ((i$1 < len)) {
        var $x_11 = i$1;
        var x0$8 = xs$1.a[i$1];
        ys.a[$x_11] = (+f(x0$8));
        i$1 = ((1 + i$1) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs$1);
    }
  }
  return $x_12.pC(ys);
});
$p.qA = (function(input) {
  var $x_52 = $m_s_Predef$();
  var xs = $f_T__split__T__I__AT(input, ";", 0);
  var f = ((_$4$2) => $f_T__trim__T(_$4$2));
  var ct__runtimeClass;
  var ct__runtimeClass = $d_T.l();
  var len = xs.a.length;
  var componentType = ct__runtimeClass;
  var ys = componentType.y.U(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_2 = $m_sr_ScalaRunTime$();
        var $x_1 = i;
        var x0 = xs.a[i];
        $x_2.T(ys, $x_1, f(x0));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_I)) {
      while ((i < len)) {
        var $x_4 = $m_sr_ScalaRunTime$();
        var $x_3 = i;
        var x0$1 = xs.a[i];
        $x_4.T(ys, $x_3, f(x0$1));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_D)) {
      while ((i < len)) {
        var $x_6 = $m_sr_ScalaRunTime$();
        var $x_5 = i;
        var x0$2 = xs.a[i];
        $x_6.T(ys, $x_5, f(x0$2));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_J)) {
      while ((i < len)) {
        var $x_10 = $m_sr_ScalaRunTime$();
        var $x_9 = i;
        var $x_7 = xs.a;
        var $x_8 = (i << 1);
        var x0$3_$_lo = $x_7[$x_8];
        var x0$3_$_hi = $x_7[(($x_8 + 1) | 0)];
        $x_10.T(ys, $x_9, f($bL(x0$3_$_lo, x0$3_$_hi)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_F)) {
      while ((i < len)) {
        var $x_12 = $m_sr_ScalaRunTime$();
        var $x_11 = i;
        var x0$4 = xs.a[i];
        $x_12.T(ys, $x_11, f(x0$4));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_C)) {
      while ((i < len)) {
        var $x_14 = $m_sr_ScalaRunTime$();
        var $x_13 = i;
        var x0$5 = xs.a[i];
        $x_14.T(ys, $x_13, f($bC(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_B)) {
      while ((i < len)) {
        var $x_16 = $m_sr_ScalaRunTime$();
        var $x_15 = i;
        var x0$6 = xs.a[i];
        $x_16.T(ys, $x_15, f(x0$6));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_S)) {
      while ((i < len)) {
        var $x_18 = $m_sr_ScalaRunTime$();
        var $x_17 = i;
        var x0$7 = xs.a[i];
        $x_18.T(ys, $x_17, f(x0$7));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_Z)) {
      while ((i < len)) {
        var $x_20 = $m_sr_ScalaRunTime$();
        var $x_19 = i;
        var x0$8 = xs.a[i];
        $x_20.T(ys, $x_19, f(x0$8));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs);
    }
  }
  var evidence$1 = $m_s_reflect_ClassTag$().h2($objectGetClass(ys).y.Q());
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aK();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  var i$1 = 0;
  while ((i$1 < ys.a.length)) {
    var x = ys.a[i$1];
    if (($m_sc_StringOps$(), (x !== ""))) {
      var unboxedElem = (isCharArrayBuilder ? $uC(x) : ((x === null) ? $m_scm_ArrayBuilder$().gb(elementClass) : x));
      jsElems.push(unboxedElem);
    }
    i$1 = ((1 + i$1) | 0);
  }
  var xs$1 = $m_scm_ArrayBuilder$().ga(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  var f$2 = ((pair$2) => {
    var xs$2 = $f_T__split__T__I__AT(pair$2, "\\s+", 0);
    var f$1 = ((_$6$2) => {
      $m_sc_StringOps$();
      return $m_jl_Double$().qz(_$6$2);
    });
    $m_s_reflect_ManifestFactory$DoubleManifest$();
    var len$1 = xs$2.a.length;
    var ys$1 = new $ac_D(len$1);
    if ((len$1 > 0)) {
      var i$2 = 0;
      if ((xs$2 !== null)) {
        while ((i$2 < len$1)) {
          var $x_21 = i$2;
          var x0$9 = xs$2.a[i$2];
          ys$1.a[$x_21] = (+f$1(x0$9));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$2 instanceof $ac_I)) {
        while ((i$2 < len$1)) {
          var $x_22 = i$2;
          var x0$10 = xs$2.a[i$2];
          ys$1.a[$x_22] = (+f$1(x0$10));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$2 instanceof $ac_D)) {
        while ((i$2 < len$1)) {
          var $x_23 = i$2;
          var x0$11 = xs$2.a[i$2];
          ys$1.a[$x_23] = (+f$1(x0$11));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$2 instanceof $ac_J)) {
        while ((i$2 < len$1)) {
          var $x_26 = i$2;
          var $x_24 = xs$2.a;
          var $x_25 = (i$2 << 1);
          var x0$12_$_lo = $x_24[$x_25];
          var x0$12_$_hi = $x_24[(($x_25 + 1) | 0)];
          ys$1.a[$x_26] = (+f$1($bL(x0$12_$_lo, x0$12_$_hi)));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$2 instanceof $ac_F)) {
        while ((i$2 < len$1)) {
          var $x_27 = i$2;
          var x0$13 = xs$2.a[i$2];
          ys$1.a[$x_27] = (+f$1(x0$13));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$2 instanceof $ac_C)) {
        while ((i$2 < len$1)) {
          var $x_28 = i$2;
          var x0$14 = xs$2.a[i$2];
          ys$1.a[$x_28] = (+f$1($bC(x0$14)));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$2 instanceof $ac_B)) {
        while ((i$2 < len$1)) {
          var $x_29 = i$2;
          var x0$15 = xs$2.a[i$2];
          ys$1.a[$x_29] = (+f$1(x0$15));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$2 instanceof $ac_S)) {
        while ((i$2 < len$1)) {
          var $x_30 = i$2;
          var x0$16 = xs$2.a[i$2];
          ys$1.a[$x_30] = (+f$1(x0$16));
          i$2 = ((1 + i$2) | 0);
        }
      } else if ((xs$2 instanceof $ac_Z)) {
        while ((i$2 < len$1)) {
          var $x_31 = i$2;
          var x0$17 = xs$2.a[i$2];
          ys$1.a[$x_31] = (+f$1(x0$17));
          i$2 = ((1 + i$2) | 0);
        }
      } else {
        throw new $c_s_MatchError(xs$2);
      }
    }
    return new $c_T2(ys$1.a[0], ys$1.a[1]);
  });
  var ct$2__runtimeClass;
  var ct$2__runtimeClass = $d_T2.l();
  var len$2 = xs$1.a.length;
  var componentType$1 = ct$2__runtimeClass;
  var ys$2 = componentType$1.y.U(len$2);
  if ((len$2 > 0)) {
    var i$3 = 0;
    if ((xs$1 !== null)) {
      while ((i$3 < len$2)) {
        var $x_33 = $m_sr_ScalaRunTime$();
        var $x_32 = i$3;
        var x0$18 = xs$1.a[i$3];
        $x_33.T(ys$2, $x_32, f$2(x0$18));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_I)) {
      while ((i$3 < len$2)) {
        var $x_35 = $m_sr_ScalaRunTime$();
        var $x_34 = i$3;
        var x0$19 = xs$1.a[i$3];
        $x_35.T(ys$2, $x_34, f$2(x0$19));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_D)) {
      while ((i$3 < len$2)) {
        var $x_37 = $m_sr_ScalaRunTime$();
        var $x_36 = i$3;
        var x0$20 = xs$1.a[i$3];
        $x_37.T(ys$2, $x_36, f$2(x0$20));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_J)) {
      while ((i$3 < len$2)) {
        var $x_41 = $m_sr_ScalaRunTime$();
        var $x_40 = i$3;
        var $x_38 = xs$1.a;
        var $x_39 = (i$3 << 1);
        var x0$21_$_lo = $x_38[$x_39];
        var x0$21_$_hi = $x_38[(($x_39 + 1) | 0)];
        $x_41.T(ys$2, $x_40, f$2($bL(x0$21_$_lo, x0$21_$_hi)));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_F)) {
      while ((i$3 < len$2)) {
        var $x_43 = $m_sr_ScalaRunTime$();
        var $x_42 = i$3;
        var x0$22 = xs$1.a[i$3];
        $x_43.T(ys$2, $x_42, f$2(x0$22));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_C)) {
      while ((i$3 < len$2)) {
        var $x_45 = $m_sr_ScalaRunTime$();
        var $x_44 = i$3;
        var x0$23 = xs$1.a[i$3];
        $x_45.T(ys$2, $x_44, f$2($bC(x0$23)));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_B)) {
      while ((i$3 < len$2)) {
        var $x_47 = $m_sr_ScalaRunTime$();
        var $x_46 = i$3;
        var x0$24 = xs$1.a[i$3];
        $x_47.T(ys$2, $x_46, f$2(x0$24));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_S)) {
      while ((i$3 < len$2)) {
        var $x_49 = $m_sr_ScalaRunTime$();
        var $x_48 = i$3;
        var x0$25 = xs$1.a[i$3];
        $x_49.T(ys$2, $x_48, f$2(x0$25));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_Z)) {
      while ((i$3 < len$2)) {
        var $x_51 = $m_sr_ScalaRunTime$();
        var $x_50 = i$3;
        var x0$26 = xs$1.a[i$3];
        $x_51.T(ys$2, $x_50, f$2(x0$26));
        i$3 = ((1 + i$3) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs$1);
    }
  }
  return $x_52.pC(ys$2);
});
$p.qB = (function(pairs) {
  pairs.i();
  var xs = pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$7$2) => (+_$7$2.R))));
  var ys = pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$8$2) => (+_$8$2.O))));
  var meanX = this.he(xs);
  var meanY = this.he(ys);
  var $x_2 = pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => (((+x$1$2.R) - meanX) * ((+x$1$2.O) - meanY))))).cH($m_s_math_Numeric$DoubleIsFractional$());
  var x$1 = (+xs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$3) => {
    var x$2 = (+x$3);
    return ((x$2 - meanX) * (x$2 - meanX));
  }))).cH($m_s_math_Numeric$DoubleIsFractional$()));
  var $x_1 = Math.sqrt(x$1);
  var x$4 = (+ys.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((y$3) => {
    var y$2 = (+y$3);
    return ((y$2 - meanY) * (y$2 - meanY));
  }))).cH($m_s_math_Numeric$DoubleIsFractional$()));
  return ((+$x_2) / ((+$x_1) * (+Math.sqrt(x$4))));
});
$p.v1 = (function(pairs) {
  return this.qB($p_Lscorry_SummaryStatistics$__ranks__sci_Seq__sci_Seq(this, pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$10$2) => (+_$10$2.R))))).gh($p_Lscorry_SummaryStatistics$__ranks__sci_Seq__sci_Seq(this, pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$11$2) => (+_$11$2.O)))))));
});
$p.r0 = (function(t, df) {
  return $p_Lscorry_SummaryStatistics$__betai__D__D__D__D(this, (0.5 * df), 0.5, (df / (df + (t * t))));
});
$p.qC = (function(r, n) {
  if (((+Math.abs(r)) >= 1.0)) {
    return 0.0;
  } else {
    var x = (((n - 2) | 0) / (1.0 - (r * r)));
    return this.r0((r * (+Math.sqrt(x))), ((n - 2) | 0));
  }
});
$p.ue = (function(pairs) {
  var diffs = pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => ((+x$1$2.R) - (+x$1$2.O)))));
  var n = diffs.i();
  var meanD = this.he(diffs);
  var x$1 = ((+diffs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    var d$2 = (+d$3);
    return ((d$2 - meanD) * (d$2 - meanD));
  }))).cH($m_s_math_Numeric$DoubleIsFractional$())) / ((n - 1) | 0));
  var sdD = (+Math.sqrt(x$1));
  var x$2 = n;
  var t = (meanD / (sdD / (+Math.sqrt(x$2))));
  var df = ((n - 1) | 0);
  return new $c_T3(t, df, this.r0(t, df));
});
$p.ks = (function(pairs) {
  var n = pairs.i();
  var xs = pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$12$2) => (+_$12$2.R))));
  var ys = pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$13$2) => (+_$13$2.O))));
  var aCenter = $p_Lscorry_SummaryStatistics$__doubleCenter$1__I__AAD__AAD(this, n, $p_Lscorry_SummaryStatistics$__distMatrix$1__I__sci_Seq__AAD(this, n, xs));
  var bCenter = $p_Lscorry_SummaryStatistics$__doubleCenter$1__I__AAD__AAD(this, n, $p_Lscorry_SummaryStatistics$__distMatrix$1__I__sci_Seq__AAD(this, n, ys));
  var dCovSq = $p_Lscorry_SummaryStatistics$__meanProduct$1__I__AAD__AAD__D(this, n, aCenter, bCenter);
  var dVarXSq = $p_Lscorry_SummaryStatistics$__meanProduct$1__I__AAD__AAD__D(this, n, aCenter, aCenter);
  var dVarYSq = $p_Lscorry_SummaryStatistics$__meanProduct$1__I__AAD__AAD__D(this, n, bCenter, bCenter);
  if (((dVarXSq <= 0.0) || (dVarYSq <= 0.0))) {
    return 0.0;
  } else {
    var x = (dVarXSq * dVarYSq);
    var x$1 = (dCovSq / (+Math.sqrt(x)));
    return (+Math.sqrt(x$1));
  }
});
$p.sP = (function(pairs, nPerm, seed_$_lo, seed_$_hi) {
  var observed = this.ks(pairs);
  var rng = $ct_s_util_Random__J__(new $c_s_util_Random(), seed_$_lo, seed_$_hi);
  var xs = pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$14$2) => (+_$14$2.R))));
  var ys = pairs.z(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$15$2) => (+_$15$2.O))));
  var isEmpty = (nPerm < 1);
  var res = 0;
  var it = new $c_sci_RangeIterator(1, 1, nPerm, isEmpty);
  while (it.dR) {
    it.kU();
    var shuffledY = rng.uS(ys, ($m_sc_BuildFrom$(), new $c_sc_BuildFromLowPriority2$$anon$11()));
    if ((this.ks(xs.gh(shuffledY)) >= observed)) {
      res = ((1 + res) | 0);
    }
  }
  return (((1 + res) | 0) / ((1 + nPerm) | 0));
});
var $d_Lscorry_SummaryStatistics$ = new $TypeData().i($c_Lscorry_SummaryStatistics$, "scorry.SummaryStatistics$", ({
  k0: 1
}));
var $n_Lscorry_SummaryStatistics$;
function $m_Lscorry_SummaryStatistics$() {
  if ((!$n_Lscorry_SummaryStatistics$)) {
    $n_Lscorry_SummaryStatistics$ = new $c_Lscorry_SummaryStatistics$();
  }
  return $n_Lscorry_SummaryStatistics$;
}
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $thiz.hg(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $thiz.iz(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.hl(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.hl(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.lV = null;
  this.lU = null;
  this.iT = false;
  this.lU = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.iT = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.ge = (function() {
  return this.lV;
});
$p.px = (function(x$0) {
  this.lV = x$0;
});
$p.qy = (function(subscription) {
  if (this.iT) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.lU.I();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.qj = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.iT = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  db: 1,
  bl: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.ms = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$() {
}
$h_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$.prototype = $p;
$p.ge = (function() {
  return this.ms;
});
$p.px = (function(x$0) {
  this.ms = x$0;
});
$p.qj = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.qy = (function(subscription) {
  $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
});
var $d_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$, "com.raquo.laminar.api.Laminar$unsafeWindowOwner$", ({
  dw: 1,
  bl: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_codecs_package$$anon$2(outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_codecs_package$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_codecs_package$$anon$2() {
}
$h_Lcom_raquo_laminar_codecs_package$$anon$2.prototype = $p;
$p.ii = (function(scalaValue) {
  return scalaValue;
});
$p.kr = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  dC: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.ne = null;
  this.ng = null;
  this.nf = null;
  this.j5 = null;
  this.ne = getRawDomValue;
  this.ng = setRawDomValue;
  this.nf = separator;
  this.j5 = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.pe = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().n.rO(), $m_Lcom_raquo_laminar_keys_CompositeKey$().qs(items, this.nf)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  e7: 1,
  a3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.j6 = null;
  this.j6 = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.pL = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().qs(domValue, this.j6);
});
$p.pP = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.j6, "");
});
$p.kr = (function(domValue) {
  return this.pL(domValue);
});
$p.ii = (function(scalaValue) {
  return this.pP(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  e9: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$.prototype = $p;
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$, "com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$", ({
  eb: 1,
  ea: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.gn = null;
  this.gn = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  ee: 1,
  a3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.go = null;
  this.j8 = null;
  this.go = name;
  this.j8 = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.r = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().qP(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  ef: 1,
  a3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.ni = null;
  this.nh = null;
  this.ni = name;
  this.nh = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.r = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().uK(element, prop, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  eg: 1,
  a3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.ja = null;
  this.j9 = null;
  this.hE = null;
  this.hF = null;
  this.ja = localName;
  this.j9 = codec;
  var this$2 = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.A() + ":") + localName)));
  this.hE = (this$2.c() ? localName : this$2.A());
  this.hF = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().u3(namespacePrefix.A())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
$p.r = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().qQ(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  eh: 1,
  a3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$1.prototype = $p;
$p.cR = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  ep: 1,
  a4: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.no = null;
  this.no = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$$anon$2.prototype = $p;
$p.cR = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.no.e(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bp || (!when))) {
    f();
  } else {
    this$2.bp = true;
    try {
      f();
    } finally {
      this$2.bp = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  eq: 1,
  a4: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1, "com.raquo.laminar.modifiers.RenderableNode$$anon$1", ({
  et: 1,
  er: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$, "com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$", ({
  ev: 1,
  eu: 1
}));
var $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
function $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$() {
  if ((!$n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$)) {
    $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$ = new $c_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$();
  }
  return $n_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(render$2, outer) {
  this.np = null;
  this.np = render$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1.prototype = $p;
$p.sk = (function(value) {
  return this.np.e(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  ey: 1,
  ew: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.kk(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().sN($thiz.L(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.jm = null;
  this.jm = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.aA = (function(modifiers) {
  var element = this.sr();
  modifiers.bW(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.cR(element);
  })));
  return element;
});
$p.sr = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().sI(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  eJ: 1,
  bt: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.jn = null;
  this.jn = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
$p.bB = (function(modifiers) {
  var element = this.ss();
  modifiers.bW(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.cR(element);
  })));
  return element;
});
$p.ss = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, $m_Lcom_raquo_laminar_DomApi$().pK(this));
});
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  eK: 1,
  bt: 1
}));
/** @constructor */
function $c_jl_Character$() {
  this.jo = null;
  $n_jl_Character$ = this;
  this.jo = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.l8 = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.sO = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().sm(this.jo, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.jo.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  eV: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
function $p_jl_Double$__doubleStrPat$lzycompute__O($thiz) {
  if (((((1 & $thiz.e9) << 24) >> 24) === 0)) {
    $thiz.jr = new RegExp("^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$");
    $thiz.e9 = (((1 | $thiz.e9) << 24) >> 24);
  }
  return $thiz.jr;
}
function $p_jl_Double$__doubleStrPat__O($thiz) {
  return (((((1 & $thiz.e9) << 24) >> 24) === 0) ? $p_jl_Double$__doubleStrPat$lzycompute__O($thiz) : $thiz.jr);
}
function $p_jl_Double$__doubleStrHexPat$lzycompute__O($thiz) {
  if (((((2 & $thiz.e9) << 24) >> 24) === 0)) {
    $thiz.jq = new RegExp("^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$");
    $thiz.e9 = (((2 | $thiz.e9) << 24) >> 24);
  }
  return $thiz.jq;
}
function $p_jl_Double$__doubleStrHexPat__O($thiz) {
  return (((((2 & $thiz.e9) << 24) >> 24) === 0) ? $p_jl_Double$__doubleStrHexPat$lzycompute__O($thiz) : $thiz.jq);
}
function $p_jl_Double$__parseDoubleSlowPath__T__D($thiz, s) {
  var groups = $p_jl_Double$__doubleStrHexPat__O($thiz).exec(s);
  if ((groups === null)) {
    $ps_jl_Double$__fail$1__T__E(s);
  }
  var x = groups[1];
  var x$1 = groups[2];
  var x$2 = groups[3];
  var x$3 = groups[4];
  if (((x$1 === "") && (x$2 === ""))) {
    $ps_jl_Double$__fail$1__T__E(s);
  }
  var absResult = $thiz.ug(x$1, x$2, x$3, 15);
  return ((x === "-") ? (-absResult) : absResult);
}
function $ps_jl_Double$__fail$1__T__E(s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""));
}
/** @constructor */
function $c_jl_Double$() {
  this.jr = null;
  this.jq = null;
  this.e9 = 0;
}
$p = $c_jl_Double$.prototype = new $h_O();
$p.constructor = $c_jl_Double$;
/** @constructor */
function $h_jl_Double$() {
}
$h_jl_Double$.prototype = $p;
$p.qz = (function(s) {
  var groups = $p_jl_Double$__doubleStrPat__O(this).exec(s);
  return ((groups !== null) ? (+parseFloat(groups[1])) : $p_jl_Double$__parseDoubleSlowPath__T__D(this, s));
});
$p.ug = (function(integralPartStr, fractionalPartStr, binaryExpStr, maxPrecisionChars) {
  var mantissaStr0 = (("" + integralPartStr) + fractionalPartStr);
  var correction1 = ((-(fractionalPartStr.length << 2)) | 0);
  var limit = ((mantissaStr0.length - 1) | 0);
  var i = 0;
  while (((i !== limit) && (mantissaStr0.charCodeAt(i) === 48))) {
    i = ((1 + i) | 0);
  }
  var beginIndex = i;
  var mantissaStr = mantissaStr0.substring(beginIndex);
  var mantissaStrLen = mantissaStr.length;
  var needsCorrection2 = (mantissaStrLen > maxPrecisionChars);
  if (needsCorrection2) {
    var hasNonZeroChar = false;
    var j = maxPrecisionChars;
    while (((!hasNonZeroChar) && (j !== mantissaStrLen))) {
      if ((mantissaStr.charCodeAt(j) !== 48)) {
        hasNonZeroChar = true;
      }
      j = ((1 + j) | 0);
    }
    var compressedTail = (hasNonZeroChar ? "1" : "0");
    var truncatedMantissaStr = (mantissaStr.substring(0, maxPrecisionChars) + compressedTail);
  } else {
    var truncatedMantissaStr = mantissaStr;
  }
  var correction2 = (needsCorrection2 ? (((mantissaStr.length - ((1 + maxPrecisionChars) | 0)) | 0) << 2) : 0);
  var fullCorrection = ((correction1 + correction2) | 0);
  return $m_jl_Math$().uF((+parseInt(truncatedMantissaStr, 16)), (($doubleToInt((+parseInt(binaryExpStr, 10))) + fullCorrection) | 0));
});
$p.ig = (function(a, b) {
  if ((a !== a)) {
    return ((b !== b) ? 0 : 1);
  } else if ((b !== b)) {
    return (-1);
  } else if ((a === b)) {
    if ((a === 0.0)) {
      var ainf = (1.0 / a);
      return ((ainf === (1.0 / b)) ? 0 : ((ainf < 0.0) ? (-1) : 1));
    } else {
      return 0;
    }
  } else {
    return ((a < b) ? (-1) : 1);
  }
});
var $d_jl_Double$ = new $TypeData().i($c_jl_Double$, "java.lang.Double$", ({
  eY: 1,
  a: 1
}));
var $n_jl_Double$;
function $m_jl_Double$() {
  if ((!$n_jl_Double$)) {
    $n_jl_Double$ = new $c_jl_Double$();
  }
  return $n_jl_Double$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.hn = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.qf = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().hn(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().hn(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().hn(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.sO(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().hn(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().hn(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
$p.dm = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  f1: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Long$() {
}
$p = $c_jl_Long$.prototype = new $h_O();
$p.constructor = $c_jl_Long$;
/** @constructor */
function $h_jl_Long$() {
}
$h_jl_Long$.prototype = $p;
$p.qg = (function(lo, hi) {
  if ((hi !== 0)) {
    var $x_1 = (hi >>> 0.0).toString(16);
    var s = (lo >>> 0.0).toString(16);
    var beginIndex = s.length;
    return ($x_1 + (("" + "00000000".substring(beginIndex)) + s));
  } else {
    return (lo >>> 0.0).toString(16);
  }
});
$p.tK = (function(lo, hi) {
  var lp = (1073741823 & lo);
  var mp = (1073741823 & ((((lo >>> 30) | 0) + (hi << 2)) | 0));
  var hp = ((hi >>> 28) | 0);
  if ((hp !== 0)) {
    var $x_2 = (hp >>> 0.0).toString(8);
    var s = (mp >>> 0.0).toString(8);
    var beginIndex = s.length;
    var $x_1 = "0000000000".substring(beginIndex);
    var s$1 = (lp >>> 0.0).toString(8);
    var beginIndex$1 = s$1.length;
    return (($x_2 + (("" + $x_1) + s)) + (("" + "0000000000".substring(beginIndex$1)) + s$1));
  } else if ((mp !== 0)) {
    var $x_3 = (mp >>> 0.0).toString(8);
    var s$2 = (lp >>> 0.0).toString(8);
    var beginIndex$2 = s$2.length;
    return ($x_3 + (("" + "0000000000".substring(beginIndex$2)) + s$2));
  } else {
    return (lp >>> 0.0).toString(8);
  }
});
var $d_jl_Long$ = new $TypeData().i($c_jl_Long$, "java.lang.Long$", ({
  f4: 1,
  a: 1
}));
var $n_jl_Long$;
function $m_jl_Long$() {
  if ((!$n_jl_Long$)) {
    $n_jl_Long$ = new $c_jl_Long$();
  }
  return $n_jl_Long$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.fv = null;
  this.gp = null;
  this.fw = null;
  this.fx = 0;
  this.fu = 0;
  this.fv = declaringClass;
  this.gp = methodName;
  this.fw = fileName;
  this.fx = lineNumber;
  this.fu = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.p = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.fw === that.fw) && (this.fx === that.fx)) && (this.fu === that.fu)) && (this.fv === that.fv)) && (this.gp === that.gp)));
});
$p.u = (function() {
  var result = "";
  if ((this.fv !== "<jscode>")) {
    result = ((("" + result) + this.fv) + ".");
  }
  result = (("" + result) + this.gp);
  if ((this.fw === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.fw);
    if ((this.fx >= 0)) {
      result = ((result + ":") + this.fx);
      if ((this.fu >= 0)) {
        result = ((result + ":") + this.fu);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.x = (function() {
  return (((($f_T__hashCode__I(this.fv) ^ $f_T__hashCode__I(this.gp)) ^ $f_T__hashCode__I(this.fw)) ^ this.fx) ^ this.fu);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bB)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  bB: 1,
  a: 1
}));
/** @constructor */
function $c_jl_String$() {
}
$p = $c_jl_String$.prototype = new $h_O();
$p.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
}
$h_jl_String$.prototype = $p;
$p.u5 = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  var result = "";
  var i = offset;
  while ((i !== end)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
$p.t9 = (function(format, args) {
  return $ct_ju_Formatter__(new $c_ju_Formatter()).ta(format, args).u();
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  fb: 1,
  a: 1
}));
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$();
  }
  return $n_jl_String$;
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.nE = s;
  $thiz.nF = writableStackTrace;
  if (writableStackTrace) {
    $thiz.t0();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.nE = null;
    this.nF = false;
    this.nD = null;
    this.hH = null;
  }
  qa(cause) {
    return this;
  }
  bt() {
    return this.nE;
  }
  t0() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.a0 : this);
    this.nD = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  tn() {
    if ((this.hH === null)) {
      if (this.nF) {
        this.hH = $m_jl_StackTrace$().sY(this.nD);
      } else {
        this.hH = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.hH;
  }
  u() {
    var className = $objectClassName(this);
    var message = this.bt();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  x() {
    return $c_O.prototype.x.call(this);
  }
  p(that) {
    return $c_O.prototype.p.call(this, that);
  }
  get "message"() {
    var m = this.bt();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.u();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.q)));
}
/** @constructor */
function $c_ju_Arrays$NaturalComparator$() {
}
$p = $c_ju_Arrays$NaturalComparator$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$NaturalComparator$;
/** @constructor */
function $h_ju_Arrays$NaturalComparator$() {
}
$h_ju_Arrays$NaturalComparator$.prototype = $p;
$p.Z = (function(o1, o2) {
  return $dp_compareTo__O__I(o1, o2);
});
var $d_ju_Arrays$NaturalComparator$ = new $TypeData().i($c_ju_Arrays$NaturalComparator$, "java.util.Arrays$NaturalComparator$", ({
  fm: 1,
  G: 1
}));
var $n_ju_Arrays$NaturalComparator$;
function $m_ju_Arrays$NaturalComparator$() {
  if ((!$n_ju_Arrays$NaturalComparator$)) {
    $n_ju_Arrays$NaturalComparator$ = new $c_ju_Arrays$NaturalComparator$();
  }
  return $n_ju_Arrays$NaturalComparator$;
}
/** @constructor */
function $c_ju_Formatter$RootLocaleInfo$() {
}
$p = $c_ju_Formatter$RootLocaleInfo$.prototype = new $h_ju_Formatter$LocaleInfo();
$p.constructor = $c_ju_Formatter$RootLocaleInfo$;
/** @constructor */
function $h_ju_Formatter$RootLocaleInfo$() {
}
$h_ju_Formatter$RootLocaleInfo$.prototype = $p;
var $d_ju_Formatter$RootLocaleInfo$ = new $TypeData().i($c_ju_Formatter$RootLocaleInfo$, "java.util.Formatter$RootLocaleInfo$", ({
  fu: 1,
  ft: 1
}));
var $n_ju_Formatter$RootLocaleInfo$;
function $m_ju_Formatter$RootLocaleInfo$() {
  if ((!$n_ju_Formatter$RootLocaleInfo$)) {
    $n_ju_Formatter$RootLocaleInfo$ = new $c_ju_Formatter$RootLocaleInfo$();
  }
  return $n_ju_Formatter$RootLocaleInfo$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$() {
}
$h_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$.prototype = $p;
$p.d3 = (function(a, i, v) {
  a.a[i] = v;
});
$p.bD = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$, "java.util.internal.GenericArrayOps$ReusableAnyRefArrayOps$", ({
  fL: 1,
  ap: 1
}));
var $n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$;
function $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$)) {
    $n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$ = new $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$;
}
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.hI === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "No match available");
  }
  return $thiz.hI;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.nX = null;
  this.nW = null;
  this.nY = 0;
  this.jx = null;
  this.jy = 0;
  this.hI = null;
  this.nX = pattern0;
  this.nW = input0;
  this.nY = 0;
  this.jx = this.nW;
  this.jy = 0;
  this.hI = null;
}
$p = $c_ju_regex_Matcher.prototype = new $h_O();
$p.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $p;
$p.t1 = (function() {
  var this$1 = this.nX;
  var input = this.jx;
  var start = this.jy;
  var mtch = this$1.tN(input, start);
  var end = (this$1.jz.lastIndex | 0);
  this.jy = ((mtch !== null) ? ((end === (mtch.index | 0)) ? ((1 + end) | 0) : end) : ((1 + this.jx.length) | 0));
  this.hI = mtch;
  return (mtch !== null);
});
$p.qY = (function() {
  return ((($p_ju_regex_Matcher__ensureLastMatch__O(this).index | 0) + this.nY) | 0);
});
$p.pQ = (function() {
  return ((this.qY() + this.tr().length) | 0);
});
$p.tr = (function() {
  return $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
});
var $d_ju_regex_Matcher = new $TypeData().i($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  fP: 1,
  fO: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.nZ = null;
  this.o0 = null;
  this.o1 = false;
  this.jz = null;
  this.nZ = _pattern;
  this.o0 = jsFlags;
  this.o1 = sticky;
  this.jz = new RegExp(jsPattern, (this.o0 + (this.o1 ? "gy" : "g")));
  new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$p = $c_ju_regex_Pattern.prototype = new $h_O();
$p.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $p;
$p.tN = (function(input, start) {
  var regexp = this.jz;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$p.u = (function() {
  return this.nZ;
});
$p.tO = (function(inputStr, limit) {
  if ((inputStr === "")) {
    return new ($d_T.r().C)([""]);
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var matcher = new $c_ju_regex_Matcher(this, inputStr);
    var result = [];
    var prevEnd = 0;
    while ((((result.length | 0) < ((lim - 1) | 0)) && matcher.t1())) {
      if ((matcher.pQ() !== 0)) {
        var beginIndex = prevEnd;
        var endIndex = matcher.qY();
        var $x_1 = result.push(inputStr.substring(beginIndex, endIndex));
      }
      prevEnd = matcher.pQ();
    }
    var beginIndex$1 = prevEnd;
    result.push(inputStr.substring(beginIndex$1));
    var actualLength = (result.length | 0);
    if ((limit === 0)) {
      while (true) {
        if ((actualLength !== 0)) {
          var x = result[((actualLength - 1) | 0)];
          var $x_2 = ((x !== null) && $dp_equals__O__Z(x, ""));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          actualLength = ((actualLength - 1) | 0);
        } else {
          break;
        }
      }
    }
    var r = new ($d_T.r().C)(actualLength);
    var end = actualLength;
    var i = 0;
    while ((i < end)) {
      var value = i;
      r.a[value] = result[value];
      i = ((1 + i) | 0);
    }
    return r;
  }
});
var $d_ju_regex_Pattern = new $TypeData().i($c_ju_regex_Pattern, "java.util.regex.Pattern", ({
  fQ: 1,
  a: 1
}));
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.ve = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.jX;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
$p.rf = (function(xs) {
  return ((xs === null) ? null : new $c_scm_ArraySeq$ofDouble(xs));
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.cf(x) ? $thiz.e(x) : default$1.e(x));
}
/** @constructor */
function $c_sc_BuildFromLowPriority2$$anon$11() {
}
$p = $c_sc_BuildFromLowPriority2$$anon$11.prototype = new $h_O();
$p.constructor = $c_sc_BuildFromLowPriority2$$anon$11;
/** @constructor */
function $h_sc_BuildFromLowPriority2$$anon$11() {
}
$h_sc_BuildFromLowPriority2$$anon$11.prototype = $p;
$p.u6 = (function(from) {
  return from.at().ae();
});
var $d_sc_BuildFromLowPriority2$$anon$11 = new $TypeData().i($c_sc_BuildFromLowPriority2$$anon$11, "scala.collection.BuildFromLowPriority2$$anon$11", ({
  gn: 1,
  gj: 1
}));
/** @constructor */
function $c_sci_LazyList$Uninitialized$() {
}
$p = $c_sci_LazyList$Uninitialized$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$Uninitialized$;
/** @constructor */
function $h_sci_LazyList$Uninitialized$() {
}
$h_sci_LazyList$Uninitialized$.prototype = $p;
var $d_sci_LazyList$Uninitialized$ = new $TypeData().i($c_sci_LazyList$Uninitialized$, "scala.collection.immutable.LazyList$Uninitialized$", ({
  h7: 1,
  a: 1
}));
var $n_sci_LazyList$Uninitialized$;
function $m_sci_LazyList$Uninitialized$() {
  if ((!$n_sci_LazyList$Uninitialized$)) {
    $n_sci_LazyList$Uninitialized$ = new $c_sci_LazyList$Uninitialized$();
  }
  return $n_sci_LazyList$Uninitialized$;
}
/** @constructor */
function $c_sci_MapNode() {
}
$p = $c_sci_MapNode.prototype = new $h_sci_Node();
$p.constructor = $c_sci_MapNode;
/** @constructor */
function $h_sci_MapNode() {
}
$h_sci_MapNode.prototype = $p;
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step);
}
/** @constructor */
function $c_sci_Range$() {
}
$p = $c_sci_Range$.prototype = new $h_O();
$p.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
}
$h_sci_Range$.prototype = $p;
$p.uD = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
var $d_sci_Range$ = new $TypeData().i($c_sci_Range$, "scala.collection.immutable.Range$", ({
  hq: 1,
  a: 1
}));
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$();
  }
  return $n_sci_Range$;
}
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.aW($m_scm_Buffer$().fY(elems));
  } else {
    var it = elems.d();
    while (it.j()) {
      $thiz.ac(it.f());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_math_Ordering$() {
}
$p = $c_s_math_Ordering$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$;
/** @constructor */
function $h_s_math_Ordering$() {
}
$h_s_math_Ordering$.prototype = $p;
var $d_s_math_Ordering$ = new $TypeData().i($c_s_math_Ordering$, "scala.math.Ordering$", ({
  ix: 1,
  it: 1
}));
var $n_s_math_Ordering$;
function $m_s_math_Ordering$() {
  if ((!$n_s_math_Ordering$)) {
    $n_s_math_Ordering$ = new $c_s_math_Ordering$();
  }
  return $n_s_math_Ordering$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.u = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.u = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.u = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.u = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
$p = $c_sr_AbstractFunction4.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
$h_sr_AbstractFunction4.prototype = $p;
$p.u = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.i0 = false;
  this.i0 = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.u = (function() {
  return ("" + this.i0);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  jk: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.ay = 0;
  this.ay = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.u = (function() {
  return ("" + this.ay);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  jm: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.i1 = false;
  this.i2 = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.ty = (function(value) {
  this.i2 = value;
  this.i1 = true;
  return value;
});
$p.u = (function() {
  return ("LazyRef " + (this.i1 ? ("of: " + this.i2) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  jn: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.D = null;
  this.D = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.u = (function() {
  return ("" + this.D);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  jq: 1,
  a: 1
}));
function $ct_s_util_Random__ju_Random__($thiz, self) {
  $thiz.pa = self;
  return $thiz;
}
function $ct_s_util_Random__J__($thiz, seed_$_lo, seed_$_hi) {
  $ct_s_util_Random__ju_Random__($thiz, new $c_ju_Random(seed_$_lo, seed_$_hi));
  return $thiz;
}
function $p_s_util_Random__swap$1__scm_ArrayBuffer__I__I__V($thiz, buf$1, i1, i2) {
  var tmp = buf$1.o(i1);
  buf$1.r8(i1, buf$1.o(i2));
  buf$1.r8(i2, tmp);
}
/** @constructor */
function $c_s_util_Random() {
  this.pa = null;
}
$p = $c_s_util_Random.prototype = new $h_O();
$p.constructor = $c_s_util_Random;
/** @constructor */
function $h_s_util_Random() {
}
$h_s_util_Random.prototype = $p;
$p.uS = (function(xs, bf) {
  var buf = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).ke(xs);
  var x = buf.aq;
  if ((!(x < 2))) {
    var i = x;
    while (true) {
      var x0 = i;
      $p_s_util_Random__swap$1__scm_ArrayBuffer__I__I__V(this, buf, ((x0 - 1) | 0), this.pa.ua(x0));
      if ((i === 2)) {
        break;
      }
      i = ((i - 1) | 0);
    }
  }
  return bf.u6(xs).aW(buf).af();
});
var $d_s_util_Random = new $TypeData().i($c_s_util_Random, "scala.util.Random", ({
  jO: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.az = 0;
  this.dY = 0;
  this.pc = 0;
  this.i4 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.az = $f_T__hashCode__I("Seq");
  this.dY = $f_T__hashCode__I("Map");
  this.pc = $f_T__hashCode__I("Set");
  this.i4 = this.iF($m_sci_Nil$(), this.dY);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cI = (function(x, y) {
  return this.r6($m_sr_Statics$().E(x), $m_sr_Statics$().E(y), (-889275714));
});
$p.qO = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.tw(xs, this.az) : ((xs instanceof $c_sci_List) ? this.tQ(xs, this.az) : this.ud(xs, this.az)));
});
$p.tY = (function(xs) {
  if (xs.c()) {
    return this.i4;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.dY;
    xs.cT(accum);
    h = this.B(h, accum.i5);
    h = this.B(h, accum.i6);
    h = this.e2(h, accum.i7);
    return this.aX(h, accum.i8);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  jW: 1,
  jV: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$accum$1() {
  this.i5 = 0;
  this.i6 = 0;
  this.i8 = 0;
  this.i7 = 0;
  this.i5 = 0;
  this.i6 = 0;
  this.i8 = 0;
  this.i7 = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.u = (function() {
  return "<function2>";
});
$p.sc = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cI(k, v);
  this.i5 = ((this.i5 + h) | 0);
  this.i6 = (this.i6 ^ h);
  this.i7 = Math.imul(this.i7, (1 | h));
  this.i8 = ((1 + this.i8) | 0);
});
$p.bN = (function(v1, v2) {
  this.sc(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  jX: 1,
  aZ: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.iH = null;
  this.la = null;
  this.lb = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.iH = $m_scm_Buffer$().kh($m_sr_ScalaRunTime$().cJ(new ($d_F1.r().C)([])));
  this.la = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    try {
      console.error(((this.g0(err) + "\n") + this.tm(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.lb = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.a0 : $x_1);
  }));
  this.ul(this.la);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.g0 = (function(e) {
  try {
    var errorMessage = e.bt();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).kJ() + ": ") + errorMessage);
});
$p.tm = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().ve(err.tn()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.ul = (function(fn) {
  this.iH.ac(fn);
});
$p.d2 = (function(err) {
  var this$1 = this.iH;
  var it = this$1.d();
  while (it.j()) {
    var x0 = it.f();
    try {
      x0.e(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.lb;
      if (((x0 === null) ? (x$2 === null) : x0.p(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().uR(0.0, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  cQ: 1,
  iq: 1,
  ir: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.cY(true);
  $thiz.g7((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().re(onNext, $m_s_PartialFunction$().hM, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.g3()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.g3()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz) {
  return ($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) > 0);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz) {
  var x = $thiz.eE();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().cS($m_sr_ScalaRunTime$().cJ(new ($d_F0.r().C)([])));
    $thiz.g7(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aS: 1,
  aJ: 1,
  ab: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.sk(value));
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.mc = null;
  this.md = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.uc = (function() {
  if ((!this.md)) {
    this.mc = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.md = true;
  }
  return this.mc;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  du: 1,
  bp: 1,
  dH: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.nk = null;
  this.jc = null;
  this.nk = key;
  this.jc = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.cR = (function(element) {
  if ((!this.jc.c())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.nk, null, this.jc, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  el: 1,
  a4: 1,
  br: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.ft = null;
  this.jd = null;
  this.je = null;
  this.ft = eventProcessor;
  this.jd = ((ev) => {
    var processor = eventProcessor.hC;
    var this$2 = processor.e(ev);
    if ((!this$2.c())) {
      callback.e(this$2.A());
    }
  });
  this.je = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
    }
    this$3.capture = outer.ft.hD;
    this$3.passive = outer.ft.j7;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.cR = (function(element) {
  this.sn(element, false);
});
$p.sn = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().rX(element.L(), this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.jb, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().up(element.L(), this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().va(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iG(element.cd(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().qZ(element.cd(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner$1) => {
      activate.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.u = (function() {
  return (("EventListener(" + this.ft.fs.gn) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  em: 1,
  a4: 1,
  ek: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.nm = null;
  this.nn = null;
  this.nl = null;
  this.nm = key;
  this.nn = value;
  this.nl = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.cR = (function(element) {
  this.nl.h3(element, this.nm, this.nn);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  en: 1,
  a4: 1,
  br: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.jj = null;
  this.nA = null;
  this.nB = null;
  this.nA = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().tI(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.nB = container;
  this.u2();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.cd = (function() {
  return this.jj;
});
$p.kk = (function(x$0) {
  this.jj = x$0;
});
$p.u2 = (function() {
  this.jj.pg();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().fR(this, this.nA, (void 0));
});
$p.L = (function() {
  return this.nB;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  eE: 1,
  az: 1,
  aW: 1
}));
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.y.Z) {
    return ($thiz.y.Q().kJ() + "[]");
  } else {
    var name = $thiz.y.N;
    var idx = ((name.length - 1) | 0);
    while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
      idx = ((idx - 1) | 0);
    }
    if (((idx >= 0) && ((((name.charCodeAt(idx) - 48) | 0) >>> 0) <= 9))) {
      idx = ((idx - 1) | 0);
      while (((idx >= 0) && ((((name.charCodeAt(idx) - 48) | 0) >>> 0) <= 9))) {
        idx = ((idx - 1) | 0);
      }
      while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
        idx = ((idx - 1) | 0);
      }
    }
    while (true) {
      if ((idx >= 0)) {
        var index$4 = idx;
        var currChar = name.charCodeAt(index$4);
        var $x_1 = ((currChar !== 36) && (currChar !== 46));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        idx = ((idx - 1) | 0);
      } else {
        break;
      }
    }
    var beginIndex = ((1 + idx) | 0);
    return name.substring(beginIndex);
  }
}
/** @constructor */
function $c_jl_Class($data) {
  this.jp = null;
  this.y = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.u = (function() {
  return ((this.y.Y ? "interface " : (this.y.X ? "" : "class ")) + this.y.N);
});
$p.kJ = (function() {
  if ((this.jp === null)) {
    this.jp = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.jp;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  eW: 1,
  a: 1,
  a5: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
function $ct_jl_Exception__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $isArrayOf_jl_Exception(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
var $d_jl_Exception = new $TypeData().i($c_jl_Exception, "java.lang.Exception", ({
  u: 1,
  q: 1,
  a: 1
}));
function $p_ju_Random__loop$1__I__I($thiz, n$1) {
  while (true) {
    var bits = $thiz.qp(31);
    var value = ((bits % $checkIntDivisor(n$1)) | 0);
    if ((((((bits - value) | 0) + ((n$1 - 1) | 0)) | 0) < 0)) {
    } else {
      return value;
    }
  }
}
/** @constructor */
function $c_ju_Random(seed_in_$_lo, seed_in_$_hi) {
  this.k7 = 0;
  this.k8 = 0;
  this.uP(seed_in_$_lo, seed_in_$_hi);
}
$p = $c_ju_Random.prototype = new $h_O();
$p.constructor = $c_ju_Random;
/** @constructor */
function $h_ju_Random() {
}
$h_ju_Random.prototype = $p;
$p.uP = (function(seed_in_$_lo, seed_in_$_hi) {
  var lo = ((-554899859) ^ seed_in_$_lo);
  var hi = (5 ^ seed_in_$_hi);
  var hi$1 = (65535 & hi);
  this.k7 = lo;
  this.k8 = hi$1;
});
$p.qp = (function(bits) {
  var x_$_lo = this.k7;
  var x_$_hi = this.k8;
  var b0 = (65535 & x_$_lo);
  var b1 = ((x_$_lo >>> 16) | 0);
  var a1b0 = Math.imul(58989, b0);
  var lo = (a1b0 << 16);
  var hi = ((((((Math.imul((-429064192), x_$_hi) + Math.imul(384748, x_$_lo)) | 0) + Math.imul(58989, b1)) | 0) + ((a1b0 >>> 16) | 0)) | 0);
  var lo$1 = ((720896 + lo) | 0);
  var hi$1 = ((hi + (((lo & (~lo$1)) >>> 31) | 0)) | 0);
  var lo$2 = (((lo$1 >>> 16) | 0) | (hi$1 << 16));
  var hi$2 = ((hi$1 >>> 16) | 0);
  this.k7 = lo$2;
  this.k8 = hi$2;
  return ((hi$1 >>> ((-bits) | 0)) | 0);
});
$p.ua = (function(n) {
  if ((n <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "n must be positive");
  } else {
    return (((n & ((-n) | 0)) === n) ? (this.qp(31) >> Math.clz32(n)) : $p_ju_Random__loop$1__I__I(this, n));
  }
});
var $d_ju_Random = new $TypeData().i($c_ju_Random, "java.util.Random", ({
  fF: 1,
  fN: 1,
  a: 1
}));
/** @constructor */
function $c_s_Predef$() {
  this.rx = null;
  $n_s_Predef$ = this;
  $m_sci_List$();
  this.rx = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.uw = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  g6: 1,
  g0: 1,
  g1: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.R;
      break;
    }
    case 1: {
      return $thiz.O;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fz;
      break;
    }
    case 1: {
      return $thiz.fA;
      break;
    }
    case 2: {
      return $thiz.fB;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eU;
      break;
    }
    case 1: {
      return $thiz.eV;
      break;
    }
    case 2: {
      return $thiz.eW;
      break;
    }
    case 3: {
      return $thiz.eX;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 3)"));
    }
  }
}
/** @constructor */
function $c_sc_BuildFrom$() {
}
$p = $c_sc_BuildFrom$.prototype = new $h_O();
$p.constructor = $c_sc_BuildFrom$;
/** @constructor */
function $h_sc_BuildFrom$() {
}
$h_sc_BuildFrom$.prototype = $p;
var $d_sc_BuildFrom$ = new $TypeData().i($c_sc_BuildFrom$, "scala.collection.BuildFrom$", ({
  gk: 1,
  gm: 1,
  gl: 1
}));
var $n_sc_BuildFrom$;
function $m_sc_BuildFrom$() {
  if ((!$n_sc_BuildFrom$)) {
    $n_sc_BuildFrom$ = new $c_sc_BuildFrom$();
  }
  return $n_sc_BuildFrom$;
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.fC = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.fC = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.bP = (function() {
  return this.fC.pO($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.a5 = (function(it) {
  return this.fC.kA(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.ae = (function() {
  return this.fC.iy($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.dZ = (function(elems) {
  return this.fC.kA(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.gu = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.gu = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.a5 = (function(it) {
  return this.gu.a5(it);
});
$p.ae = (function() {
  return this.gu.ae();
});
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.s();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.d();
      while (it.j()) {
        if ((i === otherSize)) {
          return 1;
        }
        it.f();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_IterableOps__map__F1__O($thiz, f) {
  return $thiz.at().a5($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f));
}
function $f_sc_IterableOps__collect__s_PartialFunction__O($thiz, pf) {
  return $thiz.at().a5(new $c_sc_View$Collect($thiz, pf));
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).h6(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().J : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.d();
  while ($thiz.j()) {
    if ((!those.j())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().l($thiz.f(), those.f()))) {
      return false;
    }
  }
  return (!those.j());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.J = null;
  $n_sc_Iterator$ = this;
  this.J = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.ae = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.a5 = (function(source) {
  return source.d();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  gt: 1,
  a: 1,
  F: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.gx = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.gx = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.a5 = (function(it) {
  return this.gx.a5(it);
});
$p.bP = (function() {
  return this.gx.bP();
});
/** @constructor */
function $c_sc_View$() {
}
$p = $c_sc_View$.prototype = new $h_O();
$p.constructor = $c_sc_View$;
/** @constructor */
function $h_sc_View$() {
}
$h_sc_View$.prototype = $p;
$p.il = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((it$2) => (() => it$2.d()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().kC(it))));
});
$p.ae = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2) => this.il(it$2))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.a5 = (function(source) {
  return this.il(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  gM: 1,
  a: 1,
  F: 1
}));
var $n_sc_View$;
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$();
  }
  return $n_sc_View$;
}
/** @constructor */
function $c_sci_BitmapIndexedMapNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.X = 0;
  this.a6 = 0;
  this.aB = null;
  this.bR = null;
  this.b9 = 0;
  this.bE = 0;
  this.X = dataMap;
  this.a6 = nodeMap;
  this.aB = content;
  this.bR = originalHashes;
  this.b9 = size;
  this.bE = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.b0 = (function() {
  return this.b9;
});
$p.ev = (function() {
  return this.bE;
});
$p.dr = (function(index) {
  return this.aB.a[(index << 1)];
});
$p.cz = (function(index) {
  return this.aB.a[((1 + (index << 1)) | 0)];
});
$p.q8 = (function(index) {
  return new $c_T2(this.aB.a[(index << 1)], this.aB.a[((1 + (index << 1)) | 0)]);
});
$p.g1 = (function(index) {
  return this.bR.a[index];
});
$p.cU = (function(index) {
  return this.aB.a[((((this.aB.a.length - 1) | 0) - index) | 0)];
});
$p.kf = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().eC(keyHash, shift);
  var bitpos = $m_sci_Node$().e0(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cB(this.X, mask, bitpos);
    if ($m_sr_BoxesRunTime$().l(key, this.dr(index))) {
      return this.cz(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.a6 & bitpos) !== 0)) {
    return this.cU($m_sci_Node$().cB(this.a6, mask, bitpos)).kf(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.io = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().eC(keyHash, shift);
  var bitpos = $m_sci_Node$().e0(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cB(this.X, mask, bitpos);
    return ($m_sr_BoxesRunTime$().l(key, this.dr(index)) ? new $c_s_Some(this.cz(index)) : $m_s_None$());
  } else {
    return (((this.a6 & bitpos) !== 0) ? this.cU($m_sci_Node$().cB(this.a6, mask, bitpos)).io(key, originalHash, keyHash, ((5 + shift) | 0)) : $m_s_None$());
  }
});
$p.kH = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().eC(keyHash, shift);
  var bitpos = $m_sci_Node$().e0(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cB(this.X, mask, bitpos);
    return ($m_sr_BoxesRunTime$().l(key, this.dr(index)) ? this.cz(index) : f.I());
  } else {
    return (((this.a6 & bitpos) !== 0) ? this.cU($m_sci_Node$().cB(this.a6, mask, bitpos)).kH(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.I());
  }
});
$p.ko = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().eC(keyHash, shift);
  var bitpos = $m_sci_Node$().e0(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cB(this.X, mask, bitpos);
    return ((this.bR.a[index] === originalHash) && $m_sr_BoxesRunTime$().l(key, this.dr(index)));
  } else {
    return (((this.a6 & bitpos) !== 0) && this.cU($m_sci_Node$().cB(this.a6, mask, bitpos)).ko(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.r9 = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().eC(keyHash, shift);
  var bitpos = $m_sci_Node$().e0(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cB(this.X, mask, bitpos);
    var key0 = this.dr(index);
    var key0UnimprovedHash = this.g1(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().l(key0, key))) {
      if (replaceValue) {
        var value0 = this.cz(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.sD(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.cz(index);
      var key0Hash = $m_sc_Hashing$().cA(key0UnimprovedHash);
      return this.sB(bitpos, key0Hash, this.kT(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.a6 & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cB(this.a6, mask, bitpos);
    var subNode = this.cU(index$2);
    var subNodeNew$2 = subNode.ra(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.sC(bitpos, subNode, subNodeNew$2));
  } else {
    return this.sA(bitpos, key, originalHash, keyHash, value);
  }
});
$p.kT = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().kD($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().eC(keyHash0, shift);
    var mask1 = $m_sci_Node$().eC(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().e0(mask0) | $m_sci_Node$().e0(mask1));
      if ((mask0 < mask1)) {
        var xs = $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [key0, value0, key1, value1]);
        var array$2 = new $ac_O(xs.i());
        var iterator = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs));
        var i = 0;
        while ((iterator.bz > 0)) {
          array$2.a[i] = iterator.f();
          i = ((1 + i) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$2, new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash);
      } else {
        var xs$1 = $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [key1, value1, key0, value0]);
        var array$4 = new $ac_O(xs$1.i());
        var iterator$1 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$1));
        var i$1 = 0;
        while ((iterator$1.bz > 0)) {
          array$4.a[i$1] = iterator$1.f();
          i$1 = ((1 + i$1) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$4, new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash);
      }
    } else {
      var nodeMap = $m_sci_Node$().e0(mask0);
      var node = this.kT(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      var xs$2 = $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [node]);
      var array$6 = new $ac_O(xs$2.i());
      var iterator$2 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$2));
      var i$2 = 0;
      while ((iterator$2.bz > 0)) {
        array$6.a[i$2] = iterator$2.f();
        i$2 = ((1 + i$2) | 0);
      }
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().jG, node.b0(), node.ev());
    }
  }
});
$p.kK = (function() {
  return (this.a6 !== 0);
});
$p.kV = (function() {
  return $m_jl_Integer$().dm(this.a6);
});
$p.ip = (function() {
  return (this.X !== 0);
});
$p.kY = (function() {
  return $m_jl_Integer$().dm(this.X);
});
$p.h7 = (function(bitpos) {
  return $m_jl_Integer$().dm((this.X & ((bitpos - 1) | 0)));
});
$p.kW = (function(bitpos) {
  return $m_jl_Integer$().dm((this.a6 & ((bitpos - 1) | 0)));
});
$p.sD = (function(bitpos, newKey, newValue) {
  var dataIx = this.h7(bitpos);
  var idx = (dataIx << 1);
  var src = this.aB;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.v(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.X, this.a6, dst, this.bR, this.b9, this.bE);
});
$p.sC = (function(bitpos, oldNode, newNode) {
  var idx = ((((this.aB.a.length - 1) | 0) - this.kW(bitpos)) | 0);
  var src = this.aB;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.v(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.X, this.a6, dst, this.bR, ((((this.b9 - oldNode.b0()) | 0) + newNode.b0()) | 0), ((((this.bE - oldNode.ev()) | 0) + newNode.ev()) | 0));
});
$p.sA = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.h7(bitpos);
  var idx = (dataIx << 1);
  var src = this.aB;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.v(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.v(idx, dst, destPos, length);
  var dstHashes = this.tB(this.bR, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.X | bitpos), this.a6, dst, dstHashes, ((1 + this.b9) | 0), ((this.bE + keyHash) | 0));
});
$p.u0 = (function(bitpos, keyHash, node) {
  var dataIx = this.h7(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.aB.a.length - 2) | 0) - this.kW(bitpos)) | 0);
  var src = this.aB;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.v(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.v(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.v(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.qF(this.bR, dataIx);
  this.X = (this.X ^ bitpos);
  this.a6 = (this.a6 | bitpos);
  this.aB = dst;
  this.bR = dstHashes;
  this.b9 = ((((this.b9 - 1) | 0) + node.b0()) | 0);
  this.bE = ((((this.bE - keyHash) | 0) + node.ev()) | 0);
  return this;
});
$p.sB = (function(bitpos, keyHash, node) {
  var dataIx = this.h7(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.aB.a.length - 2) | 0) - this.kW(bitpos)) | 0);
  var src = this.aB;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.v(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.v(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.v(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.qF(this.bR, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.X ^ bitpos), (this.a6 | bitpos), dst, dstHashes, ((((this.b9 - 1) | 0) + node.b0()) | 0), ((((this.bE - keyHash) | 0) + node.ev()) | 0));
});
$p.cT = (function(f) {
  var iN = $m_jl_Integer$().dm(this.X);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.bN(this.dr(i$1), this.cz(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().dm(this.a6);
  var j = 0;
  while ((j < jN)) {
    this.cU(j).cT(f);
    j = ((1 + j) | 0);
  }
});
$p.kz = (function(f) {
  var i = 0;
  var iN = $m_jl_Integer$().dm(this.X);
  while ((i < iN)) {
    f.h3(this.dr(i), this.cz(i), this.g1(i));
    i = ((1 + i) | 0);
  }
  var jN = $m_jl_Integer$().dm(this.a6);
  var j = 0;
  while ((j < jN)) {
    this.cU(j).kz(f);
    j = ((1 + j) | 0);
  }
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bE === that.bE) && (this.a6 === that.a6)) && (this.X === that.X)) && (this.b9 === that.b9)) && $m_ju_Arrays$().kv(this.bR, that.bR))) {
      var a1 = this.aB;
      var a2 = that.aB;
      var length = this.aB.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().l(a1.a[i], a2.a[i]);
          i = ((1 + i) | 0);
        }
        return isEqual;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.x = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.u = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.pA = (function() {
  var this$1 = this.aB;
  var contentClone = this$1.g();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().dm(this.X) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].pB();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.X, this.a6, contentClone, this.bR.g(), this.b9, this.bE);
});
$p.kG = (function(index) {
  return this.cU(index);
});
$p.ra = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.r9(key, value, originalHash, hash, shift, replaceValue);
});
$p.pB = (function() {
  return this.pA();
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  cb: 1,
  cm: 1,
  b7: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.hV = 0;
  this.eg = 0;
  this.ah = null;
  this.hV = originalHash;
  this.eg = hash;
  this.ah = content;
  $m_s_Predef$().uw((this.ah.i() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.g2 = (function(key) {
  var iter = this.ah.d();
  var i = 0;
  while (iter.j()) {
    if ($m_sr_BoxesRunTime$().l(iter.f().R, key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.b0 = (function() {
  return this.ah.i();
});
$p.kf = (function(key, originalHash, hash, shift) {
  var this$1 = this.io(key, originalHash, hash, shift);
  return (this$1.c() ? $m_sc_Iterator$().J.f() : this$1.A());
});
$p.io = (function(key, originalHash, hash, shift) {
  if ((this.eg === hash)) {
    var index = this.g2(key);
    return ((index >= 0) ? new $c_s_Some(this.ah.o(index).O) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.kH = (function(key, originalHash, hash, shift, f) {
  if ((this.eg === hash)) {
    var x36 = this.g2(key);
    if ((x36 === (-1))) {
      return f.I();
    }
    return this.ah.o(x36).O;
  } else {
    return f.I();
  }
});
$p.ko = (function(key, originalHash, hash, shift) {
  return ((this.eg === hash) && (this.g2(key) >= 0));
});
$p.ra = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.g2(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.ah.o(index).O, value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ah.eG(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.ah.eu(new $c_T2(key, value))));
});
$p.kK = (function() {
  return false;
});
$p.kV = (function() {
  return 0;
});
$p.cU = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.ip = (function() {
  return true;
});
$p.kY = (function() {
  return this.ah.i();
});
$p.dr = (function(index) {
  return this.ah.o(index).R;
});
$p.cz = (function(index) {
  return this.ah.o(index).O;
});
$p.q8 = (function(index) {
  return this.ah.o(index);
});
$p.g1 = (function(index) {
  return this.hV;
});
$p.cT = (function(f) {
  this.ah.bW(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.R;
    var v = x$1$2.O;
    return f.bN(k, v);
  })));
});
$p.kz = (function(f) {
  var iter = this.ah.d();
  while (iter.j()) {
    var next = iter.f();
    f.h3(next.R, next.O, this.hV);
  }
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.eg === that.eg) && (this.ah.i() === that.ah.i()))) {
      var iter = this.ah.d();
      while (iter.j()) {
        var \u03b412$;
        var \u03b412$ = iter.f();
        var key = \u03b412$.R;
        var value = \u03b412$.O;
        var index = that.g2(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().l(value, that.ah.o(index).O)))) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.x = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.u = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.ev = (function() {
  return Math.imul(this.ah.i(), this.eg);
});
$p.kG = (function(index) {
  return this.cU(index);
});
$p.pB = (function() {
  return new $c_sci_HashCollisionMapNode(this.hV, this.eg, this.ah);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  cc: 1,
  cm: 1,
  b7: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.gH = null;
  $n_sci_HashMap$ = this;
  this.gH = new $c_sci_HashMap($m_sci_MapNode$().oH);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.tc = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().kd(source).l1());
});
$p.bP = (function() {
  return this.gH;
});
$p.a5 = (function(it) {
  return this.tc(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  gU: 1,
  a: 1,
  aF: 1
}));
var $n_sci_HashMap$;
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$();
  }
  return $n_sci_HashMap$;
}
/** @constructor */
function $c_sci_Map$() {
}
$p = $c_sci_Map$.prototype = new $h_O();
$p.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
}
$h_sci_Map$.prototype = $p;
$p.te = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.c()) {
      return $m_sci_Map$EmptyMap$();
    }
  }
  if ((it instanceof $c_sci_HashMap)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map1)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map2)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map3)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map4)) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  return new $c_sci_MapBuilderImpl().ph(it).qH();
});
$p.bP = (function() {
  return $m_sci_Map$EmptyMap$();
});
$p.a5 = (function(it) {
  return this.te(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  ha: 1,
  a: 1,
  aF: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.s();
  if ((x1 === (-1))) {
    return (void 0);
  }
  var that = ((x1 + delta) | 0);
  $thiz.b5(((that < 0) ? 0 : that));
}
/** @constructor */
function $c_scm_HashMap$() {
}
$p = $c_scm_HashMap$.prototype = new $h_O();
$p.constructor = $c_scm_HashMap$;
/** @constructor */
function $h_scm_HashMap$() {
}
$h_scm_HashMap$.prototype = $p;
$p.tf = (function(it) {
  var k = it.s();
  return $ct_scm_HashMap__I__D__(new $c_scm_HashMap(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).pj(it);
});
$p.bP = (function() {
  return $ct_scm_HashMap__(new $c_scm_HashMap());
});
$p.a5 = (function(it) {
  return this.tf(it);
});
var $d_scm_HashMap$ = new $TypeData().i($c_scm_HashMap$, "scala.collection.mutable.HashMap$", ({
  i0: 1,
  a: 1,
  aF: 1
}));
var $n_scm_HashMap$;
function $m_scm_HashMap$() {
  if ((!$n_scm_HashMap$)) {
    $n_scm_HashMap$ = new $c_scm_HashMap$();
  }
  return $n_scm_HashMap$;
}
/** @constructor */
function $c_scm_HashSet$() {
}
$p = $c_scm_HashSet$.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$;
/** @constructor */
function $h_scm_HashSet$() {
}
$h_scm_HashSet$.prototype = $p;
$p.tg = (function(it) {
  var k = it.s();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).pk(it);
});
$p.ae = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.a5 = (function(source) {
  return this.tg(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  i6: 1,
  a: 1,
  F: 1
}));
var $n_scm_HashSet$;
function $m_scm_HashSet$() {
  if ((!$n_scm_HashSet$)) {
    $n_scm_HashSet$ = new $c_scm_HashSet$();
  }
  return $n_scm_HashSet$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iP)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.oZ = null;
  this.oZ = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.I = (function() {
  return (0, this.oZ)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  je: 1,
  cE: 1,
  aY: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.p0 = null;
  this.p0 = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.e = (function(x0) {
  return (0, this.p0)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  jf: 1,
  cF: 1,
  i: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.p1 = null;
  this.p1 = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.bN = (function(x0, x1) {
  return (0, this.p1)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  jg: 1,
  cG: 1,
  aZ: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.p2 = null;
  this.p2 = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.h3 = (function(x0, x1, x2) {
  return (0, this.p2)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  jh: 1,
  cH: 1,
  bF: 1
}));
/** @constructor */
function $c_sr_AbstractPartialFunction() {
}
$p = $c_sr_AbstractPartialFunction.prototype = new $h_O();
$p.constructor = $c_sr_AbstractPartialFunction;
/** @constructor */
function $h_sr_AbstractPartialFunction() {
}
$h_sr_AbstractPartialFunction.prototype = $p;
$p.u = (function() {
  return "<function1>";
});
$p.e = (function(x) {
  return this.bV(x, $m_s_PartialFunction$().hM);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  jo: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.q5 = (function(f) {
  return ((arg1$2) => f.e(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  jw: 1,
  jx: 1,
  jy: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
/** @constructor */
function $c_sjsr_AnonFunction0() {
}
$p = $c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
}
$h_sjsr_AnonFunction0.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction1() {
}
$p = $c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
}
$h_sjsr_AnonFunction1.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction2() {
}
$p = $c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
}
$h_sjsr_AnonFunction2.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction3() {
}
$p = $c_sjsr_AnonFunction3.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sjsr_AnonFunction3;
/** @constructor */
function $h_sjsr_AnonFunction3() {
}
$h_sjsr_AnonFunction3.prototype = $p;
/** @constructor */
function $c_sjsr_AnonFunction4() {
}
$p = $c_sjsr_AnonFunction4.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sjsr_AnonFunction4;
/** @constructor */
function $h_sjsr_AnonFunction4() {
}
$h_sjsr_AnonFunction4.prototype = $p;
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.jT)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.le = null;
  this.lc = false;
  this.iI = null;
  this.ld = null;
  this.le = onNextParam$2;
  this.lc = handleObserverErrors$3;
  this.iI = onErrorParam$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ld = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.eD = (function() {
  return this.ld;
});
$p.ex = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.hi = (function(nextValue) {
  try {
    this.le.e(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.lc) {
      this.hh(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().d2(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.hh = (function(error) {
  try {
    if (this.iI.cf(error)) {
      this.iI.e(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().d2(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().d2(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.g8 = (function(nextValue) {
  nextValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((error) => {
    this.hh(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.hi(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  cS: 1,
  aJ: 1,
  ab: 1,
  aS: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.iJ = null;
  this.lf = false;
  this.lg = null;
  this.iJ = onTryParam$2;
  this.lf = handleObserverErrors$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.lg = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.eD = (function() {
  return this.lg;
});
$p.ex = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.hi = (function(nextValue) {
  this.g8(new $c_s_util_Success(nextValue));
});
$p.hh = (function(error) {
  this.g8(new $c_s_util_Failure(error));
});
$p.g8 = (function(nextValue) {
  try {
    if (this.iJ.cf(nextValue)) {
      this.iJ.e(nextValue);
    } else {
      nextValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().d2(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.lf && nextValue.qd())) {
      this.hh(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().d2(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().d2(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  cT: 1,
  aJ: 1,
  ab: 1,
  aS: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.me = null;
  this.mf = false;
  this.mg = null;
  this.mh = false;
  this.mi = null;
  this.mj = false;
  this.mk = null;
  this.ml = false;
  this.mm = null;
  this.mn = false;
  this.mo = null;
  this.mp = false;
  this.mq = null;
  this.mr = false;
  this.rh = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_Laminar$svg$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$svg$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$svg$() {
}
$h_Lcom_raquo_laminar_api_Laminar$svg$.prototype = $p;
$p.su = (function() {
  if ((!this.mf)) {
    this.me = new $c_Lcom_raquo_laminar_tags_SvgTag("circle", false);
    this.mf = true;
  }
  return this.me;
});
$p.kF = (function() {
  if ((!this.mh)) {
    this.mg = new $c_Lcom_raquo_laminar_tags_SvgTag("g", false);
    this.mh = true;
  }
  return this.mg;
});
$p.ql = (function() {
  if ((!this.mj)) {
    this.mi = new $c_Lcom_raquo_laminar_tags_SvgTag("line", false);
    this.mj = true;
  }
  return this.mi;
});
$p.uk = (function() {
  if ((!this.ml)) {
    this.mk = new $c_Lcom_raquo_laminar_tags_SvgTag("rect", false);
    this.ml = true;
  }
  return this.mk;
});
$p.l5 = (function() {
  if ((!this.mn)) {
    this.mm = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.mn = true;
  }
  return this.mm;
});
$p.hq = (function() {
  if ((!this.mp)) {
    this.mo = new $c_Lcom_raquo_laminar_tags_SvgTag("text", false);
    this.mp = true;
  }
  return this.mo;
});
$p.r3 = (function() {
  if ((!this.mr)) {
    this.mq = new $c_Lcom_raquo_laminar_tags_SvgTag("title", false);
    this.mr = true;
  }
  return this.mq;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  dv: 1,
  dZ: 1,
  dE: 1,
  dG: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.n = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.n = new $c_Lcom_raquo_laminar_api_package$$anon$1();
}
$p = $c_Lcom_raquo_laminar_api_package$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$() {
}
$h_Lcom_raquo_laminar_api_package$.prototype = $p;
var $d_Lcom_raquo_laminar_api_package$ = new $TypeData().i($c_Lcom_raquo_laminar_api_package$, "com.raquo.laminar.api.package$", ({
  dz: 1,
  bn: 1,
  bq: 1,
  bm: 1
}));
var $n_Lcom_raquo_laminar_api_package$;
function $m_Lcom_raquo_laminar_api_package$() {
  if ((!$n_Lcom_raquo_laminar_api_package$)) {
    $n_Lcom_raquo_laminar_api_package$ = new $c_Lcom_raquo_laminar_api_package$();
  }
  return $n_Lcom_raquo_laminar_api_package$;
}
/** @constructor */
function $c_Lcom_raquo_laminar_inserters_DynamicInserter(initialContext, preferStrictMode, insertFn, hooks) {
  this.nb = null;
  this.nd = false;
  this.nc = null;
  this.j4 = null;
  this.nb = initialContext;
  this.nd = preferStrictMode;
  this.nc = insertFn;
  this.j4 = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.so = (function(element) {
  var this$1 = this.nb;
  var insertContext = (this$1.c() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().ux(element, this.nd, this.j4) : this$1.A());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((mountContext) => this.nc.h3(insertContext, mountContext.jb, this.j4)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iG(element.cd(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.cR = (function(element) {
  this.so(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  e2: 1,
  a4: 1,
  e6: 1,
  e3: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.eR = name;
  $thiz.eS = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.eR = null;
  this.eS = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.r = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().uM(element, styleProp, value$2);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.jf = null;
  this.jg = null;
  this.jf = $m_s_None$();
  this.jg = $m_Lcom_raquo_laminar_DomApi$().sH(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.fT = (function() {
  return this.jf;
});
$p.eF = (function(maybeNextParent) {
  this.jf = maybeNextParent;
});
$p.eJ = (function(maybeNextParent) {
});
$p.cR = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fR(parentNode, this, (void 0));
});
$p.L = (function() {
  return this.jg;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  ez: 1,
  az: 1,
  a4: 1,
  aK: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.jk = null;
  this.jl = null;
  this.jk = $m_s_None$();
  this.jl = $m_Lcom_raquo_laminar_DomApi$().sJ(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.fT = (function() {
  return this.jk;
});
$p.eF = (function(maybeNextParent) {
  this.jk = maybeNextParent;
});
$p.eJ = (function(maybeNextParent) {
});
$p.cR = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fR(parentNode, this, (void 0));
});
$p.v7 = (function() {
  return this.jl.data;
});
$p.L = (function() {
  return this.jl;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  eF: 1,
  az: 1,
  a4: 1,
  aK: 1
}));
function $isArrayOf_Ljava_io_IOException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eN)));
}
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  eR: 1,
  eZ: 1,
  q: 1,
  a: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Boolean__compareTo__O__I($thiz, o) {
  return (($thiz === o) ? 0 : ($thiz ? 1 : (-1)));
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  eT: 1,
  a: 1,
  ac: 1,
  a5: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $f_jl_Character__compareTo__O__I($thiz, o) {
  return (($thiz - o.c) | 0);
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bu)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  bu: 1,
  a: 1,
  ac: 1,
  a5: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f2)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f3)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.t = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  $thiz.t = str;
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.t = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.po = (function(str) {
  var str$1 = $m_jl_String$().u5(str, 0, str.a.length);
  this.t = (("" + this.t) + str$1);
  return this;
});
$p.u = (function() {
  return this.t;
});
$p.i = (function() {
  return this.t.length;
});
$p.pv = (function(index) {
  return this.t.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  fc: 1,
  aX: 1,
  eO: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fe)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fh)));
}
function $isArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fj)));
}
function $isArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fk)));
}
function $p_ju_Formatter__sendToDest__T__V($thiz, s) {
  if (($thiz.eT === null)) {
    $thiz.ea = (("" + $thiz.ea) + s);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.eT === null)) {
    $thiz.ea = ((("" + $thiz.ea) + s1) + s2);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.eT === null)) {
    $thiz.ea = (($thiz.ea + (("" + s1) + s2)) + s3);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2, s3]);
  }
}
function $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, ss) {
  try {
    var len = (ss.length | 0);
    var i = 0;
    while ((i !== len)) {
      var t = ss[i];
      var this$2 = $thiz.eT;
      this$2.t = (("" + this$2.t) + t);
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if ((!false)) {
      throw e;
    }
  }
}
function $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter($thiz, localeInfo, format, args) {
  if ($thiz.jw) {
    throw new $c_ju_FormatterClosedException();
  }
  var lastImplicitArgIndex = 0;
  var lastArgIndex = 0;
  var fmtLength = format.length;
  var fmtIndex = 0;
  while ((fmtIndex !== fmtLength)) {
    var fromIndex = fmtIndex;
    var nextPercentIndex = (format.indexOf("%", fromIndex) | 0);
    if ((nextPercentIndex < 0)) {
      var beginIndex = fmtIndex;
      $p_ju_Formatter__sendToDest__T__V($thiz, format.substring(beginIndex));
      return $thiz;
    }
    var beginIndex$1 = fmtIndex;
    $p_ju_Formatter__sendToDest__T__V($thiz, format.substring(beginIndex$1, nextPercentIndex));
    var formatSpecifierIndex = ((1 + nextPercentIndex) | 0);
    var re = $m_ju_Formatter$().nL;
    re.lastIndex = formatSpecifierIndex;
    var execResult = re.exec(format);
    if (((execResult === null) || ((execResult.index | 0) !== formatSpecifierIndex))) {
      $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, ((formatSpecifierIndex === fmtLength) ? 37 : format.charCodeAt(formatSpecifierIndex)));
    }
    fmtIndex = (re.lastIndex | 0);
    var index = ((fmtIndex - 1) | 0);
    var conversion$2 = format.charCodeAt(index);
    var flags = $p_ju_Formatter__parseFlags__T__C__I($thiz, execResult[2], conversion$2);
    var width = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[3]);
    var precision = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[4]);
    if ((width === (-2))) {
      $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, (-2147483648));
    }
    if ((precision === (-2))) {
      $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, (-2147483648));
    }
    if ((conversion$2 === 110)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((width !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width);
      }
      if ((flags !== 0)) {
        $thiz.kO(flags);
      }
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n");
    } else if ((conversion$2 === 37)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.kO(flags);
      }
      if ((((1 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((-2) & flags) !== 0)) {
        $thiz.is(37, flags, (-2));
      }
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%");
    } else {
      var conversionLower = (((256 & flags) !== 0) ? (65535 & ((32 + conversion$2) | 0)) : conversion$2);
      var illegalFlags = $m_ju_Formatter$().nK.a[((conversionLower - 97) | 0)];
      if (((illegalFlags === (-1)) || (((256 & flags) & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion$2);
      }
      if ((((17 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.kO(flags);
      }
      if (((precision !== (-1)) && ((512 & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if (((flags & illegalFlags) !== 0)) {
        $thiz.is(conversionLower, flags, illegalFlags);
      }
      if (((128 & flags) !== 0)) {
        var argIndex = lastArgIndex;
      } else {
        var i = $p_ju_Formatter__parsePositiveInt__O__I($thiz, execResult[1]);
        if ((i === (-1))) {
          lastImplicitArgIndex = ((1 + lastImplicitArgIndex) | 0);
          var argIndex = lastImplicitArgIndex;
        } else {
          if ((i <= 0)) {
            $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, i);
          }
          var argIndex = i;
        }
      }
      if (((argIndex <= 0) || (argIndex > args.a.length))) {
        $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      lastArgIndex = argIndex;
      var arg = args.a[((argIndex - 1) | 0)];
      if ((((arg === null) && (conversionLower !== 98)) && (conversionLower !== 115))) {
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, "null");
      } else {
        $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision);
      }
    }
  }
  return $thiz;
}
function $p_ju_Formatter__parseFlags__T__C__I($thiz, flags, conversion) {
  var bits = (((((conversion - 65) | 0) >>> 0) <= 25) ? 256 : 0);
  var len = flags.length;
  var i = 0;
  while ((i !== len)) {
    var index = i;
    var f = flags.charCodeAt(index);
    switch (f) {
      case 45: {
        var bit = 1;
        break;
      }
      case 35: {
        var bit = 2;
        break;
      }
      case 43: {
        var bit = 4;
        break;
      }
      case 32: {
        var bit = 8;
        break;
      }
      case 48: {
        var bit = 16;
        break;
      }
      case 44: {
        var bit = 32;
        break;
      }
      case 40: {
        var bit = 64;
        break;
      }
      case 60: {
        var bit = 128;
        break;
      }
      default: {
        var bit;
        throw new $c_jl_AssertionError($bC(f));
      }
    }
    if (((bits & bit) !== 0)) {
      $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, f);
    }
    bits = (bits | bit);
    i = ((1 + i) | 0);
  }
  return bits;
}
function $p_ju_Formatter__parsePositiveInt__O__I($thiz, capture) {
  if ((capture !== (void 0))) {
    var x = (+parseInt(capture, 10));
    return ((x <= 2.147483647E9) ? $doubleToInt(x) : (-2));
  } else {
    return (-1);
  }
}
function $p_ju_Formatter__formatArg__ju_Formatter$LocaleInfo__O__C__I__I__I__V($thiz, localeInfo, arg, conversionLower, flags, width, precision) {
  switch (conversionLower) {
    case 98: {
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, precision, (((arg === false) || (arg === null)) ? "false" : "true"));
      break;
    }
    case 104: {
      var $x_1 = $m_ju_Formatter$RootLocaleInfo$();
      var i = $dp_hashCode__I(arg);
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, $x_1, flags, width, precision, (i >>> 0.0).toString(16));
      break;
    }
    case 115: {
      if ($is_ju_Formattable(arg)) {
        var formattableFlags = (((((1 & flags) !== 0) ? 1 : 0) | (((2 & flags) !== 0) ? 4 : 0)) | (((256 & flags) !== 0) ? 2 : 0));
        arg.vo($thiz, formattableFlags, width, precision);
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.is(conversionLower, flags, 2);
        }
        $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, ("" + arg));
      }
      break;
    }
    case 99: {
      if ((arg instanceof $Char)) {
        var $x_2 = ("" + $cToS($uC(arg)));
      } else {
        if ((!$isInt(arg))) {
          $thiz.hb(conversionLower, arg);
        }
        var x3 = (arg | 0);
        if (((x3 >>> 0) > 1114111)) {
          $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, x3);
        }
        var $x_2 = $m_jl_Character$().l8(x3);
      }
      $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, (-1), $x_2);
      break;
    }
    case 100: {
      if ($isInt(arg)) {
        var $x_3 = ("" + (arg | 0));
      } else if ((arg instanceof $Long)) {
        var $x_4 = $uJ(arg);
        var x3$2_$_lo = $x_4.l;
        var x3$2_$_hi = $x_4.h;
        var $x_3 = $m_RTLong$().l7(x3$2_$_lo, x3$2_$_hi);
      } else {
        if ((!false)) {
          $thiz.hb(conversionLower, arg);
        }
        var $x_3 = arg.u();
      }
      $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, $x_3, "");
      break;
    }
    case 111:
    case 120: {
      var isOctal = (conversionLower === 111);
      var prefix = (((2 & flags) === 0) ? "" : (isOctal ? "0" : (((256 & flags) !== 0) ? "0X" : "0x")));
      if (false) {
        var radix = (isOctal ? 8 : 16);
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, arg.l8(radix), prefix);
      } else {
        if ($isInt(arg)) {
          var x2$5 = (arg | 0);
          var str$6 = (isOctal ? (x2$5 >>> 0.0).toString(8) : (x2$5 >>> 0.0).toString(16));
        } else {
          if ((!(arg instanceof $Long))) {
            $thiz.hb(conversionLower, arg);
          }
          var $x_5 = $uJ(arg);
          var x3$3_$_lo = $x_5.l;
          var x3$3_$_hi = $x_5.h;
          var str$6 = (isOctal ? $m_jl_Long$().tK(x3$3_$_lo, x3$3_$_hi) : $m_jl_Long$().qg(x3$3_$_lo, x3$3_$_hi));
        }
        if (((76 & flags) !== 0)) {
          $thiz.is(conversionLower, flags, 76);
        }
        $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, prefix, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str$6));
      }
      break;
    }
    case 101:
    case 102:
    case 103: {
      if (((typeof arg) === "number")) {
        var x2$6 = (+arg);
        if (((x2$6 !== x2$6) || ((x2$6 === Infinity) || (x2$6 === (-Infinity))))) {
          $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x2$6);
        } else {
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().tM(x2$6), flags, precision, conversionLower, localeInfo, width);
        }
      } else if (false) {
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().tL(arg), flags, precision, conversionLower, localeInfo, width);
      } else {
        $thiz.hb(conversionLower, arg);
      }
      break;
    }
    case 97: {
      if (((typeof arg) === "number")) {
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, (+arg));
      } else {
        $thiz.hb(conversionLower, arg);
      }
      break;
    }
    default: {
      throw new $c_jl_AssertionError((("Unknown conversion '" + $cToS(conversionLower)) + "' was not rejected earlier"));
    }
  }
}
function $p_ju_Formatter__flagsToString__I__T($thiz, flags) {
  return ((((((((((1 & flags) !== 0) ? "-" : "") + (((2 & flags) !== 0) ? "#" : "")) + (((4 & flags) !== 0) ? "+" : "")) + (((8 & flags) !== 0) ? " " : "")) + (((16 & flags) !== 0) ? "0" : "")) + (((32 & flags) !== 0) ? "," : "")) + (((64 & flags) !== 0) ? "(" : "")) + (((128 & flags) !== 0) ? "<" : ""));
}
function $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, digitsAfterDot, forceDecimalSep) {
  var rounded = x.qJ(((1 + digitsAfterDot) | 0));
  var signStr = (rounded.dz ? "-" : "");
  var intStr = rounded.dA;
  var fractionalDigitCount = ((intStr.length - 1) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  var integerPart = intStr.substring(0, 1);
  var fractionalPart = (("" + intStr.substring(1)) + $m_ju_Formatter$().kN(missingZeros));
  var significandStr = (((fractionalPart === "") && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + fractionalPart));
  var exponent = ((fractionalDigitCount - rounded.d5) | 0);
  var exponentSign = ((exponent < 0) ? "-" : "+");
  var sign = (exponent >> 31);
  var this$2 = (((exponent ^ sign) - sign) | 0);
  var exponentAbsStr0 = ("" + this$2);
  var exponentAbsStr = ((exponentAbsStr0.length === 1) ? ("0" + exponentAbsStr0) : exponentAbsStr0);
  return ((((signStr + significandStr) + "e") + exponentSign) + exponentAbsStr);
}
function $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, scale, forceDecimalSep) {
  var rounded = x.uO(scale);
  var signStr = (rounded.dz ? "-" : "");
  var intStr = rounded.dA;
  var intStrLen = intStr.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().kN(((minDigits - intStrLen) | 0))) + intStr));
  var dotPos = ((expandedIntStr.length - scale) | 0);
  var integerPart = (signStr + expandedIntStr.substring(0, dotPos));
  return (((scale === 0) && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + expandedIntStr.substring(dotPos)));
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = x.qJ(p);
  var orderOfMagnitude = ((((rounded.dA.length - 1) | 0) - rounded.d5) | 0);
  if (((orderOfMagnitude >= (-4)) && (orderOfMagnitude < p))) {
    var b = ((((p - orderOfMagnitude) | 0) - 1) | 0);
    return $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, ((b < 0) ? 0 : b), forceDecimalSep);
  } else {
    return $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, rounded, ((p - 1) | 0), forceDecimalSep);
  }
}
function $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, arg) {
  if (((arg !== arg) || ((arg === Infinity) || (arg === (-Infinity))))) {
    $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, arg);
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, arg, true);
    var lo = (fpBitsDataView.getInt32(0, true) | 0);
    var hi = (fpBitsDataView.getInt32(4, true) | 0);
    var negative = (hi < 0);
    var hi$1 = (1048575 & hi);
    var biasedExponent = (2047 & ((hi >>> 20) | 0));
    var actualPrecision = ((precision === 0) ? 1 : ((precision > 12) ? (-1) : precision));
    var signStr = (negative ? "-" : (((4 & flags) !== 0) ? "+" : (((8 & flags) !== 0) ? " " : "")));
    if ((biasedExponent === 0)) {
      if (((lo | hi$1) === 0)) {
        var x1___1 = "0";
        var x1___2 = $bL(0, 0);
        var x1___3 = 0;
      } else if ((actualPrecision === (-1))) {
        var x1___1 = "0";
        var x1___2 = $bL(lo, hi$1);
        var x1___3 = (-1022);
      } else {
        var leadingZeros = ((hi$1 !== 0) ? Math.clz32(hi$1) : ((32 + Math.clz32(lo)) | 0));
        var shift = ((leadingZeros - 11) | 0);
        var lo$2 = (((32 & shift) === 0) ? (lo << shift) : 0);
        var hi$2 = (((32 & shift) === 0) ? (((((lo >>> 1) | 0) >>> (~shift)) | 0) | (hi$1 << shift)) : (lo << shift));
        var hi$3 = (1048575 & hi$2);
        var normalizedExponent = (((-1022) - shift) | 0);
        var x1___1 = "1";
        var x1___2 = $bL(lo$2, hi$3);
        var x1___3 = normalizedExponent;
      }
    } else {
      var _3 = ((biasedExponent - 1023) | 0);
      var x1___1 = "1";
      var x1___2 = $bL(lo, hi$1);
      var x1___3 = _3;
    }
    var implicitBitStr = x1___1;
    var $x_1 = $uJ(x1___2);
    var mantissa_$_lo = $x_1.l;
    var mantissa_$_hi = $x_1.h;
    var exponent = (x1___3 | 0);
    if ((actualPrecision === (-1))) {
      var roundedMantissa_$_lo = mantissa_$_lo;
      var roundedMantissa_$_hi = mantissa_$_hi;
    } else {
      var n = ((52 - (actualPrecision << 2)) | 0);
      var lo$3 = (((32 & n) === 0) ? (1 << n) : 0);
      var hi$4 = (((32 & n) === 0) ? 0 : (1 << n));
      var lo$4 = ((lo$3 - 1) | 0);
      var hi$5 = ((((hi$4 - 1) | 0) + (((lo$3 | (~lo$4)) >>> 31) | 0)) | 0);
      var lo$5 = (((lo$3 >>> 1) | 0) | (hi$4 << 31));
      var hi$6 = (hi$4 >> 1);
      var lo$6 = (~lo$4);
      var hi$7 = (~hi$5);
      var lo$7 = (mantissa_$_lo & lo$6);
      var hi$8 = (mantissa_$_hi & hi$7);
      var lo$8 = (mantissa_$_lo & lo$4);
      var hi$9 = (mantissa_$_hi & hi$5);
      if (((hi$9 === hi$6) ? ((lo$8 >>> 0) < (lo$5 >>> 0)) : (hi$9 < hi$6))) {
        var roundedMantissa_$_lo = lo$7;
        var roundedMantissa_$_hi = hi$8;
      } else if (((hi$9 === hi$6) ? ((lo$8 >>> 0) > (lo$5 >>> 0)) : (hi$9 > hi$6))) {
        var lo$9 = ((lo$7 + lo$3) | 0);
        var hi$10 = ((((hi$8 + hi$4) | 0) + ((((lo$7 & lo$3) | ((lo$7 | lo$3) & (~lo$9))) >>> 31) | 0)) | 0);
        var roundedMantissa_$_lo = lo$9;
        var roundedMantissa_$_hi = hi$10;
      } else if ((((lo$7 & lo$3) | (hi$8 & hi$4)) === 0)) {
        var roundedMantissa_$_lo = lo$7;
        var roundedMantissa_$_hi = hi$8;
      } else {
        var lo$11 = ((lo$7 + lo$3) | 0);
        var hi$12 = ((((hi$8 + hi$4) | 0) + ((((lo$7 & lo$3) | ((lo$7 | lo$3) & (~lo$11))) >>> 31) | 0)) | 0);
        var roundedMantissa_$_lo = lo$11;
        var roundedMantissa_$_hi = hi$12;
      }
    }
    var baseStr = $m_jl_Long$().qg(roundedMantissa_$_lo, roundedMantissa_$_hi);
    var beginIndex = baseStr.length;
    var padded = (("" + "0000000000000".substring(beginIndex)) + baseStr);
    $m_ju_Formatter$();
    if ((!(padded.length === 13))) {
      throw new $c_jl_AssertionError("padded mantissa does not have the right number of bits");
    }
    var minLength = ((actualPrecision < 1) ? 1 : actualPrecision);
    var len = padded.length;
    while (((len > minLength) && (padded.charCodeAt(((len - 1) | 0)) === 48))) {
      len = ((len - 1) | 0);
    }
    var endIndex = len;
    var mantissaStr = padded.substring(0, endIndex);
    var exponentStr = ("" + exponent);
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, (signStr + (((256 & flags) !== 0) ? "0X" : "0x")), $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, ((((implicitBitStr + ".") + mantissaStr) + "p") + exponentStr)));
  }
}
function $p_ju_Formatter__formatNonNumericString__ju_Formatter$LocaleInfo__I__I__I__T__V($thiz, localeInfo, flags, width, precision, str) {
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, (((precision < 0) || (precision >= str.length)) ? str : str.substring(0, precision))));
}
function $p_ju_Formatter__formatNaNOrInfinite__I__I__D__V($thiz, flags, width, x) {
  $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, ((x !== x) ? "NaN" : ((x > 0.0) ? (((4 & flags) !== 0) ? "+Infinity" : (((8 & flags) !== 0) ? " Infinity" : "Infinity")) : (((64 & flags) !== 0) ? "(Infinity)" : "-Infinity")))));
}
function $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, str, basePrefix) {
  if (((str.length >= width) && ((110 & flags) === 0))) {
    $p_ju_Formatter__sendToDest__T__V($thiz, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str));
  } else if (((126 & flags) === 0)) {
    $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str));
  } else {
    if ((str.charCodeAt(0) !== 45)) {
      if (((4 & flags) !== 0)) {
        var x1___1 = "+";
        var x1___2 = str;
      } else if (((8 & flags) !== 0)) {
        var x1___1 = " ";
        var x1___2 = str;
      } else {
        var x1___1 = "";
        var x1___2 = str;
      }
    } else if (((64 & flags) !== 0)) {
      var x1___1 = "(";
      var x1___2 = (str.substring(1) + ")");
    } else {
      var x1___1 = "-";
      var x1___2 = str.substring(1);
    }
    var numberPrefix = x1___1;
    var rest0 = x1___2;
    $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, (("" + numberPrefix) + basePrefix), $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, (((32 & flags) !== 0) ? $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, rest0) : rest0)));
  }
}
function $p_ju_Formatter__insertGroupingCommas__ju_Formatter$LocaleInfo__T__T($thiz, localeInfo, s) {
  var len = s.length;
  var index = 0;
  while (((index !== len) && ((((s.charCodeAt(index) - 48) | 0) >>> 0) <= 9))) {
    index = ((1 + index) | 0);
  }
  index = ((index - 3) | 0);
  if ((index <= 0)) {
    return s;
  } else {
    var beginIndex = index;
    var result = s.substring(beginIndex);
    while ((index > 3)) {
      var next = ((index - 3) | 0);
      var endIndex = index;
      result = ((s.substring(next, endIndex) + ",") + result);
      index = next;
    }
    var endIndex$1 = index;
    return ((s.substring(0, endIndex$1) + ",") + result);
  }
}
function $p_ju_Formatter__applyNumberUpperCase__I__T__T($thiz, flags, str) {
  return (((256 & flags) !== 0) ? str.toUpperCase() : str);
}
function $p_ju_Formatter__applyUpperCase__ju_Formatter$LocaleInfo__I__T__T($thiz, localeInfo, flags, str) {
  return (((256 & flags) !== 0) ? str.toUpperCase() : str);
}
function $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, str) {
  var len = str.length;
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__V($thiz, str);
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)));
  } else {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), str);
  }
}
function $p_ju_Formatter__padAndSendToDest__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo, flags, width, prefix, str) {
  var len = ((prefix.length + str.length) | 0);
  if ((len >= width)) {
    $p_ju_Formatter__sendToDest__T__T__V($thiz, prefix, str);
  } else if (((16 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, $p_ju_Formatter__strRepeat__T__I__T($thiz, "0", ((width - len) | 0)), str);
  } else if (((1 & flags) !== 0)) {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, prefix, str, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)));
  } else {
    $p_ju_Formatter__sendToDest__T__T__T__V($thiz, $p_ju_Formatter__strRepeat__T__I__T($thiz, " ", ((width - len) | 0)), prefix, str);
  }
}
function $p_ju_Formatter__strRepeat__T__I__T($thiz, s, times) {
  var result = "";
  var i = 0;
  while ((i !== times)) {
    result = (("" + result) + s);
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_ju_Formatter__throwDuplicateFormatFlagsException__C__E($thiz, flag) {
  throw new $c_ju_DuplicateFormatFlagsException(("" + $cToS(flag)));
}
function $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion) {
  throw new $c_ju_UnknownFormatConversionException(("" + $cToS(conversion)));
}
function $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision) {
  throw new $c_ju_IllegalFormatPrecisionException(precision);
}
function $p_ju_Formatter__throwIllegalFormatWidthException__I__E($thiz, width) {
  throw new $c_ju_IllegalFormatWidthException(width);
}
function $p_ju_Formatter__throwIllegalFormatArgumentIndexException__I__E($thiz, index) {
  throw new $c_ju_IllegalFormatArgumentIndexException(((index === 0) ? "Illegal format argument index = 0" : "Format argument index: (not representable as int)"));
}
function $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatWidthException(fullFormatSpecifier);
}
function $p_ju_Formatter__throwMissingFormatArgumentException__T__E($thiz, fullFormatSpecifier) {
  throw new $c_ju_MissingFormatArgumentException(fullFormatSpecifier);
}
function $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, arg) {
  throw new $c_ju_IllegalFormatCodePointException(arg);
}
function $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult$1) {
  return ("%" + execResult$1[0]);
}
function $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, x, flags$1, precision$1, conversionLower$1, localeInfo$1, width$1) {
  var forceDecimalSep = ((2 & flags$1) !== 0);
  var actualPrecision = ((precision$1 >= 0) ? precision$1 : 6);
  switch (conversionLower$1) {
    case 101: {
      var $x_1 = $p_ju_Formatter__computerizedScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break;
    }
    case 102: {
      var $x_1 = $p_ju_Formatter__decimalNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
      break;
    }
    default: {
      var $x_1 = $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, actualPrecision, forceDecimalSep);
    }
  }
  $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, localeInfo$1, flags$1, width$1, $x_1, "");
}
function $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, dest, formatterLocaleInfo) {
  $thiz.eT = dest;
  $thiz.nJ = formatterLocaleInfo;
  $thiz.ea = "";
  $thiz.jw = false;
  return $thiz;
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz;
}
/** @constructor */
function $c_ju_Formatter() {
  this.eT = null;
  this.nJ = null;
  this.ea = null;
  this.jw = false;
}
$p = $c_ju_Formatter.prototype = new $h_O();
$p.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
}
$h_ju_Formatter.prototype = $p;
$p.ta = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.nJ, format, args);
});
$p.u = (function() {
  if (this.jw) {
    throw new $c_ju_FormatterClosedException();
  }
  return ((this.eT === null) ? this.ea : this.eT.t);
});
$p.kO = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags));
});
$p.is = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower);
});
$p.hb = (function(conversionLower, arg) {
  throw new $c_ju_IllegalFormatConversionException(conversionLower, $objectGetClass(arg));
});
var $d_ju_Formatter = new $TypeData().i($c_ju_Formatter, "java.util.Formatter", ({
  fq: 1,
  eL: 1,
  eS: 1,
  eM: 1
}));
/** @constructor */
function $c_ju_internal_GenericArrayOps$ByteArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$ByteArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$ByteArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$ByteArrayOps$() {
}
$h_ju_internal_GenericArrayOps$ByteArrayOps$.prototype = $p;
$p.Z = (function(o1, o2) {
  return (((o1 | 0) - (o2 | 0)) | 0);
});
$p.d3 = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.bD = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ByteArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ByteArrayOps$, "java.util.internal.GenericArrayOps$ByteArrayOps$", ({
  fH: 1,
  ap: 1,
  aB: 1,
  G: 1
}));
var $n_ju_internal_GenericArrayOps$ByteArrayOps$;
function $m_ju_internal_GenericArrayOps$ByteArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$ByteArrayOps$)) {
    $n_ju_internal_GenericArrayOps$ByteArrayOps$ = new $c_ju_internal_GenericArrayOps$ByteArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$ByteArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$CharArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$CharArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$CharArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$CharArrayOps$() {
}
$h_ju_internal_GenericArrayOps$CharArrayOps$.prototype = $p;
$p.Z = (function(o1, o2) {
  return (($uC(o1) - $uC(o2)) | 0);
});
$p.d3 = (function(a, i, v) {
  var v$1 = $uC(v);
  a.a[i] = v$1;
});
$p.bD = (function(a, i) {
  return $bC(a.a[i]);
});
var $d_ju_internal_GenericArrayOps$CharArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$CharArrayOps$, "java.util.internal.GenericArrayOps$CharArrayOps$", ({
  fI: 1,
  ap: 1,
  aB: 1,
  G: 1
}));
var $n_ju_internal_GenericArrayOps$CharArrayOps$;
function $m_ju_internal_GenericArrayOps$CharArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$CharArrayOps$)) {
    $n_ju_internal_GenericArrayOps$CharArrayOps$ = new $c_ju_internal_GenericArrayOps$CharArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$CharArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$IntArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$IntArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$IntArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$IntArrayOps$() {
}
$h_ju_internal_GenericArrayOps$IntArrayOps$.prototype = $p;
$p.Z = (function(o1, o2) {
  var x = (o1 | 0);
  var y = (o2 | 0);
  return ((x === y) ? 0 : ((x < y) ? (-1) : 1));
});
$p.d3 = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.bD = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$IntArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$IntArrayOps$, "java.util.internal.GenericArrayOps$IntArrayOps$", ({
  fJ: 1,
  ap: 1,
  aB: 1,
  G: 1
}));
var $n_ju_internal_GenericArrayOps$IntArrayOps$;
function $m_ju_internal_GenericArrayOps$IntArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$IntArrayOps$)) {
    $n_ju_internal_GenericArrayOps$IntArrayOps$ = new $c_ju_internal_GenericArrayOps$IntArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$IntArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$LongArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$LongArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$LongArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$LongArrayOps$() {
}
$h_ju_internal_GenericArrayOps$LongArrayOps$.prototype = $p;
$p.Z = (function(o1, o2) {
  var $x_1 = $uJ(o1);
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  var $x_2 = $uJ(o2);
  var y_$_lo = $x_2.l;
  var y_$_hi = $x_2.h;
  return ((x_$_hi === y_$_hi) ? ((x_$_lo === y_$_lo) ? 0 : (((x_$_lo >>> 0) < (y_$_lo >>> 0)) ? (-1) : 1)) : ((x_$_hi < y_$_hi) ? (-1) : 1));
});
$p.d3 = (function(a, i, v) {
  var $x_1 = $uJ(v);
  var v$1_$_lo = $x_1.l;
  var v$1_$_hi = $x_1.h;
  var $x_2 = a.a;
  var $x_3 = (i << 1);
  $x_2[$x_3] = v$1_$_lo;
  $x_2[(($x_3 + 1) | 0)] = v$1_$_hi;
});
$p.bD = (function(a, i) {
  var $x_1 = a.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
var $d_ju_internal_GenericArrayOps$LongArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$LongArrayOps$, "java.util.internal.GenericArrayOps$LongArrayOps$", ({
  fK: 1,
  ap: 1,
  aB: 1,
  G: 1
}));
var $n_ju_internal_GenericArrayOps$LongArrayOps$;
function $m_ju_internal_GenericArrayOps$LongArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$LongArrayOps$)) {
    $n_ju_internal_GenericArrayOps$LongArrayOps$ = new $c_ju_internal_GenericArrayOps$LongArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$LongArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$ShortArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$ShortArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$ShortArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$ShortArrayOps$() {
}
$h_ju_internal_GenericArrayOps$ShortArrayOps$.prototype = $p;
$p.Z = (function(o1, o2) {
  return (((o1 | 0) - (o2 | 0)) | 0);
});
$p.d3 = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.bD = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ShortArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ShortArrayOps$, "java.util.internal.GenericArrayOps$ShortArrayOps$", ({
  fM: 1,
  ap: 1,
  aB: 1,
  G: 1
}));
var $n_ju_internal_GenericArrayOps$ShortArrayOps$;
function $m_ju_internal_GenericArrayOps$ShortArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$ShortArrayOps$)) {
    $n_ju_internal_GenericArrayOps$ShortArrayOps$ = new $c_ju_internal_GenericArrayOps$ShortArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$ShortArrayOps$;
}
/** @constructor */
function $c_s_PartialFunction$$anon$1() {
}
$p = $c_s_PartialFunction$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
}
$h_s_PartialFunction$$anon$1.prototype = $p;
$p.u = (function() {
  return "<function1>";
});
$p.bV = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cf = (function(x) {
  return false;
});
$p.kg = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.e = (function(v1) {
  this.kg(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  g5: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.s = (function() {
  return (-1);
});
$p.dq = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.du = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.bm = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.cH = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.cQ = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.gf = (function() {
  return $m_sci_Seq$().fZ(this);
});
$p.d = (function() {
  return this;
});
$p.h6 = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.e1 = (function(n) {
  return this.gc(n, (-1));
});
$p.gc = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.u = (function() {
  return "<iterator>";
});
/** @constructor */
function $c_sc_Map$() {
  this.gx = null;
  this.or = null;
  this.os = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.or = $ct_O__(new $c_O());
  this.os = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.or));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  gC: 1,
  bU: 1,
  a: 1,
  aF: 1
}));
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$();
  }
  return $n_sc_Map$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.dF = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.dF = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.kh = (function(elems) {
  return this.dF.dZ(elems);
});
$p.ih = (function() {
  return this.dF.bP();
});
$p.fY = (function(it) {
  return this.dF.a5(it);
});
$p.ae = (function() {
  return this.dF.ae();
});
$p.dZ = (function(elems) {
  return this.kh(elems);
});
$p.bP = (function() {
  return this.ih();
});
$p.a5 = (function(source) {
  return this.fY(source);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cc(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => x$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.fe(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.aZ(idx) > 0));
}
function $f_sc_SeqOps__sorted__s_math_Ordering__O($thiz, ord) {
  var len = $thiz.i();
  var b = $thiz.dt();
  if ((len === 1)) {
    b.ac($thiz.q());
  } else if ((len > 1)) {
    b.b5(len);
    var arr = new $ac_O(len);
    $thiz.bm(arr, 0, 2147483647);
    $m_ju_Arrays$().gd(arr, ord);
    var i = 0;
    while ((i < len)) {
      b.ac(arr.a[i]);
      i = ((1 + i) | 0);
    }
  }
  return b.af();
}
function $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O($thiz, f, ord) {
  return $thiz.b6(new $c_s_math_Ordering$$anon$1(f, ord));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.aZ(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.s();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.s();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.d(), that);
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $thiz.at().ae();
  var it = $thiz.d();
  while (it.j()) {
    b.ac(f.e(it.f()));
  }
  return b.af();
}
function $f_sc_StrictOptimizedIterableOps__flatMap__F1__O($thiz, f) {
  var b = $thiz.at().ae();
  var it = $thiz.d();
  while (it.j()) {
    b.aW(f.e(it.f()));
  }
  return b.af();
}
function $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O($thiz, that) {
  var b = $thiz.at().ae();
  var it1 = $thiz.d();
  var it2 = that.d();
  while ((it1.j() && it2.j())) {
    b.ac(new $c_T2(it1.f(), it2.f()));
  }
  return b.af();
}
function $f_sc_StrictOptimizedIterableOps__zipWithIndex__O($thiz) {
  var b = $thiz.at().ae();
  var i = 0;
  var it = $thiz.d();
  while (it.j()) {
    b.ac(new $c_T2(it.f(), i));
    i = ((1 + i) | 0);
  }
  return b.af();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.gu = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.td = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.a5.call(this, it));
});
$p.a5 = (function(it) {
  return this.td(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  h0: 1,
  bS: 1,
  a: 1,
  F: 1
}));
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$();
  }
  return $n_sci_Iterable$;
}
/** @constructor */
function $c_sci_LazyList$() {
  this.G = null;
  $n_sci_LazyList$ = this;
  this.G = $ct_sci_LazyList__O__(new $c_sci_LazyList(), $m_sci_LazyList$EmptyMarker$());
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.dZ = (function(elems) {
  return this.kC(elems);
});
$p.qM = (function(ll, f) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef) => (() => {
    var it = new $c_sr_ObjectRef(null);
    var itHasNext = false;
    var rest = new $c_sr_ObjectRef(restRef.D);
    while (((!itHasNext) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest.D) === $m_sci_LazyList$().G)))) {
      it.D = f.e(rest.D.q()).d();
      itHasNext = it.D.j();
      if ((!itHasNext)) {
        rest.D = rest.D.aw();
        restRef.D = rest.D;
      }
    }
    if (itHasNext) {
      var x$proxy2 = it.D;
      if ((x$proxy2 === null)) {
        $m_sr_Scala3RunTime$().cF();
      }
      var head = x$proxy2.f();
      rest.D = rest.D.aw();
      restRef.D = rest.D;
      return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), head, $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
        var x$proxy3 = it.D;
        if ((x$proxy3 === null)) {
          $m_sr_Scala3RunTime$().cF();
        }
        return this.l2(x$proxy3, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.qM(rest.D, f))));
      }))));
    } else {
      return this.G;
    }
  }))(new $c_sr_ObjectRef(ll))));
});
$p.uC = (function(ll, n) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef, iRef) => (() => {
    var rest = restRef.D;
    var i = iRef.ay;
    while (((i > 0) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest) === $m_sci_LazyList$().G)))) {
      rest = rest.aw();
      restRef.D = rest;
      i = ((i - 1) | 0);
      iRef.ay = i;
    }
    return rest;
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.kC = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.s() === 0) ? this.G : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.qL(coll.d()))))));
});
$p.l2 = (function(it, suffix) {
  return (it.j() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.f(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.l2(it, suffix))))) : suffix.I());
});
$p.qL = (function(it) {
  return (it.j() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.f(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.qL(it))))) : this.G);
});
$p.pZ = (function(start, step) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), start, this.pZ(((start + step) | 0), step)))));
});
$p.ae = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.a5 = (function(source) {
  return this.kC(source);
});
$p.bP = (function() {
  return this.G;
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  h1: 1,
  a: 1,
  F: 1,
  Y: 1
}));
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$();
  }
  return $n_sci_LazyList$;
}
/** @constructor */
function $c_scm_Builder$$anon$1(f$2, outer) {
  this.oP = null;
  this.gL = null;
  this.oP = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.gL = outer;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.s4 = (function(x) {
  this.gL.ac(x);
  return this;
});
$p.rR = (function(xs) {
  this.gL.aW(xs);
  return this;
});
$p.b5 = (function(size) {
  this.gL.b5(size);
});
$p.af = (function() {
  return this.oP.e(this.gL.af());
});
$p.ac = (function(elem) {
  return this.s4(elem);
});
$p.aW = (function(elems) {
  return this.rR(elems);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  hV: 1,
  H: 1,
  J: 1,
  N: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.ep = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.ep = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.b5 = (function(size) {
});
$p.s5 = (function(elem) {
  this.ep.ac(elem);
  return this;
});
$p.rS = (function(xs) {
  this.ep.aW(xs);
  return this;
});
$p.af = (function() {
  return this.ep;
});
$p.ac = (function(elem) {
  return this.s5(elem);
});
$p.aW = (function(elems) {
  return this.rS(elems);
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  ba: 1,
  H: 1,
  J: 1,
  N: 1
}));
/** @constructor */
function $c_scm_Iterable$() {
  this.gu = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_scm_Iterable$;
/** @constructor */
function $h_scm_Iterable$() {
}
$h_scm_Iterable$.prototype = $p;
var $d_scm_Iterable$ = new $TypeData().i($c_scm_Iterable$, "scala.collection.mutable.Iterable$", ({
  ie: 1,
  bS: 1,
  a: 1,
  F: 1
}));
var $n_scm_Iterable$;
function $m_scm_Iterable$() {
  if ((!$n_scm_Iterable$)) {
    $n_scm_Iterable$ = new $c_scm_Iterable$();
  }
  return $n_scm_Iterable$;
}
/** @constructor */
function $c_scm_Map$() {
  this.gx = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_scm_HashMap$());
}
$p = $c_scm_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_scm_Map$;
/** @constructor */
function $h_scm_Map$() {
}
$h_scm_Map$.prototype = $p;
var $d_scm_Map$ = new $TypeData().i($c_scm_Map$, "scala.collection.mutable.Map$", ({
  ij: 1,
  bU: 1,
  a: 1,
  aF: 1
}));
var $n_scm_Map$;
function $m_scm_Map$() {
  if ((!$n_scm_Map$)) {
    $n_scm_Map$ = new $c_scm_Map$();
  }
  return $n_scm_Map$;
}
/** @constructor */
function $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(f) {
  this.p5 = null;
  this.p5 = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d() {
}
$h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = $p;
$p.I = (function() {
  return (0, this.p5)();
});
var $d_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d, "scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d", ({
  jD: 1,
  jC: 1,
  cE: 1,
  aY: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(f) {
  this.p6 = null;
  this.p6 = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1() {
}
$h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = $p;
$p.e = (function(x0) {
  return (0, this.p6)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1 = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1, "scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1", ({
  jF: 1,
  jE: 1,
  cF: 1,
  i: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(f) {
  this.p7 = null;
  this.p7 = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7() {
}
$h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = $p;
$p.bN = (function(x0, x1) {
  return (0, this.p7)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7, "scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7", ({
  jH: 1,
  jG: 1,
  cG: 1,
  aZ: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(f) {
  this.p8 = null;
  this.p8 = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96() {
}
$h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = $p;
$p.h3 = (function(x0, x1, x2) {
  return (0, this.p8)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96, "scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96", ({
  jJ: 1,
  jI: 1,
  cH: 1,
  bF: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c(f) {
  this.p9 = null;
  this.p9 = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c() {
}
$h_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c.prototype = $p;
$p.sb = (function(x0, x1, x2, x3) {
  return (0, this.p9)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c, "scala.scalajs.runtime.AnonFunction4.$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c", ({
  jL: 1,
  jK: 1,
  ji: 1,
  fZ: 1
}));
/** @constructor */
function $c_s_util_Try() {
}
$p = $c_s_util_Try.prototype = new $h_O();
$p.constructor = $c_s_util_Try;
/** @constructor */
function $h_s_util_Try() {
}
$h_s_util_Try.prototype = $p;
$p.cG = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.h4($m_Lcom_raquo_ew_JsArray$().cS($m_sr_ScalaRunTime$().cJ(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.h5($m_Lcom_raquo_ew_JsArray$().cS($m_sr_ScalaRunTime$().cJ(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.fm(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.hf(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.bp || (!when))) {
    var $x_1 = f();
  } else {
    this$2.bp = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.bp = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var subscription = new $c_Lcom_raquo_airstream_ownership_Subscription(owner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  })));
  var this$ = $thiz.dp();
  this$.push(observer);
  return subscription;
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz, observer, shouldCallMaybeWillStart) {
  var this$3 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    if (((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz)) && shouldCallMaybeWillStart)) {
      $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    }
    var this$ = $thiz.ds();
    this$.push(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$3.bp || (!when))) {
    f();
  } else {
    this$3.bp = true;
    try {
      f();
    } finally {
      this$3.bp = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().qG($thiz.ds(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().qG($thiz.dp(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.hr())) {
    $thiz.hm();
    $thiz.fm(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.hj();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.hk();
    $thiz.fm(false);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) {
  var this$ = $thiz.dp();
  var $x_1 = this$.length;
  var this$$1 = $thiz.ds();
  return ((($x_1 | 0) + (this$$1.length | 0)) | 0);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1(outer) {
  this.lj = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.lj = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.tF = (function(x) {
  return ((x !== null) || false);
});
$p.sh = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.lj, x, _$1);
  }))), (void 0)) : default$1.e(x));
});
$p.cf = (function(x) {
  return this.tF(x);
});
$p.bV = (function(x, default$1) {
  return this.sh(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  d1: 1,
  aQ: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.iX = $m_Lcom_raquo_airstream_core_Observer$().th(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.m1 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.m1 = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.tH = (function(x) {
  return true;
});
$p.sj = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    this.m1.uI(x, _$1);
  })));
});
$p.cf = (function(x) {
  return this.tH(x);
});
$p.bV = (function(x, default$1) {
  return this.sj(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  di: 1,
  aQ: 1,
  i: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_DomApi$$anon$2(outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
}
$p = $c_Lcom_raquo_laminar_DomApi$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$$anon$2;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$$anon$2() {
}
$h_Lcom_raquo_laminar_DomApi$$anon$2.prototype = $p;
$p.cf = (function(x) {
  return (((typeof x) === "string") || false);
});
$p.bV = (function(x, default$1) {
  return (((typeof x) === "string") ? x : default$1.e(x));
});
var $d_Lcom_raquo_laminar_DomApi$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$$anon$2, "com.raquo.laminar.DomApi$$anon$2", ({
  dp: 1,
  aQ: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.pz(new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.cd().pg();
  })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.cd().sK();
  }))));
  $thiz.km((void 0));
  $thiz.kl($m_sci_Map$EmptyMap$());
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.fU() === (void 0))) {
    $thiz.km($m_Lcom_raquo_ew_JsArray$().cS($m_sr_ScalaRunTime$().cJ(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener]))));
  } else if (unsafePrepend) {
    var x$1 = $thiz.fU();
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.fU();
    if ((x$2 === (void 0))) {
      var $x_2;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_2 = x$2;
    }
    $x_2.push(listener);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V($thiz, index) {
  var x = $thiz.fU();
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.fU();
  if ((x === (void 0))) {
    return (-1);
  } else {
    var found = false;
    var ix = 0;
    while (((!found) && (ix < (x.length | 0)))) {
      var x$1 = x[ix];
      if (((x$1 === null) ? (listener === null) : $dp_equals__O__Z(x$1, listener))) {
        found = true;
      } else {
        ix = ((1 + ix) | 0);
      }
    }
    return (found ? ix : (-1));
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V($thiz, key, reason, addItems, removeItems) {
  var keyItemsWithReason = $thiz.ie().cV(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.c())) {
      var x0 = these.q();
      var x = x0.R;
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.O;
        if ((!((x$3 === null) ? (reason === null) : $dp_equals__O__Z(x$3, reason)))) {
          var $x_1 = true;
        } else {
          var $x_1 = (reason === null);
        }
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        return true;
      }
      these = these.w();
    }
    return false;
  });
  var itemsToAdd = $f_sc_SeqOps__distinct__O(addItems);
  _return$1: {
    var result;
    var l$tailLocal1 = removeItems;
    while (true) {
      if (l$tailLocal1.c()) {
        var result = $m_sci_Nil$();
        break;
      } else {
        var h = l$tailLocal1.q();
        var t = l$tailLocal1.w();
        if (((!(!f(h))) === true)) {
          l$tailLocal1 = t;
          continue;
        }
        var start = l$tailLocal1;
        var remaining$tailLocal1 = t;
        while (true) {
          if (remaining$tailLocal1.c()) {
            var result = start;
            break _return$1;
          } else {
            var x$1 = remaining$tailLocal1.q();
            if (((!(!f(x$1))) !== true)) {
              remaining$tailLocal1 = remaining$tailLocal1.w();
              continue;
            }
            var firstMiss = remaining$tailLocal1;
            var newHead = new $c_sci_$colon$colon(start.q(), $m_sci_Nil$());
            var toProcess = start.w();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.q(), $m_sci_Nil$());
              currentLast.a2 = newElem;
              currentLast = newElem;
              toProcess = toProcess.w();
            }
            var next = firstMiss.w();
            var nextToCopy = next;
            while ((!next.c())) {
              var head = next.q();
              if (((!(!f(head))) !== true)) {
                next = next.w();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.q(), $m_sci_Nil$());
                  currentLast.a2 = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.w();
                }
                nextToCopy = next.w();
                next = next.w();
              }
            }
            if ((!nextToCopy.c())) {
              currentLast.a2 = nextToCopy;
            }
            var result = newHead;
            break _return$1;
          }
        }
      }
    }
  }
  var this$1 = $thiz.ie().cV(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.bO(t$1.R));
  _return$3: {
    var $x_3;
    var l$tailLocal1$1 = this$1;
    while (true) {
      if (l$tailLocal1$1.c()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$tailLocal1$1.q();
        var t$2 = l$tailLocal1$1.w();
        if (((!(!f$1(h$1))) === true)) {
          l$tailLocal1$1 = t$2;
          continue;
        }
        var start$1 = l$tailLocal1$1;
        var remaining$tailLocal1$1 = t$2;
        while (true) {
          if (remaining$tailLocal1$1.c()) {
            var $x_3 = start$1;
            break _return$3;
          } else {
            var x$2 = remaining$tailLocal1$1.q();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$tailLocal1$1 = remaining$tailLocal1$1.w();
              continue;
            }
            var firstMiss$1 = remaining$tailLocal1$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.q(), $m_sci_Nil$());
            var toProcess$1 = start$1.w();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.q(), $m_sci_Nil$());
              currentLast$1.a2 = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.w();
            }
            var next$1 = firstMiss$1.w();
            var nextToCopy$1 = next$1;
            while ((!next$1.c())) {
              var head$1 = next$1.q();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.w();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.q(), $m_sci_Nil$());
                  currentLast$1.a2 = newElem$2$1;
                  currentLast$1 = newElem$2$1;
                  nextToCopy$1 = nextToCopy$1.w();
                }
                nextToCopy$1 = next$1.w();
                next$1 = next$1.w();
              }
            }
            if ((!nextToCopy$1.c())) {
              currentLast$1.a2 = nextToCopy$1;
            }
            var $x_3 = newHead$1;
            break _return$3;
          }
        }
      }
    }
  }
  var f$2 = ((_$2) => new $c_T2(_$2, reason));
  if ((itemsToAdd === $m_sci_Nil$())) {
    var $x_2 = $m_sci_Nil$();
  } else {
    var x0$1 = itemsToAdd.q();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.w();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.q();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.a2 = nx;
      t$3 = nx;
      rest = rest.w();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.pq($x_2);
  var domValues = key.j5.pL(key.ne.e($thiz));
  var f$3 = ((elem) => result.bO(elem));
  _return$5: {
    var $x_5;
    var l$tailLocal1$2 = domValues;
    while (true) {
      if (l$tailLocal1$2.c()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$tailLocal1$2.q();
        var t$4 = l$tailLocal1$2.w();
        if (((!(!f$3(h$3))) === true)) {
          l$tailLocal1$2 = t$4;
          continue;
        }
        var start$2 = l$tailLocal1$2;
        var remaining$tailLocal1$2 = t$4;
        while (true) {
          if (remaining$tailLocal1$2.c()) {
            var $x_5 = start$2;
            break _return$5;
          } else {
            var x$4 = remaining$tailLocal1$2.q();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$tailLocal1$2 = remaining$tailLocal1$2.w();
              continue;
            }
            var firstMiss$2 = remaining$tailLocal1$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.q(), $m_sci_Nil$());
            var toProcess$2 = start$2.w();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.q(), $m_sci_Nil$());
              currentLast$2.a2 = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.w();
            }
            var next$2 = firstMiss$2.w();
            var nextToCopy$2 = next$2;
            while ((!next$2.c())) {
              var head$2 = next$2.q();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.w();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.q(), $m_sci_Nil$());
                  currentLast$2.a2 = newElem$2$2;
                  currentLast$2 = newElem$2$2;
                  nextToCopy$2 = nextToCopy$2.w();
                }
                nextToCopy$2 = next$2.w();
                next$2 = next$2.w();
              }
            }
            if ((!nextToCopy$2.c())) {
              currentLast$2.a2 = nextToCopy$2;
            }
            var $x_5 = newHead$2;
            break _return$5;
          }
        }
      }
    }
  }
  _return$7: {
    var $x_4;
    var l$tailLocal1$3 = itemsToAdd;
    while (true) {
      if (l$tailLocal1$3.c()) {
        var $x_4 = $m_sci_Nil$();
        break;
      } else {
        var h$4 = l$tailLocal1$3.q();
        var t$5 = l$tailLocal1$3.w();
        if (((!(!f(h$4))) === true)) {
          l$tailLocal1$3 = t$5;
          continue;
        }
        var start$3 = l$tailLocal1$3;
        var remaining$tailLocal1$3 = t$5;
        while (true) {
          if (remaining$tailLocal1$3.c()) {
            var $x_4 = start$3;
            break _return$7;
          } else {
            var x$5 = remaining$tailLocal1$3.q();
            if (((!(!f(x$5))) !== true)) {
              remaining$tailLocal1$3 = remaining$tailLocal1$3.w();
              continue;
            }
            var firstMiss$3 = remaining$tailLocal1$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.q(), $m_sci_Nil$());
            var toProcess$3 = start$3.w();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.q(), $m_sci_Nil$());
              currentLast$3.a2 = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.w();
            }
            var next$3 = firstMiss$3.w();
            var nextToCopy$3 = next$3;
            while ((!next$3.c())) {
              var head$3 = next$3.q();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.w();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.q(), $m_sci_Nil$());
                  currentLast$3.a2 = newElem$2$3;
                  currentLast$3 = newElem$2$3;
                  nextToCopy$3 = nextToCopy$3.w();
                }
                nextToCopy$3 = next$3.w();
                next$3 = next$3.w();
              }
            }
            if ((!nextToCopy$3.c())) {
              currentLast$3.a2 = nextToCopy$3;
            }
            var $x_4 = newHead$3;
            break _return$7;
          }
        }
      }
    }
  }
  var nextDomValues = $x_5.pq($x_4);
  $thiz.kl($thiz.ie().eH(key, newItems));
  key.ng.bN($thiz, key.j5.pP(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.fT(), maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.fT();
  $thiz.py(maybeNextParent);
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.c()) && (!maybePrevParent.A().cd().c1.c()));
  var isNextParentActive = ((!maybeNextParent.c()) && (!maybeNextParent.A().cd().c1.c()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.c() ? $m_s_None$() : new $c_s_Some(maybeNextParent.A().cd())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.c()) {
    $thiz.kn().sw();
  } else {
    var x0 = maybeNextOwner.A();
    $thiz.kn().uN(x0);
  }
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  eP: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Byte__compareTo__O__I($thiz, o) {
  return (($thiz - o) | 0);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  eU: 1,
  aj: 1,
  a: 1,
  ac: 1,
  a5: 1
}), ((x) => $isByte(x)));
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eX)));
}
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $ct_jl_IllegalStateException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  bw: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  bx: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  f6: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f7)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Short__compareTo__O__I($thiz, o) {
  return (($thiz - o) | 0);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  f8: 1,
  aj: 1,
  a: 1,
  ac: 1,
  a5: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  ff: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  fn: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  fE: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.oe)) {
    if (($thiz.hL === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.hL;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.y.N));
      try {
        var $x_1 = ((($thiz.hL + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.od = $x_1;
    $thiz.oe = true;
  }
  return $thiz.od;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.hL = null;
    this.od = null;
    this.oe = false;
    this.hL = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  g2: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_s_Option() {
}
$p = $c_s_Option.prototype = new $h_O();
$p.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $p;
$p.cG = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.c = (function() {
  return (this === $m_s_None$());
});
$p.s = (function() {
  return (this.c() ? 0 : 1);
});
$p.bO = (function(elem) {
  return ((!this.c()) && $m_sr_BoxesRunTime$().l(this.A(), elem));
});
$p.d = (function() {
  return (this.c() ? $m_sc_Iterator$().J : new $c_sc_Iterator$$anon$20(this.A()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gs = 0;
  this.oh = 0;
  this.og = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.og = outer;
  this.gs = 0;
  this.oh = outer.bv();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.j = (function() {
  return (this.gs < this.oh);
});
$p.f = (function() {
  var result = this.og.bw(this.gs);
  this.gs = ((1 + this.gs) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  g7: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.R = null;
  this.O = null;
  this.R = _1;
  this.O = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.bv = (function() {
  return 2;
});
$p.bw = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.u = (function() {
  return (((("(" + this.R) + ",") + this.O) + ")");
});
$p.bx = (function() {
  return "Tuple2";
});
$p.cG = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().fg(this, (-116390334), true);
});
$p.p = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().l(this.R, x$1.R) && $m_sr_BoxesRunTime$().l(this.O, x$1.O))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bI)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bI: 1,
  g8: 1,
  P: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.fz = null;
  this.fA = null;
  this.fB = null;
  this.fz = _1;
  this.fA = _2;
  this.fB = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.cG = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.bv = (function() {
  return 3;
});
$p.bw = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().fg(this, (-192629203), true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().l(this.fz, x$0.fz) && $m_sr_BoxesRunTime$().l(this.fA, x$0.fA)) && $m_sr_BoxesRunTime$().l(this.fB, x$0.fB))));
});
$p.bx = (function() {
  return "Tuple3";
});
$p.u = (function() {
  return (((((("(" + this.fz) + ",") + this.fA) + ",") + this.fB) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  bJ: 1,
  d: 1,
  P: 1,
  g9: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.eU = null;
  this.eV = null;
  this.eW = null;
  this.eX = null;
  this.eU = _1;
  this.eV = _2;
  this.eW = _3;
  this.eX = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.cG = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.bv = (function() {
  return 4;
});
$p.bw = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().fg(this, (-1542739752), true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().l(this.eU, x$0.eU) && $m_sr_BoxesRunTime$().l(this.eV, x$0.eV)) && $m_sr_BoxesRunTime$().l(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().l(this.eX, x$0.eX))));
});
$p.bx = (function() {
  return "Tuple4";
});
$p.u = (function() {
  return (((((((("(" + this.eU) + ",") + this.eV) + ",") + this.eW) + ",") + this.eX) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  bK: 1,
  d: 1,
  P: 1,
  ga: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.fC = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  gp: 1,
  go: 1,
  a: 1,
  F: 1,
  Y: 1
}));
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.at().a5($ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), $thiz, f));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.c())) {
    return $thiz.o(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.bC() : $thiz.u())));
  }
}
function $f_sc_IndexedSeqOps__last__O($thiz) {
  if ((!$thiz.c())) {
    return $thiz.o((($thiz.i() - 1) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("last of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.bC() : $thiz.u())));
  }
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.bC() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.e)));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e)));
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.j = (function() {
  return false;
});
$p.u7 = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.s = (function() {
  return 0;
});
$p.f = (function() {
  this.u7();
});
$p.gc = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  gu: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.oj = null;
  this.gv = false;
  this.oj = a$2;
  this.gv = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.j = (function() {
  return (!this.gv);
});
$p.f = (function() {
  if (this.gv) {
    return $m_sc_Iterator$().J.f();
  } else {
    this.gv = true;
    return this.oj;
  }
});
$p.gc = (function(from, until) {
  return (((this.gv || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().J : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  gv: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(f$8, outer) {
  this.om = null;
  this.oo = null;
  this.hO = false;
  this.on = null;
  this.jK = null;
  this.om = f$8;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jK = outer;
  this.oo = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.hO = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.j = (function() {
  while (true) {
    if (this.hO) {
      return true;
    } else if (this.jK.j()) {
      var a = this.jK.f();
      if ((!this.oo.ia(this.om.e(a)))) {
        continue;
      }
      this.on = a;
      this.hO = true;
      return true;
    } else {
      return false;
    }
  }
});
$p.f = (function() {
  if (this.j()) {
    this.hO = false;
    return this.on;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  gy: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(f$9, outer) {
  this.op = null;
  this.hP = null;
  this.op = f$9;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.hP = outer;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.s = (function() {
  return this.hP.s();
});
$p.j = (function() {
  return this.hP.j();
});
$p.f = (function() {
  return this.op.e(this.hP.f());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  gz: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bQ instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bQ;
      $thiz.bQ = c.bQ;
      $thiz.eb = c.eb;
      if ((c.cm !== null)) {
        if (($thiz.cl === null)) {
          $thiz.cl = c.cl;
        }
        var x$proxy10 = c.cl;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().cF();
        }
        x$proxy10.gw = $thiz.cm;
        $thiz.cm = c.cm;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.cm === null)) {
      $thiz.bQ = null;
      $thiz.cl = null;
      return false;
    } else {
      $thiz.bQ = $thiz.cm.tt();
      if (($thiz.cl === $thiz.cm)) {
        var x$proxy12 = $thiz.cl;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().cF();
        }
        $thiz.cl = x$proxy12.gw;
      }
      $thiz.cm = $thiz.cm.gw;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.eb) {
        return true;
      } else {
        if ((!(($thiz.bQ !== null) && $thiz.bQ.j()))) {
          continue;
        }
        $thiz.eb = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.bQ = null;
  this.cm = null;
  this.cl = null;
  this.eb = false;
  this.bQ = from;
  this.cm = null;
  this.cl = null;
  this.eb = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.j = (function() {
  if (this.eb) {
    return true;
  } else if ((this.bQ !== null)) {
    if (this.bQ.j()) {
      this.eb = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.f = (function() {
  if (this.j()) {
    this.eb = false;
    var x$proxy13 = this.bQ;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().cF();
    }
    return x$proxy13.f();
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
$p.h6 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.cm === null)) {
    this.cm = c;
    this.cl = c;
  } else {
    var x$proxy14 = this.cl;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().cF();
    }
    x$proxy14.gw = c;
    this.cl = c;
  }
  if ((this.bQ === null)) {
    this.bQ = $m_sc_Iterator$().J;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bT)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  bT: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.dE > 0)) {
    if ($thiz.ec.j()) {
      $thiz.ec.f();
      $thiz.dE = (($thiz.dE - 1) | 0);
    } else {
      $thiz.dE = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.c4 < 0)) {
    return (-1);
  } else {
    var that = (($thiz.c4 - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.ec = null;
  this.c4 = 0;
  this.dE = 0;
  this.ec = underlying;
  this.c4 = limit;
  this.dE = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.s = (function() {
  var size = this.ec.s();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.dE) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.c4 < 0)) {
      return dropSize;
    } else {
      var x = this.c4;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.j = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.c4 !== 0) && this.ec.j());
});
$p.f = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.c4 > 0)) {
    this.c4 = ((this.c4 - 1) | 0);
    return this.ec.f();
  } else {
    return ((this.c4 < 0) ? this.ec.f() : $m_sc_Iterator$().J.f());
  }
});
$p.gc = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.c4 < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.dE + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().J;
  } else if ((sum < 0)) {
    this.dE = 2147483647;
    this.c4 = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.ec, ((sum - 2147483647) | 0), rest))));
  } else {
    this.dE = sum;
    this.c4 = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  gB: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.c())) {
    len = ((1 + len) | 0);
    these = these.w();
  }
  return len;
}
function $f_sc_LinearSeqOps__last__O($thiz) {
  if ($thiz.c()) {
    throw new $c_ju_NoSuchElementException("LinearSeq.last");
  } else {
    var these = $thiz;
    var scout = $thiz.l6();
    while ((!scout.c())) {
      these = scout;
      scout = scout.w();
    }
    return these.q();
  }
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len, 0, $thiz));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.aZ(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.pN(n);
  if (skipped.c()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.q();
}
function $f_sc_LinearSeqOps__foldLeft__O__F2__O($thiz, z, op) {
  var acc = z;
  var these = $thiz;
  while ((!these.c())) {
    acc = op.bN(acc, these.q());
    these = these.w();
  }
  return acc;
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return (xs$tailLocal1.c() ? 0 : 1);
    } else if (xs$tailLocal1.c()) {
      return (-1);
    } else {
      var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
      var xs$tailLocal1$tmp1 = xs$tailLocal1.w();
      i$tailLocal1 = i$tailLocal1$tmp1;
      xs$tailLocal1 = xs$tailLocal1$tmp1;
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      if ((((!a$tailLocal1.c()) && (!b$tailLocal1.c())) && $m_sr_BoxesRunTime$().l(a$tailLocal1.q(), b$tailLocal1.q()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.w();
        var b$tailLocal1$tmp1 = b$tailLocal1.w();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.c() && b$tailLocal1.c());
    }
  }
}
/** @constructor */
function $c_sc_MapOps$$anon$3(outer) {
  this.jL = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jL = outer.d();
}
$p = $c_sc_MapOps$$anon$3.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_MapOps$$anon$3;
/** @constructor */
function $h_sc_MapOps$$anon$3() {
}
$h_sc_MapOps$$anon$3.prototype = $p;
$p.j = (function() {
  return this.jL.j();
});
$p.f = (function() {
  return this.jL.f().O;
});
var $d_sc_MapOps$$anon$3 = new $TypeData().i($c_sc_MapOps$$anon$3, "scala.collection.MapOps$$anon$3", ({
  gD: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.gC = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.gC = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.j = (function() {
  return (!this.gC.c());
});
$p.f = (function() {
  var r = this.gC.q();
  this.gC = this.gC.w();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  gK: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.bq = 0;
  $thiz.fF = 0;
  $thiz.bF = (-1);
  return $thiz;
}
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.dd === null)) {
    $thiz.dd = new $ac_I(($m_sci_Node$().gK << 1));
    $thiz.fG = new ($d_sci_Node.r().C)($m_sci_Node$().gK);
  }
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.kK()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.ip()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.dG = node;
  $thiz.bq = 0;
  $thiz.fF = node.kY();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bF = ((1 + $thiz.bF) | 0);
  var cursorIndex = ($thiz.bF << 1);
  var lengthIndex = ((1 + ($thiz.bF << 1)) | 0);
  $thiz.fG.a[$thiz.bF] = node;
  $thiz.dd.a[cursorIndex] = 0;
  $thiz.dd.a[lengthIndex] = node.kV();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bF = (($thiz.bF - 1) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bF >= 0)) {
    var cursorIndex = ($thiz.bF << 1);
    var lengthIndex = ((1 + ($thiz.bF << 1)) | 0);
    var nodeCursor = $thiz.dd.a[cursorIndex];
    if ((nodeCursor < $thiz.dd.a[lengthIndex])) {
      var \u03b41$ = $thiz.dd;
      \u03b41$.a[cursorIndex] = ((1 + \u03b41$.a[cursorIndex]) | 0);
      var nextNode = $thiz.fG.a[$thiz.bF].kG(nodeCursor);
      if (nextNode.kK()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.ip()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true;
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz);
    }
  }
  return false;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.bq = 0;
  this.fF = 0;
  this.dG = null;
  this.bF = 0;
  this.dd = null;
  this.fG = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.j = (function() {
  return ((this.bq < this.fF) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.ef = (-1);
  $thiz.c5 = (-1);
  $thiz.gF = new $ac_I(((1 + $m_sci_Node$().gK) | 0));
  $thiz.gG = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().gK) | 0));
  return $thiz;
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz;
}
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.hU = node;
  $thiz.ef = ((node.kY() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.c5 = ((1 + $thiz.c5) | 0);
  $thiz.gG.a[$thiz.c5] = node;
  $thiz.gF.a[$thiz.c5] = ((node.kV() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.c5 = (($thiz.c5 - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.c5 >= 0)) {
    var nodeCursor = $thiz.gF.a[$thiz.c5];
    $thiz.gF.a[$thiz.c5] = ((nodeCursor - 1) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.gG.a[$thiz.c5].kG(nodeCursor));
    } else {
      var currNode = $thiz.gG.a[$thiz.c5];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.ip()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
/** @constructor */
function $c_sci_ChampBaseReverseIterator() {
  this.ef = 0;
  this.hU = null;
  this.c5 = 0;
  this.gF = null;
  this.gG = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.j = (function() {
  return ((this.ef >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.fH !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.v(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.v(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.h7(bitpos);
  var idx = (dataIx << 1);
  var src = bm.aB;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.v(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.v(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bR, dataIx, originalHash);
  bm.X = (bm.X | bitpos);
  bm.aB = dst;
  bm.bR = dstHashes;
  bm.b9 = ((1 + bm.b9) | 0);
  bm.bE = ((bm.bE + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.fH = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.de = $thiz.de.pA();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.fH = null;
  this.de = null;
  this.de = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().oc, $m_s_Array$EmptyArrays$().jG, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.b5 = (function(size) {
});
$p.gg = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().eC(keyHash, shift);
    var bitpos = $m_sci_Node$().e0(mask);
    if (((mapNode.X & bitpos) !== 0)) {
      var index = $m_sci_Node$().cB(mapNode.X, mask, bitpos);
      var key0 = mapNode.dr(index);
      var key0UnimprovedHash = mapNode.g1(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().l(key0, key))) {
        mapNode.aB.a[((1 + (index << 1)) | 0)] = value;
        return (void 0);
      } else {
        var value0 = mapNode.cz(index);
        var key0Hash = $m_sc_Hashing$().cA(key0UnimprovedHash);
        var subNodeNew = mapNode.kT(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.u0(bitpos, key0Hash, subNodeNew);
        return (void 0);
      }
    } else if (((mapNode.a6 & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cB(mapNode.a6, mask, bitpos);
      var subNode = mapNode.cU(index$2);
      var beforeSize = subNode.b0();
      var beforeHash = subNode.ev();
      this.gg(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.b9 = ((mapNode.b9 + ((subNode.b0() - beforeSize) | 0)) | 0);
      mapNode.bE = ((mapNode.bE + ((subNode.ev() - beforeHash) | 0)) | 0);
      return (void 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
      return (void 0);
    }
  }
  if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.g2(key);
    if ((index$3 < 0)) {
      mapNode.ah = mapNode.ah.eu(new $c_T2(key, value));
      return (void 0);
    } else {
      mapNode.ah = mapNode.ah.eG(index$3, new $c_T2(key, value));
      return (void 0);
    }
  }
  throw new $c_s_MatchError(mapNode);
});
$p.l1 = (function() {
  if ((this.de.b9 === 0)) {
    return $m_sci_HashMap$().gH;
  } else if ((this.fH !== null)) {
    return this.fH;
  } else {
    this.fH = new $c_sci_HashMap(this.de);
    return this.fH;
  }
});
$p.pm = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().E(elem.R);
  var im = $m_sc_Hashing$().cA(h);
  this.gg(this.de, elem.R, elem.O, h, im, 0);
  return this;
});
$p.fc = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().E(key);
  this.gg(this.de, key, value, originalHash, $m_sc_Hashing$().cA(originalHash), 0);
  return this;
});
$p.kd = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(xs, this);
  } else if ((xs instanceof $c_scm_HashMap)) {
    var iter = xs.qr();
    while (iter.j()) {
      var next = iter.f();
      var improvedHash = next.dl;
      var originalHash = (improvedHash ^ ((improvedHash >>> 16) | 0));
      var hash = $m_sc_Hashing$().cA(originalHash);
      this.gg(this.de, next.eq, next.bU, originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.pR();
    while (iter$2.j()) {
      var next$2 = iter$2.f();
      var originalHash$2 = xs.vy(next$2.q9());
      var hash$2 = $m_sc_Hashing$().cA(originalHash$2);
      this.gg(this.de, next$2.qi(), next$2.vd(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.cT(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => this.fc(key$2, value$2))));
  } else {
    var it = xs.d();
    while (it.j()) {
      this.pm(it.f());
    }
  }
  return this;
});
$p.af = (function() {
  return this.l1();
});
$p.ac = (function(elem) {
  return this.pm(elem);
});
$p.aW = (function(elems) {
  return this.kd(elems);
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  gV: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.dF = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.q1 = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.fY.call(this, it));
});
$p.fY = (function(it) {
  return this.q1(it);
});
$p.a5 = (function(source) {
  return this.q1(source);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  gY: 1,
  aL: 1,
  a: 1,
  F: 1,
  Y: 1
}));
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$();
  }
  return $n_sci_IndexedSeq$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.fI = null;
  this.oF = null;
  this.sv();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.b5 = (function(size) {
});
$p.sv = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.oF = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kw()))));
  this.fI = deferred;
});
$p.uA = (function() {
  this.fI.kL(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().G)));
  return this.oF;
});
$p.s1 = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.fI.kL(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kw())))));
  })));
  this.fI = deferred;
  return this;
});
$p.rP = (function(xs) {
  if ((xs.s() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.fI.kL(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().l2(xs.d(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kw()))))));
    this.fI = deferred;
  }
  return this;
});
$p.af = (function() {
  return this.uA();
});
$p.ac = (function(elem) {
  return this.s1(elem);
});
$p.aW = (function(elems) {
  return this.rP(elems);
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  h3: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.fJ = null;
  this.fJ = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.j = (function() {
  return (!($p_sci_LazyList__evaluated__sci_LazyList(this.fJ) === $m_sci_LazyList$().G));
});
$p.f = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this.fJ) === $m_sci_LazyList$().G)) {
    return $m_sc_Iterator$().J.f();
  } else {
    var res = this.fJ.q();
    this.fJ = this.fJ.aw();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  h5: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.dZ = (function(elems) {
  return $m_sci_Nil$().iB(elems);
});
$p.ae = (function() {
  return new $c_scm_ListBuffer();
});
$p.a5 = (function(source) {
  return $m_sci_Nil$().iB(source);
});
$p.bP = (function() {
  return $m_sci_Nil$();
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  h8: 1,
  a: 1,
  F: 1,
  Y: 1,
  aq: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.f3 = outer;
  $thiz.dK = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dK = 0;
  this.f3 = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.j = (function() {
  return (this.dK < 2);
});
$p.f = (function() {
  matchResult5: {
    var result;
    var x23 = this.dK;
    if ((x23 === 0)) {
      var result = this.bZ(this.f3.co, this.f3.dI);
      break matchResult5;
    }
    if ((x23 === 1)) {
      var result = this.bZ(this.f3.cp, this.f3.dJ);
      break matchResult5;
    }
    var result = $m_sc_Iterator$().J.f();
  }
  this.dK = ((1 + this.dK) | 0);
  return result;
});
$p.e1 = (function(n) {
  this.dK = ((this.dK + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.dL = outer;
  $thiz.dM = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dM = 0;
  this.dL = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.j = (function() {
  return (this.dM < 3);
});
$p.f = (function() {
  var result;
  switch (this.dM) {
    case 0: {
      var result = this.bZ(this.dL.c6, this.dL.dg);
      break;
    }
    case 1: {
      var result = this.bZ(this.dL.c7, this.dL.dh);
      break;
    }
    case 2: {
      var result = this.bZ(this.dL.c8, this.dL.di);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().J.f();
    }
  }
  this.dM = ((1 + this.dM) | 0);
  return result;
});
$p.e1 = (function(n) {
  this.dM = ((this.dM + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.cN = outer;
  $thiz.dN = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dN = 0;
  this.cN = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.j = (function() {
  return (this.dN < 4);
});
$p.f = (function() {
  var result;
  switch (this.dN) {
    case 0: {
      var result = this.bZ(this.cN.bG, this.cN.cq);
      break;
    }
    case 1: {
      var result = this.bZ(this.cN.bH, this.cN.cr);
      break;
    }
    case 2: {
      var result = this.bZ(this.cN.bI, this.cN.cs);
      break;
    }
    case 3: {
      var result = this.bZ(this.cN.bJ, this.cN.ct);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().J.f();
    }
  }
  this.dN = ((1 + this.dN) | 0);
  return result;
});
$p.e1 = (function(n) {
  this.dN = ((this.dN + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.dO = null;
  this.gI = false;
  this.f4 = null;
  this.dO = $m_sci_Map$EmptyMap$();
  this.gI = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.b5 = (function(size) {
});
$p.qH = (function() {
  return (this.gI ? this.f4.l1() : this.dO);
});
$p.rZ = (function(key, value) {
  if (this.gI) {
    this.f4.fc(key, value);
  } else if ((this.dO.b0() < 4)) {
    this.dO = this.dO.eH(key, value);
  } else if (this.dO.bO(key)) {
    this.dO = this.dO.eH(key, value);
  } else {
    this.gI = true;
    if ((this.f4 === null)) {
      this.f4 = new $c_sci_HashMapBuilder();
    }
    this.dO.st(this.f4);
    this.f4.fc(key, value);
  }
  return this;
});
$p.ph = (function(xs) {
  return (this.gI ? (this.f4.kd(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.af = (function() {
  return this.qH();
});
$p.ac = (function(elem) {
  return this.rZ(elem.R, elem.O);
});
$p.aW = (function(elems) {
  return this.ph(elems);
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  hi: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_sci_Seq$() {
  this.dF = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$());
}
$p = $c_sci_Seq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
}
$h_sci_Seq$.prototype = $p;
$p.fZ = (function(it) {
  return ($is_sci_Seq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.fY.call(this, it));
});
$p.fY = (function(it) {
  return this.fZ(it);
});
$p.a5 = (function(source) {
  return this.fZ(source);
});
var $d_sci_Seq$ = new $TypeData().i($c_sci_Seq$, "scala.collection.immutable.Seq$", ({
  hs: 1,
  aL: 1,
  a: 1,
  F: 1,
  Y: 1
}));
var $n_sci_Seq$;
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$();
  }
  return $n_sci_Seq$;
}
/** @constructor */
function $c_sci_Vector$() {
  this.oJ = 0;
  this.oK = null;
  $n_sci_Vector$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().qf($m_jl_System$SystemProperties$().kI("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 250;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.oJ = $x_1;
  this.oK = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.dZ = (function(elems) {
  return this.kD(elems);
});
$p.kD = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.s();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((((knownSize - 1) | 0) >>> 0) <= 31)) {
      matchResult3: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.as().aK();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cn;
            break matchResult3;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.bm(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchResult3;
        }
        var a1$2 = new $ac_O(knownSize);
        it.d().bm(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().pi(it).qI();
    }
  }
});
$p.bP = (function() {
  return $m_sci_Vector0$();
});
$p.a5 = (function(source) {
  return this.kD(source);
});
$p.ae = (function() {
  return new $c_sci_VectorBuilder();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  hz: 1,
  a: 1,
  F: 1,
  Y: 1,
  aq: 1
}));
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$();
  }
  return $n_sci_Vector$;
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.P >= 6)) {
    a = $thiz.aU;
    var i = (($thiz.K >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.v(i, dest, 0, length);
    }
    var num = $thiz.K;
    var t = (((num >> 24) >>> 7) | 0);
    var newOffset = (((33554431 & ((num + t) | 0)) - t) | 0);
    $thiz.C = (($thiz.C - (($thiz.K - newOffset) | 0)) | 0);
    $thiz.K = newOffset;
    if (((($thiz.C >>> 25) | 0) === 0)) {
      $thiz.P = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.P >= 5)) {
    if ((a === null)) {
      a = $thiz.a3;
    }
    var i$2 = (31 & (($thiz.K >>> 20) | 0));
    if (($thiz.P === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.v(i$2, dest$1, 0, length$1);
      }
      $thiz.a3 = a;
      var num$1 = $thiz.K;
      var t$1 = (((num$1 >> 19) >>> 12) | 0);
      var newOffset$1 = (((1048575 & ((num$1 + t$1) | 0)) - t$1) | 0);
      $thiz.C = (($thiz.C - (($thiz.K - newOffset$1) | 0)) | 0);
      $thiz.K = newOffset$1;
      if (((($thiz.C >>> 20) | 0) === 0)) {
        $thiz.P = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().ag(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.P >= 4)) {
    if ((a === null)) {
      a = $thiz.U;
    }
    var i$3 = (31 & (($thiz.K >>> 15) | 0));
    if (($thiz.P === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.v(i$3, dest$2, 0, length$2);
      }
      $thiz.U = a;
      var num$2 = $thiz.K;
      var t$2 = (((num$2 >> 14) >>> 17) | 0);
      var newOffset$2 = (((32767 & ((num$2 + t$2) | 0)) - t$2) | 0);
      $thiz.C = (($thiz.C - (($thiz.K - newOffset$2) | 0)) | 0);
      $thiz.K = newOffset$2;
      if (((($thiz.C >>> 15) | 0) === 0)) {
        $thiz.P = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().ag(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.P >= 3)) {
    if ((a === null)) {
      a = $thiz.M;
    }
    var i$4 = (31 & (($thiz.K >>> 10) | 0));
    if (($thiz.P === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.v(i$4, dest$3, 0, length$3);
      }
      $thiz.M = a;
      var num$3 = $thiz.K;
      var t$3 = (((num$3 >> 9) >>> 22) | 0);
      var newOffset$3 = (((1023 & ((num$3 + t$3) | 0)) - t$3) | 0);
      $thiz.C = (($thiz.C - (($thiz.K - newOffset$3) | 0)) | 0);
      $thiz.K = newOffset$3;
      if (((($thiz.C >>> 10) | 0) === 0)) {
        $thiz.P = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().ag(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.P >= 2)) {
    if ((a === null)) {
      a = $thiz.H;
    }
    var i$5 = (31 & (($thiz.K >>> 5) | 0));
    if (($thiz.P === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.v(i$5, dest$4, 0, length$4);
      }
      $thiz.H = a;
      var num$4 = $thiz.K;
      var t$4 = (((num$4 >> 4) >>> 27) | 0);
      var newOffset$4 = (((31 & ((num$4 + t$4) | 0)) - t$4) | 0);
      $thiz.C = (($thiz.C - (($thiz.K - newOffset$4) | 0)) | 0);
      $thiz.K = newOffset$4;
      if (((($thiz.C >>> 5) | 0) === 0)) {
        $thiz.P = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().ag(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.P >= 1)) {
    if ((a === null)) {
      a = $thiz.Y;
    }
    var i$6 = (31 & $thiz.K);
    if (($thiz.P === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.v(i$6, dest$5, 0, length$5);
      }
      $thiz.Y = a;
      $thiz.N = (($thiz.N - $thiz.K) | 0);
      $thiz.K = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().ag(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hW = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.N === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.N) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.Y;
    var destPos = $thiz.N;
    data.v(0, dest, destPos, copy1);
    $thiz.N = (($thiz.N + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.Y;
      data.v(copy1, dest$1, 0, copy2);
      $thiz.N = (($thiz.N + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.N === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.C) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.C >>> 5) | 0));
      var dest = $thiz.H;
      slice.v(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.H;
        slice.v(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      var num = $thiz.C;
      var t = (((num >> 9) >>> 22) | 0);
      if (((((1023 & ((num + t) | 0)) - t) | 0) !== 0)) {
        var f = ((e$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3, 2);
        });
        var len = slice.a.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var x0 = slice.a[i];
            f(x0);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i < len)) {
            var x0$1 = slice.a[i];
            f(x0$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i < len)) {
            var x0$2 = slice.a[i];
            f(x0$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i < len)) {
            var $x_1 = slice.a;
            var $x_2 = (i << 1);
            var x0$3_$_lo = $x_1[$x_2];
            var x0$3_$_hi = $x_1[(($x_2 + 1) | 0)];
            f($bL(x0$3_$_lo, x0$3_$_hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i < len)) {
            var x0$4 = slice.a[i];
            f(x0$4);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i < len)) {
            var x0$5 = slice.a[i];
            f($bC(x0$5));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i < len)) {
            var x0$6 = slice.a[i];
            f(x0$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i < len)) {
            var x0$7 = slice.a[i];
            f(x0$7);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i < len)) {
            var x0$8 = slice.a[i];
            f(x0$8);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.C) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.C >>> 10) | 0));
      var dest$2 = $thiz.M;
      slice.v(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.M;
        slice.v(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      var num$1 = $thiz.C;
      var t$1 = (((num$1 >> 14) >>> 17) | 0);
      if (((((32767 & ((num$1 + t$1) | 0)) - t$1) | 0) !== 0)) {
        var f$1 = ((e$3$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$1, 3);
        });
        var len$1 = slice.a.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var x0$9 = slice.a[i$1];
            f$1(x0$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$1 < len$1)) {
            var x0$10 = slice.a[i$1];
            f$1(x0$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$1 < len$1)) {
            var x0$11 = slice.a[i$1];
            f$1(x0$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$1 < len$1)) {
            var $x_3 = slice.a;
            var $x_4 = (i$1 << 1);
            var x0$12_$_lo = $x_3[$x_4];
            var x0$12_$_hi = $x_3[(($x_4 + 1) | 0)];
            f$1($bL(x0$12_$_lo, x0$12_$_hi));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$1 < len$1)) {
            var x0$13 = slice.a[i$1];
            f$1(x0$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$1 < len$1)) {
            var x0$14 = slice.a[i$1];
            f$1($bC(x0$14));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$1 < len$1)) {
            var x0$15 = slice.a[i$1];
            f$1(x0$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$1 < len$1)) {
            var x0$16 = slice.a[i$1];
            f$1(x0$16);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$1 < len$1)) {
            var x0$17 = slice.a[i$1];
            f$1(x0$17);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.C) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.C >>> 15) | 0));
      var dest$4 = $thiz.U;
      slice.v(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.U;
        slice.v(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      var num$2 = $thiz.C;
      var t$2 = (((num$2 >> 19) >>> 12) | 0);
      if (((((1048575 & ((num$2 + t$2) | 0)) - t$2) | 0) !== 0)) {
        var f$2 = ((e$3$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$2, 4);
        });
        var len$2 = slice.a.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var x0$18 = slice.a[i$2];
            f$2(x0$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$2 < len$2)) {
            var x0$19 = slice.a[i$2];
            f$2(x0$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$2 < len$2)) {
            var x0$20 = slice.a[i$2];
            f$2(x0$20);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$2 < len$2)) {
            var $x_5 = slice.a;
            var $x_6 = (i$2 << 1);
            var x0$21_$_lo = $x_5[$x_6];
            var x0$21_$_hi = $x_5[(($x_6 + 1) | 0)];
            f$2($bL(x0$21_$_lo, x0$21_$_hi));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$2 < len$2)) {
            var x0$22 = slice.a[i$2];
            f$2(x0$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$2 < len$2)) {
            var x0$23 = slice.a[i$2];
            f$2($bC(x0$23));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$2 < len$2)) {
            var x0$24 = slice.a[i$2];
            f$2(x0$24);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$2 < len$2)) {
            var x0$25 = slice.a[i$2];
            f$2(x0$25);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$2 < len$2)) {
            var x0$26 = slice.a[i$2];
            f$2(x0$26);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.C) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.C >>> 20) | 0));
      var dest$6 = $thiz.a3;
      slice.v(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.a3;
        slice.v(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      var num$3 = $thiz.C;
      var t$3 = (((num$3 >> 24) >>> 7) | 0);
      if (((((33554431 & ((num$3 + t$3) | 0)) - t$3) | 0) !== 0)) {
        var f$3 = ((e$3$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$3, 5);
        });
        var len$3 = slice.a.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var x0$27 = slice.a[i$3];
            f$3(x0$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$3 < len$3)) {
            var x0$28 = slice.a[i$3];
            f$3(x0$28);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$3 < len$3)) {
            var x0$29 = slice.a[i$3];
            f$3(x0$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$3 < len$3)) {
            var $x_7 = slice.a;
            var $x_8 = (i$3 << 1);
            var x0$30_$_lo = $x_7[$x_8];
            var x0$30_$_hi = $x_7[(($x_8 + 1) | 0)];
            f$3($bL(x0$30_$_lo, x0$30_$_hi));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$3 < len$3)) {
            var x0$31 = slice.a[i$3];
            f$3(x0$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$3 < len$3)) {
            var x0$32 = slice.a[i$3];
            f$3($bC(x0$32));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$3 < len$3)) {
            var x0$33 = slice.a[i$3];
            f$3(x0$33);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$3 < len$3)) {
            var x0$34 = slice.a[i$3];
            f$3(x0$34);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$3 < len$3)) {
            var x0$35 = slice.a[i$3];
            f$3(x0$35);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.C >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aU;
      slice.v(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.dw();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.dv(sliceIdx);
    matchResult26: {
      var idx = sliceIdx;
      var c = (((sliceCount + ((sliceCount >>> 31) | 0)) | 0) >> 1);
      var a = ((idx - c) | 0);
      var sign = (a >> 31);
      var x37 = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
      if ((x37 === 1)) {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
        break matchResult26;
      }
      if ((($thiz.N === 32) || ($thiz.N === 0))) {
        $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x37);
        break matchResult26;
      }
      $m_sci_VectorStatics$().ky(((x37 - 2) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((data$3) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$3);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.C) | 0);
  var xor = (idx ^ $thiz.C);
  $thiz.C = idx;
  $thiz.N = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.C + n) | 0);
    var xor = (idx ^ $thiz.C);
    $thiz.C = idx;
    $thiz.N = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.Y) + ", a2=") + $thiz.H) + ", a3=") + $thiz.M) + ", a4=") + $thiz.U) + ", a5=") + $thiz.a3) + ", a6=") + $thiz.aU) + ", depth=") + $thiz.P));
  } else if ((xor < 1024)) {
    if (($thiz.P <= 1)) {
      $thiz.H = new ($d_O.r().r().C)(32);
      $thiz.H.a[0] = $thiz.Y;
      $thiz.P = 2;
    }
    $thiz.Y = new $ac_O(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.Y;
  } else if ((xor < 32768)) {
    if (($thiz.P <= 2)) {
      $thiz.M = new ($d_O.r().r().r().C)(32);
      $thiz.M.a[0] = $thiz.H;
      $thiz.P = 3;
    }
    $thiz.Y = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.Y;
    $thiz.M.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
  } else if ((xor < 1048576)) {
    if (($thiz.P <= 3)) {
      $thiz.U = new ($d_O.r().r().r().r().C)(32);
      $thiz.U.a[0] = $thiz.M;
      $thiz.P = 4;
    }
    $thiz.Y = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.M = new ($d_O.r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.Y;
    $thiz.M.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.U.a[(31 & ((idx >>> 15) | 0))] = $thiz.M;
  } else if ((xor < 33554432)) {
    if (($thiz.P <= 4)) {
      $thiz.a3 = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.a3.a[0] = $thiz.U;
      $thiz.P = 5;
    }
    $thiz.Y = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.M = new ($d_O.r().r().r().C)(32);
    $thiz.U = new ($d_O.r().r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.Y;
    $thiz.M.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.U.a[(31 & ((idx >>> 15) | 0))] = $thiz.M;
    $thiz.a3.a[(31 & ((idx >>> 20) | 0))] = $thiz.U;
  } else {
    if (($thiz.P <= 5)) {
      $thiz.aU = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aU.a[0] = $thiz.a3;
      $thiz.P = 6;
    }
    $thiz.Y = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.M = new ($d_O.r().r().r().C)(32);
    $thiz.U = new ($d_O.r().r().r().r().C)(32);
    $thiz.a3 = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.Y;
    $thiz.M.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.U.a[(31 & ((idx >>> 15) | 0))] = $thiz.M;
    $thiz.a3.a[(31 & ((idx >>> 20) | 0))] = $thiz.U;
    $thiz.aU.a[((idx >>> 25) | 0)] = $thiz.a3;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aU = null;
  this.a3 = null;
  this.U = null;
  this.M = null;
  this.H = null;
  this.Y = null;
  this.N = 0;
  this.C = 0;
  this.K = 0;
  this.hW = false;
  this.P = 0;
  this.Y = new $ac_O(32);
  this.N = 0;
  this.C = 0;
  this.K = 0;
  this.hW = false;
  this.P = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.b5 = (function(size) {
});
$p.tx = (function(v) {
  var x28 = v.dw();
  switch (x28) {
    case 0: {
      break;
    }
    case 1: {
      this.P = 1;
      var i = v.h.a.length;
      this.N = (31 & i);
      this.C = ((i - this.N) | 0);
      var a = v.h;
      this.Y = ((a.a.length === 32) ? a : $m_ju_Arrays$().ag(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bA;
      var a$1 = v.k;
      this.Y = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().ag(a$1, 0, 32));
      this.P = 2;
      this.K = ((32 - v.bT) | 0);
      var i$1 = ((v.m + this.K) | 0);
      this.N = (31 & i$1);
      this.C = ((i$1 - this.N) | 0);
      this.H = new ($d_O.r().r().C)(32);
      this.H.a[0] = v.h;
      var dest = this.H;
      var length = d2.a.length;
      d2.v(0, dest, 1, length);
      this.H.a[((1 + d2.a.length) | 0)] = this.Y;
      break;
    }
    case 5: {
      var d3 = v.bd;
      var s2 = v.be;
      var a$2 = v.k;
      this.Y = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().ag(a$2, 0, 32));
      this.P = 3;
      this.K = ((1024 - v.bs) | 0);
      var i$2 = ((v.m + this.K) | 0);
      this.N = (31 & i$2);
      this.C = ((i$2 - this.N) | 0);
      this.M = new ($d_O.r().r().r().C)(32);
      this.M.a[0] = $m_sci_VectorStatics$().dn(v.h, v.bL);
      var dest$1 = this.M;
      var length$1 = d3.a.length;
      d3.v(0, dest$1, 1, length$1);
      this.H = $m_ju_Arrays$().W(s2, 32);
      this.M.a[((1 + d3.a.length) | 0)] = this.H;
      this.H.a[s2.a.length] = this.Y;
      break;
    }
    case 7: {
      var d4 = v.aM;
      var s3 = v.aO;
      var s2$2 = v.aN;
      var a$3 = v.k;
      this.Y = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().ag(a$3, 0, 32));
      this.P = 4;
      this.K = ((32768 - v.b3) | 0);
      var i$3 = ((v.m + this.K) | 0);
      this.N = (31 & i$3);
      this.C = ((i$3 - this.N) | 0);
      this.U = new ($d_O.r().r().r().r().C)(32);
      this.U.a[0] = $m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn(v.h, v.bk), v.bl);
      var dest$2 = this.U;
      var length$2 = d4.a.length;
      d4.v(0, dest$2, 1, length$2);
      this.M = $m_ju_Arrays$().W(s3, 32);
      this.H = $m_ju_Arrays$().W(s2$2, 32);
      this.U.a[((1 + d4.a.length) | 0)] = this.M;
      this.M.a[s3.a.length] = this.H;
      this.H.a[s2$2.a.length] = this.Y;
      break;
    }
    case 9: {
      var d5 = v.ai;
      var s4 = v.al;
      var s3$2 = v.ak;
      var s2$3 = v.aj;
      var a$4 = v.k;
      this.Y = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().ag(a$4, 0, 32));
      this.P = 5;
      this.K = ((1048576 - v.aF) | 0);
      var i$4 = ((v.m + this.K) | 0);
      this.N = (31 & i$4);
      this.C = ((i$4 - this.N) | 0);
      this.a3 = new ($d_O.r().r().r().r().r().C)(32);
      this.a3.a[0] = $m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn(v.h, v.aR), v.aS), v.aT);
      var dest$3 = this.a3;
      var length$3 = d5.a.length;
      d5.v(0, dest$3, 1, length$3);
      this.U = $m_ju_Arrays$().W(s4, 32);
      this.M = $m_ju_Arrays$().W(s3$2, 32);
      this.H = $m_ju_Arrays$().W(s2$3, 32);
      this.a3.a[((1 + d5.a.length) | 0)] = this.U;
      this.U.a[s4.a.length] = this.M;
      this.M.a[s3$2.a.length] = this.H;
      this.H.a[s2$3.a.length] = this.Y;
      break;
    }
    case 11: {
      var d6 = v.a7;
      var s5 = v.ab;
      var s4$2 = v.aa;
      var s3$3 = v.a9;
      var s2$4 = v.a8;
      var a$5 = v.k;
      this.Y = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().ag(a$5, 0, 32));
      this.P = 6;
      this.K = ((33554432 - v.ax) | 0);
      var i$5 = ((v.m + this.K) | 0);
      this.N = (31 & i$5);
      this.C = ((i$5 - this.N) | 0);
      this.aU = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aU.a[0] = $m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn(v.h, v.aG), v.aH), v.aI), v.aJ);
      var dest$4 = this.aU;
      var length$4 = d6.a.length;
      d6.v(0, dest$4, 1, length$4);
      this.a3 = $m_ju_Arrays$().W(s5, 32);
      this.U = $m_ju_Arrays$().W(s4$2, 32);
      this.M = $m_ju_Arrays$().W(s3$3, 32);
      this.H = $m_ju_Arrays$().W(s2$4, 32);
      this.aU.a[((1 + d6.a.length) | 0)] = this.a3;
      this.a3.a[s5.a.length] = this.U;
      this.U.a[s4$2.a.length] = this.M;
      this.M.a[s3$3.a.length] = this.H;
      this.H.a[s2$4.a.length] = this.Y;
      break;
    }
    default: {
      throw new $c_s_MatchError(x28);
    }
  }
  if (((this.N === 0) && (this.C > 0))) {
    this.N = 32;
    this.C = ((this.C - 32) | 0);
  }
  return this;
});
$p.s2 = (function(elem) {
  if ((this.N === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.Y.a[this.N] = elem;
  this.N = ((1 + this.N) | 0);
  return this;
});
$p.pi = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.N === 0) && (this.C === 0)) && (!this.hW)) ? this.tx(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.qI = (function() {
  if (this.hW) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.N + this.C) | 0);
  var realLen = ((len - this.K) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.Y;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().W(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & ((len - 1) | 0));
    var i2 = ((((len - 1) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().ag(this.H, 1, i2);
    var prefix1 = this.H.a[0];
    var a$1 = this.H.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().W(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.K) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & ((len - 1) | 0));
    var i2$2 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3 = ((((len - 1) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().ag(this.M, 1, i3);
    var a$2 = this.M.a[0];
    var prefix2 = $m_ju_Arrays$().ag(a$2, 1, a$2.a.length);
    var prefix1$2 = this.M.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().W(this.M.a[i3], i2$2);
    var a$3 = this.M.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().W(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & ((len - 1) | 0));
    var i2$3 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$2 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4 = ((((len - 1) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().ag(this.U, 1, i4);
    var a$4 = this.U.a[0];
    var prefix3 = $m_ju_Arrays$().ag(a$4, 1, a$4.a.length);
    var a$5 = this.U.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().ag(a$5, 1, a$5.a.length);
    var prefix1$3 = this.U.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().W(this.U.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().W(this.U.a[i4].a[i3$2], i2$3);
    var a$6 = this.U.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().W(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & ((len - 1) | 0));
    var i2$4 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$3 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$2 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5 = ((((len - 1) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().ag(this.a3, 1, i5);
    var a$7 = this.a3.a[0];
    var prefix4 = $m_ju_Arrays$().ag(a$7, 1, a$7.a.length);
    var a$8 = this.a3.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().ag(a$8, 1, a$8.a.length);
    var a$9 = this.a3.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().ag(a$9, 1, a$9.a.length);
    var prefix1$4 = this.a3.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().W(this.a3.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().W(this.a3.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().W(this.a3.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.a3.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().W(a$10, len$4));
    var len1$3 = prefix1$4.a.length;
    var len12$3 = ((len1$3 + (prefix2$3.a.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.a.length << 10)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.a.length << 15)) | 0), data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & ((len - 1) | 0));
    var i2$5 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$4 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$3 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5$2 = (31 & ((((len - 1) | 0) >>> 20) | 0));
    var i6 = ((((len - 1) | 0) >>> 25) | 0);
    var data$5 = $m_ju_Arrays$().ag(this.aU, 1, i6);
    var a$11 = this.aU.a[0];
    var prefix5 = $m_ju_Arrays$().ag(a$11, 1, a$11.a.length);
    var a$12 = this.aU.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().ag(a$12, 1, a$12.a.length);
    var a$13 = this.aU.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().ag(a$13, 1, a$13.a.length);
    var a$14 = this.aU.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().ag(a$14, 1, a$14.a.length);
    var prefix1$5 = this.aU.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().W(this.aU.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().W(this.aU.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().W(this.aU.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().W(this.aU.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.aU.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().W(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.u = (function() {
  return (((((((("VectorBuilder(len1=" + this.N) + ", lenRest=") + this.C) + ", offset=") + this.K) + ", depth=") + this.P) + ")");
});
$p.ac = (function(elem) {
  return this.s2(elem);
});
$p.aW = (function(elems) {
  return this.pi(elems);
});
$p.af = (function() {
  return this.qI();
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  hH: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.oM = null;
  $n_scm_ArrayBuffer$ = this;
  this.oM = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.dZ = (function(elems) {
  return this.q2(elems);
});
$p.q2 = (function(coll) {
  var k = coll.s();
  if ((k >= 0)) {
    var array = this.qN(this.oM, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bm(array, 0, 2147483647) : coll.d().bm(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).ke(coll);
  }
});
$p.ae = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.uz = (function(arrayLen, targetLen) {
  if ((targetLen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen) + "; current length: ") + arrayLen) + "; increase: ") + ((targetLen - arrayLen) | 0)));
  } else if ((targetLen <= arrayLen)) {
    return (-1);
  } else if ((targetLen > 2147483639)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen) + "; current length: ") + arrayLen));
  } else if ((arrayLen > 1073741819)) {
    return 2147483639;
  } else {
    var x = (arrayLen << 1);
    var y = ((x > 16) ? x : 16);
    return ((targetLen > y) ? targetLen : y);
  }
});
$p.qN = (function(array, curSize, targetSize) {
  var newLen = this.uz(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.v(0, res, 0, curSize);
    return res;
  }
});
$p.a5 = (function(source) {
  return this.q2(source);
});
$p.bP = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  hN: 1,
  a: 1,
  F: 1,
  Y: 1,
  aq: 1
}));
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$();
  }
  return $n_scm_ArrayBuffer$;
}
/** @constructor */
function $c_scm_ArrayBuffer$$anon$1() {
  this.ep = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.b5 = (function(size) {
  this.ep.b5(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  hO: 1,
  ba: 1,
  H: 1,
  J: 1,
  N: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.dF = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  hU: 1,
  aL: 1,
  a: 1,
  F: 1,
  Y: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
function $ct_scm_HashMap$HashMapIterator__scm_HashMap__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.fO = outer;
  $thiz.dT = 0;
  $thiz.dk = null;
  $thiz.fP = outer.Q.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashMap$HashMapIterator() {
  this.dT = 0;
  this.dk = null;
  this.fP = 0;
  this.fO = null;
}
$p = $c_scm_HashMap$HashMapIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashMap$HashMapIterator;
/** @constructor */
function $h_scm_HashMap$HashMapIterator() {
}
$h_scm_HashMap$HashMapIterator.prototype = $p;
$p.j = (function() {
  if ((this.dk !== null)) {
    return true;
  } else {
    while ((this.dT < this.fP)) {
      var n = this.fO.Q.a[this.dT];
      this.dT = ((1 + this.dT) | 0);
      if ((n !== null)) {
        this.dk = n;
        return true;
      }
    }
    return false;
  }
});
$p.f = (function() {
  if ((!this.j())) {
    return $m_sc_Iterator$().J.f();
  } else {
    var x$proxy14 = this.dk;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().cF();
    }
    var r = this.ij(x$proxy14);
    var x$proxy15 = this.dk;
    if ((x$proxy15 === null)) {
      $m_sr_Scala3RunTime$().cF();
    }
    this.dk = x$proxy15.aV;
    return r;
  }
});
/** @constructor */
function $c_scm_HashSet$$anon$4(initialCapacity$1, loadFactor$1) {
  this.ep = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.b5 = (function(size) {
  this.ep.b5(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  ia: 1,
  ba: 1,
  H: 1,
  J: 1,
  N: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.gO = outer;
  $thiz.es = 0;
  $thiz.dU = null;
  $thiz.gP = outer.bf.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.es = 0;
  this.dU = null;
  this.gP = 0;
  this.gO = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.j = (function() {
  if ((this.dU !== null)) {
    return true;
  } else {
    while ((this.es < this.gP)) {
      var n = this.gO.bf.a[this.es];
      this.es = ((1 + this.es) | 0);
      if ((n !== null)) {
        this.dU = n;
        return true;
      }
    }
    return false;
  }
});
$p.f = (function() {
  if ((!this.j())) {
    return $m_sc_Iterator$().J.f();
  } else {
    var x$proxy10 = this.dU;
    if ((x$proxy10 === null)) {
      $m_sr_Scala3RunTime$().cF();
    }
    var r = this.kx(x$proxy10);
    var x$proxy11 = this.dU;
    if ((x$proxy11 === null)) {
      $m_sr_Scala3RunTime$().cF();
    }
    this.dU = x$proxy11.bg;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.gQ = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.gQ = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.aW = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b5 = (function(size) {
});
$p.af = (function() {
  return this.gQ;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.dF = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  id: 1,
  aL: 1,
  a: 1,
  F: 1,
  Y: 1
}));
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$();
  }
  return $n_scm_IndexedSeq$;
}
/** @constructor */
function $c_scm_ListBuffer$() {
}
$p = $c_scm_ListBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
}
$h_scm_ListBuffer$.prototype = $p;
$p.dZ = (function(elems) {
  return new $c_scm_ListBuffer().iD(elems);
});
$p.ae = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.a5 = (function(source) {
  return new $c_scm_ListBuffer().iD(source);
});
$p.bP = (function() {
  return new $c_scm_ListBuffer();
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  ii: 1,
  a: 1,
  F: 1,
  Y: 1,
  aq: 1
}));
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$();
  }
  return $n_scm_ListBuffer$;
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.k4 = null;
  this.oW = null;
  this.oV = 0;
  this.k4 = underlying;
  this.oW = mutationCount;
  this.oV = (mutationCount.I() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.j = (function() {
  $m_scm_MutationTracker$().kj(this.oV, (this.oW.I() | 0), "mutation occurred during iteration");
  return this.k4.j();
});
$p.f = (function() {
  return this.k4.f();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  im: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
function $f_s_math_Ordering__lteq__O__O__Z($thiz, x, y) {
  return ($thiz.Z(x, y) <= 0);
}
function $f_s_math_Ordering__gteq__O__O__Z($thiz, x, y) {
  return ($thiz.Z(x, y) >= 0);
}
function $f_s_math_Ordering__max__O__O__O($thiz, x, y) {
  return ($thiz.cW(x, y) ? x : y);
}
function $f_s_math_Ordering__min__O__O__O($thiz, x, y) {
  return ($thiz.cZ(x, y) ? x : y);
}
function $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z($thiz, other) {
  if ((other instanceof $c_s_math_Ordering$Reverse)) {
    var x = other.cP;
    return ((x !== null) && x.p($thiz));
  } else {
    return false;
  }
}
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.aK();
    var x$3 = x.aK();
    return ((x$2 === null) ? (x$3 === null) : (x$2 === x$3));
  } else {
    return false;
  }
}
function $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz) {
  return (clazz.y.Z ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.y.Q())) + "]") : clazz.y.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.L)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.L)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.p4 = null;
  this.gS = 0;
  this.p3 = 0;
  this.p4 = x$1;
  this.gS = 0;
  this.p3 = x$1.bv();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.j = (function() {
  return (this.gS < this.p3);
});
$p.f = (function() {
  var result = this.p4.bw(this.gS);
  this.gS = ((1 + this.gS) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  jt: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$p = $c_sjs_js_WrappedArray$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $p;
$p.dZ = (function(elems) {
  return this.q3(elems);
});
$p.ae = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.q3 = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).af();
});
$p.a5 = (function(source) {
  return this.q3(source);
});
$p.bP = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  jA: 1,
  aq: 1,
  a: 1,
  F: 1,
  Y: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
}
$p = $c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
}
$h_sjsr_WrappedVarArgs$.prototype = $p;
$p.dZ = (function(elems) {
  return this.kE(elems);
});
$p.kE = (function(source) {
  return this.ae().aW(source).af();
});
$p.ae = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), x$1$2$2.et))), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []));
});
$p.a5 = (function(source) {
  return this.kE(source);
});
$p.bP = (function() {
  return $ct_sjsr_WrappedVarArgs__(new $c_sjsr_WrappedVarArgs());
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  jN: 1,
  aq: 1,
  a: 1,
  F: 1,
  Y: 1
}));
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$();
  }
  return $n_sjsr_WrappedVarArgs$;
}
/** @constructor */
function $c_s_util_Failure(exception) {
  this.fa = null;
  this.fa = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().fg(this, (-1408943127), true);
});
$p.p = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_s_util_Failure)) {
    var x = this.fa;
    var x$2 = x$0.fa;
    return ((x === null) ? (x$2 === null) : x.p(x$2));
  } else {
    return false;
  }
});
$p.u = (function() {
  return $m_sr_ScalaRunTime$().kb(this);
});
$p.bv = (function() {
  return 1;
});
$p.bx = (function() {
  return "Failure";
});
$p.bw = (function(n) {
  if ((n === 0)) {
    return this.fa;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.qc = (function() {
  return true;
});
$p.qd = (function() {
  return false;
});
$p.A = (function() {
  var $x_1 = this.fa;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.a0 : $x_1);
});
$p.kQ = (function(f) {
  return this;
});
$p.qE = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.bV(this.fa, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x18 = $m_s_util_control_NonFatal$().e3(e$2);
    if ((!x18.c())) {
      return new $c_s_util_Failure(x18.A());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
  }
});
$p.ce = (function(fa, fb) {
  return fa.e(this.fa);
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cK)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  cK: 1,
  cM: 1,
  d: 1,
  P: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.fb = null;
  this.fb = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().fg(this, (-1750213842), true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().l(this.fb, x$0.fb)));
});
$p.u = (function() {
  return $m_sr_ScalaRunTime$().kb(this);
});
$p.bv = (function() {
  return 1;
});
$p.bx = (function() {
  return "Success";
});
$p.bw = (function(n) {
  if ((n === 0)) {
    return this.fb;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.qc = (function() {
  return false;
});
$p.qd = (function() {
  return true;
});
$p.A = (function() {
  return this.fb;
});
$p.kQ = (function(f) {
  try {
    return new $c_s_util_Success(f.e(this.fb));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x2 = $m_s_util_control_NonFatal$().e3(e$2);
    if ((!x2.c())) {
      return new $c_s_util_Failure(x2.A());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
  }
});
$p.qE = (function(pf) {
  return this;
});
$p.ce = (function(fa, fb) {
  try {
    return fb.e(this.fb);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x42 = $m_s_util_control_NonFatal$().e3(e$2);
    if ((!x42.c())) {
      var x43 = x42.A();
      return fa.e(x43);
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
  }
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cL)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  cL: 1,
  cM: 1,
  d: 1,
  P: 1,
  a: 1
}));
class $c_s_util_boundary$Break extends $c_jl_RuntimeException {
  constructor(label, value) {
    super();
    this.pb = null;
    this.rN = null;
    this.pb = label;
    this.rN = value;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, false, false);
  }
  tJ(other) {
    return (this.pb === other);
  }
}
function $isArrayOf_s_util_boundary$Break(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cN)));
}
var $d_s_util_boundary$Break = new $TypeData().i($c_s_util_boundary$Break, "scala.util.boundary$Break", ({
  cN: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_boundary$Label() {
}
$p = $c_s_util_boundary$Label.prototype = new $h_O();
$p.constructor = $c_s_util_boundary$Label;
/** @constructor */
function $h_s_util_boundary$Label() {
}
$h_s_util_boundary$Label.prototype = $p;
var $d_s_util_boundary$Label = new $TypeData().i($c_s_util_boundary$Label, "scala.util.boundary$Label", ({
  jS: 1,
  gb: 1,
  gc: 1,
  ge: 1,
  gd: 1
}));
/** @constructor */
function $c_Lscorry_SummaryStatistics$$anon$1(maxCount$2) {
  this.k6 = 0;
  this.k6 = maxCount$2;
}
$p = $c_Lscorry_SummaryStatistics$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lscorry_SummaryStatistics$$anon$1;
/** @constructor */
function $h_Lscorry_SummaryStatistics$$anon$1() {
}
$h_Lscorry_SummaryStatistics$$anon$1.prototype = $p;
$p.tG = (function(x) {
  if ((x !== null)) {
    if (((x.O | 0) === this.k6)) {
      return true;
    }
  }
  return false;
});
$p.si = (function(x, default$1) {
  if ((x !== null)) {
    var v = (+x.R);
    if (((x.O | 0) === this.k6)) {
      return v;
    }
  }
  return default$1.e(x);
});
$p.cf = (function(x) {
  return this.tG(x);
});
$p.bV = (function(x, default$1) {
  return this.si(x, default$1);
});
var $d_Lscorry_SummaryStatistics$$anon$1 = new $TypeData().i($c_Lscorry_SummaryStatistics$$anon$1, "scorry.SummaryStatistics$$anon$1", ({
  k1: 1,
  aQ: 1,
  i: 1,
  j: 1,
  a: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.gj = null;
    this.gi = null;
    this.gj = error;
    this.gi = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().g0(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().g0(cause)), null, true, true);
    this.qa(cause);
  }
  cG() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().ki(this, (-889275714), null);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.gj;
      var x$2 = x$0.gj;
      if (((x === null) ? (x$2 === null) : x.p(x$2))) {
        var x$3 = this.gi;
        var x$4 = x$0.gi;
        return ((x$3 === null) ? (x$4 === null) : x$3.p(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bv() {
    return 2;
  }
  bx() {
    return "ErrorHandlingError";
  }
  bw(n) {
    if ((n === 0)) {
      return this.gj;
    }
    if ((n === 1)) {
      return this.gi;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  u() {
    return ((("ErrorHandlingError: " + this.gj) + "; cause: ") + this.gi);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bf)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  bf: 1,
  aH: 1,
  q: 1,
  a: 1,
  d: 1,
  P: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.gk = null;
    this.gk = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().g0(error)), null, true, true);
  }
  cG() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().ki(this, (-889275714), null);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.gk;
      var x$2 = x$0.gk;
      return ((x === null) ? (x$2 === null) : x.p(x$2));
    } else {
      return false;
    }
  }
  bv() {
    return 1;
  }
  bx() {
    return "ObserverError";
  }
  bw(n) {
    if ((n === 0)) {
      return this.gk;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  u() {
    return ("ObserverError: " + this.gk);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bg)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  bg: 1,
  aH: 1,
  q: 1,
  a: 1,
  d: 1,
  P: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.gm = null;
    this.gl = null;
    this.gm = error;
    this.gl = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().g0(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().g0(cause)), null, true, true);
    this.qa(cause);
  }
  cG() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().ki(this, (-889275714), null);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.gm;
      var x$2 = x$0.gm;
      if (((x === null) ? (x$2 === null) : x.p(x$2))) {
        var x$3 = this.gl;
        var x$4 = x$0.gl;
        return ((x$3 === null) ? (x$4 === null) : x$3.p(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bv() {
    return 2;
  }
  bx() {
    return "ObserverErrorHandlingError";
  }
  bw(n) {
    if ((n === 0)) {
      return this.gm;
    }
    if ((n === 1)) {
      return this.gl;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  u() {
    return ((("ObserverErrorHandlingError: " + this.gm) + "; cause: ") + this.gl);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bh)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bh: 1,
  aH: 1,
  q: 1,
  a: 1,
  d: 1,
  P: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.fo = null;
    this.fn = 0;
    this.fo = trx;
    this.fn = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  cG() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().B(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().B(acc, $m_sr_Statics$().E(this.fo));
    acc = $m_sr_Statics$().B(acc, this.fn);
    return $m_sr_Statics$().aX(acc, 2);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.fn === x$0.fn)) {
        var x = this.fo;
        var x$2 = x$0.fo;
        return ((x === null) ? (x$2 === null) : (x === x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bv() {
    return 2;
  }
  bx() {
    return "TransactionDepthExceeded";
  }
  bw(n) {
    if ((n === 0)) {
      return this.fo;
    }
    if ((n === 1)) {
      return this.fn;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  u() {
    return ((("TransactionDepthExceeded: " + this.fo) + "; maxDepth: ") + this.fn);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bi)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bi: 1,
  aH: 1,
  q: 1,
  a: 1,
  d: 1,
  P: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.l9();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.ls = 1;
  $thiz.hx = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.hx = ((1 + $thiz.hx) | 0);
  $thiz.hw.lm.I();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.hw.lk.I(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchResult1: {
      var $x_1;
      var x2 = $m_s_util_control_NonFatal$().e3(e$2);
      if ((!x2.c())) {
        var $x_1 = new $c_s_util_Failure(x2.A());
        break matchResult1;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
    }
  }
  $x_1.qE(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.hw.ll.I();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.m0 = null;
  this.iX = null;
  this.iW = null;
  this.iV = null;
  this.eN = null;
  this.m0 = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.iW = initial;
  this.iV = new $c_Lcom_raquo_airstream_state_VarSignal(this.iW, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.eN = this.iV;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.eD = (function() {
  return this.m0;
});
$p.ex = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.uI = (function(value, transaction) {
  this.iW = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.iV, value, transaction);
});
$p.fh = (function() {
  return this.eN;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  de: 1,
  ao: 1,
  aU: 1,
  aJ: 1,
  ab: 1,
  dg: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$31(key$31) {
  this.eR = null;
  this.eS = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$31, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$31.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$31;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$31() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$31.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$31 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$31, "com.raquo.laminar.defs.styles.StyleProps$$anon$31", ({
  dN: 1,
  ay: 1,
  a3: 1,
  aw: 1,
  ax: 1,
  dS: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(tag, ref) {
  this.jh = null;
  this.nt = null;
  this.ns = null;
  this.nr = null;
  this.nq = null;
  this.nu = null;
  this.d4 = null;
  this.nu = tag;
  this.d4 = ref;
  this.jh = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.fT = (function() {
  return this.jh;
});
$p.py = (function(x$1) {
  this.jh = x$1;
});
$p.cR = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fR(parentNode, this, (void 0));
});
$p.cd = (function() {
  return this.nt;
});
$p.kk = (function(x$0) {
  this.nt = x$0;
});
$p.kn = (function() {
  return this.ns;
});
$p.fU = (function() {
  return this.nr;
});
$p.ie = (function() {
  return this.nq;
});
$p.km = (function(x$1) {
  this.nr = x$1;
});
$p.kl = (function(x$1) {
  this.nq = x$1;
});
$p.pz = (function(x$0) {
  this.ns = x$0;
});
$p.eJ = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.eF = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.u = (function() {
  return (("ReactiveHtmlElement(" + ((this.d4 !== null) ? this.d4.outerHTML : ("tag=" + this.nu.jm))) + ")");
});
$p.L = (function() {
  return this.d4;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  eC: 1,
  az: 1,
  a4: 1,
  aK: 1,
  aW: 1,
  bs: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(tag, ref) {
  this.ji = null;
  this.ny = null;
  this.nx = null;
  this.nw = null;
  this.nv = null;
  this.nz = null;
  this.e8 = null;
  this.nz = tag;
  this.e8 = ref;
  this.ji = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveSvgElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = $p;
$p.fT = (function() {
  return this.ji;
});
$p.py = (function(x$1) {
  this.ji = x$1;
});
$p.cR = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fR(parentNode, this, (void 0));
});
$p.cd = (function() {
  return this.ny;
});
$p.kk = (function(x$0) {
  this.ny = x$0;
});
$p.kn = (function() {
  return this.nx;
});
$p.fU = (function() {
  return this.nw;
});
$p.ie = (function() {
  return this.nv;
});
$p.km = (function(x$1) {
  this.nw = x$1;
});
$p.kl = (function(x$1) {
  this.nv = x$1;
});
$p.pz = (function(x$0) {
  this.nx = x$0;
});
$p.eJ = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.eF = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.u = (function() {
  return (("ReactiveSvgElement(" + ((this.e8 !== null) ? this.e8.outerHTML : ("tag=" + this.nz.jn))) + ")");
});
$p.L = (function() {
  return this.e8;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveSvgElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveSvgElement, "com.raquo.laminar.nodes.ReactiveSvgElement", ({
  eD: 1,
  az: 1,
  a4: 1,
  aK: 1,
  aW: 1,
  bs: 1
}));
function $ct_jl_ArrayIndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_ArrayIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().i($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  eQ: 1,
  bx: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Double__compareTo__O__I($thiz, o) {
  return $m_jl_Double$().ig($thiz, o);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bv)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bv: 1,
  aj: 1,
  a: 1,
  ac: 1,
  a5: 1,
  aA: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Float__compareTo__O__I($thiz, o) {
  return $m_jl_Double$().ig($thiz, o);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  f0: 1,
  aj: 1,
  a: 1,
  ac: 1,
  a5: 1,
  aA: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Integer__compareTo__O__I($thiz, o) {
  return (($thiz === o) ? 0 : (($thiz < o) ? (-1) : 1));
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.by)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  by: 1,
  aj: 1,
  a: 1,
  ac: 1,
  a5: 1,
  aA: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, $thizhi, that) {
  if ((that instanceof $Long)) {
    var $x_1 = that;
    var this$1_$_lo = $x_1.l;
    var this$1_$_hi = $x_1.h;
    return ((($thiz ^ this$1_$_lo) | ($thizhi ^ this$1_$_hi)) === 0);
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().l7($thiz, $thizhi);
}
function $f_jl_Long__compareTo__O__I($thiz, $thizhi, o) {
  var $x_1 = o;
  var this$1_$_lo = $x_1.l;
  var this$1_$_hi = $x_1.h;
  return (($thizhi === this$1_$_hi) ? (($thiz === this$1_$_lo) ? 0 : ((($thiz >>> 0) < (this$1_$_lo >>> 0)) ? (-1) : 1)) : (($thizhi < this$1_$_hi) ? (-1) : 1));
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bz)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bz: 1,
  aj: 1,
  a: 1,
  ac: 1,
  a5: 1,
  aA: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
function $isArrayOf_jl_NumberFormatException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bA)));
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  bA: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $f_T__codePointAt__I__I($thiz, index) {
  return ($thiz.codePointAt(index) | 0);
}
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__compareTo__T__I($thiz, anotherString) {
  var thisLength = $thiz.length;
  var strLength = anotherString.length;
  var minLength = ((thisLength < strLength) ? thisLength : strLength);
  var i = 0;
  while ((i !== minLength)) {
    var cmp = (($thiz.charCodeAt(i) - anotherString.charCodeAt(i)) | 0);
    if ((cmp !== 0)) {
      return cmp;
    }
    i = ((1 + i) | 0);
  }
  return ((thisLength - strLength) | 0);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().l8(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $thiz.repeat(count);
  }
}
function $f_T__split__T__I__AT($thiz, regex, limit) {
  return $m_ju_regex_PatternCompiler$().sx(regex, 0).tO($thiz, limit);
}
function $f_T__trim__T($thiz) {
  var len = $thiz.length;
  var start = 0;
  while (((start !== len) && ($thiz.charCodeAt(start) <= 32))) {
    start = ((1 + start) | 0);
  }
  if ((start === len)) {
    return "";
  } else {
    var end = len;
    while (($thiz.charCodeAt(((end - 1) | 0)) <= 32)) {
      end = ((end - 1) | 0);
    }
    if (((start | (end ^ len)) === 0)) {
      return $thiz;
    } else {
      var beginIndex = start;
      var endIndex = end;
      return $thiz.substring(beginIndex, endIndex);
    }
  }
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
function $f_T__compareTo__O__I($thiz, o) {
  return $f_T__compareTo__T__I($thiz, o);
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bC: 1,
  a: 1,
  ac: 1,
  aX: 1,
  a5: 1,
  aA: 1
}), ((x) => ((typeof x) === "string")));
class $c_ju_FormatterClosedException extends $c_jl_IllegalStateException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_ju_FormatterClosedException = new $TypeData().i($c_ju_FormatterClosedException, "java.util.FormatterClosedException", ({
  fv: 1,
  bw: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatException extends $c_jl_IllegalArgumentException {
}
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.o9 = null;
    this.ob = null;
    this.oa = 0;
    this.o9 = desc;
    this.ob = regex;
    this.oa = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    var idx = this.oa;
    var re = this.ob;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.o9 + indexHint) + "\n") + re);
    return ((((idx >= 0) && (re !== null)) && (idx < re.length)) ? (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^") : base);
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().i($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  fV: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
/** @constructor */
function $c_s_None$() {
}
$p = $c_s_None$.prototype = new $h_s_Option();
$p.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $p;
$p.x = (function() {
  return 2433880;
});
$p.u = (function() {
  return "None";
});
$p.bv = (function() {
  return 0;
});
$p.bx = (function() {
  return "None";
});
$p.bw = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.tj = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.A = (function() {
  this.tj();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  g3: 1,
  bG: 1,
  b: 1,
  d: 1,
  P: 1,
  a: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.dB = null;
  this.dB = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().fg(this, 1323286827, true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().l(this.dB, x$0.dB)));
});
$p.u = (function() {
  return $m_sr_ScalaRunTime$().kb(this);
});
$p.bv = (function() {
  return 1;
});
$p.bx = (function() {
  return "Some";
});
$p.bw = (function(n) {
  if ((n === 0)) {
    return this.dB;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.A = (function() {
  return this.dB;
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bH)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bH: 1,
  bG: 1,
  b: 1,
  d: 1,
  P: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.s = (function() {
  return (-1);
});
$p.bW = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.fX = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.dq = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.du = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.c = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.bm = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.cH = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.ix = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord);
});
$p.iw = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord);
});
$p.cQ = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.gf = (function() {
  return $m_sci_Seq$().fZ(this);
});
$p.ch = (function() {
  return $f_sc_IterableOnceOps__reversed__sc_Iterable(this);
});
$p.q = (function() {
  return this.d().f();
});
$p.z = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f);
});
$p.h9 = (function(coll) {
  return this.at().a5(coll);
});
$p.dt = (function() {
  return this.at().ae();
});
$p.bC = (function() {
  return this.b8();
});
$p.fe = (function(coll) {
  return this.h9(coll);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.hN = null;
  this.dC = 0;
  this.gt = 0;
  this.hN = xs;
  this.dC = 0;
  this.gt = $m_jl_reflect_Array$().aP(this.hN);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.s = (function() {
  return ((this.gt - this.dC) | 0);
});
$p.j = (function() {
  return (this.dC < this.gt);
});
$p.f = (function() {
  if ((this.dC >= $m_jl_reflect_Array$().aP(this.hN))) {
    $m_sc_Iterator$().J.f();
  }
  var r = $m_sr_ScalaRunTime$().ar(this.hN, this.dC);
  this.dC = ((1 + this.dC) | 0);
  return r;
});
$p.e1 = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.dC + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.gt;
    } else {
      var a = this.gt;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.dC = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  gi: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.jH = self;
  $thiz.dD = 0;
  $thiz.bz = self.i();
  return $thiz;
}
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bz) ? $thiz.bz : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.jH = null;
  this.dD = 0;
  this.bz = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.s = (function() {
  return this.bz;
});
$p.j = (function() {
  return (this.bz > 0);
});
$p.f = (function() {
  if ((this.bz > 0)) {
    var r = this.jH.o(this.dD);
    this.dD = ((1 + this.dD) | 0);
    this.bz = ((this.bz - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
$p.e1 = (function(n) {
  if ((n > 0)) {
    this.dD = ((this.dD + n) | 0);
    var b = ((this.bz - n) | 0);
    this.bz = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gc = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bz = ((b < 0) ? 0 : b);
  this.dD = ((this.dD + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bP: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.jI = self;
  $thiz.bi = self.i();
  $thiz.eY = (($thiz.bi - 1) | 0);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
  this.jI = null;
  this.bi = 0;
  this.eY = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.j = (function() {
  return (this.bi > 0);
});
$p.f = (function() {
  if ((this.bi > 0)) {
    var r = this.jI.o(this.eY);
    this.eY = ((this.eY - 1) | 0);
    this.bi = ((this.bi - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
$p.gc = (function(from, until) {
  if ((this.bi > 0)) {
    if ((this.bi <= from)) {
      this.bi = 0;
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.bi))) {
        this.bi = until;
      }
    } else {
      this.eY = ((this.eY - from) | 0);
      if (((until >= 0) && (until < this.bi))) {
        if ((until <= from)) {
          this.bi = 0;
        } else {
          this.bi = ((until - from) | 0);
        }
      } else {
        this.bi = ((this.bi - from) | 0);
      }
    }
  }
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewReverseIterator, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", ({
  bQ: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.gQ = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().J);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.s0 = (function(elem) {
  this.gQ = this.gQ.h6(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.ac = (function(elem) {
  return this.s0(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  gw: 1,
  ic: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$7(pf$2, outer) {
  this.ol = null;
  this.ok = null;
  this.fD = 0;
  this.jJ = null;
  this.ol = pf$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jJ = outer;
  this.fD = 0;
}
$p = $c_sc_Iterator$$anon$7.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$7;
/** @constructor */
function $h_sc_Iterator$$anon$7() {
}
$h_sc_Iterator$$anon$7.prototype = $p;
$p.u = (function() {
  return "<function1>";
});
$p.e = (function(value) {
  return $m_sr_Statics$PFMarker$();
});
$p.j = (function() {
  var marker = $m_sr_Statics$PFMarker$();
  while ((this.fD === 0)) {
    if (this.jJ.j()) {
      var x = this.jJ.f();
      var v = this.ol.bV(x, this);
      if ((marker !== v)) {
        this.ok = v;
        this.fD = 1;
      }
    } else {
      this.fD = (-1);
    }
  }
  return (this.fD === 1);
});
$p.f = (function() {
  if (this.j()) {
    this.fD = 0;
    return this.ok;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
var $d_sc_Iterator$$anon$7 = new $TypeData().i($c_sc_Iterator$$anon$7, "scala.collection.Iterator$$anon$7", ({
  gx: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1,
  i: 1
}));
function $f_sc_MapOps__getOrElse__O__F0__O($thiz, key, default$1) {
  var x5 = $thiz.bX(key);
  if ((x5 instanceof $c_s_Some)) {
    return x5.dB;
  }
  if (($m_s_None$() === x5)) {
    return default$1.I();
  }
  throw new $c_s_MatchError(x5);
}
function $f_sc_MapOps__apply__O__O($thiz, key) {
  var x8 = $thiz.bX(key);
  if (($m_s_None$() === x8)) {
    return $f_sc_MapOps__default__O__O($thiz, key);
  }
  if ((x8 instanceof $c_s_Some)) {
    return x8.dB;
  }
  throw new $c_s_MatchError(x8);
}
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.cV(x, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => default$1.e(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.d();
  while (it.j()) {
    var next = it.f();
    f.bN(next.R, next.O);
  }
}
function $f_sc_MapOps__default__O__O($thiz, key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
}
function $f_sc_MapOps__contains__O__Z($thiz, key) {
  return (!$thiz.bX(key).c());
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.R;
    var v = x$1$2.O;
    return ((k + " -> ") + v);
  })), $thiz.d()), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.dt();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.d();
  while (it.j()) {
    var next = it.f();
    if (seen.ia(f.e(next))) {
      builder.ac(next);
    }
  }
  return builder.af();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.eA().ae();
  b.aW($thiz);
  b.aW(suffix);
  return b.af();
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.oD)) {
    $thiz.oC = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.oD = true;
  }
  return $thiz.oC;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.hT = null;
  this.oC = null;
  this.oD = false;
  $n_sci_ArraySeq$ = this;
  this.hT = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.kB = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.fj($m_s_Array$().q0(it, tag)));
});
$p.iy = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2) => this.fj($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2, evidence$1)))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.fj = (function(x) {
  if ((x === null)) {
    return null;
  }
  if ((x instanceof $ac_O)) {
    return new $c_sci_ArraySeq$ofRef(x);
  }
  if ((x instanceof $ac_I)) {
    return new $c_sci_ArraySeq$ofInt(x);
  }
  if ((x instanceof $ac_D)) {
    return new $c_sci_ArraySeq$ofDouble(x);
  }
  if ((x instanceof $ac_J)) {
    return new $c_sci_ArraySeq$ofLong(x);
  }
  if ((x instanceof $ac_F)) {
    return new $c_sci_ArraySeq$ofFloat(x);
  }
  if ((x instanceof $ac_C)) {
    return new $c_sci_ArraySeq$ofChar(x);
  }
  if ((x instanceof $ac_B)) {
    return new $c_sci_ArraySeq$ofByte(x);
  }
  if ((x instanceof $ac_S)) {
    return new $c_sci_ArraySeq$ofShort(x);
  }
  if ((x instanceof $ac_Z)) {
    return new $c_sci_ArraySeq$ofBoolean(x);
  }
  if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_sci_ArraySeq$ofUnit(x);
  }
  throw new $c_s_MatchError(x);
});
$p.pO = (function(evidence$1) {
  return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this);
});
$p.kA = (function(it, evidence$1) {
  return this.kB(it, evidence$1);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  gS: 1,
  a: 1,
  bO: 1,
  bM: 1,
  bN: 1,
  bY: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_sci_HashMapBuilder$$anon$1(hm$1, outer) {
  this.bq = 0;
  this.fF = 0;
  this.dG = null;
  this.bF = 0;
  this.dd = null;
  this.fG = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_ChampBaseIterator__sci_Node__(this, hm$1.bj);
  while (this.j()) {
    var originalHash = this.dG.g1(this.bq);
    outer.gg(outer.de, this.dG.dr(this.bq), this.dG.cz(this.bq), originalHash, $m_sc_Hashing$().cA(originalHash), 0);
    this.bq = ((1 + this.bq) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.f = (function() {
  return $m_sc_Iterator$().J.f();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  gW: 1,
  b3: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.v)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.v)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.dK = 0;
  this.f3 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
$p.bZ = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  hc: 1,
  ch: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sci_Map$Map2$$anon$3(outer) {
  this.dK = 0;
  this.f3 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$3.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$3;
/** @constructor */
function $h_sci_Map$Map2$$anon$3() {
}
$h_sci_Map$Map2$$anon$3.prototype = $p;
$p.bZ = (function(k, v) {
  return v;
});
var $d_sci_Map$Map2$$anon$3 = new $TypeData().i($c_sci_Map$Map2$$anon$3, "scala.collection.immutable.Map$Map2$$anon$3", ({
  hd: 1,
  ch: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dM = 0;
  this.dL = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
$p.bZ = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  he: 1,
  cj: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$6(outer) {
  this.dM = 0;
  this.dL = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$6.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$6;
/** @constructor */
function $h_sci_Map$Map3$$anon$6() {
}
$h_sci_Map$Map3$$anon$6.prototype = $p;
$p.bZ = (function(k, v) {
  return v;
});
var $d_sci_Map$Map3$$anon$6 = new $TypeData().i($c_sci_Map$Map3$$anon$6, "scala.collection.immutable.Map$Map3$$anon$6", ({
  hf: 1,
  cj: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dN = 0;
  this.cN = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
$p.bZ = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  hg: 1,
  cl: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$9(outer) {
  this.dN = 0;
  this.cN = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$9.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$9;
/** @constructor */
function $h_sci_Map$Map4$$anon$9() {
}
$h_sci_Map$Map4$$anon$9.prototype = $p;
$p.bZ = (function(k, v) {
  return v;
});
var $d_sci_Map$Map4$$anon$9 = new $TypeData().i($c_sci_Map$Map4$$anon$9, "scala.collection.immutable.Map$Map4$$anon$9", ({
  hh: 1,
  cl: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.ef = 0;
  this.hU = null;
  this.c5 = 0;
  this.gF = null;
  this.gG = null;
  this.jP = 0;
  this.oG = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.jP = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().r6(this.jP, $m_sr_Statics$().E(this.oG), (-889275714));
});
$p.u9 = (function() {
  if ((!this.j())) {
    $m_sc_Iterator$().J.f();
  }
  this.jP = this.hU.g1(this.ef);
  this.oG = this.hU.cz(this.ef);
  this.ef = ((this.ef - 1) | 0);
  return this;
});
$p.f = (function() {
  return this.u9();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  hj: 1,
  gT: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.bq = 0;
  this.fF = 0;
  this.dG = null;
  this.bF = 0;
  this.dd = null;
  this.fG = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.u8 = (function() {
  if ((!this.j())) {
    $m_sc_Iterator$().J.f();
  }
  var payload = this.dG.q8(this.bq);
  this.bq = ((1 + this.bq) | 0);
  return payload;
});
$p.f = (function() {
  return this.u8();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  hk: 1,
  b3: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_sci_MapValueIterator(rootNode) {
  this.bq = 0;
  this.fF = 0;
  this.dG = null;
  this.bF = 0;
  this.dd = null;
  this.fG = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapValueIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapValueIterator;
/** @constructor */
function $h_sci_MapValueIterator() {
}
$h_sci_MapValueIterator.prototype = $p;
$p.f = (function() {
  if ((!this.j())) {
    $m_sc_Iterator$().J.f();
  }
  var value = this.dG.cz(this.bq);
  this.bq = ((1 + this.bq) | 0);
  return value;
});
var $d_sci_MapValueIterator = new $TypeData().i($c_sci_MapValueIterator, "scala.collection.immutable.MapValueIterator", ({
  hm: 1,
  b3: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bS <= $thiz.aL)) {
    $m_sc_Iterator$().J.f();
  }
  $thiz.ei = ((1 + $thiz.ei) | 0);
  var slice = $thiz.jR.dv($thiz.ei);
  while ((slice.a.length === 0)) {
    $thiz.ei = ((1 + $thiz.ei) | 0);
    slice = $thiz.jR.dv($thiz.ei);
  }
  $thiz.gJ = $thiz.f6;
  var count = $thiz.oI;
  var idx = $thiz.ei;
  var c = (((count + ((count >>> 31) | 0)) | 0) >> 1);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.eh = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x46 = $thiz.eh;
  switch (x46) {
    case 1: {
      $thiz.bb = slice;
      break;
    }
    case 2: {
      $thiz.bc = slice;
      break;
    }
    case 3: {
      $thiz.bK = slice;
      break;
    }
    case 4: {
      $thiz.cO = slice;
      break;
    }
    case 5: {
      $thiz.f5 = slice;
      break;
    }
    case 6: {
      $thiz.jQ = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x46);
    }
  }
  $thiz.f6 = (($thiz.gJ + Math.imul(slice.a.length, (1 << Math.imul(5, (($thiz.eh - 1) | 0))))) | 0);
  if (($thiz.f6 > $thiz.dQ)) {
    $thiz.f6 = $thiz.dQ;
  }
  if (($thiz.eh > 1)) {
    $thiz.fK = (((1 << Math.imul(5, $thiz.eh)) - 1) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.aL - $thiz.bS) | 0) + $thiz.dQ) | 0);
  if ((pos === $thiz.f6)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.eh > 1)) {
    var io = ((pos - $thiz.gJ) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.fK ^ io));
    $thiz.fK = io;
  }
  $thiz.bS = (($thiz.bS - $thiz.aL) | 0);
  var a = $thiz.bb.a.length;
  var b = $thiz.bS;
  $thiz.dP = ((a < b) ? a : b);
  $thiz.aL = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bb = $thiz.bc.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bc = $thiz.bK.a[(31 & ((io >>> 10) | 0))];
    $thiz.bb = $thiz.bc.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bK = $thiz.cO.a[(31 & ((io >>> 15) | 0))];
    $thiz.bc = $thiz.bK.a[0];
    $thiz.bb = $thiz.bc.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cO = $thiz.f5.a[(31 & ((io >>> 20) | 0))];
    $thiz.bK = $thiz.cO.a[0];
    $thiz.bc = $thiz.bK.a[0];
    $thiz.bb = $thiz.bc.a[0];
  } else {
    $thiz.f5 = $thiz.jQ.a[((io >>> 25) | 0)];
    $thiz.cO = $thiz.f5.a[0];
    $thiz.bK = $thiz.cO.a[0];
    $thiz.bc = $thiz.bK.a[0];
    $thiz.bb = $thiz.bc.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bb = $thiz.bc.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bc = $thiz.bK.a[(31 & ((io >>> 10) | 0))];
    $thiz.bb = $thiz.bc.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bK = $thiz.cO.a[(31 & ((io >>> 15) | 0))];
    $thiz.bc = $thiz.bK.a[(31 & ((io >>> 10) | 0))];
    $thiz.bb = $thiz.bc.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cO = $thiz.f5.a[(31 & ((io >>> 20) | 0))];
    $thiz.bK = $thiz.cO.a[(31 & ((io >>> 15) | 0))];
    $thiz.bc = $thiz.bK.a[(31 & ((io >>> 10) | 0))];
    $thiz.bb = $thiz.bc.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.f5 = $thiz.jQ.a[((io >>> 25) | 0)];
    $thiz.cO = $thiz.f5.a[(31 & ((io >>> 20) | 0))];
    $thiz.bK = $thiz.cO.a[(31 & ((io >>> 15) | 0))];
    $thiz.bc = $thiz.bK.a[(31 & ((io >>> 10) | 0))];
    $thiz.bb = $thiz.bc.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.jR = null;
  this.dQ = 0;
  this.oI = 0;
  this.bb = null;
  this.bc = null;
  this.bK = null;
  this.cO = null;
  this.f5 = null;
  this.jQ = null;
  this.dP = 0;
  this.aL = 0;
  this.fK = 0;
  this.bS = 0;
  this.ei = 0;
  this.eh = 0;
  this.gJ = 0;
  this.f6 = 0;
  this.jR = v;
  this.dQ = totalLength;
  this.oI = sliceCount;
  this.bb = v.h;
  this.dP = this.bb.a.length;
  this.aL = 0;
  this.fK = 0;
  this.bS = this.dQ;
  this.ei = 0;
  this.eh = 1;
  this.gJ = 0;
  this.f6 = this.dP;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.s = (function() {
  return ((this.bS - this.aL) | 0);
});
$p.j = (function() {
  return (this.bS > this.aL);
});
$p.f = (function() {
  if ((this.aL === this.dP)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.bb.a[this.aL];
  this.aL = ((1 + this.aL) | 0);
  return r;
});
$p.e1 = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.aL - this.bS) | 0) + this.dQ) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.dQ;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.dQ)) {
      this.aL = 0;
      this.bS = 0;
      this.dP = 0;
    } else {
      while ((newpos >= this.f6)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.gJ) | 0);
      if ((this.eh > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.fK ^ io));
        this.fK = io;
      }
      this.dP = this.bb.a.length;
      this.aL = (31 & io);
      this.bS = ((this.aL + ((this.dQ - newpos) | 0)) | 0);
      if ((this.dP > this.bS)) {
        this.dP = this.bS;
      }
    }
  }
  return this;
});
$p.bm = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().aP(xs);
  var srcLen = ((this.bS - this.aL) | 0);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? xsLen : ((xsLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var total$1 = ((total < 0) ? 0 : total);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total$1)) {
    if ((this.aL === this.dP)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total$1 - copied) | 0);
    var b = ((this.bb.a.length - this.aL) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.bb;
      var srcPos = this.aL;
      var destPos = ((start + copied) | 0);
      src.v(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().ew(this.bb, this.aL, xs, ((start + copied) | 0), count);
    }
    this.aL = ((this.aL + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total$1;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  hn: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1,
  C: 1
}));
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.fL = 0;
  this.f8 = 0;
  this.dR = false;
  this.f7 = 0;
  this.fL = step;
  this.f8 = lastElement;
  this.dR = (!initiallyEmpty);
  this.f7 = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.s = (function() {
  return (this.dR ? ((1 + ((((this.f8 - this.f7) | 0) / $checkIntDivisor(this.fL)) | 0)) | 0) : 0);
});
$p.j = (function() {
  return this.dR;
});
$p.kU = (function() {
  if ((!this.dR)) {
    $m_sc_Iterator$().J.f();
  }
  var value = this.f7;
  this.dR = (value !== this.f8);
  this.f7 = ((value + this.fL) | 0);
  return value;
});
$p.e1 = (function(n) {
  if ((n > 0)) {
    var value = this.f7;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.fL, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((hi + hi$1) | 0) + ((((value & value$1) | ((value | value$1) & (~lo))) >>> 31) | 0)) | 0);
    if ((this.fL > 0)) {
      var x = this.f8;
      var hi$3 = (x >> 31);
      if (((hi$3 === hi$2) ? ((x >>> 0) < (lo >>> 0)) : (hi$3 < hi$2))) {
        var $x_1_$_lo = x;
        var $x_1_$_hi = hi$3;
      } else {
        var $x_1_$_lo = lo;
        var $x_1_$_hi = hi$2;
      }
      this.f7 = $x_1_$_lo;
      var value$2 = this.f8;
      var hi$4 = (value$2 >> 31);
      this.dR = ((hi$2 === hi$4) ? ((lo >>> 0) <= (value$2 >>> 0)) : (hi$2 < hi$4));
    } else if ((this.fL < 0)) {
      var x$2 = this.f8;
      var hi$5 = (x$2 >> 31);
      if (((hi$5 === hi$2) ? ((x$2 >>> 0) > (lo >>> 0)) : (hi$5 > hi$2))) {
        var $x_2_$_lo = x$2;
        var $x_2_$_hi = hi$5;
      } else {
        var $x_2_$_lo = lo;
        var $x_2_$_hi = hi$2;
      }
      this.f7 = $x_2_$_lo;
      var value$3 = this.f8;
      var hi$6 = (value$3 >> 31);
      this.dR = ((hi$2 === hi$6) ? ((lo >>> 0) >= (value$3 >>> 0)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.f = (function() {
  return this.kU();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  hr: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1,
  a: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.jV = 0;
  $thiz.oN = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.jV = 0;
  this.oN = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.b5 = (function(size) {
  if ((this.jV < size)) {
    this.uy(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.jY = null;
  this.jX = null;
  $n_scm_ArraySeq$ = this;
  this.jY = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.jX = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.tb = (function(it, evidence$1) {
  return this.iv($m_s_Array$().q0(it, evidence$1));
});
$p.iy = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => this.iv(x$2))), new $c_scm_ArrayBuilder$generic(evidence$1.aK()));
});
$p.iv = (function(x) {
  if ((x === null)) {
    return null;
  }
  if ((x instanceof $ac_O)) {
    return new $c_scm_ArraySeq$ofRef(x);
  }
  if ((x instanceof $ac_I)) {
    return new $c_scm_ArraySeq$ofInt(x);
  }
  if ((x instanceof $ac_D)) {
    return new $c_scm_ArraySeq$ofDouble(x);
  }
  if ((x instanceof $ac_J)) {
    return new $c_scm_ArraySeq$ofLong(x);
  }
  if ((x instanceof $ac_F)) {
    return new $c_scm_ArraySeq$ofFloat(x);
  }
  if ((x instanceof $ac_C)) {
    return new $c_scm_ArraySeq$ofChar(x);
  }
  if ((x instanceof $ac_B)) {
    return new $c_scm_ArraySeq$ofByte(x);
  }
  if ((x instanceof $ac_S)) {
    return new $c_scm_ArraySeq$ofShort(x);
  }
  if ((x instanceof $ac_Z)) {
    return new $c_scm_ArraySeq$ofBoolean(x);
  }
  if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_scm_ArraySeq$ofUnit(x);
  }
  throw new $c_s_MatchError(x);
});
$p.pO = (function(evidence$1) {
  return this.jX;
});
$p.kA = (function(it, evidence$1) {
  return this.tb(it, evidence$1);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  hT: 1,
  a: 1,
  bO: 1,
  bM: 1,
  bN: 1,
  bY: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_scm_HashMap$$anon$1(outer) {
  this.dT = 0;
  this.dk = null;
  this.fP = 0;
  this.fO = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
}
$p = $c_scm_HashMap$$anon$1.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$1;
/** @constructor */
function $h_scm_HashMap$$anon$1() {
}
$h_scm_HashMap$$anon$1.prototype = $p;
$p.ij = (function(nd) {
  return new $c_T2(nd.eq, nd.bU);
});
var $d_scm_HashMap$$anon$1 = new $TypeData().i($c_scm_HashMap$$anon$1, "scala.collection.mutable.HashMap$$anon$1", ({
  i1: 1,
  aN: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$3(outer) {
  this.dT = 0;
  this.dk = null;
  this.fP = 0;
  this.fO = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
}
$p = $c_scm_HashMap$$anon$3.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$3;
/** @constructor */
function $h_scm_HashMap$$anon$3() {
}
$h_scm_HashMap$$anon$3.prototype = $p;
$p.ij = (function(nd) {
  return nd.bU;
});
var $d_scm_HashMap$$anon$3 = new $TypeData().i($c_scm_HashMap$$anon$3, "scala.collection.mutable.HashMap$$anon$3", ({
  i2: 1,
  aN: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$4(outer) {
  this.dT = 0;
  this.dk = null;
  this.fP = 0;
  this.fO = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
}
$p = $c_scm_HashMap$$anon$4.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$4;
/** @constructor */
function $h_scm_HashMap$$anon$4() {
}
$h_scm_HashMap$$anon$4.prototype = $p;
$p.ij = (function(nd) {
  return nd;
});
var $d_scm_HashMap$$anon$4 = new $TypeData().i($c_scm_HashMap$$anon$4, "scala.collection.mutable.HashMap$$anon$4", ({
  i3: 1,
  aN: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$5(outer) {
  this.dT = 0;
  this.dk = null;
  this.fP = 0;
  this.fO = null;
  this.k0 = 0;
  this.ry = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ry = outer;
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
  this.k0 = 0;
}
$p = $c_scm_HashMap$$anon$5.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$5;
/** @constructor */
function $h_scm_HashMap$$anon$5() {
}
$h_scm_HashMap$$anon$5.prototype = $p;
$p.x = (function() {
  return this.k0;
});
$p.ij = (function(nd) {
  var $x_1 = $m_s_util_hashing_MurmurHash3$();
  var improvedHash = nd.dl;
  this.k0 = $x_1.cI((improvedHash ^ ((improvedHash >>> 16) | 0)), $m_sr_Statics$().E(nd.bU));
  return this;
});
var $d_scm_HashMap$$anon$5 = new $TypeData().i($c_scm_HashMap$$anon$5, "scala.collection.mutable.HashMap$$anon$5", ({
  i4: 1,
  aN: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$1(outer) {
  this.es = 0;
  this.dU = null;
  this.gP = 0;
  this.gO = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.kx = (function(nd) {
  return nd.fQ;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  i7: 1,
  bb: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.es = 0;
  this.dU = null;
  this.gP = 0;
  this.gO = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.kx = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  i8: 1,
  bb: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.es = 0;
  this.dU = null;
  this.gP = 0;
  this.gO = null;
  this.k3 = 0;
  this.oU = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.oU = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.k3 = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.x = (function() {
  return this.k3;
});
$p.kx = (function(nd) {
  this.k3 = $p_scm_HashSet__improveHash__I__I(this.oU, nd.dV);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  i9: 1,
  bb: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1
}));
/** @constructor */
function $c_s_math_Ordering$$anon$1(f$4, outer) {
  this.k5 = null;
  this.oX = null;
  this.k5 = f$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.oX = outer;
}
$p = $c_s_math_Ordering$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$$anon$1;
/** @constructor */
function $h_s_math_Ordering$$anon$1() {
}
$h_s_math_Ordering$$anon$1.prototype = $p;
$p.cZ = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cW = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cE = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cX = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return this.oX.Z(this.k5.e(x), this.k5.e(y));
});
var $d_s_math_Ordering$$anon$1 = new $TypeData().i($c_s_math_Ordering$$anon$1, "scala.math.Ordering$$anon$1", ({
  iy: 1,
  G: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1
}));
function $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z($thiz, other) {
  return (other === $thiz.oY);
}
function $f_s_math_Ordering$Double$IeeeOrdering__lteq__D__D__Z($thiz, x, y) {
  return (x <= y);
}
function $f_s_math_Ordering$Double$IeeeOrdering__gteq__D__D__Z($thiz, x, y) {
  return (x >= y);
}
/** @constructor */
function $c_s_math_Ordering$Reverse(outer) {
  this.cP = null;
  this.cP = outer;
}
$p = $c_s_math_Ordering$Reverse.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Reverse;
/** @constructor */
function $h_s_math_Ordering$Reverse() {
}
$h_s_math_Ordering$Reverse.prototype = $p;
$p.cX = (function(other) {
  var x$2 = this.cP;
  return ((other === null) ? (x$2 === null) : other.p(x$2));
});
$p.Z = (function(x, y) {
  return this.cP.Z(y, x);
});
$p.cZ = (function(x, y) {
  return this.cP.cZ(y, x);
});
$p.cW = (function(x, y) {
  return this.cP.cW(y, x);
});
$p.cD = (function(x, y) {
  return this.cP.cE(x, y);
});
$p.cE = (function(x, y) {
  return this.cP.cD(x, y);
});
$p.p = (function(obj) {
  if ((obj !== null)) {
    if ((this === obj)) {
      return true;
    }
  }
  if ((obj instanceof $c_s_math_Ordering$Reverse)) {
    var x = this.cP;
    var x$2 = obj.cP;
    return ((x === null) ? (x$2 === null) : x.p(x$2));
  }
  return false;
});
$p.x = (function() {
  return Math.imul(41, this.cP.x());
});
function $isArrayOf_s_math_Ordering$Reverse(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cD)));
}
var $d_s_math_Ordering$Reverse = new $TypeData().i($c_s_math_Ordering$Reverse, "scala.math.Ordering$Reverse", ({
  cD: 1,
  G: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.gR = null;
  this.gR = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.p = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.x = (function() {
  return $m_sr_Statics$().E(this.gR);
});
$p.u = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.gR);
});
$p.aK = (function() {
  return this.gR;
});
$p.bu = (function(len) {
  return this.gR.y.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  iR: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$11(key$11) {
  this.eR = null;
  this.eS = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$11, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$11.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$11;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$11() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$11.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$11 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$11, "com.raquo.laminar.defs.styles.StyleProps$$anon$11", ({
  dK: 1,
  ay: 1,
  a3: 1,
  aw: 1,
  ax: 1,
  dP: 1,
  dV: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28(key$28) {
  this.eR = null;
  this.eS = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$28, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28, "com.raquo.laminar.defs.styles.StyleProps$$anon$28", ({
  dL: 1,
  ay: 1,
  a3: 1,
  aw: 1,
  ax: 1,
  dT: 1,
  dQ: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3(key$3) {
  this.eR = null;
  this.eS = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$3, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3, "com.raquo.laminar.defs.styles.StyleProps$$anon$3", ({
  dM: 1,
  ay: 1,
  a3: 1,
  aw: 1,
  ax: 1,
  dU: 1,
  dR: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5(key$5) {
  this.eR = null;
  this.eS = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$5, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5, "com.raquo.laminar.defs.styles.StyleProps$$anon$5", ({
  dO: 1,
  ay: 1,
  a3: 1,
  aw: 1,
  ax: 1,
  dW: 1,
  dX: 1
}));
class $c_ju_DuplicateFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.nG = null;
    this.nG = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return (("Flags = '" + this.nG) + "'");
  }
}
var $d_ju_DuplicateFormatFlagsException = new $TypeData().i($c_ju_DuplicateFormatFlagsException, "java.util.DuplicateFormatFlagsException", ({
  fo: 1,
  a0: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_FormatFlagsConversionMismatchException extends $c_ju_IllegalFormatException {
  constructor(f, c) {
    super();
    this.nI = null;
    this.nH = 0;
    this.nI = f;
    this.nH = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return ((("Conversion = " + $cToS(this.nH)) + ", Flags = ") + this.nI);
  }
}
var $d_ju_FormatFlagsConversionMismatchException = new $TypeData().i($c_ju_FormatFlagsConversionMismatchException, "java.util.FormatFlagsConversionMismatchException", ({
  fp: 1,
  a0: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatArgumentIndexException extends $c_ju_IllegalFormatException {
  constructor(msg) {
    super();
    this.nM = null;
    this.nM = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return this.nM;
  }
}
var $d_ju_IllegalFormatArgumentIndexException = new $TypeData().i($c_ju_IllegalFormatArgumentIndexException, "java.util.IllegalFormatArgumentIndexException", ({
  fw: 1,
  a0: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatCodePointException extends $c_ju_IllegalFormatException {
  constructor(c) {
    super();
    this.nN = 0;
    this.nN = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    var i = this.nN;
    return ("Code point = 0x" + (i >>> 0.0).toString(16));
  }
}
var $d_ju_IllegalFormatCodePointException = new $TypeData().i($c_ju_IllegalFormatCodePointException, "java.util.IllegalFormatCodePointException", ({
  fx: 1,
  a0: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(c, arg) {
    super();
    this.nP = 0;
    this.nO = null;
    this.nP = c;
    this.nO = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return ((("" + $cToS(this.nP)) + " != ") + this.nO.y.N);
  }
}
var $d_ju_IllegalFormatConversionException = new $TypeData().i($c_ju_IllegalFormatConversionException, "java.util.IllegalFormatConversionException", ({
  fy: 1,
  a0: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.nQ = null;
    this.nQ = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return (("Flags = '" + this.nQ) + "'");
  }
}
var $d_ju_IllegalFormatFlagsException = new $TypeData().i($c_ju_IllegalFormatFlagsException, "java.util.IllegalFormatFlagsException", ({
  fz: 1,
  a0: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatPrecisionException extends $c_ju_IllegalFormatException {
  constructor(p) {
    super();
    this.nR = 0;
    this.nR = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return ("" + this.nR);
  }
}
var $d_ju_IllegalFormatPrecisionException = new $TypeData().i($c_ju_IllegalFormatPrecisionException, "java.util.IllegalFormatPrecisionException", ({
  fA: 1,
  a0: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(w) {
    super();
    this.nS = 0;
    this.nS = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return ("" + this.nS);
  }
}
var $d_ju_IllegalFormatWidthException = new $TypeData().i($c_ju_IllegalFormatWidthException, "java.util.IllegalFormatWidthException", ({
  fB: 1,
  a0: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_MissingFormatArgumentException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nT = null;
    this.nT = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return (("Format specifier '" + this.nT) + "'");
  }
}
var $d_ju_MissingFormatArgumentException = new $TypeData().i($c_ju_MissingFormatArgumentException, "java.util.MissingFormatArgumentException", ({
  fC: 1,
  a0: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_MissingFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nU = null;
    this.nU = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return this.nU;
  }
}
var $d_ju_MissingFormatWidthException = new $TypeData().i($c_ju_MissingFormatWidthException, "java.util.MissingFormatWidthException", ({
  fD: 1,
  a0: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_UnknownFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nV = null;
    this.nV = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return (("Conversion = '" + this.nV) + "'");
  }
}
var $d_ju_UnknownFormatConversionException = new $TypeData().i($c_ju_UnknownFormatConversionException, "java.util.UnknownFormatConversionException", ({
  fG: 1,
  a0: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bC() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.jV = 0;
  this.oN = 0;
  this.fN = null;
  this.oO = false;
  this.jW = null;
  this.fN = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.oO = (elementClass === $d_C.l());
  this.jW = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.pl = (function(elem) {
  var unboxedElem = (this.oO ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().gb(this.fN) : elem));
  this.jW.push(unboxedElem);
  return this;
});
$p.rQ = (function(xs) {
  var it = xs.d();
  while (it.j()) {
    this.pl(it.f());
  }
  return this;
});
$p.uy = (function(size) {
});
$p.af = (function() {
  return $m_scm_ArrayBuilder$().ga(((this.fN === $d_V.l()) ? $d_jl_Void.l() : (((this.fN === $d_sr_Null$.l()) || (this.fN === $d_sr_Nothing$.l())) ? $d_O.l() : this.fN)), this.jW);
});
$p.u = (function() {
  return "ArrayBuilder.generic";
});
$p.ac = (function(elem) {
  return this.pl(elem);
});
$p.aW = (function(elems) {
  return this.rQ(elems);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  hS: 1,
  hQ: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.jH = null;
  this.dD = 0;
  this.bz = 0;
  this.oR = null;
  this.oQ = 0;
  this.oR = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.oQ = (mutationCount.I() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.j = (function() {
  $m_scm_MutationTracker$().kj(this.oQ, (this.oR.I() | 0), "mutation occurred during iteration");
  return (this.bz > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  hX: 1,
  bP: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(self, mutationCount) {
  this.jI = null;
  this.bi = 0;
  this.eY = 0;
  this.oT = null;
  this.oS = 0;
  this.oT = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(this, self);
  this.oS = (mutationCount.I() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedReverseIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = $p;
$p.j = (function() {
  $m_scm_MutationTracker$().kj(this.oS, (this.oT.I() | 0), "mutation occurred during iteration");
  return (this.bi > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedReverseIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedReverseIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedReverseIterator", ({
  hY: 1,
  bQ: 1,
  m: 1,
  b: 1,
  c: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_s_math_Ordering$Boolean$() {
}
$p = $c_s_math_Ordering$Boolean$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Boolean$;
/** @constructor */
function $h_s_math_Ordering$Boolean$() {
}
$h_s_math_Ordering$Boolean$.prototype = $p;
$p.cZ = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cW = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cE = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cX = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  var x$1 = (!(!x));
  return ((x$1 === (!(!y))) ? 0 : (x$1 ? 1 : (-1)));
});
var $d_s_math_Ordering$Boolean$ = new $TypeData().i($c_s_math_Ordering$Boolean$, "scala.math.Ordering$Boolean$", ({
  iz: 1,
  G: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iA: 1
}));
var $n_s_math_Ordering$Boolean$;
function $m_s_math_Ordering$Boolean$() {
  if ((!$n_s_math_Ordering$Boolean$)) {
    $n_s_math_Ordering$Boolean$ = new $c_s_math_Ordering$Boolean$();
  }
  return $n_s_math_Ordering$Boolean$;
}
/** @constructor */
function $c_s_math_Ordering$Byte$() {
}
$p = $c_s_math_Ordering$Byte$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Byte$;
/** @constructor */
function $h_s_math_Ordering$Byte$() {
}
$h_s_math_Ordering$Byte$.prototype = $p;
$p.cZ = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cW = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cE = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cX = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Byte$ = new $TypeData().i($c_s_math_Ordering$Byte$, "scala.math.Ordering$Byte$", ({
  iB: 1,
  G: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iC: 1
}));
var $n_s_math_Ordering$Byte$;
function $m_s_math_Ordering$Byte$() {
  if ((!$n_s_math_Ordering$Byte$)) {
    $n_s_math_Ordering$Byte$ = new $c_s_math_Ordering$Byte$();
  }
  return $n_s_math_Ordering$Byte$;
}
/** @constructor */
function $c_s_math_Ordering$Char$() {
}
$p = $c_s_math_Ordering$Char$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Char$;
/** @constructor */
function $h_s_math_Ordering$Char$() {
}
$h_s_math_Ordering$Char$.prototype = $p;
$p.cZ = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cW = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cE = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cX = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return (($uC(x) - $uC(y)) | 0);
});
var $d_s_math_Ordering$Char$ = new $TypeData().i($c_s_math_Ordering$Char$, "scala.math.Ordering$Char$", ({
  iE: 1,
  G: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iF: 1
}));
var $n_s_math_Ordering$Char$;
function $m_s_math_Ordering$Char$() {
  if ((!$n_s_math_Ordering$Char$)) {
    $n_s_math_Ordering$Char$ = new $c_s_math_Ordering$Char$();
  }
  return $n_s_math_Ordering$Char$;
}
/** @constructor */
function $c_s_math_Ordering$DeprecatedDoubleOrdering$() {
}
$p = $c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$DeprecatedDoubleOrdering$;
/** @constructor */
function $h_s_math_Ordering$DeprecatedDoubleOrdering$() {
}
$h_s_math_Ordering$DeprecatedDoubleOrdering$.prototype = $p;
$p.cZ = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cW = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cE = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cX = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return $m_jl_Double$().ig((+x), (+y));
});
var $d_s_math_Ordering$DeprecatedDoubleOrdering$ = new $TypeData().i($c_s_math_Ordering$DeprecatedDoubleOrdering$, "scala.math.Ordering$DeprecatedDoubleOrdering$", ({
  iG: 1,
  G: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iI: 1
}));
var $n_s_math_Ordering$DeprecatedDoubleOrdering$;
function $m_s_math_Ordering$DeprecatedDoubleOrdering$() {
  if ((!$n_s_math_Ordering$DeprecatedDoubleOrdering$)) {
    $n_s_math_Ordering$DeprecatedDoubleOrdering$ = new $c_s_math_Ordering$DeprecatedDoubleOrdering$();
  }
  return $n_s_math_Ordering$DeprecatedDoubleOrdering$;
}
/** @constructor */
function $c_s_math_Ordering$Long$() {
}
$p = $c_s_math_Ordering$Long$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Long$;
/** @constructor */
function $h_s_math_Ordering$Long$() {
}
$h_s_math_Ordering$Long$.prototype = $p;
$p.cZ = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cW = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cE = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cX = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  var $x_1 = $uJ(x);
  var x$1_$_lo = $x_1.l;
  var x$1_$_hi = $x_1.h;
  var $x_2 = $uJ(y);
  var y$1_$_lo = $x_2.l;
  var y$1_$_hi = $x_2.h;
  return ((x$1_$_hi === y$1_$_hi) ? ((x$1_$_lo === y$1_$_lo) ? 0 : (((x$1_$_lo >>> 0) < (y$1_$_lo >>> 0)) ? (-1) : 1)) : ((x$1_$_hi < y$1_$_hi) ? (-1) : 1));
});
var $d_s_math_Ordering$Long$ = new $TypeData().i($c_s_math_Ordering$Long$, "scala.math.Ordering$Long$", ({
  iL: 1,
  G: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iM: 1
}));
var $n_s_math_Ordering$Long$;
function $m_s_math_Ordering$Long$() {
  if ((!$n_s_math_Ordering$Long$)) {
    $n_s_math_Ordering$Long$ = new $c_s_math_Ordering$Long$();
  }
  return $n_s_math_Ordering$Long$;
}
/** @constructor */
function $c_s_math_Ordering$Short$() {
}
$p = $c_s_math_Ordering$Short$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Short$;
/** @constructor */
function $h_s_math_Ordering$Short$() {
}
$h_s_math_Ordering$Short$.prototype = $p;
$p.cZ = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cW = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cE = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cX = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Short$ = new $TypeData().i($c_s_math_Ordering$Short$, "scala.math.Ordering$Short$", ({
  iN: 1,
  G: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iO: 1
}));
var $n_s_math_Ordering$Short$;
function $m_s_math_Ordering$Short$() {
  if ((!$n_s_math_Ordering$Short$)) {
    $n_s_math_Ordering$Short$ = new $c_s_math_Ordering$Short$();
  }
  return $n_s_math_Ordering$Short$;
}
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.u = (function() {
  return this.a4;
});
$p.p = (function(that) {
  return (this === that);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.a0 = null;
    this.a0 = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return $dp_toString__T(this.a0);
  }
  bx() {
    return "JavaScriptException";
  }
  bv() {
    return 1;
  }
  bw(x$1) {
    return ((x$1 === 0) ? this.a0 : $m_sr_Statics$().tC(x$1));
  }
  cG() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().fg(this, 1744042595, true);
  }
  p(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().l(this.a0, x$1.a0)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cI)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  cI: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1,
  P: 1,
  d: 1
}));
function $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, newValue) {
  if ((!($thiz.kS() === (void 0)))) {
    $thiz.ka($m_Lcom_raquo_airstream_core_Signal$().qq());
  }
  $thiz.qn(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.kS();
  if ((x === (void 0))) {
    $thiz.ka($m_Lcom_raquo_airstream_core_Signal$().qq());
    var nextValue = $thiz.kq();
    $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
    var $x_1 = nextValue;
  } else {
    var $x_1 = x;
  }
  return $x_1;
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, new $c_s_util_Failure(nextError), transaction);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  var isError = nextValue.qc();
  var elem = false;
  elem = false;
  $thiz.cY(false);
  var this$ = $thiz.dp();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.g8(nextValue);
    if ((isError && (!elem))) {
      var ev$5 = true;
      elem = ev$5;
    }
  }
  var this$$1 = $thiz.ds();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.hl(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cY(true);
  var x = $thiz.eE();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].I();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
  if ((isError && (!elem))) {
    nextValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().d2(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cY(false);
  var this$ = $thiz.dp();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.hi(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().d2(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.ds();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.iz(nextValue, transaction);
  }
  $thiz.cY(true);
  var x = $thiz.eE();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].I();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.cY(false);
  var this$ = $thiz.dp();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.hh(nextError);
  }
  var this$$1 = $thiz.ds();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.hg(nextError, transaction);
  }
  $thiz.cY(true);
  var x = $thiz.eE();
  if ((x !== (void 0))) {
    var i = 0;
    var len = (x.length | 0);
    while ((i < len)) {
      x[i].I();
      i = ((1 + i) | 0);
    }
    x.length = 0;
  }
}
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.c())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.w();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.aZ(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.dt();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.d();
    var different = false;
    while (it.j()) {
      var next = it.f();
      if (seen.ia(f.e(next))) {
        builder.ac(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.af() : $thiz);
  }
}
function $f_s_math_Numeric$DoubleIsFractional__plus__D__D__D($thiz, x, y) {
  return (x + y);
}
function $f_s_math_Numeric$DoubleIsFractional__times__D__D__D($thiz, x, y) {
  return (x * y);
}
/** @constructor */
function $c_s_math_Ordering$Int$() {
  this.oY = null;
  $n_s_math_Ordering$Int$ = this;
  this.oY = new $c_s_math_Ordering$Reverse(this);
}
$p = $c_s_math_Ordering$Int$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Int$;
/** @constructor */
function $h_s_math_Ordering$Int$() {
}
$h_s_math_Ordering$Int$.prototype = $p;
$p.cZ = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cW = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cE = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cX = (function(other) {
  return $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  var x$1 = (x | 0);
  var y$1 = (y | 0);
  return ((x$1 === y$1) ? 0 : ((x$1 < y$1) ? (-1) : 1));
});
var $d_s_math_Ordering$Int$ = new $TypeData().i($c_s_math_Ordering$Int$, "scala.math.Ordering$Int$", ({
  iJ: 1,
  G: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iK: 1,
  iD: 1
}));
var $n_s_math_Ordering$Int$;
function $m_s_math_Ordering$Int$() {
  if ((!$n_s_math_Ordering$Int$)) {
    $n_s_math_Ordering$Int$ = new $c_s_math_Ordering$Int$();
  }
  return $n_s_math_Ordering$Int$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.aK = (function() {
  return $d_Z.l();
});
$p.bu = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.aK = (function() {
  return $d_B.l();
});
$p.bu = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.aK = (function() {
  return $d_C.l();
});
$p.bu = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.aK = (function() {
  return $d_D.l();
});
$p.bu = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.aK = (function() {
  return $d_F.l();
});
$p.bu = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.aK = (function() {
  return $d_I.l();
});
$p.bu = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.aK = (function() {
  return $d_J.l();
});
$p.bu = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.dX = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.u = (function() {
  return this.dX;
});
$p.p = (function(that) {
  return (this === that);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.aK = (function() {
  return $d_S.l();
});
$p.bu = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.a4 = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.aK = (function() {
  return $d_V.l();
});
$p.bu = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.at = (function() {
  return $m_sc_View$();
});
$p.u = (function() {
  return $f_sc_View__toString__T(this);
});
$p.b8 = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.b0() === that.b0())) {
      try {
        return $thiz.v4(that);
      } catch (e) {
        if (false) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.b2)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b2)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.dX = null;
  this.dX = "Any";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.aK = (function() {
  return $d_O.l();
});
$p.bu = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  iS: 1,
  aP: 1,
  aO: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
  }
  return $n_s_reflect_ManifestFactory$AnyManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.a4 = null;
  this.a4 = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  iU: 1,
  iT: 1,
  af: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$();
  }
  return $n_s_reflect_ManifestFactory$BooleanManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.a4 = null;
  this.a4 = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  iW: 1,
  iV: 1,
  af: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
  }
  return $n_s_reflect_ManifestFactory$ByteManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.a4 = null;
  this.a4 = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  iY: 1,
  iX: 1,
  af: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
  }
  return $n_s_reflect_ManifestFactory$CharManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.a4 = null;
  this.a4 = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  j0: 1,
  iZ: 1,
  af: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.a4 = null;
  this.a4 = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  j2: 1,
  j1: 1,
  af: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.a4 = null;
  this.a4 = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  j4: 1,
  j3: 1,
  af: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.a4 = null;
  this.a4 = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  j6: 1,
  j5: 1,
  af: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.dX = null;
  this.dX = "Nothing";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.aK = (function() {
  return $d_sr_Nothing$.l();
});
$p.bu = (function(len) {
  return new ($d_sr_Nothing$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  j7: 1,
  aP: 1,
  aO: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
  }
  return $n_s_reflect_ManifestFactory$NothingManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.dX = null;
  this.dX = "Null";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.aK = (function() {
  return $d_sr_Null$.l();
});
$p.bu = (function(len) {
  return new ($d_sr_Null$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  j8: 1,
  aP: 1,
  aO: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$();
  }
  return $n_s_reflect_ManifestFactory$NullManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.dX = null;
  this.dX = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.aK = (function() {
  return $d_O.l();
});
$p.bu = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  j9: 1,
  aP: 1,
  aO: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.a4 = null;
  this.a4 = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  jb: 1,
  ja: 1,
  af: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$();
  }
  return $n_s_reflect_ManifestFactory$ShortManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.a4 = null;
  this.a4 = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  jd: 1,
  jc: 1,
  af: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1,
  X: 1
}));
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.kX(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.kX(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.lq = null;
  this.lp = false;
  this.lr = null;
  this.ln = null;
  this.lo = null;
  this.lt = false;
  this.ls = 0;
  this.hx = 0;
  this.hw = null;
  this.lq = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.hw = makeConfig.sb(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => this.hx)), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.eD = (function() {
  return this.lq;
});
$p.ex = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.g3 = (function() {
  return this.lp;
});
$p.eE = (function() {
  return this.lr;
});
$p.cY = (function(x$1) {
  this.lp = x$1;
});
$p.g7 = (function(x$1) {
  this.lr = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.hf = (function(observer) {
});
$p.dp = (function() {
  return this.ln;
});
$p.ds = (function() {
  return this.lo;
});
$p.hr = (function() {
  return this.lt;
});
$p.fm = (function(x$1) {
  this.lt = x$1;
});
$p.h4 = (function(x$0) {
  this.ln = x$0;
});
$p.h5 = (function(x$0) {
  this.lo = x$0;
});
$p.fi = (function() {
  return this.ls;
});
$p.hm = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.hj = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.hk = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.hd = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.fh = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  d4: 1,
  ao: 1,
  ab: 1,
  at: 1,
  au: 1,
  aT: 1,
  aR: 1,
  av: 1,
  aV: 1,
  d0: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.m5 = null;
  this.m4 = false;
  this.m6 = null;
  this.iY = 0;
  this.m2 = null;
  this.m3 = null;
  this.m9 = false;
  this.iZ = null;
  this.m7 = null;
  this.m8 = 0;
  this.m7 = parentDisplayName;
  this.m5 = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.iY = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.iZ = (void 0);
  this.m8 = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.eD = (function() {
  return this.m5;
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.g3 = (function() {
  return this.m4;
});
$p.eE = (function() {
  return this.m6;
});
$p.cY = (function(x$1) {
  this.m4 = x$1;
});
$p.g7 = (function(x$1) {
  this.m6 = x$1;
});
$p.hk = (function() {
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.k9 = (function() {
  return this.iY;
});
$p.ka = (function(x$1) {
  this.iY = x$1;
});
$p.hj = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.hf = (function(observer) {
  observer.g8($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.dp = (function() {
  return this.m2;
});
$p.ds = (function() {
  return this.m3;
});
$p.hr = (function() {
  return this.m9;
});
$p.fm = (function(x$1) {
  this.m9 = x$1;
});
$p.h4 = (function(x$0) {
  this.m2 = x$0;
});
$p.h5 = (function(x$0) {
  this.m3 = x$0;
});
$p.kS = (function() {
  return this.iZ;
});
$p.qn = (function(x$1) {
  this.iZ = x$1;
});
$p.l9 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.fi = (function() {
  return this.m8;
});
$p.kq = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.hm = (function() {
});
$p.ex = (function() {
  return (this.m7.I() + ".signal");
});
$p.hd = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this, project, $m_s_None$());
});
$p.fh = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  dj: 1,
  ao: 1,
  ab: 1,
  at: 1,
  au: 1,
  aU: 1,
  bj: 1,
  av: 1,
  bk: 1,
  df: 1
}));
/** @constructor */
function $c_sc_MapView$Values(underlying) {
  this.hQ = null;
  this.hQ = underlying;
}
$p = $c_sc_MapView$Values.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_MapView$Values;
/** @constructor */
function $h_sc_MapView$Values() {
}
$h_sc_MapView$Values.prototype = $p;
$p.d = (function() {
  return this.hQ.eI();
});
$p.s = (function() {
  return this.hQ.s();
});
$p.c = (function() {
  return this.hQ.c();
});
var $d_sc_MapView$Values = new $TypeData().i($c_sc_MapView$Values, "scala.collection.MapView$Values", ({
  gG: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1
}));
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.id($thiz)) {
        return $thiz.g9(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.o)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
}
function $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying_, len, ord) {
  $thiz.d7 = len;
  $thiz.fE = ord;
  $thiz.gB = underlying_;
  $thiz.jN = false;
  return $thiz;
}
function $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__($thiz, underlying, ord) {
  $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying, underlying.i(), ord);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Sorted() {
  this.d7 = 0;
  this.fE = null;
  this.gB = null;
  this.jN = false;
  this.ot = null;
  this.ou = false;
}
$p = $c_sc_SeqView$Sorted.prototype = new $h_O();
$p.constructor = $c_sc_SeqView$Sorted;
/** @constructor */
function $h_sc_SeqView$Sorted() {
}
$h_sc_SeqView$Sorted.prototype = $p;
$p.dq = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.du = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.bm = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.cH = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.cQ = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.gf = (function() {
  return $m_sci_Seq$().fZ(this);
});
$p.q = (function() {
  return this.d().f();
});
$p.cc = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bn = (function() {
  return new $c_sc_SeqView$Sorted$ReverseSorted(this).d();
});
$p.aZ = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.dt = (function() {
  return $m_sc_View$().ae();
});
$p.bC = (function() {
  return "SeqView";
});
$p.at = (function() {
  return $m_sc_View$();
});
$p.u = (function() {
  return $f_sc_View__toString__T(this);
});
$p.iC = (function() {
  if ((!this.ou)) {
    var len = this.d7;
    if ((len === 0)) {
      var res = $m_sci_Nil$();
    } else if ((len === 1)) {
      $m_sci_List$();
      var elems = $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [this.gB.q()]);
      var res = $m_sci_Nil$().iB(elems);
    } else {
      var arr = new $ac_O(len);
      this.gB.bm(arr, 0, 2147483647);
      $m_ju_Arrays$().gd(arr, this.fE);
      var res = $m_sci_ArraySeq$().fj(arr);
    }
    this.jN = true;
    this.gB = null;
    this.ot = res;
    this.ou = true;
  }
  return this.ot;
});
$p.qK = (function() {
  return (this.jN ? this.iC() : this.gB);
});
$p.o = (function(i) {
  return this.iC().o(i);
});
$p.i = (function() {
  return this.d7;
});
$p.d = (function() {
  return $m_sc_Iterator$().J.h6(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.iC().d())));
});
$p.s = (function() {
  return this.d7;
});
$p.c = (function() {
  return (this.d7 === 0);
});
$p.l3 = (function(ord1) {
  var x$2 = this.fE;
  if (((ord1 === null) ? (x$2 === null) : ord1.p(x$2))) {
    return this;
  } else {
    return (ord1.cX(this.fE) ? new $c_sc_SeqView$Sorted$ReverseSorted(this) : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.qK(), this.d7, ord1));
  }
});
$p.b6 = (function(ord) {
  return this.l3(ord);
});
$p.z = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.fe = (function(coll) {
  return $m_sc_View$().il(coll);
});
var $d_sc_SeqView$Sorted = new $TypeData().i($c_sc_SeqView$Sorted, "scala.collection.SeqView$Sorted", ({
  gH: 1,
  b: 1,
  c: 1,
  g: 1,
  k: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  a7: 1
}));
function $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse($thiz) {
  if ((!$thiz.ow)) {
    $thiz.ov = $ct_sc_SeqView$Reverse__sc_SeqOps__(new $c_sc_SeqView$Reverse(), $thiz.cK.iC());
    $thiz.ow = true;
  }
  return $thiz.ov;
}
/** @constructor */
function $c_sc_SeqView$Sorted$ReverseSorted(outer) {
  this.ov = null;
  this.ow = false;
  this.cK = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.cK = outer;
}
$p = $c_sc_SeqView$Sorted$ReverseSorted.prototype = new $h_O();
$p.constructor = $c_sc_SeqView$Sorted$ReverseSorted;
/** @constructor */
function $h_sc_SeqView$Sorted$ReverseSorted() {
}
$h_sc_SeqView$Sorted$ReverseSorted.prototype = $p;
$p.dq = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.du = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.bm = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.cH = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.cQ = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.gf = (function() {
  return $m_sci_Seq$().fZ(this);
});
$p.q = (function() {
  return this.d().f();
});
$p.cc = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bn = (function() {
  return this.cK.d();
});
$p.aZ = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.dt = (function() {
  return $m_sc_View$().ae();
});
$p.bC = (function() {
  return "SeqView";
});
$p.at = (function() {
  return $m_sc_View$();
});
$p.u = (function() {
  return $f_sc_View__toString__T(this);
});
$p.o = (function(i) {
  return $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).o(i);
});
$p.i = (function() {
  return this.cK.d7;
});
$p.d = (function() {
  return $m_sc_Iterator$().J.h6(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).d())));
});
$p.s = (function() {
  return this.cK.d7;
});
$p.c = (function() {
  return (this.cK.d7 === 0);
});
$p.l3 = (function(ord1) {
  var x$2 = this.cK.fE;
  if (((ord1 === null) ? (x$2 === null) : ord1.p(x$2))) {
    return this.cK;
  } else {
    return (ord1.cX(this.cK.fE) ? this : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.cK.qK(), this.cK.d7, ord1));
  }
});
$p.b6 = (function(ord) {
  return this.l3(ord);
});
$p.z = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.fe = (function(coll) {
  return $m_sc_View$().il(coll);
});
var $d_sc_SeqView$Sorted$ReverseSorted = new $TypeData().i($c_sc_SeqView$Sorted$ReverseSorted, "scala.collection.SeqView$Sorted$ReverseSorted", ({
  gI: 1,
  b: 1,
  c: 1,
  g: 1,
  k: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  a7: 1
}));
/** @constructor */
function $c_sc_View$$anon$1(it$3) {
  this.oy = null;
  this.oy = it$3;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.d = (function() {
  return this.oy.I();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  gN: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1
}));
/** @constructor */
function $c_sc_View$Collect(underlying, pf) {
  this.oA = null;
  this.oz = null;
  this.oA = underlying;
  this.oz = pf;
}
$p = $c_sc_View$Collect.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Collect;
/** @constructor */
function $h_sc_View$Collect() {
}
$h_sc_View$Collect.prototype = $p;
$p.d = (function() {
  var this$1 = this.oA.d();
  return new $c_sc_Iterator$$anon$7(this.oz, this$1);
});
var $d_sc_View$Collect = new $TypeData().i($c_sc_View$Collect, "scala.collection.View$Collect", ({
  gO: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1
}));
/** @constructor */
function $c_sc_View$DistinctBy(underlying, f) {
  this.hS = null;
  this.oB = null;
  this.hS = underlying;
  this.oB = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.d = (function() {
  var this$1 = this.hS.d();
  return new $c_sc_Iterator$$anon$8(this.oB, this$1);
});
$p.s = (function() {
  return ((this.hS.s() === 0) ? 0 : (-1));
});
$p.c = (function() {
  return this.hS.c();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  gP: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1
}));
function $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f) {
  $thiz.f1 = underlying;
  $thiz.gD = f;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
  this.f1 = null;
  this.gD = null;
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
$p.d = (function() {
  var this$1 = this.f1.d();
  return new $c_sc_Iterator$$anon$9(this.gD, this$1);
});
$p.s = (function() {
  return this.f1.s();
});
$p.c = (function() {
  return this.f1.c();
});
var $d_sc_View$Map = new $TypeData().i($c_sc_View$Map, "scala.collection.View$Map", ({
  aM: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1
}));
/** @constructor */
function $c_s_math_Numeric$DoubleIsFractional$() {
}
$p = $c_s_math_Numeric$DoubleIsFractional$.prototype = new $h_O();
$p.constructor = $c_s_math_Numeric$DoubleIsFractional$;
/** @constructor */
function $h_s_math_Numeric$DoubleIsFractional$() {
}
$h_s_math_Numeric$DoubleIsFractional$.prototype = $p;
$p.cX = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return $m_jl_Double$().ig((+x), (+y));
});
$p.cZ = (function(x, y) {
  return $f_s_math_Ordering$Double$IeeeOrdering__lteq__D__D__Z(this, (+x), (+y));
});
$p.cW = (function(x, y) {
  return $f_s_math_Ordering$Double$IeeeOrdering__gteq__D__D__Z(this, (+x), (+y));
});
$p.cD = (function(x, y) {
  var x$1 = (+x);
  var y$1 = (+y);
  return (+Math.max(x$1, y$1));
});
$p.cE = (function(x, y) {
  var x$1 = (+x);
  var y$1 = (+y);
  return (+Math.min(x$1, y$1));
});
$p.qD = (function(x, y) {
  return $f_s_math_Numeric$DoubleIsFractional__plus__D__D__D(this, (+x), (+y));
});
$p.r2 = (function(x, y) {
  return $f_s_math_Numeric$DoubleIsFractional__times__D__D__D(this, (+x), (+y));
});
$p.im = (function(x) {
  return x;
});
var $d_s_math_Numeric$DoubleIsFractional$ = new $TypeData().i($c_s_math_Numeric$DoubleIsFractional$, "scala.math.Numeric$DoubleIsFractional$", ({
  iw: 1,
  G: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iu: 1,
  is: 1,
  iv: 1,
  iH: 1
}));
var $n_s_math_Numeric$DoubleIsFractional$;
function $m_s_math_Numeric$DoubleIsFractional$() {
  if ((!$n_s_math_Numeric$DoubleIsFractional$)) {
    $n_s_math_Numeric$DoubleIsFractional$ = new $c_s_math_Numeric$DoubleIsFractional$();
  }
  return $n_s_math_Numeric$DoubleIsFractional$;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.iP = ($thiz.e4 !== null);
  $thiz.hy = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.e4);
  if ($thiz.iP) {
    var newParentLastUpdateId = $thiz.e4.k9();
    if ((newParentLastUpdateId !== $thiz.hy)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.kq(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.hy = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.iP) {
    $thiz.hy = $thiz.e4.k9();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.e4, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.e4, $thiz);
}
/** @constructor */
function $c_sc_AbstractSet() {
}
$p = $c_sc_AbstractSet.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSet;
/** @constructor */
function $h_sc_AbstractSet() {
}
$h_sc_AbstractSet.prototype = $p;
$p.v4 = (function(that) {
  return this.fX(that);
});
$p.p = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.b8 = (function() {
  return "Set";
});
$p.u = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.e = (function(v1) {
  return this.bO(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.b0() === o.b0())) {
      try {
        return $thiz.fX(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((map$1) => ((kv$2) => $m_sr_BoxesRunTime$().l(map$1.cV(kv$2.R, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sc_Map$().os.I()))), kv$2.O)))(o)));
      } catch (e) {
        if (false) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ad)));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.ly = null;
  this.lx = false;
  this.lz = null;
  this.lu = null;
  this.lw = null;
  this.lB = false;
  this.iM = null;
  this.lv = null;
  this.lA = 0;
  this.iM = parent;
  this.lv = fn;
  this.ly = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.lA = ((1 + parent.fi()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.eD = (function() {
  return this.ly;
});
$p.ex = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.g3 = (function() {
  return this.lx;
});
$p.eE = (function() {
  return this.lz;
});
$p.cY = (function(x$1) {
  this.lx = x$1;
});
$p.g7 = (function(x$1) {
  this.lz = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.hf = (function(observer) {
});
$p.dp = (function() {
  return this.lu;
});
$p.ds = (function() {
  return this.lw;
});
$p.hr = (function() {
  return this.lB;
});
$p.fm = (function(x$1) {
  this.lB = x$1;
});
$p.h4 = (function(x$0) {
  this.lu = x$0;
});
$p.h5 = (function(x$0) {
  this.lw = x$0;
});
$p.hm = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.iM);
});
$p.hj = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.hk = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.hl = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.fi = (function() {
  return this.lA;
});
$p.iz = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.lv.e(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchResult1: {
      var $x_1;
      var x2 = $m_s_util_control_NonFatal$().e3(e$2);
      if ((!x2.c())) {
        var $x_1 = new $c_s_util_Failure(x2.A());
        break matchResult1;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
    }
  }
  $x_1.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
    if ((!nextValue.c())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.A(), transaction);
    }
  })));
});
$p.hg = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.kX = (function() {
  return this.iM;
});
$p.hd = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.fh = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  d5: 1,
  ao: 1,
  ab: 1,
  at: 1,
  au: 1,
  aT: 1,
  aR: 1,
  av: 1,
  aV: 1,
  aI: 1,
  be: 1,
  bd: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.lF = null;
  this.lE = false;
  this.lG = null;
  this.iN = 0;
  this.lC = null;
  this.lD = null;
  this.lI = false;
  this.iO = null;
  this.iP = false;
  this.hy = 0;
  this.e4 = null;
  this.iQ = null;
  this.iR = null;
  this.lH = 0;
  this.e4 = parent;
  this.iQ = project;
  this.iR = recover;
  this.lF = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.iN = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.iO = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.lH = ((1 + parent.fi()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.eD = (function() {
  return this.lF;
});
$p.ex = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.g3 = (function() {
  return this.lE;
});
$p.eE = (function() {
  return this.lG;
});
$p.cY = (function(x$1) {
  this.lE = x$1;
});
$p.g7 = (function(x$1) {
  this.lG = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.k9 = (function() {
  return this.iN;
});
$p.ka = (function(x$1) {
  this.iN = x$1;
});
$p.hf = (function(observer) {
  observer.g8($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.dp = (function() {
  return this.lC;
});
$p.ds = (function() {
  return this.lD;
});
$p.hr = (function() {
  return this.lI;
});
$p.fm = (function(x$1) {
  this.lI = x$1;
});
$p.h4 = (function(x$0) {
  this.lC = x$0;
});
$p.h5 = (function(x$0) {
  this.lD = x$0;
});
$p.kS = (function() {
  return this.iO;
});
$p.qn = (function(x$1) {
  this.iO = x$1;
});
$p.l9 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.iz = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.hg = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.hm = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.hj = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.hk = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.fi = (function() {
  return this.lH;
});
$p.hl = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.iR;
    if (this$2.c()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.A();
      try {
        var $x_1 = new $c_s_util_Success(x0.bV(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchResult1: {
          var $x_1;
          var x2 = $m_s_util_control_NonFatal$().e3(e$2);
          if ((!x2.c())) {
            var $x_1 = new $c_s_util_Failure(x2.A());
            break matchResult1;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
        }
      }
      $x_1.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.c())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.A(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.kQ(this.iQ), transaction);
  })));
});
$p.kq = (function() {
  var originalValue = this.e4.l9().kQ(this.iQ);
  return originalValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.iR;
    if (this$2.c()) {
      return originalValue;
    } else {
      var x0 = this$2.A();
      try {
        var $x_1 = new $c_s_util_Success(x0.bV(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchResult1: {
          var $x_1;
          var x2 = $m_s_util_control_NonFatal$().e3(e$2);
          if ((!x2.c())) {
            var $x_1 = new $c_s_util_Failure(x2.A());
            break matchResult1;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
        }
      }
      return $x_1.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$10 = (nextValue.c() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.A())));
          return (this$10.c() ? originalValue : this$10.A());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$6) => originalValue)));
});
$p.hd = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this, project, $m_s_None$());
});
$p.fh = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  d6: 1,
  ao: 1,
  ab: 1,
  at: 1,
  au: 1,
  aU: 1,
  bj: 1,
  av: 1,
  bk: 1,
  aI: 1,
  cO: 1,
  cP: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapStream(parent, project, recover) {
  this.lM = null;
  this.lL = false;
  this.lN = null;
  this.lJ = null;
  this.lK = null;
  this.lR = false;
  this.iS = null;
  this.lO = null;
  this.lP = null;
  this.lQ = 0;
  this.iS = parent;
  this.lO = project;
  this.lP = recover;
  this.lM = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.lQ = ((1 + parent.fi()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapStream() {
}
$h_Lcom_raquo_airstream_misc_MapStream.prototype = $p;
$p.eD = (function() {
  return this.lM;
});
$p.ex = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.g3 = (function() {
  return this.lL;
});
$p.eE = (function() {
  return this.lN;
});
$p.cY = (function(x$1) {
  this.lL = x$1;
});
$p.g7 = (function(x$1) {
  this.lN = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.hf = (function(observer) {
});
$p.dp = (function() {
  return this.lJ;
});
$p.ds = (function() {
  return this.lK;
});
$p.hr = (function() {
  return this.lR;
});
$p.fm = (function(x$1) {
  this.lR = x$1;
});
$p.h4 = (function(x$0) {
  this.lJ = x$0;
});
$p.h5 = (function(x$0) {
  this.lK = x$0;
});
$p.hm = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.iS);
});
$p.hj = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.hk = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.hl = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.kX = (function() {
  return this.iS;
});
$p.fi = (function() {
  return this.lQ;
});
$p.iz = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.lO.e(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchResult1: {
      var $x_1;
      var x2 = $m_s_util_control_NonFatal$().e3(e$2);
      if ((!x2.c())) {
        var $x_1 = new $c_s_util_Failure(x2.A());
        break matchResult1;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
    }
  }
  $x_1.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    this.hg(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, _$2, transaction);
  })));
});
$p.hg = (function(nextError, transaction) {
  var this$1 = this.lP;
  if (this$1.c()) {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
  } else {
    var x0 = this$1.A();
    try {
      var $x_1 = new $c_s_util_Success(x0.bV(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => null))));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      matchResult1: {
        var $x_1;
        var x2 = $m_s_util_control_NonFatal$().e3(e$2);
        if ((!x2.c())) {
          var $x_1 = new $c_s_util_Failure(x2.A());
          break matchResult1;
        }
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
      }
    }
    $x_1.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((tryError) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError), transaction);
    })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
      if ((nextValue === null)) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
      } else if ((!nextValue.c())) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.A(), transaction);
      }
    })));
  }
});
$p.hd = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.fh = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapStream, "com.raquo.airstream.misc.MapStream", ({
  d7: 1,
  ao: 1,
  ab: 1,
  at: 1,
  au: 1,
  aT: 1,
  aR: 1,
  av: 1,
  aV: 1,
  aI: 1,
  be: 1,
  bd: 1
}));
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.bV = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cc = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bn = (function() {
  return this.ch().d();
});
$p.kM = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.b6 = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.aZ = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.g9 = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.id = (function(that) {
  return true;
});
$p.p = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().qO(this);
});
$p.u = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cf = (function(x) {
  return this.kM((x | 0));
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
$p.cc = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bn = (function() {
  return this.ch().d();
});
$p.aZ = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.eB = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.b8 = (function() {
  return "SeqView";
});
$p.z = (function(f) {
  return this.eB(f);
});
$p.b6 = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.s)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.s)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aE)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
function $f_scm_CheckedIndexedSeqView__iterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.qo().I() | 0))));
}
function $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.qo().I() | 0))));
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.mG = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.rj = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
  $thiz.rk = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
}
/** @constructor */
function $c_sc_AbstractMap() {
}
$p = $c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
}
$h_sc_AbstractMap.prototype = $p;
$p.bV = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cT = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.cf = (function(key) {
  return this.bO(key);
});
$p.cQ = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.h9 = (function(coll) {
  return this.kR().a5(coll);
});
$p.p = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().tY(this);
});
$p.b8 = (function() {
  return "Map";
});
$p.u = (function() {
  return $f_sc_Iterable__toString__T(this);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.eZ = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.eZ = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.o = (function(idx) {
  return this.eZ.o(idx);
});
$p.i = (function() {
  return this.eZ.i();
});
$p.d = (function() {
  return this.eZ.d();
});
$p.s = (function() {
  return this.eZ.s();
});
$p.c = (function() {
  return this.eZ.c();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  bW: 1,
  aC: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a7: 1
}));
function $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f) {
  $thiz.gA = underlying;
  $thiz.hR = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.f1 = null;
  this.gD = null;
  this.gA = null;
  this.hR = null;
}
$p = $c_sc_SeqView$Map.prototype = new $h_sc_View$Map();
$p.constructor = $c_sc_SeqView$Map;
/** @constructor */
function $h_sc_SeqView$Map() {
}
$h_sc_SeqView$Map.prototype = $p;
$p.cc = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bn = (function() {
  return this.ch().d();
});
$p.aZ = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.eB = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.b8 = (function() {
  return "SeqView";
});
$p.o = (function(idx) {
  return this.hR.e(this.gA.o(idx));
});
$p.i = (function() {
  return this.gA.i();
});
$p.z = (function(f) {
  return this.eB(f);
});
$p.b6 = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
var $d_sc_SeqView$Map = new $TypeData().i($c_sc_SeqView$Map, "scala.collection.SeqView$Map", ({
  b1: 1,
  aM: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a7: 1
}));
function $ct_sc_SeqView$Reverse__sc_SeqOps__($thiz, underlying) {
  $thiz.f0 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.f0 = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.o = (function(i) {
  return this.f0.o(((((this.i() - 1) | 0) - i) | 0));
});
$p.i = (function() {
  return this.f0.i();
});
$p.d = (function() {
  return this.f0.bn();
});
$p.s = (function() {
  return this.f0.s();
});
$p.c = (function() {
  return this.f0.c();
});
var $d_sc_SeqView$Reverse = new $TypeData().i($c_sc_SeqView$Reverse, "scala.collection.SeqView$Reverse", ({
  bX: 1,
  aC: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a7: 1
}));
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.x)));
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.x)));
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.mv = null;
  this.mw = false;
  this.mX = null;
  this.mY = false;
  this.mz = null;
  this.mA = false;
  this.mR = null;
  this.mS = false;
  this.mP = null;
  this.mQ = false;
  this.mL = null;
  this.mM = false;
  this.mE = null;
  this.mF = false;
  this.mN = null;
  this.mO = false;
  this.n5 = null;
  this.n6 = false;
  this.n3 = null;
  this.n4 = false;
  this.n9 = null;
  this.na = false;
  this.n1 = null;
  this.n2 = false;
  this.mT = null;
  this.mU = false;
  this.mx = null;
  this.my = false;
  this.mC = null;
  this.mD = false;
  this.mH = null;
  this.mI = false;
  this.mJ = null;
  this.mK = false;
  this.mV = null;
  this.mW = false;
  this.mB = null;
  this.j3 = null;
  this.j2 = null;
  this.ri = null;
  this.mt = null;
  this.mu = false;
  this.mZ = null;
  this.n0 = false;
  this.mG = null;
  this.n7 = null;
  this.n8 = false;
  this.rj = null;
  this.rk = null;
  $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__$init$__V(this);
  $f_Lcom_raquo_laminar_api_MountHooks__$init$__V(this);
  $f_Lcom_raquo_laminar_api_AirstreamAliases__$init$__V(this);
  $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V(this);
  $f_Lcom_raquo_laminar_api_Laminar__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_api_package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_package$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_package$$anon$1() {
}
$h_Lcom_raquo_laminar_api_package$$anon$1.prototype = $p;
$p.i9 = (function() {
  if ((!this.mw)) {
    this.mv = new $c_Lcom_raquo_laminar_tags_HtmlTag("a", false);
    this.mw = true;
  }
  return this.mv;
});
$p.qX = (function() {
  if ((!this.mY)) {
    this.mX = new $c_Lcom_raquo_laminar_tags_HtmlTag("span", false);
    this.mY = true;
  }
  return this.mX;
});
$p.fS = (function() {
  if ((!this.mA)) {
    this.mz = new $c_Lcom_raquo_laminar_tags_HtmlTag("br", true);
    this.mA = true;
  }
  return this.mz;
});
$p.qk = (function() {
  if ((!this.mS)) {
    this.mR = new $c_Lcom_raquo_laminar_tags_HtmlTag("label", false);
    this.mS = true;
  }
  return this.mR;
});
$p.qb = (function() {
  if ((!this.mQ)) {
    this.mP = new $c_Lcom_raquo_laminar_tags_HtmlTag("input", true);
    this.mQ = true;
  }
  return this.mP;
});
$p.tu = (function() {
  if ((!this.mM)) {
    this.mL = new $c_Lcom_raquo_laminar_tags_HtmlTag("hr", true);
    this.mM = true;
  }
  return this.mL;
});
$p.fd = (function() {
  if ((!this.mF)) {
    this.mE = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.mF = true;
  }
  return this.mE;
});
$p.iq = (function() {
  if ((!this.mO)) {
    this.mN = new $c_Lcom_raquo_laminar_keys_HtmlAttr("href", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.mO = true;
  }
  return this.mN;
});
$p.v9 = (function() {
  if ((!this.n6)) {
    this.n5 = new $c_Lcom_raquo_laminar_keys_HtmlAttr("type", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.n6 = true;
  }
  return this.n5;
});
$p.r7 = (function() {
  if ((!this.n4)) {
    this.n3 = this.v9();
    this.n4 = true;
  }
  return this.n3;
});
$p.rb = (function() {
  if ((!this.na)) {
    this.n9 = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.na = true;
  }
  return this.n9;
});
$p.iE = (function() {
  if ((!this.n2)) {
    this.n1 = new $c_Lcom_raquo_laminar_keys_HtmlProp("target", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.n2 = true;
  }
  return this.n1;
});
$p.qv = (function() {
  if ((!this.mU)) {
    this.mT = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.mU = true;
  }
  return this.mT;
});
$p.pn = (function() {
  if ((!this.my)) {
    this.mx = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3("align-items");
    this.my = true;
  }
  return this.mx;
});
$p.pM = (function() {
  if ((!this.mD)) {
    this.mC = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28("display");
    this.mD = true;
  }
  return this.mC;
});
$p.pY = (function() {
  if ((!this.mI)) {
    this.mH = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$31("flex-wrap");
    this.mI = true;
  }
  return this.mH;
});
$p.q7 = (function() {
  if ((!this.mK)) {
    this.mJ = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5("gap");
    this.mK = true;
  }
  return this.mJ;
});
$p.qx = (function() {
  if ((!this.mW)) {
    this.mV = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$11("overflow-x");
    this.mW = true;
  }
  return this.mV;
});
$p.rO = (function() {
  if ((!this.mu)) {
    this.mt = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.mu = true;
  }
  return this.mt;
});
$p.bo = (function() {
  if ((!this.n0)) {
    this.mZ = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.n0 = true;
  }
  return this.mZ;
});
$p.vc = (function() {
  if ((!this.n8)) {
    this.n7 = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.n8 = true;
  }
  return this.n7;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  dA: 1,
  dY: 1,
  dD: 1,
  dI: 1,
  bp: 1,
  dJ: 1,
  dF: 1,
  dy: 1,
  ds: 1,
  dx: 1,
  bn: 1,
  bq: 1,
  bm: 1,
  dt: 1
}));
/** @constructor */
function $c_sc_AbstractMapView() {
}
$p = $c_sc_AbstractMapView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractMapView;
/** @constructor */
function $h_sc_AbstractMapView() {
}
$h_sc_AbstractMapView.prototype = $p;
$p.cV = (function(key, default$1) {
  return $f_sc_MapOps__getOrElse__O__F0__O(this, key, default$1);
});
$p.e = (function(key) {
  return $f_sc_MapOps__apply__O__O(this, key);
});
$p.bV = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eI = (function() {
  return new $c_sc_MapOps$$anon$3(this);
});
$p.cf = (function(key) {
  return $f_sc_MapOps__contains__O__Z(this, key);
});
$p.cQ = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.u = (function() {
  return $f_sc_View__toString__T(this);
});
$p.b8 = (function() {
  return "MapView";
});
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.ag)));
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$p = $c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $p;
$p.ch = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aZ = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.b8 = (function() {
  return "IndexedSeqView";
});
/** @constructor */
function $c_sc_MapView$Id(underlying) {
  this.gy = null;
  this.gy = underlying;
}
$p = $c_sc_MapView$Id.prototype = new $h_sc_AbstractMapView();
$p.constructor = $c_sc_MapView$Id;
/** @constructor */
function $h_sc_MapView$Id() {
}
$h_sc_MapView$Id.prototype = $p;
$p.bX = (function(key) {
  return this.gy.bX(key);
});
$p.d = (function() {
  return this.gy.d();
});
$p.s = (function() {
  return this.gy.s();
});
$p.c = (function() {
  return this.gy.c();
});
var $d_sc_MapView$Id = new $TypeData().i($c_sc_MapView$Id, "scala.collection.MapView$Id", ({
  gE: 1,
  bL: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  i: 1,
  j: 1,
  ae: 1,
  bV: 1
}));
/** @constructor */
function $c_sc_MapView$MapValues(underlying, f) {
  this.gz = null;
  this.jM = null;
  this.gz = underlying;
  this.jM = f;
}
$p = $c_sc_MapView$MapValues.prototype = new $h_sc_AbstractMapView();
$p.constructor = $c_sc_MapView$MapValues;
/** @constructor */
function $h_sc_MapView$MapValues() {
}
$h_sc_MapView$MapValues.prototype = $p;
$p.d = (function() {
  return new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((kv$2) => new $c_T2(kv$2.R, this.jM.e(kv$2.O)))), this.gz.d());
});
$p.bX = (function(key) {
  var this$1 = this.gz.bX(key);
  var f = this.jM;
  return (this$1.c() ? $m_s_None$() : new $c_s_Some(f.e(this$1.A())));
});
$p.s = (function() {
  return this.gz.s();
});
$p.c = (function() {
  return this.gz.c();
});
var $d_sc_MapView$MapValues = new $TypeData().i($c_sc_MapView$MapValues, "scala.collection.MapView$MapValues", ({
  gF: 1,
  bL: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  i: 1,
  j: 1,
  ae: 1,
  bV: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.eZ = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.ch = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aZ = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.b8 = (function() {
  return "IndexedSeqView";
});
$p.z = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.eB = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  gr: 1,
  bW: 1,
  aC: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a7: 1,
  p: 1,
  aD: 1
}));
function $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__($thiz, underlying, f) {
  $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Map() {
  this.f1 = null;
  this.gD = null;
  this.gA = null;
  this.hR = null;
}
$p = $c_sc_IndexedSeqView$Map.prototype = new $h_sc_SeqView$Map();
$p.constructor = $c_sc_IndexedSeqView$Map;
/** @constructor */
function $h_sc_IndexedSeqView$Map() {
}
$h_sc_IndexedSeqView$Map.prototype = $p;
$p.ch = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aZ = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.g6 = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.b8 = (function() {
  return "IndexedSeqView";
});
$p.z = (function(f) {
  return this.g6(f);
});
$p.eB = (function(f) {
  return this.g6(f);
});
var $d_sc_IndexedSeqView$Map = new $TypeData().i($c_sc_IndexedSeqView$Map, "scala.collection.IndexedSeqView$Map", ({
  bR: 1,
  b1: 1,
  aM: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a7: 1,
  p: 1,
  aD: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Reverse(underlying) {
  this.f0 = null;
  $ct_sc_SeqView$Reverse__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Reverse.prototype = new $h_sc_SeqView$Reverse();
$p.constructor = $c_sc_IndexedSeqView$Reverse;
/** @constructor */
function $h_sc_IndexedSeqView$Reverse() {
}
$h_sc_IndexedSeqView$Reverse.prototype = $p;
$p.ch = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aZ = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.b8 = (function() {
  return "IndexedSeqView";
});
$p.z = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.eB = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  gs: 1,
  bX: 1,
  aC: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a7: 1,
  p: 1,
  aD: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
$p.gf = (function() {
  return this;
});
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.jU = null;
  this.hX = null;
  this.jU = underlying;
  this.hX = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.o = (function(n) {
  return this.jU.o(n);
});
$p.i = (function() {
  return this.jU.aq;
});
$p.bC = (function() {
  return "ArrayBufferView";
});
$p.d = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.hX);
});
$p.bn = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(this, this.hX);
});
$p.g6 = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.hX);
});
$p.z = (function(f) {
  return this.g6(f);
});
$p.eB = (function(f) {
  return this.g6(f);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  hP: 1,
  gf: 1,
  aC: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a7: 1,
  p: 1,
  aD: 1
}));
/** @constructor */
function $c_sci_AbstractMap() {
}
$p = $c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$p.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
}
$h_sci_AbstractMap.prototype = $p;
$p.at = (function() {
  return $m_sci_Iterable$();
});
$p.kR = (function() {
  return $m_sci_Map$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ($is_sci_IndexedSeq(that) ? ($thiz.i() === that.i()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.i();
      var equal = (length === o.i());
      if (equal) {
        var index = 0;
        var a = $thiz.ic();
        var b = o.ic();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().l($thiz.o(index), o.o(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.d().e1(index);
          var thatIt = o.d().e1(index);
          while ((equal && thisIt.j())) {
            equal = $m_sr_BoxesRunTime$().l(thisIt.f(), thatIt.f());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.A)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.A)));
}
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ht)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hu)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hv)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hw)));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_CheckedIndexedSeqView$Map(underlying, f, mutationCount) {
  this.f1 = null;
  this.gD = null;
  this.gA = null;
  this.hR = null;
  this.gM = null;
  this.gM = mutationCount;
  $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(this, underlying, f);
}
$p = $c_scm_CheckedIndexedSeqView$Map.prototype = new $h_sc_IndexedSeqView$Map();
$p.constructor = $c_scm_CheckedIndexedSeqView$Map;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Map() {
}
$h_scm_CheckedIndexedSeqView$Map.prototype = $p;
$p.d = (function() {
  return $f_scm_CheckedIndexedSeqView__iterator__sc_Iterator(this);
});
$p.bn = (function() {
  return $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator(this);
});
$p.g6 = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gM);
});
$p.qo = (function() {
  return this.gM;
});
$p.z = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gM);
});
$p.eB = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gM);
});
var $d_scm_CheckedIndexedSeqView$Map = new $TypeData().i($c_scm_CheckedIndexedSeqView$Map, "scala.collection.mutable.CheckedIndexedSeqView$Map", ({
  hZ: 1,
  bR: 1,
  b1: 1,
  aM: 1,
  M: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a7: 1,
  p: 1,
  aD: 1,
  hW: 1
}));
/** @constructor */
function $c_sci_Map$EmptyMap$() {
}
$p = $c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
}
$h_sci_Map$EmptyMap$.prototype = $p;
$p.b0 = (function() {
  return 0;
});
$p.s = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.kg = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.bO = (function(key) {
  return false;
});
$p.bX = (function(key) {
  return $m_s_None$();
});
$p.cV = (function(key, default$1) {
  return default$1.I();
});
$p.d = (function() {
  return $m_sc_Iterator$().J;
});
$p.eI = (function() {
  return $m_sc_Iterator$().J;
});
$p.e = (function(key) {
  this.kg(key);
});
$p.eH = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  hb: 1,
  ar: 1,
  ak: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  ae: 1,
  al: 1,
  d: 1,
  ad: 1,
  v: 1,
  as: 1,
  ag: 1,
  a: 1
}));
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$();
  }
  return $n_sci_Map$EmptyMap$;
}
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.cM = null;
  this.dH = null;
  this.cM = key1;
  this.dH = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.z = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b0 = (function() {
  return 1;
});
$p.s = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().l(key, this.cM)) {
    return this.dH;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bO = (function(key) {
  return $m_sr_BoxesRunTime$().l(key, this.cM);
});
$p.bX = (function(key) {
  return ($m_sr_BoxesRunTime$().l(key, this.cM) ? new $c_s_Some(this.dH) : $m_s_None$());
});
$p.cV = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().l(key, this.cM) ? this.dH : default$1.I());
});
$p.d = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cM, this.dH));
});
$p.eI = (function() {
  return new $c_sc_Iterator$$anon$20(this.dH);
});
$p.fl = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.cM) ? new $c_sci_Map$Map1(this.cM, value) : new $c_sci_Map$Map2(this.cM, this.dH, key, value));
});
$p.fX = (function(p) {
  return (!(!p.e(new $c_T2(this.cM, this.dH))));
});
$p.x = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cI(this.cM, this.dH);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dY;
  h = $m_s_util_hashing_MurmurHash3$().B(h, a);
  h = $m_s_util_hashing_MurmurHash3$().B(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e2(h, c);
  return $m_s_util_hashing_MurmurHash3$().aX(h, 1);
});
$p.eH = (function(key, value) {
  return this.fl(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  cf: 1,
  ar: 1,
  ak: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  ae: 1,
  al: 1,
  d: 1,
  ad: 1,
  v: 1,
  as: 1,
  ag: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.co = null;
  this.dI = null;
  this.cp = null;
  this.dJ = null;
  this.co = key1;
  this.dI = value1;
  this.cp = key2;
  this.dJ = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.z = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b0 = (function() {
  return 2;
});
$p.s = (function() {
  return 2;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().l(key, this.co)) {
    return this.dI;
  } else if ($m_sr_BoxesRunTime$().l(key, this.cp)) {
    return this.dJ;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bO = (function(key) {
  return ($m_sr_BoxesRunTime$().l(key, this.co) || $m_sr_BoxesRunTime$().l(key, this.cp));
});
$p.bX = (function(key) {
  return ($m_sr_BoxesRunTime$().l(key, this.co) ? new $c_s_Some(this.dI) : ($m_sr_BoxesRunTime$().l(key, this.cp) ? new $c_s_Some(this.dJ) : $m_s_None$()));
});
$p.cV = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().l(key, this.co) ? this.dI : ($m_sr_BoxesRunTime$().l(key, this.cp) ? this.dJ : default$1.I()));
});
$p.d = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.eI = (function() {
  return new $c_sci_Map$Map2$$anon$3(this);
});
$p.fl = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.co) ? new $c_sci_Map$Map2(this.co, value, this.cp, this.dJ) : ($m_sr_BoxesRunTime$().l(key, this.cp) ? new $c_sci_Map$Map2(this.co, this.dI, this.cp, value) : new $c_sci_Map$Map3(this.co, this.dI, this.cp, this.dJ, key, value)));
});
$p.fX = (function(p) {
  return ((!(!p.e(new $c_T2(this.co, this.dI)))) && (!(!p.e(new $c_T2(this.cp, this.dJ)))));
});
$p.x = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cI(this.co, this.dI);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cI(this.cp, this.dJ);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dY;
  h = $m_s_util_hashing_MurmurHash3$().B(h, a);
  h = $m_s_util_hashing_MurmurHash3$().B(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e2(h, c);
  return $m_s_util_hashing_MurmurHash3$().aX(h, 2);
});
$p.eH = (function(key, value) {
  return this.fl(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  cg: 1,
  ar: 1,
  ak: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  ae: 1,
  al: 1,
  d: 1,
  ad: 1,
  v: 1,
  as: 1,
  ag: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.c6 = null;
  this.dg = null;
  this.c7 = null;
  this.dh = null;
  this.c8 = null;
  this.di = null;
  this.c6 = key1;
  this.dg = value1;
  this.c7 = key2;
  this.dh = value2;
  this.c8 = key3;
  this.di = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.z = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b0 = (function() {
  return 3;
});
$p.s = (function() {
  return 3;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().l(key, this.c6)) {
    return this.dg;
  } else if ($m_sr_BoxesRunTime$().l(key, this.c7)) {
    return this.dh;
  } else if ($m_sr_BoxesRunTime$().l(key, this.c8)) {
    return this.di;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bO = (function(key) {
  return (($m_sr_BoxesRunTime$().l(key, this.c6) || $m_sr_BoxesRunTime$().l(key, this.c7)) || $m_sr_BoxesRunTime$().l(key, this.c8));
});
$p.bX = (function(key) {
  return ($m_sr_BoxesRunTime$().l(key, this.c6) ? new $c_s_Some(this.dg) : ($m_sr_BoxesRunTime$().l(key, this.c7) ? new $c_s_Some(this.dh) : ($m_sr_BoxesRunTime$().l(key, this.c8) ? new $c_s_Some(this.di) : $m_s_None$())));
});
$p.cV = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().l(key, this.c6) ? this.dg : ($m_sr_BoxesRunTime$().l(key, this.c7) ? this.dh : ($m_sr_BoxesRunTime$().l(key, this.c8) ? this.di : default$1.I())));
});
$p.d = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.eI = (function() {
  return new $c_sci_Map$Map3$$anon$6(this);
});
$p.fl = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.c6) ? new $c_sci_Map$Map3(this.c6, value, this.c7, this.dh, this.c8, this.di) : ($m_sr_BoxesRunTime$().l(key, this.c7) ? new $c_sci_Map$Map3(this.c6, this.dg, this.c7, value, this.c8, this.di) : ($m_sr_BoxesRunTime$().l(key, this.c8) ? new $c_sci_Map$Map3(this.c6, this.dg, this.c7, this.dh, this.c8, value) : new $c_sci_Map$Map4(this.c6, this.dg, this.c7, this.dh, this.c8, this.di, key, value))));
});
$p.fX = (function(p) {
  return (((!(!p.e(new $c_T2(this.c6, this.dg)))) && (!(!p.e(new $c_T2(this.c7, this.dh))))) && (!(!p.e(new $c_T2(this.c8, this.di)))));
});
$p.x = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cI(this.c6, this.dg);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cI(this.c7, this.dh);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cI(this.c8, this.di);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dY;
  h = $m_s_util_hashing_MurmurHash3$().B(h, a);
  h = $m_s_util_hashing_MurmurHash3$().B(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e2(h, c);
  return $m_s_util_hashing_MurmurHash3$().aX(h, 3);
});
$p.eH = (function(key, value) {
  return this.fl(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  ci: 1,
  ar: 1,
  ak: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  ae: 1,
  al: 1,
  d: 1,
  ad: 1,
  v: 1,
  as: 1,
  ag: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bG = null;
  this.cq = null;
  this.bH = null;
  this.cr = null;
  this.bI = null;
  this.cs = null;
  this.bJ = null;
  this.ct = null;
  this.bG = key1;
  this.cq = value1;
  this.bH = key2;
  this.cr = value2;
  this.bI = key3;
  this.cs = value3;
  this.bJ = key4;
  this.ct = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.z = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b0 = (function() {
  return 4;
});
$p.s = (function() {
  return 4;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().l(key, this.bG)) {
    return this.cq;
  } else if ($m_sr_BoxesRunTime$().l(key, this.bH)) {
    return this.cr;
  } else if ($m_sr_BoxesRunTime$().l(key, this.bI)) {
    return this.cs;
  } else if ($m_sr_BoxesRunTime$().l(key, this.bJ)) {
    return this.ct;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bO = (function(key) {
  return ((($m_sr_BoxesRunTime$().l(key, this.bG) || $m_sr_BoxesRunTime$().l(key, this.bH)) || $m_sr_BoxesRunTime$().l(key, this.bI)) || $m_sr_BoxesRunTime$().l(key, this.bJ));
});
$p.bX = (function(key) {
  return ($m_sr_BoxesRunTime$().l(key, this.bG) ? new $c_s_Some(this.cq) : ($m_sr_BoxesRunTime$().l(key, this.bH) ? new $c_s_Some(this.cr) : ($m_sr_BoxesRunTime$().l(key, this.bI) ? new $c_s_Some(this.cs) : ($m_sr_BoxesRunTime$().l(key, this.bJ) ? new $c_s_Some(this.ct) : $m_s_None$()))));
});
$p.cV = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().l(key, this.bG) ? this.cq : ($m_sr_BoxesRunTime$().l(key, this.bH) ? this.cr : ($m_sr_BoxesRunTime$().l(key, this.bI) ? this.cs : ($m_sr_BoxesRunTime$().l(key, this.bJ) ? this.ct : default$1.I()))));
});
$p.d = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.eI = (function() {
  return new $c_sci_Map$Map4$$anon$9(this);
});
$p.fl = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.bG) ? new $c_sci_Map$Map4(this.bG, value, this.bH, this.cr, this.bI, this.cs, this.bJ, this.ct) : ($m_sr_BoxesRunTime$().l(key, this.bH) ? new $c_sci_Map$Map4(this.bG, this.cq, this.bH, value, this.bI, this.cs, this.bJ, this.ct) : ($m_sr_BoxesRunTime$().l(key, this.bI) ? new $c_sci_Map$Map4(this.bG, this.cq, this.bH, this.cr, this.bI, value, this.bJ, this.ct) : ($m_sr_BoxesRunTime$().l(key, this.bJ) ? new $c_sci_Map$Map4(this.bG, this.cq, this.bH, this.cr, this.bI, this.cs, this.bJ, value) : $m_sci_HashMap$().gH.fk(this.bG, this.cq).fk(this.bH, this.cr).fk(this.bI, this.cs).fk(this.bJ, this.ct).fk(key, value)))));
});
$p.fX = (function(p) {
  return ((((!(!p.e(new $c_T2(this.bG, this.cq)))) && (!(!p.e(new $c_T2(this.bH, this.cr))))) && (!(!p.e(new $c_T2(this.bI, this.cs))))) && (!(!p.e(new $c_T2(this.bJ, this.ct)))));
});
$p.st = (function(builder) {
  return builder.fc(this.bG, this.cq).fc(this.bH, this.cr).fc(this.bI, this.cs).fc(this.bJ, this.ct);
});
$p.x = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cI(this.bG, this.cq);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cI(this.bH, this.cr);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cI(this.bI, this.cs);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cI(this.bJ, this.ct);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dY;
  h = $m_s_util_hashing_MurmurHash3$().B(h, a);
  h = $m_s_util_hashing_MurmurHash3$().B(h, b);
  h = $m_s_util_hashing_MurmurHash3$().e2(h, c);
  return $m_s_util_hashing_MurmurHash3$().aX(h, 4);
});
$p.eH = (function(key, value) {
  return this.fl(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  ck: 1,
  ar: 1,
  ak: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  ae: 1,
  al: 1,
  d: 1,
  ad: 1,
  v: 1,
  as: 1,
  ag: 1,
  l: 1,
  a: 1
}));
function $is_scm_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.bc)));
}
function $isArrayOf_scm_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bc)));
}
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gX)));
}
/** @constructor */
function $c_scm_AbstractSet() {
}
$p = $c_scm_AbstractSet.prototype = new $h_sc_AbstractSet();
$p.constructor = $c_scm_AbstractSet;
/** @constructor */
function $h_scm_AbstractSet() {
}
$h_scm_AbstractSet.prototype = $p;
$p.af = (function() {
  return this;
});
function $ct_sci_LazyList__O__($thiz, lazyState) {
  $thiz.ba = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : $m_sci_LazyList$Uninitialized$());
  $thiz.df = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : lazyState);
  return $thiz;
}
function $ct_sci_LazyList__O__sci_LazyList__($thiz, head, tail) {
  $ct_sci_LazyList__O__($thiz, $m_sci_LazyList$EmptyMarker$());
  $thiz.ba = head;
  $thiz.df = tail;
  return $thiz;
}
function $p_sci_LazyList__initState__V($thiz) {
  if (($thiz.ba === $m_sci_LazyList$Uninitialized$())) {
    if (($thiz.df === $m_sci_LazyList$MidEvaluation$())) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
    }
    var fun = $thiz.df;
    $thiz.df = $m_sci_LazyList$MidEvaluation$();
    try {
      var l = $p_sci_LazyList__evaluated__sci_LazyList(fun.I());
    } finally {
      $thiz.df = fun;
    }
    $thiz.df = l.df;
    $thiz.ba = l.ba;
  }
}
function $p_sci_LazyList__evaluated__sci_LazyList($thiz) {
  while (true) {
    if (($thiz.ba !== $m_sci_LazyList$Uninitialized$())) {
      return (($thiz.df === null) ? $m_sci_LazyList$().G : $thiz);
    } else {
      $p_sci_LazyList__initState__V($thiz);
    }
  }
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (($p_sci_LazyList__evaluated__sci_LazyList($thiz) === $m_sci_LazyList$().G) ? $m_sci_LazyList$().G : ($m_sci_LazyList$(), $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), f.e($thiz.q()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.aw(), f)))))));
}
function $p_sci_LazyList__eagerHeadZipImpl__sc_Iterator__sci_LazyList($thiz, it) {
  return ((($p_sci_LazyList__evaluated__sci_LazyList($thiz) === $m_sci_LazyList$().G) || (!it.j())) ? $m_sci_LazyList$().G : ($m_sci_LazyList$(), $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), new $c_T2($thiz.q(), it.f()), ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sci_LazyList__eagerHeadZipImpl__sc_Iterator__sci_LazyList($thiz.aw(), it))))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.t = (("" + b.t) + start);
  if (($thiz.ba === $m_sci_LazyList$Uninitialized$())) {
    b.t = (b.t + "<not computed>");
  } else if (($p_sci_LazyList__evaluated__sci_LazyList($thiz) !== $m_sci_LazyList$().G)) {
    var obj = $thiz.q();
    b.t = (("" + b.t) + obj);
    var cursor = $thiz;
    var scout = $thiz.aw();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$1) !== $m_sci_LazyList$().G))) {
        scout = scout.aw();
        while (true) {
          if ((cursor !== scout)) {
            var this$2 = scout;
            var $x_1 = ((this$2.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$2) !== $m_sci_LazyList$().G));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var c = cursor;
            b.t = (("" + b.t) + sep);
            var obj$1 = c.q();
            b.t = (("" + b.t) + obj$1);
            cursor = cursor.aw();
            scout = scout.aw();
            var this$3 = scout;
            if (((this$3.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$3) !== $m_sci_LazyList$().G))) {
              scout = scout.aw();
            }
          } else {
            break;
          }
        }
      }
    }
    var this$4 = scout;
    if ((!((this$4.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$4) !== $m_sci_LazyList$().G)))) {
      while ((cursor !== scout)) {
        var c$1 = cursor;
        b.t = (("" + b.t) + sep);
        var obj$2 = c$1.q();
        b.t = (("" + b.t) + obj$2);
        cursor = cursor.aw();
      }
      if ((!(cursor.ba !== $m_sci_LazyList$Uninitialized$()))) {
        b.t = (("" + b.t) + sep);
        b.t = (b.t + "<not computed>");
      }
    } else {
      if ((cursor !== $thiz)) {
        var runner = $thiz;
        while ((runner !== scout)) {
          runner = runner.aw();
          scout = scout.aw();
        }
        while (true) {
          var ct = cursor.aw();
          if ((ct !== scout)) {
            var c$2 = cursor;
            b.t = (("" + b.t) + sep);
            var obj$3 = c$2.q();
            b.t = (("" + b.t) + obj$3);
          }
          cursor = ct;
          if ((cursor !== scout)) {
          } else {
            break;
          }
        }
      }
      b.t = (("" + b.t) + sep);
      b.t = (b.t + "<cycle>");
    }
  }
  b.t = (("" + b.t) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList() {
  this.ba = null;
  this.df = null;
}
$p = $c_sci_LazyList.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.i = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.g5 = (function() {
  return $f_sc_LinearSeqOps__last__O(this);
});
$p.aZ = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.kM = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.o = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.g9 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.b8 = (function() {
  return "LinearSeq";
});
$p.c = (function() {
  return ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G);
});
$p.s = (function() {
  return (((this.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? 0 : (-1));
});
$p.q = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) {
    throw new $c_ju_NoSuchElementException("head of empty lazy list");
  } else {
    return this.ba;
  }
});
$p.aw = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) {
    throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
  } else {
    return this.df;
  }
});
$p.t7 = (function() {
  var these = this;
  var those = this;
  if ((!($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().G))) {
    these = these.aw();
  }
  while ((those !== these)) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().G)) {
      return this;
    }
    these = these.aw();
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().G)) {
      return this;
    }
    these = these.aw();
    if ((these === those)) {
      return this;
    }
    those = those.aw();
  }
  return this;
});
$p.d = (function() {
  return (((this.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sc_Iterator$().J : new $c_sci_LazyList$LazyIterator(this));
});
$p.bW = (function(f) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if ((!($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal1) === $m_sci_LazyList$().G))) {
      f.e(\u03b4this$tailLocal1.q());
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.aw();
    } else {
      return (void 0);
    }
  }
});
$p.dq = (function(z, op) {
  var \u03b4this$tailLocal2 = this;
  var z$tailLocal1 = z;
  while (true) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal2) === $m_sci_LazyList$().G)) {
      return z$tailLocal1;
    } else {
      var \u03b4this$tailLocal2$tmp1 = \u03b4this$tailLocal2.aw();
      var z$tailLocal1$tmp1 = op.bN(z$tailLocal1, \u03b4this$tailLocal2.q());
      \u03b4this$tailLocal2 = \u03b4this$tailLocal2$tmp1;
      z$tailLocal1 = z$tailLocal1$tmp1;
    }
  }
});
$p.bC = (function() {
  return "LazyList";
});
$p.du = (function(f) {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  } else {
    var reducedRes = this.q();
    var left = this.aw();
    while ((!($p_sci_LazyList__evaluated__sci_LazyList(left) === $m_sci_LazyList$().G))) {
      reducedRes = f.bN(reducedRes, left.q());
      left = left.aw();
    }
    return reducedRes;
  }
});
$p.tU = (function(f) {
  return (((this.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sci_LazyList$().G : $p_sci_LazyList__mapImpl__F1__sci_LazyList(this, f));
});
$p.t4 = (function(f) {
  return (((this.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sci_LazyList$().G : $m_sci_LazyList$().qM(this, f));
});
$p.rg = (function(that) {
  return ((((this.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) || (that.s() === 0)) ? $m_sci_LazyList$().G : ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sci_LazyList__eagerHeadZipImpl__sc_Iterator__sci_LazyList(this, that.d()))))));
});
$p.vg = (function() {
  return this.rg($m_sci_LazyList$().pZ(0, 1));
});
$p.sU = (function(n) {
  return ((n <= 0) ? this : (((this.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sci_LazyList$().G : $m_sci_LazyList$().uC(this, n)));
});
$p.cQ = (function(sb, start, sep, end) {
  this.t7();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.bh, start, sep, end);
  return sb;
});
$p.u = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").t;
});
$p.at = (function() {
  return $m_sci_LazyList$();
});
$p.w = (function() {
  return this.aw();
});
$p.l6 = (function() {
  return this.aw();
});
$p.z = (function(f) {
  return this.tU(f);
});
$p.fW = (function(f) {
  return this.t4(f);
});
$p.gh = (function(that) {
  return this.rg(that);
});
$p.hs = (function() {
  return this.vg();
});
$p.pN = (function(n) {
  return this.sU(n);
});
$p.cf = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.e = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ce)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  ce: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  b0: 1,
  aE: 1,
  b5: 1,
  b4: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hK)));
}
function $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, array) {
  $thiz.i3 = array;
  return $thiz;
}
function $ct_sjsr_WrappedVarArgs__($thiz) {
  $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs() {
  this.i3 = null;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cc = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b6 = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.z = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.fW = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.gh = (function(that) {
  return $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this, that);
});
$p.hs = (function() {
  return $f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this);
});
$p.id = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.g9 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.ic = (function() {
  return $m_sci_IndexedSeqDefaults$().oE;
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.g5 = (function() {
  return $f_sc_IndexedSeqOps__last__O(this);
});
$p.aZ = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.gf = (function() {
  return this;
});
$p.p = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().qO(this);
});
$p.u = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bV = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.dt = (function() {
  return $m_sjsr_WrappedVarArgs$().ae();
});
$p.bW = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.dq = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.du = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.bm = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.cH = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.ix = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord);
});
$p.iw = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord);
});
$p.cQ = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.eA = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.i = (function() {
  return (this.i3.length | 0);
});
$p.o = (function(idx) {
  return this.i3[idx];
});
$p.bC = (function() {
  return "WrappedVarArgs";
});
$p.fe = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().kE(coll);
});
$p.cf = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.e = (function(v1) {
  return this.o((v1 | 0));
});
$p.at = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cJ)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  cJ: 1,
  A: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  v: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  B: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.bj = null;
  this.bj = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.z = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.kR = (function() {
  return $m_sci_HashMap$();
});
$p.s = (function() {
  return this.bj.b9;
});
$p.b0 = (function() {
  return this.bj.b9;
});
$p.c = (function() {
  return (this.bj.b9 === 0);
});
$p.d = (function() {
  return (this.c() ? $m_sc_Iterator$().J : new $c_sci_MapKeyValueTupleIterator(this.bj));
});
$p.eI = (function() {
  return (this.c() ? $m_sc_Iterator$().J : new $c_sci_MapValueIterator(this.bj));
});
$p.bO = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cA(keyUnimprovedHash);
  return this.bj.ko(key, keyUnimprovedHash, keyHash, 0);
});
$p.e = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cA(keyUnimprovedHash);
  return this.bj.kf(key, keyUnimprovedHash, keyHash, 0);
});
$p.bX = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cA(keyUnimprovedHash);
  return this.bj.io(key, keyUnimprovedHash, keyHash, 0);
});
$p.cV = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cA(keyUnimprovedHash);
  return this.bj.kH(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fk = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var newRootNode = this.bj.r9(key, value, keyUnimprovedHash, $m_sc_Hashing$().cA(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bj) ? this : new $c_sci_HashMap(newRootNode));
});
$p.cT = (function(f) {
  this.bj.cT(f);
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bj;
      var x$2 = that.bj;
      return ((x === null) ? (x$2 === null) : x.p(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.x = (function() {
  if (this.c()) {
    return $m_s_util_hashing_MurmurHash3$().i4;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bj);
    return $m_s_util_hashing_MurmurHash3$().iF(hashIterator, $m_s_util_hashing_MurmurHash3$().dY);
  }
});
$p.bC = (function() {
  return "HashMap";
});
$p.eH = (function(key, value) {
  return this.fk(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cd)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  cd: 1,
  ar: 1,
  ak: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  ae: 1,
  al: 1,
  d: 1,
  ad: 1,
  v: 1,
  as: 1,
  ag: 1,
  l: 1,
  c0: 1,
  hx: 1,
  a: 1,
  Z: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hy)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hI)));
}
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
$p.aW = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
/** @constructor */
function $c_scm_AbstractMap() {
}
$p = $c_scm_AbstractMap.prototype = new $h_sc_AbstractMap();
$p.constructor = $c_scm_AbstractMap;
/** @constructor */
function $h_scm_AbstractMap() {
}
$h_scm_AbstractMap.prototype = $p;
$p.at = (function() {
  return $m_scm_Iterable$();
});
$p.af = (function() {
  return this;
});
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.k1 = loadFactor;
  $thiz.bf = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.k2 = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.bf.a.length);
  $thiz.er = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
function $p_scm_HashSet__improveHash__I__I($thiz, originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
}
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (($thiz.bf.a.length - 1) | 0));
  matchResult4: {
    var x10 = $thiz.bf.a[idx];
    if ((x10 === null)) {
      $thiz.bf.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
      break matchResult4;
    }
    var prev = null;
    var n = x10;
    while (((n !== null) && (n.dV <= hash))) {
      if (((n.dV === hash) && $m_sr_BoxesRunTime$().l(elem, n.fQ))) {
        return false;
      }
      prev = n;
      n = n.bg;
    }
    if ((prev === null)) {
      $thiz.bf.a[idx] = new $c_scm_HashSet$Node(elem, hash, x10);
    } else {
      var this$3 = prev;
      var n$1 = new $c_scm_HashSet$Node(elem, hash, prev.bg);
      this$3.bg = n$1;
    }
  }
  $thiz.er = ((1 + $thiz.er) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.bf.a.length;
  $thiz.k2 = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.er === 0)) {
    $thiz.bf = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.bf = $m_ju_Arrays$().W($thiz.bf, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.bf.a[i];
        if ((old !== null)) {
          preLow.bg = null;
          preHigh.bg = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.bg;
            if (((n.dV & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.bg = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.bg = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.bg = null;
          if ((old !== preLow.bg)) {
            $thiz.bf.a[i] = preLow.bg;
          }
          if ((preHigh.bg !== null)) {
            $thiz.bf.a[((i + oldlen) | 0)] = preHigh.bg;
            var this$5 = lastHigh;
            this$5.bg = null;
          }
        }
        i = ((1 + i) | 0);
      }
      oldlen = (oldlen << 1);
    }
  }
}
function $p_scm_HashSet__tableSizeFor__I__I($thiz, capacity) {
  var x = ((capacity - 1) | 0);
  var i = ((x > 4) ? x : 4);
  var x$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824);
}
function $p_scm_HashSet__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.k1));
}
/** @constructor */
function $c_scm_HashSet() {
  this.k1 = 0.0;
  this.bf = null;
  this.k2 = 0;
  this.er = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.z = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b0 = (function() {
  return this.er;
});
$p.bO = (function(elem) {
  var hash = $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().E(elem));
  matchResult1: {
    var $x_1;
    var x1 = this.bf.a[(hash & ((this.bf.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.t2(elem, hash);
  }
  return ($x_1 !== null);
});
$p.b5 = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.k1)));
  if ((target > this.bf.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.ia = (function(elem) {
  if ((((1 + this.er) | 0) >= this.k2)) {
    $p_scm_HashSet__growTable__I__V(this, (this.bf.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().E(elem)));
});
$p.pk = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, v1$2, $p_scm_HashSet__improveHash__I__I(this, (v2$2 | 0)));
    }));
    xs.vh.vn(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.j()) {
      var next = iter.f();
      $p_scm_HashSet__addElem__O__I__Z(this, next.fQ, next.dV);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.pR();
    while (iter$2.j()) {
      var next$2 = iter$2.f();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.qi(), next$2.q9());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.d = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.at = (function() {
  return $m_scm_HashSet$();
});
$p.s = (function() {
  return this.er;
});
$p.c = (function() {
  return (this.er === 0);
});
$p.bC = (function() {
  return "HashSet";
});
$p.x = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.j()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().iF(hashIterator, $m_s_util_hashing_MurmurHash3$().pc);
});
$p.aW = (function(elems) {
  return this.pk(elems);
});
$p.ac = (function(elem) {
  this.ia(elem);
  return this;
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cz)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cz: 1,
  hM: 1,
  gg: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  gJ: 1,
  d: 1,
  b2: 1,
  K: 1,
  C: 1,
  I: 1,
  H: 1,
  J: 1,
  N: 1,
  aG: 1,
  ip: 1,
  io: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.h9)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ih)));
}
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.ch = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.g5 = (function() {
  return $f_sc_IndexedSeqOps__last__O(this);
});
$p.aZ = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.id = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.g9 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fW = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.hs = (function() {
  return $f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this);
});
$p.cc = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.h9 = (function(coll) {
  return $m_sci_ArraySeq$().kB(coll, this.as());
});
$p.dt = (function() {
  return $m_sci_ArraySeq$().iy(this.as());
});
$p.eA = (function() {
  return $m_sci_ArraySeq$().hT;
});
$p.tT = (function(f) {
  var a = new $ac_O(this.i());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.e(this.o(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().fj(a);
});
$p.vf = (function(that) {
  if ((that instanceof $c_sci_ArraySeq)) {
    var x = this.i();
    var that$1 = that.i();
    var n = ((x < that$1) ? x : that$1);
    var evidence$1__runtimeClass;
    var evidence$1__runtimeClass = $d_T2.l();
    var n1 = ((n > 0) ? n : 0);
    var componentType = evidence$1__runtimeClass;
    var elements = componentType.y.U(n1);
    var i = 0;
    while ((i < n)) {
      var $x_2 = $m_sr_ScalaRunTime$();
      var $x_1 = i;
      var x0 = i;
      $x_2.T(elements, $x_1, new $c_T2(this.o(x0), that.o(x0)));
      i = ((1 + i) | 0);
    }
    return $m_sci_ArraySeq$().fj(elements);
  } else {
    var b = $m_sci_ArraySeq$().hT.ae();
    var it1 = this.d();
    var it2 = that.d();
    while ((it1.j() && it2.j())) {
      b.ac(new $c_T2(it1.f(), it2.f()));
    }
    return b.af();
  }
});
$p.dq = (function(z, f) {
  var array = this.ci();
  var b = z;
  var i = 0;
  while ((i < $m_jl_reflect_Array$().aP(array))) {
    var a = $m_sr_ScalaRunTime$().ar(array, i);
    b = f.bN(b, a);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.bC = (function() {
  return "ArraySeq";
});
$p.bm = (function(xs, start, len) {
  var srcLen = this.i();
  var destLen = $m_jl_reflect_Array$().aP(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().ew(this.ci(), 0, xs, start, copied);
  }
  return copied;
});
$p.ic = (function() {
  return 2147483647;
});
$p.b7 = (function(ord) {
  if (($m_jl_reflect_Array$().aP(this.ci()) <= 1)) {
    return this;
  } else {
    var original = this.ci();
    var newLength = this.i();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    if ($d_O.R($objectGetClass(original).y.Q().y)) {
      var a = $m_ju_Arrays$().kp(original, newLength, $d_O.r().l());
    } else {
      var dest = new $ac_O(newLength);
      $m_s_Array$().ew(original, 0, dest, 0, $m_jl_reflect_Array$().aP(original));
      var a = dest;
    }
    $m_ju_Arrays$().gd(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.at = (function() {
  return $m_sci_ArraySeq$().hT;
});
$p.z = (function(f) {
  return this.tT(f);
});
$p.gh = (function(that) {
  return this.vf(that);
});
$p.b6 = (function(ord) {
  return this.b7(ord);
});
$p.fe = (function(coll) {
  return $m_sci_ArraySeq$().kB(coll, this.as());
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.h = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.h = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.ch = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.aZ = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.id = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.g9 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fW = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.gh = (function(that) {
  return $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this, that);
});
$p.hs = (function() {
  return $f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this);
});
$p.cc = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b6 = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.eA = (function() {
  return $m_sci_Vector$();
});
$p.i = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.m : this.h.a.length);
});
$p.d = (function() {
  return ((this === $m_sci_Vector0$()) ? $m_sci_Vector$().oK : new $c_sci_NewVectorIterator(this, this.i(), this.dw()));
});
$p.bC = (function() {
  return "Vector";
});
$p.bm = (function(xs, start, len) {
  return this.d().bm(xs, start, len);
});
$p.ic = (function() {
  return $m_sci_Vector$().oJ;
});
$p.aY = (function(index) {
  return $m_scg_CommonErrors$().ha(index, ((this.i() - 1) | 0));
});
$p.q = (function() {
  if ((this.h.a.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.h.a[0];
  }
});
$p.g5 = (function() {
  if ((this instanceof $c_sci_BigVector)) {
    var suffix = this.k;
    if ((suffix.a.length === 0)) {
      throw new $c_ju_NoSuchElementException("empty.tail");
    } else {
      return suffix.a[((suffix.a.length - 1) | 0)];
    }
  } else {
    return this.h.a[((this.h.a.length - 1) | 0)];
  }
});
$p.bW = (function(f) {
  var c = this.dw();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = (((c + ((c >>> 31) | 0)) | 0) >> 1);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.ky(((((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0) - 1) | 0), this.dv(i), f);
    i = ((1 + i) | 0);
  }
});
$p.at = (function() {
  return $m_sci_Vector$();
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.ch = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aZ = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.z = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.cc = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.eA = (function() {
  return $m_scm_ArraySeq$().jY;
});
$p.q6 = (function(coll) {
  var evidence$1 = this.as();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aK();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.s();
  var it = coll.d();
  while (it.j()) {
    var elem = it.f();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().gb(elementClass) : elem));
    jsElems.push(unboxedElem);
  }
  return $m_scm_ArraySeq$().iv($m_scm_ArrayBuilder$().ga(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems));
});
$p.dt = (function() {
  return $m_scm_ArraySeq$().iy(this.as());
});
$p.bC = (function() {
  return "ArraySeq";
});
$p.bm = (function(xs, start, len) {
  var srcLen = this.i();
  var destLen = $m_jl_reflect_Array$().aP(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().ew(this.cb(), 0, xs, start, copied);
  }
  return copied;
});
$p.p = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().aP(this.cb()) !== $m_jl_reflect_Array$().aP(other.cb()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.uZ = (function(ord) {
  return $m_scm_ArraySeq$().iv($m_sc_ArrayOps$().v0(this.cb(), ord));
});
$p.at = (function() {
  return $m_scm_ArraySeq$().jY;
});
$p.h9 = (function(coll) {
  return this.q6(coll);
});
$p.fe = (function(coll) {
  return this.q6(coll);
});
$p.b6 = (function(ord) {
  return this.uZ(ord);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.d8 = null;
  this.d8 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.i = (function() {
  return this.d8.a.length;
});
$p.h1 = (function(i) {
  return this.d8.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.d8, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().pW(this.d8, that.d8) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((this.d8.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Boolean$()))) {
    var this$1 = this.d8;
    var a = this$1.g();
    $m_s_util_Sorting$().l4(a, 0, a.a.length, $m_s_math_Ordering$Boolean$());
    return new $c_sci_ArraySeq$ofBoolean(a);
  } else {
    return $c_sci_ArraySeq.prototype.b7.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.d8);
});
$p.ci = (function() {
  return this.d8;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.o = (function(i) {
  return this.h1(i);
});
$p.e = (function(v1) {
  return this.h1((v1 | 0));
});
$p.b6 = (function(ord) {
  return this.b7(ord);
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c1)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  c1: 1,
  a1: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.d9 = null;
  this.d9 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.i = (function() {
  return this.d9.a.length;
});
$p.gT = (function(i) {
  return this.d9.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.d9, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().pS(this.d9, that.d9) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((this.d9.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Byte$()))) {
    var this$1 = this.d9;
    var a = this$1.g();
    $m_ju_Arrays$().qR(a);
    return new $c_sci_ArraySeq$ofByte(a);
  } else {
    return $c_sci_ArraySeq.prototype.b7.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.d9);
});
$p.ci = (function() {
  return this.d9;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.o = (function(i) {
  return this.gT(i);
});
$p.e = (function(v1) {
  return this.gT((v1 | 0));
});
$p.b6 = (function(ord) {
  return this.b7(ord);
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c2)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  c2: 1,
  a1: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.cL = null;
  this.cL = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.i = (function() {
  return this.cL.a.length;
});
$p.gU = (function(i) {
  return this.cL.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.cL, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().pT(this.cL, that.cL) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((this.cL.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Char$()))) {
    var this$1 = this.cL;
    var a = this$1.g();
    $m_ju_Arrays$().qS(a);
    return new $c_sci_ArraySeq$ofChar(a);
  } else {
    return $c_sci_ArraySeq.prototype.b7.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cL);
});
$p.cQ = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.cL).cQ(sb, start, sep, end);
});
$p.ci = (function() {
  return this.cL;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.o = (function(i) {
  return $bC(this.gU(i));
});
$p.e = (function(v1) {
  return $bC(this.gU((v1 | 0)));
});
$p.b6 = (function(ord) {
  return this.b7(ord);
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c3)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  c3: 1,
  a1: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.ed = null;
  this.ed = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.i = (function() {
  return this.ed.a.length;
});
$p.gV = (function(i) {
  return this.ed.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.ed, this$1.az);
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
    var array = this.ed;
    var thatArray = that.ed;
    if ((array === thatArray)) {
      return true;
    } else if ((array.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < array.a.length) && (array.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= array.a.length);
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ed);
});
$p.ci = (function() {
  return this.ed;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.o = (function(i) {
  return this.gV(i);
});
$p.e = (function(v1) {
  return this.gV((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  c4: 1,
  a1: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.ee = null;
  this.ee = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.i = (function() {
  return this.ee.a.length;
});
$p.gW = (function(i) {
  return this.ee.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.ee, this$1.az);
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
    var array = this.ee;
    var thatArray = that.ee;
    if ((array === thatArray)) {
      return true;
    } else if ((array.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < array.a.length) && (array.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= array.a.length);
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ee);
});
$p.ci = (function() {
  return this.ee;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.o = (function(i) {
  return this.gW(i);
});
$p.e = (function(v1) {
  return this.gW((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  c5: 1,
  a1: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.da = null;
  this.da = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.i = (function() {
  return this.da.a.length;
});
$p.gX = (function(i) {
  return this.da.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.da, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().kv(this.da, that.da) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((this.da.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Int$()))) {
    var this$1 = this.da;
    var a = this$1.g();
    $m_ju_Arrays$().qT(a);
    return new $c_sci_ArraySeq$ofInt(a);
  } else {
    return $c_sci_ArraySeq.prototype.b7.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.da);
});
$p.ci = (function() {
  return this.da;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.o = (function(i) {
  return this.gX(i);
});
$p.e = (function(v1) {
  return this.gX((v1 | 0));
});
$p.b6 = (function(ord) {
  return this.b7(ord);
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c6)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  c6: 1,
  a1: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.db = null;
  this.db = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.i = (function() {
  return ((this.db.a.length >>> 1) | 0);
});
$p.gY = (function(i) {
  var $x_1 = this.db.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.db, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().pU(this.db, that.db) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((((this.db.a.length >>> 1) | 0) <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Long$()))) {
    var this$1 = this.db;
    var a = this$1.g();
    $m_ju_Arrays$().qU(a);
    return new $c_sci_ArraySeq$ofLong(a);
  } else {
    return $c_sci_ArraySeq.prototype.b7.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.db);
});
$p.ci = (function() {
  return this.db;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.o = (function(i) {
  return this.gY(i);
});
$p.e = (function(v1) {
  return this.gY((v1 | 0));
});
$p.b6 = (function(ord) {
  return this.b7(ord);
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c7)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  c7: 1,
  a1: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.cn = null;
  this.cn = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.as = (function() {
  return $m_s_reflect_ClassTag$().h2($objectGetClass(this.cn).y.Q());
});
$p.i = (function() {
  return this.cn.a.length;
});
$p.o = (function(i) {
  return this.cn.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.cn, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().pX(this.cn, that.cn) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.qW = (function(ord) {
  if ((this.cn.a.length <= 1)) {
    return this;
  } else {
    var this$1 = this.cn;
    var a = this$1.g();
    $m_ju_Arrays$().gd(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cn);
});
$p.ci = (function() {
  return this.cn;
});
$p.e = (function(v1) {
  return this.o((v1 | 0));
});
$p.b7 = (function(ord) {
  return this.qW(ord);
});
$p.b6 = (function(ord) {
  return this.qW(ord);
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c8)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  c8: 1,
  a1: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.dc = null;
  this.dc = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.i = (function() {
  return this.dc.a.length;
});
$p.gZ = (function(i) {
  return this.dc.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.dc, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().pV(this.dc, that.dc) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((this.dc.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Short$()))) {
    var this$1 = this.dc;
    var a = this$1.g();
    $m_ju_Arrays$().qV(a);
    return new $c_sci_ArraySeq$ofShort(a);
  } else {
    return $c_sci_ArraySeq.prototype.b7.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dc);
});
$p.ci = (function() {
  return this.dc;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.o = (function(i) {
  return this.gZ(i);
});
$p.e = (function(v1) {
  return this.gZ((v1 | 0));
});
$p.b6 = (function(ord) {
  return this.b7(ord);
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  c9: 1,
  a1: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.f2 = null;
  this.f2 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.i = (function() {
  return this.f2.a.length;
});
$p.h0 = (function(i) {
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.f2, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.f2.a.length === that.f2.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.f2);
});
$p.ci = (function() {
  return this.f2;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.o = (function(i) {
  this.h0(i);
});
$p.e = (function(v1) {
  this.h0((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ca)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  ca: 1,
  a1: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a6: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return (xs$tailLocal1.c() ? 0 : 1);
    } else if (xs$tailLocal1.c()) {
      return (-1);
    } else {
      var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
      var xs$tailLocal1$tmp1 = xs$tailLocal1.w();
      i$tailLocal1 = i$tailLocal1$tmp1;
      xs$tailLocal1 = xs$tailLocal1$tmp1;
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.c();
      var bEmpty = b$tailLocal1.c();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().l(a$tailLocal1.q(), b$tailLocal1.q()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.w();
        var b$tailLocal1$tmp1 = b$tailLocal1.w();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (aEmpty && bEmpty);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.kM = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.o = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.dq = (function(z, op) {
  return $f_sc_LinearSeqOps__foldLeft__O__F2__O(this, z, op);
});
$p.g9 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.b8 = (function() {
  return "LinearSeq";
});
$p.gh = (function(that) {
  return $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this, that);
});
$p.hs = (function() {
  return $f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this);
});
$p.d = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.cc = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b6 = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.eA = (function() {
  return $m_sci_List$();
});
$p.pd = (function(prefix) {
  if (this.c()) {
    return prefix;
  } else if (prefix.c()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.q(), this);
    var curr = result;
    var that = prefix.w();
    while ((!that.c())) {
      var temp = new $c_sci_$colon$colon(that.q(), this);
      curr.a2 = temp;
      curr = temp;
      that = that.w();
    }
    return result;
  }
});
$p.c = (function() {
  return (this === $m_sci_Nil$());
});
$p.iB = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.pd(prefix);
  }
  if ((prefix.s() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.c()) {
      return prefix.r5();
    }
  }
  var iter = prefix.d();
  if (iter.j()) {
    var result = new $c_sci_$colon$colon(iter.f(), this);
    var curr = result;
    while (iter.j()) {
      var temp = new $c_sci_$colon$colon(iter.f(), this);
      curr.a2 = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.pq = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.pd(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.tV = (function(f) {
  if ((this === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.e(this.q()), $m_sci_Nil$());
    var t = h;
    var rest = this.w();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.e(rest.q()), $m_sci_Nil$());
      t.a2 = nx;
      t = nx;
      rest = rest.w();
    }
    var $x_1 = h;
  }
  return $x_1;
});
$p.t5 = (function(f) {
  var rest = this;
  var h = null;
  var t = null;
  while ((rest !== $m_sci_Nil$())) {
    var it = f.e(rest.q()).d();
    while (it.j()) {
      var nx = new $c_sci_$colon$colon(it.f(), $m_sci_Nil$());
      if ((t === null)) {
        h = nx;
      } else {
        t.a2 = nx;
      }
      t = nx;
    }
    rest = rest.w();
  }
  return ((h === null) ? $m_sci_Nil$() : h);
});
$p.bW = (function(f) {
  var these = this;
  while ((!these.c())) {
    f.e(these.q());
    these = these.w();
  }
});
$p.i = (function() {
  var these = this;
  var len = 0;
  while ((!these.c())) {
    len = ((1 + len) | 0);
    these = these.w();
  }
  return len;
});
$p.aZ = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.bO = (function(elem) {
  var these = this;
  while ((!these.c())) {
    if ($m_sr_BoxesRunTime$().l(these.q(), elem)) {
      return true;
    }
    these = these.w();
  }
  return false;
});
$p.g5 = (function() {
  if (this.c()) {
    throw new $c_ju_NoSuchElementException("List.last");
  } else {
    var these = this;
    var scout = this.w();
    while ((!scout.c())) {
      these = scout;
      scout = scout.w();
    }
    return these.q();
  }
});
$p.bC = (function() {
  return "List";
});
$p.p = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.at = (function() {
  return $m_sci_List$();
});
$p.z = (function(f) {
  return this.tV(f);
});
$p.fW = (function(f) {
  return this.t5(f);
});
$p.pN = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.cf = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.e = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b6)));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.h = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.ek = null;
  this.ek = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.i = (function() {
  return this.ek.a.length;
});
$p.h1 = (function(index) {
  return this.ek.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.ek, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().pW(this.ek, that.ek) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ek);
});
$p.cb = (function() {
  return this.ek;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.o = (function(i) {
  return this.h1(i);
});
$p.e = (function(v1) {
  return this.h1((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  co: 1,
  a2: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.el = null;
  this.el = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.i = (function() {
  return this.el.a.length;
});
$p.gT = (function(index) {
  return this.el.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.el, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().pS(this.el, that.el) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.el);
});
$p.cb = (function() {
  return this.el;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.o = (function(i) {
  return this.gT(i);
});
$p.e = (function(v1) {
  return this.gT((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cp)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cp: 1,
  a2: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.c9 = null;
  this.c9 = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.i = (function() {
  return this.c9.a.length;
});
$p.gU = (function(index) {
  return this.c9.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.c9, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().pT(this.c9, that.c9) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.c9);
});
$p.cQ = (function(sb, start, sep, end) {
  var jsb = sb.bh;
  if ((start.length !== 0)) {
    jsb.t = (("" + jsb.t) + start);
  }
  var len = this.c9.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.po(this.c9);
    } else {
      jsb.i();
      var c = this.c9.a[0];
      var str = ("" + $cToS(c));
      jsb.t = (jsb.t + str);
      var i = 1;
      while ((i < len)) {
        jsb.t = (("" + jsb.t) + sep);
        var c$1 = this.c9.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.t = (jsb.t + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.t = (("" + jsb.t) + end);
  }
  return sb;
});
$p.cb = (function() {
  return this.c9;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.o = (function(i) {
  return $bC(this.gU(i));
});
$p.e = (function(v1) {
  return $bC(this.gU((v1 | 0)));
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  cq: 1,
  a2: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.cv = null;
  this.cv = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.i = (function() {
  return this.cv.a.length;
});
$p.gV = (function(index) {
  return this.cv.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.cv, this$1.az);
});
$p.p = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var thatArray = that.cv;
    if ((this.cv === thatArray)) {
      return true;
    } else if ((this.cv.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < this.cv.a.length) && (this.cv.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.cv.a.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.p.call(this, that);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cv);
});
$p.cb = (function() {
  return this.cv;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.o = (function(i) {
  return this.gV(i);
});
$p.e = (function(v1) {
  return this.gV((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cr)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cr: 1,
  a2: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.cw = null;
  this.cw = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.i = (function() {
  return this.cw.a.length;
});
$p.gW = (function(index) {
  return this.cw.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.cw, this$1.az);
});
$p.p = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
    var thatArray = that.cw;
    if ((this.cw === thatArray)) {
      return true;
    } else if ((this.cw.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < this.cw.a.length) && (this.cw.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.cw.a.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.p.call(this, that);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cw);
});
$p.cb = (function() {
  return this.cw;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.o = (function(i) {
  return this.gW(i);
});
$p.e = (function(v1) {
  return this.gW((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cs: 1,
  a2: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.em = null;
  this.em = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.i = (function() {
  return this.em.a.length;
});
$p.gX = (function(index) {
  return this.em.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.em, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().kv(this.em, that.em) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.em);
});
$p.cb = (function() {
  return this.em;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.o = (function(i) {
  return this.gX(i);
});
$p.e = (function(v1) {
  return this.gX((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ct)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  ct: 1,
  a2: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.en = null;
  this.en = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.i = (function() {
  return ((this.en.a.length >>> 1) | 0);
});
$p.gY = (function(index) {
  var $x_1 = this.en.a;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.en, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().pU(this.en, that.en) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.en);
});
$p.cb = (function() {
  return this.en;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.o = (function(i) {
  return this.gY(i);
});
$p.e = (function(v1) {
  return this.gY((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  cu: 1,
  a2: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.dS = null;
  this.dS = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.as = (function() {
  return $m_s_reflect_ClassTag$().h2($objectGetClass(this.dS).y.Q());
});
$p.i = (function() {
  return this.dS.a.length;
});
$p.o = (function(index) {
  return this.dS.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.dS, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().pX(this.dS, that.dS) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dS);
});
$p.cb = (function() {
  return this.dS;
});
$p.e = (function(v1) {
  return this.o((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cv)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  cv: 1,
  a2: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.eo = null;
  this.eo = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.i = (function() {
  return this.eo.a.length;
});
$p.gZ = (function(index) {
  return this.eo.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.eo, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().pV(this.eo, that.eo) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.eo);
});
$p.cb = (function() {
  return this.eo;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.o = (function(i) {
  return this.gZ(i);
});
$p.e = (function(v1) {
  return this.gZ((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cw)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  cw: 1,
  a2: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.f9 = null;
  this.f9 = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.i = (function() {
  return this.f9.a.length;
});
$p.h0 = (function(index) {
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.f9, this$1.az);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.f9.a.length === that.f9.a.length) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.f9);
});
$p.cb = (function() {
  return this.f9;
});
$p.as = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.o = (function(i) {
  this.h0(i);
});
$p.e = (function(v1) {
  this.h0((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cx)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cx: 1,
  a2: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
function $ct_scm_HashMap__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jZ = loadFactor;
  $thiz.Q = new ($d_scm_HashMap$Node.r().C)($p_scm_HashMap__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.gN = $p_scm_HashMap__newThreshold__I__I($thiz, $thiz.Q.a.length);
  $thiz.ca = 0;
  return $thiz;
}
function $ct_scm_HashMap__($thiz) {
  $ct_scm_HashMap__I__D__($thiz, 16, 0.75);
  return $thiz;
}
function $p_scm_HashMap__put0__O__O__I__Z__s_Some($thiz, key, value, hash, getOld) {
  if ((((1 + $thiz.ca) | 0) >= $thiz.gN)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.Q.a.length << 1));
  }
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, (hash & (($thiz.Q.a.length - 1) | 0)));
}
function $p_scm_HashMap__put0__O__O__Z__s_Some($thiz, key, value, getOld) {
  if ((((1 + $thiz.ca) | 0) >= $thiz.gN)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.Q.a.length << 1));
  }
  var originalHash = $m_sr_Statics$().E(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, (hash & (($thiz.Q.a.length - 1) | 0)));
}
function $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, idx) {
  matchResult7: {
    var x30 = $thiz.Q.a[idx];
    if ((x30 === null)) {
      $thiz.Q.a[idx] = new $c_scm_HashMap$Node(key, hash, value, null);
      break matchResult7;
    }
    var prev = null;
    var n = x30;
    while (((n !== null) && (n.dl <= hash))) {
      if (((n.dl === hash) && $m_sr_BoxesRunTime$().l(key, n.eq))) {
        var old$2 = n.bU;
        var this$2 = n;
        this$2.bU = value;
        return (getOld ? new $c_s_Some(old$2) : null);
      }
      prev = n;
      n = n.aV;
    }
    if ((prev === null)) {
      $thiz.Q.a[idx] = new $c_scm_HashMap$Node(key, hash, value, x30);
    } else {
      var this$6 = prev;
      var n$1 = new $c_scm_HashMap$Node(key, hash, value, prev.aV);
      this$6.aV = n$1;
    }
  }
  $thiz.ca = ((1 + $thiz.ca) | 0);
  return null;
}
function $p_scm_HashMap__growTable__I__V($thiz, newlen) {
  if ((newlen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), (("new HashMap table size " + newlen) + " exceeds maximum"));
  }
  var oldlen = $thiz.Q.a.length;
  $thiz.gN = $p_scm_HashMap__newThreshold__I__I($thiz, newlen);
  if (($thiz.ca === 0)) {
    $thiz.Q = new ($d_scm_HashMap$Node.r().C)(newlen);
  } else {
    $thiz.Q = $m_ju_Arrays$().W($thiz.Q, newlen);
    var preLow = new $c_scm_HashMap$Node(null, 0, null, null);
    var preHigh = new $c_scm_HashMap$Node(null, 0, null, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.Q.a[i];
        if ((old !== null)) {
          preLow.aV = null;
          preHigh.aV = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.aV;
            if (((n.dl & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.aV = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.aV = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.aV = null;
          if ((old !== preLow.aV)) {
            $thiz.Q.a[i] = preLow.aV;
          }
          if ((preHigh.aV !== null)) {
            $thiz.Q.a[((i + oldlen) | 0)] = preHigh.aV;
            var this$5 = lastHigh;
            this$5.aV = null;
          }
        }
        i = ((1 + i) | 0);
      }
      oldlen = (oldlen << 1);
    }
  }
}
function $p_scm_HashMap__tableSizeFor__I__I($thiz, capacity) {
  var x = ((capacity - 1) | 0);
  var i = ((x > 4) ? x : 4);
  var x$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  return ((x$1 < 1073741824) ? x$1 : 1073741824);
}
function $p_scm_HashMap__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.jZ));
}
/** @constructor */
function $c_scm_HashMap() {
  this.jZ = 0.0;
  this.Q = null;
  this.gN = 0;
  this.ca = 0;
}
$p = $c_scm_HashMap.prototype = new $h_scm_AbstractMap();
$p.constructor = $c_scm_HashMap;
/** @constructor */
function $h_scm_HashMap() {
}
$h_scm_HashMap.prototype = $p;
$p.z = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.b0 = (function() {
  return this.ca;
});
$p.bO = (function(key) {
  var originalHash = $m_sr_Statics$().E(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var $x_1;
    var x1 = this.Q.a[(hash & ((this.Q.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.h8(key, hash);
  }
  return ($x_1 !== null);
});
$p.b5 = (function(size) {
  var target = $p_scm_HashMap__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jZ)));
  if ((target > this.Q.a.length)) {
    $p_scm_HashMap__growTable__I__V(this, target);
  }
});
$p.pj = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if ((xs instanceof $c_sci_HashMap)) {
    var f = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2, v2$2, v3$2) => {
      var h = (v3$2 | 0);
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, v1$2, v2$2, (h ^ ((h >>> 16) | 0)), false);
    }));
    xs.bj.kz(f);
    return this;
  } else if ((xs instanceof $c_scm_HashMap)) {
    var iter = xs.qr();
    while (iter.j()) {
      var next = iter.f();
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, next.eq, next.bU, next.dl, false);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.pR();
    while (iter$2.j()) {
      var entry = iter$2.f();
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, entry.qi(), entry.vd(), entry.q9(), false);
    }
    return this;
  } else {
    return ($is_scm_Map(xs) ? (xs.cT(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => {
      var originalHash = $m_sr_Statics$().E(key$2);
      return $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, key$2, value$2, (originalHash ^ ((originalHash >>> 16) | 0)), false);
    }))), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
  }
});
$p.d = (function() {
  return ((this.ca === 0) ? $m_sc_Iterator$().J : new $c_scm_HashMap$$anon$1(this));
});
$p.eI = (function() {
  return ((this.ca === 0) ? $m_sc_Iterator$().J : new $c_scm_HashMap$$anon$3(this));
});
$p.qr = (function() {
  return ((this.ca === 0) ? $m_sc_Iterator$().J : new $c_scm_HashMap$$anon$4(this));
});
$p.bX = (function(key) {
  var originalHash = $m_sr_Statics$().E(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var x34;
    var x1 = this.Q.a[(hash & ((this.Q.a.length - 1) | 0))];
    if ((x1 === null)) {
      var x34 = null;
      break matchResult1;
    }
    var x34 = x1.h8(key, hash);
  }
  if ((x34 === null)) {
    return $m_s_None$();
  }
  return new $c_s_Some(x34.bU);
});
$p.e = (function(key) {
  var originalHash = $m_sr_Statics$().E(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var x35;
    var x1 = this.Q.a[(hash & ((this.Q.a.length - 1) | 0))];
    if ((x1 === null)) {
      var x35 = null;
      break matchResult1;
    }
    var x35 = x1.h8(key, hash);
  }
  if ((x35 === null)) {
    return $f_sc_MapOps__default__O__O(this, key);
  }
  return x35.bU;
});
$p.cV = (function(key, default$1) {
  if ((!($objectGetClass(this) === $d_scm_HashMap.l()))) {
    return $f_sc_MapOps__getOrElse__O__F0__O(this, key, default$1);
  } else {
    var originalHash = $m_sr_Statics$().E(key);
    var hash = (originalHash ^ ((originalHash >>> 16) | 0));
    matchResult1: {
      var nd;
      var x1 = this.Q.a[(hash & ((this.Q.a.length - 1) | 0))];
      if ((x1 === null)) {
        var nd = null;
        break matchResult1;
      }
      var nd = x1.h8(key, hash);
    }
    return ((nd === null) ? default$1.I() : nd.bU);
  }
});
$p.s7 = (function(elem) {
  $p_scm_HashMap__put0__O__O__Z__s_Some(this, elem.R, elem.O, false);
  return this;
});
$p.s = (function() {
  return this.ca;
});
$p.c = (function() {
  return (this.ca === 0);
});
$p.cT = (function(f) {
  var len = this.Q.a.length;
  var i = 0;
  while ((i < len)) {
    var n = this.Q.a[i];
    if ((n !== null)) {
      n.cT(f);
    }
    i = ((1 + i) | 0);
  }
});
$p.kR = (function() {
  return $m_scm_HashMap$();
});
$p.b8 = (function() {
  return "HashMap";
});
$p.x = (function() {
  if (this.c()) {
    return $m_s_util_hashing_MurmurHash3$().i4;
  } else {
    var tupleHashIterator = new $c_scm_HashMap$$anon$5(this);
    return $m_s_util_hashing_MurmurHash3$().iF(tupleHashIterator, $m_s_util_hashing_MurmurHash3$().dY);
  }
});
$p.aW = (function(elems) {
  return this.pj(elems);
});
$p.ac = (function(elem) {
  return this.s7(elem);
});
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cy)));
}
var $d_scm_HashMap = new $TypeData().i($c_scm_HashMap, "scala.collection.mutable.HashMap", ({
  cy: 1,
  hL: 1,
  ak: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  ae: 1,
  al: 1,
  d: 1,
  ad: 1,
  K: 1,
  C: 1,
  I: 1,
  H: 1,
  J: 1,
  N: 1,
  aG: 1,
  ik: 1,
  bc: 1,
  l: 1,
  c0: 1,
  a: 1
}));
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.k = suffix1;
  $thiz.m = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.h = null;
  this.k = null;
  this.m = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.h = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.h.a.length))) {
    return this.h.a[index];
  } else {
    throw this.aY(index);
  }
});
$p.eG = (function(index, elem) {
  if (((index >= 0) && (index < this.h.a.length))) {
    var a1 = this.h;
    var a1c = a1.g();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aY(index);
  }
});
$p.eu = (function(elem) {
  if ((this.h.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().fV(this.h, elem));
  } else {
    var $x_2 = this.h;
    var $x_1 = $m_sci_VectorStatics$().bM;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.d0 = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().cC(this.h, f));
});
$p.dw = (function() {
  return 1;
});
$p.dv = (function(idx) {
  return this.h;
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.h.a.length))) {
    return this.h.a[index];
  } else {
    throw this.aY(index);
  }
});
$p.z = (function(f) {
  return this.d0(f);
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  hB: 1,
  an: 1,
  ah: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Z: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.gE = null;
  this.a2 = null;
  this.gE = head;
  this.a2 = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.cG = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.bv = (function() {
  return 2;
});
$p.bx = (function() {
  return "::";
});
$p.bw = (function(n) {
  if ((n === 0)) {
    return this.gE;
  }
  if ((n === 1)) {
    return this.a2;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.q = (function() {
  return this.gE;
});
$p.w = (function() {
  return this.a2;
});
$p.l6 = (function() {
  return this.a2;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  gR: 1,
  b6: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  b0: 1,
  aE: 1,
  b5: 1,
  b4: 1,
  l: 1,
  t: 1,
  bZ: 1,
  B: 1,
  a: 1,
  Z: 1,
  P: 1
}));
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.cG = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.bv = (function() {
  return 0;
});
$p.bx = (function() {
  return "Nil";
});
$p.bw = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.ts = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.r1 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.tP = (function() {
  throw new $c_ju_NoSuchElementException("last of empty list");
});
$p.s = (function() {
  return 0;
});
$p.d = (function() {
  return $m_sc_Iterator$().J;
});
$p.q = (function() {
  this.ts();
});
$p.w = (function() {
  this.r1();
});
$p.l6 = (function() {
  this.r1();
});
$p.g5 = (function() {
  this.tP();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  ho: 1,
  b6: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  b0: 1,
  aE: 1,
  b5: 1,
  b4: 1,
  l: 1,
  t: 1,
  bZ: 1,
  B: 1,
  a: 1,
  Z: 1,
  P: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
/** @constructor */
function $c_sci_Vector0$() {
  this.h = null;
  this.k = null;
  this.m = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().jS, $m_sci_VectorStatics$().jS, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.pr = (function(index) {
  throw this.aY(index);
});
$p.eG = (function(index, elem) {
  throw this.aY(index);
});
$p.eu = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.dw = (function() {
  return 0;
});
$p.dv = (function(idx) {
  return null;
});
$p.p = (function(o) {
  return ((this === o) || ((o instanceof $c_sci_Vector) ? false : $f_sc_Seq__equals__O__Z(this, o)));
});
$p.aY = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.o = (function(i) {
  this.pr(i);
});
$p.e = (function(v1) {
  this.pr((v1 | 0));
});
$p.z = (function(f) {
  return this;
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  hA: 1,
  am: 1,
  an: 1,
  ah: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Z: 1
}));
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$();
  }
  return $n_sci_Vector0$;
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.h = null;
  this.k = null;
  this.m = 0;
  this.bT = 0;
  this.bA = null;
  this.bT = len1;
  this.bA = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.bT) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bA.a.length) ? this.bA.a[i2].a[i1] : this.k.a[(31 & io)]);
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aY(index);
  }
});
$p.eG = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.bT)) {
      var io = ((index - this.bT) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.bA.a.length)) {
        var a2 = this.bA;
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.h, this.bT, a2c, this.k, this.m);
      } else {
        var a1$1 = this.k;
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.h, this.bT, this.bA, a1c$1, this.m);
      }
    } else {
      var a1$2 = this.h;
      var a1c$2 = a1$2.g();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bT, this.bA, this.k, this.m);
    }
  } else {
    throw this.aY(index);
  }
});
$p.eu = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$3 = $m_sci_VectorStatics$().fV(this.k, elem);
    var length0$3 = ((1 + this.m) | 0);
    return new $c_sci_Vector2(this.h, this.bT, this.bA, suffix1$3, length0$3);
  } else if ((this.bA.a.length < 30)) {
    var data2$4 = $m_sci_VectorStatics$().F(this.bA, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$4 = ((1 + this.m) | 0);
    return new $c_sci_Vector2(this.h, this.bT, data2$4, a, length0$4);
  } else {
    var $x_5 = this.h;
    var $x_4 = this.bT;
    var $x_3 = this.bA;
    var $x_2 = this.bT;
    var $x_1 = $m_sci_VectorStatics$().dj;
    var x = this.k;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.m) | 0));
  }
});
$p.d0 = (function(f) {
  var prefix1$7 = $m_sci_VectorStatics$().cC(this.h, f);
  var data2$7 = $m_sci_VectorStatics$().ad(2, this.bA, f);
  var suffix1$7 = $m_sci_VectorStatics$().cC(this.k, f);
  return new $c_sci_Vector2(prefix1$7, this.bT, data2$7, suffix1$7, this.m);
});
$p.dw = (function() {
  return 3;
});
$p.dv = (function(idx) {
  switch (idx) {
    case 0: {
      return this.h;
      break;
    }
    case 1: {
      return this.bA;
      break;
    }
    case 2: {
      return this.k;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.bT) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bA.a.length) ? this.bA.a[i2].a[i1] : this.k.a[(31 & io)]);
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aY(index);
  }
});
$p.z = (function(f) {
  return this.d0(f);
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  hC: 1,
  am: 1,
  an: 1,
  ah: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Z: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.h = null;
  this.k = null;
  this.m = 0;
  this.br = 0;
  this.bL = null;
  this.bs = 0;
  this.bd = null;
  this.be = null;
  this.br = len1;
  this.bL = prefix2;
  this.bs = len12;
  this.bd = data3;
  this.be = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.bs) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.bd.a.length) ? this.bd.a[i3].a[i2].a[i1] : ((i2 < this.be.a.length) ? this.be.a[i2].a[i1] : this.k.a[i1]));
    } else if ((index >= this.br)) {
      var io$2 = ((index - this.br) | 0);
      return this.bL.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aY(index);
  }
});
$p.eG = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.bs)) {
      var io = ((index - this.bs) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.bd.a.length)) {
        var a3 = this.bd;
        var a3c = a3.g();
        var a2 = a3c.a[i3];
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.h, this.br, this.bL, this.bs, a3c, this.be, this.k, this.m);
      } else if ((i2 < this.be.a.length)) {
        var a2$1 = this.be;
        var a2c$1 = a2$1.g();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.h, this.br, this.bL, this.bs, this.bd, a2c$1, this.k, this.m);
      } else {
        var a1$2 = this.k;
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.h, this.br, this.bL, this.bs, this.bd, this.be, a1c$2, this.m);
      }
    } else if ((index >= this.br)) {
      var io$2 = ((index - this.br) | 0);
      var a2$2 = this.bL;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.g();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.g();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.h, this.br, a2c$2, this.bs, this.bd, this.be, this.k, this.m);
    } else {
      var a1$4 = this.h;
      var a1c$4 = a1$4.g();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.br, this.bL, this.bs, this.bd, this.be, this.k, this.m);
    }
  } else {
    throw this.aY(index);
  }
});
$p.eu = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$16 = $m_sci_VectorStatics$().fV(this.k, elem);
    var length0$16 = ((1 + this.m) | 0);
    return new $c_sci_Vector3(this.h, this.br, this.bL, this.bs, this.bd, this.be, suffix1$16, length0$16);
  } else if ((this.be.a.length < 31)) {
    var suffix2$6 = $m_sci_VectorStatics$().F(this.be, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$17 = ((1 + this.m) | 0);
    return new $c_sci_Vector3(this.h, this.br, this.bL, this.bs, this.bd, suffix2$6, a, length0$17);
  } else if ((this.bd.a.length < 30)) {
    var data3$7 = $m_sci_VectorStatics$().F(this.bd, $m_sci_VectorStatics$().F(this.be, this.k));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$18 = ((1 + this.m) | 0);
    return new $c_sci_Vector3(this.h, this.br, this.bL, this.bs, data3$7, $m_sci_VectorStatics$().bM, a$1, length0$18);
  } else {
    var $x_8 = this.h;
    var $x_7 = this.br;
    var $x_6 = this.bL;
    var $x_5 = this.bs;
    var $x_4 = this.bd;
    var $x_3 = this.bs;
    var $x_2 = $m_sci_VectorStatics$().fM;
    var x = $m_sci_VectorStatics$().F(this.be, this.k);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bM;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.m) | 0));
  }
});
$p.d0 = (function(f) {
  var prefix1$21 = $m_sci_VectorStatics$().cC(this.h, f);
  var prefix2$10 = $m_sci_VectorStatics$().ad(2, this.bL, f);
  var data3$11 = $m_sci_VectorStatics$().ad(3, this.bd, f);
  var suffix2$10 = $m_sci_VectorStatics$().ad(2, this.be, f);
  var suffix1$22 = $m_sci_VectorStatics$().cC(this.k, f);
  return new $c_sci_Vector3(prefix1$21, this.br, prefix2$10, this.bs, data3$11, suffix2$10, suffix1$22, this.m);
});
$p.dw = (function() {
  return 5;
});
$p.dv = (function(idx) {
  switch (idx) {
    case 0: {
      return this.h;
      break;
    }
    case 1: {
      return this.bL;
      break;
    }
    case 2: {
      return this.bd;
      break;
    }
    case 3: {
      return this.be;
      break;
    }
    case 4: {
      return this.k;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.bs) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.bd.a.length) ? this.bd.a[i3].a[i2].a[i1] : ((i2 < this.be.a.length) ? this.be.a[i2].a[i1] : this.k.a[i1]));
    } else if ((index >= this.br)) {
      var io$2 = ((index - this.br) | 0);
      return this.bL.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aY(index);
  }
});
$p.z = (function(f) {
  return this.d0(f);
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  hD: 1,
  am: 1,
  an: 1,
  ah: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Z: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.h = null;
  this.k = null;
  this.m = 0;
  this.b1 = 0;
  this.bk = null;
  this.b2 = 0;
  this.bl = null;
  this.b3 = 0;
  this.aM = null;
  this.aO = null;
  this.aN = null;
  this.b1 = len1;
  this.bk = prefix2;
  this.b2 = len12;
  this.bl = prefix3;
  this.b3 = len123;
  this.aM = data4;
  this.aO = suffix3;
  this.aN = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.b3) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aM.a.length) ? this.aM.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aO.a.length) ? this.aO.a[i3].a[i2].a[i1] : ((i2 < this.aN.a.length) ? this.aN.a[i2].a[i1] : this.k.a[i1])));
    } else if ((index >= this.b2)) {
      var io$2 = ((index - this.b2) | 0);
      return this.bl.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.b1)) {
      var io$3 = ((index - this.b1) | 0);
      return this.bk.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aY(index);
  }
});
$p.eG = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.b3)) {
      var io = ((index - this.b3) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.aM.a.length)) {
        var a4 = this.aM;
        var a4c = a4.g();
        var a3 = a4c.a[i4];
        var a3c = a3.g();
        var a2 = a3c.a[i3];
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        return new $c_sci_Vector4(this.h, this.b1, this.bk, this.b2, this.bl, this.b3, a4c, this.aO, this.aN, this.k, this.m);
      } else if ((i3 < this.aO.a.length)) {
        var a3$1 = this.aO;
        var a3c$1 = a3$1.g();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.g();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.h, this.b1, this.bk, this.b2, this.bl, this.b3, this.aM, a3c$1, this.aN, this.k, this.m);
      } else if ((i2 < this.aN.a.length)) {
        var a2$2 = this.aN;
        var a2c$2 = a2$2.g();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.h, this.b1, this.bk, this.b2, this.bl, this.b3, this.aM, this.aO, a2c$2, this.k, this.m);
      } else {
        var a1$3 = this.k;
        var a1c$3 = a1$3.g();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.h, this.b1, this.bk, this.b2, this.bl, this.b3, this.aM, this.aO, this.aN, a1c$3, this.m);
      }
    } else if ((index >= this.b2)) {
      var io$2 = ((index - this.b2) | 0);
      var a3$2 = this.bl;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.g();
      var a2$3 = a3c$2.a[idx3];
      var a2c$3 = a2$3.g();
      var a1$4 = a2c$3.a[idx2];
      var a1c$4 = a1$4.g();
      a1c$4.a[idx1] = elem;
      a2c$3.a[idx2] = a1c$4;
      a3c$2.a[idx3] = a2c$3;
      return new $c_sci_Vector4(this.h, this.b1, this.bk, this.b2, a3c$2, this.b3, this.aM, this.aO, this.aN, this.k, this.m);
    } else if ((index >= this.b1)) {
      var io$3 = ((index - this.b1) | 0);
      var a2$4 = this.bk;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.g();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.g();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.h, this.b1, a2c$4, this.b2, this.bl, this.b3, this.aM, this.aO, this.aN, this.k, this.m);
    } else {
      var a1$6 = this.h;
      var a1c$6 = a1$6.g();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.b1, this.bk, this.b2, this.bl, this.b3, this.aM, this.aO, this.aN, this.k, this.m);
    }
  } else {
    throw this.aY(index);
  }
});
$p.eu = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$33 = $m_sci_VectorStatics$().fV(this.k, elem);
    var length0$33 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.b1, this.bk, this.b2, this.bl, this.b3, this.aM, this.aO, this.aN, suffix1$33, length0$33);
  } else if ((this.aN.a.length < 31)) {
    var suffix2$22 = $m_sci_VectorStatics$().F(this.aN, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$34 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.b1, this.bk, this.b2, this.bl, this.b3, this.aM, this.aO, suffix2$22, a, length0$34);
  } else if ((this.aO.a.length < 31)) {
    var suffix3$9 = $m_sci_VectorStatics$().F(this.aO, $m_sci_VectorStatics$().F(this.aN, this.k));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$35 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.b1, this.bk, this.b2, this.bl, this.b3, this.aM, suffix3$9, $m_sci_VectorStatics$().bM, a$1, length0$35);
  } else if ((this.aM.a.length < 30)) {
    var data4$10 = $m_sci_VectorStatics$().F(this.aM, $m_sci_VectorStatics$().F(this.aO, $m_sci_VectorStatics$().F(this.aN, this.k)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$36 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.b1, this.bk, this.b2, this.bl, this.b3, data4$10, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$2, length0$36);
  } else {
    var $x_11 = this.h;
    var $x_10 = this.b1;
    var $x_9 = this.bk;
    var $x_8 = this.b2;
    var $x_7 = this.bl;
    var $x_6 = this.b3;
    var $x_5 = this.aM;
    var $x_4 = this.b3;
    var $x_3 = $m_sci_VectorStatics$().jT;
    var x = $m_sci_VectorStatics$().F(this.aO, $m_sci_VectorStatics$().F(this.aN, this.k));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().dj;
    var $x_1 = $m_sci_VectorStatics$().bM;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.m) | 0));
  }
});
$p.d0 = (function(f) {
  var prefix1$39 = $m_sci_VectorStatics$().cC(this.h, f);
  var prefix2$27 = $m_sci_VectorStatics$().ad(2, this.bk, f);
  var prefix3$14 = $m_sci_VectorStatics$().ad(3, this.bl, f);
  var data4$15 = $m_sci_VectorStatics$().ad(4, this.aM, f);
  var suffix3$14 = $m_sci_VectorStatics$().ad(3, this.aO, f);
  var suffix2$27 = $m_sci_VectorStatics$().ad(2, this.aN, f);
  var suffix1$41 = $m_sci_VectorStatics$().cC(this.k, f);
  return new $c_sci_Vector4(prefix1$39, this.b1, prefix2$27, this.b2, prefix3$14, this.b3, data4$15, suffix3$14, suffix2$27, suffix1$41, this.m);
});
$p.dw = (function() {
  return 7;
});
$p.dv = (function(idx) {
  switch (idx) {
    case 0: {
      return this.h;
      break;
    }
    case 1: {
      return this.bk;
      break;
    }
    case 2: {
      return this.bl;
      break;
    }
    case 3: {
      return this.aM;
      break;
    }
    case 4: {
      return this.aO;
      break;
    }
    case 5: {
      return this.aN;
      break;
    }
    case 6: {
      return this.k;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.b3) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aM.a.length) ? this.aM.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aO.a.length) ? this.aO.a[i3].a[i2].a[i1] : ((i2 < this.aN.a.length) ? this.aN.a[i2].a[i1] : this.k.a[i1])));
    } else if ((index >= this.b2)) {
      var io$2 = ((index - this.b2) | 0);
      return this.bl.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.b1)) {
      var io$3 = ((index - this.b1) | 0);
      return this.bk.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aY(index);
  }
});
$p.z = (function(f) {
  return this.d0(f);
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  hE: 1,
  am: 1,
  an: 1,
  ah: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Z: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.h = null;
  this.k = null;
  this.m = 0;
  this.aC = 0;
  this.aR = null;
  this.aD = 0;
  this.aS = null;
  this.aE = 0;
  this.aT = null;
  this.aF = 0;
  this.ai = null;
  this.al = null;
  this.ak = null;
  this.aj = null;
  this.aC = len1;
  this.aR = prefix2;
  this.aD = len12;
  this.aS = prefix3;
  this.aE = len123;
  this.aT = prefix4;
  this.aF = len1234;
  this.ai = data5;
  this.al = suffix4;
  this.ak = suffix3;
  this.aj = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.aF) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ai.a.length) ? this.ai.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.al.a.length) ? this.al.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ak.a.length) ? this.ak.a[i3].a[i2].a[i1] : ((i2 < this.aj.a.length) ? this.aj.a[i2].a[i1] : this.k.a[i1]))));
    } else if ((index >= this.aE)) {
      var io$2 = ((index - this.aE) | 0);
      return this.aT.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aD)) {
      var io$3 = ((index - this.aD) | 0);
      return this.aS.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aC)) {
      var io$4 = ((index - this.aC) | 0);
      return this.aR.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aY(index);
  }
});
$p.eG = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.aF)) {
      var io = ((index - this.aF) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.ai.a.length)) {
        var a5 = this.ai;
        var a5c = a5.g();
        var a4 = a5c.a[i5];
        var a4c = a4.g();
        var a3 = a4c.a[i4];
        var a3c = a3.g();
        var a2 = a3c.a[i3];
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, this.aS, this.aE, this.aT, this.aF, a5c, this.al, this.ak, this.aj, this.k, this.m);
      } else if ((i4 < this.al.a.length)) {
        var a4$1 = this.al;
        var a4c$1 = a4$1.g();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.g();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.g();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, this.aS, this.aE, this.aT, this.aF, this.ai, a4c$1, this.ak, this.aj, this.k, this.m);
      } else if ((i3 < this.ak.a.length)) {
        var a3$2 = this.ak;
        var a3c$2 = a3$2.g();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.g();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, this.aS, this.aE, this.aT, this.aF, this.ai, this.al, a3c$2, this.aj, this.k, this.m);
      } else if ((i2 < this.aj.a.length)) {
        var a2$3 = this.aj;
        var a2c$3 = a2$3.g();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.g();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, this.aS, this.aE, this.aT, this.aF, this.ai, this.al, this.ak, a2c$3, this.k, this.m);
      } else {
        var a1$4 = this.k;
        var a1c$4 = a1$4.g();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, this.aS, this.aE, this.aT, this.aF, this.ai, this.al, this.ak, this.aj, a1c$4, this.m);
      }
    } else if ((index >= this.aE)) {
      var io$2 = ((index - this.aE) | 0);
      var a4$2 = this.aT;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.g();
      var a3$3 = a4c$2.a[idx4];
      var a3c$3 = a3$3.g();
      var a2$4 = a3c$3.a[idx3];
      var a2c$4 = a2$4.g();
      var a1$5 = a2c$4.a[idx2];
      var a1c$5 = a1$5.g();
      a1c$5.a[idx1] = elem;
      a2c$4.a[idx2] = a1c$5;
      a3c$3.a[idx3] = a2c$4;
      a4c$2.a[idx4] = a3c$3;
      return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, this.aS, this.aE, a4c$2, this.aF, this.ai, this.al, this.ak, this.aj, this.k, this.m);
    } else if ((index >= this.aD)) {
      var io$3 = ((index - this.aD) | 0);
      var a3$4 = this.aS;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.g();
      var a2$5 = a3c$4.a[idx3$1];
      var a2c$5 = a2$5.g();
      var a1$6 = a2c$5.a[idx2$1];
      var a1c$6 = a1$6.g();
      a1c$6.a[idx1$1] = elem;
      a2c$5.a[idx2$1] = a1c$6;
      a3c$4.a[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, a3c$4, this.aE, this.aT, this.aF, this.ai, this.al, this.ak, this.aj, this.k, this.m);
    } else if ((index >= this.aC)) {
      var io$4 = ((index - this.aC) | 0);
      var a2$6 = this.aR;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.g();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.g();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.h, this.aC, a2c$6, this.aD, this.aS, this.aE, this.aT, this.aF, this.ai, this.al, this.ak, this.aj, this.k, this.m);
    } else {
      var a1$8 = this.h;
      var a1c$8 = a1$8.g();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aC, this.aR, this.aD, this.aS, this.aE, this.aT, this.aF, this.ai, this.al, this.ak, this.aj, this.k, this.m);
    }
  } else {
    throw this.aY(index);
  }
});
$p.eu = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$54 = $m_sci_VectorStatics$().fV(this.k, elem);
    var length0$54 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, this.aS, this.aE, this.aT, this.aF, this.ai, this.al, this.ak, this.aj, suffix1$54, length0$54);
  } else if ((this.aj.a.length < 31)) {
    var suffix2$41 = $m_sci_VectorStatics$().F(this.aj, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$55 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, this.aS, this.aE, this.aT, this.aF, this.ai, this.al, this.ak, suffix2$41, a, length0$55);
  } else if ((this.ak.a.length < 31)) {
    var suffix3$29 = $m_sci_VectorStatics$().F(this.ak, $m_sci_VectorStatics$().F(this.aj, this.k));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$56 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, this.aS, this.aE, this.aT, this.aF, this.ai, this.al, suffix3$29, $m_sci_VectorStatics$().bM, a$1, length0$56);
  } else if ((this.al.a.length < 31)) {
    var suffix4$12 = $m_sci_VectorStatics$().F(this.al, $m_sci_VectorStatics$().F(this.ak, $m_sci_VectorStatics$().F(this.aj, this.k)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$57 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, this.aS, this.aE, this.aT, this.aF, this.ai, suffix4$12, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$2, length0$57);
  } else if ((this.ai.a.length < 30)) {
    var data5$13 = $m_sci_VectorStatics$().F(this.ai, $m_sci_VectorStatics$().F(this.al, $m_sci_VectorStatics$().F(this.ak, $m_sci_VectorStatics$().F(this.aj, this.k))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$58 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aC, this.aR, this.aD, this.aS, this.aE, this.aT, this.aF, data5$13, $m_sci_VectorStatics$().fM, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$3, length0$58);
  } else {
    var $x_14 = this.h;
    var $x_13 = this.aC;
    var $x_12 = this.aR;
    var $x_11 = this.aD;
    var $x_10 = this.aS;
    var $x_9 = this.aE;
    var $x_8 = this.aT;
    var $x_7 = this.aF;
    var $x_6 = this.ai;
    var $x_5 = this.aF;
    var $x_4 = $m_sci_VectorStatics$().oL;
    var x = $m_sci_VectorStatics$().F(this.al, $m_sci_VectorStatics$().F(this.ak, $m_sci_VectorStatics$().F(this.aj, this.k)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().fM;
    var $x_2 = $m_sci_VectorStatics$().dj;
    var $x_1 = $m_sci_VectorStatics$().bM;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.m) | 0));
  }
});
$p.d0 = (function(f) {
  var prefix1$61 = $m_sci_VectorStatics$().cC(this.h, f);
  var prefix2$47 = $m_sci_VectorStatics$().ad(2, this.aR, f);
  var prefix3$35 = $m_sci_VectorStatics$().ad(3, this.aS, f);
  var prefix4$18 = $m_sci_VectorStatics$().ad(4, this.aT, f);
  var data5$19 = $m_sci_VectorStatics$().ad(5, this.ai, f);
  var suffix4$18 = $m_sci_VectorStatics$().ad(4, this.al, f);
  var suffix3$35 = $m_sci_VectorStatics$().ad(3, this.ak, f);
  var suffix2$47 = $m_sci_VectorStatics$().ad(2, this.aj, f);
  var suffix1$64 = $m_sci_VectorStatics$().cC(this.k, f);
  return new $c_sci_Vector5(prefix1$61, this.aC, prefix2$47, this.aD, prefix3$35, this.aE, prefix4$18, this.aF, data5$19, suffix4$18, suffix3$35, suffix2$47, suffix1$64, this.m);
});
$p.dw = (function() {
  return 9;
});
$p.dv = (function(idx) {
  switch (idx) {
    case 0: {
      return this.h;
      break;
    }
    case 1: {
      return this.aR;
      break;
    }
    case 2: {
      return this.aS;
      break;
    }
    case 3: {
      return this.aT;
      break;
    }
    case 4: {
      return this.ai;
      break;
    }
    case 5: {
      return this.al;
      break;
    }
    case 6: {
      return this.ak;
      break;
    }
    case 7: {
      return this.aj;
      break;
    }
    case 8: {
      return this.k;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.aF) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ai.a.length) ? this.ai.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.al.a.length) ? this.al.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ak.a.length) ? this.ak.a[i3].a[i2].a[i1] : ((i2 < this.aj.a.length) ? this.aj.a[i2].a[i1] : this.k.a[i1]))));
    } else if ((index >= this.aE)) {
      var io$2 = ((index - this.aE) | 0);
      return this.aT.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aD)) {
      var io$3 = ((index - this.aD) | 0);
      return this.aS.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aC)) {
      var io$4 = ((index - this.aC) | 0);
      return this.aR.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aY(index);
  }
});
$p.z = (function(f) {
  return this.d0(f);
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  hF: 1,
  am: 1,
  an: 1,
  ah: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Z: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.h = null;
  this.k = null;
  this.m = 0;
  this.am = 0;
  this.aG = null;
  this.an = 0;
  this.aH = null;
  this.ao = 0;
  this.aI = null;
  this.ap = 0;
  this.aJ = null;
  this.ax = 0;
  this.a7 = null;
  this.ab = null;
  this.aa = null;
  this.a9 = null;
  this.a8 = null;
  this.am = len1;
  this.aG = prefix2;
  this.an = len12;
  this.aH = prefix3;
  this.ao = len123;
  this.aI = prefix4;
  this.ap = len1234;
  this.aJ = prefix5;
  this.ax = len12345;
  this.a7 = data6;
  this.ab = suffix5;
  this.aa = suffix4;
  this.a9 = suffix3;
  this.a8 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.ax) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a7.a.length) ? this.a7.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.ab.a.length) ? this.ab.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aa.a.length) ? this.aa.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a9.a.length) ? this.a9.a[i3].a[i2].a[i1] : ((i2 < this.a8.a.length) ? this.a8.a[i2].a[i1] : this.k.a[i1])))));
    } else if ((index >= this.ap)) {
      var io$2 = ((index - this.ap) | 0);
      return this.aJ.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ao)) {
      var io$3 = ((index - this.ao) | 0);
      return this.aI.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.an)) {
      var io$4 = ((index - this.an) | 0);
      return this.aH.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.am)) {
      var io$5 = ((index - this.am) | 0);
      return this.aG.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aY(index);
  }
});
$p.eG = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.ax)) {
      var io = ((index - this.ax) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.a7.a.length)) {
        var a6 = this.a7;
        var a6c = a6.g();
        var a5 = a6c.a[i6];
        var a5c = a5.g();
        var a4 = a5c.a[i5];
        var a4c = a4.g();
        var a3 = a4c.a[i4];
        var a3c = a3.g();
        var a2 = a3c.a[i3];
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        a6c.a[i6] = a5c;
        return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, a6c, this.ab, this.aa, this.a9, this.a8, this.k, this.m);
      } else if ((i5 < this.ab.a.length)) {
        var a5$1 = this.ab;
        var a5c$1 = a5$1.g();
        var a4$1 = a5c$1.a[i5];
        var a4c$1 = a4$1.g();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.g();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.g();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        a5c$1.a[i5] = a4c$1;
        return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, a5c$1, this.aa, this.a9, this.a8, this.k, this.m);
      } else if ((i4 < this.aa.a.length)) {
        var a4$2 = this.aa;
        var a4c$2 = a4$2.g();
        var a3$2 = a4c$2.a[i4];
        var a3c$2 = a3$2.g();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.g();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        a4c$2.a[i4] = a3c$2;
        return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, this.ab, a4c$2, this.a9, this.a8, this.k, this.m);
      } else if ((i3 < this.a9.a.length)) {
        var a3$3 = this.a9;
        var a3c$3 = a3$3.g();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.g();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.g();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, this.ab, this.aa, a3c$3, this.a8, this.k, this.m);
      } else if ((i2 < this.a8.a.length)) {
        var a2$4 = this.a8;
        var a2c$4 = a2$4.g();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.g();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, this.ab, this.aa, this.a9, a2c$4, this.k, this.m);
      } else {
        var a1$5 = this.k;
        var a1c$5 = a1$5.g();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, this.ab, this.aa, this.a9, this.a8, a1c$5, this.m);
      }
    } else if ((index >= this.ap)) {
      var io$2 = ((index - this.ap) | 0);
      var a5$2 = this.aJ;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.g();
      var a4$3 = a5c$2.a[idx5];
      var a4c$3 = a4$3.g();
      var a3$4 = a4c$3.a[idx4];
      var a3c$4 = a3$4.g();
      var a2$5 = a3c$4.a[idx3];
      var a2c$5 = a2$5.g();
      var a1$6 = a2c$5.a[idx2];
      var a1c$6 = a1$6.g();
      a1c$6.a[idx1] = elem;
      a2c$5.a[idx2] = a1c$6;
      a3c$4.a[idx3] = a2c$5;
      a4c$3.a[idx4] = a3c$4;
      a5c$2.a[idx5] = a4c$3;
      return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, a5c$2, this.ax, this.a7, this.ab, this.aa, this.a9, this.a8, this.k, this.m);
    } else if ((index >= this.ao)) {
      var io$3 = ((index - this.ao) | 0);
      var a4$4 = this.aI;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.g();
      var a3$5 = a4c$4.a[idx4$1];
      var a3c$5 = a3$5.g();
      var a2$6 = a3c$5.a[idx3$1];
      var a2c$6 = a2$6.g();
      var a1$7 = a2c$6.a[idx2$1];
      var a1c$7 = a1$7.g();
      a1c$7.a[idx1$1] = elem;
      a2c$6.a[idx2$1] = a1c$7;
      a3c$5.a[idx3$1] = a2c$6;
      a4c$4.a[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, a4c$4, this.ap, this.aJ, this.ax, this.a7, this.ab, this.aa, this.a9, this.a8, this.k, this.m);
    } else if ((index >= this.an)) {
      var io$4 = ((index - this.an) | 0);
      var a3$6 = this.aH;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.g();
      var a2$7 = a3c$6.a[idx3$2];
      var a2c$7 = a2$7.g();
      var a1$8 = a2c$7.a[idx2$2];
      var a1c$8 = a1$8.g();
      a1c$8.a[idx1$2] = elem;
      a2c$7.a[idx2$2] = a1c$8;
      a3c$6.a[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, a3c$6, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, this.ab, this.aa, this.a9, this.a8, this.k, this.m);
    } else if ((index >= this.am)) {
      var io$5 = ((index - this.am) | 0);
      var a2$8 = this.aG;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.g();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.g();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.h, this.am, a2c$8, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, this.ab, this.aa, this.a9, this.a8, this.k, this.m);
    } else {
      var a1$10 = this.h;
      var a1c$10 = a1$10.g();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, this.ab, this.aa, this.a9, this.a8, this.k, this.m);
    }
  } else {
    throw this.aY(index);
  }
});
$p.eu = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$79 = $m_sci_VectorStatics$().fV(this.k, elem);
    var length0$79 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, this.ab, this.aa, this.a9, this.a8, suffix1$79, length0$79);
  } else if ((this.a8.a.length < 31)) {
    var suffix2$63 = $m_sci_VectorStatics$().F(this.a8, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$80 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, this.ab, this.aa, this.a9, suffix2$63, a, length0$80);
  } else if ((this.a9.a.length < 31)) {
    var suffix3$52 = $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, this.k));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$81 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, this.ab, this.aa, suffix3$52, $m_sci_VectorStatics$().bM, a$1, length0$81);
  } else if ((this.aa.a.length < 31)) {
    var suffix4$36 = $m_sci_VectorStatics$().F(this.aa, $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, this.k)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$82 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, this.ab, suffix4$36, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$2, length0$82);
  } else if ((this.ab.a.length < 31)) {
    var suffix5$15 = $m_sci_VectorStatics$().F(this.ab, $m_sci_VectorStatics$().F(this.aa, $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, this.k))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$83 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, this.a7, suffix5$15, $m_sci_VectorStatics$().fM, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$3, length0$83);
  } else if ((this.a7.a.length < 62)) {
    var data6$16 = $m_sci_VectorStatics$().F(this.a7, $m_sci_VectorStatics$().F(this.ab, $m_sci_VectorStatics$().F(this.aa, $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, this.k)))));
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var length0$84 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.am, this.aG, this.an, this.aH, this.ao, this.aI, this.ap, this.aJ, this.ax, data6$16, $m_sci_VectorStatics$().jT, $m_sci_VectorStatics$().fM, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$4, length0$84);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.d0 = (function(f) {
  var prefix1$87 = $m_sci_VectorStatics$().cC(this.h, f);
  var prefix2$70 = $m_sci_VectorStatics$().ad(2, this.aG, f);
  var prefix3$59 = $m_sci_VectorStatics$().ad(3, this.aH, f);
  var prefix4$43 = $m_sci_VectorStatics$().ad(4, this.aI, f);
  var prefix5$22 = $m_sci_VectorStatics$().ad(5, this.aJ, f);
  var data6$23 = $m_sci_VectorStatics$().ad(6, this.a7, f);
  var suffix5$22 = $m_sci_VectorStatics$().ad(5, this.ab, f);
  var suffix4$43 = $m_sci_VectorStatics$().ad(4, this.aa, f);
  var suffix3$59 = $m_sci_VectorStatics$().ad(3, this.a9, f);
  var suffix2$70 = $m_sci_VectorStatics$().ad(2, this.a8, f);
  var suffix1$91 = $m_sci_VectorStatics$().cC(this.k, f);
  return new $c_sci_Vector6(prefix1$87, this.am, prefix2$70, this.an, prefix3$59, this.ao, prefix4$43, this.ap, prefix5$22, this.ax, data6$23, suffix5$22, suffix4$43, suffix3$59, suffix2$70, suffix1$91, this.m);
});
$p.dw = (function() {
  return 11;
});
$p.dv = (function(idx) {
  switch (idx) {
    case 0: {
      return this.h;
      break;
    }
    case 1: {
      return this.aG;
      break;
    }
    case 2: {
      return this.aH;
      break;
    }
    case 3: {
      return this.aI;
      break;
    }
    case 4: {
      return this.aJ;
      break;
    }
    case 5: {
      return this.a7;
      break;
    }
    case 6: {
      return this.ab;
      break;
    }
    case 7: {
      return this.aa;
      break;
    }
    case 8: {
      return this.a9;
      break;
    }
    case 9: {
      return this.a8;
      break;
    }
    case 10: {
      return this.k;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.ax) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a7.a.length) ? this.a7.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.ab.a.length) ? this.ab.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aa.a.length) ? this.aa.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a9.a.length) ? this.a9.a[i3].a[i2].a[i1] : ((i2 < this.a8.a.length) ? this.a8.a[i2].a[i1] : this.k.a[i1])))));
    } else if ((index >= this.ap)) {
      var io$2 = ((index - this.ap) | 0);
      return this.aJ.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ao)) {
      var io$3 = ((index - this.ao) | 0);
      return this.aI.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.an)) {
      var io$4 = ((index - this.an) | 0);
      return this.aH.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.am)) {
      var io$5 = ((index - this.am) | 0);
      return this.aG.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aY(index);
  }
});
$p.z = (function(f) {
  return this.d0(f);
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  hG: 1,
  am: 1,
  an: 1,
  ah: 1,
  z: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  v: 1,
  y: 1,
  x: 1,
  p: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Z: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.bh = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.bh = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.aW = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b5 = (function(size) {
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.ch = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.z = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aZ = (function(len) {
  var x = this.bh.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.dt = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), $ct_scm_StringBuilder__(new $c_scm_StringBuilder()));
});
$p.i = (function() {
  return this.bh.i();
});
$p.s = (function() {
  return this.bh.i();
});
$p.rY = (function(x) {
  var this$1 = this.bh;
  var str = ("" + $cToS(x));
  this$1.t = (this$1.t + str);
  return this;
});
$p.u = (function() {
  return this.bh.t;
});
$p.pp = (function(xs) {
  if (false) {
    var this$3 = this.bh;
    var str = xs.vi;
    this$3.t = (("" + this$3.t) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.bh.po(xs.c9);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.bh;
    var s = xs.bh;
    this$4.t = (("" + this$4.t) + s);
  } else {
    var ks = xs.s();
    if ((ks !== 0)) {
      var b = this.bh;
      if ((ks > 0)) {
        b.i();
      }
      var it = xs.d();
      while (it.j()) {
        var c = $uC(it.f());
        var str$1 = ("" + $cToS(c));
        b.t = (b.t + str$1);
      }
    }
  }
  return this;
});
$p.c = (function() {
  return (this.bh.i() === 0);
});
$p.o = (function(i) {
  return $bC(this.bh.pv(i));
});
$p.e = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bh.pv(i));
});
$p.h9 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).pp(coll);
});
$p.fe = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).pp(coll);
});
$p.ac = (function(elem) {
  return this.rY($uC(elem));
});
$p.af = (function() {
  return this.bh.t;
});
$p.at = (function() {
  return $m_scm_IndexedSeq$();
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cC)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cC: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  aX: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ig)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().iD($thiz);
  $thiz.cx = buf.cx;
  $thiz.dW = buf.dW;
  $thiz.hY = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.hZ = ((1 + $thiz.hZ) | 0);
  if ($thiz.hY) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.hZ = 0;
  this.cx = null;
  this.dW = null;
  this.hY = false;
  this.cy = 0;
  this.hZ = 0;
  this.cx = $m_sci_Nil$();
  this.dW = null;
  this.hY = false;
  this.cy = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.z = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.cc = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b5 = (function(size) {
});
$p.d = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.cx.d(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.hZ)));
});
$p.eA = (function() {
  return $m_scm_ListBuffer$();
});
$p.o = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.cx, i);
});
$p.i = (function() {
  return this.cy;
});
$p.s = (function() {
  return this.cy;
});
$p.c = (function() {
  return (this.cy === 0);
});
$p.r5 = (function() {
  this.hY = (!this.c());
  return this.cx;
});
$p.s6 = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.cy === 0)) {
    this.cx = last1;
  } else {
    var x$proxy2 = this.dW;
    if ((x$proxy2 === null)) {
      $m_sr_Scala3RunTime$().cF();
    }
    x$proxy2.a2 = last1;
  }
  this.dW = last1;
  this.cy = ((1 + this.cy) | 0);
  return this;
});
$p.iD = (function(xs) {
  var it = xs.d();
  if (it.j()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.f(), $m_sci_Nil$());
    this.cx = last0;
    while (it.j()) {
      var last1 = new $c_sci_$colon$colon(it.f(), $m_sci_Nil$());
      last0.a2 = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.cy = len;
    this.dW = last0;
  }
  return this;
});
$p.rT = (function(xs) {
  var it = xs.d();
  if (it.j()) {
    var fresh = new $c_scm_ListBuffer().iD(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.cy === 0)) {
      this.cx = fresh.cx;
    } else {
      var x$proxy3 = this.dW;
      if ((x$proxy3 === null)) {
        $m_sr_Scala3RunTime$().cF();
      }
      x$proxy3.a2 = fresh.cx;
    }
    this.dW = fresh.dW;
    this.cy = ((this.cy + fresh.cy) | 0);
  }
  return this;
});
$p.b8 = (function() {
  return "ListBuffer";
});
$p.at = (function() {
  return $m_scm_ListBuffer$();
});
$p.e = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.cx, i);
});
$p.af = (function() {
  return this.r5();
});
$p.ac = (function(elem) {
  return this.s6(elem);
});
$p.aW = (function(elems) {
  return this.rT(elems);
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cB)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  cB: 1,
  b8: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  H: 1,
  J: 1,
  aG: 1,
  b9: 1,
  l: 1,
  t: 1,
  N: 1,
  ai: 1,
  a: 1,
  Z: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.ej = 0;
  $thiz.cu = initialElements;
  $thiz.aq = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
function $p_scm_ArrayBuffer__foldl__I__I__O__F2__O($thiz, start, end, z, op) {
  var z$tailLocal1 = z;
  var start$tailLocal1 = start;
  while (true) {
    if ((start$tailLocal1 === end)) {
      return z$tailLocal1;
    } else {
      var start$tailLocal1$tmp1 = ((1 + start$tailLocal1) | 0);
      var z$tailLocal1$tmp1 = op.bN(z$tailLocal1, $thiz.cu.a[start$tailLocal1]);
      start$tailLocal1 = start$tailLocal1$tmp1;
      z$tailLocal1 = z$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.ej = 0;
  this.cu = null;
  this.aq = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.d = (function() {
  return this.rd().d();
});
$p.bn = (function() {
  return this.rd().bn();
});
$p.ch = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aZ = (function(len) {
  var x = this.aq;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.z = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.cc = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.s = (function() {
  return this.aq;
});
$p.ku = (function(n) {
  this.cu = $m_scm_ArrayBuffer$().qN(this.cu, this.aq, n);
});
$p.b5 = (function(size) {
  if (((size > this.aq) && (size >= 1))) {
    this.ku(size);
  }
});
$p.o = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().ha(n, ((this.aq - 1) | 0));
  }
  if ((hi > this.aq)) {
    throw $m_scg_CommonErrors$().ha(((hi - 1) | 0), ((this.aq - 1) | 0));
  }
  return this.cu.a[n];
});
$p.r8 = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().ha(index, ((this.aq - 1) | 0));
  }
  if ((hi > this.aq)) {
    throw $m_scg_CommonErrors$().ha(((hi - 1) | 0), ((this.aq - 1) | 0));
  }
  this.ej = ((1 + this.ej) | 0);
  this.cu.a[index] = elem;
});
$p.i = (function() {
  return this.aq;
});
$p.rd = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.ej)));
});
$p.eA = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.s3 = (function(elem) {
  this.ej = ((1 + this.ej) | 0);
  var newSize = ((1 + this.aq) | 0);
  if ((this.cu.a.length <= ((newSize - 1) | 0))) {
    this.ku(newSize);
  }
  this.aq = newSize;
  this.cu.a[((newSize - 1) | 0)] = elem;
  return this;
});
$p.ke = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aq;
    if ((elemsLength > 0)) {
      this.ej = ((1 + this.ej) | 0);
      this.ku(((this.aq + elemsLength) | 0));
      $m_s_Array$().ew(elems.cu, 0, this.cu, this.aq, elemsLength);
      this.aq = ((this.aq + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.b8 = (function() {
  return "ArrayBuffer";
});
$p.bm = (function(xs, start, len) {
  var srcLen = this.aq;
  var destLen = $m_jl_reflect_Array$().aP(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().ew(this.cu, 0, xs, start, copied);
  }
  return copied;
});
$p.dq = (function(z, op) {
  return $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 0, this.aq, z, op);
});
$p.du = (function(op) {
  return ((this.aq > 0) ? $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 1, this.aq, this.cu.a[0], op) : $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op));
});
$p.e = (function(v1) {
  return this.o((v1 | 0));
});
$p.at = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.ac = (function(elem) {
  return this.s3(elem);
});
$p.aW = (function(elems) {
  return this.ke(elems);
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cn)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  cn: 1,
  b8: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  H: 1,
  J: 1,
  aG: 1,
  b9: 1,
  p: 1,
  s: 1,
  W: 1,
  V: 1,
  cA: 1,
  l: 1,
  t: 1,
  a: 1,
  Z: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.et = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.et = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.b5 = (function(size) {
});
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.ch = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.z = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aZ = (function(len) {
  var x = (this.et.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cc = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.eA = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.o = (function(index) {
  return this.et[index];
});
$p.i = (function() {
  return (this.et.length | 0);
});
$p.s = (function() {
  return (this.et.length | 0);
});
$p.bC = (function() {
  return "WrappedArray";
});
$p.af = (function() {
  return this;
});
$p.ac = (function(elem) {
  this.et.push(elem);
  return this;
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  return this.et[index];
});
$p.at = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  jz: 1,
  b8: 1,
  Q: 1,
  r: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  k: 1,
  d: 1,
  o: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  H: 1,
  J: 1,
  aG: 1,
  b9: 1,
  t: 1,
  l: 1,
  V: 1,
  p: 1,
  s: 1,
  W: 1,
  cA: 1,
  N: 1,
  a: 1
}));
$s_Lscorry_Main__main__AT__V(new ($d_T.r().C)([]));
}).call(this);
//# sourceMappingURL=main.js.map
