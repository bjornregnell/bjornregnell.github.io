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
        return null.uX();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.uR(x0);
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
        return instance.uS(x0);
      }
    }
  }
}
function $dp_compareTo__T__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__compareTo__T__I(instance, x0);
  } else {
    return instance.uT(x0);
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
        return instance.o(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.o.call(instance, x0);
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
    return instance.uY(x0);
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.v0(x0);
  }
}
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1);
  } else {
    return instance.v2(x0, x1);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $dp_trim__T(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__trim__T(instance);
  } else {
    return instance.v4();
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
$p.o = (function(that) {
  return (this === that);
});
$p.t = (function() {
  var i = this.x();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.t();
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
$p.u = (function(srcPos, dest, destPos, length) {
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
$p.u = (function(srcPos, dest, destPos, length) {
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
$p.u = (function(srcPos, dest, destPos, length) {
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
$p.u = (function(srcPos, dest, destPos, length) {
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
$p.u = (function(srcPos, dest, destPos, length) {
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
$p.u = (function(srcPos, dest, destPos, length) {
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
$p.u = (function(srcPos, dest, destPos, length) {
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
$p.u = (function(srcPos, dest, destPos, length) {
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
$p.u = (function(srcPos, dest, destPos, length) {
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
  $p.u = (function(srcPos, dest, destPos, length) {
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
  aF: 1
}));
function $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T($thiz) {
  return (($objectGetClass($thiz).kx() + "@") + $thiz.x());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.ez();
  return ((x === (void 0)) ? $thiz.eu() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().qS(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))), $m_s_PartialFunction$().hF, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.qS = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.sT = (function(onTry, handleObserverErrors) {
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
$p.ql = (function(this$, observer) {
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
  this.fg = 0;
  this.fg = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.q7 = (function() {
  if ((this.fg === 2147483647)) {
    this.fg = 1;
  } else {
    this.fg = ((1 + this.fg) | 0);
  }
  return this.fg;
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
  this.iC = null;
  this.l5 = null;
  this.iD = 0;
  this.iC = code;
  this.l5 = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().hg();
  this.iD = ((x === (void 0)) ? 1 : ((1 + x.iD) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().hm === (-1)) || (this.iD > $m_Lcom_raquo_airstream_core_Transaction$().hm))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().d1(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().hm));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bo) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().eG.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().k2(this);
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
  this.hm = 0;
  this.l6 = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.hm = 1000;
  this.l6 = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.pf = (function(transaction) {
  try {
    transaction.iC.e(transaction);
    var x = transaction.l5;
    if ((x !== (void 0))) {
      while (x.uZ()) {
        x.uU().v3(transaction);
      }
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().d1(e$2);
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
  if ((($thiz.hn.length | 0) === 0)) {
    if ((($thiz.eG.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
        while ((($thiz.eG.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().k2($thiz.eG.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      while ((($thiz.hn.length | 0) > 0)) {
        var callback = $thiz.hn.shift();
        try {
          callback.e(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().d1(e$2);
        }
      }
      while ((($thiz.eG.length | 0) > 0)) {
        var _trx = $thiz.eG.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().k2(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bo = false;
  this.hn = null;
  this.eG = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bo = false;
  this.hn = $m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_F1.r().C)([])));
  this.eG = $m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
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
  return $thiz.eH.get(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V($thiz, transaction) {
  $thiz.ho.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.ho.shift();
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V($thiz, parent, newChild) {
  var maybeChildren = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__maybeChildrenFor__Lcom_raquo_airstream_core_Transaction__O($thiz, parent);
  var noChildrenFound = (maybeChildren === (void 0));
  var newChildren = ((maybeChildren === (void 0)) ? $m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([]))) : maybeChildren);
  newChildren.push(newChild);
  if (noChildrenFound) {
    $thiz.eH.set(parent, newChildren);
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
      (!(!$thiz.eH.delete(parent)));
    }
    return nextChild;
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
  this.ho = null;
  this.eH = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.ho = $m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.eH = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.k2 = (function(newTransaction) {
  var x = this.hg();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().pf(newTransaction);
    this.su(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.su = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.hg();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().l(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.tS(transaction$tailLocal1);
    transaction$tailLocal1.iC = $m_Lcom_raquo_airstream_core_Transaction$().l6;
    var maybeNextTransaction = this.hg();
    if ($m_sr_BoxesRunTime$().l(maybeNextTransaction, (void 0))) {
      if (((this.eH.size | 0) > 0)) {
        var numChildren = new $c_sr_IntRef(0);
        this.eH.forEach(((numChildren) => ((transactions, _$4) => {
          var ev$12 = ((numChildren.aw + (transactions.length | 0)) | 0);
          numChildren.aw = ev$12;
        }))(numChildren));
        throw $ct_jl_Exception__T__(new $c_jl_Exception(), (((("Transaction queue error: Stack cleared, but a total of " + numChildren.aw) + " children for ") + (this.eH.size | 0)) + " transactions remain. This is a bug in Airstream."));
      } else {
        return (void 0);
      }
    } else {
      $m_Lcom_raquo_airstream_core_Transaction$().pf(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.tS = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().l(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.hg();
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
$p.hg = (function() {
  return this.ho[0];
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
  this.la = null;
  this.l8 = null;
  this.l9 = null;
  this.la = onWillStart;
  this.l8 = onStart;
  this.l9 = onStop;
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
$p.rS = (function(onStart, onStop) {
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
  var index = ($thiz.e2.indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.e2.splice(index, 1);
    if ((!$thiz.c0.c())) {
      subscription.qb();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.hs.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.hs.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.lG = null;
  this.e2 = null;
  this.fh = false;
  this.hs = null;
  this.c0 = null;
  this.fi = 0;
  this.lG = onAccessAfterKilled;
  this.e2 = $m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.fh = true;
  this.hs = $m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.c0 = $m_s_None$();
  this.fi = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.oY = (function() {
  if ((!(!this.c0.c()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.lG);
      this.c0 = new $c_s_Some(newOwner);
      this.fh = false;
      this.fi = 0;
      var i = 0;
      var originalNumSubs = (this.e2.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.fi) | 0);
        this.e2[ix].qa(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.fh = true;
      this.fi = 0;
    });
    $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var when = true;
    if ((this$4.bo || (!when))) {
      f();
    } else {
      this$4.bo = true;
      try {
        f();
      } finally {
        this$4.bo = false;
        $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$4);
      }
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Can not activate " + this) + ": it is already active"));
  }
});
$p.sn = (function() {
  if ((!this.c0.c())) {
    this.fh = false;
    var arr = this.e2;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].qb();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.c0;
    if ((!this$4.c())) {
      this$4.y().q1();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.fh = true;
    this.c0 = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.rL = (function(subscription, prepend) {
  if (prepend) {
    this.fi = ((1 + this.fi) | 0);
    this.e2.unshift(subscription);
  } else {
    this.e2.push(subscription);
  }
  var this$1 = this.c0;
  if ((!this$1.c())) {
    var x0 = this$1.y();
    subscription.qa(x0);
  }
});
$p.u3 = (function(subscription) {
  if (this.fh) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.hs.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  d8: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.ht = null;
  this.lH = null;
  this.hu = null;
  this.ht = dynamicOwner;
  this.lH = activate;
  this.hu = $m_s_None$();
  dynamicOwner.rL(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.im = (function() {
  this.ht.u3(this);
});
$p.qa = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.hu = this.lH.e(owner);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bo || (!when))) {
    f();
  } else {
    this$2.bo = true;
    try {
      f();
    } finally {
      this$2.bo = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
$p.qb = (function() {
  var this$1 = this.hu;
  if ((!this$1.c())) {
    this$1.y().im();
    this.hu = $m_s_None$();
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
$p.iy = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => new $c_s_Some(activate.e(owner)))), prepend);
});
$p.qE = (function(dynamicOwner, activate, prepend) {
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
  $thiz.pg($m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.g3();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.g3().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.g3().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.g3().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.g3().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.iM)) {
    $thiz.lK.I();
    $thiz.iM = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.lL = null;
  this.lK = null;
  this.iM = false;
  this.lL = owner;
  this.lK = cleanup;
  this.iM = false;
  owner.qe(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.im = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.lL, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  dc: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.lM = null;
  this.lN = null;
  this.e3 = null;
  this.eI = false;
  this.lM = activate;
  this.lN = deactivate;
  this.e3 = $m_s_None$();
  this.eI = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.tf = (function() {
  var this$1 = this.e3;
  return ((!this$1.c()) && (!this$1.y().ht.c0.c()));
});
$p.un = (function(nextOwner) {
  if (this.eI) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.e3;
  if ((!this$1.c())) {
    var x0 = this$1.y();
    var x$2 = x0.ht;
    var $x_1 = ((nextOwner === null) ? (x$2 === null) : (nextOwner === x$2));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.tf() && (!nextOwner.c0.c()))) {
      this.eI = true;
    }
    var this$3 = this.e3;
    if ((!this$3.c())) {
      this$3.y().im();
      this.e3 = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iy(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((parentOwner) => {
      if ((!this.eI)) {
        this.lM.I();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        if ((!this.eI)) {
          this.lN.I();
        }
      })));
    })), false);
    this.e3 = new $c_s_Some(newPilotSubscription);
    this.eI = false;
  }
});
$p.s9 = (function() {
  if (this.eI) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.e3;
  if ((!this$1.c())) {
    this$1.y().im();
  }
  this.e3 = $m_s_None$();
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
$p.pc = (function(initial) {
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
$p.rR = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().pM(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().rS(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
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
$p.cR = (function(items) {
  return [...$m_sjsr_Compat$().uG(items)];
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
$p.sI = (function(this$, cb) {
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
  this.lY = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.pt($m_Lcom_raquo_laminar_api_package$().r.bB().kT());
  this.lY = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.rM = (function(parent, child) {
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
$p.tZ = (function(parent, child) {
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
$p.tc = (function(parent, newChild, referenceChild) {
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
$p.tb = (function(parent, newChild, referenceChild) {
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
$p.u6 = (function(parent, newChild, oldChild) {
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
$p.tk = (function(node, ancestor) {
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
$p.rA = (function(element, listener) {
  element.addEventListener(listener.fk.fj.gb, listener.j5, listener.j6);
});
$p.u0 = (function(element, listener) {
  element.removeEventListener(listener.fk.fj.gb, listener.j5, listener.j6);
});
$p.sl = (function(tag) {
  return document.createElement(tag.je);
});
$p.sW = (function(element, attr) {
  var x = this.sX(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.j0.kg(x));
});
$p.sX = (function(element, attr) {
  var domValue = element.d4.getAttributeNS(null, attr.gc);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.qu = (function(element, attr, value) {
  this.uj(element, attr, attr.j0.ia(value));
});
$p.uj = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.u1(element, attr);
  } else {
    element.d4.setAttribute(attr.gc, domValue);
  }
});
$p.u1 = (function(element, attr) {
  element.d4.removeAttribute(attr.gc);
});
$p.uk = (function(element, prop, value) {
  this.ul(element, prop, prop.mZ.ia(value));
});
$p.ul = (function(element, prop, value) {
  element.d4[prop.n0] = value;
});
$p.um = (function(element, styleProp, value) {
  var ref = element.d4;
  var styleCssName = styleProp.gd;
  var prefixes = styleProp.ge;
  var styleValue = ((value === null) ? null : value);
  if ((styleValue === null)) {
    prefixes.bV(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix) => ref.style.removeProperty((("" + prefix) + styleCssName)))));
    ref.style.removeProperty(styleCssName);
  } else {
    prefixes.bV(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((prefix$2) => {
      var \u03b41$ = ref.style;
      \u03b41$.setProperty((("" + prefix$2) + styleCssName), styleValue);
    })));
    var \u03b42$ = ref.style;
    \u03b42$.setProperty(styleCssName, styleValue);
  }
});
$p.pt = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.jf);
});
$p.t0 = (function(element, attr) {
  var x = this.t1(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.j1.kg(x));
});
$p.t1 = (function(element, attr) {
  var $x_2 = element.e5;
  var this$1 = attr.hy;
  var $x_1 = $x_2.getAttributeNS((this$1.c() ? null : this$1.y()), attr.j2);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.qv = (function(element, attr, value) {
  this.up(element, attr, attr.j1.ia(value));
});
$p.up = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.u4(element, attr);
  } else {
    var this$1 = attr.hy;
    if (this$1.c()) {
      element.e5.setAttribute(attr.hx, domValue);
    } else {
      var x0 = this$1.y();
      element.e5.setAttributeNS(x0, attr.hx, domValue);
    }
  }
});
$p.u4 = (function(element, attr) {
  var $x_1 = element.e5;
  var this$1 = attr.hy;
  $x_1.removeAttributeNS((this$1.c() ? null : this$1.y()), attr.j2);
});
$p.sk = (function(text) {
  return document.createComment(text);
});
$p.sm = (function(text) {
  return document.createTextNode(text);
});
$p.tg = (function(element) {
  return $m_sc_StringOps$().sc(element.tagName, 45);
});
$p.t2 = (function(element) {
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
  } else if (this.tg(element)) {
    var x = element.value;
    new $c_Lcom_raquo_laminar_DomApi$$anon$2(this);
    return ((x === (void 0)) ? (void 0) : (((typeof x) === "string") ? x : (void 0)));
  } else {
    return (void 0);
  }
});
$p.sq = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.so(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.so = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if (($m_sc_StringOps$(), (id !== ""))) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = (($m_sc_StringOps$(), (classes !== "")) ? ("." + classes.replace(this.lY, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.sp = (function(node) {
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
  this.iT = null;
  this.lZ = null;
  this.iS = null;
  this.iT = seq;
  this.lZ = scalaArray;
  this.iS = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.bV = (function(f) {
  if ((this.iT !== null)) {
    this.iT.bV(f);
  } else if ((this.iS !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().sI(this.iS, $m_sjs_js_Any$().pM(f));
  } else {
    $m_sc_ArrayOps$().sK(this.lZ, f);
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
  $thiz.iU = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.qV = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    _$1.n1.d4.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cc().c0.c()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((c) => {
      if (ignoreNextActivation.hT) {
        var ev$5 = false;
        ignoreNextActivation.hT = ev$5;
      } else {
        fn.e(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().qE(element.cc(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((owner) => {
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
  $thiz.mn = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.iV = $thiz.mn;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__dataAttr__T__Lcom_raquo_laminar_keys_HtmlAttr($thiz, suffix) {
  return new $c_Lcom_raquo_laminar_keys_HtmlAttr(("data-" + suffix), $m_Lcom_raquo_laminar_codecs_package$().dx);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().dx);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.gc, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().sW(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().qu(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.qU = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().dx, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.hx, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().t0(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().qv(el$2, attr, value);
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
$p.rN = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, hooks) => {
    if ((!ctx.eM)) {
      ctx.ic();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.uD(maybeLastSeenChild.D, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.D = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.uD = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.eM)) {
    ctx.ic();
  }
  var elem = ctx.e4;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().l(maybeLastSeenChild.L(), ctx.eL.L().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().ij(ctx.eK, newChildNode, ctx.eL, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().u5(ctx.eK, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = ((elem$1 - 1) | 0);
    elem$1 = ev$4;
  }
  ctx.u2(newChildNode);
  ctx.dy.clear();
  ctx.dy.set(newChildNode.L(), newChildNode);
  ctx.e4 = 1;
});
var $d_Lcom_raquo_laminar_inserters_ChildInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildInserter$, "com.raquo.laminar.inserters.ChildInserter$", ({
  dV: 1
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
  nextChildren.bV(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextChild) => {
    if ((currentChildrenCount.aw <= index.aw)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().ij(parentNode, nextChild, lastIndexChild.D, hooks);
      var ev$2 = nextChild.L();
      prevChildRef.D = ev$2;
      ev$2 = null;
      var ev$3 = ((1 + currentChildrenCount.aw) | 0);
      currentChildrenCount.aw = ev$3;
    } else if ((!$m_sr_BoxesRunTime$().l(nextChild.L(), prevChildRef.D))) {
      if ((!(!(!prevChildren.has(nextChild.L()))))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().ij(parentNode, nextChild, lastIndexChild.D, hooks);
        var ev$4 = nextChild.L();
        prevChildRef.D = ev$4;
        ev$4 = null;
        var ev$5 = ((1 + currentChildrenCount.aw) | 0);
        currentChildrenCount.aw = ev$5;
      } else {
        while (((!$m_sr_BoxesRunTime$().l(nextChild.L(), prevChildRef.D)) && (!$p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, prevChildRef.D)))) {
          var nextPrevChildRef = prevChildRef.D.nextSibling;
          $m_Lcom_raquo_laminar_nodes_ParentNode$().kO(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.D));
          var ev$6 = nextPrevChildRef;
          prevChildRef.D = ev$6;
          ev$6 = null;
          var ev$7 = ((currentChildrenCount.aw - 1) | 0);
          currentChildrenCount.aw = ev$7;
        }
        if ((!$m_sr_BoxesRunTime$().l(nextChild.L(), prevChildRef.D))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().ij(parentNode, nextChild, lastIndexChild.D, hooks);
          var ev$8 = nextChild.L();
          prevChildRef.D = ev$8;
          ev$8 = null;
        }
      }
    }
    if ((prevChildRef.D.nextSibling === null)) {
      var ev$9 = ((1 + index.aw) | 0);
      currentChildrenCount.aw = ev$9;
    } else {
      var ev$10 = prevChildRef.D.nextSibling;
      prevChildRef.D = ev$10;
      ev$10 = null;
    }
    var ev$11 = nextChild;
    lastIndexChild.D = ev$11;
    ev$11 = null;
    var ev$12 = ((1 + index.aw) | 0);
    index.aw = ev$12;
  })));
  while ((index.aw < currentChildrenCount.aw)) {
    var nextPrevChildRef$1 = prevChildRef.D.nextSibling;
    $m_Lcom_raquo_laminar_nodes_ParentNode$().kO(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.D));
    var ev$13 = nextPrevChildRef$1;
    prevChildRef.D = ev$13;
    ev$13 = null;
    var ev$14 = ((currentChildrenCount.aw - 1) | 0);
    currentChildrenCount.aw = ev$14;
  }
  return currentChildrenCount.aw;
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
$p.pb = (function(childrenSource, renderableSeq, renderableNode, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, hooks) => {
    if ((!ctx.eM)) {
      ctx.ic();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childrenSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2) => ((components) => {
      this.uE(($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(components, null, null)), ctx$2, hooks);
    }))(ctx)), owner);
  })), initialHooks);
});
$p.uE = (function(newChildren, ctx, hooks) {
  if ((!ctx.eM)) {
    ctx.ic();
  }
  var newChildrenMap = $m_Lcom_raquo_laminar_inserters_InsertContext$().tL(newChildren);
  ctx.e4 = $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I(this, ctx.dy, newChildren, newChildrenMap, ctx.eK, ctx.eL, ctx.e4, hooks);
  ctx.dy = newChildrenMap;
});
var $d_Lcom_raquo_laminar_inserters_ChildrenInserter$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_ChildrenInserter$, "com.raquo.laminar.inserters.ChildrenInserter$", ({
  dW: 1
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
  this.eK = null;
  this.eL = null;
  this.eM = false;
  this.e4 = 0;
  this.dy = null;
  this.eK = parentNode;
  this.eL = sentinelNode;
  this.eM = strictMode;
  this.e4 = extraNodeCount;
  this.dy = extraNodesMap;
}
$p = $c_Lcom_raquo_laminar_inserters_InsertContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_InsertContext;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_InsertContext() {
}
$h_Lcom_raquo_laminar_inserters_InsertContext.prototype = $p;
$p.ic = (function() {
  if ((this.eM || (this.e4 !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().sp(this.eK.L())));
  }
  if ((this.dy === null)) {
    this.dy = new Map();
  }
  if ((!(!(!(this.eL.L() instanceof Comment))))) {
    var contentNode = this.eL;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().tc(this.eK.L(), newSentinelNode.j8, contentNode.L());
    this.eL = newSentinelNode;
    this.e4 = 1;
    this.dy.set(contentNode.L(), contentNode);
  }
  this.eM = true;
});
$p.u2 = (function(after) {
  var elem = this.e4;
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
        $m_Lcom_raquo_laminar_nodes_ParentNode$().kO(this.eK, maybePrevChild);
        var ev$5 = ((elem$1 - 1) | 0);
        elem$1 = ev$5;
      }
    }
  }
});
var $d_Lcom_raquo_laminar_inserters_InsertContext = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext, "com.raquo.laminar.inserters.InsertContext", ({
  dZ: 1
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
$p.u8 = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fI(parentNode, sentinelNode, hooks);
  return this.uJ(parentNode, sentinelNode, strictMode);
});
$p.uJ = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
$p.tL = (function(nodes) {
  var acc = new Map();
  nodes.bV(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((node) => {
    acc.set(node.L(), node);
  })));
  return acc;
});
var $d_Lcom_raquo_laminar_inserters_InsertContext$ = new $TypeData().i($c_Lcom_raquo_laminar_inserters_InsertContext$, "com.raquo.laminar.inserters.InsertContext$", ({
  e0: 1
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
$p.q9 = (function(items, separator) {
  if ((items === "")) {
    return $m_sci_Nil$();
  } else {
    var this$10 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => {
      $m_sc_StringOps$();
      return (_$1 !== "");
    })));
    $m_sci_List$();
    return $m_sci_Nil$().iu(this$10);
  }
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$, "com.raquo.laminar.keys.CompositeKey$", ({
  e3: 1
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
  this.fj = null;
  this.hw = false;
  this.iZ = false;
  this.hv = null;
  this.fj = eventProp;
  this.hw = shouldUseCapture;
  this.iZ = shouldBePassive;
  this.hv = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.q4 = (function() {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ev) => {
    var this$2 = this.hv.e(ev);
    if (this$2.c()) {
      return $m_s_None$();
    } else {
      this$2.y();
      var x = $m_Lcom_raquo_laminar_DomApi$().t2(ev.target);
      return new $c_s_Some(((x === (void 0)) ? "" : x));
    }
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.fj, this.hw, this.iZ, newProcessor);
});
var $d_Lcom_raquo_laminar_keys_EventProcessor = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor, "com.raquo.laminar.keys.EventProcessor", ({
  e7: 1
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
$p.kh = (function(eventProp, shouldUseCapture, shouldBePassive) {
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(eventProp, shouldUseCapture, shouldBePassive, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$14) => new $c_s_Some(_$14))));
});
var $d_Lcom_raquo_laminar_keys_EventProcessor$ = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProcessor$, "com.raquo.laminar.keys.EventProcessor$", ({
  e8: 1
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
  this.qY = null;
  this.qZ = null;
  this.r0 = null;
  this.r1 = null;
  this.qY = "http://www.w3.org/2000/svg";
  this.qZ = "http://www.w3.org/1999/xlink";
  this.r0 = "http://www.w3.org/XML/1998/namespace";
  this.r1 = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.tF = (function(namespace) {
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
  ed: 1
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
  this.n1 = null;
  this.j3 = null;
  this.n1 = thisNode;
  this.j3 = owner;
}
$p = $c_Lcom_raquo_laminar_lifecycle_MountContext.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_lifecycle_MountContext;
/** @constructor */
function $h_Lcom_raquo_laminar_lifecycle_MountContext() {
}
$h_Lcom_raquo_laminar_lifecycle_MountContext.prototype = $p;
var $d_Lcom_raquo_laminar_lifecycle_MountContext = new $TypeData().i($c_Lcom_raquo_laminar_lifecycle_MountContext, "com.raquo.laminar.lifecycle.MountContext", ({
  ee: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$() {
  this.r2 = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.r2 = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_Modifier$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_Modifier$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_Modifier$() {
}
$h_Lcom_raquo_laminar_modifiers_Modifier$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_Modifier$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$, "com.raquo.laminar.modifiers.Modifier$", ({
  ej: 1
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
  this.hz = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.hz = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableNode$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableNode$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableNode$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableNode$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableNode$, "com.raquo.laminar.modifiers.RenderableNode$", ({
  en: 1
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
  this.ci = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableText$ = this;
  this.ci = new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((x) => x)), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => ("" + (_$1 | 0)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => ("" + (+_$2)))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => ("" + (!(!_$3))))), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => _$4.uF())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
}
$p = $c_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_RenderableText$;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_RenderableText$() {
}
$h_Lcom_raquo_laminar_modifiers_RenderableText$.prototype = $p;
var $d_Lcom_raquo_laminar_modifiers_RenderableText$ = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$, "com.raquo.laminar.modifiers.RenderableText$", ({
  es: 1
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
$p.fI = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.eF(nextParent);
  if ((hooks !== (void 0))) {
    hooks.qd(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().rM(parent.L(), child.L());
  if (appended) {
    child.eB(nextParent);
  }
  return appended;
});
$p.kO = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().l(child.L().parentNode, parent.L())) {
    child.eF($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().tZ(parent.L(), child.L());
    child.eB($m_s_None$());
  }
  return removed;
});
$p.ij = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.eF(nextParent);
  if ((hooks !== (void 0))) {
    hooks.qd(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().tb(parent.L(), newChild.L(), referenceChild.L());
  newChild.eB(nextParent);
  return inserted;
});
$p.u5 = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.fJ().bM(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.eF($m_s_None$());
      newChild.eF(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.qd(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().u6(parent.L(), newChild.L(), oldChild.L());
      if (replaced) {
        oldChild.eB($m_s_None$());
        newChild.eB(newChildNextParent);
      }
    }
  }
  return replaced;
});
var $d_Lcom_raquo_laminar_nodes_ParentNode$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ParentNode$, "com.raquo.laminar.nodes.ParentNode$", ({
  ev: 1
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
$p.uI = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iy(element.cc(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
});
var $d_Lcom_raquo_laminar_nodes_ReactiveElement$ = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveElement$, "com.raquo.laminar.nodes.ReactiveElement$", ({
  ew: 1
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
  return (emptyNode$lzy1$1.hU ? emptyNode$lzy1$1.hV : emptyNode$lzy1$1.ta(new $c_Lcom_raquo_laminar_nodes_CommentNode("")));
}
function $p_Lcom_raquo_laminar_receivers_ChildOptionReceiver$__emptyNode$1__sr_LazyRef__Lcom_raquo_laminar_nodes_CommentNode($thiz, emptyNode$lzy1$2) {
  return (emptyNode$lzy1$2.hU ? emptyNode$lzy1$2.hV : $p_Lcom_raquo_laminar_receivers_ChildOptionReceiver$__emptyNode$lzyINIT1$1__sr_LazyRef__Lcom_raquo_laminar_nodes_CommentNode($thiz, emptyNode$lzy1$2));
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
$p.oW = (function(maybeChildSource) {
  var emptyNode$lzy1 = new $c_sr_LazyRef();
  $m_Lcom_raquo_laminar_api_package$();
  return $m_Lcom_raquo_laminar_inserters_ChildInserter$().rN(maybeChildSource.f8().h5(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((emptyNode$lzy1$2) => ((_$1) => (_$1.c() ? $p_Lcom_raquo_laminar_receivers_ChildOptionReceiver$__emptyNode$1__sr_LazyRef__Lcom_raquo_laminar_nodes_CommentNode(this, emptyNode$lzy1$2) : _$1.y())))(emptyNode$lzy1))).f8(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hz, (void 0));
});
var $d_Lcom_raquo_laminar_receivers_ChildOptionReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildOptionReceiver$, "com.raquo.laminar.receivers.ChildOptionReceiver$", ({
  eB: 1
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
  this.r3 = null;
  $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = this;
  this.r3 = $m_Lcom_raquo_laminar_receivers_ChildOptionReceiver$();
}
$p = $c_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_receivers_ChildReceiver$;
/** @constructor */
function $h_Lcom_raquo_laminar_receivers_ChildReceiver$() {
}
$h_Lcom_raquo_laminar_receivers_ChildReceiver$.prototype = $p;
var $d_Lcom_raquo_laminar_receivers_ChildReceiver$ = new $TypeData().i($c_Lcom_raquo_laminar_receivers_ChildReceiver$, "com.raquo.laminar.receivers.ChildReceiver$", ({
  eC: 1
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
  eD: 1
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
$p.uf = (function(d, scaleFactor) {
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
  f0: 1
}));
var $n_jl_Math$;
function $m_jl_Math$() {
  if ((!$n_jl_Math$)) {
    $n_jl_Math$ = new $c_jl_Math$();
  }
  return $n_jl_Math$;
}
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().d0("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
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
  var PatBC = $m_jl_StackTrace$StringRE$().d0("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().d0("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().d0("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().d0("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().d0("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
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
  if ((!(!$m_jl_Utils$Cache$().fp.call(dict, encodedName)))) {
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
    $thiz.jl = dict;
    $thiz.cj = (((1 | $thiz.cj) << 24) >> 24);
  }
  return $thiz.jl;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.cj) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jl);
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
    $thiz.jm = dict;
    $thiz.cj = (((2 | $thiz.cj) << 24) >> 24);
  }
  return $thiz.jm;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.cj) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.jm);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.cj) << 24) >> 24) === 0)) {
    $thiz.jk = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.cj = (((4 | $thiz.cj) << 24) >> 24);
  }
  return $thiz.jk;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.cj) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.jk);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().d0("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().bZ("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().bZ("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().bZ("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().bZ("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bZ("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().bZ("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().bZ("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().bZ("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().bZ("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().bZ("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bZ("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().bZ("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().bZ("Line (\\d+).*script (?:in )?(\\S+)", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().bZ("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
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
  var lineRE = $m_jl_StackTrace$StringRE$().d0("^(.*)@(.+):(\\d+)$");
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
  var lineRE = $m_jl_StackTrace$StringRE$().d0("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
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
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().d0("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().d0("<anonymous function>"), "{anonymous}");
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
  this.jl = null;
  this.jm = null;
  this.jk = null;
  this.cj = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.sA = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  f4: 1
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
$p.d0 = (function(this$) {
  return new RegExp(this$);
});
$p.bZ = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  f5: 1
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
  this.jn = null;
  this.nk = null;
  $n_jl_System$SystemProperties$ = this;
  this.jn = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.nk = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.kw = (function(key, default$1) {
  if ((this.jn !== null)) {
    var dict = this.jn;
    return ((!(!$m_jl_Utils$Cache$().fp.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.nk.kw(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  f8: 1
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
  this.fp = null;
  $n_jl_Utils$Cache$ = this;
  this.fp = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  fb: 1
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
$p.aN = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? ((array.a.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  fd: 1
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
$p.qy = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bX(a, new $ac_I(a.a.length), 0, end, comparator, ops);
  } else {
    this.cf(a, 0, end, comparator, ops);
  }
});
$p.ut = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bX(a, new $ac_I(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cf(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.qz = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var end = ((a.a.length >>> 1) | 0);
  if ((end > 16)) {
    this.bX(a, new $ac_J(((a.a.length >>> 1) | 0)), 0, end, comparator, ops);
  } else {
    this.cf(a, 0, end, comparator, ops);
  }
});
$p.uu = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bX(a, new $ac_J(((a.a.length >>> 1) | 0)), fromIndex, toIndex, comparator, ops);
  } else {
    this.cf(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.qA = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bX(a, new $ac_S(a.a.length), 0, end, comparator, ops);
  } else {
    this.cf(a, 0, end, comparator, ops);
  }
});
$p.uv = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bX(a, new $ac_S(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cf(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.qx = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bX(a, new $ac_C(a.a.length), 0, end, comparator, ops);
  } else {
    this.cf(a, 0, end, comparator, ops);
  }
});
$p.us = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bX(a, new $ac_C(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cf(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.qw = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bX(a, new $ac_B(a.a.length), 0, end, comparator, ops);
  } else {
    this.cf(a, 0, end, comparator, ops);
  }
});
$p.ur = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bX(a, new $ac_B(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cf(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.g2 = (function(array, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  var end = array.a.length;
  if ((end > 16)) {
    this.bX(array, $objectGetClass(array).A.Q().A.U(array.a.length), 0, end, comparator$1, ops);
  } else {
    this.cf(array, 0, end, comparator$1, ops);
  }
});
$p.uw = (function(array, fromIndex, toIndex, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bX(array, $objectGetClass(array).A.Q().A.U(array.a.length), fromIndex, toIndex, comparator$1, ops);
  } else {
    this.cf(array, fromIndex, toIndex, comparator$1, ops);
  }
});
$p.bX = (function(a, temp, start, end, comparator, ops) {
  var length = ((end - start) | 0);
  if ((length > 16)) {
    var middle = ((start + (((length + ((length >>> 31) | 0)) | 0) >> 1)) | 0);
    this.bX(a, temp, start, middle, comparator, ops);
    this.bX(a, temp, middle, end, comparator, ops);
    var outIndex = start;
    var leftInIndex = start;
    var rightInIndex = middle;
    while ((outIndex < end)) {
      if (((leftInIndex < middle) && ((rightInIndex >= end) || (comparator.Z(ops.bA(a, leftInIndex), ops.bA(a, rightInIndex)) <= 0)))) {
        ops.d2(temp, outIndex, ops.bA(a, leftInIndex));
        leftInIndex = ((1 + leftInIndex) | 0);
      } else {
        ops.d2(temp, outIndex, ops.bA(a, rightInIndex));
        rightInIndex = ((1 + rightInIndex) | 0);
      }
      outIndex = ((1 + outIndex) | 0);
    }
    temp.u(start, a, start, length);
  } else {
    this.cf(a, start, end, comparator, ops);
  }
});
$p.cf = (function(a, start, end, comparator, ops) {
  var n = ((end - start) | 0);
  if ((n >= 2)) {
    var aStart = ops.bA(a, start);
    var aStartPlusOne = ops.bA(a, ((1 + start) | 0));
    if ((comparator.Z(aStart, aStartPlusOne) > 0)) {
      ops.d2(a, start, aStartPlusOne);
      ops.d2(a, ((1 + start) | 0), aStart);
    }
    var m = 2;
    while ((m < n)) {
      var next = ops.bA(a, ((start + m) | 0));
      if ((comparator.Z(next, ops.bA(a, ((((start + m) | 0) - 1) | 0))) < 0)) {
        var iA = start;
        var iB = ((((start + m) | 0) - 1) | 0);
        while ((((iB - iA) | 0) > 1)) {
          var ix = ((((iA + iB) | 0) >>> 1) | 0);
          if ((comparator.Z(next, ops.bA(a, ix)) < 0)) {
            iB = ix;
          } else {
            iA = ix;
          }
        }
        var ix$2 = ((iA + ((comparator.Z(next, ops.bA(a, iA)) < 0) ? 0 : 1)) | 0);
        var i = ((start + m) | 0);
        while ((i > ix$2)) {
          ops.d2(a, i, ops.bA(a, ((i - 1) | 0)));
          i = ((i - 1) | 0);
        }
        ops.d2(a, ix$2, next);
      }
      m = ((1 + m) | 0);
    }
  }
});
$p.rZ = (function(a, key) {
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
$p.pD = (function(a, b) {
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
$p.kj = (function(a, b) {
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
$p.pE = (function(a, b) {
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
$p.pC = (function(a, b) {
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
$p.pB = (function(a, b) {
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
$p.pF = (function(a, b) {
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
$p.sB = (function(a, value) {
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
  var ret = $objectGetClass(original).A.Q().A.U(newLength);
  original.u(0, ret, 0, copyLength);
  return ret;
});
$p.ke = (function(original, newLength, newType) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.A.Q().A.U(newLength);
  original.u(0, ret, 0, copyLength);
  return ret;
});
$p.pn = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.u(0, ret, 0, copyLength);
  return ret;
});
$p.pr = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.u(0, ret, 0, copyLength);
  return ret;
});
$p.pp = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.u(0, ret, 0, copyLength);
  return ret;
});
$p.pq = (function(original, newLength) {
  var b = ((original.a.length >>> 1) | 0);
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.u(0, ret, 0, copyLength);
  return ret;
});
$p.po = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.u(0, ret, 0, copyLength);
  return ret;
});
$p.sj = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.u(0, ret, 0, copyLength);
  return ret;
});
$p.si = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.u(0, ret, 0, copyLength);
  return ret;
});
$p.ps = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.u(0, ret, 0, copyLength);
  return ret;
});
$p.ae = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).A.Q().A.U(retLength);
  original.u(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  fg: 1
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
  this.nt = null;
  this.ns = null;
  $n_ju_Formatter$ = this;
  this.nt = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g");
  this.ns = new $ac_I(new Int32Array([96, 126, 638, 770, 32, 256, 2, 126, (-1), (-1), (-1), (-1), (-1), (-1), 800, (-1), (-1), (-1), 124, (-1), (-1), (-1), (-1), 544, (-1), (-1)]));
}
$p = $c_ju_Formatter$.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$;
/** @constructor */
function $h_ju_Formatter$() {
}
$h_ju_Formatter$.prototype = $p;
$p.kC = (function(count) {
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
$p.to = (function(x) {
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
$p.tn = (function(x) {
  var unscaledValueWithSign = x.v7().t();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0);
  } else {
    var negative = (unscaledValueWithSign.charCodeAt(0) === 45);
    return new $c_ju_Formatter$Decimal(negative, (negative ? unscaledValueWithSign.substring(1) : unscaledValueWithSign), x.v1());
  }
});
var $d_ju_Formatter$ = new $TypeData().i($c_ju_Formatter$, "java.util.Formatter$", ({
  fm: 1
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
$p.pW = (function() {
  return (this.dA === "0");
});
$p.qo = (function(precision) {
  $m_ju_Formatter$();
  if ((!(precision > 0))) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision");
  }
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision);
});
$p.uo = (function(newScale) {
  var roundingPos = ((((this.dA.length + newScale) | 0) - this.d5) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  if ((!(rounded.pW() || (rounded.d5 <= newScale)))) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large");
  }
  return ((rounded.pW() || (rounded.d5 === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.dz, (("" + rounded.dA) + $m_ju_Formatter$().kC(((newScale - rounded.d5) | 0))), newScale));
});
$p.t = (function() {
  return (((((("Decimal(" + this.dz) + ", ") + this.dA) + ", ") + this.d5) + ")");
});
var $d_ju_Formatter$Decimal = new $TypeData().i($c_ju_Formatter$Decimal, "java.util.Formatter$Decimal", ({
  fn: 1
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
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.aO, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().nP.exec($thiz.aO);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var end = x.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        $thiz.U = ($thiz.U | $m_ju_regex_PatternCompiler$().pZ(x.charCodeAt(value)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.U) !== 0)) {
      $thiz.U = (64 | $thiz.U);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var end$1 = x$1.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var value$1 = i$1;
        $thiz.U = ($thiz.U & (~$m_ju_regex_PatternCompiler$().pZ(x$1.charCodeAt(value$1))));
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
  var s = $m_ju_regex_PatternCompiler$().f6(cp);
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
        return (((66 & $thiz.U) !== 2) ? s : (((((cp - 65) | 0) >>> 0) <= 25) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().f6(((32 + cp) | 0))) + "]") : (((((cp - 97) | 0) >>> 0) <= 25) ? ((("[" + $m_ju_regex_PatternCompiler$().f6(((cp - 32) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.aO;
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
          $thiz.kE();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.aO;
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
  var pattern = $thiz.aO;
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
  var end = ($thiz.c2.length | 0);
  var i = 0;
  while ((i < end)) {
    var value = i;
    var mapped = ($thiz.c2[value] | 0);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.c2[value] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = compiledToken.replace($m_ju_regex_PatternCompiler$().nQ, ((arg1$2, arg2$2, arg3$2) => {
    var num = arg2$2.length;
    var t = ((num >>> 31) | 0);
    if (((((1 & ((num + t) | 0)) - t) | 0) === 0)) {
      return arg1$2;
    } else {
      var groupNumber = (parseInt(arg3$2, 10) | 0);
      return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2$2) + ((1 + groupNumber) | 0)) : arg1$2);
    }
  }));
  $thiz.c1 = ((1 + $thiz.c1) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.aO;
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
      var x1$2 = cls.hD;
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
          return $m_ju_regex_PatternCompiler$().il(cls.d6);
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
      } else if (((320 & $thiz.U) !== 0)) {
        $thiz.fT("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.U) !== 0)) {
        $thiz.fT("\\B with UNICODE_CASE", "2018");
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
      return (("(?=" + (((1 & $thiz.U) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])")) + "?$)");
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
          var $x_1 = ((parseInt(s, 10) | 0) <= ((($thiz.c2.length | 0) - 1) | 0));
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
      if ((groupNumber > ((($thiz.c2.length | 0) - 1) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = ($thiz.c2[groupNumber] | 0);
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
      var dict = $thiz.gg;
      if ((!(!(!$m_jl_Utils$Cache$().fp.call(dict, groupName))))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = (dict[groupName] | 0);
      var compiledGroupNumber$2 = ($thiz.c2[groupNumber$2] | 0);
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
  var pattern = $thiz.aO;
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
  var pattern = $thiz.aO;
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
  var pattern = $thiz.aO;
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
  var pattern = $thiz.aO;
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
  var pattern = $thiz.aO;
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
      var positive = $m_ju_regex_PatternCompiler$().nK;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().nN;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().nL;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().nO;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().nM;
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
  return ((dispatchChar >= 97) ? positive : positive.tG());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.aO;
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
  var dict = $m_ju_regex_PatternCompiler$().jt;
  if ((!(!(!$m_jl_Utils$Cache$().fp.call(dict, property))))) {
    $thiz.fT("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.U) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().jt;
  var result = dict$1[property2];
  $thiz.b = ((1 + $thiz.b) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.aO;
  var len = pattern.length;
  $thiz.b = ((1 + $thiz.b) | 0);
  var isNegated = (($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 94));
  if (isNegated) {
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.U) === 2), isNegated);
  while (($thiz.b !== len)) {
    var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return builder.sF();
          break;
        }
        case 38: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if ((($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 38))) {
            $thiz.b = ((1 + $thiz.b) | 0);
            builder.uA();
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
              builder.rx($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
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
              builder.rz(pattern, $thiz.b, end);
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
          if (((4 & $thiz.U) !== 0)) {
            $thiz.b = ((1 + $thiz.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & $thiz.U) !== 0)) {
            $thiz.kE();
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
  var pattern = $thiz.aO;
  var len = pattern.length;
  var start = $thiz.b;
  if (((((1 + start) | 0) === len) || (pattern.charCodeAt(((1 + start) | 0)) !== 63))) {
    $thiz.b = ((1 + start) | 0);
    $thiz.c1 = ((1 + $thiz.c1) | 0);
    $thiz.c2.push($thiz.c1);
    return (("(" + $thiz.h4(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var index$1 = ((2 + start) | 0);
    var c1 = pattern.charCodeAt(index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.b = ((3 + start) | 0);
      return ((("" + pattern.substring(start, ((3 + start) | 0))) + $thiz.h4(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var index$2 = ((3 + start) | 0);
      var c2 = pattern.charCodeAt(index$2);
      if ((((((c2 - 65) | 0) >>> 0) <= 25) || ((((c2 - 97) | 0) >>> 0) <= 25))) {
        $thiz.b = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.gg;
        if ((!(!$m_jl_Utils$Cache$().fp.call(dict, name)))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.c1 = ((1 + $thiz.c1) | 0);
        $thiz.c2.push($thiz.c1);
        var dict$1 = $thiz.gg;
        var value = ((($thiz.c2.length | 0) - 1) | 0);
        dict$1[name] = value;
        $thiz.b = ((1 + $thiz.b) | 0);
        return (("(" + $thiz.h4(true)) + ")");
      } else {
        if (((c2 !== 33) && (c2 !== 61))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.fT("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.b = ((3 + start) | 0);
      $thiz.c1 = ((1 + $thiz.c1) | 0);
      var groupNumber = $thiz.c1;
      return (((("(?:(?=(" + $thiz.h4(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.aO;
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
  if (((4 & $thiz.U) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if ((($thiz.b !== len$2) && (pattern$3.charCodeAt($thiz.b) === 45))) {
    $thiz.b = ((1 + $thiz.b) | 0);
    if (((4 & $thiz.U) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.b === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I(pattern$3, $thiz.b);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      builder$1.i3(startCodePoint);
      builder$1.i3(45);
    } else {
      $thiz.b = (($thiz.b + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      builder$1.ry(startCodePoint, endCodePoint);
    }
  } else {
    builder$1.i3(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.aO = null;
  this.U = 0;
  this.hC = false;
  this.b = 0;
  this.c1 = 0;
  this.c2 = null;
  this.gg = null;
  this.aO = pattern;
  this.U = flags;
  this.hC = false;
  this.b = 0;
  this.c1 = 0;
  this.c2 = [0];
  this.gg = ({});
}
$p = $c_ju_regex_PatternCompiler.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $p;
$p.sb = (function() {
  if (((256 & this.U) !== 0)) {
    this.U = (64 | this.U);
  }
  var isLiteral = ((16 & this.U) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.U) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.U) !== 0)) {
    this.fT("MULTILINE", "2018");
  }
  if (((256 & this.U) !== 0)) {
    this.fT("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.aO);
  } else {
    if ((this.aO.substring(this.b, ((2 + this.b) | 0)) === "\\G")) {
      this.hC = true;
      this.b = ((2 + this.b) | 0);
    }
    var jsPattern = this.h4(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().js ? "us" : "u");
  var jsFlags = (((66 & this.U) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.aO, this.U, jsPattern, jsFlags, this.hC, (((this.c2.length | 0) - 1) | 0), this.c2, this.gg);
});
$p.fT = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$p.h4 = (function(insideGroup) {
  var pattern = this.aO;
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
          if ((this.hC && (!insideGroup))) {
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
          if (((4 & this.U) !== 0)) {
            this.b = ((1 + this.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & this.U) !== 0)) {
            this.kE();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().f6(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.c1;
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
          var rejected = (((32 & this.U) !== 0) ? "" : (((1 & this.U) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().il(rejected);
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
$p.kE = (function() {
  var pattern = this.aO;
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
  fK: 1
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
  this.nP = null;
  this.nQ = null;
  this.r8 = false;
  this.r7 = false;
  this.js = false;
  this.nK = null;
  this.r4 = null;
  this.nN = null;
  this.nL = null;
  this.r5 = null;
  this.nO = null;
  this.nM = null;
  this.r6 = null;
  this.jt = null;
  this.r9 = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.nP = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.nQ = new RegExp("(\\\\+)(\\d+)", "g");
  this.r8 = true;
  this.r7 = true;
  this.js = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.nK = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.r4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.nN = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.nL = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.r5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.nO = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.nM = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.r6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
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
  this.jt = r;
  this.r9 = new RegExp("(?:^|_)[a-z]", "g");
}
$p = $c_ju_regex_PatternCompiler$.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $p;
$p.sa = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).sb();
});
$p.pZ = (function(c) {
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
$p.il = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().js ? "." : "[\\d\\D]"));
});
$p.f6 = (function(codePoint) {
  return String.fromCodePoint(codePoint);
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().i($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  fL: 1
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
  if ($thiz.jv) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().il($thiz.a1);
    return (($thiz.ck === "") ? negThisSegment : (((("(?:(?!" + $thiz.ck) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.a1 === "") ? (($thiz.ck === "") ? "[^\\d\\D]" : (("(?:" + $thiz.ck) + ")")) : (($thiz.ck === "") ? (("[" + $thiz.a1) + "]") : (((("(?:" + $thiz.ck) + "|[") + $thiz.a1) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().f6(codePoint);
  return (((((((codePoint - 92) | 0) >>> 0) <= 1) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.ju = false;
  this.jv = false;
  this.gh = null;
  this.ck = null;
  this.a1 = null;
  this.ju = asciiCaseInsensitive;
  this.jv = isNegated;
  this.gh = "";
  this.ck = "";
  this.a1 = "";
}
$p = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $p;
$p.sF = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.gh === "") ? conjunct : ((("(?:" + this.gh) + conjunct) + ")"));
});
$p.uA = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.gh = (this.gh + (this.jv ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.ck = "";
  this.a1 = "";
});
$p.rx = (function(cls) {
  var x1 = cls.hD;
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
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().il(cls.d6));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$p.rz = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I(str, i);
    this.i3(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$p.i3 = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.a1 = (("" + s) + this.a1);
  } else {
    this.a1 = (("" + this.a1) + s);
  }
  if (this.ju) {
    if (((((codePoint - 65) | 0) >>> 0) <= 25)) {
      this.a1 = (("" + this.a1) + $m_ju_regex_PatternCompiler$().f6(((32 + codePoint) | 0)));
    } else if (((((codePoint - 97) | 0) >>> 0) <= 25)) {
      this.a1 = (("" + this.a1) + $m_ju_regex_PatternCompiler$().f6(((codePoint - 32) | 0)));
    }
  }
});
$p.ry = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.a1 = (s + this.a1);
  } else {
    this.a1 = (this.a1 + s);
  }
  if (this.ju) {
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
  fM: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.jw)) {
    $thiz.jx = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.hD), $thiz.d6);
    $thiz.jw = true;
  }
  return $thiz.jx;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.jx = null;
  this.hD = 0;
  this.d6 = null;
  this.jw = false;
  this.hD = kind;
  this.d6 = data;
}
$p = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $p;
$p.tG = (function() {
  return ((!this.jw) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.jx);
});
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().i($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  fN: 1
}));
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().tY(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().tX(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().st(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().ss(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().pL(value);
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
  return $m_RTLong$().kV(lo, hi);
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
$p.kV = (function(lo, hi) {
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
$p.pL = (function(value) {
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
$p.ss = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.it(rlo, rhi, rlo$1, rhi$1, true);
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
$p.st = (function(alo, ahi, blo, bhi) {
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
    return this.it(alo, ahi, blo, bhi, true);
  }
});
$p.tX = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.it(rlo, rhi, rlo$1, rhi$1, false);
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
$p.tY = (function(alo, ahi, blo, bhi) {
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
    return this.it(alo, ahi, blo, bhi, false);
  }
});
$p.it = (function(alo, ahi, blo, bhi, askQuotient) {
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
  fP: 1
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
    $m_sr_ScalaRunTime$().V(dest, j, $m_sr_ScalaRunTime$().ao(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.r().C)(len);
  $m_ju_Arrays$().sB(result, (void 0));
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
$p.pI = (function(it, evidence$1) {
  var n = it.q();
  if ((n > (-1))) {
    var elements = evidence$1.bt(n);
    var iterator = it.d();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().V(elements, i, iterator.f());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.aI();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.d();
    while (iterator$2.j()) {
      var elem = iterator$2.f();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().g0(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().fZ(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
});
$p.et = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.A.Z && $objectGetClass(dest).A.R(srcClass.A))) {
    src.u(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.pm = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  }
  if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().W(original, newLength);
  }
  if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().pp(original, newLength);
  }
  if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().si(original, newLength);
  }
  if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().pq(original, newLength);
  }
  if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().sj(original, newLength);
  }
  if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().po(original, newLength);
  }
  if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().pn(original, newLength);
  }
  if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().pr(original, newLength);
  }
  if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().ps(original, newLength);
  }
  throw new $c_s_MatchError(original);
});
$p.sh = (function(original, newLength, ct) {
  var runtimeClass = ct.aI();
  if (((runtimeClass !== null) && (runtimeClass === $d_V.l()))) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if (runtimeClass.A.R($objectGetClass(original).A.Q().A)) {
    return (runtimeClass.A.X ? this.pm(original, newLength) : $m_ju_Arrays$().ke(original, newLength, $objectGetClass(runtimeClass.A.U(0))));
  } else {
    var dest = ct.bt(newLength);
    $m_s_Array$().et(original, 0, dest, 0, $m_jl_reflect_Array$().aN(original));
    return dest;
  }
});
$p.pG = (function(xs, ys) {
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
  fQ: 1
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
  this.jy = null;
  this.nU = null;
  $n_s_Array$EmptyArrays$ = this;
  this.jy = new $ac_I(0);
  this.nU = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  fR: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_F0 = new $TypeData().i(1, "scala.Function0", ({
  aX: 1
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
$p.pl = (function(xs) {
  return ((xs === null) ? null : $m_sc_ArrayOps$().qJ(xs));
});
/** @constructor */
function $c_s_PartialFunction$() {
  this.nX = null;
  this.hF = null;
  $n_s_PartialFunction$ = this;
  this.nX = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => this.nX));
  this.hF = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  fX: 1
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
    var a = $m_sr_ScalaRunTime$().pd(\u03b4this$2);
    $m_s_util_Sorting$().kS(a, 0, $m_jl_reflect_Array$().aN(a), ord$1);
    return a;
  } else {
    if ($d_O.R($objectGetClass(\u03b4this$2).A.Q().A)) {
      var a$2 = $m_ju_Arrays$().ke(\u03b4this$2, len$1, $d_O.r().l());
    } else {
      var dest = new $ac_O(len$1);
      $m_s_Array$().et(\u03b4this$2, 0, dest, 0, $m_jl_reflect_Array$().aN(\u03b4this$2));
      var a$2 = dest;
    }
    $m_ju_Arrays$().g2(a$2, ord$1);
    return $m_s_Array$().sh(a$2, len$1, $m_s_reflect_ClassTag$().gS($objectGetClass(\u03b4this$2).A.Q()));
  }
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.o0 = null;
  $n_sc_ArrayOps$ = this;
  this.o0 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_ArrayOps$().o0));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.uy = (function(this$, ord) {
  var len = $m_jl_reflect_Array$().aN(this$);
  if ((len <= 1)) {
    return $m_sr_ScalaRunTime$().pd(this$);
  } else if ((this$ instanceof $ac_O)) {
    var a = $m_ju_Arrays$().W(this$, len);
    $m_ju_Arrays$().g2(a, ord);
    return a;
  } else if ((this$ instanceof $ac_I)) {
    if ((ord === $m_s_math_Ordering$Int$())) {
      var a$2 = $m_ju_Arrays$().pp(this$, len);
      $m_ju_Arrays$().qy(a$2);
      return a$2;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_J)) {
    if ((ord === $m_s_math_Ordering$Long$())) {
      var a$3 = $m_ju_Arrays$().pq(this$, len);
      $m_ju_Arrays$().qz(a$3);
      return a$3;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_C)) {
    if ((ord === $m_s_math_Ordering$Char$())) {
      var a$4 = $m_ju_Arrays$().po(this$, len);
      $m_ju_Arrays$().qx(a$4);
      return a$4;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_B)) {
    if ((ord === $m_s_math_Ordering$Byte$())) {
      var a$5 = $m_ju_Arrays$().pn(this$, len);
      $m_ju_Arrays$().qw(a$5);
      return a$5;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_S)) {
    if ((ord === $m_s_math_Ordering$Short$())) {
      var a$6 = $m_ju_Arrays$().pr(this$, len);
      $m_ju_Arrays$().qA(a$6);
      return a$6;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_Z)) {
    if ((ord === $m_s_math_Ordering$Boolean$())) {
      var a$7 = $m_ju_Arrays$().ps(this$, len);
      $m_s_util_Sorting$().kS(a$7, 0, a$7.a.length, $m_s_math_Ordering$Boolean$());
      return a$7;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else {
    return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
  }
});
$p.sK = (function(this$, f) {
  var len = $m_jl_reflect_Array$().aN(this$);
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
$p.qJ = (function(this$) {
  return $m_sci_ArraySeq$().fa($m_s_Array$().pm(this$, $m_jl_reflect_Array$().aN(this$)));
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  ga: 1
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
$p.cz = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  ge: 1
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
      result = op.bL(result, it.f());
    }
    return result;
  }
}
function $f_sc_IterableOnceOps__reduceLeft__F2__O($thiz, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    if (($thiz.i() > 0)) {
      var z = $thiz.n(0);
      return $p_sc_IterableOnceOps__loop$1__F2__sc_IndexedSeq__I__I__O__O($thiz, op, $thiz, 1, $thiz.i(), z);
    }
  }
  if (($thiz.q() === 0)) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
  var it = $thiz.d();
  if (it.j()) {
    var acc = it.f();
    while (it.j()) {
      acc = op.bL(acc, it.f());
    }
    return acc;
  } else {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  var x30 = $thiz.q();
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
    var x31 = $thiz.q();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().aN(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().aN(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.j())) {
    $m_sr_ScalaRunTime$().V(dest, i, it.f());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__sum__s_math_Numeric__O($thiz, num) {
  var x32 = $thiz.q();
  if ((x32 === (-1))) {
    return $thiz.dq(num.ig(0), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2, y$2) => num.qi(x$2, y$2))));
  }
  if ((x32 === 0)) {
    return num.ig(0);
  }
  return $thiz.du(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2$1, y$2$1) => num.qi(x$2$1, y$2$1))));
}
function $f_sc_IterableOnceOps__product__s_math_Numeric__O($thiz, num) {
  var x33 = $thiz.q();
  if ((x33 === (-1))) {
    return $thiz.dq(num.ig(1), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2, y$2) => num.qI(x$2, y$2))));
  }
  if ((x33 === 0)) {
    return num.ig(1);
  }
  return $thiz.du(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2$1, y$2$1) => num.qI(x$2$1, y$2$1))));
}
function $f_sc_IterableOnceOps__min__s_math_Ordering__O($thiz, ord) {
  var x34 = $thiz.q();
  if ((x34 === (-1))) {
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
      throw new $c_jl_UnsupportedOperationException("empty.min");
    }
  }
  if ((x34 === 0)) {
    throw new $c_jl_UnsupportedOperationException("empty.min");
  }
  return $thiz.du(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2, y$2) => ord.cD(x$2, y$2))));
}
function $f_sc_IterableOnceOps__max__s_math_Ordering__O($thiz, ord) {
  var x36 = $thiz.q();
  if ((x36 === (-1))) {
    var it = $thiz.d();
    if (it.j()) {
      var acc = it.f();
      while (it.j()) {
        var x0 = acc;
        var x1 = it.f();
        acc = ord.cC(x0, x1);
      }
      return acc;
    } else {
      throw new $c_jl_UnsupportedOperationException("empty.max");
    }
  }
  if ((x36 === 0)) {
    throw new $c_jl_UnsupportedOperationException("empty.max");
  }
  return $thiz.du(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2, y$2) => ord.cC(x$2, y$2))));
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.q() === 0) ? (("" + start) + end) : $thiz.cP($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bg.s);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.bg;
  if ((start.length !== 0)) {
    jsb.s = (("" + jsb.s) + start);
  }
  var it = $thiz.d();
  if (it.j()) {
    var obj = it.f();
    jsb.s = (("" + jsb.s) + obj);
    while (it.j()) {
      if ((sep.length !== 0)) {
        jsb.s = (("" + jsb.s) + sep);
      }
      var obj$1 = it.f();
      jsb.s = (("" + jsb.s) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.s = (("" + jsb.s) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$1) {
  if (($thiz.q() >= 0)) {
    var length = $thiz.q();
    var destination = evidence$1.bt(length);
    $thiz.bm(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.aI();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.d();
    while (it.j()) {
      var elem = it.f();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().g0(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().fZ(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
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
      var acc$tailLocal1$tmp1 = op$1.bL(acc$tailLocal1, seq$1.n(at$tailLocal1));
      at$tailLocal1 = at$tailLocal1$tmp1;
      acc$tailLocal1 = acc$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.o8 = null;
  this.gm = null;
  this.o8 = head;
  this.gm = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.t5 = (function() {
  return this.o8.I().d();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  go: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.of = null;
  $n_sc_StringOps$ = this;
  this.of = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.of));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.sc = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.uc = (function(this$, arg) {
  return (false ? arg.v5() : arg);
});
$p.h0 = (function(this$, args) {
  return $m_jl_String$().sL(this$, $m_sr_Arrays$().uh(args.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((arg$2) => this.uc(this$, arg$2)))), $d_O.l()));
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  gz: 1
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
$p.kz = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  gE: 1
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
  this.om = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().pX($m_jl_System$SystemProperties$().kw("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.om = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  gM: 1
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
  gP: 1
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
  this.jG = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.kk = (function() {
  var state = this.jG;
  if ((state === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized");
  }
  return state.I();
});
$p.kA = (function(state) {
  if ((this.jG !== null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized");
  }
  this.jG = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  gR: 1
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
  gT: 1
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
  this.op = null;
  $n_sci_MapNode$ = this;
  $m_s_reflect_ManifestFactory$IntManifest$();
  this.op = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  h8: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (($m_jl_reflect_Array$().aN(as) - 1) | 0)));
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
$p.qk = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > ((as.a.length - 1) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((as.a.length - 1) | 0));
  as.u(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = ((((as.a.length - ix) | 0) - 1) | 0);
  as.u(srcPos, result, ix, length);
  return result;
});
$p.td = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.u(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.u(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  b7: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.gA = 0;
  $n_sci_Node$ = this;
  this.gA = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.ey = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.dY = (function(mask) {
  return (1 << mask);
});
$p.t7 = (function(bitmap, bitpos) {
  return $m_jl_Integer$().dm((bitmap & ((bitpos - 1) | 0)));
});
$p.cA = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.t7(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  hc: 1
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
  this.jK = null;
  this.bK = null;
  this.dj = null;
  this.fC = null;
  this.jL = null;
  this.ot = null;
  $n_sci_VectorStatics$ = this;
  this.jK = new $ac_O(0);
  this.bK = new ($d_O.r().r().C)(0);
  this.dj = new ($d_O.r().r().r().C)(0);
  this.fC = new ($d_O.r().r().r().r().C)(0);
  this.jL = new ($d_O.r().r().r().r().r().C)(0);
  this.ot = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.fL = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.u(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.F = (function(a, elem) {
  var ac = $m_ju_Arrays$().W(a, ((1 + a.a.length) | 0));
  ac.a[((ac.a.length - 1) | 0)] = elem;
  return ac;
});
$p.dn = (function(elem, a) {
  var ac = $objectGetClass(a).A.Q().A.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.u(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.km = (function(level, a, f) {
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
      this.km(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.cB = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.e(v1);
    if ((!Object.is(v1, v2))) {
      return this.ty(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.ty = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.u(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = f.e(a.a[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.ac = (function(n, a, f) {
  if ((n === 1)) {
    return this.cB(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.ac(((n - 1) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.tz(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.tz = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).A.Q().A.U(a.a.length);
  if ((at > 0)) {
    a.u(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.ac(((n - 1) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  hu: 1
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
$p.g0 = (function(runtimeClass) {
  return ((runtimeClass === $d_B.l()) ? 0 : ((runtimeClass === $d_S.l()) ? 0 : ((runtimeClass === $d_C.l()) ? 0 : ((runtimeClass === $d_I.l()) ? 0 : ((runtimeClass === $d_J.l()) ? $bL(0, 0) : ((runtimeClass === $d_F.l()) ? 0.0 : ((runtimeClass === $d_D.l()) ? 0.0 : ((runtimeClass === $d_Z.l()) ? false : ((runtimeClass === $d_V.l()) ? (void 0) : null)))))))));
});
$p.fZ = (function(runtimeClass, a) {
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
    var result$2 = runtimeClass.A.U(len);
    var i$2 = 0;
    while ((i$2 !== len)) {
      $m_sr_ScalaRunTime$().V(result$2, i$2, a[i$2]);
      i$2 = ((1 + i$2) | 0);
    }
    return result$2;
  }
});
var $d_scm_ArrayBuilder$ = new $TypeData().i($c_scm_ArrayBuilder$, "scala.collection.mutable.ArrayBuilder$", ({
  hC: 1
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
  this.en = null;
  this.dl = 0;
  this.bS = null;
  this.aU = null;
  this.en = _key;
  this.dl = _hash;
  this.bS = _value;
  this.aU = _next;
}
$p = $c_scm_HashMap$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashMap$Node;
/** @constructor */
function $h_scm_HashMap$Node() {
}
$h_scm_HashMap$Node.prototype = $p;
$p.gZ = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.dl) && $m_sr_BoxesRunTime$().l(k, \u03b4this$tailLocal1.en))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.aU === null) || (\u03b4this$tailLocal1.dl > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.aU;
    }
  }
});
$p.cS = (function(f) {
  var \u03b4this$tailLocal3 = this;
  while (true) {
    f.bL(\u03b4this$tailLocal3.en, \u03b4this$tailLocal3.bS);
    if ((\u03b4this$tailLocal3.aU !== null)) {
      \u03b4this$tailLocal3 = \u03b4this$tailLocal3.aU;
    } else {
      return (void 0);
    }
  }
});
$p.t = (function() {
  return ((((((("Node(" + this.en) + ", ") + this.bS) + ", ") + this.dl) + ") -> ") + this.aU);
});
var $d_scm_HashMap$Node = new $TypeData().i($c_scm_HashMap$Node, "scala.collection.mutable.HashMap$Node", ({
  hQ: 1
}));
/** @constructor */
function $c_scm_HashSet$Node(_key, _hash, _next) {
  this.fH = null;
  this.dT = 0;
  this.bf = null;
  this.fH = _key;
  this.dT = _hash;
  this.bf = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.sE = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.dT) && $m_sr_BoxesRunTime$().l(k, \u03b4this$tailLocal1.fH))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.bf === null) || (\u03b4this$tailLocal1.dT > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.bf;
    }
  }
});
$p.t = (function() {
  return ((((("Node(" + this.fH) + ", ") + this.dT) + ") -> ") + this.bf);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  hW: 1
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
$p.k8 = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  i5: 1
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
  this.rf = null;
  this.ro = null;
  this.rg = null;
  this.rj = null;
  this.rk = null;
  this.ri = null;
  this.rh = null;
  this.re = null;
  this.rp = null;
  this.rc = null;
  this.rn = null;
  this.rd = null;
  this.rl = null;
  this.rm = null;
  $n_s_reflect_ClassTag$ = this;
  this.rf = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.ro = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.rg = $m_s_reflect_ManifestFactory$CharManifest$();
  this.rj = $m_s_reflect_ManifestFactory$IntManifest$();
  this.rk = $m_s_reflect_ManifestFactory$LongManifest$();
  this.ri = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.rh = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.re = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.rp = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.rc = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.rn = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.rd = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.rl = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.rm = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.gS = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  iB: 1
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
$p.uh = (function(xs, clazz) {
  var length = xs.i();
  var arr = clazz.A.U(length);
  xs.bm(arr, 0, 2147483647);
  return arr;
});
var $d_sr_Arrays$ = new $TypeData().i($c_sr_Arrays$, "scala.runtime.Arrays$", ({
  j4: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.sz(x, y) : ((x instanceof $Char) ? this.sx(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.sz = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.sy(xn, y);
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
$p.sy = (function(xn, yn) {
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
      return (false && yn.o(x2));
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
      return (false && yn.o($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.sx = (function(xc, y) {
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
  j6: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  ja: 1
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
$p.cE = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  jc: 1
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
$p.ao = (function(xs, idx) {
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
$p.V = (function(xs, idx, value) {
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
$p.pd = (function(xs) {
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
$p.k1 = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.cF(), (x.bw() + "("), ",", ")");
});
$p.h2 = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().fa(xs));
});
$p.cH = (function(xs) {
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
  jd: 1
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
$p.z = (function(hash, data) {
  var h = this.dZ(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.dZ = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.aV = (function(hash, length) {
  return this.rY((hash ^ length));
});
$p.rY = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.tt = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.sv = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().pL(dv);
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
    return this.sv((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.tt($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.te = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  jf: 1
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
  jg: 1
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
$p.uq = (function(interval, body) {
  return setTimeout((() => {
    body.I();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  jm: 1
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
$p.uG = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.hW;
  } else {
    var result = [];
    seq.bV(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  jx: 1
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
$p.as = (function(a, i0, iN, ord) {
  var n = ((iN - i0) | 0);
  if ((n < 2)) {
    return (void 0);
  }
  if ((ord.Z($m_sr_ScalaRunTime$().ao(a, i0), $m_sr_ScalaRunTime$().ao(a, ((1 + i0) | 0))) > 0)) {
    var temp = $m_sr_ScalaRunTime$().ao(a, i0);
    $m_sr_ScalaRunTime$().V(a, i0, $m_sr_ScalaRunTime$().ao(a, ((1 + i0) | 0)));
    $m_sr_ScalaRunTime$().V(a, ((1 + i0) | 0), temp);
  }
  var m = 2;
  while ((m < n)) {
    var next = $m_sr_ScalaRunTime$().ao(a, ((i0 + m) | 0));
    if ((ord.Z(next, $m_sr_ScalaRunTime$().ao(a, ((((i0 + m) | 0) - 1) | 0))) < 0)) {
      var iA = i0;
      var iB = ((((i0 + m) | 0) - 1) | 0);
      while ((((iB - iA) | 0) > 1)) {
        var ix = ((((iA + iB) | 0) >>> 1) | 0);
        if ((ord.Z(next, $m_sr_ScalaRunTime$().ao(a, ix)) < 0)) {
          iB = ix;
        } else {
          iA = ix;
        }
      }
      var ix$2 = ((iA + ((ord.Z(next, $m_sr_ScalaRunTime$().ao(a, iA)) < 0) ? 0 : 1)) | 0);
      var i = ((i0 + m) | 0);
      while ((i > ix$2)) {
        $m_sr_ScalaRunTime$().V(a, i, $m_sr_ScalaRunTime$().ao(a, ((i - 1) | 0)));
        i = ((i - 1) | 0);
      }
      $m_sr_ScalaRunTime$().V(a, ix$2, next);
    }
    m = ((1 + m) | 0);
  }
});
$p.Q = (function(a, i0, iN, ord, scratch, evidence$2) {
  if ((((iN - i0) | 0) < 32)) {
    this.as(a, i0, iN, ord);
  } else {
    var iK = ((((i0 + iN) | 0) >>> 1) | 0);
    var sc = ((scratch === null) ? evidence$2.bt(((iK - i0) | 0)) : scratch);
    this.Q(a, i0, iK, ord, sc, evidence$2);
    this.Q(a, iK, iN, ord, sc, evidence$2);
    this.at(a, i0, iK, iN, ord, sc);
  }
});
$p.at = (function(a, i0, iK, iN, ord, scratch) {
  if ((ord.Z($m_sr_ScalaRunTime$().ao(a, ((iK - 1) | 0)), $m_sr_ScalaRunTime$().ao(a, iK)) > 0)) {
    var i = i0;
    var jN = ((iK - i0) | 0);
    var j = 0;
    while ((i < iK)) {
      $m_sr_ScalaRunTime$().V(scratch, j, $m_sr_ScalaRunTime$().ao(a, i));
      i = ((1 + i) | 0);
      j = ((1 + j) | 0);
    }
    var k = i0;
    j = 0;
    while (((i < iN) && (j < jN))) {
      if ((ord.Z($m_sr_ScalaRunTime$().ao(a, i), $m_sr_ScalaRunTime$().ao(scratch, j)) < 0)) {
        $m_sr_ScalaRunTime$().V(a, k, $m_sr_ScalaRunTime$().ao(a, i));
        i = ((1 + i) | 0);
      } else {
        $m_sr_ScalaRunTime$().V(a, k, $m_sr_ScalaRunTime$().ao(scratch, j));
        j = ((1 + j) | 0);
      }
      k = ((1 + k) | 0);
    }
    while ((j < jN)) {
      $m_sr_ScalaRunTime$().V(a, k, $m_sr_ScalaRunTime$().ao(scratch, j));
      j = ((1 + j) | 0);
      k = ((1 + k) | 0);
    }
  }
});
$p.ue = (function(a, from, until) {
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
$p.kS = (function(a, from, until, evidence$4) {
  $m_s_math_Ordering$();
  if ((a instanceof $ac_O)) {
    if ((($m_jl_reflect_Array$().aN(a) > 1) && (evidence$4 === null))) {
      throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "Ordering");
    }
    $m_ju_Arrays$().uw(a, from, until, evidence$4);
  } else if ((a instanceof $ac_I)) {
    if ((evidence$4 === $m_s_math_Ordering$Int$())) {
      $m_ju_Arrays$().ut(a, from, until);
    } else {
      var evidence$2 = $m_s_reflect_ManifestFactory$IntManifest$();
      if ((((until - from) | 0) < 32)) {
        this.as(a, from, until, evidence$4);
      } else {
        var iK = ((((from + until) | 0) >>> 1) | 0);
        var sc = new $ac_I(((iK - from) | 0));
        if ((((iK - from) | 0) < 32)) {
          this.as(a, from, iK, evidence$4);
        } else {
          var iK$1 = ((((from + iK) | 0) >>> 1) | 0);
          this.Q(a, from, iK$1, evidence$4, sc, evidence$2);
          this.Q(a, iK$1, iK, evidence$4, sc, evidence$2);
          this.at(a, from, iK$1, iK, evidence$4, sc);
        }
        if ((((until - iK) | 0) < 32)) {
          this.as(a, iK, until, evidence$4);
        } else {
          var iK$2 = ((((iK + until) | 0) >>> 1) | 0);
          this.Q(a, iK, iK$2, evidence$4, sc, evidence$2);
          this.Q(a, iK$2, until, evidence$4, sc, evidence$2);
          this.at(a, iK, iK$2, until, evidence$4, sc);
        }
        this.at(a, from, iK, until, evidence$4, sc);
      }
    }
  } else if ((a instanceof $ac_D)) {
    var evidence$2$1 = $m_s_reflect_ManifestFactory$DoubleManifest$();
    if ((((until - from) | 0) < 32)) {
      this.as(a, from, until, evidence$4);
    } else {
      var iK$3 = ((((from + until) | 0) >>> 1) | 0);
      var sc$1 = new $ac_D(((iK$3 - from) | 0));
      if ((((iK$3 - from) | 0) < 32)) {
        this.as(a, from, iK$3, evidence$4);
      } else {
        var iK$4 = ((((from + iK$3) | 0) >>> 1) | 0);
        this.Q(a, from, iK$4, evidence$4, sc$1, evidence$2$1);
        this.Q(a, iK$4, iK$3, evidence$4, sc$1, evidence$2$1);
        this.at(a, from, iK$4, iK$3, evidence$4, sc$1);
      }
      if ((((until - iK$3) | 0) < 32)) {
        this.as(a, iK$3, until, evidence$4);
      } else {
        var iK$5 = ((((iK$3 + until) | 0) >>> 1) | 0);
        this.Q(a, iK$3, iK$5, evidence$4, sc$1, evidence$2$1);
        this.Q(a, iK$5, until, evidence$4, sc$1, evidence$2$1);
        this.at(a, iK$3, iK$5, until, evidence$4, sc$1);
      }
      this.at(a, from, iK$3, until, evidence$4, sc$1);
    }
  } else if ((a instanceof $ac_J)) {
    if ((evidence$4 === $m_s_math_Ordering$Long$())) {
      $m_ju_Arrays$().uu(a, from, until);
    } else {
      var evidence$2$2 = $m_s_reflect_ManifestFactory$LongManifest$();
      if ((((until - from) | 0) < 32)) {
        this.as(a, from, until, evidence$4);
      } else {
        var iK$6 = ((((from + until) | 0) >>> 1) | 0);
        var sc$2 = new $ac_J(((iK$6 - from) | 0));
        if ((((iK$6 - from) | 0) < 32)) {
          this.as(a, from, iK$6, evidence$4);
        } else {
          var iK$7 = ((((from + iK$6) | 0) >>> 1) | 0);
          this.Q(a, from, iK$7, evidence$4, sc$2, evidence$2$2);
          this.Q(a, iK$7, iK$6, evidence$4, sc$2, evidence$2$2);
          this.at(a, from, iK$7, iK$6, evidence$4, sc$2);
        }
        if ((((until - iK$6) | 0) < 32)) {
          this.as(a, iK$6, until, evidence$4);
        } else {
          var iK$8 = ((((iK$6 + until) | 0) >>> 1) | 0);
          this.Q(a, iK$6, iK$8, evidence$4, sc$2, evidence$2$2);
          this.Q(a, iK$8, until, evidence$4, sc$2, evidence$2$2);
          this.at(a, iK$6, iK$8, until, evidence$4, sc$2);
        }
        this.at(a, from, iK$6, until, evidence$4, sc$2);
      }
    }
  } else if ((a instanceof $ac_F)) {
    var evidence$2$3 = $m_s_reflect_ManifestFactory$FloatManifest$();
    if ((((until - from) | 0) < 32)) {
      this.as(a, from, until, evidence$4);
    } else {
      var iK$9 = ((((from + until) | 0) >>> 1) | 0);
      var sc$3 = new $ac_F(((iK$9 - from) | 0));
      if ((((iK$9 - from) | 0) < 32)) {
        this.as(a, from, iK$9, evidence$4);
      } else {
        var iK$10 = ((((from + iK$9) | 0) >>> 1) | 0);
        this.Q(a, from, iK$10, evidence$4, sc$3, evidence$2$3);
        this.Q(a, iK$10, iK$9, evidence$4, sc$3, evidence$2$3);
        this.at(a, from, iK$10, iK$9, evidence$4, sc$3);
      }
      if ((((until - iK$9) | 0) < 32)) {
        this.as(a, iK$9, until, evidence$4);
      } else {
        var iK$11 = ((((iK$9 + until) | 0) >>> 1) | 0);
        this.Q(a, iK$9, iK$11, evidence$4, sc$3, evidence$2$3);
        this.Q(a, iK$11, until, evidence$4, sc$3, evidence$2$3);
        this.at(a, iK$9, iK$11, until, evidence$4, sc$3);
      }
      this.at(a, from, iK$9, until, evidence$4, sc$3);
    }
  } else if ((a instanceof $ac_C)) {
    if ((evidence$4 === $m_s_math_Ordering$Char$())) {
      $m_ju_Arrays$().us(a, from, until);
    } else {
      var evidence$2$4 = $m_s_reflect_ManifestFactory$CharManifest$();
      if ((((until - from) | 0) < 32)) {
        this.as(a, from, until, evidence$4);
      } else {
        var iK$12 = ((((from + until) | 0) >>> 1) | 0);
        var sc$4 = new $ac_C(((iK$12 - from) | 0));
        if ((((iK$12 - from) | 0) < 32)) {
          this.as(a, from, iK$12, evidence$4);
        } else {
          var iK$13 = ((((from + iK$12) | 0) >>> 1) | 0);
          this.Q(a, from, iK$13, evidence$4, sc$4, evidence$2$4);
          this.Q(a, iK$13, iK$12, evidence$4, sc$4, evidence$2$4);
          this.at(a, from, iK$13, iK$12, evidence$4, sc$4);
        }
        if ((((until - iK$12) | 0) < 32)) {
          this.as(a, iK$12, until, evidence$4);
        } else {
          var iK$14 = ((((iK$12 + until) | 0) >>> 1) | 0);
          this.Q(a, iK$12, iK$14, evidence$4, sc$4, evidence$2$4);
          this.Q(a, iK$14, until, evidence$4, sc$4, evidence$2$4);
          this.at(a, iK$12, iK$14, until, evidence$4, sc$4);
        }
        this.at(a, from, iK$12, until, evidence$4, sc$4);
      }
    }
  } else if ((a instanceof $ac_B)) {
    if ((evidence$4 === $m_s_math_Ordering$Byte$())) {
      $m_ju_Arrays$().ur(a, from, until);
    } else {
      var evidence$2$5 = $m_s_reflect_ManifestFactory$ByteManifest$();
      if ((((until - from) | 0) < 32)) {
        this.as(a, from, until, evidence$4);
      } else {
        var iK$15 = ((((from + until) | 0) >>> 1) | 0);
        var sc$5 = new $ac_B(((iK$15 - from) | 0));
        if ((((iK$15 - from) | 0) < 32)) {
          this.as(a, from, iK$15, evidence$4);
        } else {
          var iK$16 = ((((from + iK$15) | 0) >>> 1) | 0);
          this.Q(a, from, iK$16, evidence$4, sc$5, evidence$2$5);
          this.Q(a, iK$16, iK$15, evidence$4, sc$5, evidence$2$5);
          this.at(a, from, iK$16, iK$15, evidence$4, sc$5);
        }
        if ((((until - iK$15) | 0) < 32)) {
          this.as(a, iK$15, until, evidence$4);
        } else {
          var iK$17 = ((((iK$15 + until) | 0) >>> 1) | 0);
          this.Q(a, iK$15, iK$17, evidence$4, sc$5, evidence$2$5);
          this.Q(a, iK$17, until, evidence$4, sc$5, evidence$2$5);
          this.at(a, iK$15, iK$17, until, evidence$4, sc$5);
        }
        this.at(a, from, iK$15, until, evidence$4, sc$5);
      }
    }
  } else if ((a instanceof $ac_S)) {
    if ((evidence$4 === $m_s_math_Ordering$Short$())) {
      $m_ju_Arrays$().uv(a, from, until);
    } else {
      var evidence$2$6 = $m_s_reflect_ManifestFactory$ShortManifest$();
      if ((((until - from) | 0) < 32)) {
        this.as(a, from, until, evidence$4);
      } else {
        var iK$18 = ((((from + until) | 0) >>> 1) | 0);
        var sc$6 = new $ac_S(((iK$18 - from) | 0));
        if ((((iK$18 - from) | 0) < 32)) {
          this.as(a, from, iK$18, evidence$4);
        } else {
          var iK$19 = ((((from + iK$18) | 0) >>> 1) | 0);
          this.Q(a, from, iK$19, evidence$4, sc$6, evidence$2$6);
          this.Q(a, iK$19, iK$18, evidence$4, sc$6, evidence$2$6);
          this.at(a, from, iK$19, iK$18, evidence$4, sc$6);
        }
        if ((((until - iK$18) | 0) < 32)) {
          this.as(a, iK$18, until, evidence$4);
        } else {
          var iK$20 = ((((iK$18 + until) | 0) >>> 1) | 0);
          this.Q(a, iK$18, iK$20, evidence$4, sc$6, evidence$2$6);
          this.Q(a, iK$20, until, evidence$4, sc$6, evidence$2$6);
          this.at(a, iK$18, iK$20, until, evidence$4, sc$6);
        }
        this.at(a, from, iK$18, until, evidence$4, sc$6);
      }
    }
  } else if ((a instanceof $ac_Z)) {
    if ((evidence$4 === $m_s_math_Ordering$Boolean$())) {
      this.ue(a, from, until);
    } else {
      var evidence$2$7 = $m_s_reflect_ManifestFactory$BooleanManifest$();
      if ((((until - from) | 0) < 32)) {
        this.as(a, from, until, evidence$4);
      } else {
        var iK$21 = ((((from + until) | 0) >>> 1) | 0);
        var sc$7 = new $ac_Z(((iK$21 - from) | 0));
        if ((((iK$21 - from) | 0) < 32)) {
          this.as(a, from, iK$21, evidence$4);
        } else {
          var iK$22 = ((((from + iK$21) | 0) >>> 1) | 0);
          this.Q(a, from, iK$22, evidence$4, sc$7, evidence$2$7);
          this.Q(a, iK$22, iK$21, evidence$4, sc$7, evidence$2$7);
          this.at(a, from, iK$22, iK$21, evidence$4, sc$7);
        }
        if ((((until - iK$21) | 0) < 32)) {
          this.as(a, iK$21, until, evidence$4);
        } else {
          var iK$23 = ((((iK$21 + until) | 0) >>> 1) | 0);
          this.Q(a, iK$21, iK$23, evidence$4, sc$7, evidence$2$7);
          this.Q(a, iK$23, until, evidence$4, sc$7, evidence$2$7);
          this.at(a, iK$21, iK$23, until, evidence$4, sc$7);
        }
        this.at(a, from, iK$21, until, evidence$4, sc$7);
      }
    }
  } else if ((a === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  } else {
    throw new $c_s_MatchError(a);
  }
});
var $d_s_util_Sorting$ = new $TypeData().i($c_s_util_Sorting$, "scala.util.Sorting$", ({
  jz: 1
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
$p.s3 = (function(label) {
  throw $m_s_util_boundary$Break$().rT(label, (void 0));
});
var $d_s_util_boundary$ = new $TypeData().i($c_s_util_boundary$, "scala.util.boundary$", ({
  jA: 1
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
$p.rT = (function(label, value) {
  return new $c_s_util_boundary$Break(label, value);
});
var $d_s_util_boundary$Break$ = new $TypeData().i($c_s_util_boundary$Break$, "scala.util.boundary$Break$", ({
  jB: 1
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
$p.rQ = (function(t) {
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
$p.e0 = (function(t) {
  return (this.rQ(t) ? new $c_s_Some(t) : $m_s_None$());
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  jE: 1
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
$p.z = (function(hash, data) {
  var h = this.dZ(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.dZ = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.aV = (function(hash, length) {
  return this.hh((hash ^ length));
});
$p.hh = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.qL = (function(x, y, seed) {
  var h = seed;
  h = this.z(h, $f_T__hashCode__I("Tuple2"));
  h = this.z(h, x);
  h = this.z(h, y);
  return this.aV(h, 2);
});
$p.f7 = (function(x, seed, ignorePrefix) {
  var arr = x.bu();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.bw()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.z(h, $f_T__hashCode__I(x.bw()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.z(h, $m_sr_Statics$().E(x.bv(i)));
      i = ((1 + i) | 0);
    }
    return this.aV(h, arr);
  }
});
$p.k7 = (function(x, seed, caseClassName) {
  var arr = x.bu();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.bw()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.z(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.z(h, $m_sr_Statics$().E(x.bv(i)));
      i = ((1 + i) | 0);
    }
    return this.aV(h, arr);
  }
});
$p.ix = (function(xs, seed) {
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
  h$2 = this.z(h$2, a);
  h$2 = this.z(h$2, b);
  h$2 = this.dZ(h$2, c);
  return this.aV(h$2, n);
});
$p.tN = (function(xs, seed) {
  var it = xs.d();
  var h = seed;
  if ((!it.j())) {
    return this.aV(h, 0);
  }
  var x0 = it.f();
  if ((!it.j())) {
    return this.aV(this.z(h, $m_sr_Statics$().E(x0)), 1);
  }
  var x1 = it.f();
  var initial = $m_sr_Statics$().E(x0);
  h = this.z(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().E(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.j()) {
    h = this.z(h, prev);
    var hash = $m_sr_Statics$().E(it.f());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.z(h, hash);
      i = ((1 + i) | 0);
      while (it.j()) {
        h = this.z(h, $m_sr_Statics$().E(it.f()));
        i = ((1 + i) | 0);
      }
      return this.aV(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.hh(this.z(this.z(h0, rangeDiff), prev));
});
$p.b3 = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().aN(a);
  switch (l) {
    case 0: {
      return this.aV(h, 0);
      break;
    }
    case 1: {
      return this.aV(this.z(h, $m_sr_Statics$().E($m_sr_ScalaRunTime$().ao(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().E($m_sr_ScalaRunTime$().ao(a, 0));
      h = this.z(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().E($m_sr_ScalaRunTime$().ao(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.z(h, prev);
        var hash = $m_sr_Statics$().E($m_sr_ScalaRunTime$().ao(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.z(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.z(h, $m_sr_Statics$().E($m_sr_ScalaRunTime$().ao(a, i)));
            i = ((1 + i) | 0);
          }
          return this.aV(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hh(this.z(this.z(h0, rangeDiff), prev));
    }
  }
});
$p.tU = (function(start, step, last, seed) {
  return this.hh(this.z(this.z(this.z(seed, start), step), last));
});
$p.t8 = (function(a, seed) {
  var h = seed;
  var l = a.i();
  switch (l) {
    case 0: {
      return this.aV(h, 0);
      break;
    }
    case 1: {
      return this.aV(this.z(h, $m_sr_Statics$().E(a.n(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().E(a.n(0));
      h = this.z(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().E(a.n(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.z(h, prev);
        var hash = $m_sr_Statics$().E(a.n(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.z(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.z(h, $m_sr_Statics$().E(a.n(i)));
            i = ((1 + i) | 0);
          }
          return this.aV(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hh(this.z(this.z(h0, rangeDiff), prev));
    }
  }
});
$p.ts = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.c())) {
    var head = elems.p();
    var tail = elems.w();
    var hash = $m_sr_Statics$().E(head);
    h = this.z(h, hash);
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
  return ((rangeState === 2) ? this.tU(initial, rangeDiff, prev, seed) : this.aV(h, n));
});
function $s_Lscorry_Main__main__AT__V(args) {
  $m_Lscorry_Main$().tu(args);
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
$p.tu = (function(args) {
  var inputText = $m_Lcom_raquo_laminar_api_package$().r.iU.pc("1.2 3.5 5.8 9.1 9.1 10");
  var numsSignal = new $c_Lcom_raquo_airstream_misc_MapSignal(inputText.eJ, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((text$2) => {
    try {
      var nums = $m_Lscorry_SummaryStatistics$().tP(text$2);
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
      return $m_sci_Seq$().i9();
    }
    if ((x$1$2 instanceof $c_s_Some)) {
      var nums$1 = x$1$2.dB;
      var modeVals = $m_Lscorry_SummaryStatistics$().tD(nums$1);
      var modeStr = (modeVals.c() ? "no mode" : $f_sc_IterableOnceOps__mkString__T__T__T__T(modeVals, "", ", ", ""));
      return $m_sci_Seq$().k6($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T4("N", ("" + nums$1.i()), "The number of observations in the data set", "https://en.wikipedia.org/wiki/Sample_size_determination"), new $c_T4("Arithmetic Mean", ("" + $m_Lscorry_SummaryStatistics$().h6(nums$1)), "Sum of all values divided by the number of values", "https://en.wikipedia.org/wiki/Arithmetic_mean"), new $c_T4("Geometric Mean", ("" + $m_Lscorry_SummaryStatistics$().sU(nums$1)), "The nth root of the product of n values; useful for growth rates", "https://en.wikipedia.org/wiki/Geometric_mean"), new $c_T4("Median", ("" + $m_Lscorry_SummaryStatistics$().tB(nums$1)), "The middle value when sorted; less sensitive to outliers than the mean", "https://en.wikipedia.org/wiki/Median"), new $c_T4("Mode", ("" + modeStr), "The most frequently occurring value(s); 'no mode' if all values are unique", "https://en.wikipedia.org/wiki/Mode_(statistics)"), new $c_T4("Variance", ("" + $m_Lscorry_SummaryStatistics$().qQ(nums$1)), "Average of squared deviations from the mean; measures spread", "https://en.wikipedia.org/wiki/Variance"), new $c_T4("Std Dev", ("" + $m_Lscorry_SummaryStatistics$().uB(nums$1)), "Square root of variance; measures spread in the same unit as the data", "https://en.wikipedia.org/wiki/Standard_deviation"), new $c_T4("Range", ("" + $m_Lscorry_SummaryStatistics$().tT(nums$1)), "Difference between the maximum and minimum values", "https://en.wikipedia.org/wiki/Range_(statistics)")]));
    }
    throw new $c_s_MatchError(x$1$2);
  })), $m_s_None$());
  var corrInput = $m_Lcom_raquo_laminar_api_package$().r.iU.pc("1 1 ; 2 3 ; 3 6 ; 4 10 ; 5 15 ; 10 100");
  var corrSignal = new $c_Lcom_raquo_airstream_misc_MapSignal(corrInput.eJ, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((text$2$1) => {
    try {
      var pairs = $m_Lscorry_SummaryStatistics$().qg(text$2$1);
      if ((pairs.i() < 2)) {
        return $m_sci_Seq$().i9();
      } else {
        var $x_3 = new $c_T4("N", (pairs.i() + " pairs"), "The number of paired observations", "https://en.wikipedia.org/wiki/Sample_size_determination");
        var $x_2 = new $c_T4("Spearman rho", ("" + $m_Lscorry_SummaryStatistics$().uz(pairs)), "Spearman rank correlation: measures monotonic association using ranks instead of raw values. Ranges from -1 to +1. More robust to outliers than Pearson. Assumes: (1) both variables are at least ordinal, (2) the relationship is monotonic.", "https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient");
        var r = $m_Lscorry_SummaryStatistics$().qh(pairs);
        var p = $m_Lscorry_SummaryStatistics$().tR(r, pairs.i());
        var $x_1 = new $c_T4("Pearson r", ((r + ", p = ") + $m_sc_StringOps$().h0("%.4f", $m_sr_ScalaRunTime$().h2(new $ac_O([p])))), "Pearson product-moment correlation coefficient: measures linear association between two variables. Ranges from -1 (perfect negative) to +1 (perfect positive). Assumes: (1) both variables are continuous, (2) the relationship is linear, (3) no significant outliers, (4) variables are approximately normally distributed.", "https://en.wikipedia.org/wiki/Pearson_correlation_coefficient");
        matchResult2: {
          var \u03b42$;
          var x4$1 = $m_Lscorry_SummaryStatistics$().tO(pairs);
          if ((x4$1 !== null)) {
            var \u03b42$ = x4$1;
            break matchResult2;
          }
          throw new $c_s_MatchError(x4$1);
        }
        var t = (+\u03b42$.fq);
        var df = (\u03b42$.fr | 0);
        var p$2 = (+\u03b42$.fs);
        return new $c_sci_$colon$colon($x_3, new $c_sci_$colon$colon($x_2, new $c_sci_$colon$colon($x_1, new $c_sci_$colon$colon(new $c_T4("Paired t-test", ((((("t = " + $m_sc_StringOps$().h0("%.4f", $m_sr_ScalaRunTime$().h2(new $ac_O([t])))) + ", df = ") + df) + ", p = ") + $m_sc_StringOps$().h0("%.4f", $m_sr_ScalaRunTime$().h2(new $ac_O([p$2])))), "Student's paired t-test: tests whether the mean difference between paired observations is zero. The p-value is the probability of observing a t-statistic this extreme if the true mean difference is zero (two-tailed). p < 0.05 is conventionally considered statistically significant, but consider effect size and sample size too. p < 0.01 is highly significant; p > 0.1 suggests no evidence against equal means. Related to Pearson r: both assume normality and continuous data. A significant Pearson r means the variables co-vary, while a significant t-test means their means differ. They are complementary \u2014 high correlation does not imply equal means, and equal means does not imply no correlation. Assumes: (1) differences are normally distributed, (2) pairs are independent, (3) data is continuous.", "https://en.wikipedia.org/wiki/Student%27s_t-test#Paired_samples"), $m_sci_Nil$()))));
      }
    } catch (e$1) {
      if ((((e$1 instanceof $c_jl_Throwable) ? e$1 : new $c_sjs_js_JavaScriptException(e$1)) instanceof $c_jl_Exception)) {
        return new $c_sci_$colon$colon(new $c_T4("Invalid input", "", "", ""), $m_sci_Nil$());
      } else {
        throw e$1;
      }
    }
  })), $m_s_None$());
  var pairsSignal = new $c_Lcom_raquo_airstream_misc_MapSignal(corrInput.eJ, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((text$2$2) => {
    try {
      var pairs$1 = $m_Lscorry_SummaryStatistics$().qg(text$2$2);
      return ((pairs$1.i() < 2) ? $m_s_None$() : new $c_s_Some(pairs$1));
    } catch (e$3) {
      if ((((e$3 instanceof $c_jl_Throwable) ? e$3 : new $c_sjs_js_JavaScriptException(e$3)) instanceof $c_jl_Exception)) {
        return $m_s_None$();
      } else {
        throw e$3;
      }
    }
  })), $m_s_None$());
  var app = $m_Lcom_raquo_laminar_api_package$().r.gY().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().r.q2().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().r, "Enter numbers separated by spaces", $m_Lcom_raquo_laminar_modifiers_RenderableText$().ci)])), $m_Lcom_raquo_laminar_api_package$().r.i5().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().r.pT().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().r.qM().v("text"), $m_Lcom_raquo_laminar_api_package$().r.qP().v($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(inputText.eJ).y()), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().kh($m_Lcom_raquo_laminar_api_package$().r.qc(), false, false)).q4(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    inputText.iP.ha(_$1);
  })))])), $m_Lcom_raquo_laminar_api_package$().r.gY().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().r.pv().v("flex"), $m_Lcom_raquo_laminar_api_package$().r.pO().v("2em"), $m_Lcom_raquo_laminar_api_package$().r.p6().v("flex-start"), $m_Lcom_raquo_laminar_api_package$().r.gY().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().pb(new $c_Lcom_raquo_airstream_misc_MapSignal(statsSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((items$2) => items$2.fM(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$1) => {
    var lbl = x$1$2$1.eO;
    var val_ = x$1$2$1.eP;
    var tip = x$1$2$1.eQ;
    var url = x$1$2$1.eR;
    return new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().r.i5().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().r.qC().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().r.iV.oV("tip"), $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__dataAttr__T__Lcom_raquo_laminar_keys_HtmlAttr($m_Lcom_raquo_laminar_api_package$().r, "tip").v(tip), $m_Lcom_raquo_laminar_api_package$().r.oX().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().r, lbl, $m_Lcom_raquo_laminar_modifiers_RenderableText$().ci), $m_Lcom_raquo_laminar_api_package$().r.pR().v(url), $m_Lcom_raquo_laminar_api_package$().r.qH().v("_blank")])), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().r, (": " + val_), $m_Lcom_raquo_laminar_modifiers_RenderableText$().ci)])), $m_sci_Nil$()));
  }))))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hz, (void 0)))])), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_receivers_ChildOptionReceiver$()).oW(new $c_Lcom_raquo_airstream_misc_MapSignal(numsSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => {
    var this$58 = ((_$1$2.c() || (_$1$2.y().i() >= 2)) ? _$1$2 : $m_s_None$());
    return (this$58.c() ? $m_s_None$() : new $c_s_Some($m_Lscorry_Plots$().s2(this$58.y())));
  })), $m_s_None$()))])), $m_Lcom_raquo_laminar_api_package$().r.t6().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().r.q2().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().r, "Enter pairs of numbers (pairs separated by semicolons)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().ci)])), $m_Lcom_raquo_laminar_api_package$().r.i5().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().r.pT().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().r.qM().v("text"), $m_Lcom_raquo_laminar_api_package$().r.qP().v($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(corrInput.eJ).y()), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().kh($m_Lcom_raquo_laminar_api_package$().r.qc(), false, false)).q4(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1$1) => {
    corrInput.iP.ha(_$1$1);
  })))])), $m_Lcom_raquo_laminar_api_package$().r.gY().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().r.pv().v("flex"), $m_Lcom_raquo_laminar_api_package$().r.pO().v("2em"), $m_Lcom_raquo_laminar_api_package$().r.p6().v("flex-start"), $m_Lcom_raquo_laminar_api_package$().r.gY().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().pb(new $c_Lcom_raquo_airstream_misc_MapSignal(corrSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((items$2$1) => items$2$1.fM(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => {
    var lbl$1 = x$1$2$2.eO;
    var val_$1 = x$1$2$2.eP;
    var tip$1 = x$1$2$2.eQ;
    var url$1 = x$1$2$2.eR;
    return new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().r.i5().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().r.qC().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().r.iV.oV("tip"), $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__dataAttr__T__Lcom_raquo_laminar_keys_HtmlAttr($m_Lcom_raquo_laminar_api_package$().r, "tip").v(tip$1), $m_Lcom_raquo_laminar_api_package$().r.oX().bl($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().r, lbl$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().ci), $m_Lcom_raquo_laminar_api_package$().r.pR().v(url$1), $m_Lcom_raquo_laminar_api_package$().r.qH().v("_blank")])), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().r, (": " + val_$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().ci)])), $m_sci_Nil$()));
  }))))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hz, (void 0)))])), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_receivers_ChildOptionReceiver$()).oW(new $c_Lcom_raquo_airstream_misc_MapSignal(pairsSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$2) => (_$3$2.c() ? $m_s_None$() : new $c_s_Some($m_Lscorry_Plots$().ug(_$3$2.y()))))), $m_s_None$()))]))]));
  var this$107 = $m_Lcom_raquo_laminar_api_package$().r;
  var container = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => document.getElementById("app")));
  var rootNode = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => app));
  var p$1 = $m_Lcom_raquo_laminar_keys_EventProcessor$().kh(this$107.ms.tM(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().rR(document, p$1.fj.gb, p$1.hw), p$1.hv), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container.I(), rootNode.I());
  })), this$107.uK());
});
var $d_Lscorry_Main$ = new $TypeData().i($c_Lscorry_Main$, "scorry.Main$", ({
  jI: 1
}));
var $n_Lscorry_Main$;
function $m_Lscorry_Main$() {
  if ((!$n_Lscorry_Main$)) {
    $n_Lscorry_Main$ = new $c_Lscorry_Main$();
  }
  return $n_Lscorry_Main$;
}
function $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, name) {
  $m_Lcom_raquo_laminar_api_package$().r.bB();
  return new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().dx, $m_s_None$());
}
function $p_Lscorry_Plots$__y$1__D__D__D__D__D__D($thiz, maxVal$1, minVal$1, pad$1, plotH$1, v) {
  return ((maxVal$1 === minVal$1) ? (pad$1 + (0.5 * plotH$1)) : (pad$1 + ((1.0 - ((v - minVal$1) / (maxVal$1 - minVal$1))) * plotH$1)));
}
function $p_Lscorry_Plots$__fmt$1__D__T($thiz, v) {
  return $m_sc_StringOps$().h0("%.1f", $m_sr_ScalaRunTime$().h2(new $ac_O([v])));
}
function $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement($thiz, xa, ya, xb, yb, color, sw) {
  return $m_Lcom_raquo_laminar_api_package$().r.bB().q3().bT($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x1").v(("" + xa)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y1").v(("" + ya)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x2").v(("" + xb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y2").v(("" + yb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke").v(color), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke-width").v(sw)]));
}
function $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement($thiz, cx$1, boxW$1, yp, txt) {
  return $m_Lcom_raquo_laminar_api_package$().r.bB().hi().bT($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x").v(("" + ((cx$1 + (0.5 * boxW$1)) + 8.0))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y").v(("" + (yp + 4.0))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "text-anchor").v("start"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "font-size").v("11"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().r, txt, $m_Lcom_raquo_laminar_modifiers_RenderableText$().ci)]));
}
function $p_Lscorry_Plots$__px$1__D__D__D__D__D__D($thiz, xMax$1, xMin$1, padLeft$1, plotW$1, v) {
  return ((xMax$1 === xMin$1) ? (padLeft$1 + (0.5 * plotW$1)) : (padLeft$1 + (((v - xMin$1) / (xMax$1 - xMin$1)) * plotW$1)));
}
function $p_Lscorry_Plots$__py$1__D__D__D__D__D__D($thiz, yMax$1, yMin$1, padTop$1, plotH$2, v) {
  return ((yMax$1 === yMin$1) ? (padTop$1 + (0.5 * plotH$2)) : (padTop$1 + ((1.0 - ((v - yMin$1) / (yMax$1 - yMin$1))) * plotH$2)));
}
function $p_Lscorry_Plots$__fmt$2__D__T($thiz, v) {
  return $m_sc_StringOps$().h0("%.1f", $m_sr_ScalaRunTime$().h2(new $ac_O([v])));
}
function $p_Lscorry_Plots$__ln$2__D__D__D__D__Lcom_raquo_laminar_nodes_ReactiveSvgElement($thiz, xa, ya, xb, yb) {
  return $m_Lcom_raquo_laminar_api_package$().r.bB().q3().bT($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x1").v(("" + xa)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y1").v(("" + ya)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x2").v(("" + xb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y2").v(("" + yb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke").v("#ccc"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke-width").v("1")]));
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
$p.s2 = (function(values) {
  var sorted = values.b5($m_s_math_Ordering$DeprecatedDoubleOrdering$());
  var minVal = (+sorted.p());
  var q1 = $m_Lscorry_SummaryStatistics$().kN(sorted, 0.25);
  var med = $m_Lscorry_SummaryStatistics$().kN(sorted, 0.5);
  var q3 = $m_Lscorry_SummaryStatistics$().kN(sorted, 0.75);
  var maxVal = (+sorted.fU());
  return $m_Lcom_raquo_laminar_api_package$().r.bB().kT().bT($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "width").v("100"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "height").v("280"), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), 50.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), "#333", "1"), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 35.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), 65.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), "#333", "1"), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 35.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), 65.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), "#333", "1"), $m_Lcom_raquo_laminar_api_package$().r.bB().tV().bT($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").v("35"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").v(("" + $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q3))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "width").v("30"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "height").v(("" + ($p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q1) - $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q3)))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "fill").v("#6ca0dc"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "stroke").v("#333"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "stroke-width").v("1")])), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 35.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, med), 65.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, med), "#c00", "2"), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), $p_Lscorry_Plots$__fmt$1__D__T(this, maxVal)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q3), $p_Lscorry_Plots$__fmt$1__D__T(this, q3)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, med), $p_Lscorry_Plots$__fmt$1__D__T(this, med)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q1), $p_Lscorry_Plots$__fmt$1__D__T(this, q1)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), $p_Lscorry_Plots$__fmt$1__D__T(this, minVal))]));
});
$p.ug = (function(pairs) {
  var xs = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => (+_$1$2.S))));
  var ys = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => (+_$2$2.R))));
  var xMin = (+xs.iq($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var xMax = (+xs.ip($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var yMin = (+ys.iq($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var yMax = (+ys.ip($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var dots = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var x = (+x$1$2.S);
    var y = (+x$1$2.R);
    return $m_Lcom_raquo_laminar_api_package$().r.bB().s7().bT($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "cx").v(("" + $p_Lscorry_Plots$__px$1__D__D__D__D__D__D(this, xMax, xMin, 60.0, 240.0, x))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "cy").v(("" + $p_Lscorry_Plots$__py$1__D__D__D__D__D__D(this, yMax, yMin, 20.0, 240.0, y))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "r").v("4"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "fill").v("#336699")]));
  })));
  var this$12 = new $c_sci_$colon$colon(xMin, new $c_sci_$colon$colon((0.5 * (xMin + xMax)), new $c_sci_$colon$colon(xMax, $m_sci_Nil$())));
  var f = ((v$3) => {
    var v$2 = (+v$3);
    return $m_Lcom_raquo_laminar_api_package$().r.bB().hi().bT($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").v(("" + $p_Lscorry_Plots$__px$1__D__D__D__D__D__D(this, xMax, xMin, 60.0, 240.0, v$2))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").v("278"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").v("middle"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").v("11"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().r, $p_Lscorry_Plots$__fmt$2__D__T(this, v$2), $m_Lcom_raquo_laminar_modifiers_RenderableText$().ci)]));
  });
  if ((this$12 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0$2 = this$12.gu;
    var h = new $c_sci_$colon$colon(f(x0$2), $m_sci_Nil$());
    var t = h;
    var rest = this$12.a2;
    while ((rest !== $m_sci_Nil$())) {
      var x0$3 = rest.p();
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
    return $m_Lcom_raquo_laminar_api_package$().r.bB().hi().bT($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").v("52"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").v(("" + ($p_Lscorry_Plots$__py$1__D__D__D__D__D__D(this, yMax, yMin, 20.0, 240.0, v$2$1) + 4.0))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").v("end"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").v("11"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().r, $p_Lscorry_Plots$__fmt$2__D__T(this, v$2$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().ci)]));
  });
  if ((this$18 === $m_sci_Nil$())) {
    var $x_2 = $m_sci_Nil$();
  } else {
    var x0$5 = this$18.gu;
    var h$1 = new $c_sci_$colon$colon(f$1(x0$5), $m_sci_Nil$());
    var t$1 = h$1;
    var rest$1 = this$18.a2;
    while ((rest$1 !== $m_sci_Nil$())) {
      var x0$6 = rest$1.p();
      var nx$1 = new $c_sci_$colon$colon(f$1(x0$6), $m_sci_Nil$());
      t$1.a2 = nx$1;
      t$1 = nx$1;
      rest$1 = rest$1.w();
    }
    var $x_2 = h$1;
  }
  var yTicks = $x_2;
  var xLabel = $m_Lcom_raquo_laminar_api_package$().r.bB().hi().bT($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").v("180"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").v("298"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").v("middle"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").v("12"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().r, "x: first number", $m_Lcom_raquo_laminar_modifiers_RenderableText$().ci)]));
  var yLabel = $m_Lcom_raquo_laminar_api_package$().r.bB().hi().bT($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").v("14"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").v("140"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").v("middle"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").v("12"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "transform").v("rotate(-90, 14, 140)"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().r, "y: second number", $m_Lcom_raquo_laminar_modifiers_RenderableText$().ci)]));
  return $m_Lcom_raquo_laminar_api_package$().r.bB().kT().bT($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "width").v("320"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "height").v("300"), $p_Lscorry_Plots$__ln$2__D__D__D__D__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 60.0, 20.0, 60.0, 260.0), $p_Lscorry_Plots$__ln$2__D__D__D__D__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 60.0, 260.0, 300.0, 260.0), $m_Lcom_raquo_laminar_api_package$().r.bB().kt().bT(dots), $m_Lcom_raquo_laminar_api_package$().r.bB().kt().bT(xTicks), $m_Lcom_raquo_laminar_api_package$().r.bB().kt().bT(yTicks), xLabel, yLabel]));
});
var $d_Lscorry_Plots$ = new $TypeData().i($c_Lscorry_Plots$, "scorry.Plots$", ({
  jJ: 1
}));
var $n_Lscorry_Plots$;
function $m_Lscorry_Plots$() {
  if ((!$n_Lscorry_Plots$)) {
    $n_Lscorry_Plots$ = new $c_Lscorry_Plots$();
  }
  return $n_Lscorry_Plots$;
}
function $p_Lscorry_SummaryStatistics$__ranks__sci_Seq__sci_Seq($thiz, values) {
  var sorted = $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O(values.hl(), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$9$2) => (+_$9$2.S))), $m_s_math_Ordering$DeprecatedDoubleOrdering$());
  var ranked = new $ac_D(values.i());
  var i = 0;
  while ((i < sorted.i())) {
    var j = i;
    while (((j < ((sorted.i() - 1) | 0)) && ((+sorted.n(((1 + j) | 0)).S) === (+sorted.n(i).S)))) {
      j = ((1 + j) | 0);
    }
    var avgRank = ((0.5 * ((i + j) | 0)) + 1.0);
    var x = i;
    var end = j;
    if ((!(x > end))) {
      var i$1 = x;
      while (true) {
        var x0 = i$1;
        ranked.a[(sorted.n(x0).R | 0)] = avgRank;
        if ((i$1 === end)) {
          break;
        }
        i$1 = ((1 + i$1) | 0);
      }
    }
    i = ((1 + j) | 0);
  }
  return $m_sc_ArrayOps$().qJ(ranked);
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
        $m_s_util_boundary$().s3(local);
      }
      if ((i === 200)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if ((e instanceof $c_s_util_boundary$Break)) {
      var ex = e;
      if ((!ex.tl(local))) {
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
  var ser = (1.000000000190015 + (+$f_sc_StrictOptimizedIterableOps__zipWithIndex__O(cof).C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => ((+x$1$2.S) / ((x + 1.0) + (x$1$2.R | 0)))))).d3($m_s_math_Numeric$DoubleIsFractional$())));
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
/** @constructor */
function $c_Lscorry_SummaryStatistics$() {
}
$p = $c_Lscorry_SummaryStatistics$.prototype = new $h_O();
$p.constructor = $c_Lscorry_SummaryStatistics$;
/** @constructor */
function $h_Lscorry_SummaryStatistics$() {
}
$h_Lscorry_SummaryStatistics$.prototype = $p;
$p.h6 = (function(values) {
  return ((+values.d3($m_s_math_Numeric$DoubleIsFractional$())) / values.i());
});
$p.sU = (function(values) {
  var x = (+$f_sc_IterableOnceOps__product__s_math_Numeric__O(values, $m_s_math_Numeric$DoubleIsFractional$()));
  var y = (1.0 / values.i());
  return (+Math.pow(x, y));
});
$p.tB = (function(values) {
  var sorted = values.b5($m_s_math_Ordering$DeprecatedDoubleOrdering$());
  var n = sorted.i();
  var t = ((n >>> 31) | 0);
  if (((((1 & ((n + t) | 0)) - t) | 0) === 1)) {
    return (+sorted.n((((n + ((n >>> 31) | 0)) | 0) >> 1)));
  } else {
    return (0.5 * ((+sorted.n((((((n + ((n >>> 31) | 0)) | 0) >> 1) - 1) | 0))) + (+sorted.n((((n + ((n >>> 31) | 0)) | 0) >> 1)))));
  }
});
$p.tD = (function(values) {
  var m = $m_scm_Map$().bN();
  var it = values.d();
  while (it.j()) {
    var elem = it.f();
    var x$2 = (+elem);
    var f = ((this$2) => (() => this$2.dt()))(values);
    if ((!($objectGetClass(m) === $d_scm_HashMap.l()))) {
      matchResult2: {
        var $x_1;
        var x12 = m.bW(x$2);
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
      var idx = (hash & ((m.P.a.length - 1) | 0));
      matchResult13: {
        var nd$2;
        var x36 = m.P.a[idx];
        if ((x36 === null)) {
          var nd$2 = null;
          break matchResult13;
        }
        var nd$2 = x36.gZ(x$2, hash);
      }
      if ((nd$2 !== null)) {
        var $x_1 = nd$2.bS;
      } else {
        var table0 = m.P;
        var default$1 = f();
        if ((((1 + m.c9) | 0) >= m.gD)) {
          $p_scm_HashMap__growTable__I__V(m, (m.P.a.length << 1));
        }
        $p_scm_HashMap__put0__O__O__Z__I__I__s_Some(m, x$2, default$1, false, hash, ((table0 === m.P) ? idx : (hash & ((m.P.a.length - 1) | 0))));
        var $x_1 = default$1;
      }
    }
    $x_1.ad(elem);
  }
  var result = $m_sci_HashMap$().gx;
  var mapIt = m.d();
  while (mapIt.j()) {
    var \u03b42$;
    var \u03b42$ = mapIt.f();
    var k = \u03b42$.S;
    var v$1 = \u03b42$.R;
    result = result.fb(k, v$1.ar());
  }
  var counts = new $c_sc_MapView$MapValues(new $c_sc_MapView$Id(result), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => _$1$2.i())));
  var maxCount = ($f_sc_IterableOnceOps__max__s_math_Ordering__O(new $c_sc_MapView$Values(counts), $m_s_math_Ordering$Int$()) | 0);
  return ((maxCount === 1) ? $m_sci_Seq$().i9() : $f_sc_IterableOps__collect__s_PartialFunction__O(counts, new $c_Lscorry_SummaryStatistics$$anon$1(maxCount)).g4().b5($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
});
$p.qQ = (function(values) {
  var m = this.h6(values);
  return ((+values.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$3) => {
    var x$2 = (+x$3);
    return ((x$2 - m) * (x$2 - m));
  }))).d3($m_s_math_Numeric$DoubleIsFractional$())) / values.i());
});
$p.uB = (function(values) {
  var x = this.qQ(values);
  return (+Math.sqrt(x));
});
$p.tT = (function(values) {
  return ((+values.ip($m_s_math_Ordering$DeprecatedDoubleOrdering$())) - (+values.iq($m_s_math_Ordering$DeprecatedDoubleOrdering$())));
});
$p.kN = (function(sorted, q) {
  var pos = (q * ((sorted.i() - 1) | 0));
  var lo = $doubleToInt(pos);
  var x = ((1 + lo) | 0);
  var y = ((sorted.i() - 1) | 0);
  var hi = ((x < y) ? x : y);
  var frac = (pos - lo);
  return (((+sorted.n(lo)) * (1.0 - frac)) + ((+sorted.n(hi)) * frac));
});
$p.tP = (function(input) {
  var $x_12 = $m_s_Predef$();
  var xs = $f_T__split__T__I__AT($f_T__trim__T(input), "\\s+", 0);
  var evidence$1 = $m_s_reflect_ClassTag$().gS($objectGetClass(xs).A.Q());
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aI();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  var i = 0;
  while ((i < xs.a.length)) {
    var x1 = i;
    var x = xs.a[x1];
    if (($m_sc_StringOps$(), (x !== ""))) {
      var unboxedElem = (isCharArrayBuilder ? $uC(x) : ((x === null) ? $m_scm_ArrayBuilder$().g0(elementClass) : x));
      jsElems.push(unboxedElem);
    }
    i = ((1 + i) | 0);
  }
  var xs$1 = $m_scm_ArrayBuilder$().fZ(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  var f = ((_$3$2) => {
    $m_sc_StringOps$();
    return $m_jl_Double$().qf(_$3$2);
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
  return $x_12.pl(ys);
});
$p.qg = (function(input) {
  var $x_52 = $m_s_Predef$();
  var xs = $f_T__split__T__I__AT(input, ";", 0);
  var f = ((_$4$2) => $f_T__trim__T(_$4$2));
  var ct__runtimeClass;
  var ct__runtimeClass = $d_T.l();
  var len = xs.a.length;
  var componentType = ct__runtimeClass;
  var ys = componentType.A.U(len);
  if ((len > 0)) {
    var i = 0;
    if ((xs !== null)) {
      while ((i < len)) {
        var $x_2 = $m_sr_ScalaRunTime$();
        var $x_1 = i;
        var x0 = xs.a[i];
        $x_2.V(ys, $x_1, f(x0));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_I)) {
      while ((i < len)) {
        var $x_4 = $m_sr_ScalaRunTime$();
        var $x_3 = i;
        var x0$1 = xs.a[i];
        $x_4.V(ys, $x_3, f(x0$1));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_D)) {
      while ((i < len)) {
        var $x_6 = $m_sr_ScalaRunTime$();
        var $x_5 = i;
        var x0$2 = xs.a[i];
        $x_6.V(ys, $x_5, f(x0$2));
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
        $x_10.V(ys, $x_9, f($bL(x0$3_$_lo, x0$3_$_hi)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_F)) {
      while ((i < len)) {
        var $x_12 = $m_sr_ScalaRunTime$();
        var $x_11 = i;
        var x0$4 = xs.a[i];
        $x_12.V(ys, $x_11, f(x0$4));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_C)) {
      while ((i < len)) {
        var $x_14 = $m_sr_ScalaRunTime$();
        var $x_13 = i;
        var x0$5 = xs.a[i];
        $x_14.V(ys, $x_13, f($bC(x0$5)));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_B)) {
      while ((i < len)) {
        var $x_16 = $m_sr_ScalaRunTime$();
        var $x_15 = i;
        var x0$6 = xs.a[i];
        $x_16.V(ys, $x_15, f(x0$6));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_S)) {
      while ((i < len)) {
        var $x_18 = $m_sr_ScalaRunTime$();
        var $x_17 = i;
        var x0$7 = xs.a[i];
        $x_18.V(ys, $x_17, f(x0$7));
        i = ((1 + i) | 0);
      }
    } else if ((xs instanceof $ac_Z)) {
      while ((i < len)) {
        var $x_20 = $m_sr_ScalaRunTime$();
        var $x_19 = i;
        var x0$8 = xs.a[i];
        $x_20.V(ys, $x_19, f(x0$8));
        i = ((1 + i) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs);
    }
  }
  var evidence$1 = $m_s_reflect_ClassTag$().gS($objectGetClass(ys).A.Q());
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aI();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  var i$1 = 0;
  while ((i$1 < ys.a.length)) {
    var x = ys.a[i$1];
    if (($m_sc_StringOps$(), (x !== ""))) {
      var unboxedElem = (isCharArrayBuilder ? $uC(x) : ((x === null) ? $m_scm_ArrayBuilder$().g0(elementClass) : x));
      jsElems.push(unboxedElem);
    }
    i$1 = ((1 + i$1) | 0);
  }
  var xs$1 = $m_scm_ArrayBuilder$().fZ(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  var f$2 = ((pair$2) => {
    var xs$2 = $f_T__split__T__I__AT(pair$2, "\\s+", 0);
    var f$1 = ((_$6$2) => {
      $m_sc_StringOps$();
      return $m_jl_Double$().qf(_$6$2);
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
  var ys$2 = componentType$1.A.U(len$2);
  if ((len$2 > 0)) {
    var i$3 = 0;
    if ((xs$1 !== null)) {
      while ((i$3 < len$2)) {
        var $x_33 = $m_sr_ScalaRunTime$();
        var $x_32 = i$3;
        var x0$18 = xs$1.a[i$3];
        $x_33.V(ys$2, $x_32, f$2(x0$18));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_I)) {
      while ((i$3 < len$2)) {
        var $x_35 = $m_sr_ScalaRunTime$();
        var $x_34 = i$3;
        var x0$19 = xs$1.a[i$3];
        $x_35.V(ys$2, $x_34, f$2(x0$19));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_D)) {
      while ((i$3 < len$2)) {
        var $x_37 = $m_sr_ScalaRunTime$();
        var $x_36 = i$3;
        var x0$20 = xs$1.a[i$3];
        $x_37.V(ys$2, $x_36, f$2(x0$20));
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
        $x_41.V(ys$2, $x_40, f$2($bL(x0$21_$_lo, x0$21_$_hi)));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_F)) {
      while ((i$3 < len$2)) {
        var $x_43 = $m_sr_ScalaRunTime$();
        var $x_42 = i$3;
        var x0$22 = xs$1.a[i$3];
        $x_43.V(ys$2, $x_42, f$2(x0$22));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_C)) {
      while ((i$3 < len$2)) {
        var $x_45 = $m_sr_ScalaRunTime$();
        var $x_44 = i$3;
        var x0$23 = xs$1.a[i$3];
        $x_45.V(ys$2, $x_44, f$2($bC(x0$23)));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_B)) {
      while ((i$3 < len$2)) {
        var $x_47 = $m_sr_ScalaRunTime$();
        var $x_46 = i$3;
        var x0$24 = xs$1.a[i$3];
        $x_47.V(ys$2, $x_46, f$2(x0$24));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_S)) {
      while ((i$3 < len$2)) {
        var $x_49 = $m_sr_ScalaRunTime$();
        var $x_48 = i$3;
        var x0$25 = xs$1.a[i$3];
        $x_49.V(ys$2, $x_48, f$2(x0$25));
        i$3 = ((1 + i$3) | 0);
      }
    } else if ((xs$1 instanceof $ac_Z)) {
      while ((i$3 < len$2)) {
        var $x_51 = $m_sr_ScalaRunTime$();
        var $x_50 = i$3;
        var x0$26 = xs$1.a[i$3];
        $x_51.V(ys$2, $x_50, f$2(x0$26));
        i$3 = ((1 + i$3) | 0);
      }
    } else {
      throw new $c_s_MatchError(xs$1);
    }
  }
  return $x_52.pl(ys$2);
});
$p.qh = (function(pairs) {
  pairs.i();
  var xs = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$7$2) => (+_$7$2.S))));
  var ys = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$8$2) => (+_$8$2.R))));
  var meanX = this.h6(xs);
  var meanY = this.h6(ys);
  var $x_2 = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => (((+x$1$2.S) - meanX) * ((+x$1$2.R) - meanY))))).d3($m_s_math_Numeric$DoubleIsFractional$());
  var x$1 = (+xs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$3) => {
    var x$2 = (+x$3);
    return ((x$2 - meanX) * (x$2 - meanX));
  }))).d3($m_s_math_Numeric$DoubleIsFractional$()));
  var $x_1 = Math.sqrt(x$1);
  var x$4 = (+ys.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((y$3) => {
    var y$2 = (+y$3);
    return ((y$2 - meanY) * (y$2 - meanY));
  }))).d3($m_s_math_Numeric$DoubleIsFractional$()));
  return ((+$x_2) / ((+$x_1) * (+Math.sqrt(x$4))));
});
$p.uz = (function(pairs) {
  return this.qh($p_Lscorry_SummaryStatistics$__ranks__sci_Seq__sci_Seq(this, pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$10$2) => (+_$10$2.S))))).hk($p_Lscorry_SummaryStatistics$__ranks__sci_Seq__sci_Seq(this, pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$11$2) => (+_$11$2.R)))))));
});
$p.qF = (function(t, df) {
  return $p_Lscorry_SummaryStatistics$__betai__D__D__D__D(this, (0.5 * df), 0.5, (df / (df + (t * t))));
});
$p.tR = (function(r, n) {
  if (((+Math.abs(r)) >= 1.0)) {
    return 0.0;
  } else {
    var x = (((n - 2) | 0) / (1.0 - (r * r)));
    return this.qF((r * (+Math.sqrt(x))), ((n - 2) | 0));
  }
});
$p.tO = (function(pairs) {
  var diffs = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => ((+x$1$2.S) - (+x$1$2.R)))));
  var n = diffs.i();
  var meanD = this.h6(diffs);
  var x$1 = ((+diffs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    var d$2 = (+d$3);
    return ((d$2 - meanD) * (d$2 - meanD));
  }))).d3($m_s_math_Numeric$DoubleIsFractional$())) / ((n - 1) | 0));
  var sdD = (+Math.sqrt(x$1));
  var x$2 = n;
  var t = (meanD / (sdD / (+Math.sqrt(x$2))));
  var df = ((n - 1) | 0);
  return new $c_T3(t, df, this.qF(t, df));
});
var $d_Lscorry_SummaryStatistics$ = new $TypeData().i($c_Lscorry_SummaryStatistics$, "scorry.SummaryStatistics$", ({
  jK: 1
}));
var $n_Lscorry_SummaryStatistics$;
function $m_Lscorry_SummaryStatistics$() {
  if ((!$n_Lscorry_SummaryStatistics$)) {
    $n_Lscorry_SummaryStatistics$ = new $c_Lscorry_SummaryStatistics$();
  }
  return $n_Lscorry_SummaryStatistics$;
}
function $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  nextValue.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $thiz.h8(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $thiz.is(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.hd(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.hd(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.lJ = null;
  this.lI = null;
  this.iL = false;
  this.lI = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.iL = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.g3 = (function() {
  return this.lJ;
});
$p.pg = (function(x$0) {
  this.lJ = x$0;
});
$p.qe = (function(subscription) {
  if (this.iL) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.lI.I();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.q1 = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.iL = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  db: 1,
  bl: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.me = null;
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
$p.g3 = (function() {
  return this.me;
});
$p.pg = (function(x$0) {
  this.me = x$0;
});
$p.q1 = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.qe = (function(subscription) {
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
$p.ia = (function(scalaValue) {
  return scalaValue;
});
$p.kg = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  dC: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.mW = null;
  this.mY = null;
  this.mX = null;
  this.iX = null;
  this.mW = getRawDomValue;
  this.mY = setRawDomValue;
  this.mX = separator;
  this.iX = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.oV = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().r.rr(), $m_Lcom_raquo_laminar_keys_CompositeKey$().q9(items, this.mX)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  e2: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.iY = null;
  this.iY = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.pu = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().q9(domValue, this.iY);
});
$p.py = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.iY, "");
});
$p.kg = (function(domValue) {
  return this.pu(domValue);
});
$p.ia = (function(scalaValue) {
  return this.py(scalaValue);
});
var $d_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec, "com.raquo.laminar.keys.CompositeKey$CompositeCodec", ({
  e4: 1,
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
  e6: 1,
  e5: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_EventProp(name) {
  this.gb = null;
  this.gb = name;
}
$p = $c_Lcom_raquo_laminar_keys_EventProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProp() {
}
$h_Lcom_raquo_laminar_keys_EventProp.prototype = $p;
var $d_Lcom_raquo_laminar_keys_EventProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_EventProp, "com.raquo.laminar.keys.EventProp", ({
  e9: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlAttr(name, codec) {
  this.gc = null;
  this.j0 = null;
  this.gc = name;
  this.j0 = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.v = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().qu(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  ea: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.n0 = null;
  this.mZ = null;
  this.n0 = name;
  this.mZ = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.v = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().uk(element, prop, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  eb: 1,
  af: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.j2 = null;
  this.j1 = null;
  this.hx = null;
  this.hy = null;
  this.j2 = localName;
  this.j1 = codec;
  var this$2 = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.y() + ":") + localName)));
  this.hx = (this$2.c() ? localName : this$2.y());
  this.hy = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().tF(namespacePrefix.y())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
$p.v = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().qv(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_SvgAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_SvgAttr, "com.raquo.laminar.keys.SvgAttr", ({
  ec: 1,
  af: 1
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
$p.cQ = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  ek: 1,
  a3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.n6 = null;
  this.n6 = f$2;
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
$p.cQ = (function(element) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.n6.e(element);
  });
  $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var when = true;
  if ((this$2.bo || (!when))) {
    f();
  } else {
    this$2.bo = true;
    try {
      f();
    } finally {
      this$2.bo = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$2);
    }
  }
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2, "com.raquo.laminar.modifiers.Modifier$$anon$2", ({
  el: 1,
  a3: 1
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
  eo: 1,
  em: 1
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
  eq: 1,
  ep: 1
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
  this.n7 = null;
  this.n7 = render$2;
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
$p.rX = (function(value) {
  return this.n7.e(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  et: 1,
  er: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.k9(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().sq($thiz.L(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.je = null;
  this.je = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.bl = (function(modifiers) {
  var element = this.s4();
  modifiers.bV(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.cQ(element);
  })));
  return element;
});
$p.s4 = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().sl(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  eE: 1,
  bt: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.jf = null;
  this.jf = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
$p.bT = (function(modifiers) {
  var element = this.s5();
  modifiers.bV(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.cQ(element);
  })));
  return element;
});
$p.s5 = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, $m_Lcom_raquo_laminar_DomApi$().pt(this));
});
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  eF: 1,
  bt: 1
}));
/** @constructor */
function $c_jl_Character$() {
  this.jg = null;
  $n_jl_Character$ = this;
  this.jg = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.kW = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.sr = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().rZ(this.jg, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.jg.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  eQ: 1,
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
  if (((((1 & $thiz.e6) << 24) >> 24) === 0)) {
    $thiz.jj = new RegExp("^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$");
    $thiz.e6 = (((1 | $thiz.e6) << 24) >> 24);
  }
  return $thiz.jj;
}
function $p_jl_Double$__doubleStrPat__O($thiz) {
  return (((((1 & $thiz.e6) << 24) >> 24) === 0) ? $p_jl_Double$__doubleStrPat$lzycompute__O($thiz) : $thiz.jj);
}
function $p_jl_Double$__doubleStrHexPat$lzycompute__O($thiz) {
  if (((((2 & $thiz.e6) << 24) >> 24) === 0)) {
    $thiz.ji = new RegExp("^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$");
    $thiz.e6 = (((2 | $thiz.e6) << 24) >> 24);
  }
  return $thiz.ji;
}
function $p_jl_Double$__doubleStrHexPat__O($thiz) {
  return (((((2 & $thiz.e6) << 24) >> 24) === 0) ? $p_jl_Double$__doubleStrHexPat$lzycompute__O($thiz) : $thiz.ji);
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
  var absResult = $thiz.tQ(x$1, x$2, x$3, 15);
  return ((x === "-") ? (-absResult) : absResult);
}
function $ps_jl_Double$__fail$1__T__E(s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""));
}
/** @constructor */
function $c_jl_Double$() {
  this.jj = null;
  this.ji = null;
  this.e6 = 0;
}
$p = $c_jl_Double$.prototype = new $h_O();
$p.constructor = $c_jl_Double$;
/** @constructor */
function $h_jl_Double$() {
}
$h_jl_Double$.prototype = $p;
$p.qf = (function(s) {
  var groups = $p_jl_Double$__doubleStrPat__O(this).exec(s);
  return ((groups !== null) ? (+parseFloat(groups[1])) : $p_jl_Double$__parseDoubleSlowPath__T__D(this, s));
});
$p.tQ = (function(integralPartStr, fractionalPartStr, binaryExpStr, maxPrecisionChars) {
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
  return $m_jl_Math$().uf((+parseInt(truncatedMantissaStr, 16)), (($doubleToInt((+parseInt(binaryExpStr, 10))) + fullCorrection) | 0));
});
$p.i8 = (function(a, b) {
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
  eT: 1,
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
$p.hf = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.pX = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().hf(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().hf(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().hf(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.sr(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().hf(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().hf(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
$p.dm = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  eW: 1,
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
$p.pY = (function(lo, hi) {
  if ((hi !== 0)) {
    var $x_1 = (hi >>> 0.0).toString(16);
    var s = (lo >>> 0.0).toString(16);
    var beginIndex = s.length;
    return ($x_1 + (("" + "00000000".substring(beginIndex)) + s));
  } else {
    return (lo >>> 0.0).toString(16);
  }
});
$p.tm = (function(lo, hi) {
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
  eZ: 1,
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
  this.fm = null;
  this.gf = null;
  this.fn = null;
  this.fo = 0;
  this.fl = 0;
  this.fm = declaringClass;
  this.gf = methodName;
  this.fn = fileName;
  this.fo = lineNumber;
  this.fl = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.o = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.fn === that.fn) && (this.fo === that.fo)) && (this.fl === that.fl)) && (this.fm === that.fm)) && (this.gf === that.gf)));
});
$p.t = (function() {
  var result = "";
  if ((this.fm !== "<jscode>")) {
    result = ((("" + result) + this.fm) + ".");
  }
  result = (("" + result) + this.gf);
  if ((this.fn === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.fn);
    if ((this.fo >= 0)) {
      result = ((result + ":") + this.fo);
      if ((this.fl >= 0)) {
        result = ((result + ":") + this.fl);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.x = (function() {
  return (((($f_T__hashCode__I(this.fm) ^ $f_T__hashCode__I(this.gf)) ^ $f_T__hashCode__I(this.fn)) ^ this.fo) ^ this.fl);
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
$p.tH = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  var result = "";
  var i = offset;
  while ((i !== end)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
$p.sL = (function(format, args) {
  return $ct_ju_Formatter__(new $c_ju_Formatter()).sM(format, args).t();
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  f6: 1,
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
  $thiz.nm = s;
  $thiz.nn = writableStackTrace;
  if (writableStackTrace) {
    $thiz.sC();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.nm = null;
    this.nn = false;
    this.nl = null;
    this.hA = null;
  }
  pS(cause) {
    return this;
  }
  bs() {
    return this.nm;
  }
  sC() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.a0 : this);
    this.nl = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  sZ() {
    if ((this.hA === null)) {
      if (this.nn) {
        this.hA = $m_jl_StackTrace$().sA(this.nl);
      } else {
        this.hA = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.hA;
  }
  t() {
    var className = $objectClassName(this);
    var message = this.bs();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  x() {
    return $c_O.prototype.x.call(this);
  }
  o(that) {
    return $c_O.prototype.o.call(this, that);
  }
  get "message"() {
    var m = this.bs();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.t();
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
  fh: 1,
  F: 1
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
  fp: 1,
  fo: 1
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
$p.d2 = (function(a, i, v) {
  a.a[i] = v;
});
$p.bA = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$, "java.util.internal.GenericArrayOps$ReusableAnyRefArrayOps$", ({
  fF: 1,
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
  if (($thiz.hB === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "No match available");
  }
  return $thiz.hB;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.nF = null;
  this.nE = null;
  this.nG = 0;
  this.jp = null;
  this.jq = 0;
  this.hB = null;
  this.nF = pattern0;
  this.nE = input0;
  this.nG = 0;
  this.jp = this.nE;
  this.jq = 0;
  this.hB = null;
}
$p = $c_ju_regex_Matcher.prototype = new $h_O();
$p.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $p;
$p.sD = (function() {
  var this$1 = this.nF;
  var input = this.jp;
  var start = this.jq;
  var mtch = this$1.tp(input, start);
  var end = (this$1.jr.lastIndex | 0);
  this.jq = ((mtch !== null) ? ((end === (mtch.index | 0)) ? ((1 + end) | 0) : end) : ((1 + this.jp.length) | 0));
  this.hB = mtch;
  return (mtch !== null);
});
$p.qD = (function() {
  return ((($p_ju_regex_Matcher__ensureLastMatch__O(this).index | 0) + this.nG) | 0);
});
$p.pz = (function() {
  return ((this.qD() + this.t3().length) | 0);
});
$p.t3 = (function() {
  return $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
});
var $d_ju_regex_Matcher = new $TypeData().i($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  fI: 1,
  fH: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.nH = null;
  this.nI = null;
  this.nJ = false;
  this.jr = null;
  this.nH = _pattern;
  this.nI = jsFlags;
  this.nJ = sticky;
  this.jr = new RegExp(jsPattern, (this.nI + (this.nJ ? "gy" : "g")));
  new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$p = $c_ju_regex_Pattern.prototype = new $h_O();
$p.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $p;
$p.tp = (function(input, start) {
  var regexp = this.jr;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$p.t = (function() {
  return this.nH;
});
$p.tq = (function(inputStr, limit) {
  if ((inputStr === "")) {
    return new ($d_T.r().C)([""]);
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var matcher = new $c_ju_regex_Matcher(this, inputStr);
    var result = [];
    var prevEnd = 0;
    while ((((result.length | 0) < ((lim - 1) | 0)) && matcher.sD())) {
      if ((matcher.pz() !== 0)) {
        var beginIndex = prevEnd;
        var endIndex = matcher.qD();
        var $x_1 = result.push(inputStr.substring(beginIndex, endIndex));
      }
      prevEnd = matcher.pz();
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
  fJ: 1,
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
$p.uM = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.jP;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.ce(x) ? $thiz.e(x) : default$1.e(x));
}
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
  gU: 1,
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
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.b2($m_scm_Buffer$().id(elems));
  } else {
    var it = elems.d();
    while (it.j()) {
      $thiz.ad(it.f());
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
  ih: 1,
  ic: 1
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
$p.t = (function() {
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
$p.t = (function() {
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
$p.t = (function() {
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
$p.t = (function() {
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
$p.t = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.hT = false;
  this.hT = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.t = (function() {
  return ("" + this.hT);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  j5: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.aw = 0;
  this.aw = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.t = (function() {
  return ("" + this.aw);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  j7: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.hU = false;
  this.hV = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.ta = (function(value) {
  this.hV = value;
  this.hU = true;
  return value;
});
$p.t = (function() {
  return ("LazyRef " + (this.hU ? ("of: " + this.hV) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  j8: 1,
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
$p.t = (function() {
  return ("" + this.D);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  jb: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.ax = 0;
  this.dW = 0;
  this.oT = 0;
  this.hX = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.ax = $f_T__hashCode__I("Seq");
  this.dW = $f_T__hashCode__I("Map");
  this.oT = $f_T__hashCode__I("Set");
  this.hX = this.ix($m_sci_Nil$(), this.dW);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cG = (function(x, y) {
  return this.qL($m_sr_Statics$().E(x), $m_sr_Statics$().E(y), (-889275714));
});
$p.qt = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.t8(xs, this.ax) : ((xs instanceof $c_sci_List) ? this.ts(xs, this.ax) : this.tN(xs, this.ax)));
});
$p.tA = (function(xs) {
  if (xs.c()) {
    return this.hX;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.dW;
    xs.cS(accum);
    h = this.z(h, accum.hY);
    h = this.z(h, accum.hZ);
    h = this.dZ(h, accum.i0);
    return this.aV(h, accum.i1);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  jG: 1,
  jF: 1
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
  this.hY = 0;
  this.hZ = 0;
  this.i1 = 0;
  this.i0 = 0;
  this.hY = 0;
  this.hZ = 0;
  this.i1 = 0;
  this.i0 = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.t = (function() {
  return "<function2>";
});
$p.rP = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cG(k, v);
  this.hY = ((this.hY + h) | 0);
  this.hZ = (this.hZ ^ h);
  this.i0 = Math.imul(this.i0, (1 | h));
  this.i1 = ((1 + this.i1) | 0);
});
$p.bL = (function(v1, v2) {
  this.rP(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  jH: 1,
  aY: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.iz = null;
  this.kY = null;
  this.kZ = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.iz = $m_scm_Buffer$().k6($m_sr_ScalaRunTime$().cH(new ($d_F1.r().C)([])));
  this.kY = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    try {
      console.error(((this.fP(err) + "\n") + this.sY(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.kZ = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.a0 : $x_1);
  }));
  this.tW(this.kY);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.fP = (function(e) {
  try {
    var errorMessage = e.bs();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).kx() + ": ") + errorMessage);
});
$p.sY = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().uM(err.sZ()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.tW = (function(fn) {
  this.iz.ad(fn);
});
$p.d1 = (function(err) {
  var this$1 = this.iz;
  var it = this$1.d();
  while (it.j()) {
    var x0 = it.f();
    try {
      x0.e(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.kZ;
      if (((x0 === null) ? (x$2 === null) : x0.o(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().uq(0.0, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  cQ: 1,
  i9: 1,
  ia: 1
}));
var $n_Lcom_raquo_airstream_core_AirstreamError$;
function $m_Lcom_raquo_airstream_core_AirstreamError$() {
  if ((!$n_Lcom_raquo_airstream_core_AirstreamError$)) {
    $n_Lcom_raquo_airstream_core_AirstreamError$ = new $c_Lcom_raquo_airstream_core_AirstreamError$();
  }
  return $n_Lcom_raquo_airstream_core_AirstreamError$;
}
function $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V($thiz) {
  $thiz.cX(true);
  $thiz.fW((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().qS(onNext, $m_s_PartialFunction$().hF, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.fS()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.fS()) {
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
  var x = $thiz.eA();
  if ((x === (void 0))) {
    var newArray = $m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_F0.r().C)([])));
    $thiz.fW(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aO: 1,
  aG: 1,
  aa: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.rX(value));
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.m0 = null;
  this.m1 = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.tM = (function() {
  if ((!this.m1)) {
    this.m0 = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.m1 = true;
  }
  return this.m0;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  du: 1,
  bp: 1,
  dH: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.n2 = null;
  this.j4 = null;
  this.n2 = key;
  this.j4 = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.cQ = (function(element) {
  if ((!this.j4.c())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.n2, null, this.j4, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  eg: 1,
  a3: 1,
  br: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.fk = null;
  this.j5 = null;
  this.j6 = null;
  this.fk = eventProcessor;
  this.j5 = ((ev) => {
    var processor = eventProcessor.hv;
    var this$2 = processor.e(ev);
    if ((!this$2.c())) {
      callback.e(this$2.y());
    }
  });
  this.j6 = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
    }
    this$3.capture = outer.fk.hw;
    this$3.passive = outer.fk.iZ;
    return this$3;
  })();
}
$p = $c_Lcom_raquo_laminar_modifiers_EventListener.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_EventListener;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_EventListener() {
}
$h_Lcom_raquo_laminar_modifiers_EventListener.prototype = $p;
$p.cQ = (function(element) {
  this.s0(element, false);
});
$p.s0 = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().rA(element.L(), this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.j3, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().u0(element.L(), this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().uI(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iy(element.cc(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().qE(element.cc(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner$1) => {
      activate.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.t = (function() {
  return (("EventListener(" + this.fk.fj.gb) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  eh: 1,
  a3: 1,
  ef: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.n4 = null;
  this.n5 = null;
  this.n3 = null;
  this.n4 = key;
  this.n5 = value;
  this.n3 = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.cQ = (function(element) {
  this.n3.gT(element, this.n4, this.n5);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  ei: 1,
  a3: 1,
  br: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.jb = null;
  this.ni = null;
  this.nj = null;
  this.ni = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().tk(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.nj = container;
  this.tE();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.cc = (function() {
  return this.jb;
});
$p.k9 = (function(x$0) {
  this.jb = x$0;
});
$p.tE = (function() {
  this.jb.oY();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().fI(this, this.ni, (void 0));
});
$p.L = (function() {
  return this.nj;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  ez: 1,
  aw: 1,
  aV: 1
}));
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.A.Z) {
    return ($thiz.A.Q().kx() + "[]");
  } else {
    var name = $thiz.A.N;
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
  this.jh = null;
  this.A = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.t = (function() {
  return ((this.A.Y ? "interface " : (this.A.X ? "" : "class ")) + this.A.N);
});
$p.kx = (function() {
  if ((this.jh === null)) {
    this.jh = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.jh;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  eR: 1,
  a: 1,
  a4: 1
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
/** @constructor */
function $c_s_Predef$() {
  this.ra = null;
  $n_s_Predef$ = this;
  $m_sci_List$();
  this.ra = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.u7 = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  fZ: 1,
  fT: 1,
  fU: 1
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
      return $thiz.S;
      break;
    }
    case 1: {
      return $thiz.R;
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
      return $thiz.fq;
      break;
    }
    case 1: {
      return $thiz.fr;
      break;
    }
    case 2: {
      return $thiz.fs;
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
      return $thiz.eO;
      break;
    }
    case 1: {
      return $thiz.eP;
      break;
    }
    case 2: {
      return $thiz.eQ;
      break;
    }
    case 3: {
      return $thiz.eR;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.ft = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.ft = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.bN = (function() {
  return this.ft.px($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.ab = (function(it) {
  return this.ft.ko(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aq = (function() {
  return this.ft.ir($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.dX = (function(elems) {
  return this.ft.ko(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.gk = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.gk = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.ab = (function(it) {
  return this.gk.ab(it);
});
$p.aq = (function() {
  return this.gk.aq();
});
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.q();
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
  return $thiz.ay().ab($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f));
}
function $f_sc_IterableOps__collect__s_PartialFunction__O($thiz, pf) {
  return $thiz.ay().ab(new $c_sc_View$Collect($thiz, pf));
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).gW(xs);
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
$p.aq = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.ab = (function(source) {
  return source.d();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  gh: 1,
  a: 1,
  G: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.gn = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.gn = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.ab = (function(it) {
  return this.gn.ab(it);
});
$p.bN = (function() {
  return this.gn.bN();
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
$p.ie = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((it$2) => (() => it$2.d()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().kq(it))));
});
$p.aq = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2) => this.ie(it$2))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.ab = (function(source) {
  return this.ie(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  gA: 1,
  a: 1,
  G: 1
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
  this.a5 = 0;
  this.az = null;
  this.bP = null;
  this.b8 = 0;
  this.bC = 0;
  this.X = dataMap;
  this.a5 = nodeMap;
  this.az = content;
  this.bP = originalHashes;
  this.b8 = size;
  this.bC = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.aY = (function() {
  return this.b8;
});
$p.es = (function() {
  return this.bC;
});
$p.dr = (function(index) {
  return this.az.a[(index << 1)];
});
$p.cy = (function(index) {
  return this.az.a[((1 + (index << 1)) | 0)];
});
$p.pP = (function(index) {
  return new $c_T2(this.az.a[(index << 1)], this.az.a[((1 + (index << 1)) | 0)]);
});
$p.fQ = (function(index) {
  return this.bP.a[index];
});
$p.cT = (function(index) {
  return this.az.a[((((this.az.a.length - 1) | 0) - index) | 0)];
});
$p.k4 = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ey(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cA(this.X, mask, bitpos);
    if ($m_sr_BoxesRunTime$().l(key, this.dr(index))) {
      return this.cy(index);
    } else {
      throw new $c_ju_NoSuchElementException(("key not found: " + key));
    }
  } else if (((this.a5 & bitpos) !== 0)) {
    return this.cT($m_sci_Node$().cA(this.a5, mask, bitpos)).k4(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.ih = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ey(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cA(this.X, mask, bitpos);
    return ($m_sr_BoxesRunTime$().l(key, this.dr(index)) ? new $c_s_Some(this.cy(index)) : $m_s_None$());
  } else {
    return (((this.a5 & bitpos) !== 0) ? this.cT($m_sci_Node$().cA(this.a5, mask, bitpos)).ih(key, originalHash, keyHash, ((5 + shift) | 0)) : $m_s_None$());
  }
});
$p.kv = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().ey(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cA(this.X, mask, bitpos);
    return ($m_sr_BoxesRunTime$().l(key, this.dr(index)) ? this.cy(index) : f.I());
  } else {
    return (((this.a5 & bitpos) !== 0) ? this.cT($m_sci_Node$().cA(this.a5, mask, bitpos)).kv(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.I());
  }
});
$p.kd = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ey(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cA(this.X, mask, bitpos);
    return ((this.bP.a[index] === originalHash) && $m_sr_BoxesRunTime$().l(key, this.dr(index)));
  } else {
    return (((this.a5 & bitpos) !== 0) && this.cT($m_sci_Node$().cA(this.a5, mask, bitpos)).kd(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.qN = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().ey(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cA(this.X, mask, bitpos);
    var key0 = this.dr(index);
    var key0UnimprovedHash = this.fQ(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().l(key0, key))) {
      if (replaceValue) {
        var value0 = this.cy(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.sg(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.cy(index);
      var key0Hash = $m_sc_Hashing$().cz(key0UnimprovedHash);
      return this.se(bitpos, key0Hash, this.kI(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.a5 & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cA(this.a5, mask, bitpos);
    var subNode = this.cT(index$2);
    var subNodeNew$2 = subNode.qO(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.sf(bitpos, subNode, subNodeNew$2));
  } else {
    return this.sd(bitpos, key, originalHash, keyHash, value);
  }
});
$p.kI = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().kr($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T2(key0, value0), new $c_T2(key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().ey(keyHash0, shift);
    var mask1 = $m_sci_Node$().ey(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().dY(mask0) | $m_sci_Node$().dY(mask1));
      if ((mask0 < mask1)) {
        var xs = $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [key0, value0, key1, value1]);
        var array$2 = new $ac_O(xs.i());
        var iterator = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs));
        var i = 0;
        while ((iterator.bx > 0)) {
          array$2.a[i] = iterator.f();
          i = ((1 + i) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$2, new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash);
      } else {
        var xs$1 = $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [key1, value1, key0, value0]);
        var array$4 = new $ac_O(xs$1.i());
        var iterator$1 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$1));
        var i$1 = 0;
        while ((iterator$1.bx > 0)) {
          array$4.a[i$1] = iterator$1.f();
          i$1 = ((1 + i$1) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$4, new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash);
      }
    } else {
      var nodeMap = $m_sci_Node$().dY(mask0);
      var node = this.kI(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      var xs$2 = $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [node]);
      var array$6 = new $ac_O(xs$2.i());
      var iterator$2 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$2));
      var i$2 = 0;
      while ((iterator$2.bx > 0)) {
        array$6.a[i$2] = iterator$2.f();
        i$2 = ((1 + i$2) | 0);
      }
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().jy, node.aY(), node.es());
    }
  }
});
$p.ky = (function() {
  return (this.a5 !== 0);
});
$p.kJ = (function() {
  return $m_jl_Integer$().dm(this.a5);
});
$p.ii = (function() {
  return (this.X !== 0);
});
$p.kM = (function() {
  return $m_jl_Integer$().dm(this.X);
});
$p.gX = (function(bitpos) {
  return $m_jl_Integer$().dm((this.X & ((bitpos - 1) | 0)));
});
$p.kK = (function(bitpos) {
  return $m_jl_Integer$().dm((this.a5 & ((bitpos - 1) | 0)));
});
$p.sg = (function(bitpos, newKey, newValue) {
  var dataIx = this.gX(bitpos);
  var idx = (dataIx << 1);
  var src = this.az;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.u(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.X, this.a5, dst, this.bP, this.b8, this.bC);
});
$p.sf = (function(bitpos, oldNode, newNode) {
  var idx = ((((this.az.a.length - 1) | 0) - this.kK(bitpos)) | 0);
  var src = this.az;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.u(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.X, this.a5, dst, this.bP, ((((this.b8 - oldNode.aY()) | 0) + newNode.aY()) | 0), ((((this.bC - oldNode.es()) | 0) + newNode.es()) | 0));
});
$p.sd = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.gX(bitpos);
  var idx = (dataIx << 1);
  var src = this.az;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.u(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.u(idx, dst, destPos, length);
  var dstHashes = this.td(this.bP, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.X | bitpos), this.a5, dst, dstHashes, ((1 + this.b8) | 0), ((this.bC + keyHash) | 0));
});
$p.tC = (function(bitpos, keyHash, node) {
  var dataIx = this.gX(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.az.a.length - 2) | 0) - this.kK(bitpos)) | 0);
  var src = this.az;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.u(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.u(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.u(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.qk(this.bP, dataIx);
  this.X = (this.X ^ bitpos);
  this.a5 = (this.a5 | bitpos);
  this.az = dst;
  this.bP = dstHashes;
  this.b8 = ((((this.b8 - 1) | 0) + node.aY()) | 0);
  this.bC = ((((this.bC - keyHash) | 0) + node.es()) | 0);
  return this;
});
$p.se = (function(bitpos, keyHash, node) {
  var dataIx = this.gX(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.az.a.length - 2) | 0) - this.kK(bitpos)) | 0);
  var src = this.az;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.u(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.u(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.u(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.qk(this.bP, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.X ^ bitpos), (this.a5 | bitpos), dst, dstHashes, ((((this.b8 - 1) | 0) + node.aY()) | 0), ((((this.bC - keyHash) | 0) + node.es()) | 0));
});
$p.cS = (function(f) {
  var iN = $m_jl_Integer$().dm(this.X);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.bL(this.dr(i$1), this.cy(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().dm(this.a5);
  var j = 0;
  while ((j < jN)) {
    this.cT(j).cS(f);
    j = ((1 + j) | 0);
  }
});
$p.kn = (function(f) {
  var i = 0;
  var iN = $m_jl_Integer$().dm(this.X);
  while ((i < iN)) {
    f.gT(this.dr(i), this.cy(i), this.fQ(i));
    i = ((1 + i) | 0);
  }
  var jN = $m_jl_Integer$().dm(this.a5);
  var j = 0;
  while ((j < jN)) {
    this.cT(j).kn(f);
    j = ((1 + j) | 0);
  }
});
$p.o = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bC === that.bC) && (this.a5 === that.a5)) && (this.X === that.X)) && (this.b8 === that.b8)) && $m_ju_Arrays$().kj(this.bP, that.bP))) {
      var a1 = this.az;
      var a2 = that.az;
      var length = this.az.a.length;
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
$p.t = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.pj = (function() {
  var this$1 = this.az;
  var contentClone = this$1.g();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().dm(this.X) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].pk();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.X, this.a5, contentClone, this.bP.g(), this.b8, this.bC);
});
$p.ku = (function(index) {
  return this.cT(index);
});
$p.qO = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.qN(key, value, originalHash, hash, shift, replaceValue);
});
$p.pk = (function() {
  return this.pj();
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
  this.hO = 0;
  this.ee = 0;
  this.af = null;
  this.hO = originalHash;
  this.ee = hash;
  this.af = content;
  $m_s_Predef$().u7((this.af.i() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.fR = (function(key) {
  var iter = this.af.d();
  var i = 0;
  while (iter.j()) {
    if ($m_sr_BoxesRunTime$().l(iter.f().S, key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.aY = (function() {
  return this.af.i();
});
$p.k4 = (function(key, originalHash, hash, shift) {
  var this$1 = this.ih(key, originalHash, hash, shift);
  return (this$1.c() ? $m_sc_Iterator$().J.f() : this$1.y());
});
$p.ih = (function(key, originalHash, hash, shift) {
  if ((this.ee === hash)) {
    var index = this.fR(key);
    return ((index >= 0) ? new $c_s_Some(this.af.n(index).R) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.kv = (function(key, originalHash, hash, shift, f) {
  if ((this.ee === hash)) {
    var x36 = this.fR(key);
    if ((x36 === (-1))) {
      return f.I();
    }
    return this.af.n(x36).R;
  } else {
    return f.I();
  }
});
$p.kd = (function(key, originalHash, hash, shift) {
  return ((this.ee === hash) && (this.fR(key) >= 0));
});
$p.qO = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.fR(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.af.n(index).R, value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.af.eC(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.af.er(new $c_T2(key, value))));
});
$p.ky = (function() {
  return false;
});
$p.kJ = (function() {
  return 0;
});
$p.cT = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.ii = (function() {
  return true;
});
$p.kM = (function() {
  return this.af.i();
});
$p.dr = (function(index) {
  return this.af.n(index).S;
});
$p.cy = (function(index) {
  return this.af.n(index).R;
});
$p.pP = (function(index) {
  return this.af.n(index);
});
$p.fQ = (function(index) {
  return this.hO;
});
$p.cS = (function(f) {
  this.af.bV(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.S;
    var v = x$1$2.R;
    return f.bL(k, v);
  })));
});
$p.kn = (function(f) {
  var iter = this.af.d();
  while (iter.j()) {
    var next = iter.f();
    f.gT(next.S, next.R, this.hO);
  }
});
$p.o = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.ee === that.ee) && (this.af.i() === that.af.i()))) {
      var iter = this.af.d();
      while (iter.j()) {
        var \u03b412$;
        var \u03b412$ = iter.f();
        var key = \u03b412$.S;
        var value = \u03b412$.R;
        var index = that.fR(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().l(value, that.af.n(index).R)))) {
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
$p.t = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.es = (function() {
  return Math.imul(this.af.i(), this.ee);
});
$p.ku = (function(index) {
  return this.cT(index);
});
$p.pk = (function() {
  return new $c_sci_HashCollisionMapNode(this.hO, this.ee, this.af);
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
  this.gx = null;
  $n_sci_HashMap$ = this;
  this.gx = new $c_sci_HashMap($m_sci_MapNode$().op);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.sO = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().k3(source).kP());
});
$p.bN = (function() {
  return this.gx;
});
$p.ab = (function(it) {
  return this.sO(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  gI: 1,
  a: 1,
  aC: 1
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
$p.sQ = (function(it) {
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
  return new $c_sci_MapBuilderImpl().oZ(it).qm();
});
$p.bN = (function() {
  return $m_sci_Map$EmptyMap$();
});
$p.ab = (function(it) {
  return this.sQ(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  gX: 1,
  a: 1,
  aC: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.q();
  if ((x1 === (-1))) {
    return (void 0);
  }
  var that = ((x1 + delta) | 0);
  $thiz.b4(((that < 0) ? 0 : that));
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
$p.sR = (function(it) {
  var k = it.q();
  return $ct_scm_HashMap__I__D__(new $c_scm_HashMap(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).p2(it);
});
$p.bN = (function() {
  return $ct_scm_HashMap__(new $c_scm_HashMap());
});
$p.ab = (function(it) {
  return this.sR(it);
});
var $d_scm_HashMap$ = new $TypeData().i($c_scm_HashMap$, "scala.collection.mutable.HashMap$", ({
  hL: 1,
  a: 1,
  aC: 1
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
$p.sS = (function(it) {
  var k = it.q();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).p3(it);
});
$p.aq = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.ab = (function(source) {
  return this.sS(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  hR: 1,
  a: 1,
  G: 1
}));
var $n_scm_HashSet$;
function $m_scm_HashSet$() {
  if ((!$n_scm_HashSet$)) {
    $n_scm_HashSet$ = new $c_scm_HashSet$();
  }
  return $n_scm_HashSet$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iA)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.oH = null;
  this.oH = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.I = (function() {
  return (0, this.oH)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  iZ: 1,
  cE: 1,
  aX: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.oI = null;
  this.oI = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.e = (function(x0) {
  return (0, this.oI)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  j0: 1,
  cF: 1,
  i: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.oJ = null;
  this.oJ = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.bL = (function(x0, x1) {
  return (0, this.oJ)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  j1: 1,
  cG: 1,
  aY: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.oK = null;
  this.oK = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.gT = (function(x0, x1, x2) {
  return (0, this.oK)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  j2: 1,
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
$p.t = (function() {
  return "<function1>";
});
$p.e = (function(x) {
  return this.bU(x, $m_s_PartialFunction$().hF);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  j9: 1,
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
$p.pM = (function(f) {
  return ((arg1$2) => f.e(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  jh: 1,
  ji: 1,
  jj: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.jD)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.l2 = null;
  this.l0 = false;
  this.iA = null;
  this.l1 = null;
  this.l2 = onNextParam$2;
  this.l0 = handleObserverErrors$3;
  this.iA = onErrorParam$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.l1 = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.ez = (function() {
  return this.l1;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.t = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ha = (function(nextValue) {
  try {
    this.l2.e(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.l0) {
      this.h9(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().d1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.h9 = (function(error) {
  try {
    if (this.iA.ce(error)) {
      this.iA.e(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().d1(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().d1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.fX = (function(nextValue) {
  nextValue.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((error) => {
    this.h9(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.ha(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  cS: 1,
  aG: 1,
  aa: 1,
  aO: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.iB = null;
  this.l3 = false;
  this.l4 = null;
  this.iB = onTryParam$2;
  this.l3 = handleObserverErrors$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.l4 = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.ez = (function() {
  return this.l4;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.t = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ha = (function(nextValue) {
  this.fX(new $c_s_util_Success(nextValue));
});
$p.h9 = (function(error) {
  this.fX(new $c_s_util_Failure(error));
});
$p.fX = (function(nextValue) {
  try {
    if (this.iB.ce(nextValue)) {
      this.iB.e(nextValue);
    } else {
      nextValue.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().d1(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.l3 && nextValue.pV())) {
      this.h9(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().d1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().d1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  cT: 1,
  aG: 1,
  aa: 1,
  aO: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.m2 = null;
  this.m3 = false;
  this.m4 = null;
  this.m5 = false;
  this.m6 = null;
  this.m7 = false;
  this.m8 = null;
  this.m9 = false;
  this.ma = null;
  this.mb = false;
  this.mc = null;
  this.md = false;
  this.qU = null;
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
$p.s7 = (function() {
  if ((!this.m3)) {
    this.m2 = new $c_Lcom_raquo_laminar_tags_SvgTag("circle", false);
    this.m3 = true;
  }
  return this.m2;
});
$p.kt = (function() {
  if ((!this.m5)) {
    this.m4 = new $c_Lcom_raquo_laminar_tags_SvgTag("g", false);
    this.m5 = true;
  }
  return this.m4;
});
$p.q3 = (function() {
  if ((!this.m7)) {
    this.m6 = new $c_Lcom_raquo_laminar_tags_SvgTag("line", false);
    this.m7 = true;
  }
  return this.m6;
});
$p.tV = (function() {
  if ((!this.m9)) {
    this.m8 = new $c_Lcom_raquo_laminar_tags_SvgTag("rect", false);
    this.m9 = true;
  }
  return this.m8;
});
$p.kT = (function() {
  if ((!this.mb)) {
    this.ma = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.mb = true;
  }
  return this.ma;
});
$p.hi = (function() {
  if ((!this.md)) {
    this.mc = new $c_Lcom_raquo_laminar_tags_SvgTag("text", false);
    this.md = true;
  }
  return this.mc;
});
var $d_Lcom_raquo_laminar_api_Laminar$svg$ = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$svg$, "com.raquo.laminar.api.Laminar$svg$", ({
  dv: 1,
  dU: 1,
  dE: 1,
  dG: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$() {
  this.r = null;
  $n_Lcom_raquo_laminar_api_package$ = this;
  this.r = new $c_Lcom_raquo_laminar_api_package$$anon$1();
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
  this.mT = null;
  this.mV = false;
  this.mU = null;
  this.iW = null;
  this.mT = initialContext;
  this.mV = preferStrictMode;
  this.mU = insertFn;
  this.iW = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.s1 = (function(element) {
  var this$1 = this.mT;
  var insertContext = (this$1.c() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().u8(element, this.mV, this.iW) : this$1.y());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((mountContext) => this.mU.gT(insertContext, mountContext.j3, this.iW)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iy(element.cc(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.cQ = (function(element) {
  this.s1(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  dX: 1,
  a3: 1,
  e1: 1,
  dY: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.gd = name;
  $thiz.ge = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.gd = null;
  this.ge = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.v = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().um(element, styleProp, value$2);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.j7 = null;
  this.j8 = null;
  this.j7 = $m_s_None$();
  this.j8 = $m_Lcom_raquo_laminar_DomApi$().sk(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.fJ = (function() {
  return this.j7;
});
$p.eB = (function(maybeNextParent) {
  this.j7 = maybeNextParent;
});
$p.eF = (function(maybeNextParent) {
});
$p.cQ = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fI(parentNode, this, (void 0));
});
$p.L = (function() {
  return this.j8;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  eu: 1,
  aw: 1,
  a3: 1,
  aH: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.jc = null;
  this.jd = null;
  this.jc = $m_s_None$();
  this.jd = $m_Lcom_raquo_laminar_DomApi$().sm(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.fJ = (function() {
  return this.jc;
});
$p.eB = (function(maybeNextParent) {
  this.jc = maybeNextParent;
});
$p.eF = (function(maybeNextParent) {
});
$p.cQ = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fI(parentNode, this, (void 0));
});
$p.uF = (function() {
  return this.jd.data;
});
$p.L = (function() {
  return this.jd;
});
var $d_Lcom_raquo_laminar_nodes_TextNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_TextNode, "com.raquo.laminar.nodes.TextNode", ({
  eA: 1,
  aw: 1,
  a3: 1,
  aH: 1
}));
function $isArrayOf_Ljava_io_IOException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eI)));
}
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  eM: 1,
  eU: 1,
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
  eO: 1,
  a: 1,
  ab: 1,
  a4: 1
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
  ab: 1,
  a4: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eX)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eY)));
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
  $thiz.s = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  $thiz.s = str;
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.s = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.p7 = (function(str) {
  var str$1 = $m_jl_String$().tH(str, 0, str.a.length);
  this.s = (("" + this.s) + str$1);
  return this;
});
$p.t = (function() {
  return this.s;
});
$p.i = (function() {
  return this.s.length;
});
$p.pe = (function(index) {
  return this.s.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  f7: 1,
  aW: 1,
  eJ: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f9)));
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fc)));
}
function $isArrayOf_Ljava_math_BigDecimal(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fe)));
}
function $isArrayOf_Ljava_math_BigInteger(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ff)));
}
function $p_ju_Formatter__sendToDest__T__V($thiz, s) {
  if (($thiz.eN === null)) {
    $thiz.e7 = (("" + $thiz.e7) + s);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.eN === null)) {
    $thiz.e7 = ((("" + $thiz.e7) + s1) + s2);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.eN === null)) {
    $thiz.e7 = (($thiz.e7 + (("" + s1) + s2)) + s3);
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
      var this$2 = $thiz.eN;
      this$2.s = (("" + this$2.s) + t);
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if ((!false)) {
      throw e;
    }
  }
}
function $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter($thiz, localeInfo, format, args) {
  if ($thiz.jo) {
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
    var re = $m_ju_Formatter$().nt;
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
        $thiz.kD(flags);
      }
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n");
    } else if ((conversion$2 === 37)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.kD(flags);
      }
      if ((((1 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((-2) & flags) !== 0)) {
        $thiz.ik(37, flags, (-2));
      }
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%");
    } else {
      var conversionLower = (((256 & flags) !== 0) ? (65535 & ((32 + conversion$2) | 0)) : conversion$2);
      var illegalFlags = $m_ju_Formatter$().ns.a[((conversionLower - 97) | 0)];
      if (((illegalFlags === (-1)) || (((256 & flags) & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion$2);
      }
      if ((((17 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.kD(flags);
      }
      if (((precision !== (-1)) && ((512 & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if (((flags & illegalFlags) !== 0)) {
        $thiz.ik(conversionLower, flags, illegalFlags);
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
        arg.uW($thiz, formattableFlags, width, precision);
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.ik(conversionLower, flags, 2);
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
          $thiz.h3(conversionLower, arg);
        }
        var x3 = (arg | 0);
        if (((x3 >>> 0) > 1114111)) {
          $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, x3);
        }
        var $x_2 = $m_jl_Character$().kW(x3);
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
        var $x_3 = $m_RTLong$().kV(x3$2_$_lo, x3$2_$_hi);
      } else {
        if ((!false)) {
          $thiz.h3(conversionLower, arg);
        }
        var $x_3 = arg.t();
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
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, arg.kW(radix), prefix);
      } else {
        if ($isInt(arg)) {
          var x2$5 = (arg | 0);
          var str$6 = (isOctal ? (x2$5 >>> 0.0).toString(8) : (x2$5 >>> 0.0).toString(16));
        } else {
          if ((!(arg instanceof $Long))) {
            $thiz.h3(conversionLower, arg);
          }
          var $x_5 = $uJ(arg);
          var x3$3_$_lo = $x_5.l;
          var x3$3_$_hi = $x_5.h;
          var str$6 = (isOctal ? $m_jl_Long$().tm(x3$3_$_lo, x3$3_$_hi) : $m_jl_Long$().pY(x3$3_$_lo, x3$3_$_hi));
        }
        if (((76 & flags) !== 0)) {
          $thiz.ik(conversionLower, flags, 76);
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
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().to(x2$6), flags, precision, conversionLower, localeInfo, width);
        }
      } else if (false) {
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().tn(arg), flags, precision, conversionLower, localeInfo, width);
      } else {
        $thiz.h3(conversionLower, arg);
      }
      break;
    }
    case 97: {
      if (((typeof arg) === "number")) {
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, (+arg));
      } else {
        $thiz.h3(conversionLower, arg);
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
  var rounded = x.qo(((1 + digitsAfterDot) | 0));
  var signStr = (rounded.dz ? "-" : "");
  var intStr = rounded.dA;
  var fractionalDigitCount = ((intStr.length - 1) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  var integerPart = intStr.substring(0, 1);
  var fractionalPart = (("" + intStr.substring(1)) + $m_ju_Formatter$().kC(missingZeros));
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
  var rounded = x.uo(scale);
  var signStr = (rounded.dz ? "-" : "");
  var intStr = rounded.dA;
  var intStrLen = intStr.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().kC(((minDigits - intStrLen) | 0))) + intStr));
  var dotPos = ((expandedIntStr.length - scale) | 0);
  var integerPart = (signStr + expandedIntStr.substring(0, dotPos));
  return (((scale === 0) && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + expandedIntStr.substring(dotPos)));
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = x.qo(p);
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
    var baseStr = $m_jl_Long$().pY(roundedMantissa_$_lo, roundedMantissa_$_hi);
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
  $thiz.eN = dest;
  $thiz.nr = formatterLocaleInfo;
  $thiz.e7 = "";
  $thiz.jo = false;
  return $thiz;
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz;
}
/** @constructor */
function $c_ju_Formatter() {
  this.eN = null;
  this.nr = null;
  this.e7 = null;
  this.jo = false;
}
$p = $c_ju_Formatter.prototype = new $h_O();
$p.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
}
$h_ju_Formatter.prototype = $p;
$p.sM = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.nr, format, args);
});
$p.t = (function() {
  if (this.jo) {
    throw new $c_ju_FormatterClosedException();
  }
  return ((this.eN === null) ? this.e7 : this.eN.s);
});
$p.kD = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags));
});
$p.ik = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower);
});
$p.h3 = (function(conversionLower, arg) {
  throw new $c_ju_IllegalFormatConversionException(conversionLower, $objectGetClass(arg));
});
var $d_ju_Formatter = new $TypeData().i($c_ju_Formatter, "java.util.Formatter", ({
  fl: 1,
  eG: 1,
  eN: 1,
  eH: 1
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
$p.d2 = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.bA = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ByteArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ByteArrayOps$, "java.util.internal.GenericArrayOps$ByteArrayOps$", ({
  fB: 1,
  ap: 1,
  ay: 1,
  F: 1
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
$p.d2 = (function(a, i, v) {
  var v$1 = $uC(v);
  a.a[i] = v$1;
});
$p.bA = (function(a, i) {
  return $bC(a.a[i]);
});
var $d_ju_internal_GenericArrayOps$CharArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$CharArrayOps$, "java.util.internal.GenericArrayOps$CharArrayOps$", ({
  fC: 1,
  ap: 1,
  ay: 1,
  F: 1
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
$p.d2 = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.bA = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$IntArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$IntArrayOps$, "java.util.internal.GenericArrayOps$IntArrayOps$", ({
  fD: 1,
  ap: 1,
  ay: 1,
  F: 1
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
$p.d2 = (function(a, i, v) {
  var $x_1 = $uJ(v);
  var v$1_$_lo = $x_1.l;
  var v$1_$_hi = $x_1.h;
  var $x_2 = a.a;
  var $x_3 = (i << 1);
  $x_2[$x_3] = v$1_$_lo;
  $x_2[(($x_3 + 1) | 0)] = v$1_$_hi;
});
$p.bA = (function(a, i) {
  var $x_1 = a.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
var $d_ju_internal_GenericArrayOps$LongArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$LongArrayOps$, "java.util.internal.GenericArrayOps$LongArrayOps$", ({
  fE: 1,
  ap: 1,
  ay: 1,
  F: 1
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
$p.d2 = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.bA = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ShortArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ShortArrayOps$, "java.util.internal.GenericArrayOps$ShortArrayOps$", ({
  fG: 1,
  ap: 1,
  ay: 1,
  F: 1
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
$p.t = (function() {
  return "<function1>";
});
$p.bU = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.ce = (function(x) {
  return false;
});
$p.k5 = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.e = (function(v1) {
  this.k5(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  fY: 1,
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
$p.q = (function() {
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
$p.d3 = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.cP = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.g4 = (function() {
  return $m_sci_Seq$().fO(this);
});
$p.d = (function() {
  return this;
});
$p.gW = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.ev = (function(n) {
  return this.g1(n, (-1));
});
$p.g1 = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.t = (function() {
  return "<iterator>";
});
/** @constructor */
function $c_sc_Map$() {
  this.gn = null;
  this.o9 = null;
  this.oa = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.o9 = $ct_O__(new $c_O());
  this.oa = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.o9));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  gq: 1,
  bU: 1,
  a: 1,
  aC: 1
}));
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$();
  }
  return $n_sc_Map$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.ea = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.ea = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.k6 = (function(elems) {
  return this.ea.dX(elems);
});
$p.i9 = (function() {
  return this.ea.bN();
});
$p.id = (function(it) {
  return this.ea.ab(it);
});
$p.aq = (function() {
  return this.ea.aq();
});
$p.dX = (function(elems) {
  return this.k6(elems);
});
$p.bN = (function() {
  return this.i9();
});
$p.ab = (function(source) {
  return this.id(source);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cb(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => x$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.f5(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.aX(idx) > 0));
}
function $f_sc_SeqOps__sorted__s_math_Ordering__O($thiz, ord) {
  var len = $thiz.i();
  var b = $thiz.dt();
  if ((len === 1)) {
    b.ad($thiz.p());
  } else if ((len > 1)) {
    b.b4(len);
    var arr = new $ac_O(len);
    $thiz.bm(arr, 0, 2147483647);
    $m_ju_Arrays$().g2(arr, ord);
    var i = 0;
    while ((i < len)) {
      b.ad(arr.a[i]);
      i = ((1 + i) | 0);
    }
  }
  return b.ar();
}
function $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O($thiz, f, ord) {
  return $thiz.b5(new $c_s_math_Ordering$$anon$1(f, ord));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.aX(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.q();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.q();
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
  var b = $thiz.ay().aq();
  var it = $thiz.d();
  while (it.j()) {
    b.ad(f.e(it.f()));
  }
  return b.ar();
}
function $f_sc_StrictOptimizedIterableOps__flatMap__F1__O($thiz, f) {
  var b = $thiz.ay().aq();
  var it = $thiz.d();
  while (it.j()) {
    b.b2(f.e(it.f()));
  }
  return b.ar();
}
function $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O($thiz, that) {
  var b = $thiz.ay().aq();
  var it1 = $thiz.d();
  var it2 = that.d();
  while ((it1.j() && it2.j())) {
    b.ad(new $c_T2(it1.f(), it2.f()));
  }
  return b.ar();
}
function $f_sc_StrictOptimizedIterableOps__zipWithIndex__O($thiz) {
  var b = $thiz.ay().aq();
  var i = 0;
  var it = $thiz.d();
  while (it.j()) {
    b.ad(new $c_T2(it.f(), i));
    i = ((1 + i) | 0);
  }
  return b.ar();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.gk = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.sP = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.ab.call(this, it));
});
$p.ab = (function(it) {
  return this.sP(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  gN: 1,
  bS: 1,
  a: 1,
  G: 1
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
$p.dX = (function(elems) {
  return this.kq(elems);
});
$p.qr = (function(ll, f) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef) => (() => {
    var it = new $c_sr_ObjectRef(null);
    var itHasNext = false;
    var rest = new $c_sr_ObjectRef(restRef.D);
    while (((!itHasNext) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest.D) === $m_sci_LazyList$().G)))) {
      it.D = f.e(rest.D.p()).d();
      itHasNext = it.D.j();
      if ((!itHasNext)) {
        rest.D = rest.D.au();
        restRef.D = rest.D;
      }
    }
    if (itHasNext) {
      var x$proxy2 = it.D;
      if ((x$proxy2 === null)) {
        $m_sr_Scala3RunTime$().cE();
      }
      var head = x$proxy2.f();
      rest.D = rest.D.au();
      restRef.D = rest.D;
      return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), head, $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
        var x$proxy3 = it.D;
        if ((x$proxy3 === null)) {
          $m_sr_Scala3RunTime$().cE();
        }
        return this.kQ(x$proxy3, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.qr(rest.D, f))));
      }))));
    } else {
      return this.G;
    }
  }))(new $c_sr_ObjectRef(ll))));
});
$p.ud = (function(ll, n) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef, iRef) => (() => {
    var rest = restRef.D;
    var i = iRef.aw;
    while (((i > 0) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest) === $m_sci_LazyList$().G)))) {
      rest = rest.au();
      restRef.D = rest;
      i = ((i - 1) | 0);
      iRef.aw = i;
    }
    return rest;
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.kq = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.q() === 0) ? this.G : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.qq(coll.d()))))));
});
$p.kQ = (function(it, suffix) {
  return (it.j() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.f(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.kQ(it, suffix))))) : suffix.I());
});
$p.qq = (function(it) {
  return (it.j() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.f(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.qq(it))))) : this.G);
});
$p.pH = (function(start, step) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), start, this.pH(((start + step) | 0), step)))));
});
$p.aq = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.ab = (function(source) {
  return this.kq(source);
});
$p.bN = (function() {
  return this.G;
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  gO: 1,
  a: 1,
  G: 1,
  a0: 1
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
  this.ox = null;
  this.gB = null;
  this.ox = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.gB = outer;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.rH = (function(x) {
  this.gB.ad(x);
  return this;
});
$p.ru = (function(xs) {
  this.gB.b2(xs);
  return this;
});
$p.b4 = (function(size) {
  this.gB.b4(size);
});
$p.ar = (function() {
  return this.ox.e(this.gB.ar());
});
$p.ad = (function(elem) {
  return this.rH(elem);
});
$p.b2 = (function(elems) {
  return this.ru(elems);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  hG: 1,
  H: 1,
  J: 1,
  N: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.em = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.em = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.b4 = (function(size) {
});
$p.rI = (function(elem) {
  this.em.ad(elem);
  return this;
});
$p.rv = (function(xs) {
  this.em.b2(xs);
  return this;
});
$p.ar = (function() {
  return this.em;
});
$p.ad = (function(elem) {
  return this.rI(elem);
});
$p.b2 = (function(elems) {
  return this.rv(elems);
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  ba: 1,
  H: 1,
  J: 1,
  N: 1
}));
/** @constructor */
function $c_scm_Iterable$() {
  this.gk = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_scm_Iterable$;
/** @constructor */
function $h_scm_Iterable$() {
}
$h_scm_Iterable$.prototype = $p;
var $d_scm_Iterable$ = new $TypeData().i($c_scm_Iterable$, "scala.collection.mutable.Iterable$", ({
  hZ: 1,
  bS: 1,
  a: 1,
  G: 1
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
  this.gn = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_scm_HashMap$());
}
$p = $c_scm_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_scm_Map$;
/** @constructor */
function $h_scm_Map$() {
}
$h_scm_Map$.prototype = $p;
var $d_scm_Map$ = new $TypeData().i($c_scm_Map$, "scala.collection.mutable.Map$", ({
  i3: 1,
  bU: 1,
  a: 1,
  aC: 1
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
  this.oN = null;
  this.oN = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d() {
}
$h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = $p;
$p.I = (function() {
  return (0, this.oN)();
});
var $d_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d, "scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d", ({
  jo: 1,
  jn: 1,
  cE: 1,
  aX: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(f) {
  this.oO = null;
  this.oO = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1() {
}
$h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = $p;
$p.e = (function(x0) {
  return (0, this.oO)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1 = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1, "scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1", ({
  jq: 1,
  jp: 1,
  cF: 1,
  i: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(f) {
  this.oP = null;
  this.oP = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7() {
}
$h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = $p;
$p.bL = (function(x0, x1) {
  return (0, this.oP)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7, "scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7", ({
  js: 1,
  jr: 1,
  cG: 1,
  aY: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(f) {
  this.oQ = null;
  this.oQ = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96() {
}
$h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = $p;
$p.gT = (function(x0, x1, x2) {
  return (0, this.oQ)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96, "scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96", ({
  ju: 1,
  jt: 1,
  cH: 1,
  bF: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c(f) {
  this.oR = null;
  this.oR = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c() {
}
$h_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c.prototype = $p;
$p.rO = (function(x0, x1, x2, x3) {
  return (0, this.oR)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c, "scala.scalajs.runtime.AnonFunction4.$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c", ({
  jw: 1,
  jv: 1,
  j3: 1,
  fS: 1
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
$p.cF = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V($thiz) {
  $thiz.gU($m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gV($m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.fd(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.h7(observer);
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz);
    return subscription;
  });
  var when = (!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz));
  if ((this$2.bo || (!when))) {
    var $x_1 = f();
  } else {
    this$2.bo = true;
    try {
      var $x_1 = f();
    } finally {
      this$2.bo = false;
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
  if ((this$3.bo || (!when))) {
    f();
  } else {
    this$3.bo = true;
    try {
      f();
    } finally {
      this$3.bo = false;
      $p_Lcom_raquo_airstream_core_Transaction$onStart$__resolve__V(this$3);
    }
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeInternalObserverNow__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().ql($thiz.ds(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().ql($thiz.dp(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.hj())) {
    $thiz.he();
    $thiz.fd(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.hb();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.hc();
    $thiz.fd(false);
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
  this.l7 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.l7 = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.th = (function(x) {
  return ((x !== null) || false);
});
$p.rU = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.l7, x, _$1);
  }))), (void 0)) : default$1.e(x));
});
$p.ce = (function(x) {
  return this.th(x);
});
$p.bU = (function(x, default$1) {
  return this.rU(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  d1: 1,
  aM: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.iP = $m_Lcom_raquo_airstream_core_Observer$().sT(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.lP = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.lP = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.tj = (function(x) {
  return true;
});
$p.rW = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    this.lP.ui(x, _$1);
  })));
});
$p.ce = (function(x) {
  return this.tj(x);
});
$p.bU = (function(x, default$1) {
  return this.rW(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  di: 1,
  aM: 1,
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
$p.ce = (function(x) {
  return (((typeof x) === "string") || false);
});
$p.bU = (function(x, default$1) {
  return (((typeof x) === "string") ? x : default$1.e(x));
});
var $d_Lcom_raquo_laminar_DomApi$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_DomApi$$anon$2, "com.raquo.laminar.DomApi$$anon$2", ({
  dp: 1,
  aM: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.pi(new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.cc().oY();
  })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.cc().sn();
  }))));
  $thiz.kb((void 0));
  $thiz.ka($m_sci_Map$EmptyMap$());
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.fK() === (void 0))) {
    $thiz.kb($m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener]))));
  } else if (unsafePrepend) {
    var x$1 = $thiz.fK();
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.fK();
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
  var x = $thiz.fK();
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.fK();
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
  var keyItemsWithReason = $thiz.i7().cU(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.c())) {
      var x0 = these.p();
      var x = x0.S;
      if (((x === null) ? (item === null) : $dp_equals__O__Z(x, item))) {
        var x$3 = x0.R;
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
        var h = l$tailLocal1.p();
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
            var x$1 = remaining$tailLocal1.p();
            if (((!(!f(x$1))) !== true)) {
              remaining$tailLocal1 = remaining$tailLocal1.w();
              continue;
            }
            var firstMiss = remaining$tailLocal1;
            var newHead = new $c_sci_$colon$colon(start.p(), $m_sci_Nil$());
            var toProcess = start.w();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.p(), $m_sci_Nil$());
              currentLast.a2 = newElem;
              currentLast = newElem;
              toProcess = toProcess.w();
            }
            var next = firstMiss.w();
            var nextToCopy = next;
            while ((!next.c())) {
              var head = next.p();
              if (((!(!f(head))) !== true)) {
                next = next.w();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.p(), $m_sci_Nil$());
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
  var this$1 = $thiz.i7().cU(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.bM(t$1.S));
  _return$3: {
    var $x_3;
    var l$tailLocal1$1 = this$1;
    while (true) {
      if (l$tailLocal1$1.c()) {
        var $x_3 = $m_sci_Nil$();
        break;
      } else {
        var h$1 = l$tailLocal1$1.p();
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
            var x$2 = remaining$tailLocal1$1.p();
            if (((!(!f$1(x$2))) !== true)) {
              remaining$tailLocal1$1 = remaining$tailLocal1$1.w();
              continue;
            }
            var firstMiss$1 = remaining$tailLocal1$1;
            var newHead$1 = new $c_sci_$colon$colon(start$1.p(), $m_sci_Nil$());
            var toProcess$1 = start$1.w();
            var currentLast$1 = newHead$1;
            while ((toProcess$1 !== firstMiss$1)) {
              var newElem$1 = new $c_sci_$colon$colon(toProcess$1.p(), $m_sci_Nil$());
              currentLast$1.a2 = newElem$1;
              currentLast$1 = newElem$1;
              toProcess$1 = toProcess$1.w();
            }
            var next$1 = firstMiss$1.w();
            var nextToCopy$1 = next$1;
            while ((!next$1.c())) {
              var head$1 = next$1.p();
              if (((!(!f$1(head$1))) !== true)) {
                next$1 = next$1.w();
              } else {
                while ((nextToCopy$1 !== next$1)) {
                  var newElem$2$1 = new $c_sci_$colon$colon(nextToCopy$1.p(), $m_sci_Nil$());
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
    var x0$1 = itemsToAdd.p();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$1), $m_sci_Nil$());
    var t$3 = h$2;
    var rest = itemsToAdd.w();
    while ((rest !== $m_sci_Nil$())) {
      var x0$2 = rest.p();
      var nx = new $c_sci_$colon$colon(f$2(x0$2), $m_sci_Nil$());
      t$3.a2 = nx;
      t$3 = nx;
      rest = rest.w();
    }
    var $x_2 = h$2;
  }
  var newItems = $x_3.p9($x_2);
  var domValues = key.iX.pu(key.mW.e($thiz));
  var f$3 = ((elem) => result.bM(elem));
  _return$5: {
    var $x_5;
    var l$tailLocal1$2 = domValues;
    while (true) {
      if (l$tailLocal1$2.c()) {
        var $x_5 = $m_sci_Nil$();
        break;
      } else {
        var h$3 = l$tailLocal1$2.p();
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
            var x$4 = remaining$tailLocal1$2.p();
            if (((!(!f$3(x$4))) !== true)) {
              remaining$tailLocal1$2 = remaining$tailLocal1$2.w();
              continue;
            }
            var firstMiss$2 = remaining$tailLocal1$2;
            var newHead$2 = new $c_sci_$colon$colon(start$2.p(), $m_sci_Nil$());
            var toProcess$2 = start$2.w();
            var currentLast$2 = newHead$2;
            while ((toProcess$2 !== firstMiss$2)) {
              var newElem$3 = new $c_sci_$colon$colon(toProcess$2.p(), $m_sci_Nil$());
              currentLast$2.a2 = newElem$3;
              currentLast$2 = newElem$3;
              toProcess$2 = toProcess$2.w();
            }
            var next$2 = firstMiss$2.w();
            var nextToCopy$2 = next$2;
            while ((!next$2.c())) {
              var head$2 = next$2.p();
              if (((!(!f$3(head$2))) !== true)) {
                next$2 = next$2.w();
              } else {
                while ((nextToCopy$2 !== next$2)) {
                  var newElem$2$2 = new $c_sci_$colon$colon(nextToCopy$2.p(), $m_sci_Nil$());
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
        var h$4 = l$tailLocal1$3.p();
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
            var x$5 = remaining$tailLocal1$3.p();
            if (((!(!f(x$5))) !== true)) {
              remaining$tailLocal1$3 = remaining$tailLocal1$3.w();
              continue;
            }
            var firstMiss$3 = remaining$tailLocal1$3;
            var newHead$3 = new $c_sci_$colon$colon(start$3.p(), $m_sci_Nil$());
            var toProcess$3 = start$3.w();
            var currentLast$3 = newHead$3;
            while ((toProcess$3 !== firstMiss$3)) {
              var newElem$4 = new $c_sci_$colon$colon(toProcess$3.p(), $m_sci_Nil$());
              currentLast$3.a2 = newElem$4;
              currentLast$3 = newElem$4;
              toProcess$3 = toProcess$3.w();
            }
            var next$3 = firstMiss$3.w();
            var nextToCopy$3 = next$3;
            while ((!next$3.c())) {
              var head$3 = next$3.p();
              if (((!(!f(head$3))) !== true)) {
                next$3 = next$3.w();
              } else {
                while ((nextToCopy$3 !== next$3)) {
                  var newElem$2$3 = new $c_sci_$colon$colon(nextToCopy$3.p(), $m_sci_Nil$());
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
  var nextDomValues = $x_5.p9($x_4);
  $thiz.ka($thiz.i7().eD(key, newItems));
  key.mY.bL($thiz, key.iX.py(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.fJ(), maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.fJ();
  $thiz.ph(maybeNextParent);
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.c()) && (!maybePrevParent.y().cc().c0.c()));
  var isNextParentActive = ((!maybeNextParent.c()) && (!maybeNextParent.y().cc().c0.c()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.c() ? $m_s_None$() : new $c_s_Some(maybeNextParent.y().cc())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.c()) {
    $thiz.kc().s9();
  } else {
    var x0 = maybeNextOwner.y();
    $thiz.kc().un(x0);
  }
}
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  eK: 1,
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
  eP: 1,
  aj: 1,
  a: 1,
  ab: 1,
  a4: 1
}), ((x) => $isByte(x)));
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.eS)));
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
  f1: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f2)));
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
  f3: 1,
  aj: 1,
  a: 1,
  ab: 1,
  a4: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  fa: 1,
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
  fi: 1,
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
  fz: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.nW)) {
    if (($thiz.hE === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.hE;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.A.N));
      try {
        var $x_1 = ((($thiz.hE + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.nV = $x_1;
    $thiz.nW = true;
  }
  return $thiz.nV;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.hE = null;
    this.nV = null;
    this.nW = false;
    this.hE = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  fV: 1,
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
$p.cF = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.c = (function() {
  return (this === $m_s_None$());
});
$p.q = (function() {
  return (this.c() ? 0 : 1);
});
$p.bM = (function(elem) {
  return ((!this.c()) && $m_sr_BoxesRunTime$().l(this.y(), elem));
});
$p.d = (function() {
  return (this.c() ? $m_sc_Iterator$().J : new $c_sc_Iterator$$anon$20(this.y()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gi = 0;
  this.nZ = 0;
  this.nY = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.nY = outer;
  this.gi = 0;
  this.nZ = outer.bu();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.j = (function() {
  return (this.gi < this.nZ);
});
$p.f = (function() {
  var result = this.nY.bv(this.gi);
  this.gi = ((1 + this.gi) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  g0: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.S = null;
  this.R = null;
  this.S = _1;
  this.R = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.bu = (function() {
  return 2;
});
$p.bv = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.t = (function() {
  return (((("(" + this.S) + ",") + this.R) + ")");
});
$p.bw = (function() {
  return "Tuple2";
});
$p.cF = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().f7(this, (-116390334), true);
});
$p.o = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().l(this.S, x$1.S) && $m_sr_BoxesRunTime$().l(this.R, x$1.R))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bI)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bI: 1,
  g1: 1,
  P: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.fq = null;
  this.fr = null;
  this.fs = null;
  this.fq = _1;
  this.fr = _2;
  this.fs = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.cF = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.bu = (function() {
  return 3;
});
$p.bv = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().f7(this, (-192629203), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().l(this.fq, x$0.fq) && $m_sr_BoxesRunTime$().l(this.fr, x$0.fr)) && $m_sr_BoxesRunTime$().l(this.fs, x$0.fs))));
});
$p.bw = (function() {
  return "Tuple3";
});
$p.t = (function() {
  return (((((("(" + this.fq) + ",") + this.fr) + ",") + this.fs) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  bJ: 1,
  d: 1,
  P: 1,
  g2: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.eO = null;
  this.eP = null;
  this.eQ = null;
  this.eR = null;
  this.eO = _1;
  this.eP = _2;
  this.eQ = _3;
  this.eR = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.cF = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.bu = (function() {
  return 4;
});
$p.bv = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().f7(this, (-1542739752), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().l(this.eO, x$0.eO) && $m_sr_BoxesRunTime$().l(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().l(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().l(this.eR, x$0.eR))));
});
$p.bw = (function() {
  return "Tuple4";
});
$p.t = (function() {
  return (((((((("(" + this.eO) + ",") + this.eP) + ",") + this.eQ) + ",") + this.eR) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  bK: 1,
  d: 1,
  P: 1,
  g3: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.ft = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  gd: 1,
  gc: 1,
  a: 1,
  G: 1,
  a0: 1
}));
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.ay().ab($ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), $thiz, f));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.c())) {
    return $thiz.n(0);
  } else {
    throw new $c_ju_NoSuchElementException(("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.bz() : $thiz.t())));
  }
}
function $f_sc_IndexedSeqOps__last__O($thiz) {
  if ((!$thiz.c())) {
    return $thiz.n((($thiz.i() - 1) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("last of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.bz() : $thiz.t())));
  }
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.bz() + "("), ", ", ")");
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
$p.tI = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.q = (function() {
  return 0;
});
$p.f = (function() {
  this.tI();
});
$p.g1 = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  gi: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.o1 = null;
  this.gl = false;
  this.o1 = a$2;
  this.gl = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.j = (function() {
  return (!this.gl);
});
$p.f = (function() {
  if (this.gl) {
    return $m_sc_Iterator$().J.f();
  } else {
    this.gl = true;
    return this.o1;
  }
});
$p.g1 = (function(from, until) {
  return (((this.gl || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().J : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  gj: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(f$8, outer) {
  this.o4 = null;
  this.o6 = null;
  this.hH = false;
  this.o5 = null;
  this.jC = null;
  this.o4 = f$8;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jC = outer;
  this.o6 = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.hH = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.j = (function() {
  while (true) {
    if (this.hH) {
      return true;
    } else if (this.jC.j()) {
      var a = this.jC.f();
      if ((!this.o6.i2(this.o4.e(a)))) {
        continue;
      }
      this.o5 = a;
      this.hH = true;
      return true;
    } else {
      return false;
    }
  }
});
$p.f = (function() {
  if (this.j()) {
    this.hH = false;
    return this.o5;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  gm: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(f$9, outer) {
  this.o7 = null;
  this.hI = null;
  this.o7 = f$9;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.hI = outer;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.q = (function() {
  return this.hI.q();
});
$p.j = (function() {
  return this.hI.j();
});
$p.f = (function() {
  return this.o7.e(this.hI.f());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  gn: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bO instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bO;
      $thiz.bO = c.bO;
      $thiz.e8 = c.e8;
      if ((c.cm !== null)) {
        if (($thiz.cl === null)) {
          $thiz.cl = c.cl;
        }
        var x$proxy10 = c.cl;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().cE();
        }
        x$proxy10.gm = $thiz.cm;
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
      $thiz.bO = null;
      $thiz.cl = null;
      return false;
    } else {
      $thiz.bO = $thiz.cm.t5();
      if (($thiz.cl === $thiz.cm)) {
        var x$proxy12 = $thiz.cl;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().cE();
        }
        $thiz.cl = x$proxy12.gm;
      }
      $thiz.cm = $thiz.cm.gm;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.e8) {
        return true;
      } else {
        if ((!(($thiz.bO !== null) && $thiz.bO.j()))) {
          continue;
        }
        $thiz.e8 = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.bO = null;
  this.cm = null;
  this.cl = null;
  this.e8 = false;
  this.bO = from;
  this.cm = null;
  this.cl = null;
  this.e8 = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.j = (function() {
  if (this.e8) {
    return true;
  } else if ((this.bO !== null)) {
    if (this.bO.j()) {
      this.e8 = true;
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
    this.e8 = false;
    var x$proxy13 = this.bO;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().cE();
    }
    return x$proxy13.f();
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
$p.gW = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.cm === null)) {
    this.cm = c;
    this.cl = c;
  } else {
    var x$proxy14 = this.cl;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().cE();
    }
    x$proxy14.gm = c;
    this.cl = c;
  }
  if ((this.bO === null)) {
    this.bO = $m_sc_Iterator$().J;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bT)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  bT: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.dE > 0)) {
    if ($thiz.e9.j()) {
      $thiz.e9.f();
      $thiz.dE = (($thiz.dE - 1) | 0);
    } else {
      $thiz.dE = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.c3 < 0)) {
    return (-1);
  } else {
    var that = (($thiz.c3 - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.e9 = null;
  this.c3 = 0;
  this.dE = 0;
  this.e9 = underlying;
  this.c3 = limit;
  this.dE = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.q = (function() {
  var size = this.e9.q();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.dE) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.c3 < 0)) {
      return dropSize;
    } else {
      var x = this.c3;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.j = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.c3 !== 0) && this.e9.j());
});
$p.f = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.c3 > 0)) {
    this.c3 = ((this.c3 - 1) | 0);
    return this.e9.f();
  } else {
    return ((this.c3 < 0) ? this.e9.f() : $m_sc_Iterator$().J.f());
  }
});
$p.g1 = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.c3 < 0)) {
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
    this.c3 = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.e9, ((sum - 2147483647) | 0), rest))));
  } else {
    this.dE = sum;
    this.c3 = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  gp: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
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
    var scout = $thiz.kU();
    while ((!scout.c())) {
      these = scout;
      scout = scout.w();
    }
    return these.p();
  }
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len, 0, $thiz));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.aX(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.pw(n);
  if (skipped.c()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.p();
}
function $f_sc_LinearSeqOps__foldLeft__O__F2__O($thiz, z, op) {
  var acc = z;
  var these = $thiz;
  while ((!these.c())) {
    acc = op.bL(acc, these.p());
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
      if ((((!a$tailLocal1.c()) && (!b$tailLocal1.c())) && $m_sr_BoxesRunTime$().l(a$tailLocal1.p(), b$tailLocal1.p()))) {
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
  this.jD = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jD = outer.d();
}
$p = $c_sc_MapOps$$anon$3.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_MapOps$$anon$3;
/** @constructor */
function $h_sc_MapOps$$anon$3() {
}
$h_sc_MapOps$$anon$3.prototype = $p;
$p.j = (function() {
  return this.jD.j();
});
$p.f = (function() {
  return this.jD.f().R;
});
var $d_sc_MapOps$$anon$3 = new $TypeData().i($c_sc_MapOps$$anon$3, "scala.collection.MapOps$$anon$3", ({
  gr: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.gs = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.gs = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.j = (function() {
  return (!this.gs.c());
});
$p.f = (function() {
  var r = this.gs.p();
  this.gs = this.gs.w();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  gy: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.bp = 0;
  $thiz.fw = 0;
  $thiz.bD = (-1);
  return $thiz;
}
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.dd === null)) {
    $thiz.dd = new $ac_I(($m_sci_Node$().gA << 1));
    $thiz.fx = new ($d_sci_Node.r().C)($m_sci_Node$().gA);
  }
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.ky()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.ii()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.dF = node;
  $thiz.bp = 0;
  $thiz.fw = node.kM();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bD = ((1 + $thiz.bD) | 0);
  var cursorIndex = ($thiz.bD << 1);
  var lengthIndex = ((1 + ($thiz.bD << 1)) | 0);
  $thiz.fx.a[$thiz.bD] = node;
  $thiz.dd.a[cursorIndex] = 0;
  $thiz.dd.a[lengthIndex] = node.kJ();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bD = (($thiz.bD - 1) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bD >= 0)) {
    var cursorIndex = ($thiz.bD << 1);
    var lengthIndex = ((1 + ($thiz.bD << 1)) | 0);
    var nodeCursor = $thiz.dd.a[cursorIndex];
    if ((nodeCursor < $thiz.dd.a[lengthIndex])) {
      var \u03b41$ = $thiz.dd;
      \u03b41$.a[cursorIndex] = ((1 + \u03b41$.a[cursorIndex]) | 0);
      var nextNode = $thiz.fx.a[$thiz.bD].ku(nodeCursor);
      if (nextNode.ky()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.ii()) {
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
  this.bp = 0;
  this.fw = 0;
  this.dF = null;
  this.bD = 0;
  this.dd = null;
  this.fx = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.j = (function() {
  return ((this.bp < this.fw) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.ed = (-1);
  $thiz.c4 = (-1);
  $thiz.gv = new $ac_I(((1 + $m_sci_Node$().gA) | 0));
  $thiz.gw = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().gA) | 0));
  return $thiz;
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz;
}
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.hN = node;
  $thiz.ed = ((node.kM() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.c4 = ((1 + $thiz.c4) | 0);
  $thiz.gw.a[$thiz.c4] = node;
  $thiz.gv.a[$thiz.c4] = ((node.kJ() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.c4 = (($thiz.c4 - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.c4 >= 0)) {
    var nodeCursor = $thiz.gv.a[$thiz.c4];
    $thiz.gv.a[$thiz.c4] = ((nodeCursor - 1) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.gw.a[$thiz.c4].ku(nodeCursor));
    } else {
      var currNode = $thiz.gw.a[$thiz.c4];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.ii()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
/** @constructor */
function $c_sci_ChampBaseReverseIterator() {
  this.ed = 0;
  this.hN = null;
  this.c4 = 0;
  this.gv = null;
  this.gw = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.j = (function() {
  return ((this.ed >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.fy !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.u(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.u(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.gX(bitpos);
  var idx = (dataIx << 1);
  var src = bm.az;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.u(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.u(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bP, dataIx, originalHash);
  bm.X = (bm.X | bitpos);
  bm.az = dst;
  bm.bP = dstHashes;
  bm.b8 = ((1 + bm.b8) | 0);
  bm.bC = ((bm.bC + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.fy = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.de = $thiz.de.pj();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.fy = null;
  this.de = null;
  this.de = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().nU, $m_s_Array$EmptyArrays$().jy, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.b4 = (function(size) {
});
$p.g5 = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().ey(keyHash, shift);
    var bitpos = $m_sci_Node$().dY(mask);
    if (((mapNode.X & bitpos) !== 0)) {
      var index = $m_sci_Node$().cA(mapNode.X, mask, bitpos);
      var key0 = mapNode.dr(index);
      var key0UnimprovedHash = mapNode.fQ(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().l(key0, key))) {
        mapNode.az.a[((1 + (index << 1)) | 0)] = value;
        return (void 0);
      } else {
        var value0 = mapNode.cy(index);
        var key0Hash = $m_sc_Hashing$().cz(key0UnimprovedHash);
        var subNodeNew = mapNode.kI(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.tC(bitpos, key0Hash, subNodeNew);
        return (void 0);
      }
    } else if (((mapNode.a5 & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cA(mapNode.a5, mask, bitpos);
      var subNode = mapNode.cT(index$2);
      var beforeSize = subNode.aY();
      var beforeHash = subNode.es();
      this.g5(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.b8 = ((mapNode.b8 + ((subNode.aY() - beforeSize) | 0)) | 0);
      mapNode.bC = ((mapNode.bC + ((subNode.es() - beforeHash) | 0)) | 0);
      return (void 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
      return (void 0);
    }
  }
  if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.fR(key);
    if ((index$3 < 0)) {
      mapNode.af = mapNode.af.er(new $c_T2(key, value));
      return (void 0);
    } else {
      mapNode.af = mapNode.af.eC(index$3, new $c_T2(key, value));
      return (void 0);
    }
  }
  throw new $c_s_MatchError(mapNode);
});
$p.kP = (function() {
  if ((this.de.b8 === 0)) {
    return $m_sci_HashMap$().gx;
  } else if ((this.fy !== null)) {
    return this.fy;
  } else {
    this.fy = new $c_sci_HashMap(this.de);
    return this.fy;
  }
});
$p.p5 = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().E(elem.S);
  var im = $m_sc_Hashing$().cz(h);
  this.g5(this.de, elem.S, elem.R, h, im, 0);
  return this;
});
$p.f4 = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().E(key);
  this.g5(this.de, key, value, originalHash, $m_sc_Hashing$().cz(originalHash), 0);
  return this;
});
$p.k3 = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(xs, this);
  } else if ((xs instanceof $c_scm_HashMap)) {
    var iter = xs.q8();
    while (iter.j()) {
      var next = iter.f();
      var improvedHash = next.dl;
      var originalHash = (improvedHash ^ ((improvedHash >>> 16) | 0));
      var hash = $m_sc_Hashing$().cz(originalHash);
      this.g5(this.de, next.en, next.bS, originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.pA();
    while (iter$2.j()) {
      var next$2 = iter$2.f();
      var originalHash$2 = xs.v6(next$2.pQ());
      var hash$2 = $m_sc_Hashing$().cz(originalHash$2);
      this.g5(this.de, next$2.q0(), next$2.uL(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.cS(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => this.f4(key$2, value$2))));
  } else {
    var it = xs.d();
    while (it.j()) {
      this.p5(it.f());
    }
  }
  return this;
});
$p.ar = (function() {
  return this.kP();
});
$p.ad = (function(elem) {
  return this.p5(elem);
});
$p.b2 = (function(elems) {
  return this.k3(elems);
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  gJ: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.fz = null;
  this.on = null;
  this.s8();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.b4 = (function(size) {
});
$p.s8 = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.on = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kk()))));
  this.fz = deferred;
});
$p.ub = (function() {
  this.fz.kA(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().G)));
  return this.on;
});
$p.rE = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.fz.kA(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kk())))));
  })));
  this.fz = deferred;
  return this;
});
$p.rs = (function(xs) {
  if ((xs.q() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.fz.kA(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().kQ(xs.d(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kk()))))));
    this.fz = deferred;
  }
  return this;
});
$p.ar = (function() {
  return this.ub();
});
$p.ad = (function(elem) {
  return this.rE(elem);
});
$p.b2 = (function(elems) {
  return this.rs(elems);
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  gQ: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.fA = null;
  this.fA = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.j = (function() {
  return (!($p_sci_LazyList__evaluated__sci_LazyList(this.fA) === $m_sci_LazyList$().G));
});
$p.f = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this.fA) === $m_sci_LazyList$().G)) {
    return $m_sc_Iterator$().J.f();
  } else {
    var res = this.fA.p();
    this.fA = this.fA.au();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  gS: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
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
$p.dX = (function(elems) {
  return $m_sci_Nil$().iu(elems);
});
$p.aq = (function() {
  return new $c_scm_ListBuffer();
});
$p.ab = (function(source) {
  return $m_sci_Nil$().iu(source);
});
$p.bN = (function() {
  return $m_sci_Nil$();
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  gV: 1,
  a: 1,
  G: 1,
  a0: 1,
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
  $thiz.eX = outer;
  $thiz.dJ = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dJ = 0;
  this.eX = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.j = (function() {
  return (this.dJ < 2);
});
$p.f = (function() {
  matchResult5: {
    var result;
    var x23 = this.dJ;
    if ((x23 === 0)) {
      var result = this.bY(this.eX.co, this.eX.dH);
      break matchResult5;
    }
    if ((x23 === 1)) {
      var result = this.bY(this.eX.cp, this.eX.dI);
      break matchResult5;
    }
    var result = $m_sc_Iterator$().J.f();
  }
  this.dJ = ((1 + this.dJ) | 0);
  return result;
});
$p.ev = (function(n) {
  this.dJ = ((this.dJ + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.dK = outer;
  $thiz.dL = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.dL = 0;
  this.dK = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.j = (function() {
  return (this.dL < 3);
});
$p.f = (function() {
  var result;
  switch (this.dL) {
    case 0: {
      var result = this.bY(this.dK.c5, this.dK.dg);
      break;
    }
    case 1: {
      var result = this.bY(this.dK.c6, this.dK.dh);
      break;
    }
    case 2: {
      var result = this.bY(this.dK.c7, this.dK.di);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().J.f();
    }
  }
  this.dL = ((1 + this.dL) | 0);
  return result;
});
$p.ev = (function(n) {
  this.dL = ((this.dL + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.cL = outer;
  $thiz.dM = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.dM = 0;
  this.cL = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.j = (function() {
  return (this.dM < 4);
});
$p.f = (function() {
  var result;
  switch (this.dM) {
    case 0: {
      var result = this.bY(this.cL.bE, this.cL.cq);
      break;
    }
    case 1: {
      var result = this.bY(this.cL.bF, this.cL.cr);
      break;
    }
    case 2: {
      var result = this.bY(this.cL.bG, this.cL.cs);
      break;
    }
    case 3: {
      var result = this.bY(this.cL.bH, this.cL.ct);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().J.f();
    }
  }
  this.dM = ((1 + this.dM) | 0);
  return result;
});
$p.ev = (function(n) {
  this.dM = ((this.dM + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.dN = null;
  this.gy = false;
  this.eY = null;
  this.dN = $m_sci_Map$EmptyMap$();
  this.gy = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.b4 = (function(size) {
});
$p.qm = (function() {
  return (this.gy ? this.eY.kP() : this.dN);
});
$p.rC = (function(key, value) {
  if (this.gy) {
    this.eY.f4(key, value);
  } else if ((this.dN.aY() < 4)) {
    this.dN = this.dN.eD(key, value);
  } else if (this.dN.bM(key)) {
    this.dN = this.dN.eD(key, value);
  } else {
    this.gy = true;
    if ((this.eY === null)) {
      this.eY = new $c_sci_HashMapBuilder();
    }
    this.dN.s6(this.eY);
    this.eY.f4(key, value);
  }
  return this;
});
$p.oZ = (function(xs) {
  return (this.gy ? (this.eY.k3(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.ar = (function() {
  return this.qm();
});
$p.ad = (function(elem) {
  return this.rC(elem.S, elem.R);
});
$p.b2 = (function(elems) {
  return this.oZ(elems);
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  h5: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_sci_Seq$() {
  this.ea = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$());
}
$p = $c_sci_Seq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
}
$h_sci_Seq$.prototype = $p;
$p.fO = (function(it) {
  return ($is_sci_Seq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.id.call(this, it));
});
$p.id = (function(it) {
  return this.fO(it);
});
$p.ab = (function(source) {
  return this.fO(source);
});
var $d_sci_Seq$ = new $TypeData().i($c_sci_Seq$, "scala.collection.immutable.Seq$", ({
  hd: 1,
  b0: 1,
  a: 1,
  G: 1,
  a0: 1
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
  this.or = 0;
  this.os = null;
  $n_sci_Vector$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().pX($m_jl_System$SystemProperties$().kw("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 250;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.or = $x_1;
  this.os = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.dX = (function(elems) {
  return this.kr(elems);
});
$p.kr = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.q();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((((knownSize - 1) | 0) >>> 0) <= 31)) {
      matchResult3: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.ap().aI();
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
      return new $c_sci_VectorBuilder().p0(it).qn();
    }
  }
});
$p.bN = (function() {
  return $m_sci_Vector0$();
});
$p.ab = (function(source) {
  return this.kr(source);
});
$p.aq = (function() {
  return new $c_sci_VectorBuilder();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  hk: 1,
  a: 1,
  G: 1,
  a0: 1,
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
  if (($thiz.O >= 6)) {
    a = $thiz.aS;
    var i = (($thiz.K >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.u(i, dest, 0, length);
    }
    var num = $thiz.K;
    var t = (((num >> 24) >>> 7) | 0);
    var newOffset = (((33554431 & ((num + t) | 0)) - t) | 0);
    $thiz.B = (($thiz.B - (($thiz.K - newOffset) | 0)) | 0);
    $thiz.K = newOffset;
    if (((($thiz.B >>> 25) | 0) === 0)) {
      $thiz.O = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.O >= 5)) {
    if ((a === null)) {
      a = $thiz.a3;
    }
    var i$2 = (31 & (($thiz.K >>> 20) | 0));
    if (($thiz.O === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.u(i$2, dest$1, 0, length$1);
      }
      $thiz.a3 = a;
      var num$1 = $thiz.K;
      var t$1 = (((num$1 >> 19) >>> 12) | 0);
      var newOffset$1 = (((1048575 & ((num$1 + t$1) | 0)) - t$1) | 0);
      $thiz.B = (($thiz.B - (($thiz.K - newOffset$1) | 0)) | 0);
      $thiz.K = newOffset$1;
      if (((($thiz.B >>> 20) | 0) === 0)) {
        $thiz.O = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().ae(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.O >= 4)) {
    if ((a === null)) {
      a = $thiz.T;
    }
    var i$3 = (31 & (($thiz.K >>> 15) | 0));
    if (($thiz.O === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.u(i$3, dest$2, 0, length$2);
      }
      $thiz.T = a;
      var num$2 = $thiz.K;
      var t$2 = (((num$2 >> 14) >>> 17) | 0);
      var newOffset$2 = (((32767 & ((num$2 + t$2) | 0)) - t$2) | 0);
      $thiz.B = (($thiz.B - (($thiz.K - newOffset$2) | 0)) | 0);
      $thiz.K = newOffset$2;
      if (((($thiz.B >>> 15) | 0) === 0)) {
        $thiz.O = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().ae(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.O >= 3)) {
    if ((a === null)) {
      a = $thiz.M;
    }
    var i$4 = (31 & (($thiz.K >>> 10) | 0));
    if (($thiz.O === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.u(i$4, dest$3, 0, length$3);
      }
      $thiz.M = a;
      var num$3 = $thiz.K;
      var t$3 = (((num$3 >> 9) >>> 22) | 0);
      var newOffset$3 = (((1023 & ((num$3 + t$3) | 0)) - t$3) | 0);
      $thiz.B = (($thiz.B - (($thiz.K - newOffset$3) | 0)) | 0);
      $thiz.K = newOffset$3;
      if (((($thiz.B >>> 10) | 0) === 0)) {
        $thiz.O = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().ae(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.O >= 2)) {
    if ((a === null)) {
      a = $thiz.H;
    }
    var i$5 = (31 & (($thiz.K >>> 5) | 0));
    if (($thiz.O === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.u(i$5, dest$4, 0, length$4);
      }
      $thiz.H = a;
      var num$4 = $thiz.K;
      var t$4 = (((num$4 >> 4) >>> 27) | 0);
      var newOffset$4 = (((31 & ((num$4 + t$4) | 0)) - t$4) | 0);
      $thiz.B = (($thiz.B - (($thiz.K - newOffset$4) | 0)) | 0);
      $thiz.K = newOffset$4;
      if (((($thiz.B >>> 5) | 0) === 0)) {
        $thiz.O = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().ae(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.O >= 1)) {
    if ((a === null)) {
      a = $thiz.Y;
    }
    var i$6 = (31 & $thiz.K);
    if (($thiz.O === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.u(i$6, dest$5, 0, length$5);
      }
      $thiz.Y = a;
      $thiz.N = (($thiz.N - $thiz.K) | 0);
      $thiz.K = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().ae(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.hP = false;
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
    data.u(0, dest, destPos, copy1);
    $thiz.N = (($thiz.N + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.Y;
      data.u(copy1, dest$1, 0, copy2);
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
      var a = (31 & ((((1024 - $thiz.B) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.B >>> 5) | 0));
      var dest = $thiz.H;
      slice.u(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.H;
        slice.u(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      var num = $thiz.B;
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
      var a$1 = (31 & ((((32768 - $thiz.B) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.B >>> 10) | 0));
      var dest$2 = $thiz.M;
      slice.u(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.M;
        slice.u(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      var num$1 = $thiz.B;
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
      var a$2 = (31 & ((((1048576 - $thiz.B) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.B >>> 15) | 0));
      var dest$4 = $thiz.T;
      slice.u(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.T;
        slice.u(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      var num$2 = $thiz.B;
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
      var a$3 = (31 & ((((33554432 - $thiz.B) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.B >>> 20) | 0));
      var dest$6 = $thiz.a3;
      slice.u(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.a3;
        slice.u(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      var num$3 = $thiz.B;
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
      var destPos$5 = (($thiz.B >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.aS;
      slice.u(0, dest$8, destPos$5, sl);
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
      $m_sci_VectorStatics$().km(((x37 - 2) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((data$3) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$3);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.B) | 0);
  var xor = (idx ^ $thiz.B);
  $thiz.B = idx;
  $thiz.N = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.B + n) | 0);
    var xor = (idx ^ $thiz.B);
    $thiz.B = idx;
    $thiz.N = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.Y) + ", a2=") + $thiz.H) + ", a3=") + $thiz.M) + ", a4=") + $thiz.T) + ", a5=") + $thiz.a3) + ", a6=") + $thiz.aS) + ", depth=") + $thiz.O));
  } else if ((xor < 1024)) {
    if (($thiz.O <= 1)) {
      $thiz.H = new ($d_O.r().r().C)(32);
      $thiz.H.a[0] = $thiz.Y;
      $thiz.O = 2;
    }
    $thiz.Y = new $ac_O(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.Y;
  } else if ((xor < 32768)) {
    if (($thiz.O <= 2)) {
      $thiz.M = new ($d_O.r().r().r().C)(32);
      $thiz.M.a[0] = $thiz.H;
      $thiz.O = 3;
    }
    $thiz.Y = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.Y;
    $thiz.M.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
  } else if ((xor < 1048576)) {
    if (($thiz.O <= 3)) {
      $thiz.T = new ($d_O.r().r().r().r().C)(32);
      $thiz.T.a[0] = $thiz.M;
      $thiz.O = 4;
    }
    $thiz.Y = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.M = new ($d_O.r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.Y;
    $thiz.M.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.T.a[(31 & ((idx >>> 15) | 0))] = $thiz.M;
  } else if ((xor < 33554432)) {
    if (($thiz.O <= 4)) {
      $thiz.a3 = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.a3.a[0] = $thiz.T;
      $thiz.O = 5;
    }
    $thiz.Y = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.M = new ($d_O.r().r().r().C)(32);
    $thiz.T = new ($d_O.r().r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.Y;
    $thiz.M.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.T.a[(31 & ((idx >>> 15) | 0))] = $thiz.M;
    $thiz.a3.a[(31 & ((idx >>> 20) | 0))] = $thiz.T;
  } else {
    if (($thiz.O <= 5)) {
      $thiz.aS = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aS.a[0] = $thiz.a3;
      $thiz.O = 6;
    }
    $thiz.Y = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.M = new ($d_O.r().r().r().C)(32);
    $thiz.T = new ($d_O.r().r().r().r().C)(32);
    $thiz.a3 = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.Y;
    $thiz.M.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.T.a[(31 & ((idx >>> 15) | 0))] = $thiz.M;
    $thiz.a3.a[(31 & ((idx >>> 20) | 0))] = $thiz.T;
    $thiz.aS.a[((idx >>> 25) | 0)] = $thiz.a3;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aS = null;
  this.a3 = null;
  this.T = null;
  this.M = null;
  this.H = null;
  this.Y = null;
  this.N = 0;
  this.B = 0;
  this.K = 0;
  this.hP = false;
  this.O = 0;
  this.Y = new $ac_O(32);
  this.N = 0;
  this.B = 0;
  this.K = 0;
  this.hP = false;
  this.O = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.b4 = (function(size) {
});
$p.t9 = (function(v) {
  var x28 = v.dw();
  switch (x28) {
    case 0: {
      break;
    }
    case 1: {
      this.O = 1;
      var i = v.h.a.length;
      this.N = (31 & i);
      this.B = ((i - this.N) | 0);
      var a = v.h;
      this.Y = ((a.a.length === 32) ? a : $m_ju_Arrays$().ae(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.by;
      var a$1 = v.k;
      this.Y = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().ae(a$1, 0, 32));
      this.O = 2;
      this.K = ((32 - v.bR) | 0);
      var i$1 = ((v.m + this.K) | 0);
      this.N = (31 & i$1);
      this.B = ((i$1 - this.N) | 0);
      this.H = new ($d_O.r().r().C)(32);
      this.H.a[0] = v.h;
      var dest = this.H;
      var length = d2.a.length;
      d2.u(0, dest, 1, length);
      this.H.a[((1 + d2.a.length) | 0)] = this.Y;
      break;
    }
    case 5: {
      var d3 = v.bc;
      var s2 = v.bd;
      var a$2 = v.k;
      this.Y = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().ae(a$2, 0, 32));
      this.O = 3;
      this.K = ((1024 - v.br) | 0);
      var i$2 = ((v.m + this.K) | 0);
      this.N = (31 & i$2);
      this.B = ((i$2 - this.N) | 0);
      this.M = new ($d_O.r().r().r().C)(32);
      this.M.a[0] = $m_sci_VectorStatics$().dn(v.h, v.bJ);
      var dest$1 = this.M;
      var length$1 = d3.a.length;
      d3.u(0, dest$1, 1, length$1);
      this.H = $m_ju_Arrays$().W(s2, 32);
      this.M.a[((1 + d3.a.length) | 0)] = this.H;
      this.H.a[s2.a.length] = this.Y;
      break;
    }
    case 7: {
      var d4 = v.aK;
      var s3 = v.aM;
      var s2$2 = v.aL;
      var a$3 = v.k;
      this.Y = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().ae(a$3, 0, 32));
      this.O = 4;
      this.K = ((32768 - v.b1) | 0);
      var i$3 = ((v.m + this.K) | 0);
      this.N = (31 & i$3);
      this.B = ((i$3 - this.N) | 0);
      this.T = new ($d_O.r().r().r().r().C)(32);
      this.T.a[0] = $m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn(v.h, v.bj), v.bk);
      var dest$2 = this.T;
      var length$2 = d4.a.length;
      d4.u(0, dest$2, 1, length$2);
      this.M = $m_ju_Arrays$().W(s3, 32);
      this.H = $m_ju_Arrays$().W(s2$2, 32);
      this.T.a[((1 + d4.a.length) | 0)] = this.M;
      this.M.a[s3.a.length] = this.H;
      this.H.a[s2$2.a.length] = this.Y;
      break;
    }
    case 9: {
      var d5 = v.ag;
      var s4 = v.aj;
      var s3$2 = v.ai;
      var s2$3 = v.ah;
      var a$4 = v.k;
      this.Y = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().ae(a$4, 0, 32));
      this.O = 5;
      this.K = ((1048576 - v.aD) | 0);
      var i$4 = ((v.m + this.K) | 0);
      this.N = (31 & i$4);
      this.B = ((i$4 - this.N) | 0);
      this.a3 = new ($d_O.r().r().r().r().r().C)(32);
      this.a3.a[0] = $m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn(v.h, v.aP), v.aQ), v.aR);
      var dest$3 = this.a3;
      var length$3 = d5.a.length;
      d5.u(0, dest$3, 1, length$3);
      this.T = $m_ju_Arrays$().W(s4, 32);
      this.M = $m_ju_Arrays$().W(s3$2, 32);
      this.H = $m_ju_Arrays$().W(s2$3, 32);
      this.a3.a[((1 + d5.a.length) | 0)] = this.T;
      this.T.a[s4.a.length] = this.M;
      this.M.a[s3$2.a.length] = this.H;
      this.H.a[s2$3.a.length] = this.Y;
      break;
    }
    case 11: {
      var d6 = v.a6;
      var s5 = v.aa;
      var s4$2 = v.a9;
      var s3$3 = v.a8;
      var s2$4 = v.a7;
      var a$5 = v.k;
      this.Y = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().ae(a$5, 0, 32));
      this.O = 6;
      this.K = ((33554432 - v.av) | 0);
      var i$5 = ((v.m + this.K) | 0);
      this.N = (31 & i$5);
      this.B = ((i$5 - this.N) | 0);
      this.aS = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aS.a[0] = $m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn(v.h, v.aE), v.aF), v.aG), v.aH);
      var dest$4 = this.aS;
      var length$4 = d6.a.length;
      d6.u(0, dest$4, 1, length$4);
      this.a3 = $m_ju_Arrays$().W(s5, 32);
      this.T = $m_ju_Arrays$().W(s4$2, 32);
      this.M = $m_ju_Arrays$().W(s3$3, 32);
      this.H = $m_ju_Arrays$().W(s2$4, 32);
      this.aS.a[((1 + d6.a.length) | 0)] = this.a3;
      this.a3.a[s5.a.length] = this.T;
      this.T.a[s4$2.a.length] = this.M;
      this.M.a[s3$3.a.length] = this.H;
      this.H.a[s2$4.a.length] = this.Y;
      break;
    }
    default: {
      throw new $c_s_MatchError(x28);
    }
  }
  if (((this.N === 0) && (this.B > 0))) {
    this.N = 32;
    this.B = ((this.B - 32) | 0);
  }
  return this;
});
$p.rF = (function(elem) {
  if ((this.N === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.Y.a[this.N] = elem;
  this.N = ((1 + this.N) | 0);
  return this;
});
$p.p0 = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.N === 0) && (this.B === 0)) && (!this.hP)) ? this.t9(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.qn = (function() {
  if (this.hP) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.N + this.B) | 0);
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
    var data = $m_ju_Arrays$().ae(this.H, 1, i2);
    var prefix1 = this.H.a[0];
    var a$1 = this.H.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().W(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.K) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & ((len - 1) | 0));
    var i2$2 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3 = ((((len - 1) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().ae(this.M, 1, i3);
    var a$2 = this.M.a[0];
    var prefix2 = $m_ju_Arrays$().ae(a$2, 1, a$2.a.length);
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
    var data$3 = $m_ju_Arrays$().ae(this.T, 1, i4);
    var a$4 = this.T.a[0];
    var prefix3 = $m_ju_Arrays$().ae(a$4, 1, a$4.a.length);
    var a$5 = this.T.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().ae(a$5, 1, a$5.a.length);
    var prefix1$3 = this.T.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().W(this.T.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().W(this.T.a[i4].a[i3$2], i2$3);
    var a$6 = this.T.a[i4].a[i3$2].a[i2$3];
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
    var data$4 = $m_ju_Arrays$().ae(this.a3, 1, i5);
    var a$7 = this.a3.a[0];
    var prefix4 = $m_ju_Arrays$().ae(a$7, 1, a$7.a.length);
    var a$8 = this.a3.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().ae(a$8, 1, a$8.a.length);
    var a$9 = this.a3.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().ae(a$9, 1, a$9.a.length);
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
    var data$5 = $m_ju_Arrays$().ae(this.aS, 1, i6);
    var a$11 = this.aS.a[0];
    var prefix5 = $m_ju_Arrays$().ae(a$11, 1, a$11.a.length);
    var a$12 = this.aS.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().ae(a$12, 1, a$12.a.length);
    var a$13 = this.aS.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().ae(a$13, 1, a$13.a.length);
    var a$14 = this.aS.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().ae(a$14, 1, a$14.a.length);
    var prefix1$5 = this.aS.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().W(this.aS.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().W(this.aS.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().W(this.aS.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().W(this.aS.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.aS.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().W(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.t = (function() {
  return (((((((("VectorBuilder(len1=" + this.N) + ", lenRest=") + this.B) + ", offset=") + this.K) + ", depth=") + this.O) + ")");
});
$p.ad = (function(elem) {
  return this.rF(elem);
});
$p.b2 = (function(elems) {
  return this.p0(elems);
});
$p.ar = (function() {
  return this.qn();
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  hs: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.ou = null;
  $n_scm_ArrayBuffer$ = this;
  this.ou = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.dX = (function(elems) {
  return this.pJ(elems);
});
$p.pJ = (function(coll) {
  var k = coll.q();
  if ((k >= 0)) {
    var array = this.qs(this.ou, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bm(array, 0, 2147483647) : coll.d().bm(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).p1(coll);
  }
});
$p.aq = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.ua = (function(arrayLen, targetLen) {
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
$p.qs = (function(array, curSize, targetSize) {
  var newLen = this.ua(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.u(0, res, 0, curSize);
    return res;
  }
});
$p.ab = (function(source) {
  return this.pJ(source);
});
$p.bN = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  hy: 1,
  a: 1,
  G: 1,
  a0: 1,
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
  this.em = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.b4 = (function(size) {
  this.em.b4(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  hz: 1,
  ba: 1,
  H: 1,
  J: 1,
  N: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.ea = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  hF: 1,
  b0: 1,
  a: 1,
  G: 1,
  a0: 1
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
  $thiz.fF = outer;
  $thiz.dR = 0;
  $thiz.dk = null;
  $thiz.fG = outer.P.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashMap$HashMapIterator() {
  this.dR = 0;
  this.dk = null;
  this.fG = 0;
  this.fF = null;
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
    while ((this.dR < this.fG)) {
      var n = this.fF.P.a[this.dR];
      this.dR = ((1 + this.dR) | 0);
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
      $m_sr_Scala3RunTime$().cE();
    }
    var r = this.ib(x$proxy14);
    var x$proxy15 = this.dk;
    if ((x$proxy15 === null)) {
      $m_sr_Scala3RunTime$().cE();
    }
    this.dk = x$proxy15.aU;
    return r;
  }
});
/** @constructor */
function $c_scm_HashSet$$anon$4(initialCapacity$1, loadFactor$1) {
  this.em = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.b4 = (function(size) {
  this.em.b4(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  hV: 1,
  ba: 1,
  H: 1,
  J: 1,
  N: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.gE = outer;
  $thiz.ep = 0;
  $thiz.dS = null;
  $thiz.gF = outer.be.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.ep = 0;
  this.dS = null;
  this.gF = 0;
  this.gE = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.j = (function() {
  if ((this.dS !== null)) {
    return true;
  } else {
    while ((this.ep < this.gF)) {
      var n = this.gE.be.a[this.ep];
      this.ep = ((1 + this.ep) | 0);
      if ((n !== null)) {
        this.dS = n;
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
    var x$proxy10 = this.dS;
    if ((x$proxy10 === null)) {
      $m_sr_Scala3RunTime$().cE();
    }
    var r = this.kl(x$proxy10);
    var x$proxy11 = this.dS;
    if ((x$proxy11 === null)) {
      $m_sr_Scala3RunTime$().cE();
    }
    this.dS = x$proxy11.bf;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.gG = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.gG = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.b2 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b4 = (function(size) {
});
$p.ar = (function() {
  return this.gG;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.ea = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  hY: 1,
  b0: 1,
  a: 1,
  G: 1,
  a0: 1
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
$p.dX = (function(elems) {
  return new $c_scm_ListBuffer().iw(elems);
});
$p.aq = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.ab = (function(source) {
  return new $c_scm_ListBuffer().iw(source);
});
$p.bN = (function() {
  return new $c_scm_ListBuffer();
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  i2: 1,
  a: 1,
  G: 1,
  a0: 1,
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
  this.jW = null;
  this.oE = null;
  this.oD = 0;
  this.jW = underlying;
  this.oE = mutationCount;
  this.oD = (mutationCount.I() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.j = (function() {
  $m_scm_MutationTracker$().k8(this.oD, (this.oE.I() | 0), "mutation occurred during iteration");
  return this.jW.j();
});
$p.f = (function() {
  return this.jW.f();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  i6: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
function $f_s_math_Ordering__lteq__O__O__Z($thiz, x, y) {
  return ($thiz.Z(x, y) <= 0);
}
function $f_s_math_Ordering__gteq__O__O__Z($thiz, x, y) {
  return ($thiz.Z(x, y) >= 0);
}
function $f_s_math_Ordering__max__O__O__O($thiz, x, y) {
  return ($thiz.cV(x, y) ? x : y);
}
function $f_s_math_Ordering__min__O__O__O($thiz, x, y) {
  return ($thiz.cY(x, y) ? x : y);
}
function $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z($thiz, other) {
  if ((other instanceof $c_s_math_Ordering$Reverse)) {
    var x = other.cO;
    return ((x !== null) && x.o($thiz));
  } else {
    return false;
  }
}
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.aI();
    var x$3 = x.aI();
    return ((x$2 === null) ? (x$3 === null) : (x$2 === x$3));
  } else {
    return false;
  }
}
function $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz) {
  return (clazz.A.Z ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.A.Q())) + "]") : clazz.A.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.L)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.L)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.oM = null;
  this.gI = 0;
  this.oL = 0;
  this.oM = x$1;
  this.gI = 0;
  this.oL = x$1.bu();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.j = (function() {
  return (this.gI < this.oL);
});
$p.f = (function() {
  var result = this.oM.bv(this.gI);
  this.gI = ((1 + this.gI) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  je: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
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
$p.dX = (function(elems) {
  return this.pK(elems);
});
$p.aq = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.pK = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).ar();
});
$p.ab = (function(source) {
  return this.pK(source);
});
$p.bN = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  jl: 1,
  aq: 1,
  a: 1,
  G: 1,
  a0: 1
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
$p.dX = (function(elems) {
  return this.ks(elems);
});
$p.ks = (function(source) {
  return this.aq().b2(source).ar();
});
$p.aq = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), x$1$2$2.eq))), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []));
});
$p.ab = (function(source) {
  return this.ks(source);
});
$p.bN = (function() {
  return $ct_sjsr_WrappedVarArgs__(new $c_sjsr_WrappedVarArgs());
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  jy: 1,
  aq: 1,
  a: 1,
  G: 1,
  a0: 1
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
  this.f2 = null;
  this.f2 = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().f7(this, (-1408943127), true);
});
$p.o = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_s_util_Failure)) {
    var x = this.f2;
    var x$2 = x$0.f2;
    return ((x === null) ? (x$2 === null) : x.o(x$2));
  } else {
    return false;
  }
});
$p.t = (function() {
  return $m_sr_ScalaRunTime$().k1(this);
});
$p.bu = (function() {
  return 1;
});
$p.bw = (function() {
  return "Failure";
});
$p.bv = (function(n) {
  if ((n === 0)) {
    return this.f2;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.pU = (function() {
  return true;
});
$p.pV = (function() {
  return false;
});
$p.y = (function() {
  var $x_1 = this.f2;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.a0 : $x_1);
});
$p.kF = (function(f) {
  return this;
});
$p.qj = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.bU(this.f2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x18 = $m_s_util_control_NonFatal$().e0(e$2);
    if ((!x18.c())) {
      return new $c_s_util_Failure(x18.y());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
  }
});
$p.cd = (function(fa, fb) {
  return fa.e(this.f2);
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
  this.f3 = null;
  this.f3 = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().f7(this, (-1750213842), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().l(this.f3, x$0.f3)));
});
$p.t = (function() {
  return $m_sr_ScalaRunTime$().k1(this);
});
$p.bu = (function() {
  return 1;
});
$p.bw = (function() {
  return "Success";
});
$p.bv = (function(n) {
  if ((n === 0)) {
    return this.f3;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.pU = (function() {
  return false;
});
$p.pV = (function() {
  return true;
});
$p.y = (function() {
  return this.f3;
});
$p.kF = (function(f) {
  try {
    return new $c_s_util_Success(f.e(this.f3));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x2 = $m_s_util_control_NonFatal$().e0(e$2);
    if ((!x2.c())) {
      return new $c_s_util_Failure(x2.y());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
  }
});
$p.qj = (function(pf) {
  return this;
});
$p.cd = (function(fa, fb) {
  try {
    return fb.e(this.f3);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x42 = $m_s_util_control_NonFatal$().e0(e$2);
    if ((!x42.c())) {
      var x43 = x42.y();
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
    this.oS = null;
    this.rq = null;
    this.oS = label;
    this.rq = value;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, false, false);
  }
  tl(other) {
    return (this.oS === other);
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
  jC: 1,
  g4: 1,
  g5: 1,
  g7: 1,
  g6: 1
}));
/** @constructor */
function $c_Lscorry_SummaryStatistics$$anon$1(maxCount$2) {
  this.jY = 0;
  this.jY = maxCount$2;
}
$p = $c_Lscorry_SummaryStatistics$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lscorry_SummaryStatistics$$anon$1;
/** @constructor */
function $h_Lscorry_SummaryStatistics$$anon$1() {
}
$h_Lscorry_SummaryStatistics$$anon$1.prototype = $p;
$p.ti = (function(x) {
  if ((x !== null)) {
    if (((x.R | 0) === this.jY)) {
      return true;
    }
  }
  return false;
});
$p.rV = (function(x, default$1) {
  if ((x !== null)) {
    var v = (+x.S);
    if (((x.R | 0) === this.jY)) {
      return v;
    }
  }
  return default$1.e(x);
});
$p.ce = (function(x) {
  return this.ti(x);
});
$p.bU = (function(x, default$1) {
  return this.rV(x, default$1);
});
var $d_Lscorry_SummaryStatistics$$anon$1 = new $TypeData().i($c_Lscorry_SummaryStatistics$$anon$1, "scorry.SummaryStatistics$$anon$1", ({
  jL: 1,
  aM: 1,
  i: 1,
  j: 1,
  a: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.g7 = null;
    this.g6 = null;
    this.g7 = error;
    this.g6 = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fP(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().fP(cause)), null, true, true);
    this.pS(cause);
  }
  cF() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().k7(this, (-889275714), null);
  }
  o(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.g7;
      var x$2 = x$0.g7;
      if (((x === null) ? (x$2 === null) : x.o(x$2))) {
        var x$3 = this.g6;
        var x$4 = x$0.g6;
        return ((x$3 === null) ? (x$4 === null) : x$3.o(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bu() {
    return 2;
  }
  bw() {
    return "ErrorHandlingError";
  }
  bv(n) {
    if ((n === 0)) {
      return this.g7;
    }
    if ((n === 1)) {
      return this.g6;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  t() {
    return ((("ErrorHandlingError: " + this.g7) + "; cause: ") + this.g6);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bf)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ErrorHandlingError", ({
  bf: 1,
  aE: 1,
  q: 1,
  a: 1,
  d: 1,
  P: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error) {
    super();
    this.g8 = null;
    this.g8 = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fP(error)), null, true, true);
  }
  cF() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().k7(this, (-889275714), null);
  }
  o(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.g8;
      var x$2 = x$0.g8;
      return ((x === null) ? (x$2 === null) : x.o(x$2));
    } else {
      return false;
    }
  }
  bu() {
    return 1;
  }
  bw() {
    return "ObserverError";
  }
  bv(n) {
    if ((n === 0)) {
      return this.g8;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  t() {
    return ("ObserverError: " + this.g8);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bg)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverError, "com.raquo.airstream.core.AirstreamError$ObserverError", ({
  bg: 1,
  aE: 1,
  q: 1,
  a: 1,
  d: 1,
  P: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.ga = null;
    this.g9 = null;
    this.ga = error;
    this.g9 = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fP(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().fP(cause)), null, true, true);
    this.pS(cause);
  }
  cF() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().k7(this, (-889275714), null);
  }
  o(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.ga;
      var x$2 = x$0.ga;
      if (((x === null) ? (x$2 === null) : x.o(x$2))) {
        var x$3 = this.g9;
        var x$4 = x$0.g9;
        return ((x$3 === null) ? (x$4 === null) : x$3.o(x$4));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bu() {
    return 2;
  }
  bw() {
    return "ObserverErrorHandlingError";
  }
  bv(n) {
    if ((n === 0)) {
      return this.ga;
    }
    if ((n === 1)) {
      return this.g9;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  t() {
    return ((("ObserverErrorHandlingError: " + this.ga) + "; cause: ") + this.g9);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bh)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError, "com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError", ({
  bh: 1,
  aE: 1,
  q: 1,
  a: 1,
  d: 1,
  P: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(trx, depth) {
    super();
    this.ff = null;
    this.fe = 0;
    this.ff = trx;
    this.fe = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  cF() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().z(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().z(acc, $m_sr_Statics$().E(this.ff));
    acc = $m_sr_Statics$().z(acc, this.fe);
    return $m_sr_Statics$().aV(acc, 2);
  }
  o(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.fe === x$0.fe)) {
        var x = this.ff;
        var x$2 = x$0.ff;
        return ((x === null) ? (x$2 === null) : (x === x$2));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  bu() {
    return 2;
  }
  bw() {
    return "TransactionDepthExceeded";
  }
  bv(n) {
    if ((n === 0)) {
      return this.ff;
    }
    if ((n === 1)) {
      return this.fe;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  t() {
    return ((("TransactionDepthExceeded: " + this.ff) + "; maxDepth: ") + this.fe);
  }
}
function $isArrayOf_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bi)));
}
var $d_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded, "com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded", ({
  bi: 1,
  aE: 1,
  q: 1,
  a: 1,
  d: 1,
  P: 1
}));
function $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz) {
  $thiz.kX();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.lg = 1;
  $thiz.hq = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.hq = ((1 + $thiz.hq) | 0);
  $thiz.hp.la.I();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.hp.l8.I(), (void 0)));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchResult1: {
      var $x_1;
      var x2 = $m_s_util_control_NonFatal$().e0(e$2);
      if ((!x2.c())) {
        var $x_1 = new $c_s_util_Failure(x2.y());
        break matchResult1;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
    }
  }
  $x_1.qj(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.hp.l9.I();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.lO = null;
  this.iP = null;
  this.iO = null;
  this.iN = null;
  this.eJ = null;
  this.lO = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.iO = initial;
  this.iN = new $c_Lcom_raquo_airstream_state_VarSignal(this.iO, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.eJ = this.iN;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.ez = (function() {
  return this.lO;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.t = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ui = (function(value, transaction) {
  this.iO = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.iN, value, transaction);
});
$p.f8 = (function() {
  return this.eJ;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  de: 1,
  ao: 1,
  aQ: 1,
  aG: 1,
  aa: 1,
  dg: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(tag, ref) {
  this.j9 = null;
  this.nb = null;
  this.na = null;
  this.n9 = null;
  this.n8 = null;
  this.nc = null;
  this.d4 = null;
  this.nc = tag;
  this.d4 = ref;
  this.j9 = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.fJ = (function() {
  return this.j9;
});
$p.ph = (function(x$1) {
  this.j9 = x$1;
});
$p.cQ = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fI(parentNode, this, (void 0));
});
$p.cc = (function() {
  return this.nb;
});
$p.k9 = (function(x$0) {
  this.nb = x$0;
});
$p.kc = (function() {
  return this.na;
});
$p.fK = (function() {
  return this.n9;
});
$p.i7 = (function() {
  return this.n8;
});
$p.kb = (function(x$1) {
  this.n9 = x$1;
});
$p.ka = (function(x$1) {
  this.n8 = x$1;
});
$p.pi = (function(x$0) {
  this.na = x$0;
});
$p.eF = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.eB = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.t = (function() {
  return (("ReactiveHtmlElement(" + ((this.d4 !== null) ? this.d4.outerHTML : ("tag=" + this.nc.je))) + ")");
});
$p.L = (function() {
  return this.d4;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  ex: 1,
  aw: 1,
  a3: 1,
  aH: 1,
  aV: 1,
  bs: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(tag, ref) {
  this.ja = null;
  this.ng = null;
  this.nf = null;
  this.ne = null;
  this.nd = null;
  this.nh = null;
  this.e5 = null;
  this.nh = tag;
  this.e5 = ref;
  this.ja = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveSvgElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = $p;
$p.fJ = (function() {
  return this.ja;
});
$p.ph = (function(x$1) {
  this.ja = x$1;
});
$p.cQ = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fI(parentNode, this, (void 0));
});
$p.cc = (function() {
  return this.ng;
});
$p.k9 = (function(x$0) {
  this.ng = x$0;
});
$p.kc = (function() {
  return this.nf;
});
$p.fK = (function() {
  return this.ne;
});
$p.i7 = (function() {
  return this.nd;
});
$p.kb = (function(x$1) {
  this.ne = x$1;
});
$p.ka = (function(x$1) {
  this.nd = x$1;
});
$p.pi = (function(x$0) {
  this.nf = x$0;
});
$p.eF = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.eB = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.t = (function() {
  return (("ReactiveSvgElement(" + ((this.e5 !== null) ? this.e5.outerHTML : ("tag=" + this.nh.jf))) + ")");
});
$p.L = (function() {
  return this.e5;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveSvgElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveSvgElement, "com.raquo.laminar.nodes.ReactiveSvgElement", ({
  ey: 1,
  aw: 1,
  a3: 1,
  aH: 1,
  aV: 1,
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
  eL: 1,
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
  return $m_jl_Double$().i8($thiz, o);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bv)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bv: 1,
  aj: 1,
  a: 1,
  ab: 1,
  a4: 1,
  ax: 1
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
  return $m_jl_Double$().i8($thiz, o);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  eV: 1,
  aj: 1,
  a: 1,
  ab: 1,
  a4: 1,
  ax: 1
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
  ab: 1,
  a4: 1,
  ax: 1
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
  return $m_RTLong$().kV($thiz, $thizhi);
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
  ab: 1,
  a4: 1,
  ax: 1
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
  var str = $m_jl_Character$().kW(ch);
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
  return $m_ju_regex_PatternCompiler$().sa(regex, 0).tq($thiz, limit);
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
  ab: 1,
  aW: 1,
  a4: 1,
  ax: 1
}), ((x) => ((typeof x) === "string")));
class $c_ju_FormatterClosedException extends $c_jl_IllegalStateException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_ju_FormatterClosedException = new $TypeData().i($c_ju_FormatterClosedException, "java.util.FormatterClosedException", ({
  fq: 1,
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
    this.nR = null;
    this.nT = null;
    this.nS = 0;
    this.nR = desc;
    this.nT = regex;
    this.nS = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    var idx = this.nS;
    var re = this.nT;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.nR + indexHint) + "\n") + re);
    return ((((idx >= 0) && (re !== null)) && (idx < re.length)) ? (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^") : base);
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().i($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  fO: 1,
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
$p.t = (function() {
  return "None";
});
$p.bu = (function() {
  return 0;
});
$p.bw = (function() {
  return "None";
});
$p.bv = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.sV = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.y = (function() {
  this.sV();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  fW: 1,
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
  return $m_s_util_hashing_MurmurHash3$().f7(this, 1323286827, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().l(this.dB, x$0.dB)));
});
$p.t = (function() {
  return $m_sr_ScalaRunTime$().k1(this);
});
$p.bu = (function() {
  return 1;
});
$p.bw = (function() {
  return "Some";
});
$p.bv = (function(n) {
  if ((n === 0)) {
    return this.dB;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.y = (function() {
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
$p.q = (function() {
  return (-1);
});
$p.bV = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.fN = (function(p) {
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
$p.d3 = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.iq = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord);
});
$p.ip = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord);
});
$p.cP = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.g4 = (function() {
  return $m_sci_Seq$().fO(this);
});
$p.cg = (function() {
  return $f_sc_IterableOnceOps__reversed__sc_Iterable(this);
});
$p.p = (function() {
  return this.d().f();
});
$p.C = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f);
});
$p.h1 = (function(coll) {
  return this.ay().ab(coll);
});
$p.dt = (function() {
  return this.ay().aq();
});
$p.bz = (function() {
  return this.b7();
});
$p.f5 = (function(coll) {
  return this.h1(coll);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.hG = null;
  this.dC = 0;
  this.gj = 0;
  this.hG = xs;
  this.dC = 0;
  this.gj = $m_jl_reflect_Array$().aN(this.hG);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.q = (function() {
  return ((this.gj - this.dC) | 0);
});
$p.j = (function() {
  return (this.dC < this.gj);
});
$p.f = (function() {
  if ((this.dC >= $m_jl_reflect_Array$().aN(this.hG))) {
    $m_sc_Iterator$().J.f();
  }
  var r = $m_sr_ScalaRunTime$().ao(this.hG, this.dC);
  this.dC = ((1 + this.dC) | 0);
  return r;
});
$p.ev = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.dC + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.gj;
    } else {
      var a = this.gj;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.dC = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  gb: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.jz = self;
  $thiz.dD = 0;
  $thiz.bx = self.i();
  return $thiz;
}
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bx) ? $thiz.bx : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.jz = null;
  this.dD = 0;
  this.bx = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.q = (function() {
  return this.bx;
});
$p.j = (function() {
  return (this.bx > 0);
});
$p.f = (function() {
  if ((this.bx > 0)) {
    var r = this.jz.n(this.dD);
    this.dD = ((1 + this.dD) | 0);
    this.bx = ((this.bx - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
$p.ev = (function(n) {
  if ((n > 0)) {
    this.dD = ((this.dD + n) | 0);
    var b = ((this.bx - n) | 0);
    this.bx = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.g1 = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bx = ((b < 0) ? 0 : b);
  this.dD = ((this.dD + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bP: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.jA = self;
  $thiz.bh = self.i();
  $thiz.eS = (($thiz.bh - 1) | 0);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
  this.jA = null;
  this.bh = 0;
  this.eS = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.j = (function() {
  return (this.bh > 0);
});
$p.f = (function() {
  if ((this.bh > 0)) {
    var r = this.jA.n(this.eS);
    this.eS = ((this.eS - 1) | 0);
    this.bh = ((this.bh - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
$p.g1 = (function(from, until) {
  if ((this.bh > 0)) {
    if ((this.bh <= from)) {
      this.bh = 0;
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.bh))) {
        this.bh = until;
      }
    } else {
      this.eS = ((this.eS - from) | 0);
      if (((until >= 0) && (until < this.bh))) {
        if ((until <= from)) {
          this.bh = 0;
        } else {
          this.bh = ((until - from) | 0);
        }
      } else {
        this.bh = ((this.bh - from) | 0);
      }
    }
  }
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewReverseIterator, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", ({
  bQ: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.gG = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().J);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.rD = (function(elem) {
  this.gG = this.gG.gW(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.ad = (function(elem) {
  return this.rD(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  gk: 1,
  hX: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$7(pf$2, outer) {
  this.o3 = null;
  this.o2 = null;
  this.fu = 0;
  this.jB = null;
  this.o3 = pf$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jB = outer;
  this.fu = 0;
}
$p = $c_sc_Iterator$$anon$7.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$7;
/** @constructor */
function $h_sc_Iterator$$anon$7() {
}
$h_sc_Iterator$$anon$7.prototype = $p;
$p.t = (function() {
  return "<function1>";
});
$p.e = (function(value) {
  return $m_sr_Statics$PFMarker$();
});
$p.j = (function() {
  var marker = $m_sr_Statics$PFMarker$();
  while ((this.fu === 0)) {
    if (this.jB.j()) {
      var x = this.jB.f();
      var v = this.o3.bU(x, this);
      if ((marker !== v)) {
        this.o2 = v;
        this.fu = 1;
      }
    } else {
      this.fu = (-1);
    }
  }
  return (this.fu === 1);
});
$p.f = (function() {
  if (this.j()) {
    this.fu = 0;
    return this.o2;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
var $d_sc_Iterator$$anon$7 = new $TypeData().i($c_sc_Iterator$$anon$7, "scala.collection.Iterator$$anon$7", ({
  gl: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1,
  i: 1
}));
function $f_sc_MapOps__getOrElse__O__F0__O($thiz, key, default$1) {
  var x5 = $thiz.bW(key);
  if ((x5 instanceof $c_s_Some)) {
    return x5.dB;
  }
  if (($m_s_None$() === x5)) {
    return default$1.I();
  }
  throw new $c_s_MatchError(x5);
}
function $f_sc_MapOps__apply__O__O($thiz, key) {
  var x8 = $thiz.bW(key);
  if (($m_s_None$() === x8)) {
    return $f_sc_MapOps__default__O__O($thiz, key);
  }
  if ((x8 instanceof $c_s_Some)) {
    return x8.dB;
  }
  throw new $c_s_MatchError(x8);
}
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.cU(x, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => default$1.e(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.d();
  while (it.j()) {
    var next = it.f();
    f.bL(next.S, next.R);
  }
}
function $f_sc_MapOps__default__O__O($thiz, key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
}
function $f_sc_MapOps__contains__O__Z($thiz, key) {
  return (!$thiz.bW(key).c());
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.S;
    var v = x$1$2.R;
    return ((k + " -> ") + v);
  })), $thiz.d()), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.dt();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.d();
  while (it.j()) {
    var next = it.f();
    if (seen.i2(f.e(next))) {
      builder.ad(next);
    }
  }
  return builder.ar();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.ew().aq();
  b.b2($thiz);
  b.b2(suffix);
  return b.ar();
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.ol)) {
    $thiz.ok = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.ol = true;
  }
  return $thiz.ok;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.hM = null;
  this.ok = null;
  this.ol = false;
  $n_sci_ArraySeq$ = this;
  this.hM = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.kp = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.fa($m_s_Array$().pI(it, tag)));
});
$p.ir = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2) => this.fa($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2, evidence$1)))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.fa = (function(x) {
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
$p.px = (function(evidence$1) {
  return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this);
});
$p.ko = (function(it, evidence$1) {
  return this.kp(it, evidence$1);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  gG: 1,
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
  this.bp = 0;
  this.fw = 0;
  this.dF = null;
  this.bD = 0;
  this.dd = null;
  this.fx = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_ChampBaseIterator__sci_Node__(this, hm$1.bi);
  while (this.j()) {
    var originalHash = this.dF.fQ(this.bp);
    outer.g5(outer.de, this.dF.dr(this.bp), this.dF.cy(this.bp), originalHash, $m_sc_Hashing$().cz(originalHash), 0);
    this.bp = ((1 + this.bp) | 0);
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
  gK: 1,
  b3: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.v)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.v)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.dJ = 0;
  this.eX = null;
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
$p.bY = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  gZ: 1,
  ch: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_Map$Map2$$anon$3(outer) {
  this.dJ = 0;
  this.eX = null;
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
$p.bY = (function(k, v) {
  return v;
});
var $d_sci_Map$Map2$$anon$3 = new $TypeData().i($c_sci_Map$Map2$$anon$3, "scala.collection.immutable.Map$Map2$$anon$3", ({
  h0: 1,
  ch: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.dL = 0;
  this.dK = null;
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
$p.bY = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  h1: 1,
  cj: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$6(outer) {
  this.dL = 0;
  this.dK = null;
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
$p.bY = (function(k, v) {
  return v;
});
var $d_sci_Map$Map3$$anon$6 = new $TypeData().i($c_sci_Map$Map3$$anon$6, "scala.collection.immutable.Map$Map3$$anon$6", ({
  h2: 1,
  cj: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.dM = 0;
  this.cL = null;
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
$p.bY = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  h3: 1,
  cl: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$9(outer) {
  this.dM = 0;
  this.cL = null;
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
$p.bY = (function(k, v) {
  return v;
});
var $d_sci_Map$Map4$$anon$9 = new $TypeData().i($c_sci_Map$Map4$$anon$9, "scala.collection.immutable.Map$Map4$$anon$9", ({
  h4: 1,
  cl: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.ed = 0;
  this.hN = null;
  this.c4 = 0;
  this.gv = null;
  this.gw = null;
  this.jH = 0;
  this.oo = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.jH = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().qL(this.jH, $m_sr_Statics$().E(this.oo), (-889275714));
});
$p.tK = (function() {
  if ((!this.j())) {
    $m_sc_Iterator$().J.f();
  }
  this.jH = this.hN.fQ(this.ed);
  this.oo = this.hN.cy(this.ed);
  this.ed = ((this.ed - 1) | 0);
  return this;
});
$p.f = (function() {
  return this.tK();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  h6: 1,
  gH: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.bp = 0;
  this.fw = 0;
  this.dF = null;
  this.bD = 0;
  this.dd = null;
  this.fx = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.tJ = (function() {
  if ((!this.j())) {
    $m_sc_Iterator$().J.f();
  }
  var payload = this.dF.pP(this.bp);
  this.bp = ((1 + this.bp) | 0);
  return payload;
});
$p.f = (function() {
  return this.tJ();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  h7: 1,
  b3: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_MapValueIterator(rootNode) {
  this.bp = 0;
  this.fw = 0;
  this.dF = null;
  this.bD = 0;
  this.dd = null;
  this.fx = null;
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
  var value = this.dF.cy(this.bp);
  this.bp = ((1 + this.bp) | 0);
  return value;
});
var $d_sci_MapValueIterator = new $TypeData().i($c_sci_MapValueIterator, "scala.collection.immutable.MapValueIterator", ({
  h9: 1,
  b3: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bQ <= $thiz.aJ)) {
    $m_sc_Iterator$().J.f();
  }
  $thiz.eg = ((1 + $thiz.eg) | 0);
  var slice = $thiz.jJ.dv($thiz.eg);
  while ((slice.a.length === 0)) {
    $thiz.eg = ((1 + $thiz.eg) | 0);
    slice = $thiz.jJ.dv($thiz.eg);
  }
  $thiz.gz = $thiz.f0;
  var count = $thiz.oq;
  var idx = $thiz.eg;
  var c = (((count + ((count >>> 31) | 0)) | 0) >> 1);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.ef = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x46 = $thiz.ef;
  switch (x46) {
    case 1: {
      $thiz.ba = slice;
      break;
    }
    case 2: {
      $thiz.bb = slice;
      break;
    }
    case 3: {
      $thiz.bI = slice;
      break;
    }
    case 4: {
      $thiz.cM = slice;
      break;
    }
    case 5: {
      $thiz.eZ = slice;
      break;
    }
    case 6: {
      $thiz.jI = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x46);
    }
  }
  $thiz.f0 = (($thiz.gz + Math.imul(slice.a.length, (1 << Math.imul(5, (($thiz.ef - 1) | 0))))) | 0);
  if (($thiz.f0 > $thiz.dP)) {
    $thiz.f0 = $thiz.dP;
  }
  if (($thiz.ef > 1)) {
    $thiz.fB = (((1 << Math.imul(5, $thiz.ef)) - 1) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.aJ - $thiz.bQ) | 0) + $thiz.dP) | 0);
  if ((pos === $thiz.f0)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.ef > 1)) {
    var io = ((pos - $thiz.gz) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.fB ^ io));
    $thiz.fB = io;
  }
  $thiz.bQ = (($thiz.bQ - $thiz.aJ) | 0);
  var a = $thiz.ba.a.length;
  var b = $thiz.bQ;
  $thiz.dO = ((a < b) ? a : b);
  $thiz.aJ = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.ba = $thiz.bb.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bb = $thiz.bI.a[(31 & ((io >>> 10) | 0))];
    $thiz.ba = $thiz.bb.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bI = $thiz.cM.a[(31 & ((io >>> 15) | 0))];
    $thiz.bb = $thiz.bI.a[0];
    $thiz.ba = $thiz.bb.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cM = $thiz.eZ.a[(31 & ((io >>> 20) | 0))];
    $thiz.bI = $thiz.cM.a[0];
    $thiz.bb = $thiz.bI.a[0];
    $thiz.ba = $thiz.bb.a[0];
  } else {
    $thiz.eZ = $thiz.jI.a[((io >>> 25) | 0)];
    $thiz.cM = $thiz.eZ.a[0];
    $thiz.bI = $thiz.cM.a[0];
    $thiz.bb = $thiz.bI.a[0];
    $thiz.ba = $thiz.bb.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.ba = $thiz.bb.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bb = $thiz.bI.a[(31 & ((io >>> 10) | 0))];
    $thiz.ba = $thiz.bb.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.bI = $thiz.cM.a[(31 & ((io >>> 15) | 0))];
    $thiz.bb = $thiz.bI.a[(31 & ((io >>> 10) | 0))];
    $thiz.ba = $thiz.bb.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cM = $thiz.eZ.a[(31 & ((io >>> 20) | 0))];
    $thiz.bI = $thiz.cM.a[(31 & ((io >>> 15) | 0))];
    $thiz.bb = $thiz.bI.a[(31 & ((io >>> 10) | 0))];
    $thiz.ba = $thiz.bb.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.eZ = $thiz.jI.a[((io >>> 25) | 0)];
    $thiz.cM = $thiz.eZ.a[(31 & ((io >>> 20) | 0))];
    $thiz.bI = $thiz.cM.a[(31 & ((io >>> 15) | 0))];
    $thiz.bb = $thiz.bI.a[(31 & ((io >>> 10) | 0))];
    $thiz.ba = $thiz.bb.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.jJ = null;
  this.dP = 0;
  this.oq = 0;
  this.ba = null;
  this.bb = null;
  this.bI = null;
  this.cM = null;
  this.eZ = null;
  this.jI = null;
  this.dO = 0;
  this.aJ = 0;
  this.fB = 0;
  this.bQ = 0;
  this.eg = 0;
  this.ef = 0;
  this.gz = 0;
  this.f0 = 0;
  this.jJ = v;
  this.dP = totalLength;
  this.oq = sliceCount;
  this.ba = v.h;
  this.dO = this.ba.a.length;
  this.aJ = 0;
  this.fB = 0;
  this.bQ = this.dP;
  this.eg = 0;
  this.ef = 1;
  this.gz = 0;
  this.f0 = this.dO;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.q = (function() {
  return ((this.bQ - this.aJ) | 0);
});
$p.j = (function() {
  return (this.bQ > this.aJ);
});
$p.f = (function() {
  if ((this.aJ === this.dO)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.ba.a[this.aJ];
  this.aJ = ((1 + this.aJ) | 0);
  return r;
});
$p.ev = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.aJ - this.bQ) | 0) + this.dP) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.dP;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.dP)) {
      this.aJ = 0;
      this.bQ = 0;
      this.dO = 0;
    } else {
      while ((newpos >= this.f0)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.gz) | 0);
      if ((this.ef > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.fB ^ io));
        this.fB = io;
      }
      this.dO = this.ba.a.length;
      this.aJ = (31 & io);
      this.bQ = ((this.aJ + ((this.dP - newpos) | 0)) | 0);
      if ((this.dO > this.bQ)) {
        this.dO = this.bQ;
      }
    }
  }
  return this;
});
$p.bm = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().aN(xs);
  var srcLen = ((this.bQ - this.aJ) | 0);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? xsLen : ((xsLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var total$1 = ((total < 0) ? 0 : total);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total$1)) {
    if ((this.aJ === this.dO)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total$1 - copied) | 0);
    var b = ((this.ba.a.length - this.aJ) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.ba;
      var srcPos = this.aJ;
      var destPos = ((start + copied) | 0);
      src.u(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().et(this.ba, this.aJ, xs, ((start + copied) | 0), count);
    }
    this.aJ = ((this.aJ + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total$1;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  ha: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1,
  C: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.jN = 0;
  $thiz.ov = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.jN = 0;
  this.ov = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.b4 = (function(size) {
  if ((this.jN < size)) {
    this.u9(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.jQ = null;
  this.jP = null;
  $n_scm_ArraySeq$ = this;
  this.jQ = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.jP = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.sN = (function(it, evidence$1) {
  return this.io($m_s_Array$().pI(it, evidence$1));
});
$p.ir = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => this.io(x$2))), new $c_scm_ArrayBuilder$generic(evidence$1.aI()));
});
$p.io = (function(x) {
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
$p.px = (function(evidence$1) {
  return this.jP;
});
$p.ko = (function(it, evidence$1) {
  return this.sN(it, evidence$1);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  hE: 1,
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
  this.dR = 0;
  this.dk = null;
  this.fG = 0;
  this.fF = null;
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
$p.ib = (function(nd) {
  return new $c_T2(nd.en, nd.bS);
});
var $d_scm_HashMap$$anon$1 = new $TypeData().i($c_scm_HashMap$$anon$1, "scala.collection.mutable.HashMap$$anon$1", ({
  hM: 1,
  aJ: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$3(outer) {
  this.dR = 0;
  this.dk = null;
  this.fG = 0;
  this.fF = null;
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
$p.ib = (function(nd) {
  return nd.bS;
});
var $d_scm_HashMap$$anon$3 = new $TypeData().i($c_scm_HashMap$$anon$3, "scala.collection.mutable.HashMap$$anon$3", ({
  hN: 1,
  aJ: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$4(outer) {
  this.dR = 0;
  this.dk = null;
  this.fG = 0;
  this.fF = null;
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
$p.ib = (function(nd) {
  return nd;
});
var $d_scm_HashMap$$anon$4 = new $TypeData().i($c_scm_HashMap$$anon$4, "scala.collection.mutable.HashMap$$anon$4", ({
  hO: 1,
  aJ: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$5(outer) {
  this.dR = 0;
  this.dk = null;
  this.fG = 0;
  this.fF = null;
  this.jS = 0;
  this.rb = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.rb = outer;
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
  this.jS = 0;
}
$p = $c_scm_HashMap$$anon$5.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$5;
/** @constructor */
function $h_scm_HashMap$$anon$5() {
}
$h_scm_HashMap$$anon$5.prototype = $p;
$p.x = (function() {
  return this.jS;
});
$p.ib = (function(nd) {
  var $x_1 = $m_s_util_hashing_MurmurHash3$();
  var improvedHash = nd.dl;
  this.jS = $x_1.cG((improvedHash ^ ((improvedHash >>> 16) | 0)), $m_sr_Statics$().E(nd.bS));
  return this;
});
var $d_scm_HashMap$$anon$5 = new $TypeData().i($c_scm_HashMap$$anon$5, "scala.collection.mutable.HashMap$$anon$5", ({
  hP: 1,
  aJ: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$1(outer) {
  this.ep = 0;
  this.dS = null;
  this.gF = 0;
  this.gE = null;
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
$p.kl = (function(nd) {
  return nd.fH;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  hS: 1,
  bb: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.ep = 0;
  this.dS = null;
  this.gF = 0;
  this.gE = null;
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
$p.kl = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  hT: 1,
  bb: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.ep = 0;
  this.dS = null;
  this.gF = 0;
  this.gE = null;
  this.jV = 0;
  this.oC = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.oC = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.jV = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.x = (function() {
  return this.jV;
});
$p.kl = (function(nd) {
  this.jV = $p_scm_HashSet__improveHash__I__I(this.oC, nd.dT);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  hU: 1,
  bb: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_s_math_Ordering$$anon$1(f$4, outer) {
  this.jX = null;
  this.oF = null;
  this.jX = f$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.oF = outer;
}
$p = $c_s_math_Ordering$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$$anon$1;
/** @constructor */
function $h_s_math_Ordering$$anon$1() {
}
$h_s_math_Ordering$$anon$1.prototype = $p;
$p.cY = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cV = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cC = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cW = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return this.oF.Z(this.jX.e(x), this.jX.e(y));
});
var $d_s_math_Ordering$$anon$1 = new $TypeData().i($c_s_math_Ordering$$anon$1, "scala.math.Ordering$$anon$1", ({
  ii: 1,
  F: 1,
  a: 1,
  a7: 1,
  a9: 1,
  a8: 1
}));
function $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z($thiz, other) {
  return (other === $thiz.oG);
}
function $f_s_math_Ordering$Double$IeeeOrdering__lteq__D__D__Z($thiz, x, y) {
  return (x <= y);
}
function $f_s_math_Ordering$Double$IeeeOrdering__gteq__D__D__Z($thiz, x, y) {
  return (x >= y);
}
/** @constructor */
function $c_s_math_Ordering$Reverse(outer) {
  this.cO = null;
  this.cO = outer;
}
$p = $c_s_math_Ordering$Reverse.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Reverse;
/** @constructor */
function $h_s_math_Ordering$Reverse() {
}
$h_s_math_Ordering$Reverse.prototype = $p;
$p.cW = (function(other) {
  var x$2 = this.cO;
  return ((other === null) ? (x$2 === null) : other.o(x$2));
});
$p.Z = (function(x, y) {
  return this.cO.Z(y, x);
});
$p.cY = (function(x, y) {
  return this.cO.cY(y, x);
});
$p.cV = (function(x, y) {
  return this.cO.cV(y, x);
});
$p.cC = (function(x, y) {
  return this.cO.cD(x, y);
});
$p.cD = (function(x, y) {
  return this.cO.cC(x, y);
});
$p.o = (function(obj) {
  if ((obj !== null)) {
    if ((this === obj)) {
      return true;
    }
  }
  if ((obj instanceof $c_s_math_Ordering$Reverse)) {
    var x = this.cO;
    var x$2 = obj.cO;
    return ((x === null) ? (x$2 === null) : x.o(x$2));
  }
  return false;
});
$p.x = (function() {
  return Math.imul(41, this.cO.x());
});
function $isArrayOf_s_math_Ordering$Reverse(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cD)));
}
var $d_s_math_Ordering$Reverse = new $TypeData().i($c_s_math_Ordering$Reverse, "scala.math.Ordering$Reverse", ({
  cD: 1,
  F: 1,
  a: 1,
  a7: 1,
  a9: 1,
  a8: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.gH = null;
  this.gH = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.o = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.x = (function() {
  return $m_sr_Statics$().E(this.gH);
});
$p.t = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.gH);
});
$p.aI = (function() {
  return this.gH;
});
$p.bt = (function(len) {
  return this.gH.A.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  iC: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28(key$28) {
  this.gd = null;
  this.ge = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$28, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28, "com.raquo.laminar.defs.styles.StyleProps$$anon$28", ({
  dK: 1,
  aU: 1,
  af: 1,
  aS: 1,
  aT: 1,
  dP: 1,
  dN: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3(key$3) {
  this.gd = null;
  this.ge = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$3, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3, "com.raquo.laminar.defs.styles.StyleProps$$anon$3", ({
  dL: 1,
  aU: 1,
  af: 1,
  aS: 1,
  aT: 1,
  dQ: 1,
  dO: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5(key$5) {
  this.gd = null;
  this.ge = null;
  $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__(this, key$5, $m_sci_Nil$());
}
$p = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5.prototype = new $h_Lcom_raquo_laminar_keys_StyleProp();
$p.constructor = $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5;
/** @constructor */
function $h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5() {
}
$h_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5.prototype = $p;
var $d_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5 = new $TypeData().i($c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5, "com.raquo.laminar.defs.styles.StyleProps$$anon$5", ({
  dM: 1,
  aU: 1,
  af: 1,
  aS: 1,
  aT: 1,
  dR: 1,
  dS: 1
}));
class $c_ju_DuplicateFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.no = null;
    this.no = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    return (("Flags = '" + this.no) + "'");
  }
}
var $d_ju_DuplicateFormatFlagsException = new $TypeData().i($c_ju_DuplicateFormatFlagsException, "java.util.DuplicateFormatFlagsException", ({
  fj: 1,
  Z: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_FormatFlagsConversionMismatchException extends $c_ju_IllegalFormatException {
  constructor(f, c) {
    super();
    this.nq = null;
    this.np = 0;
    this.nq = f;
    this.np = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    return ((("Conversion = " + $cToS(this.np)) + ", Flags = ") + this.nq);
  }
}
var $d_ju_FormatFlagsConversionMismatchException = new $TypeData().i($c_ju_FormatFlagsConversionMismatchException, "java.util.FormatFlagsConversionMismatchException", ({
  fk: 1,
  Z: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatArgumentIndexException extends $c_ju_IllegalFormatException {
  constructor(msg) {
    super();
    this.nu = null;
    this.nu = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    return this.nu;
  }
}
var $d_ju_IllegalFormatArgumentIndexException = new $TypeData().i($c_ju_IllegalFormatArgumentIndexException, "java.util.IllegalFormatArgumentIndexException", ({
  fr: 1,
  Z: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatCodePointException extends $c_ju_IllegalFormatException {
  constructor(c) {
    super();
    this.nv = 0;
    this.nv = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    var i = this.nv;
    return ("Code point = 0x" + (i >>> 0.0).toString(16));
  }
}
var $d_ju_IllegalFormatCodePointException = new $TypeData().i($c_ju_IllegalFormatCodePointException, "java.util.IllegalFormatCodePointException", ({
  fs: 1,
  Z: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(c, arg) {
    super();
    this.nx = 0;
    this.nw = null;
    this.nx = c;
    this.nw = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    return ((("" + $cToS(this.nx)) + " != ") + this.nw.A.N);
  }
}
var $d_ju_IllegalFormatConversionException = new $TypeData().i($c_ju_IllegalFormatConversionException, "java.util.IllegalFormatConversionException", ({
  ft: 1,
  Z: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatFlagsException extends $c_ju_IllegalFormatException {
  constructor(f) {
    super();
    this.ny = null;
    this.ny = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    return (("Flags = '" + this.ny) + "'");
  }
}
var $d_ju_IllegalFormatFlagsException = new $TypeData().i($c_ju_IllegalFormatFlagsException, "java.util.IllegalFormatFlagsException", ({
  fu: 1,
  Z: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatPrecisionException extends $c_ju_IllegalFormatException {
  constructor(p) {
    super();
    this.nz = 0;
    this.nz = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    return ("" + this.nz);
  }
}
var $d_ju_IllegalFormatPrecisionException = new $TypeData().i($c_ju_IllegalFormatPrecisionException, "java.util.IllegalFormatPrecisionException", ({
  fv: 1,
  Z: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_IllegalFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(w) {
    super();
    this.nA = 0;
    this.nA = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    return ("" + this.nA);
  }
}
var $d_ju_IllegalFormatWidthException = new $TypeData().i($c_ju_IllegalFormatWidthException, "java.util.IllegalFormatWidthException", ({
  fw: 1,
  Z: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_MissingFormatArgumentException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nB = null;
    this.nB = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    return (("Format specifier '" + this.nB) + "'");
  }
}
var $d_ju_MissingFormatArgumentException = new $TypeData().i($c_ju_MissingFormatArgumentException, "java.util.MissingFormatArgumentException", ({
  fx: 1,
  Z: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_MissingFormatWidthException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nC = null;
    this.nC = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    return this.nC;
  }
}
var $d_ju_MissingFormatWidthException = new $TypeData().i($c_ju_MissingFormatWidthException, "java.util.MissingFormatWidthException", ({
  fy: 1,
  Z: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
class $c_ju_UnknownFormatConversionException extends $c_ju_IllegalFormatException {
  constructor(s) {
    super();
    this.nD = null;
    this.nD = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bs() {
    return (("Conversion = '" + this.nD) + "'");
  }
}
var $d_ju_UnknownFormatConversionException = new $TypeData().i($c_ju_UnknownFormatConversionException, "java.util.UnknownFormatConversionException", ({
  fA: 1,
  Z: 1,
  O: 1,
  w: 1,
  u: 1,
  q: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bz() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.jN = 0;
  this.ov = 0;
  this.fE = null;
  this.ow = false;
  this.jO = null;
  this.fE = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.ow = (elementClass === $d_C.l());
  this.jO = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.p4 = (function(elem) {
  var unboxedElem = (this.ow ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().g0(this.fE) : elem));
  this.jO.push(unboxedElem);
  return this;
});
$p.rt = (function(xs) {
  var it = xs.d();
  while (it.j()) {
    this.p4(it.f());
  }
  return this;
});
$p.u9 = (function(size) {
});
$p.ar = (function() {
  return $m_scm_ArrayBuilder$().fZ(((this.fE === $d_V.l()) ? $d_jl_Void.l() : (((this.fE === $d_sr_Null$.l()) || (this.fE === $d_sr_Nothing$.l())) ? $d_O.l() : this.fE)), this.jO);
});
$p.t = (function() {
  return "ArrayBuilder.generic";
});
$p.ad = (function(elem) {
  return this.p4(elem);
});
$p.b2 = (function(elems) {
  return this.rt(elems);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  hD: 1,
  hB: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.jz = null;
  this.dD = 0;
  this.bx = 0;
  this.oz = null;
  this.oy = 0;
  this.oz = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.oy = (mutationCount.I() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.j = (function() {
  $m_scm_MutationTracker$().k8(this.oy, (this.oz.I() | 0), "mutation occurred during iteration");
  return (this.bx > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  hI: 1,
  bP: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(self, mutationCount) {
  this.jA = null;
  this.bh = 0;
  this.eS = 0;
  this.oB = null;
  this.oA = 0;
  this.oB = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(this, self);
  this.oA = (mutationCount.I() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedReverseIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = $p;
$p.j = (function() {
  $m_scm_MutationTracker$().k8(this.oA, (this.oB.I() | 0), "mutation occurred during iteration");
  return (this.bh > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedReverseIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedReverseIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedReverseIterator", ({
  hJ: 1,
  bQ: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1,
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
$p.cY = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cV = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cC = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cW = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  var x$1 = (!(!x));
  return ((x$1 === (!(!y))) ? 0 : (x$1 ? 1 : (-1)));
});
var $d_s_math_Ordering$Boolean$ = new $TypeData().i($c_s_math_Ordering$Boolean$, "scala.math.Ordering$Boolean$", ({
  ij: 1,
  F: 1,
  a: 1,
  a7: 1,
  a9: 1,
  a8: 1,
  ik: 1
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
$p.cY = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cV = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cC = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cW = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Byte$ = new $TypeData().i($c_s_math_Ordering$Byte$, "scala.math.Ordering$Byte$", ({
  il: 1,
  F: 1,
  a: 1,
  a7: 1,
  a9: 1,
  a8: 1,
  im: 1
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
$p.cY = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cV = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cC = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cW = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return (($uC(x) - $uC(y)) | 0);
});
var $d_s_math_Ordering$Char$ = new $TypeData().i($c_s_math_Ordering$Char$, "scala.math.Ordering$Char$", ({
  ip: 1,
  F: 1,
  a: 1,
  a7: 1,
  a9: 1,
  a8: 1,
  iq: 1
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
$p.cY = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cV = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cC = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cW = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return $m_jl_Double$().i8((+x), (+y));
});
var $d_s_math_Ordering$DeprecatedDoubleOrdering$ = new $TypeData().i($c_s_math_Ordering$DeprecatedDoubleOrdering$, "scala.math.Ordering$DeprecatedDoubleOrdering$", ({
  ir: 1,
  F: 1,
  a: 1,
  a7: 1,
  a9: 1,
  a8: 1,
  it: 1
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
$p.cY = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cV = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cC = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cW = (function(other) {
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
  iw: 1,
  F: 1,
  a: 1,
  a7: 1,
  a9: 1,
  a8: 1,
  ix: 1
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
$p.cY = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cV = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cC = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cW = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Short$ = new $TypeData().i($c_s_math_Ordering$Short$, "scala.math.Ordering$Short$", ({
  iy: 1,
  F: 1,
  a: 1,
  a7: 1,
  a9: 1,
  a8: 1,
  iz: 1
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
$p.t = (function() {
  return this.a4;
});
$p.o = (function(that) {
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
  bs() {
    return $dp_toString__T(this.a0);
  }
  bw() {
    return "JavaScriptException";
  }
  bu() {
    return 1;
  }
  bv(x$1) {
    return ((x$1 === 0) ? this.a0 : $m_sr_Statics$().te(x$1));
  }
  cF() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().f7(this, 1744042595, true);
  }
  o(x$1) {
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
  if ((!($thiz.kH() === (void 0)))) {
    $thiz.k0($m_Lcom_raquo_airstream_core_Signal$().q7());
  }
  $thiz.q5(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.kH();
  if ((x === (void 0))) {
    $thiz.k0($m_Lcom_raquo_airstream_core_Signal$().q7());
    var nextValue = $thiz.kf();
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
  var isError = nextValue.pU();
  var elem = false;
  elem = false;
  $thiz.cX(false);
  var this$ = $thiz.dp();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.fX(nextValue);
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
    observer$1.hd(nextValue, transaction);
    if ((isError && (!elem))) {
      var ev$6 = true;
      elem = ev$6;
    }
  }
  $thiz.cX(true);
  var x = $thiz.eA();
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
    nextValue.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
      $m_Lcom_raquo_airstream_core_AirstreamError$().d1(err);
    })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))));
  }
}
function $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.cX(false);
  var this$ = $thiz.dp();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    try {
      observer.ha(nextValue);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      $m_Lcom_raquo_airstream_core_AirstreamError$().d1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
  var this$$1 = $thiz.ds();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.is(nextValue, transaction);
  }
  $thiz.cX(true);
  var x = $thiz.eA();
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
  $thiz.cX(false);
  var this$ = $thiz.dp();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.h9(nextError);
  }
  var this$$1 = $thiz.ds();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.h8(nextError, transaction);
  }
  $thiz.cX(true);
  var x = $thiz.eA();
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
  if (($thiz.aX(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.dt();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.d();
    var different = false;
    while (it.j()) {
      var next = it.f();
      if (seen.i2(f.e(next))) {
        builder.ad(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.ar() : $thiz);
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
  this.oG = null;
  $n_s_math_Ordering$Int$ = this;
  this.oG = new $c_s_math_Ordering$Reverse(this);
}
$p = $c_s_math_Ordering$Int$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Int$;
/** @constructor */
function $h_s_math_Ordering$Int$() {
}
$h_s_math_Ordering$Int$.prototype = $p;
$p.cY = (function(x, y) {
  return $f_s_math_Ordering__lteq__O__O__Z(this, x, y);
});
$p.cV = (function(x, y) {
  return $f_s_math_Ordering__gteq__O__O__Z(this, x, y);
});
$p.cC = (function(x, y) {
  return $f_s_math_Ordering__max__O__O__O(this, x, y);
});
$p.cD = (function(x, y) {
  return $f_s_math_Ordering__min__O__O__O(this, x, y);
});
$p.cW = (function(other) {
  return $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  var x$1 = (x | 0);
  var y$1 = (y | 0);
  return ((x$1 === y$1) ? 0 : ((x$1 < y$1) ? (-1) : 1));
});
var $d_s_math_Ordering$Int$ = new $TypeData().i($c_s_math_Ordering$Int$, "scala.math.Ordering$Int$", ({
  iu: 1,
  F: 1,
  a: 1,
  a7: 1,
  a9: 1,
  a8: 1,
  iv: 1,
  io: 1
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
$p.aI = (function() {
  return $d_Z.l();
});
$p.bt = (function(len) {
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
$p.aI = (function() {
  return $d_B.l();
});
$p.bt = (function(len) {
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
$p.aI = (function() {
  return $d_C.l();
});
$p.bt = (function(len) {
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
$p.aI = (function() {
  return $d_D.l();
});
$p.bt = (function(len) {
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
$p.aI = (function() {
  return $d_F.l();
});
$p.bt = (function(len) {
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
$p.aI = (function() {
  return $d_I.l();
});
$p.bt = (function(len) {
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
$p.aI = (function() {
  return $d_J.l();
});
$p.bt = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.dV = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.t = (function() {
  return this.dV;
});
$p.o = (function(that) {
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
$p.aI = (function() {
  return $d_S.l();
});
$p.bt = (function(len) {
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
$p.aI = (function() {
  return $d_V.l();
});
$p.bt = (function(len) {
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
$p.ay = (function() {
  return $m_sc_View$();
});
$p.t = (function() {
  return $f_sc_View__toString__T(this);
});
$p.b7 = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.aY() === that.aY())) {
      try {
        return $thiz.uC(that);
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
  this.dV = null;
  this.dV = "Any";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.aI = (function() {
  return $d_O.l();
});
$p.bt = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  iD: 1,
  aL: 1,
  aK: 1,
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
  iF: 1,
  iE: 1,
  ae: 1,
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
  iH: 1,
  iG: 1,
  ae: 1,
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
  iJ: 1,
  iI: 1,
  ae: 1,
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
  iL: 1,
  iK: 1,
  ae: 1,
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
  iN: 1,
  iM: 1,
  ae: 1,
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
  iP: 1,
  iO: 1,
  ae: 1,
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
  iR: 1,
  iQ: 1,
  ae: 1,
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
  this.dV = null;
  this.dV = "Nothing";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.aI = (function() {
  return $d_sr_Nothing$.l();
});
$p.bt = (function(len) {
  return new ($d_sr_Nothing$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  iS: 1,
  aL: 1,
  aK: 1,
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
  this.dV = null;
  this.dV = "Null";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.aI = (function() {
  return $d_sr_Null$.l();
});
$p.bt = (function(len) {
  return new ($d_sr_Null$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  iT: 1,
  aL: 1,
  aK: 1,
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
  this.dV = null;
  this.dV = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.aI = (function() {
  return $d_O.l();
});
$p.bt = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  iU: 1,
  aL: 1,
  aK: 1,
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
  iW: 1,
  iV: 1,
  ae: 1,
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
  iY: 1,
  iX: 1,
  ae: 1,
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
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.kL(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.kL(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.le = null;
  this.ld = false;
  this.lf = null;
  this.lb = null;
  this.lc = null;
  this.lh = false;
  this.lg = 0;
  this.hq = 0;
  this.hp = null;
  this.le = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.hp = makeConfig.rO(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => this.hq)), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.ez = (function() {
  return this.le;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.t = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fS = (function() {
  return this.ld;
});
$p.eA = (function() {
  return this.lf;
});
$p.cX = (function(x$1) {
  this.ld = x$1;
});
$p.fW = (function(x$1) {
  this.lf = x$1;
});
$p.o = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.h7 = (function(observer) {
});
$p.dp = (function() {
  return this.lb;
});
$p.ds = (function() {
  return this.lc;
});
$p.hj = (function() {
  return this.lh;
});
$p.fd = (function(x$1) {
  this.lh = x$1;
});
$p.gU = (function(x$0) {
  this.lb = x$0;
});
$p.gV = (function(x$0) {
  this.lc = x$0;
});
$p.f9 = (function() {
  return this.lg;
});
$p.he = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.hb = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.h5 = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.f8 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  d4: 1,
  ao: 1,
  aa: 1,
  at: 1,
  au: 1,
  aP: 1,
  aN: 1,
  av: 1,
  aR: 1,
  d0: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.lT = null;
  this.lS = false;
  this.lU = null;
  this.iQ = 0;
  this.lQ = null;
  this.lR = null;
  this.lX = false;
  this.iR = null;
  this.lV = null;
  this.lW = 0;
  this.lV = parentDisplayName;
  this.lT = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.iQ = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.iR = (void 0);
  this.lW = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.ez = (function() {
  return this.lT;
});
$p.t = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fS = (function() {
  return this.lS;
});
$p.eA = (function() {
  return this.lU;
});
$p.cX = (function(x$1) {
  this.lS = x$1;
});
$p.fW = (function(x$1) {
  this.lU = x$1;
});
$p.hc = (function() {
});
$p.o = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.jZ = (function() {
  return this.iQ;
});
$p.k0 = (function(x$1) {
  this.iQ = x$1;
});
$p.hb = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.h7 = (function(observer) {
  observer.fX($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.dp = (function() {
  return this.lQ;
});
$p.ds = (function() {
  return this.lR;
});
$p.hj = (function() {
  return this.lX;
});
$p.fd = (function(x$1) {
  this.lX = x$1;
});
$p.gU = (function(x$0) {
  this.lQ = x$0;
});
$p.gV = (function(x$0) {
  this.lR = x$0;
});
$p.kH = (function() {
  return this.iR;
});
$p.q5 = (function(x$1) {
  this.iR = x$1;
});
$p.kX = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.f9 = (function() {
  return this.lW;
});
$p.kf = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.he = (function() {
});
$p.eu = (function() {
  return (this.lV.I() + ".signal");
});
$p.h5 = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this, project, $m_s_None$());
});
$p.f8 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  dj: 1,
  ao: 1,
  aa: 1,
  at: 1,
  au: 1,
  aQ: 1,
  bj: 1,
  av: 1,
  bk: 1,
  df: 1
}));
/** @constructor */
function $c_sc_MapView$Values(underlying) {
  this.hJ = null;
  this.hJ = underlying;
}
$p = $c_sc_MapView$Values.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_MapView$Values;
/** @constructor */
function $h_sc_MapView$Values() {
}
$h_sc_MapView$Values.prototype = $p;
$p.d = (function() {
  return this.hJ.eE();
});
$p.q = (function() {
  return this.hJ.q();
});
$p.c = (function() {
  return this.hJ.c();
});
var $d_sc_MapView$Values = new $TypeData().i($c_sc_MapView$Values, "scala.collection.MapView$Values", ({
  gu: 1,
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
      if (o.i6($thiz)) {
        return $thiz.fY(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.m)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.m)));
}
function $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying_, len, ord) {
  $thiz.d7 = len;
  $thiz.fv = ord;
  $thiz.gr = underlying_;
  $thiz.jF = false;
  return $thiz;
}
function $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__($thiz, underlying, ord) {
  $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying, underlying.i(), ord);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Sorted() {
  this.d7 = 0;
  this.fv = null;
  this.gr = null;
  this.jF = false;
  this.ob = null;
  this.oc = false;
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
$p.d3 = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.cP = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.g4 = (function() {
  return $m_sci_Seq$().fO(this);
});
$p.p = (function() {
  return this.d().f();
});
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bn = (function() {
  return new $c_sc_SeqView$Sorted$ReverseSorted(this).d();
});
$p.aX = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.dt = (function() {
  return $m_sc_View$().aq();
});
$p.bz = (function() {
  return "SeqView";
});
$p.ay = (function() {
  return $m_sc_View$();
});
$p.t = (function() {
  return $f_sc_View__toString__T(this);
});
$p.iv = (function() {
  if ((!this.oc)) {
    var len = this.d7;
    if ((len === 0)) {
      var res = $m_sci_Nil$();
    } else if ((len === 1)) {
      $m_sci_List$();
      var elems = $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [this.gr.p()]);
      var res = $m_sci_Nil$().iu(elems);
    } else {
      var arr = new $ac_O(len);
      this.gr.bm(arr, 0, 2147483647);
      $m_ju_Arrays$().g2(arr, this.fv);
      var res = $m_sci_ArraySeq$().fa(arr);
    }
    this.jF = true;
    this.gr = null;
    this.ob = res;
    this.oc = true;
  }
  return this.ob;
});
$p.qp = (function() {
  return (this.jF ? this.iv() : this.gr);
});
$p.n = (function(i) {
  return this.iv().n(i);
});
$p.i = (function() {
  return this.d7;
});
$p.d = (function() {
  return $m_sc_Iterator$().J.gW(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.iv().d())));
});
$p.q = (function() {
  return this.d7;
});
$p.c = (function() {
  return (this.d7 === 0);
});
$p.kR = (function(ord1) {
  var x$2 = this.fv;
  if (((ord1 === null) ? (x$2 === null) : ord1.o(x$2))) {
    return this;
  } else {
    return (ord1.cW(this.fv) ? new $c_sc_SeqView$Sorted$ReverseSorted(this) : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.qp(), this.d7, ord1));
  }
});
$p.b5 = (function(ord) {
  return this.kR(ord);
});
$p.C = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.f5 = (function(coll) {
  return $m_sc_View$().ie(coll);
});
var $d_sc_SeqView$Sorted = new $TypeData().i($c_sc_SeqView$Sorted, "scala.collection.SeqView$Sorted", ({
  gv: 1,
  b: 1,
  c: 1,
  g: 1,
  k: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  a6: 1
}));
function $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse($thiz) {
  if ((!$thiz.oe)) {
    $thiz.od = $ct_sc_SeqView$Reverse__sc_SeqOps__(new $c_sc_SeqView$Reverse(), $thiz.cI.iv());
    $thiz.oe = true;
  }
  return $thiz.od;
}
/** @constructor */
function $c_sc_SeqView$Sorted$ReverseSorted(outer) {
  this.od = null;
  this.oe = false;
  this.cI = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.cI = outer;
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
$p.d3 = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.cP = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.g4 = (function() {
  return $m_sci_Seq$().fO(this);
});
$p.p = (function() {
  return this.d().f();
});
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bn = (function() {
  return this.cI.d();
});
$p.aX = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.dt = (function() {
  return $m_sc_View$().aq();
});
$p.bz = (function() {
  return "SeqView";
});
$p.ay = (function() {
  return $m_sc_View$();
});
$p.t = (function() {
  return $f_sc_View__toString__T(this);
});
$p.n = (function(i) {
  return $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).n(i);
});
$p.i = (function() {
  return this.cI.d7;
});
$p.d = (function() {
  return $m_sc_Iterator$().J.gW(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).d())));
});
$p.q = (function() {
  return this.cI.d7;
});
$p.c = (function() {
  return (this.cI.d7 === 0);
});
$p.kR = (function(ord1) {
  var x$2 = this.cI.fv;
  if (((ord1 === null) ? (x$2 === null) : ord1.o(x$2))) {
    return this.cI;
  } else {
    return (ord1.cW(this.cI.fv) ? this : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.cI.qp(), this.cI.d7, ord1));
  }
});
$p.b5 = (function(ord) {
  return this.kR(ord);
});
$p.C = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.f5 = (function(coll) {
  return $m_sc_View$().ie(coll);
});
var $d_sc_SeqView$Sorted$ReverseSorted = new $TypeData().i($c_sc_SeqView$Sorted$ReverseSorted, "scala.collection.SeqView$Sorted$ReverseSorted", ({
  gw: 1,
  b: 1,
  c: 1,
  g: 1,
  k: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  a6: 1
}));
/** @constructor */
function $c_sc_View$$anon$1(it$3) {
  this.og = null;
  this.og = it$3;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.d = (function() {
  return this.og.I();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  gB: 1,
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
  this.oi = null;
  this.oh = null;
  this.oi = underlying;
  this.oh = pf;
}
$p = $c_sc_View$Collect.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Collect;
/** @constructor */
function $h_sc_View$Collect() {
}
$h_sc_View$Collect.prototype = $p;
$p.d = (function() {
  var this$1 = this.oi.d();
  return new $c_sc_Iterator$$anon$7(this.oh, this$1);
});
var $d_sc_View$Collect = new $TypeData().i($c_sc_View$Collect, "scala.collection.View$Collect", ({
  gC: 1,
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
  this.hL = null;
  this.oj = null;
  this.hL = underlying;
  this.oj = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.d = (function() {
  var this$1 = this.hL.d();
  return new $c_sc_Iterator$$anon$8(this.oj, this$1);
});
$p.q = (function() {
  return ((this.hL.q() === 0) ? 0 : (-1));
});
$p.c = (function() {
  return this.hL.c();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  gD: 1,
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
  $thiz.eV = underlying;
  $thiz.gt = f;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
  this.eV = null;
  this.gt = null;
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
$p.d = (function() {
  var this$1 = this.eV.d();
  return new $c_sc_Iterator$$anon$9(this.gt, this$1);
});
$p.q = (function() {
  return this.eV.q();
});
$p.c = (function() {
  return this.eV.c();
});
var $d_sc_View$Map = new $TypeData().i($c_sc_View$Map, "scala.collection.View$Map", ({
  aI: 1,
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
$p.cW = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.Z = (function(x, y) {
  return $m_jl_Double$().i8((+x), (+y));
});
$p.cY = (function(x, y) {
  return $f_s_math_Ordering$Double$IeeeOrdering__lteq__D__D__Z(this, (+x), (+y));
});
$p.cV = (function(x, y) {
  return $f_s_math_Ordering$Double$IeeeOrdering__gteq__D__D__Z(this, (+x), (+y));
});
$p.cC = (function(x, y) {
  var x$1 = (+x);
  var y$1 = (+y);
  return (+Math.max(x$1, y$1));
});
$p.cD = (function(x, y) {
  var x$1 = (+x);
  var y$1 = (+y);
  return (+Math.min(x$1, y$1));
});
$p.qi = (function(x, y) {
  return $f_s_math_Numeric$DoubleIsFractional__plus__D__D__D(this, (+x), (+y));
});
$p.qI = (function(x, y) {
  return $f_s_math_Numeric$DoubleIsFractional__times__D__D__D(this, (+x), (+y));
});
$p.ig = (function(x) {
  return x;
});
var $d_s_math_Numeric$DoubleIsFractional$ = new $TypeData().i($c_s_math_Numeric$DoubleIsFractional$, "scala.math.Numeric$DoubleIsFractional$", ({
  ig: 1,
  F: 1,
  a: 1,
  a7: 1,
  a9: 1,
  a8: 1,
  id: 1,
  ib: 1,
  ie: 1,
  is: 1
}));
var $n_s_math_Numeric$DoubleIsFractional$;
function $m_s_math_Numeric$DoubleIsFractional$() {
  if ((!$n_s_math_Numeric$DoubleIsFractional$)) {
    $n_s_math_Numeric$DoubleIsFractional$ = new $c_s_math_Numeric$DoubleIsFractional$();
  }
  return $n_s_math_Numeric$DoubleIsFractional$;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.iH = ($thiz.e1 !== null);
  $thiz.hr = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.e1);
  if ($thiz.iH) {
    var newParentLastUpdateId = $thiz.e1.jZ();
    if ((newParentLastUpdateId !== $thiz.hr)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.kf(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.hr = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.iH) {
    $thiz.hr = $thiz.e1.jZ();
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.e1, $thiz, false);
  $f_Lcom_raquo_airstream_core_Signal__onStart__V($thiz);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.e1, $thiz);
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
$p.uC = (function(that) {
  return this.fN(that);
});
$p.o = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.b7 = (function() {
  return "Set";
});
$p.t = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.e = (function(v1) {
  return this.bM(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.aY() === o.aY())) {
      try {
        return $thiz.fN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((map$1) => ((kv$2) => $m_sr_BoxesRunTime$().l(map$1.cU(kv$2.S, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sc_Map$().oa.I()))), kv$2.R)))(o)));
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.ac)));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_misc_CollectStream(parent, fn) {
  this.lm = null;
  this.ll = false;
  this.ln = null;
  this.li = null;
  this.lk = null;
  this.lp = false;
  this.iE = null;
  this.lj = null;
  this.lo = 0;
  this.iE = parent;
  this.lj = fn;
  this.lm = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.lo = ((1 + parent.f9()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.ez = (function() {
  return this.lm;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.t = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fS = (function() {
  return this.ll;
});
$p.eA = (function() {
  return this.ln;
});
$p.cX = (function(x$1) {
  this.ll = x$1;
});
$p.fW = (function(x$1) {
  this.ln = x$1;
});
$p.o = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.h7 = (function(observer) {
});
$p.dp = (function() {
  return this.li;
});
$p.ds = (function() {
  return this.lk;
});
$p.hj = (function() {
  return this.lp;
});
$p.fd = (function(x$1) {
  this.lp = x$1;
});
$p.gU = (function(x$0) {
  this.li = x$0;
});
$p.gV = (function(x$0) {
  this.lk = x$0;
});
$p.he = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.iE);
});
$p.hb = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.hd = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.f9 = (function() {
  return this.lo;
});
$p.is = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.lj.e(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchResult1: {
      var $x_1;
      var x2 = $m_s_util_control_NonFatal$().e0(e$2);
      if ((!x2.c())) {
        var $x_1 = new $c_s_util_Failure(x2.y());
        break matchResult1;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
    }
  }
  $x_1.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
    if ((!nextValue.c())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.y(), transaction);
    }
  })));
});
$p.h8 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.kL = (function() {
  return this.iE;
});
$p.h5 = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.f8 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  d5: 1,
  ao: 1,
  aa: 1,
  at: 1,
  au: 1,
  aP: 1,
  aN: 1,
  av: 1,
  aR: 1,
  aF: 1,
  be: 1,
  bd: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.lt = null;
  this.ls = false;
  this.lu = null;
  this.iF = 0;
  this.lq = null;
  this.lr = null;
  this.lw = false;
  this.iG = null;
  this.iH = false;
  this.hr = 0;
  this.e1 = null;
  this.iI = null;
  this.iJ = null;
  this.lv = 0;
  this.e1 = parent;
  this.iI = project;
  this.iJ = recover;
  this.lt = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.iF = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.iG = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.lv = ((1 + parent.f9()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.ez = (function() {
  return this.lt;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.t = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fS = (function() {
  return this.ls;
});
$p.eA = (function() {
  return this.lu;
});
$p.cX = (function(x$1) {
  this.ls = x$1;
});
$p.fW = (function(x$1) {
  this.lu = x$1;
});
$p.o = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.jZ = (function() {
  return this.iF;
});
$p.k0 = (function(x$1) {
  this.iF = x$1;
});
$p.h7 = (function(observer) {
  observer.fX($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.dp = (function() {
  return this.lq;
});
$p.ds = (function() {
  return this.lr;
});
$p.hj = (function() {
  return this.lw;
});
$p.fd = (function(x$1) {
  this.lw = x$1;
});
$p.gU = (function(x$0) {
  this.lq = x$0;
});
$p.gV = (function(x$0) {
  this.lr = x$0;
});
$p.kH = (function() {
  return this.iG;
});
$p.q5 = (function(x$1) {
  this.iG = x$1;
});
$p.kX = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.is = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.h8 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.he = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.hb = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.f9 = (function() {
  return this.lv;
});
$p.hd = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.iJ;
    if (this$2.c()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.y();
      try {
        var $x_1 = new $c_s_util_Success(x0.bU(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchResult1: {
          var $x_1;
          var x2 = $m_s_util_control_NonFatal$().e0(e$2);
          if ((!x2.c())) {
            var $x_1 = new $c_s_util_Failure(x2.y());
            break matchResult1;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
        }
      }
      $x_1.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$3) => ((tryError) => {
        $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$3$3), transaction);
      }))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$4) => ((nextValue) => {
        if ((nextValue === null)) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError$3$4, transaction);
        } else if ((!nextValue.c())) {
          $f_Lcom_raquo_airstream_core_WritableSignal__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.y(), transaction);
        }
      }))(nextError)));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.kF(this.iI), transaction);
  })));
});
$p.kf = (function() {
  var originalValue = this.e1.kX().kF(this.iI);
  return originalValue.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.iJ;
    if (this$2.c()) {
      return originalValue;
    } else {
      var x0 = this$2.y();
      try {
        var $x_1 = new $c_s_util_Success(x0.bU(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => null))));
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        matchResult1: {
          var $x_1;
          var x2 = $m_s_util_control_NonFatal$().e0(e$2);
          if ((!x2.c())) {
            var $x_1 = new $c_s_util_Failure(x2.y());
            break matchResult1;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
        }
      }
      return $x_1.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
        if ((nextValue === null)) {
          return originalValue;
        } else {
          var this$10 = (nextValue.c() ? $m_s_None$() : new $c_s_Some(new $c_s_util_Success(nextValue.y())));
          return (this$10.c() ? originalValue : this$10.y());
        }
      })));
    }
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$6) => originalValue)));
});
$p.h5 = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this, project, $m_s_None$());
});
$p.f8 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  d6: 1,
  ao: 1,
  aa: 1,
  at: 1,
  au: 1,
  aQ: 1,
  bj: 1,
  av: 1,
  bk: 1,
  aF: 1,
  cO: 1,
  cP: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapStream(parent, project, recover) {
  this.lA = null;
  this.lz = false;
  this.lB = null;
  this.lx = null;
  this.ly = null;
  this.lF = false;
  this.iK = null;
  this.lC = null;
  this.lD = null;
  this.lE = 0;
  this.iK = parent;
  this.lC = project;
  this.lD = recover;
  this.lA = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.lE = ((1 + parent.f9()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapStream() {
}
$h_Lcom_raquo_airstream_misc_MapStream.prototype = $p;
$p.ez = (function() {
  return this.lA;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.t = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fS = (function() {
  return this.lz;
});
$p.eA = (function() {
  return this.lB;
});
$p.cX = (function(x$1) {
  this.lz = x$1;
});
$p.fW = (function(x$1) {
  this.lB = x$1;
});
$p.o = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.h7 = (function(observer) {
});
$p.dp = (function() {
  return this.lx;
});
$p.ds = (function() {
  return this.ly;
});
$p.hj = (function() {
  return this.lF;
});
$p.fd = (function(x$1) {
  this.lF = x$1;
});
$p.gU = (function(x$0) {
  this.lx = x$0;
});
$p.gV = (function(x$0) {
  this.ly = x$0;
});
$p.he = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.iK);
});
$p.hb = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.hd = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.kL = (function() {
  return this.iK;
});
$p.f9 = (function() {
  return this.lE;
});
$p.is = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.lC.e(nextParentValue));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    matchResult1: {
      var $x_1;
      var x2 = $m_s_util_control_NonFatal$().e0(e$2);
      if ((!x2.c())) {
        var $x_1 = new $c_s_util_Failure(x2.y());
        break matchResult1;
      }
      throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
    }
  }
  $x_1.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    this.h8(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, _$2, transaction);
  })));
});
$p.h8 = (function(nextError, transaction) {
  var this$1 = this.lD;
  if (this$1.c()) {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
  } else {
    var x0 = this$1.y();
    try {
      var $x_1 = new $c_s_util_Success(x0.bU(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => null))));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      matchResult1: {
        var $x_1;
        var x2 = $m_s_util_control_NonFatal$().e0(e$2);
        if ((!x2.c())) {
          var $x_1 = new $c_s_util_Failure(x2.y());
          break matchResult1;
        }
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
      }
    }
    $x_1.cd(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((tryError) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError), transaction);
    })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
      if ((nextValue === null)) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
      } else if ((!nextValue.c())) {
        $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.y(), transaction);
      }
    })));
  }
});
$p.h5 = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.f8 = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapStream, "com.raquo.airstream.misc.MapStream", ({
  d7: 1,
  ao: 1,
  aa: 1,
  at: 1,
  au: 1,
  aP: 1,
  aN: 1,
  av: 1,
  aR: 1,
  aF: 1,
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
$p.bU = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bn = (function() {
  return this.cg().d();
});
$p.kB = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.b5 = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.aX = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fY = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.i6 = (function(that) {
  return true;
});
$p.o = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().qt(this);
});
$p.t = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.ce = (function(x) {
  return this.kB((x | 0));
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
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bn = (function() {
  return this.cg().d();
});
$p.aX = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.ex = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.b7 = (function() {
  return "SeqView";
});
$p.C = (function(f) {
  return this.ex(f);
});
$p.b5 = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.s)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.s)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aB)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
function $f_scm_CheckedIndexedSeqView__iterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.q6().I() | 0))));
}
function $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.q6().I() | 0))));
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.ms = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.qW = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
  $thiz.qX = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
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
$p.bU = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cS = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.ce = (function(key) {
  return this.bM(key);
});
$p.cP = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.h1 = (function(coll) {
  return this.kG().ab(coll);
});
$p.o = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().tA(this);
});
$p.b7 = (function() {
  return "Map";
});
$p.t = (function() {
  return $f_sc_Iterable__toString__T(this);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.eT = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.eT = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.n = (function(idx) {
  return this.eT.n(idx);
});
$p.i = (function() {
  return this.eT.i();
});
$p.d = (function() {
  return this.eT.d();
});
$p.q = (function() {
  return this.eT.q();
});
$p.c = (function() {
  return this.eT.c();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  bW: 1,
  az: 1,
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
  a6: 1
}));
function $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f) {
  $thiz.gq = underlying;
  $thiz.hK = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.eV = null;
  this.gt = null;
  this.gq = null;
  this.hK = null;
}
$p = $c_sc_SeqView$Map.prototype = new $h_sc_View$Map();
$p.constructor = $c_sc_SeqView$Map;
/** @constructor */
function $h_sc_SeqView$Map() {
}
$h_sc_SeqView$Map.prototype = $p;
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bn = (function() {
  return this.cg().d();
});
$p.aX = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.ex = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.b7 = (function() {
  return "SeqView";
});
$p.n = (function(idx) {
  return this.hK.e(this.gq.n(idx));
});
$p.i = (function() {
  return this.gq.i();
});
$p.C = (function(f) {
  return this.ex(f);
});
$p.b5 = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
var $d_sc_SeqView$Map = new $TypeData().i($c_sc_SeqView$Map, "scala.collection.SeqView$Map", ({
  b1: 1,
  aI: 1,
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
  a6: 1
}));
function $ct_sc_SeqView$Reverse__sc_SeqOps__($thiz, underlying) {
  $thiz.eU = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.eU = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.n = (function(i) {
  return this.eU.n(((((this.i() - 1) | 0) - i) | 0));
});
$p.i = (function() {
  return this.eU.i();
});
$p.d = (function() {
  return this.eU.bn();
});
$p.q = (function() {
  return this.eU.q();
});
$p.c = (function() {
  return this.eU.c();
});
var $d_sc_SeqView$Reverse = new $TypeData().i($c_sc_SeqView$Reverse, "scala.collection.SeqView$Reverse", ({
  bX: 1,
  az: 1,
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
  a6: 1
}));
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.x)));
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.x)));
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_package$$anon$1() {
  this.mh = null;
  this.mi = false;
  this.mF = null;
  this.mG = false;
  this.ml = null;
  this.mm = false;
  this.mB = null;
  this.mC = false;
  this.mz = null;
  this.mA = false;
  this.mv = null;
  this.mw = false;
  this.mq = null;
  this.mr = false;
  this.mx = null;
  this.my = false;
  this.mN = null;
  this.mO = false;
  this.mL = null;
  this.mM = false;
  this.mR = null;
  this.mS = false;
  this.mJ = null;
  this.mK = false;
  this.mD = null;
  this.mE = false;
  this.mj = null;
  this.mk = false;
  this.mo = null;
  this.mp = false;
  this.mt = null;
  this.mu = false;
  this.mn = null;
  this.iV = null;
  this.iU = null;
  this.qV = null;
  this.mf = null;
  this.mg = false;
  this.mH = null;
  this.mI = false;
  this.ms = null;
  this.mP = null;
  this.mQ = false;
  this.qW = null;
  this.qX = null;
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
$p.oX = (function() {
  if ((!this.mi)) {
    this.mh = new $c_Lcom_raquo_laminar_tags_HtmlTag("a", false);
    this.mi = true;
  }
  return this.mh;
});
$p.qC = (function() {
  if ((!this.mG)) {
    this.mF = new $c_Lcom_raquo_laminar_tags_HtmlTag("span", false);
    this.mG = true;
  }
  return this.mF;
});
$p.i5 = (function() {
  if ((!this.mm)) {
    this.ml = new $c_Lcom_raquo_laminar_tags_HtmlTag("br", true);
    this.mm = true;
  }
  return this.ml;
});
$p.q2 = (function() {
  if ((!this.mC)) {
    this.mB = new $c_Lcom_raquo_laminar_tags_HtmlTag("label", false);
    this.mC = true;
  }
  return this.mB;
});
$p.pT = (function() {
  if ((!this.mA)) {
    this.mz = new $c_Lcom_raquo_laminar_tags_HtmlTag("input", true);
    this.mA = true;
  }
  return this.mz;
});
$p.t6 = (function() {
  if ((!this.mw)) {
    this.mv = new $c_Lcom_raquo_laminar_tags_HtmlTag("hr", true);
    this.mw = true;
  }
  return this.mv;
});
$p.gY = (function() {
  if ((!this.mr)) {
    this.mq = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.mr = true;
  }
  return this.mq;
});
$p.pR = (function() {
  if ((!this.my)) {
    this.mx = new $c_Lcom_raquo_laminar_keys_HtmlAttr("href", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.my = true;
  }
  return this.mx;
});
$p.uH = (function() {
  if ((!this.mO)) {
    this.mN = new $c_Lcom_raquo_laminar_keys_HtmlAttr("type", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.mO = true;
  }
  return this.mN;
});
$p.qM = (function() {
  if ((!this.mM)) {
    this.mL = this.uH();
    this.mM = true;
  }
  return this.mL;
});
$p.qP = (function() {
  if ((!this.mS)) {
    this.mR = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.mS = true;
  }
  return this.mR;
});
$p.qH = (function() {
  if ((!this.mK)) {
    this.mJ = new $c_Lcom_raquo_laminar_keys_HtmlProp("target", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.mK = true;
  }
  return this.mJ;
});
$p.qc = (function() {
  if ((!this.mE)) {
    this.mD = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.mE = true;
  }
  return this.mD;
});
$p.p6 = (function() {
  if ((!this.mk)) {
    this.mj = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3("align-items");
    this.mk = true;
  }
  return this.mj;
});
$p.pv = (function() {
  if ((!this.mp)) {
    this.mo = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28("display");
    this.mp = true;
  }
  return this.mo;
});
$p.pO = (function() {
  if ((!this.mu)) {
    this.mt = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5("gap");
    this.mu = true;
  }
  return this.mt;
});
$p.rr = (function() {
  if ((!this.mg)) {
    this.mf = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.mg = true;
  }
  return this.mf;
});
$p.bB = (function() {
  if ((!this.mI)) {
    this.mH = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.mI = true;
  }
  return this.mH;
});
$p.uK = (function() {
  if ((!this.mQ)) {
    this.mP = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.mQ = true;
  }
  return this.mP;
});
var $d_Lcom_raquo_laminar_api_package$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_package$$anon$1, "com.raquo.laminar.api.package$$anon$1", ({
  dA: 1,
  dT: 1,
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
$p.cU = (function(key, default$1) {
  return $f_sc_MapOps__getOrElse__O__F0__O(this, key, default$1);
});
$p.e = (function(key) {
  return $f_sc_MapOps__apply__O__O(this, key);
});
$p.bU = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eE = (function() {
  return new $c_sc_MapOps$$anon$3(this);
});
$p.ce = (function(key) {
  return $f_sc_MapOps__contains__O__Z(this, key);
});
$p.cP = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.t = (function() {
  return $f_sc_View__toString__T(this);
});
$p.b7 = (function() {
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
$p.cg = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.p = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aX = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.i();
});
$p.b7 = (function() {
  return "IndexedSeqView";
});
/** @constructor */
function $c_sc_MapView$Id(underlying) {
  this.go = null;
  this.go = underlying;
}
$p = $c_sc_MapView$Id.prototype = new $h_sc_AbstractMapView();
$p.constructor = $c_sc_MapView$Id;
/** @constructor */
function $h_sc_MapView$Id() {
}
$h_sc_MapView$Id.prototype = $p;
$p.bW = (function(key) {
  return this.go.bW(key);
});
$p.d = (function() {
  return this.go.d();
});
$p.q = (function() {
  return this.go.q();
});
$p.c = (function() {
  return this.go.c();
});
var $d_sc_MapView$Id = new $TypeData().i($c_sc_MapView$Id, "scala.collection.MapView$Id", ({
  gs: 1,
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
  ad: 1,
  bV: 1
}));
/** @constructor */
function $c_sc_MapView$MapValues(underlying, f) {
  this.gp = null;
  this.jE = null;
  this.gp = underlying;
  this.jE = f;
}
$p = $c_sc_MapView$MapValues.prototype = new $h_sc_AbstractMapView();
$p.constructor = $c_sc_MapView$MapValues;
/** @constructor */
function $h_sc_MapView$MapValues() {
}
$h_sc_MapView$MapValues.prototype = $p;
$p.d = (function() {
  return new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((kv$2) => new $c_T2(kv$2.S, this.jE.e(kv$2.R)))), this.gp.d());
});
$p.bW = (function(key) {
  var this$1 = this.gp.bW(key);
  var f = this.jE;
  return (this$1.c() ? $m_s_None$() : new $c_s_Some(f.e(this$1.y())));
});
$p.q = (function() {
  return this.gp.q();
});
$p.c = (function() {
  return this.gp.c();
});
var $d_sc_MapView$MapValues = new $TypeData().i($c_sc_MapView$MapValues, "scala.collection.MapView$MapValues", ({
  gt: 1,
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
  ad: 1,
  bV: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.eT = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.cg = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.p = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aX = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.i();
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.b7 = (function() {
  return "IndexedSeqView";
});
$p.C = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.ex = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  gf: 1,
  bW: 1,
  az: 1,
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
  a6: 1,
  o: 1,
  aA: 1
}));
function $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__($thiz, underlying, f) {
  $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Map() {
  this.eV = null;
  this.gt = null;
  this.gq = null;
  this.hK = null;
}
$p = $c_sc_IndexedSeqView$Map.prototype = new $h_sc_SeqView$Map();
$p.constructor = $c_sc_IndexedSeqView$Map;
/** @constructor */
function $h_sc_IndexedSeqView$Map() {
}
$h_sc_IndexedSeqView$Map.prototype = $p;
$p.cg = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.p = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aX = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.i();
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.fV = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.b7 = (function() {
  return "IndexedSeqView";
});
$p.C = (function(f) {
  return this.fV(f);
});
$p.ex = (function(f) {
  return this.fV(f);
});
var $d_sc_IndexedSeqView$Map = new $TypeData().i($c_sc_IndexedSeqView$Map, "scala.collection.IndexedSeqView$Map", ({
  bR: 1,
  b1: 1,
  aI: 1,
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
  a6: 1,
  o: 1,
  aA: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Reverse(underlying) {
  this.eU = null;
  $ct_sc_SeqView$Reverse__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Reverse.prototype = new $h_sc_SeqView$Reverse();
$p.constructor = $c_sc_IndexedSeqView$Reverse;
/** @constructor */
function $h_sc_IndexedSeqView$Reverse() {
}
$h_sc_IndexedSeqView$Reverse.prototype = $p;
$p.cg = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.p = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aX = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.i();
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.b7 = (function() {
  return "IndexedSeqView";
});
$p.C = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.ex = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  gg: 1,
  bX: 1,
  az: 1,
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
  a6: 1,
  o: 1,
  aA: 1
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
$p.g4 = (function() {
  return this;
});
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.jM = null;
  this.hQ = null;
  this.jM = underlying;
  this.hQ = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.n = (function(n) {
  return this.jM.n(n);
});
$p.i = (function() {
  return this.jM.aT;
});
$p.bz = (function() {
  return "ArrayBufferView";
});
$p.d = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.hQ);
});
$p.bn = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(this, this.hQ);
});
$p.fV = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.hQ);
});
$p.C = (function(f) {
  return this.fV(f);
});
$p.ex = (function(f) {
  return this.fV(f);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  hA: 1,
  g8: 1,
  az: 1,
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
  a6: 1,
  o: 1,
  aA: 1
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
$p.ay = (function() {
  return $m_sci_Iterable$();
});
$p.kG = (function() {
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
        var a = $thiz.i4();
        var b = o.i4();
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
          equal = $m_sr_BoxesRunTime$().l($thiz.n(index), o.n(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.d().ev(index);
          var thatIt = o.d().ev(index);
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.he)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hf)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hg)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hh)));
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
  this.eV = null;
  this.gt = null;
  this.gq = null;
  this.hK = null;
  this.gC = null;
  this.gC = mutationCount;
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
$p.fV = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gC);
});
$p.q6 = (function() {
  return this.gC;
});
$p.C = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gC);
});
$p.ex = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gC);
});
var $d_scm_CheckedIndexedSeqView$Map = new $TypeData().i($c_scm_CheckedIndexedSeqView$Map, "scala.collection.mutable.CheckedIndexedSeqView$Map", ({
  hK: 1,
  bR: 1,
  b1: 1,
  aI: 1,
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
  a6: 1,
  o: 1,
  aA: 1,
  hH: 1
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
$p.aY = (function() {
  return 0;
});
$p.q = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.k5 = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.bM = (function(key) {
  return false;
});
$p.bW = (function(key) {
  return $m_s_None$();
});
$p.cU = (function(key, default$1) {
  return default$1.I();
});
$p.d = (function() {
  return $m_sc_Iterator$().J;
});
$p.eE = (function() {
  return $m_sc_Iterator$().J;
});
$p.e = (function(key) {
  this.k5(key);
});
$p.eD = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  gY: 1,
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
  ad: 1,
  al: 1,
  d: 1,
  ac: 1,
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
  this.cK = null;
  this.dG = null;
  this.cK = key1;
  this.dG = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.aY = (function() {
  return 1;
});
$p.q = (function() {
  return 1;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().l(key, this.cK)) {
    return this.dG;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bM = (function(key) {
  return $m_sr_BoxesRunTime$().l(key, this.cK);
});
$p.bW = (function(key) {
  return ($m_sr_BoxesRunTime$().l(key, this.cK) ? new $c_s_Some(this.dG) : $m_s_None$());
});
$p.cU = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().l(key, this.cK) ? this.dG : default$1.I());
});
$p.d = (function() {
  return new $c_sc_Iterator$$anon$20(new $c_T2(this.cK, this.dG));
});
$p.eE = (function() {
  return new $c_sc_Iterator$$anon$20(this.dG);
});
$p.fc = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.cK) ? new $c_sci_Map$Map1(this.cK, value) : new $c_sci_Map$Map2(this.cK, this.dG, key, value));
});
$p.fN = (function(p) {
  return (!(!p.e(new $c_T2(this.cK, this.dG))));
});
$p.x = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cG(this.cK, this.dG);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dW;
  h = $m_s_util_hashing_MurmurHash3$().z(h, a);
  h = $m_s_util_hashing_MurmurHash3$().z(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dZ(h, c);
  return $m_s_util_hashing_MurmurHash3$().aV(h, 1);
});
$p.eD = (function(key, value) {
  return this.fc(key, value);
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
  ad: 1,
  al: 1,
  d: 1,
  ac: 1,
  v: 1,
  as: 1,
  ag: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.co = null;
  this.dH = null;
  this.cp = null;
  this.dI = null;
  this.co = key1;
  this.dH = value1;
  this.cp = key2;
  this.dI = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.aY = (function() {
  return 2;
});
$p.q = (function() {
  return 2;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().l(key, this.co)) {
    return this.dH;
  } else if ($m_sr_BoxesRunTime$().l(key, this.cp)) {
    return this.dI;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bM = (function(key) {
  return ($m_sr_BoxesRunTime$().l(key, this.co) || $m_sr_BoxesRunTime$().l(key, this.cp));
});
$p.bW = (function(key) {
  return ($m_sr_BoxesRunTime$().l(key, this.co) ? new $c_s_Some(this.dH) : ($m_sr_BoxesRunTime$().l(key, this.cp) ? new $c_s_Some(this.dI) : $m_s_None$()));
});
$p.cU = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().l(key, this.co) ? this.dH : ($m_sr_BoxesRunTime$().l(key, this.cp) ? this.dI : default$1.I()));
});
$p.d = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.eE = (function() {
  return new $c_sci_Map$Map2$$anon$3(this);
});
$p.fc = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.co) ? new $c_sci_Map$Map2(this.co, value, this.cp, this.dI) : ($m_sr_BoxesRunTime$().l(key, this.cp) ? new $c_sci_Map$Map2(this.co, this.dH, this.cp, value) : new $c_sci_Map$Map3(this.co, this.dH, this.cp, this.dI, key, value)));
});
$p.fN = (function(p) {
  return ((!(!p.e(new $c_T2(this.co, this.dH)))) && (!(!p.e(new $c_T2(this.cp, this.dI)))));
});
$p.x = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cG(this.co, this.dH);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cG(this.cp, this.dI);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dW;
  h = $m_s_util_hashing_MurmurHash3$().z(h, a);
  h = $m_s_util_hashing_MurmurHash3$().z(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dZ(h, c);
  return $m_s_util_hashing_MurmurHash3$().aV(h, 2);
});
$p.eD = (function(key, value) {
  return this.fc(key, value);
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
  ad: 1,
  al: 1,
  d: 1,
  ac: 1,
  v: 1,
  as: 1,
  ag: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.c5 = null;
  this.dg = null;
  this.c6 = null;
  this.dh = null;
  this.c7 = null;
  this.di = null;
  this.c5 = key1;
  this.dg = value1;
  this.c6 = key2;
  this.dh = value2;
  this.c7 = key3;
  this.di = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.aY = (function() {
  return 3;
});
$p.q = (function() {
  return 3;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().l(key, this.c5)) {
    return this.dg;
  } else if ($m_sr_BoxesRunTime$().l(key, this.c6)) {
    return this.dh;
  } else if ($m_sr_BoxesRunTime$().l(key, this.c7)) {
    return this.di;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bM = (function(key) {
  return (($m_sr_BoxesRunTime$().l(key, this.c5) || $m_sr_BoxesRunTime$().l(key, this.c6)) || $m_sr_BoxesRunTime$().l(key, this.c7));
});
$p.bW = (function(key) {
  return ($m_sr_BoxesRunTime$().l(key, this.c5) ? new $c_s_Some(this.dg) : ($m_sr_BoxesRunTime$().l(key, this.c6) ? new $c_s_Some(this.dh) : ($m_sr_BoxesRunTime$().l(key, this.c7) ? new $c_s_Some(this.di) : $m_s_None$())));
});
$p.cU = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().l(key, this.c5) ? this.dg : ($m_sr_BoxesRunTime$().l(key, this.c6) ? this.dh : ($m_sr_BoxesRunTime$().l(key, this.c7) ? this.di : default$1.I())));
});
$p.d = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.eE = (function() {
  return new $c_sci_Map$Map3$$anon$6(this);
});
$p.fc = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.c5) ? new $c_sci_Map$Map3(this.c5, value, this.c6, this.dh, this.c7, this.di) : ($m_sr_BoxesRunTime$().l(key, this.c6) ? new $c_sci_Map$Map3(this.c5, this.dg, this.c6, value, this.c7, this.di) : ($m_sr_BoxesRunTime$().l(key, this.c7) ? new $c_sci_Map$Map3(this.c5, this.dg, this.c6, this.dh, this.c7, value) : new $c_sci_Map$Map4(this.c5, this.dg, this.c6, this.dh, this.c7, this.di, key, value))));
});
$p.fN = (function(p) {
  return (((!(!p.e(new $c_T2(this.c5, this.dg)))) && (!(!p.e(new $c_T2(this.c6, this.dh))))) && (!(!p.e(new $c_T2(this.c7, this.di)))));
});
$p.x = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cG(this.c5, this.dg);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cG(this.c6, this.dh);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cG(this.c7, this.di);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dW;
  h = $m_s_util_hashing_MurmurHash3$().z(h, a);
  h = $m_s_util_hashing_MurmurHash3$().z(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dZ(h, c);
  return $m_s_util_hashing_MurmurHash3$().aV(h, 3);
});
$p.eD = (function(key, value) {
  return this.fc(key, value);
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
  ad: 1,
  al: 1,
  d: 1,
  ac: 1,
  v: 1,
  as: 1,
  ag: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.bE = null;
  this.cq = null;
  this.bF = null;
  this.cr = null;
  this.bG = null;
  this.cs = null;
  this.bH = null;
  this.ct = null;
  this.bE = key1;
  this.cq = value1;
  this.bF = key2;
  this.cr = value2;
  this.bG = key3;
  this.cs = value3;
  this.bH = key4;
  this.ct = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.aY = (function() {
  return 4;
});
$p.q = (function() {
  return 4;
});
$p.c = (function() {
  return false;
});
$p.e = (function(key) {
  if ($m_sr_BoxesRunTime$().l(key, this.bE)) {
    return this.cq;
  } else if ($m_sr_BoxesRunTime$().l(key, this.bF)) {
    return this.cr;
  } else if ($m_sr_BoxesRunTime$().l(key, this.bG)) {
    return this.cs;
  } else if ($m_sr_BoxesRunTime$().l(key, this.bH)) {
    return this.ct;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bM = (function(key) {
  return ((($m_sr_BoxesRunTime$().l(key, this.bE) || $m_sr_BoxesRunTime$().l(key, this.bF)) || $m_sr_BoxesRunTime$().l(key, this.bG)) || $m_sr_BoxesRunTime$().l(key, this.bH));
});
$p.bW = (function(key) {
  return ($m_sr_BoxesRunTime$().l(key, this.bE) ? new $c_s_Some(this.cq) : ($m_sr_BoxesRunTime$().l(key, this.bF) ? new $c_s_Some(this.cr) : ($m_sr_BoxesRunTime$().l(key, this.bG) ? new $c_s_Some(this.cs) : ($m_sr_BoxesRunTime$().l(key, this.bH) ? new $c_s_Some(this.ct) : $m_s_None$()))));
});
$p.cU = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().l(key, this.bE) ? this.cq : ($m_sr_BoxesRunTime$().l(key, this.bF) ? this.cr : ($m_sr_BoxesRunTime$().l(key, this.bG) ? this.cs : ($m_sr_BoxesRunTime$().l(key, this.bH) ? this.ct : default$1.I()))));
});
$p.d = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.eE = (function() {
  return new $c_sci_Map$Map4$$anon$9(this);
});
$p.fc = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.bE) ? new $c_sci_Map$Map4(this.bE, value, this.bF, this.cr, this.bG, this.cs, this.bH, this.ct) : ($m_sr_BoxesRunTime$().l(key, this.bF) ? new $c_sci_Map$Map4(this.bE, this.cq, this.bF, value, this.bG, this.cs, this.bH, this.ct) : ($m_sr_BoxesRunTime$().l(key, this.bG) ? new $c_sci_Map$Map4(this.bE, this.cq, this.bF, this.cr, this.bG, value, this.bH, this.ct) : ($m_sr_BoxesRunTime$().l(key, this.bH) ? new $c_sci_Map$Map4(this.bE, this.cq, this.bF, this.cr, this.bG, this.cs, this.bH, value) : $m_sci_HashMap$().gx.fb(this.bE, this.cq).fb(this.bF, this.cr).fb(this.bG, this.cs).fb(this.bH, this.ct).fb(key, value)))));
});
$p.fN = (function(p) {
  return ((((!(!p.e(new $c_T2(this.bE, this.cq)))) && (!(!p.e(new $c_T2(this.bF, this.cr))))) && (!(!p.e(new $c_T2(this.bG, this.cs))))) && (!(!p.e(new $c_T2(this.bH, this.ct)))));
});
$p.s6 = (function(builder) {
  return builder.f4(this.bE, this.cq).f4(this.bF, this.cr).f4(this.bG, this.cs).f4(this.bH, this.ct);
});
$p.x = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cG(this.bE, this.cq);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cG(this.bF, this.cr);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cG(this.bG, this.cs);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cG(this.bH, this.ct);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dW;
  h = $m_s_util_hashing_MurmurHash3$().z(h, a);
  h = $m_s_util_hashing_MurmurHash3$().z(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dZ(h, c);
  return $m_s_util_hashing_MurmurHash3$().aV(h, 4);
});
$p.eD = (function(key, value) {
  return this.fc(key, value);
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
  ad: 1,
  al: 1,
  d: 1,
  ac: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gL)));
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
$p.ar = (function() {
  return this;
});
function $ct_sci_LazyList__O__($thiz, lazyState) {
  $thiz.b9 = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : $m_sci_LazyList$Uninitialized$());
  $thiz.df = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : lazyState);
  return $thiz;
}
function $ct_sci_LazyList__O__sci_LazyList__($thiz, head, tail) {
  $ct_sci_LazyList__O__($thiz, $m_sci_LazyList$EmptyMarker$());
  $thiz.b9 = head;
  $thiz.df = tail;
  return $thiz;
}
function $p_sci_LazyList__initState__V($thiz) {
  if (($thiz.b9 === $m_sci_LazyList$Uninitialized$())) {
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
    $thiz.b9 = l.b9;
  }
}
function $p_sci_LazyList__evaluated__sci_LazyList($thiz) {
  while (true) {
    if (($thiz.b9 !== $m_sci_LazyList$Uninitialized$())) {
      return (($thiz.df === null) ? $m_sci_LazyList$().G : $thiz);
    } else {
      $p_sci_LazyList__initState__V($thiz);
    }
  }
}
function $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz, f) {
  $m_sci_LazyList$();
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (($p_sci_LazyList__evaluated__sci_LazyList($thiz) === $m_sci_LazyList$().G) ? $m_sci_LazyList$().G : ($m_sci_LazyList$(), $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), f.e($thiz.p()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.au(), f)))))));
}
function $p_sci_LazyList__eagerHeadZipImpl__sc_Iterator__sci_LazyList($thiz, it) {
  return ((($p_sci_LazyList__evaluated__sci_LazyList($thiz) === $m_sci_LazyList$().G) || (!it.j())) ? $m_sci_LazyList$().G : ($m_sci_LazyList$(), $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), new $c_T2($thiz.p(), it.f()), ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sci_LazyList__eagerHeadZipImpl__sc_Iterator__sci_LazyList($thiz.au(), it))))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.s = (("" + b.s) + start);
  if (($thiz.b9 === $m_sci_LazyList$Uninitialized$())) {
    b.s = (b.s + "<not computed>");
  } else if (($p_sci_LazyList__evaluated__sci_LazyList($thiz) !== $m_sci_LazyList$().G)) {
    var obj = $thiz.p();
    b.s = (("" + b.s) + obj);
    var cursor = $thiz;
    var scout = $thiz.au();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.b9 !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$1) !== $m_sci_LazyList$().G))) {
        scout = scout.au();
        while (true) {
          if ((cursor !== scout)) {
            var this$2 = scout;
            var $x_1 = ((this$2.b9 !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$2) !== $m_sci_LazyList$().G));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var c = cursor;
            b.s = (("" + b.s) + sep);
            var obj$1 = c.p();
            b.s = (("" + b.s) + obj$1);
            cursor = cursor.au();
            scout = scout.au();
            var this$3 = scout;
            if (((this$3.b9 !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$3) !== $m_sci_LazyList$().G))) {
              scout = scout.au();
            }
          } else {
            break;
          }
        }
      }
    }
    var this$4 = scout;
    if ((!((this$4.b9 !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$4) !== $m_sci_LazyList$().G)))) {
      while ((cursor !== scout)) {
        var c$1 = cursor;
        b.s = (("" + b.s) + sep);
        var obj$2 = c$1.p();
        b.s = (("" + b.s) + obj$2);
        cursor = cursor.au();
      }
      if ((!(cursor.b9 !== $m_sci_LazyList$Uninitialized$()))) {
        b.s = (("" + b.s) + sep);
        b.s = (b.s + "<not computed>");
      }
    } else {
      if ((cursor !== $thiz)) {
        var runner = $thiz;
        while ((runner !== scout)) {
          runner = runner.au();
          scout = scout.au();
        }
        while (true) {
          var ct = cursor.au();
          if ((ct !== scout)) {
            var c$2 = cursor;
            b.s = (("" + b.s) + sep);
            var obj$3 = c$2.p();
            b.s = (("" + b.s) + obj$3);
          }
          cursor = ct;
          if ((cursor !== scout)) {
          } else {
            break;
          }
        }
      }
      b.s = (("" + b.s) + sep);
      b.s = (b.s + "<cycle>");
    }
  }
  b.s = (("" + b.s) + end);
  return b;
}
/** @constructor */
function $c_sci_LazyList() {
  this.b9 = null;
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
$p.fU = (function() {
  return $f_sc_LinearSeqOps__last__O(this);
});
$p.aX = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.kB = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.n = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fY = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.b7 = (function() {
  return "LinearSeq";
});
$p.c = (function() {
  return ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G);
});
$p.q = (function() {
  return (((this.b9 !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? 0 : (-1));
});
$p.p = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) {
    throw new $c_ju_NoSuchElementException("head of empty lazy list");
  } else {
    return this.b9;
  }
});
$p.au = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) {
    throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
  } else {
    return this.df;
  }
});
$p.sJ = (function() {
  var these = this;
  var those = this;
  if ((!($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().G))) {
    these = these.au();
  }
  while ((those !== these)) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().G)) {
      return this;
    }
    these = these.au();
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().G)) {
      return this;
    }
    these = these.au();
    if ((these === those)) {
      return this;
    }
    those = those.au();
  }
  return this;
});
$p.d = (function() {
  return (((this.b9 !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sc_Iterator$().J : new $c_sci_LazyList$LazyIterator(this));
});
$p.bV = (function(f) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if ((!($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal1) === $m_sci_LazyList$().G))) {
      f.e(\u03b4this$tailLocal1.p());
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.au();
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
      var \u03b4this$tailLocal2$tmp1 = \u03b4this$tailLocal2.au();
      var z$tailLocal1$tmp1 = op.bL(z$tailLocal1, \u03b4this$tailLocal2.p());
      \u03b4this$tailLocal2 = \u03b4this$tailLocal2$tmp1;
      z$tailLocal1 = z$tailLocal1$tmp1;
    }
  }
});
$p.bz = (function() {
  return "LazyList";
});
$p.du = (function(f) {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  } else {
    var reducedRes = this.p();
    var left = this.au();
    while ((!($p_sci_LazyList__evaluated__sci_LazyList(left) === $m_sci_LazyList$().G))) {
      reducedRes = f.bL(reducedRes, left.p());
      left = left.au();
    }
    return reducedRes;
  }
});
$p.tw = (function(f) {
  return (((this.b9 !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sci_LazyList$().G : $p_sci_LazyList__mapImpl__F1__sci_LazyList(this, f));
});
$p.sG = (function(f) {
  return (((this.b9 !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sci_LazyList$().G : $m_sci_LazyList$().qr(this, f));
});
$p.qT = (function(that) {
  return ((((this.b9 !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) || (that.q() === 0)) ? $m_sci_LazyList$().G : ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sci_LazyList__eagerHeadZipImpl__sc_Iterator__sci_LazyList(this, that.d()))))));
});
$p.uO = (function() {
  return this.qT($m_sci_LazyList$().pH(0, 1));
});
$p.sw = (function(n) {
  return ((n <= 0) ? this : (((this.b9 !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sci_LazyList$().G : $m_sci_LazyList$().ud(this, n)));
});
$p.cP = (function(sb, start, sep, end) {
  this.sJ();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.bg, start, sep, end);
  return sb;
});
$p.t = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").s;
});
$p.ay = (function() {
  return $m_sci_LazyList$();
});
$p.w = (function() {
  return this.au();
});
$p.kU = (function() {
  return this.au();
});
$p.C = (function(f) {
  return this.tw(f);
});
$p.fM = (function(f) {
  return this.sG(f);
});
$p.hk = (function(that) {
  return this.qT(that);
});
$p.hl = (function() {
  return this.uO();
});
$p.pw = (function(n) {
  return this.sw(n);
});
$p.ce = (function(x) {
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  aZ: 1,
  aB: 1,
  b5: 1,
  b4: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hv)));
}
function $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, array) {
  $thiz.hW = array;
  return $thiz;
}
function $ct_sjsr_WrappedVarArgs__($thiz) {
  $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs() {
  this.hW = null;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cb = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b5 = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.fM = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.hk = (function(that) {
  return $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this, that);
});
$p.hl = (function() {
  return $f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this);
});
$p.i6 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fY = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.i4 = (function() {
  return $m_sci_IndexedSeqDefaults$().om;
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.p = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.fU = (function() {
  return $f_sc_IndexedSeqOps__last__O(this);
});
$p.aX = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.i();
});
$p.g4 = (function() {
  return this;
});
$p.o = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().qt(this);
});
$p.t = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bU = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.dt = (function() {
  return $m_sjsr_WrappedVarArgs$().aq();
});
$p.bV = (function(f) {
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
$p.d3 = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.iq = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord);
});
$p.ip = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord);
});
$p.cP = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.ew = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.i = (function() {
  return (this.hW.length | 0);
});
$p.n = (function(idx) {
  return this.hW[idx];
});
$p.bz = (function() {
  return "WrappedVarArgs";
});
$p.f5 = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().ks(coll);
});
$p.ce = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.e = (function(v1) {
  return this.n((v1 | 0));
});
$p.ay = (function() {
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
  m: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  B: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.bi = null;
  this.bi = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.kG = (function() {
  return $m_sci_HashMap$();
});
$p.q = (function() {
  return this.bi.b8;
});
$p.aY = (function() {
  return this.bi.b8;
});
$p.c = (function() {
  return (this.bi.b8 === 0);
});
$p.d = (function() {
  return (this.c() ? $m_sc_Iterator$().J : new $c_sci_MapKeyValueTupleIterator(this.bi));
});
$p.eE = (function() {
  return (this.c() ? $m_sc_Iterator$().J : new $c_sci_MapValueIterator(this.bi));
});
$p.bM = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cz(keyUnimprovedHash);
  return this.bi.kd(key, keyUnimprovedHash, keyHash, 0);
});
$p.e = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cz(keyUnimprovedHash);
  return this.bi.k4(key, keyUnimprovedHash, keyHash, 0);
});
$p.bW = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cz(keyUnimprovedHash);
  return this.bi.ih(key, keyUnimprovedHash, keyHash, 0);
});
$p.cU = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cz(keyUnimprovedHash);
  return this.bi.kv(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fb = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var newRootNode = this.bi.qN(key, value, keyUnimprovedHash, $m_sc_Hashing$().cz(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bi) ? this : new $c_sci_HashMap(newRootNode));
});
$p.cS = (function(f) {
  this.bi.cS(f);
});
$p.o = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bi;
      var x$2 = that.bi;
      return ((x === null) ? (x$2 === null) : x.o(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.x = (function() {
  if (this.c()) {
    return $m_s_util_hashing_MurmurHash3$().hX;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bi);
    return $m_s_util_hashing_MurmurHash3$().ix(hashIterator, $m_s_util_hashing_MurmurHash3$().dW);
  }
});
$p.bz = (function() {
  return "HashMap";
});
$p.eD = (function(key, value) {
  return this.fb(key, value);
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
  ad: 1,
  al: 1,
  d: 1,
  ac: 1,
  v: 1,
  as: 1,
  ag: 1,
  l: 1,
  c0: 1,
  hi: 1,
  a: 1,
  Y: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hj)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ht)));
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
$p.b2 = (function(elems) {
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
$p.ay = (function() {
  return $m_scm_Iterable$();
});
$p.ar = (function() {
  return this;
});
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jT = loadFactor;
  $thiz.be = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.jU = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.be.a.length);
  $thiz.eo = 0;
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
  var idx = (hash & (($thiz.be.a.length - 1) | 0));
  matchResult4: {
    var x10 = $thiz.be.a[idx];
    if ((x10 === null)) {
      $thiz.be.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
      break matchResult4;
    }
    var prev = null;
    var n = x10;
    while (((n !== null) && (n.dT <= hash))) {
      if (((n.dT === hash) && $m_sr_BoxesRunTime$().l(elem, n.fH))) {
        return false;
      }
      prev = n;
      n = n.bf;
    }
    if ((prev === null)) {
      $thiz.be.a[idx] = new $c_scm_HashSet$Node(elem, hash, x10);
    } else {
      var this$3 = prev;
      var n$1 = new $c_scm_HashSet$Node(elem, hash, prev.bf);
      this$3.bf = n$1;
    }
  }
  $thiz.eo = ((1 + $thiz.eo) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.be.a.length;
  $thiz.jU = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.eo === 0)) {
    $thiz.be = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.be = $m_ju_Arrays$().W($thiz.be, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.be.a[i];
        if ((old !== null)) {
          preLow.bf = null;
          preHigh.bf = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.bf;
            if (((n.dT & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.bf = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.bf = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.bf = null;
          if ((old !== preLow.bf)) {
            $thiz.be.a[i] = preLow.bf;
          }
          if ((preHigh.bf !== null)) {
            $thiz.be.a[((i + oldlen) | 0)] = preHigh.bf;
            var this$5 = lastHigh;
            this$5.bf = null;
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
  return $doubleToInt((size * $thiz.jT));
}
/** @constructor */
function $c_scm_HashSet() {
  this.jT = 0.0;
  this.be = null;
  this.jU = 0;
  this.eo = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.aY = (function() {
  return this.eo;
});
$p.bM = (function(elem) {
  var hash = $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().E(elem));
  matchResult1: {
    var $x_1;
    var x1 = this.be.a[(hash & ((this.be.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.sE(elem, hash);
  }
  return ($x_1 !== null);
});
$p.b4 = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jT)));
  if ((target > this.be.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.i2 = (function(elem) {
  if ((((1 + this.eo) | 0) >= this.jU)) {
    $p_scm_HashSet__growTable__I__V(this, (this.be.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().E(elem)));
});
$p.p3 = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, v1$2, $p_scm_HashSet__improveHash__I__I(this, (v2$2 | 0)));
    }));
    xs.uP.uV(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.j()) {
      var next = iter.f();
      $p_scm_HashSet__addElem__O__I__Z(this, next.fH, next.dT);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.pA();
    while (iter$2.j()) {
      var next$2 = iter$2.f();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.q0(), next$2.pQ());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.d = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.ay = (function() {
  return $m_scm_HashSet$();
});
$p.q = (function() {
  return this.eo;
});
$p.c = (function() {
  return (this.eo === 0);
});
$p.bz = (function() {
  return "HashSet";
});
$p.x = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.j()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().ix(hashIterator, $m_s_util_hashing_MurmurHash3$().oT);
});
$p.b2 = (function(elems) {
  return this.p3(elems);
});
$p.ad = (function(elem) {
  this.i2(elem);
  return this;
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cz)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cz: 1,
  hx: 1,
  g9: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  gx: 1,
  d: 1,
  b2: 1,
  K: 1,
  C: 1,
  I: 1,
  H: 1,
  J: 1,
  N: 1,
  aD: 1,
  i8: 1,
  i7: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gW)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i1)));
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
$p.cg = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.p = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.fU = (function() {
  return $f_sc_IndexedSeqOps__last__O(this);
});
$p.aX = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.i();
});
$p.b7 = (function() {
  return "IndexedSeq";
});
$p.i6 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fY = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fM = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.hl = (function() {
  return $f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this);
});
$p.cb = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.h1 = (function(coll) {
  return $m_sci_ArraySeq$().kp(coll, this.ap());
});
$p.dt = (function() {
  return $m_sci_ArraySeq$().ir(this.ap());
});
$p.ew = (function() {
  return $m_sci_ArraySeq$().hM;
});
$p.tv = (function(f) {
  var a = new $ac_O(this.i());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.e(this.n(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().fa(a);
});
$p.uN = (function(that) {
  if ((that instanceof $c_sci_ArraySeq)) {
    var x = this.i();
    var that$1 = that.i();
    var n = ((x < that$1) ? x : that$1);
    var evidence$1__runtimeClass;
    var evidence$1__runtimeClass = $d_T2.l();
    var n1 = ((n > 0) ? n : 0);
    var componentType = evidence$1__runtimeClass;
    var elements = componentType.A.U(n1);
    var i = 0;
    while ((i < n)) {
      var $x_2 = $m_sr_ScalaRunTime$();
      var $x_1 = i;
      var x0 = i;
      $x_2.V(elements, $x_1, new $c_T2(this.n(x0), that.n(x0)));
      i = ((1 + i) | 0);
    }
    return $m_sci_ArraySeq$().fa(elements);
  } else {
    var b = $m_sci_ArraySeq$().hM.aq();
    var it1 = this.d();
    var it2 = that.d();
    while ((it1.j() && it2.j())) {
      b.ad(new $c_T2(it1.f(), it2.f()));
    }
    return b.ar();
  }
});
$p.dq = (function(z, f) {
  var array = this.ch();
  var b = z;
  var i = 0;
  while ((i < $m_jl_reflect_Array$().aN(array))) {
    var a = $m_sr_ScalaRunTime$().ao(array, i);
    b = f.bL(b, a);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.bz = (function() {
  return "ArraySeq";
});
$p.bm = (function(xs, start, len) {
  var srcLen = this.i();
  var destLen = $m_jl_reflect_Array$().aN(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().et(this.ch(), 0, xs, start, copied);
  }
  return copied;
});
$p.i4 = (function() {
  return 2147483647;
});
$p.b6 = (function(ord) {
  if (($m_jl_reflect_Array$().aN(this.ch()) <= 1)) {
    return this;
  } else {
    var original = this.ch();
    var newLength = this.i();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    if ($d_O.R($objectGetClass(original).A.Q().A)) {
      var a = $m_ju_Arrays$().ke(original, newLength, $d_O.r().l());
    } else {
      var dest = new $ac_O(newLength);
      $m_s_Array$().et(original, 0, dest, 0, $m_jl_reflect_Array$().aN(original));
      var a = dest;
    }
    $m_ju_Arrays$().g2(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.ay = (function() {
  return $m_sci_ArraySeq$().hM;
});
$p.C = (function(f) {
  return this.tv(f);
});
$p.hk = (function(that) {
  return this.uN(that);
});
$p.b5 = (function(ord) {
  return this.b6(ord);
});
$p.f5 = (function(coll) {
  return $m_sci_ArraySeq$().kp(coll, this.ap());
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
$p.cg = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.aX = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.i();
});
$p.b7 = (function() {
  return "IndexedSeq";
});
$p.i6 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.fY = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fM = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.hk = (function(that) {
  return $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this, that);
});
$p.hl = (function() {
  return $f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this);
});
$p.cb = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b5 = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.ew = (function() {
  return $m_sci_Vector$();
});
$p.i = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.m : this.h.a.length);
});
$p.d = (function() {
  return ((this === $m_sci_Vector0$()) ? $m_sci_Vector$().os : new $c_sci_NewVectorIterator(this, this.i(), this.dw()));
});
$p.bz = (function() {
  return "Vector";
});
$p.bm = (function(xs, start, len) {
  return this.d().bm(xs, start, len);
});
$p.i4 = (function() {
  return $m_sci_Vector$().or;
});
$p.aW = (function(index) {
  return $m_scg_CommonErrors$().kz(index, ((this.i() - 1) | 0));
});
$p.p = (function() {
  if ((this.h.a.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.h.a[0];
  }
});
$p.fU = (function() {
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
$p.bV = (function(f) {
  var c = this.dw();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = (((c + ((c >>> 31) | 0)) | 0) >> 1);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.km(((((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0) - 1) | 0), this.dv(i), f);
    i = ((1 + i) | 0);
  }
});
$p.ay = (function() {
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
$p.cg = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.p = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aX = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.i();
});
$p.b7 = (function() {
  return "IndexedSeq";
});
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.cb = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.ew = (function() {
  return $m_scm_ArraySeq$().jQ;
});
$p.pN = (function(coll) {
  var evidence$1 = this.ap();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aI();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.q();
  var it = coll.d();
  while (it.j()) {
    var elem = it.f();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().g0(elementClass) : elem));
    jsElems.push(unboxedElem);
  }
  return $m_scm_ArraySeq$().io($m_scm_ArrayBuilder$().fZ(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems));
});
$p.dt = (function() {
  return $m_scm_ArraySeq$().ir(this.ap());
});
$p.bz = (function() {
  return "ArraySeq";
});
$p.bm = (function(xs, start, len) {
  var srcLen = this.i();
  var destLen = $m_jl_reflect_Array$().aN(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().et(this.ca(), 0, xs, start, copied);
  }
  return copied;
});
$p.o = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().aN(this.ca()) !== $m_jl_reflect_Array$().aN(other.ca()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.ux = (function(ord) {
  return $m_scm_ArraySeq$().io($m_sc_ArrayOps$().uy(this.ca(), ord));
});
$p.ay = (function() {
  return $m_scm_ArraySeq$().jQ;
});
$p.h1 = (function(coll) {
  return this.pN(coll);
});
$p.f5 = (function(coll) {
  return this.pN(coll);
});
$p.b5 = (function(ord) {
  return this.ux(ord);
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
$p.gR = (function(i) {
  return this.d8.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.d8, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().pF(this.d8, that.d8) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b6 = (function(ord) {
  if ((this.d8.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Boolean$()))) {
    var this$1 = this.d8;
    var a = this$1.g();
    $m_s_util_Sorting$().kS(a, 0, a.a.length, $m_s_math_Ordering$Boolean$());
    return new $c_sci_ArraySeq$ofBoolean(a);
  } else {
    return $c_sci_ArraySeq.prototype.b6.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.d8);
});
$p.ch = (function() {
  return this.d8;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.n = (function(i) {
  return this.gR(i);
});
$p.e = (function(v1) {
  return this.gR((v1 | 0));
});
$p.b5 = (function(ord) {
  return this.b6(ord);
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a5: 1,
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
$p.gJ = (function(i) {
  return this.d9.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.d9, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().pB(this.d9, that.d9) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b6 = (function(ord) {
  if ((this.d9.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Byte$()))) {
    var this$1 = this.d9;
    var a = this$1.g();
    $m_ju_Arrays$().qw(a);
    return new $c_sci_ArraySeq$ofByte(a);
  } else {
    return $c_sci_ArraySeq.prototype.b6.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.d9);
});
$p.ch = (function() {
  return this.d9;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.n = (function(i) {
  return this.gJ(i);
});
$p.e = (function(v1) {
  return this.gJ((v1 | 0));
});
$p.b5 = (function(ord) {
  return this.b6(ord);
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a5: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.cJ = null;
  this.cJ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.i = (function() {
  return this.cJ.a.length;
});
$p.gK = (function(i) {
  return this.cJ.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.cJ, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().pC(this.cJ, that.cJ) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b6 = (function(ord) {
  if ((this.cJ.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Char$()))) {
    var this$1 = this.cJ;
    var a = this$1.g();
    $m_ju_Arrays$().qx(a);
    return new $c_sci_ArraySeq$ofChar(a);
  } else {
    return $c_sci_ArraySeq.prototype.b6.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cJ);
});
$p.cP = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.cJ).cP(sb, start, sep, end);
});
$p.ch = (function() {
  return this.cJ;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.n = (function(i) {
  return $bC(this.gK(i));
});
$p.e = (function(v1) {
  return $bC(this.gK((v1 | 0)));
});
$p.b5 = (function(ord) {
  return this.b6(ord);
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a5: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.eb = null;
  this.eb = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.i = (function() {
  return this.eb.a.length;
});
$p.gL = (function(i) {
  return this.eb.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.eb, this$1.ax);
});
$p.o = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
    var array = this.eb;
    var thatArray = that.eb;
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
  return new $c_sc_ArrayOps$ArrayIterator(this.eb);
});
$p.ch = (function() {
  return this.eb;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.n = (function(i) {
  return this.gL(i);
});
$p.e = (function(v1) {
  return this.gL((v1 | 0));
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a5: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.ec = null;
  this.ec = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.i = (function() {
  return this.ec.a.length;
});
$p.gM = (function(i) {
  return this.ec.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.ec, this$1.ax);
});
$p.o = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
    var array = this.ec;
    var thatArray = that.ec;
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
  return new $c_sc_ArrayOps$ArrayIterator(this.ec);
});
$p.ch = (function() {
  return this.ec;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.n = (function(i) {
  return this.gM(i);
});
$p.e = (function(v1) {
  return this.gM((v1 | 0));
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a5: 1,
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
$p.gN = (function(i) {
  return this.da.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.da, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().kj(this.da, that.da) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b6 = (function(ord) {
  if ((this.da.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Int$()))) {
    var this$1 = this.da;
    var a = this$1.g();
    $m_ju_Arrays$().qy(a);
    return new $c_sci_ArraySeq$ofInt(a);
  } else {
    return $c_sci_ArraySeq.prototype.b6.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.da);
});
$p.ch = (function() {
  return this.da;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.n = (function(i) {
  return this.gN(i);
});
$p.e = (function(v1) {
  return this.gN((v1 | 0));
});
$p.b5 = (function(ord) {
  return this.b6(ord);
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a5: 1,
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
$p.gO = (function(i) {
  var $x_1 = this.db.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.db, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().pD(this.db, that.db) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b6 = (function(ord) {
  if ((((this.db.a.length >>> 1) | 0) <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Long$()))) {
    var this$1 = this.db;
    var a = this$1.g();
    $m_ju_Arrays$().qz(a);
    return new $c_sci_ArraySeq$ofLong(a);
  } else {
    return $c_sci_ArraySeq.prototype.b6.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.db);
});
$p.ch = (function() {
  return this.db;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.n = (function(i) {
  return this.gO(i);
});
$p.e = (function(v1) {
  return this.gO((v1 | 0));
});
$p.b5 = (function(ord) {
  return this.b6(ord);
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a5: 1,
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
$p.ap = (function() {
  return $m_s_reflect_ClassTag$().gS($objectGetClass(this.cn).A.Q());
});
$p.i = (function() {
  return this.cn.a.length;
});
$p.n = (function(i) {
  return this.cn.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.cn, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().pG(this.cn, that.cn) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.qB = (function(ord) {
  if ((this.cn.a.length <= 1)) {
    return this;
  } else {
    var this$1 = this.cn;
    var a = this$1.g();
    $m_ju_Arrays$().g2(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cn);
});
$p.ch = (function() {
  return this.cn;
});
$p.e = (function(v1) {
  return this.n((v1 | 0));
});
$p.b6 = (function(ord) {
  return this.qB(ord);
});
$p.b5 = (function(ord) {
  return this.qB(ord);
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a5: 1,
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
$p.gP = (function(i) {
  return this.dc.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.dc, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().pE(this.dc, that.dc) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b6 = (function(ord) {
  if ((this.dc.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Short$()))) {
    var this$1 = this.dc;
    var a = this$1.g();
    $m_ju_Arrays$().qA(a);
    return new $c_sci_ArraySeq$ofShort(a);
  } else {
    return $c_sci_ArraySeq.prototype.b6.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dc);
});
$p.ch = (function() {
  return this.dc;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.n = (function(i) {
  return this.gP(i);
});
$p.e = (function(v1) {
  return this.gP((v1 | 0));
});
$p.b5 = (function(ord) {
  return this.b6(ord);
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a5: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.eW = null;
  this.eW = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.i = (function() {
  return this.eW.a.length;
});
$p.gQ = (function(i) {
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.eW, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.eW.a.length === that.eW.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.eW);
});
$p.ch = (function() {
  return this.eW;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.n = (function(i) {
  this.gQ(i);
});
$p.e = (function(v1) {
  this.gQ((v1 | 0));
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a5: 1,
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
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().l(a$tailLocal1.p(), b$tailLocal1.p()))) {
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
$p.kB = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.n = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.dq = (function(z, op) {
  return $f_sc_LinearSeqOps__foldLeft__O__F2__O(this, z, op);
});
$p.fY = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.b7 = (function() {
  return "LinearSeq";
});
$p.hk = (function(that) {
  return $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this, that);
});
$p.hl = (function() {
  return $f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this);
});
$p.d = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.cb = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b5 = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.ew = (function() {
  return $m_sci_List$();
});
$p.oU = (function(prefix) {
  if (this.c()) {
    return prefix;
  } else if (prefix.c()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.p(), this);
    var curr = result;
    var that = prefix.w();
    while ((!that.c())) {
      var temp = new $c_sci_$colon$colon(that.p(), this);
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
$p.iu = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.oU(prefix);
  }
  if ((prefix.q() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.c()) {
      return prefix.qK();
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
$p.p9 = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.oU(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.tx = (function(f) {
  if ((this === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.e(this.p()), $m_sci_Nil$());
    var t = h;
    var rest = this.w();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.e(rest.p()), $m_sci_Nil$());
      t.a2 = nx;
      t = nx;
      rest = rest.w();
    }
    var $x_1 = h;
  }
  return $x_1;
});
$p.sH = (function(f) {
  var rest = this;
  var h = null;
  var t = null;
  while ((rest !== $m_sci_Nil$())) {
    var it = f.e(rest.p()).d();
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
$p.bV = (function(f) {
  var these = this;
  while ((!these.c())) {
    f.e(these.p());
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
$p.aX = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.bM = (function(elem) {
  var these = this;
  while ((!these.c())) {
    if ($m_sr_BoxesRunTime$().l(these.p(), elem)) {
      return true;
    }
    these = these.w();
  }
  return false;
});
$p.fU = (function() {
  if (this.c()) {
    throw new $c_ju_NoSuchElementException("List.last");
  } else {
    var these = this;
    var scout = this.w();
    while ((!scout.c())) {
      these = scout;
      scout = scout.w();
    }
    return these.p();
  }
});
$p.bz = (function() {
  return "List";
});
$p.o = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.ay = (function() {
  return $m_sci_List$();
});
$p.C = (function(f) {
  return this.tx(f);
});
$p.fM = (function(f) {
  return this.sH(f);
});
$p.pw = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.ce = (function(x) {
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
  this.eh = null;
  this.eh = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.i = (function() {
  return this.eh.a.length;
});
$p.gR = (function(index) {
  return this.eh.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.eh, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().pF(this.eh, that.eh) : $c_scm_ArraySeq.prototype.o.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.eh);
});
$p.ca = (function() {
  return this.eh;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.n = (function(i) {
  return this.gR(i);
});
$p.e = (function(v1) {
  return this.gR((v1 | 0));
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.ei = null;
  this.ei = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.i = (function() {
  return this.ei.a.length;
});
$p.gJ = (function(index) {
  return this.ei.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.ei, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().pB(this.ei, that.ei) : $c_scm_ArraySeq.prototype.o.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ei);
});
$p.ca = (function() {
  return this.ei;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.n = (function(i) {
  return this.gJ(i);
});
$p.e = (function(v1) {
  return this.gJ((v1 | 0));
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.c8 = null;
  this.c8 = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.i = (function() {
  return this.c8.a.length;
});
$p.gK = (function(index) {
  return this.c8.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.c8, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().pC(this.c8, that.c8) : $c_scm_ArraySeq.prototype.o.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.c8);
});
$p.cP = (function(sb, start, sep, end) {
  var jsb = sb.bg;
  if ((start.length !== 0)) {
    jsb.s = (("" + jsb.s) + start);
  }
  var len = this.c8.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.p7(this.c8);
    } else {
      jsb.i();
      var c = this.c8.a[0];
      var str = ("" + $cToS(c));
      jsb.s = (jsb.s + str);
      var i = 1;
      while ((i < len)) {
        jsb.s = (("" + jsb.s) + sep);
        var c$1 = this.c8.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.s = (jsb.s + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.s = (("" + jsb.s) + end);
  }
  return sb;
});
$p.ca = (function() {
  return this.c8;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.n = (function(i) {
  return $bC(this.gK(i));
});
$p.e = (function(v1) {
  return $bC(this.gK((v1 | 0)));
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.cu = null;
  this.cu = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.i = (function() {
  return this.cu.a.length;
});
$p.gL = (function(index) {
  return this.cu.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.cu, this$1.ax);
});
$p.o = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var thatArray = that.cu;
    if ((this.cu === thatArray)) {
      return true;
    } else if ((this.cu.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < this.cu.a.length) && (this.cu.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.cu.a.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.o.call(this, that);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cu);
});
$p.ca = (function() {
  return this.cu;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.n = (function(i) {
  return this.gL(i);
});
$p.e = (function(v1) {
  return this.gL((v1 | 0));
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.cv = null;
  this.cv = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.i = (function() {
  return this.cv.a.length;
});
$p.gM = (function(index) {
  return this.cv.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.cv, this$1.ax);
});
$p.o = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
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
    return $c_scm_ArraySeq.prototype.o.call(this, that);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cv);
});
$p.ca = (function() {
  return this.cv;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.n = (function(i) {
  return this.gM(i);
});
$p.e = (function(v1) {
  return this.gM((v1 | 0));
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.ej = null;
  this.ej = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.i = (function() {
  return this.ej.a.length;
});
$p.gN = (function(index) {
  return this.ej.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.ej, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().kj(this.ej, that.ej) : $c_scm_ArraySeq.prototype.o.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ej);
});
$p.ca = (function() {
  return this.ej;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.n = (function(i) {
  return this.gN(i);
});
$p.e = (function(v1) {
  return this.gN((v1 | 0));
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.ek = null;
  this.ek = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.i = (function() {
  return ((this.ek.a.length >>> 1) | 0);
});
$p.gO = (function(index) {
  var $x_1 = this.ek.a;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.ek, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().pD(this.ek, that.ek) : $c_scm_ArraySeq.prototype.o.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ek);
});
$p.ca = (function() {
  return this.ek;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.n = (function(i) {
  return this.gO(i);
});
$p.e = (function(v1) {
  return this.gO((v1 | 0));
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.dQ = null;
  this.dQ = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.ap = (function() {
  return $m_s_reflect_ClassTag$().gS($objectGetClass(this.dQ).A.Q());
});
$p.i = (function() {
  return this.dQ.a.length;
});
$p.n = (function(index) {
  return this.dQ.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.dQ, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().pG(this.dQ, that.dQ) : $c_scm_ArraySeq.prototype.o.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dQ);
});
$p.ca = (function() {
  return this.dQ;
});
$p.e = (function(v1) {
  return this.n((v1 | 0));
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.el = null;
  this.el = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.i = (function() {
  return this.el.a.length;
});
$p.gP = (function(index) {
  return this.el.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.el, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().pE(this.el, that.el) : $c_scm_ArraySeq.prototype.o.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.el);
});
$p.ca = (function() {
  return this.el;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.n = (function(i) {
  return this.gP(i);
});
$p.e = (function(v1) {
  return this.gP((v1 | 0));
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.f1 = null;
  this.f1 = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.i = (function() {
  return this.f1.a.length;
});
$p.gQ = (function(index) {
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b3(this.f1, this$1.ax);
});
$p.o = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.f1.a.length === that.f1.a.length) : $c_scm_ArraySeq.prototype.o.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.f1);
});
$p.ca = (function() {
  return this.f1;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.n = (function(i) {
  this.gQ(i);
});
$p.e = (function(v1) {
  this.gQ((v1 | 0));
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  l: 1,
  t: 1,
  a: 1
}));
function $ct_scm_HashMap__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jR = loadFactor;
  $thiz.P = new ($d_scm_HashMap$Node.r().C)($p_scm_HashMap__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.gD = $p_scm_HashMap__newThreshold__I__I($thiz, $thiz.P.a.length);
  $thiz.c9 = 0;
  return $thiz;
}
function $ct_scm_HashMap__($thiz) {
  $ct_scm_HashMap__I__D__($thiz, 16, 0.75);
  return $thiz;
}
function $p_scm_HashMap__put0__O__O__I__Z__s_Some($thiz, key, value, hash, getOld) {
  if ((((1 + $thiz.c9) | 0) >= $thiz.gD)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.P.a.length << 1));
  }
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, (hash & (($thiz.P.a.length - 1) | 0)));
}
function $p_scm_HashMap__put0__O__O__Z__s_Some($thiz, key, value, getOld) {
  if ((((1 + $thiz.c9) | 0) >= $thiz.gD)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.P.a.length << 1));
  }
  var originalHash = $m_sr_Statics$().E(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, (hash & (($thiz.P.a.length - 1) | 0)));
}
function $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, idx) {
  matchResult7: {
    var x30 = $thiz.P.a[idx];
    if ((x30 === null)) {
      $thiz.P.a[idx] = new $c_scm_HashMap$Node(key, hash, value, null);
      break matchResult7;
    }
    var prev = null;
    var n = x30;
    while (((n !== null) && (n.dl <= hash))) {
      if (((n.dl === hash) && $m_sr_BoxesRunTime$().l(key, n.en))) {
        var old$2 = n.bS;
        var this$2 = n;
        this$2.bS = value;
        return (getOld ? new $c_s_Some(old$2) : null);
      }
      prev = n;
      n = n.aU;
    }
    if ((prev === null)) {
      $thiz.P.a[idx] = new $c_scm_HashMap$Node(key, hash, value, x30);
    } else {
      var this$6 = prev;
      var n$1 = new $c_scm_HashMap$Node(key, hash, value, prev.aU);
      this$6.aU = n$1;
    }
  }
  $thiz.c9 = ((1 + $thiz.c9) | 0);
  return null;
}
function $p_scm_HashMap__growTable__I__V($thiz, newlen) {
  if ((newlen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), (("new HashMap table size " + newlen) + " exceeds maximum"));
  }
  var oldlen = $thiz.P.a.length;
  $thiz.gD = $p_scm_HashMap__newThreshold__I__I($thiz, newlen);
  if (($thiz.c9 === 0)) {
    $thiz.P = new ($d_scm_HashMap$Node.r().C)(newlen);
  } else {
    $thiz.P = $m_ju_Arrays$().W($thiz.P, newlen);
    var preLow = new $c_scm_HashMap$Node(null, 0, null, null);
    var preHigh = new $c_scm_HashMap$Node(null, 0, null, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.P.a[i];
        if ((old !== null)) {
          preLow.aU = null;
          preHigh.aU = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.aU;
            if (((n.dl & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.aU = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.aU = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.aU = null;
          if ((old !== preLow.aU)) {
            $thiz.P.a[i] = preLow.aU;
          }
          if ((preHigh.aU !== null)) {
            $thiz.P.a[((i + oldlen) | 0)] = preHigh.aU;
            var this$5 = lastHigh;
            this$5.aU = null;
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
  return $doubleToInt((size * $thiz.jR));
}
/** @constructor */
function $c_scm_HashMap() {
  this.jR = 0.0;
  this.P = null;
  this.gD = 0;
  this.c9 = 0;
}
$p = $c_scm_HashMap.prototype = new $h_scm_AbstractMap();
$p.constructor = $c_scm_HashMap;
/** @constructor */
function $h_scm_HashMap() {
}
$h_scm_HashMap.prototype = $p;
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.aY = (function() {
  return this.c9;
});
$p.bM = (function(key) {
  var originalHash = $m_sr_Statics$().E(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var $x_1;
    var x1 = this.P.a[(hash & ((this.P.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.gZ(key, hash);
  }
  return ($x_1 !== null);
});
$p.b4 = (function(size) {
  var target = $p_scm_HashMap__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jR)));
  if ((target > this.P.a.length)) {
    $p_scm_HashMap__growTable__I__V(this, target);
  }
});
$p.p2 = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if ((xs instanceof $c_sci_HashMap)) {
    var f = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2, v2$2, v3$2) => {
      var h = (v3$2 | 0);
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, v1$2, v2$2, (h ^ ((h >>> 16) | 0)), false);
    }));
    xs.bi.kn(f);
    return this;
  } else if ((xs instanceof $c_scm_HashMap)) {
    var iter = xs.q8();
    while (iter.j()) {
      var next = iter.f();
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, next.en, next.bS, next.dl, false);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.pA();
    while (iter$2.j()) {
      var entry = iter$2.f();
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, entry.q0(), entry.uL(), entry.pQ(), false);
    }
    return this;
  } else {
    return ($is_scm_Map(xs) ? (xs.cS(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => {
      var originalHash = $m_sr_Statics$().E(key$2);
      return $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, key$2, value$2, (originalHash ^ ((originalHash >>> 16) | 0)), false);
    }))), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
  }
});
$p.d = (function() {
  return ((this.c9 === 0) ? $m_sc_Iterator$().J : new $c_scm_HashMap$$anon$1(this));
});
$p.eE = (function() {
  return ((this.c9 === 0) ? $m_sc_Iterator$().J : new $c_scm_HashMap$$anon$3(this));
});
$p.q8 = (function() {
  return ((this.c9 === 0) ? $m_sc_Iterator$().J : new $c_scm_HashMap$$anon$4(this));
});
$p.bW = (function(key) {
  var originalHash = $m_sr_Statics$().E(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var x34;
    var x1 = this.P.a[(hash & ((this.P.a.length - 1) | 0))];
    if ((x1 === null)) {
      var x34 = null;
      break matchResult1;
    }
    var x34 = x1.gZ(key, hash);
  }
  if ((x34 === null)) {
    return $m_s_None$();
  }
  return new $c_s_Some(x34.bS);
});
$p.e = (function(key) {
  var originalHash = $m_sr_Statics$().E(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var x35;
    var x1 = this.P.a[(hash & ((this.P.a.length - 1) | 0))];
    if ((x1 === null)) {
      var x35 = null;
      break matchResult1;
    }
    var x35 = x1.gZ(key, hash);
  }
  if ((x35 === null)) {
    return $f_sc_MapOps__default__O__O(this, key);
  }
  return x35.bS;
});
$p.cU = (function(key, default$1) {
  if ((!($objectGetClass(this) === $d_scm_HashMap.l()))) {
    return $f_sc_MapOps__getOrElse__O__F0__O(this, key, default$1);
  } else {
    var originalHash = $m_sr_Statics$().E(key);
    var hash = (originalHash ^ ((originalHash >>> 16) | 0));
    matchResult1: {
      var nd;
      var x1 = this.P.a[(hash & ((this.P.a.length - 1) | 0))];
      if ((x1 === null)) {
        var nd = null;
        break matchResult1;
      }
      var nd = x1.gZ(key, hash);
    }
    return ((nd === null) ? default$1.I() : nd.bS);
  }
});
$p.rK = (function(elem) {
  $p_scm_HashMap__put0__O__O__Z__s_Some(this, elem.S, elem.R, false);
  return this;
});
$p.q = (function() {
  return this.c9;
});
$p.c = (function() {
  return (this.c9 === 0);
});
$p.cS = (function(f) {
  var len = this.P.a.length;
  var i = 0;
  while ((i < len)) {
    var n = this.P.a[i];
    if ((n !== null)) {
      n.cS(f);
    }
    i = ((1 + i) | 0);
  }
});
$p.kG = (function() {
  return $m_scm_HashMap$();
});
$p.b7 = (function() {
  return "HashMap";
});
$p.x = (function() {
  if (this.c()) {
    return $m_s_util_hashing_MurmurHash3$().hX;
  } else {
    var tupleHashIterator = new $c_scm_HashMap$$anon$5(this);
    return $m_s_util_hashing_MurmurHash3$().ix(tupleHashIterator, $m_s_util_hashing_MurmurHash3$().dW);
  }
});
$p.b2 = (function(elems) {
  return this.p2(elems);
});
$p.ad = (function(elem) {
  return this.rK(elem);
});
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cy)));
}
var $d_scm_HashMap = new $TypeData().i($c_scm_HashMap, "scala.collection.mutable.HashMap", ({
  cy: 1,
  hw: 1,
  ak: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  j: 1,
  ad: 1,
  al: 1,
  d: 1,
  ac: 1,
  K: 1,
  C: 1,
  I: 1,
  H: 1,
  J: 1,
  N: 1,
  aD: 1,
  i4: 1,
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
$p.n = (function(index) {
  if (((index >= 0) && (index < this.h.a.length))) {
    return this.h.a[index];
  } else {
    throw this.aW(index);
  }
});
$p.eC = (function(index, elem) {
  if (((index >= 0) && (index < this.h.a.length))) {
    var a1 = this.h;
    var a1c = a1.g();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aW(index);
  }
});
$p.er = (function(elem) {
  if ((this.h.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().fL(this.h, elem));
  } else {
    var $x_2 = this.h;
    var $x_1 = $m_sci_VectorStatics$().bK;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cZ = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().cB(this.h, f));
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
    throw this.aW(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  hm: 1,
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Y: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.gu = null;
  this.a2 = null;
  this.gu = head;
  this.a2 = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.cF = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.bu = (function() {
  return 2;
});
$p.bw = (function() {
  return "::";
});
$p.bv = (function(n) {
  if ((n === 0)) {
    return this.gu;
  }
  if ((n === 1)) {
    return this.a2;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.p = (function() {
  return this.gu;
});
$p.w = (function() {
  return this.a2;
});
$p.kU = (function() {
  return this.a2;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  gF: 1,
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  aZ: 1,
  aB: 1,
  b5: 1,
  b4: 1,
  l: 1,
  t: 1,
  bZ: 1,
  B: 1,
  a: 1,
  Y: 1,
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
$p.cF = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.bu = (function() {
  return 0;
});
$p.bw = (function() {
  return "Nil";
});
$p.bv = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.t4 = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.qG = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.tr = (function() {
  throw new $c_ju_NoSuchElementException("last of empty list");
});
$p.q = (function() {
  return 0;
});
$p.d = (function() {
  return $m_sc_Iterator$().J;
});
$p.p = (function() {
  this.t4();
});
$p.w = (function() {
  this.qG();
});
$p.kU = (function() {
  this.qG();
});
$p.fU = (function() {
  this.tr();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  hb: 1,
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  aZ: 1,
  aB: 1,
  b5: 1,
  b4: 1,
  l: 1,
  t: 1,
  bZ: 1,
  B: 1,
  a: 1,
  Y: 1,
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
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().jK, $m_sci_VectorStatics$().jK, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.pa = (function(index) {
  throw this.aW(index);
});
$p.eC = (function(index, elem) {
  throw this.aW(index);
});
$p.er = (function(elem) {
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
$p.o = (function(o) {
  return ((this === o) || ((o instanceof $c_sci_Vector) ? false : $f_sc_Seq__equals__O__Z(this, o)));
});
$p.aW = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.n = (function(i) {
  this.pa(i);
});
$p.e = (function(v1) {
  this.pa((v1 | 0));
});
$p.C = (function(f) {
  return this;
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  hl: 1,
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Y: 1
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
  this.bR = 0;
  this.by = null;
  this.bR = len1;
  this.by = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.n = (function(index) {
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.bR) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.by.a.length) ? this.by.a[i2].a[i1] : this.k.a[(31 & io)]);
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aW(index);
  }
});
$p.eC = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.bR)) {
      var io = ((index - this.bR) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.by.a.length)) {
        var a2 = this.by;
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.h, this.bR, a2c, this.k, this.m);
      } else {
        var a1$1 = this.k;
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.h, this.bR, this.by, a1c$1, this.m);
      }
    } else {
      var a1$2 = this.h;
      var a1c$2 = a1$2.g();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bR, this.by, this.k, this.m);
    }
  } else {
    throw this.aW(index);
  }
});
$p.er = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$3 = $m_sci_VectorStatics$().fL(this.k, elem);
    var length0$3 = ((1 + this.m) | 0);
    return new $c_sci_Vector2(this.h, this.bR, this.by, suffix1$3, length0$3);
  } else if ((this.by.a.length < 30)) {
    var data2$4 = $m_sci_VectorStatics$().F(this.by, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$4 = ((1 + this.m) | 0);
    return new $c_sci_Vector2(this.h, this.bR, data2$4, a, length0$4);
  } else {
    var $x_5 = this.h;
    var $x_4 = this.bR;
    var $x_3 = this.by;
    var $x_2 = this.bR;
    var $x_1 = $m_sci_VectorStatics$().dj;
    var x = this.k;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.m) | 0));
  }
});
$p.cZ = (function(f) {
  var prefix1$7 = $m_sci_VectorStatics$().cB(this.h, f);
  var data2$7 = $m_sci_VectorStatics$().ac(2, this.by, f);
  var suffix1$7 = $m_sci_VectorStatics$().cB(this.k, f);
  return new $c_sci_Vector2(prefix1$7, this.bR, data2$7, suffix1$7, this.m);
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
      return this.by;
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
    var io = ((index - this.bR) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.by.a.length) ? this.by.a[i2].a[i1] : this.k.a[(31 & io)]);
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aW(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  hn: 1,
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Y: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.h = null;
  this.k = null;
  this.m = 0;
  this.bq = 0;
  this.bJ = null;
  this.br = 0;
  this.bc = null;
  this.bd = null;
  this.bq = len1;
  this.bJ = prefix2;
  this.br = len12;
  this.bc = data3;
  this.bd = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.n = (function(index) {
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.br) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.bc.a.length) ? this.bc.a[i3].a[i2].a[i1] : ((i2 < this.bd.a.length) ? this.bd.a[i2].a[i1] : this.k.a[i1]));
    } else if ((index >= this.bq)) {
      var io$2 = ((index - this.bq) | 0);
      return this.bJ.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aW(index);
  }
});
$p.eC = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.br)) {
      var io = ((index - this.br) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.bc.a.length)) {
        var a3 = this.bc;
        var a3c = a3.g();
        var a2 = a3c.a[i3];
        var a2c = a2.g();
        var a1 = a2c.a[i2];
        var a1c = a1.g();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.h, this.bq, this.bJ, this.br, a3c, this.bd, this.k, this.m);
      } else if ((i2 < this.bd.a.length)) {
        var a2$1 = this.bd;
        var a2c$1 = a2$1.g();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.h, this.bq, this.bJ, this.br, this.bc, a2c$1, this.k, this.m);
      } else {
        var a1$2 = this.k;
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.h, this.bq, this.bJ, this.br, this.bc, this.bd, a1c$2, this.m);
      }
    } else if ((index >= this.bq)) {
      var io$2 = ((index - this.bq) | 0);
      var a2$2 = this.bJ;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.g();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.g();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.h, this.bq, a2c$2, this.br, this.bc, this.bd, this.k, this.m);
    } else {
      var a1$4 = this.h;
      var a1c$4 = a1$4.g();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bq, this.bJ, this.br, this.bc, this.bd, this.k, this.m);
    }
  } else {
    throw this.aW(index);
  }
});
$p.er = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$16 = $m_sci_VectorStatics$().fL(this.k, elem);
    var length0$16 = ((1 + this.m) | 0);
    return new $c_sci_Vector3(this.h, this.bq, this.bJ, this.br, this.bc, this.bd, suffix1$16, length0$16);
  } else if ((this.bd.a.length < 31)) {
    var suffix2$6 = $m_sci_VectorStatics$().F(this.bd, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$17 = ((1 + this.m) | 0);
    return new $c_sci_Vector3(this.h, this.bq, this.bJ, this.br, this.bc, suffix2$6, a, length0$17);
  } else if ((this.bc.a.length < 30)) {
    var data3$7 = $m_sci_VectorStatics$().F(this.bc, $m_sci_VectorStatics$().F(this.bd, this.k));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$18 = ((1 + this.m) | 0);
    return new $c_sci_Vector3(this.h, this.bq, this.bJ, this.br, data3$7, $m_sci_VectorStatics$().bK, a$1, length0$18);
  } else {
    var $x_8 = this.h;
    var $x_7 = this.bq;
    var $x_6 = this.bJ;
    var $x_5 = this.br;
    var $x_4 = this.bc;
    var $x_3 = this.br;
    var $x_2 = $m_sci_VectorStatics$().fC;
    var x = $m_sci_VectorStatics$().F(this.bd, this.k);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bK;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.m) | 0));
  }
});
$p.cZ = (function(f) {
  var prefix1$21 = $m_sci_VectorStatics$().cB(this.h, f);
  var prefix2$10 = $m_sci_VectorStatics$().ac(2, this.bJ, f);
  var data3$11 = $m_sci_VectorStatics$().ac(3, this.bc, f);
  var suffix2$10 = $m_sci_VectorStatics$().ac(2, this.bd, f);
  var suffix1$22 = $m_sci_VectorStatics$().cB(this.k, f);
  return new $c_sci_Vector3(prefix1$21, this.bq, prefix2$10, this.br, data3$11, suffix2$10, suffix1$22, this.m);
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
      return this.bJ;
      break;
    }
    case 2: {
      return this.bc;
      break;
    }
    case 3: {
      return this.bd;
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
    var io = ((index - this.br) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.bc.a.length) ? this.bc.a[i3].a[i2].a[i1] : ((i2 < this.bd.a.length) ? this.bd.a[i2].a[i1] : this.k.a[i1]));
    } else if ((index >= this.bq)) {
      var io$2 = ((index - this.bq) | 0);
      return this.bJ.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aW(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  ho: 1,
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Y: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.h = null;
  this.k = null;
  this.m = 0;
  this.aZ = 0;
  this.bj = null;
  this.b0 = 0;
  this.bk = null;
  this.b1 = 0;
  this.aK = null;
  this.aM = null;
  this.aL = null;
  this.aZ = len1;
  this.bj = prefix2;
  this.b0 = len12;
  this.bk = prefix3;
  this.b1 = len123;
  this.aK = data4;
  this.aM = suffix3;
  this.aL = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.n = (function(index) {
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.b1) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aK.a.length) ? this.aK.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aM.a.length) ? this.aM.a[i3].a[i2].a[i1] : ((i2 < this.aL.a.length) ? this.aL.a[i2].a[i1] : this.k.a[i1])));
    } else if ((index >= this.b0)) {
      var io$2 = ((index - this.b0) | 0);
      return this.bk.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aZ)) {
      var io$3 = ((index - this.aZ) | 0);
      return this.bj.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aW(index);
  }
});
$p.eC = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.b1)) {
      var io = ((index - this.b1) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.aK.a.length)) {
        var a4 = this.aK;
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
        return new $c_sci_Vector4(this.h, this.aZ, this.bj, this.b0, this.bk, this.b1, a4c, this.aM, this.aL, this.k, this.m);
      } else if ((i3 < this.aM.a.length)) {
        var a3$1 = this.aM;
        var a3c$1 = a3$1.g();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.g();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.h, this.aZ, this.bj, this.b0, this.bk, this.b1, this.aK, a3c$1, this.aL, this.k, this.m);
      } else if ((i2 < this.aL.a.length)) {
        var a2$2 = this.aL;
        var a2c$2 = a2$2.g();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.h, this.aZ, this.bj, this.b0, this.bk, this.b1, this.aK, this.aM, a2c$2, this.k, this.m);
      } else {
        var a1$3 = this.k;
        var a1c$3 = a1$3.g();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.h, this.aZ, this.bj, this.b0, this.bk, this.b1, this.aK, this.aM, this.aL, a1c$3, this.m);
      }
    } else if ((index >= this.b0)) {
      var io$2 = ((index - this.b0) | 0);
      var a3$2 = this.bk;
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
      return new $c_sci_Vector4(this.h, this.aZ, this.bj, this.b0, a3c$2, this.b1, this.aK, this.aM, this.aL, this.k, this.m);
    } else if ((index >= this.aZ)) {
      var io$3 = ((index - this.aZ) | 0);
      var a2$4 = this.bj;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.g();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.g();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.h, this.aZ, a2c$4, this.b0, this.bk, this.b1, this.aK, this.aM, this.aL, this.k, this.m);
    } else {
      var a1$6 = this.h;
      var a1c$6 = a1$6.g();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.aZ, this.bj, this.b0, this.bk, this.b1, this.aK, this.aM, this.aL, this.k, this.m);
    }
  } else {
    throw this.aW(index);
  }
});
$p.er = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$33 = $m_sci_VectorStatics$().fL(this.k, elem);
    var length0$33 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.aZ, this.bj, this.b0, this.bk, this.b1, this.aK, this.aM, this.aL, suffix1$33, length0$33);
  } else if ((this.aL.a.length < 31)) {
    var suffix2$22 = $m_sci_VectorStatics$().F(this.aL, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$34 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.aZ, this.bj, this.b0, this.bk, this.b1, this.aK, this.aM, suffix2$22, a, length0$34);
  } else if ((this.aM.a.length < 31)) {
    var suffix3$9 = $m_sci_VectorStatics$().F(this.aM, $m_sci_VectorStatics$().F(this.aL, this.k));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$35 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.aZ, this.bj, this.b0, this.bk, this.b1, this.aK, suffix3$9, $m_sci_VectorStatics$().bK, a$1, length0$35);
  } else if ((this.aK.a.length < 30)) {
    var data4$10 = $m_sci_VectorStatics$().F(this.aK, $m_sci_VectorStatics$().F(this.aM, $m_sci_VectorStatics$().F(this.aL, this.k)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$36 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.aZ, this.bj, this.b0, this.bk, this.b1, data4$10, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bK, a$2, length0$36);
  } else {
    var $x_11 = this.h;
    var $x_10 = this.aZ;
    var $x_9 = this.bj;
    var $x_8 = this.b0;
    var $x_7 = this.bk;
    var $x_6 = this.b1;
    var $x_5 = this.aK;
    var $x_4 = this.b1;
    var $x_3 = $m_sci_VectorStatics$().jL;
    var x = $m_sci_VectorStatics$().F(this.aM, $m_sci_VectorStatics$().F(this.aL, this.k));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().dj;
    var $x_1 = $m_sci_VectorStatics$().bK;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.m) | 0));
  }
});
$p.cZ = (function(f) {
  var prefix1$39 = $m_sci_VectorStatics$().cB(this.h, f);
  var prefix2$27 = $m_sci_VectorStatics$().ac(2, this.bj, f);
  var prefix3$14 = $m_sci_VectorStatics$().ac(3, this.bk, f);
  var data4$15 = $m_sci_VectorStatics$().ac(4, this.aK, f);
  var suffix3$14 = $m_sci_VectorStatics$().ac(3, this.aM, f);
  var suffix2$27 = $m_sci_VectorStatics$().ac(2, this.aL, f);
  var suffix1$41 = $m_sci_VectorStatics$().cB(this.k, f);
  return new $c_sci_Vector4(prefix1$39, this.aZ, prefix2$27, this.b0, prefix3$14, this.b1, data4$15, suffix3$14, suffix2$27, suffix1$41, this.m);
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
      return this.bj;
      break;
    }
    case 2: {
      return this.bk;
      break;
    }
    case 3: {
      return this.aK;
      break;
    }
    case 4: {
      return this.aM;
      break;
    }
    case 5: {
      return this.aL;
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
    var io = ((index - this.b1) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aK.a.length) ? this.aK.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aM.a.length) ? this.aM.a[i3].a[i2].a[i1] : ((i2 < this.aL.a.length) ? this.aL.a[i2].a[i1] : this.k.a[i1])));
    } else if ((index >= this.b0)) {
      var io$2 = ((index - this.b0) | 0);
      return this.bk.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aZ)) {
      var io$3 = ((index - this.aZ) | 0);
      return this.bj.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aW(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  hp: 1,
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Y: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.h = null;
  this.k = null;
  this.m = 0;
  this.aA = 0;
  this.aP = null;
  this.aB = 0;
  this.aQ = null;
  this.aC = 0;
  this.aR = null;
  this.aD = 0;
  this.ag = null;
  this.aj = null;
  this.ai = null;
  this.ah = null;
  this.aA = len1;
  this.aP = prefix2;
  this.aB = len12;
  this.aQ = prefix3;
  this.aC = len123;
  this.aR = prefix4;
  this.aD = len1234;
  this.ag = data5;
  this.aj = suffix4;
  this.ai = suffix3;
  this.ah = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.n = (function(index) {
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.aD) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ag.a.length) ? this.ag.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aj.a.length) ? this.aj.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ai.a.length) ? this.ai.a[i3].a[i2].a[i1] : ((i2 < this.ah.a.length) ? this.ah.a[i2].a[i1] : this.k.a[i1]))));
    } else if ((index >= this.aC)) {
      var io$2 = ((index - this.aC) | 0);
      return this.aR.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aB)) {
      var io$3 = ((index - this.aB) | 0);
      return this.aQ.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aA)) {
      var io$4 = ((index - this.aA) | 0);
      return this.aP.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aW(index);
  }
});
$p.eC = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.aD)) {
      var io = ((index - this.aD) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.ag.a.length)) {
        var a5 = this.ag;
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
        return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, this.aQ, this.aC, this.aR, this.aD, a5c, this.aj, this.ai, this.ah, this.k, this.m);
      } else if ((i4 < this.aj.a.length)) {
        var a4$1 = this.aj;
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
        return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, this.aQ, this.aC, this.aR, this.aD, this.ag, a4c$1, this.ai, this.ah, this.k, this.m);
      } else if ((i3 < this.ai.a.length)) {
        var a3$2 = this.ai;
        var a3c$2 = a3$2.g();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.g();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, this.aQ, this.aC, this.aR, this.aD, this.ag, this.aj, a3c$2, this.ah, this.k, this.m);
      } else if ((i2 < this.ah.a.length)) {
        var a2$3 = this.ah;
        var a2c$3 = a2$3.g();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.g();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, this.aQ, this.aC, this.aR, this.aD, this.ag, this.aj, this.ai, a2c$3, this.k, this.m);
      } else {
        var a1$4 = this.k;
        var a1c$4 = a1$4.g();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, this.aQ, this.aC, this.aR, this.aD, this.ag, this.aj, this.ai, this.ah, a1c$4, this.m);
      }
    } else if ((index >= this.aC)) {
      var io$2 = ((index - this.aC) | 0);
      var a4$2 = this.aR;
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
      return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, this.aQ, this.aC, a4c$2, this.aD, this.ag, this.aj, this.ai, this.ah, this.k, this.m);
    } else if ((index >= this.aB)) {
      var io$3 = ((index - this.aB) | 0);
      var a3$4 = this.aQ;
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
      return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, a3c$4, this.aC, this.aR, this.aD, this.ag, this.aj, this.ai, this.ah, this.k, this.m);
    } else if ((index >= this.aA)) {
      var io$4 = ((index - this.aA) | 0);
      var a2$6 = this.aP;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.g();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.g();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.h, this.aA, a2c$6, this.aB, this.aQ, this.aC, this.aR, this.aD, this.ag, this.aj, this.ai, this.ah, this.k, this.m);
    } else {
      var a1$8 = this.h;
      var a1c$8 = a1$8.g();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aA, this.aP, this.aB, this.aQ, this.aC, this.aR, this.aD, this.ag, this.aj, this.ai, this.ah, this.k, this.m);
    }
  } else {
    throw this.aW(index);
  }
});
$p.er = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$54 = $m_sci_VectorStatics$().fL(this.k, elem);
    var length0$54 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, this.aQ, this.aC, this.aR, this.aD, this.ag, this.aj, this.ai, this.ah, suffix1$54, length0$54);
  } else if ((this.ah.a.length < 31)) {
    var suffix2$41 = $m_sci_VectorStatics$().F(this.ah, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$55 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, this.aQ, this.aC, this.aR, this.aD, this.ag, this.aj, this.ai, suffix2$41, a, length0$55);
  } else if ((this.ai.a.length < 31)) {
    var suffix3$29 = $m_sci_VectorStatics$().F(this.ai, $m_sci_VectorStatics$().F(this.ah, this.k));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$56 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, this.aQ, this.aC, this.aR, this.aD, this.ag, this.aj, suffix3$29, $m_sci_VectorStatics$().bK, a$1, length0$56);
  } else if ((this.aj.a.length < 31)) {
    var suffix4$12 = $m_sci_VectorStatics$().F(this.aj, $m_sci_VectorStatics$().F(this.ai, $m_sci_VectorStatics$().F(this.ah, this.k)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$57 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, this.aQ, this.aC, this.aR, this.aD, this.ag, suffix4$12, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bK, a$2, length0$57);
  } else if ((this.ag.a.length < 30)) {
    var data5$13 = $m_sci_VectorStatics$().F(this.ag, $m_sci_VectorStatics$().F(this.aj, $m_sci_VectorStatics$().F(this.ai, $m_sci_VectorStatics$().F(this.ah, this.k))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$58 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aA, this.aP, this.aB, this.aQ, this.aC, this.aR, this.aD, data5$13, $m_sci_VectorStatics$().fC, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bK, a$3, length0$58);
  } else {
    var $x_14 = this.h;
    var $x_13 = this.aA;
    var $x_12 = this.aP;
    var $x_11 = this.aB;
    var $x_10 = this.aQ;
    var $x_9 = this.aC;
    var $x_8 = this.aR;
    var $x_7 = this.aD;
    var $x_6 = this.ag;
    var $x_5 = this.aD;
    var $x_4 = $m_sci_VectorStatics$().ot;
    var x = $m_sci_VectorStatics$().F(this.aj, $m_sci_VectorStatics$().F(this.ai, $m_sci_VectorStatics$().F(this.ah, this.k)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().fC;
    var $x_2 = $m_sci_VectorStatics$().dj;
    var $x_1 = $m_sci_VectorStatics$().bK;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.m) | 0));
  }
});
$p.cZ = (function(f) {
  var prefix1$61 = $m_sci_VectorStatics$().cB(this.h, f);
  var prefix2$47 = $m_sci_VectorStatics$().ac(2, this.aP, f);
  var prefix3$35 = $m_sci_VectorStatics$().ac(3, this.aQ, f);
  var prefix4$18 = $m_sci_VectorStatics$().ac(4, this.aR, f);
  var data5$19 = $m_sci_VectorStatics$().ac(5, this.ag, f);
  var suffix4$18 = $m_sci_VectorStatics$().ac(4, this.aj, f);
  var suffix3$35 = $m_sci_VectorStatics$().ac(3, this.ai, f);
  var suffix2$47 = $m_sci_VectorStatics$().ac(2, this.ah, f);
  var suffix1$64 = $m_sci_VectorStatics$().cB(this.k, f);
  return new $c_sci_Vector5(prefix1$61, this.aA, prefix2$47, this.aB, prefix3$35, this.aC, prefix4$18, this.aD, data5$19, suffix4$18, suffix3$35, suffix2$47, suffix1$64, this.m);
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
      return this.aP;
      break;
    }
    case 2: {
      return this.aQ;
      break;
    }
    case 3: {
      return this.aR;
      break;
    }
    case 4: {
      return this.ag;
      break;
    }
    case 5: {
      return this.aj;
      break;
    }
    case 6: {
      return this.ai;
      break;
    }
    case 7: {
      return this.ah;
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
    var io = ((index - this.aD) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ag.a.length) ? this.ag.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aj.a.length) ? this.aj.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ai.a.length) ? this.ai.a[i3].a[i2].a[i1] : ((i2 < this.ah.a.length) ? this.ah.a[i2].a[i1] : this.k.a[i1]))));
    } else if ((index >= this.aC)) {
      var io$2 = ((index - this.aC) | 0);
      return this.aR.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aB)) {
      var io$3 = ((index - this.aB) | 0);
      return this.aQ.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aA)) {
      var io$4 = ((index - this.aA) | 0);
      return this.aP.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aW(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  hq: 1,
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Y: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.h = null;
  this.k = null;
  this.m = 0;
  this.ak = 0;
  this.aE = null;
  this.al = 0;
  this.aF = null;
  this.am = 0;
  this.aG = null;
  this.an = 0;
  this.aH = null;
  this.av = 0;
  this.a6 = null;
  this.aa = null;
  this.a9 = null;
  this.a8 = null;
  this.a7 = null;
  this.ak = len1;
  this.aE = prefix2;
  this.al = len12;
  this.aF = prefix3;
  this.am = len123;
  this.aG = prefix4;
  this.an = len1234;
  this.aH = prefix5;
  this.av = len12345;
  this.a6 = data6;
  this.aa = suffix5;
  this.a9 = suffix4;
  this.a8 = suffix3;
  this.a7 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.n = (function(index) {
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.av) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a6.a.length) ? this.a6.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.aa.a.length) ? this.aa.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a9.a.length) ? this.a9.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a8.a.length) ? this.a8.a[i3].a[i2].a[i1] : ((i2 < this.a7.a.length) ? this.a7.a[i2].a[i1] : this.k.a[i1])))));
    } else if ((index >= this.an)) {
      var io$2 = ((index - this.an) | 0);
      return this.aH.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.am)) {
      var io$3 = ((index - this.am) | 0);
      return this.aG.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.al)) {
      var io$4 = ((index - this.al) | 0);
      return this.aF.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ak)) {
      var io$5 = ((index - this.ak) | 0);
      return this.aE.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aW(index);
  }
});
$p.eC = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.av)) {
      var io = ((index - this.av) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.a6.a.length)) {
        var a6 = this.a6;
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
        return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, a6c, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
      } else if ((i5 < this.aa.a.length)) {
        var a5$1 = this.aa;
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
        return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, a5c$1, this.a9, this.a8, this.a7, this.k, this.m);
      } else if ((i4 < this.a9.a.length)) {
        var a4$2 = this.a9;
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
        return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, this.aa, a4c$2, this.a8, this.a7, this.k, this.m);
      } else if ((i3 < this.a8.a.length)) {
        var a3$3 = this.a8;
        var a3c$3 = a3$3.g();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.g();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.g();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, this.aa, this.a9, a3c$3, this.a7, this.k, this.m);
      } else if ((i2 < this.a7.a.length)) {
        var a2$4 = this.a7;
        var a2c$4 = a2$4.g();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.g();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, this.aa, this.a9, this.a8, a2c$4, this.k, this.m);
      } else {
        var a1$5 = this.k;
        var a1c$5 = a1$5.g();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, a1c$5, this.m);
      }
    } else if ((index >= this.an)) {
      var io$2 = ((index - this.an) | 0);
      var a5$2 = this.aH;
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
      return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, a5c$2, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
    } else if ((index >= this.am)) {
      var io$3 = ((index - this.am) | 0);
      var a4$4 = this.aG;
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
      return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, a4c$4, this.an, this.aH, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
    } else if ((index >= this.al)) {
      var io$4 = ((index - this.al) | 0);
      var a3$6 = this.aF;
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
      return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, a3c$6, this.am, this.aG, this.an, this.aH, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
    } else if ((index >= this.ak)) {
      var io$5 = ((index - this.ak) | 0);
      var a2$8 = this.aE;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.g();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.g();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.h, this.ak, a2c$8, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
    } else {
      var a1$10 = this.h;
      var a1c$10 = a1$10.g();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
    }
  } else {
    throw this.aW(index);
  }
});
$p.er = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$79 = $m_sci_VectorStatics$().fL(this.k, elem);
    var length0$79 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, suffix1$79, length0$79);
  } else if ((this.a7.a.length < 31)) {
    var suffix2$63 = $m_sci_VectorStatics$().F(this.a7, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$80 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, this.aa, this.a9, this.a8, suffix2$63, a, length0$80);
  } else if ((this.a8.a.length < 31)) {
    var suffix3$52 = $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.k));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$81 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, this.aa, this.a9, suffix3$52, $m_sci_VectorStatics$().bK, a$1, length0$81);
  } else if ((this.a9.a.length < 31)) {
    var suffix4$36 = $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.k)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$82 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, this.aa, suffix4$36, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bK, a$2, length0$82);
  } else if ((this.aa.a.length < 31)) {
    var suffix5$15 = $m_sci_VectorStatics$().F(this.aa, $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.k))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$83 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, this.a6, suffix5$15, $m_sci_VectorStatics$().fC, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bK, a$3, length0$83);
  } else if ((this.a6.a.length < 62)) {
    var data6$16 = $m_sci_VectorStatics$().F(this.a6, $m_sci_VectorStatics$().F(this.aa, $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.k)))));
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var length0$84 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aE, this.al, this.aF, this.am, this.aG, this.an, this.aH, this.av, data6$16, $m_sci_VectorStatics$().jL, $m_sci_VectorStatics$().fC, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bK, a$4, length0$84);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cZ = (function(f) {
  var prefix1$87 = $m_sci_VectorStatics$().cB(this.h, f);
  var prefix2$70 = $m_sci_VectorStatics$().ac(2, this.aE, f);
  var prefix3$59 = $m_sci_VectorStatics$().ac(3, this.aF, f);
  var prefix4$43 = $m_sci_VectorStatics$().ac(4, this.aG, f);
  var prefix5$22 = $m_sci_VectorStatics$().ac(5, this.aH, f);
  var data6$23 = $m_sci_VectorStatics$().ac(6, this.a6, f);
  var suffix5$22 = $m_sci_VectorStatics$().ac(5, this.aa, f);
  var suffix4$43 = $m_sci_VectorStatics$().ac(4, this.a9, f);
  var suffix3$59 = $m_sci_VectorStatics$().ac(3, this.a8, f);
  var suffix2$70 = $m_sci_VectorStatics$().ac(2, this.a7, f);
  var suffix1$91 = $m_sci_VectorStatics$().cB(this.k, f);
  return new $c_sci_Vector6(prefix1$87, this.ak, prefix2$70, this.al, prefix3$59, this.am, prefix4$43, this.an, prefix5$22, this.av, data6$23, suffix5$22, suffix4$43, suffix3$59, suffix2$70, suffix1$91, this.m);
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
      return this.aE;
      break;
    }
    case 2: {
      return this.aF;
      break;
    }
    case 3: {
      return this.aG;
      break;
    }
    case 4: {
      return this.aH;
      break;
    }
    case 5: {
      return this.a6;
      break;
    }
    case 6: {
      return this.aa;
      break;
    }
    case 7: {
      return this.a9;
      break;
    }
    case 8: {
      return this.a8;
      break;
    }
    case 9: {
      return this.a7;
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
    var io = ((index - this.av) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.a6.a.length) ? this.a6.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.aa.a.length) ? this.aa.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a9.a.length) ? this.a9.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a8.a.length) ? this.a8.a[i3].a[i2].a[i1] : ((i2 < this.a7.a.length) ? this.a7.a[i2].a[i1] : this.k.a[i1])))));
    } else if ((index >= this.an)) {
      var io$2 = ((index - this.an) | 0);
      return this.aH.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.am)) {
      var io$3 = ((index - this.am) | 0);
      return this.aG.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.al)) {
      var io$4 = ((index - this.al) | 0);
      return this.aF.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ak)) {
      var io$5 = ((index - this.ak) | 0);
      return this.aE.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aW(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  hr: 1,
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  o: 1,
  s: 1,
  E: 1,
  A: 1,
  l: 1,
  t: 1,
  B: 1,
  a: 1,
  Y: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.bg = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.bg = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.b2 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b4 = (function(size) {
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.cg = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.C = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.p = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aX = (function(len) {
  var x = this.bg.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.b7 = (function() {
  return "IndexedSeq";
});
$p.dt = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), $ct_scm_StringBuilder__(new $c_scm_StringBuilder()));
});
$p.i = (function() {
  return this.bg.i();
});
$p.q = (function() {
  return this.bg.i();
});
$p.rB = (function(x) {
  var this$1 = this.bg;
  var str = ("" + $cToS(x));
  this$1.s = (this$1.s + str);
  return this;
});
$p.t = (function() {
  return this.bg.s;
});
$p.p8 = (function(xs) {
  if (false) {
    var this$3 = this.bg;
    var str = xs.uQ;
    this$3.s = (("" + this$3.s) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.bg.p7(xs.c8);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.bg;
    var s = xs.bg;
    this$4.s = (("" + this$4.s) + s);
  } else {
    var ks = xs.q();
    if ((ks !== 0)) {
      var b = this.bg;
      if ((ks > 0)) {
        b.i();
      }
      var it = xs.d();
      while (it.j()) {
        var c = $uC(it.f());
        var str$1 = ("" + $cToS(c));
        b.s = (b.s + str$1);
      }
    }
  }
  return this;
});
$p.c = (function() {
  return (this.bg.i() === 0);
});
$p.n = (function(i) {
  return $bC(this.bg.pe(i));
});
$p.e = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bg.pe(i));
});
$p.h1 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).p8(coll);
});
$p.f5 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).p8(coll);
});
$p.ad = (function(elem) {
  return this.rB($uC(elem));
});
$p.ar = (function() {
  return this.bg.s;
});
$p.ay = (function() {
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  aW: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i0)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().iw($thiz);
  $thiz.cw = buf.cw;
  $thiz.dU = buf.dU;
  $thiz.hR = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.hS = ((1 + $thiz.hS) | 0);
  if ($thiz.hR) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.hS = 0;
  this.cw = null;
  this.dU = null;
  this.hR = false;
  this.cx = 0;
  this.hS = 0;
  this.cw = $m_sci_Nil$();
  this.dU = null;
  this.hR = false;
  this.cx = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.cb = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b4 = (function(size) {
});
$p.d = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.cw.d(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.hS)));
});
$p.ew = (function() {
  return $m_scm_ListBuffer$();
});
$p.n = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.cw, i);
});
$p.i = (function() {
  return this.cx;
});
$p.q = (function() {
  return this.cx;
});
$p.c = (function() {
  return (this.cx === 0);
});
$p.qK = (function() {
  this.hR = (!this.c());
  return this.cw;
});
$p.rJ = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.cx === 0)) {
    this.cw = last1;
  } else {
    var x$proxy2 = this.dU;
    if ((x$proxy2 === null)) {
      $m_sr_Scala3RunTime$().cE();
    }
    x$proxy2.a2 = last1;
  }
  this.dU = last1;
  this.cx = ((1 + this.cx) | 0);
  return this;
});
$p.iw = (function(xs) {
  var it = xs.d();
  if (it.j()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.f(), $m_sci_Nil$());
    this.cw = last0;
    while (it.j()) {
      var last1 = new $c_sci_$colon$colon(it.f(), $m_sci_Nil$());
      last0.a2 = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.cx = len;
    this.dU = last0;
  }
  return this;
});
$p.rw = (function(xs) {
  var it = xs.d();
  if (it.j()) {
    var fresh = new $c_scm_ListBuffer().iw(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.cx === 0)) {
      this.cw = fresh.cw;
    } else {
      var x$proxy3 = this.dU;
      if ((x$proxy3 === null)) {
        $m_sr_Scala3RunTime$().cE();
      }
      x$proxy3.a2 = fresh.cw;
    }
    this.dU = fresh.dU;
    this.cx = ((this.cx + fresh.cx) | 0);
  }
  return this;
});
$p.b7 = (function() {
  return "ListBuffer";
});
$p.ay = (function() {
  return $m_scm_ListBuffer$();
});
$p.e = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.cw, i);
});
$p.ar = (function() {
  return this.qK();
});
$p.ad = (function(elem) {
  return this.rJ(elem);
});
$p.b2 = (function(elems) {
  return this.rw(elems);
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  H: 1,
  J: 1,
  aD: 1,
  b9: 1,
  l: 1,
  t: 1,
  N: 1,
  ai: 1,
  a: 1,
  Y: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.fD = 0;
  $thiz.cN = initialElements;
  $thiz.aT = initialSize;
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
      var z$tailLocal1$tmp1 = op.bL(z$tailLocal1, $thiz.cN.a[start$tailLocal1]);
      start$tailLocal1 = start$tailLocal1$tmp1;
      z$tailLocal1 = z$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.fD = 0;
  this.cN = null;
  this.aT = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.d = (function() {
  return this.qR().d();
});
$p.bn = (function() {
  return this.qR().bn();
});
$p.cg = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.p = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aX = (function(len) {
  var x = this.aT;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.cb = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.q = (function() {
  return this.aT;
});
$p.ki = (function(n) {
  this.cN = $m_scm_ArrayBuffer$().qs(this.cN, this.aT, n);
});
$p.b4 = (function(size) {
  if (((size > this.aT) && (size >= 1))) {
    this.ki(size);
  }
});
$p.n = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().kz(n, ((this.aT - 1) | 0));
  }
  if ((hi > this.aT)) {
    throw $m_scg_CommonErrors$().kz(((hi - 1) | 0), ((this.aT - 1) | 0));
  }
  return this.cN.a[n];
});
$p.i = (function() {
  return this.aT;
});
$p.qR = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.fD)));
});
$p.ew = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.rG = (function(elem) {
  this.fD = ((1 + this.fD) | 0);
  var newSize = ((1 + this.aT) | 0);
  if ((this.cN.a.length <= ((newSize - 1) | 0))) {
    this.ki(newSize);
  }
  this.aT = newSize;
  this.cN.a[((newSize - 1) | 0)] = elem;
  return this;
});
$p.p1 = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aT;
    if ((elemsLength > 0)) {
      this.fD = ((1 + this.fD) | 0);
      this.ki(((this.aT + elemsLength) | 0));
      $m_s_Array$().et(elems.cN, 0, this.cN, this.aT, elemsLength);
      this.aT = ((this.aT + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.b7 = (function() {
  return "ArrayBuffer";
});
$p.bm = (function(xs, start, len) {
  var srcLen = this.aT;
  var destLen = $m_jl_reflect_Array$().aN(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().et(this.cN, 0, xs, start, copied);
  }
  return copied;
});
$p.dq = (function(z, op) {
  return $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 0, this.aT, z, op);
});
$p.du = (function(op) {
  return ((this.aT > 0) ? $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 1, this.aT, this.cN.a[0], op) : $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op));
});
$p.e = (function(v1) {
  return this.n((v1 | 0));
});
$p.ay = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.ad = (function(elem) {
  return this.rG(elem);
});
$p.b2 = (function(elems) {
  return this.p1(elems);
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  H: 1,
  J: 1,
  aD: 1,
  b9: 1,
  o: 1,
  s: 1,
  W: 1,
  V: 1,
  cA: 1,
  l: 1,
  t: 1,
  a: 1,
  Y: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.eq = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.eq = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.b4 = (function(size) {
});
$p.b7 = (function() {
  return "IndexedSeq";
});
$p.d = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bn = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.cg = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.C = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.p = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aX = (function(len) {
  var x = (this.eq.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cb = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.ew = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.n = (function(index) {
  return this.eq[index];
});
$p.i = (function() {
  return (this.eq.length | 0);
});
$p.q = (function() {
  return (this.eq.length | 0);
});
$p.bz = (function() {
  return "WrappedArray";
});
$p.ar = (function() {
  return this;
});
$p.ad = (function(elem) {
  this.eq.push(elem);
  return this;
});
$p.e = (function(v1) {
  var index = (v1 | 0);
  return this.eq[index];
});
$p.ay = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  jk: 1,
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
  m: 1,
  K: 1,
  C: 1,
  I: 1,
  S: 1,
  R: 1,
  H: 1,
  J: 1,
  aD: 1,
  b9: 1,
  t: 1,
  l: 1,
  V: 1,
  o: 1,
  s: 1,
  W: 1,
  cA: 1,
  N: 1,
  a: 1
}));
$s_Lscorry_Main__main__AT__V(new ($d_T.r().C)([]));
}).call(this);
//# sourceMappingURL=main.js.map
