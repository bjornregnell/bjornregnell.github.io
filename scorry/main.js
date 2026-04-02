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
        return null.v6();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.v0(x0);
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
        return instance.v1(x0);
      }
    }
  }
}
function $dp_compareTo__T__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__compareTo__T__I(instance, x0);
  } else {
    return instance.v2(x0);
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
    return instance.v7(x0);
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.v9(x0);
  }
}
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1);
  } else {
    return instance.vb(x0, x1);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $dp_trim__T(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__trim__T(instance);
  } else {
    return instance.vd();
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
  return (($objectGetClass($thiz).kA() + "@") + $thiz.x());
}
function $f_Lcom_raquo_airstream_core_Named__displayName__T($thiz) {
  var x = $thiz.ez();
  return ((x === (void 0)) ? $thiz.eu() : x);
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$() {
  $n_Lcom_raquo_airstream_core_Observer$ = this;
  $m_Lcom_raquo_airstream_core_Observer$().r2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0))), $m_s_PartialFunction$().hG, true);
}
$p = $c_Lcom_raquo_airstream_core_Observer$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$() {
}
$h_Lcom_raquo_airstream_core_Observer$.prototype = $p;
$p.r2 = (function(onNext, onError, handleObserverErrors) {
  return new $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNext, handleObserverErrors, onError, this);
});
$p.t3 = (function(onTry, handleObserverErrors) {
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
$p.qv = (function(this$, observer) {
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
  this.fj = 0;
  this.fj = 0;
}
$p = $c_Lcom_raquo_airstream_core_Signal$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Signal$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Signal$() {
}
$h_Lcom_raquo_airstream_core_Signal$.prototype = $p;
$p.qf = (function() {
  if ((this.fj === 2147483647)) {
    this.fj = 1;
  } else {
    this.fj = ((1 + this.fj) | 0);
  }
  return this.fj;
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
  this.iF = null;
  this.l8 = null;
  this.iG = 0;
  this.iF = code;
  this.l8 = (void 0);
  var x = $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().hh();
  this.iG = ((x === (void 0)) ? 1 : ((1 + x.iG) | 0));
  if ((($m_Lcom_raquo_airstream_core_Transaction$().hn === (-1)) || (this.iG > $m_Lcom_raquo_airstream_core_Transaction$().hn))) {
    $m_Lcom_raquo_airstream_core_AirstreamError$().d1(new $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded(this, $m_Lcom_raquo_airstream_core_Transaction$().hn));
  } else if ($m_Lcom_raquo_airstream_core_Transaction$onStart$().bp) {
    ($m_Lcom_raquo_airstream_core_Transaction$onStart$().eG.push(this) | 0);
  } else {
    $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().k5(this);
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
  this.hn = 0;
  this.l9 = null;
  $n_Lcom_raquo_airstream_core_Transaction$ = this;
  this.hn = 1000;
  this.l9 = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), (("Attempted to run Transaction " + trx) + " after it was already executed."));
  }));
}
$p = $c_Lcom_raquo_airstream_core_Transaction$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$() {
}
$h_Lcom_raquo_airstream_core_Transaction$.prototype = $p;
$p.pn = (function(transaction) {
  try {
    transaction.iF.e(transaction);
    var x = transaction.l8;
    if ((x !== (void 0))) {
      while (x.v8()) {
        x.v3().vc(transaction);
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
  if ((($thiz.ho.length | 0) === 0)) {
    if ((($thiz.eG.length | 0) > 0)) {
      new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => {
        while ((($thiz.eG.length | 0) > 0)) {
          $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().k5($thiz.eG.shift());
        }
      })));
    }
  } else {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((trx) => {
      while ((($thiz.ho.length | 0) > 0)) {
        var callback = $thiz.ho.shift();
        try {
          callback.e(trx);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          $m_Lcom_raquo_airstream_core_AirstreamError$().d1(e$2);
        }
      }
      while ((($thiz.eG.length | 0) > 0)) {
        var _trx = $thiz.eG.shift();
        $m_Lcom_raquo_airstream_core_Transaction$pendingTransactions$().k5(_trx);
      }
    })));
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Transaction$onStart$() {
  this.bp = false;
  this.ho = null;
  this.eG = null;
  $n_Lcom_raquo_airstream_core_Transaction$onStart$ = this;
  this.bp = false;
  this.ho = $m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_F1.r().C)([])));
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
  $thiz.hp.unshift(transaction);
}
function $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O($thiz) {
  return $thiz.hp.shift();
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
  this.hp = null;
  this.eH = null;
  $n_Lcom_raquo_airstream_core_Transaction$pendingTransactions$ = this;
  this.hp = $m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_core_Transaction.r().C)([])));
  this.eH = new Map();
}
$p = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Transaction$pendingTransactions$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$() {
}
$h_Lcom_raquo_airstream_core_Transaction$pendingTransactions$.prototype = $p;
$p.k5 = (function(newTransaction) {
  var x = this.hh();
  if ((x === (void 0))) {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__pushToStack__Lcom_raquo_airstream_core_Transaction__V(this, newTransaction);
    $m_Lcom_raquo_airstream_core_Transaction$().pn(newTransaction);
    this.sE(newTransaction);
  } else {
    $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__enqueueChild__Lcom_raquo_airstream_core_Transaction__Lcom_raquo_airstream_core_Transaction__V(this, x, newTransaction);
  }
});
$p.sE = (function(transaction) {
  var transaction$tailLocal1 = transaction;
  while (true) {
    var x = this.hh();
    var elem = transaction$tailLocal1;
    if ((!((x !== (void 0)) && $m_sr_BoxesRunTime$().l(elem, x)))) {
      throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");
    }
    this.u1(transaction$tailLocal1);
    transaction$tailLocal1.iF = $m_Lcom_raquo_airstream_core_Transaction$().l9;
    var maybeNextTransaction = this.hh();
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
      $m_Lcom_raquo_airstream_core_Transaction$().pn(maybeNextTransaction);
      transaction$tailLocal1 = maybeNextTransaction;
    }
  }
});
$p.u1 = (function(doneTransaction) {
  var doneTransaction$tailLocal1 = doneTransaction;
  while (true) {
    var maybeNextChildTrx = $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__dequeueChild__Lcom_raquo_airstream_core_Transaction__O(this, doneTransaction$tailLocal1);
    if ($m_sr_BoxesRunTime$().l(maybeNextChildTrx, (void 0))) {
      $p_Lcom_raquo_airstream_core_Transaction$pendingTransactions$__popStack__O(this);
      var maybeParentTransaction = this.hh();
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
$p.hh = (function() {
  return this.hp[0];
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
  this.ld = null;
  this.lb = null;
  this.lc = null;
  this.ld = onWillStart;
  this.lb = onStart;
  this.lc = onStop;
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
$p.s2 = (function(onStart, onStop) {
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
    if ((!$thiz.c1.c())) {
      subscription.qj();
    }
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?");
  }
}
function $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V($thiz) {
  while ((($thiz.ht.length | 0) > 0)) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V($thiz, $thiz.ht.shift());
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicOwner(onAccessAfterKilled) {
  this.lJ = null;
  this.e2 = null;
  this.fk = false;
  this.ht = null;
  this.c1 = null;
  this.fl = 0;
  this.lJ = onAccessAfterKilled;
  this.e2 = $m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.fk = true;
  this.ht = $m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_ownership_DynamicSubscription.r().C)([])));
  this.c1 = $m_s_None$();
  this.fl = 0;
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicOwner() {
}
$h_Lcom_raquo_airstream_ownership_DynamicOwner.prototype = $p;
$p.p6 = (function() {
  if ((!(!this.c1.c()))) {
    var this$4 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
    var f = (() => {
      var newOwner = new $c_Lcom_raquo_airstream_ownership_OneTimeOwner(this.lJ);
      this.c1 = new $c_s_Some(newOwner);
      this.fk = false;
      this.fl = 0;
      var i = 0;
      var originalNumSubs = (this.e2.length | 0);
      while ((i < originalNumSubs)) {
        var ix = ((i + this.fl) | 0);
        this.e2[ix].qi(newOwner);
        i = ((1 + i) | 0);
      }
      $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
      this.fk = true;
      this.fl = 0;
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
$p.sx = (function() {
  if ((!this.c1.c())) {
    this.fk = false;
    var arr = this.e2;
    var i = 0;
    var len = (arr.length | 0);
    while ((i < len)) {
      arr[i].qj();
      i = ((1 + i) | 0);
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    var this$4 = this.c1;
    if ((!this$4.c())) {
      this$4.y().q9();
    }
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removePendingSubscriptionsNow__V(this);
    this.fk = true;
    this.c1 = $m_s_None$();
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not deactivate DynamicOwner: it is not active");
  }
});
$p.rV = (function(subscription, prepend) {
  if (prepend) {
    this.fl = ((1 + this.fl) | 0);
    this.e2.unshift(subscription);
  } else {
    this.e2.push(subscription);
  }
  var this$1 = this.c1;
  if ((!this$1.c())) {
    var x0 = this$1.y();
    subscription.qi(x0);
  }
});
$p.uc = (function(subscription) {
  if (this.fk) {
    $p_Lcom_raquo_airstream_ownership_DynamicOwner__removeSubscriptionNow__Lcom_raquo_airstream_ownership_DynamicSubscription__V(this, subscription);
  } else {
    this.ht.push(subscription);
  }
});
var $d_Lcom_raquo_airstream_ownership_DynamicOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_DynamicOwner, "com.raquo.airstream.ownership.DynamicOwner", ({
  d8: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, activate, prepend) {
  this.hu = null;
  this.lK = null;
  this.hv = null;
  this.hu = dynamicOwner;
  this.lK = activate;
  this.hv = $m_s_None$();
  dynamicOwner.rV(this, prepend);
}
$p = $c_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_DynamicSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_DynamicSubscription() {
}
$h_Lcom_raquo_airstream_ownership_DynamicSubscription.prototype = $p;
$p.ip = (function() {
  this.hu.uc(this);
});
$p.qi = (function(owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    this.hv = this.lK.e(owner);
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
$p.qj = (function() {
  var this$1 = this.hv;
  if ((!this$1.c())) {
    this$1.y().ip();
    this.hv = $m_s_None$();
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
$p.iB = (function(dynamicOwner, activate, prepend) {
  return new $c_Lcom_raquo_airstream_ownership_DynamicSubscription(dynamicOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => new $c_s_Some(activate.e(owner)))), prepend);
});
$p.qO = (function(dynamicOwner, activate, prepend) {
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
  $thiz.po($m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_ownership_Subscription.r().C)([]))));
}
function $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V($thiz) {
  var arr = $thiz.g9();
  var i = 0;
  var len = (arr.length | 0);
  while ((i < len)) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(arr[i]);
    i = ((1 + i) | 0);
  }
  $thiz.g9().length = 0;
}
function $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  var index = ($thiz.g9().indexOf(subscription) | 0);
  if ((index !== (-1))) {
    $thiz.g9().splice(index, 1);
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not remove Subscription from Owner: subscription not found.");
  }
}
function $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V($thiz, subscription) {
  $thiz.g9().push(subscription);
}
function $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V($thiz) {
  if ((!$thiz.iP)) {
    $thiz.lN.I();
    $thiz.iP = true;
  } else {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Can not kill Subscription: it was already killed.");
  }
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_Subscription(owner, cleanup) {
  this.lO = null;
  this.lN = null;
  this.iP = false;
  this.lO = owner;
  this.lN = cleanup;
  this.iP = false;
  owner.qn(this);
}
$p = $c_Lcom_raquo_airstream_ownership_Subscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_Subscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_Subscription() {
}
$h_Lcom_raquo_airstream_ownership_Subscription.prototype = $p;
$p.ip = (function() {
  $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(this);
  $f_Lcom_raquo_airstream_ownership_Owner__onKilledExternally__Lcom_raquo_airstream_ownership_Subscription__V(this.lO, this);
});
var $d_Lcom_raquo_airstream_ownership_Subscription = new $TypeData().i($c_Lcom_raquo_airstream_ownership_Subscription, "com.raquo.airstream.ownership.Subscription", ({
  dc: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_TransferableSubscription(activate, deactivate) {
  this.lP = null;
  this.lQ = null;
  this.e3 = null;
  this.eI = false;
  this.lP = activate;
  this.lQ = deactivate;
  this.e3 = $m_s_None$();
  this.eI = false;
}
$p = $c_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_TransferableSubscription;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_TransferableSubscription() {
}
$h_Lcom_raquo_airstream_ownership_TransferableSubscription.prototype = $p;
$p.tp = (function() {
  var this$1 = this.e3;
  return ((!this$1.c()) && (!this$1.y().hu.c1.c()));
});
$p.uw = (function(nextOwner) {
  if (this.eI) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.e3;
  if ((!this$1.c())) {
    var x0 = this$1.y();
    var x$2 = x0.hu;
    var $x_1 = ((nextOwner === null) ? (x$2 === null) : (nextOwner === x$2));
  } else {
    var $x_1 = false;
  }
  if ((!$x_1)) {
    if ((this.tp() && (!nextOwner.c1.c()))) {
      this.eI = true;
    }
    var this$3 = this.e3;
    if ((!this$3.c())) {
      this$3.y().ip();
      this.e3 = $m_s_None$();
    }
    var newPilotSubscription = $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iB(nextOwner, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((parentOwner) => {
      if ((!this.eI)) {
        this.lP.I();
      }
      return new $c_Lcom_raquo_airstream_ownership_Subscription(parentOwner, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        if ((!this.eI)) {
          this.lQ.I();
        }
      })));
    })), false);
    this.e3 = new $c_s_Some(newPilotSubscription);
    this.eI = false;
  }
});
$p.sj = (function() {
  if (this.eI) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");
  }
  var this$1 = this.e3;
  if ((!this$1.c())) {
    this$1.y().ip();
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
$p.pk = (function(initial) {
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
$p.s1 = (function(eventTarget, eventKey, useCapture) {
  return new $c_Lcom_raquo_airstream_custom_CustomStreamSource(new $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c(((fireValue, _$1, _$2, _$3) => {
    var eventHandler = $m_sjs_js_Any$().pV(fireValue);
    return $m_Lcom_raquo_airstream_custom_CustomSource$Config$().s2(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
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
  return [...$m_sjsr_Compat$().uP(items)];
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
$p.sS = (function(this$, cb) {
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
  this.m1 = null;
  $n_Lcom_raquo_laminar_DomApi$ = this;
  document.createElement("template");
  this.pB($m_Lcom_raquo_laminar_api_package$().n.bo().kW());
  this.m1 = new RegExp(" ", "g");
}
$p = $c_Lcom_raquo_laminar_DomApi$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_DomApi$;
/** @constructor */
function $h_Lcom_raquo_laminar_DomApi$() {
}
$h_Lcom_raquo_laminar_DomApi$.prototype = $p;
$p.rW = (function(parent, child) {
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
$p.u8 = (function(parent, child) {
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
$p.tm = (function(parent, newChild, referenceChild) {
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
$p.tl = (function(parent, newChild, referenceChild) {
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
$p.uf = (function(parent, newChild, oldChild) {
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
$p.tu = (function(node, ancestor) {
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
$p.rK = (function(element, listener) {
  element.addEventListener(listener.fn.fm.gh, listener.j8, listener.j9);
});
$p.u9 = (function(element, listener) {
  element.removeEventListener(listener.fn.fm.gh, listener.j8, listener.j9);
});
$p.sv = (function(tag) {
  return document.createElement(tag.jh);
});
$p.t6 = (function(element, attr) {
  var x = this.t7(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.j3.kj(x));
});
$p.t7 = (function(element, attr) {
  var domValue = element.d4.getAttributeNS(null, attr.gi);
  return ((domValue !== null) ? domValue : (void 0));
});
$p.qE = (function(element, attr, value) {
  this.us(element, attr, attr.j3.ib(value));
});
$p.us = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.ua(element, attr);
  } else {
    element.d4.setAttribute(attr.gi, domValue);
  }
});
$p.ua = (function(element, attr) {
  element.d4.removeAttribute(attr.gi);
});
$p.ut = (function(element, prop, value) {
  this.uu(element, prop, prop.n8.ib(value));
});
$p.uu = (function(element, prop, value) {
  element.d4[prop.n9] = value;
});
$p.uv = (function(element, styleProp, value) {
  var ref = element.d4;
  var styleCssName = styleProp.eN;
  var prefixes = styleProp.eO;
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
$p.pB = (function(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag.ji);
});
$p.ta = (function(element, attr) {
  var x = this.tb(element, attr);
  return ((x === (void 0)) ? (void 0) : attr.j4.kj(x));
});
$p.tb = (function(element, attr) {
  var $x_2 = element.e5;
  var this$1 = attr.hz;
  var $x_1 = $x_2.getAttributeNS((this$1.c() ? null : this$1.y()), attr.j5);
  var domValue = $x_1;
  return ((domValue !== null) ? domValue : (void 0));
});
$p.qF = (function(element, attr, value) {
  this.uy(element, attr, attr.j4.ib(value));
});
$p.uy = (function(element, attr, domValue) {
  if ((domValue === null)) {
    this.ud(element, attr);
  } else {
    var this$1 = attr.hz;
    if (this$1.c()) {
      element.e5.setAttribute(attr.hy, domValue);
    } else {
      var x0 = this$1.y();
      element.e5.setAttributeNS(x0, attr.hy, domValue);
    }
  }
});
$p.ud = (function(element, attr) {
  var $x_1 = element.e5;
  var this$1 = attr.hz;
  $x_1.removeAttributeNS((this$1.c() ? null : this$1.y()), attr.j5);
});
$p.su = (function(text) {
  return document.createComment(text);
});
$p.sw = (function(text) {
  return document.createTextNode(text);
});
$p.tq = (function(element) {
  return $m_sc_StringOps$().sm(element.tagName, 45);
});
$p.tc = (function(element) {
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
  } else if (this.tq(element)) {
    var x = element.value;
    new $c_Lcom_raquo_laminar_DomApi$$anon$2(this);
    return ((x === (void 0)) ? (void 0) : (((typeof x) === "string") ? x : (void 0)));
  } else {
    return (void 0);
  }
});
$p.sA = (function(element, initial) {
  var initial$tailLocal1 = initial;
  var element$tailLocal1 = element;
  while (true) {
    if ((element$tailLocal1 === null)) {
      return initial$tailLocal1;
    }
    var element$tailLocal1$tmp1 = element$tailLocal1.parentNode;
    var initial$tailLocal1$tmp1 = new $c_sci_$colon$colon(this.sy(element$tailLocal1), initial$tailLocal1);
    element$tailLocal1 = element$tailLocal1$tmp1;
    initial$tailLocal1 = initial$tailLocal1$tmp1;
  }
});
$p.sy = (function(node) {
  if ((!(!(node instanceof HTMLElement)))) {
    var id = node.id;
    if (($m_sc_StringOps$(), (id !== ""))) {
      var suffixStr = ("#" + id);
    } else {
      var classes = node.className;
      var suffixStr = (($m_sc_StringOps$(), (classes !== "")) ? ("." + classes.replace(this.m1, ".")) : "");
    }
    return (node.tagName.toLowerCase() + suffixStr);
  } else {
    return node.nodeName;
  }
});
$p.sz = (function(node) {
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
  this.iW = null;
  this.m2 = null;
  this.iV = null;
  this.iW = seq;
  this.m2 = scalaArray;
  this.iV = jsArray;
}
$p = $c_Lcom_raquo_laminar_Seq.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_Seq;
/** @constructor */
function $h_Lcom_raquo_laminar_Seq() {
}
$h_Lcom_raquo_laminar_Seq.prototype = $p;
$p.bW = (function(f) {
  if ((this.iW !== null)) {
    this.iW.bW(f);
  } else if ((this.iV !== null)) {
    $m_Lcom_raquo_ew_JsArray$RichJsArray$().sS(this.iV, $m_sjs_js_Any$().pV(f));
  } else {
    $m_sc_ArrayOps$().sU(this.m2, f);
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
  $thiz.iX = $m_Lcom_raquo_airstream_state_Var$();
}
function $f_Lcom_raquo_laminar_api_LaminarAliases__$init$__V($thiz) {
  $thiz.r5 = $m_Lcom_raquo_laminar_modifiers_Modifier$();
}
function $f_Lcom_raquo_laminar_api_MountHooks__$init$__V($thiz) {
  $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    _$1.na.d4.focus();
  })));
}
function $f_Lcom_raquo_laminar_api_MountHooks__onMountCallback__F1__Lcom_raquo_laminar_modifiers_Modifier($thiz, fn) {
  return new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element) => {
    var ignoreNextActivation = new $c_sr_BooleanRef((!element.cd().c1.c()));
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((c) => {
      if (ignoreNextActivation.hU) {
        var ev$5 = false;
        ignoreNextActivation.hU = ev$5;
      } else {
        fn.e(c);
      }
    }));
    $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().qO(element.cd(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((element$2) => ((owner) => {
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
  $thiz.ms = $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
  $thiz.iY = $thiz.ms;
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__dataAttr__T__Lcom_raquo_laminar_keys_HtmlAttr($thiz, suffix) {
  return new $c_Lcom_raquo_laminar_keys_HtmlAttr(("data-" + suffix), $m_Lcom_raquo_laminar_codecs_package$().dx);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__stringCompositeHtmlAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_HtmlAttr(name, $m_Lcom_raquo_laminar_codecs_package$().dx);
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.gi, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().t6(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().qE(el$2, attr, value);
  })), separator);
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__$init$__V($thiz) {
  $thiz.r4 = $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, "class", " ");
}
function $f_Lcom_raquo_laminar_defs_complex_ComplexSvgKeys__stringCompositeSvgAttr__T__T__Lcom_raquo_laminar_keys_CompositeKey($thiz, name, separator) {
  var attr = new $c_Lcom_raquo_laminar_keys_SvgAttr(name, $m_Lcom_raquo_laminar_codecs_package$().dx, $m_s_None$());
  return new $c_Lcom_raquo_laminar_keys_CompositeKey(attr.hy, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((el) => {
    var x = $m_Lcom_raquo_laminar_DomApi$().ta(el, attr);
    return ((x === (void 0)) ? "" : x);
  })), new $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(((el$2, value) => {
    $m_Lcom_raquo_laminar_DomApi$().qF(el$2, attr, value);
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
$p.rX = (function(childSource, renderable, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, hooks) => {
    if ((!ctx.eM)) {
      ctx.id();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2, maybeLastSeenChild) => ((newComponent) => {
      this.uM(maybeLastSeenChild.D, newComponent, ctx$2, hooks);
      var ev$3 = newComponent;
      maybeLastSeenChild.D = ev$3;
      ev$3 = null;
    }))(ctx, new $c_sr_ObjectRef((void 0)))), owner);
  })), initialHooks);
});
$p.uM = (function(maybeLastSeenChild, newChildNode, ctx, hooks) {
  if ((!ctx.eM)) {
    ctx.id();
  }
  var elem = ctx.e4;
  var elem$1 = 0;
  elem$1 = elem;
  var x$1 = (((maybeLastSeenChild === (void 0)) || $m_sr_BoxesRunTime$().l(maybeLastSeenChild.L(), ctx.eL.L().nextSibling)) ? maybeLastSeenChild : (void 0));
  if ((x$1 === (void 0))) {
    $m_Lcom_raquo_laminar_nodes_ParentNode$().il(ctx.eK, newChildNode, ctx.eL, hooks);
  } else if (($m_Lcom_raquo_laminar_nodes_ParentNode$().ue(ctx.eK, x$1, newChildNode, hooks) || (x$1 === newChildNode))) {
    var ev$4 = ((elem$1 - 1) | 0);
    elem$1 = ev$4;
  }
  ctx.ub(newChildNode);
  ctx.dy.clear();
  ctx.dy.set(newChildNode.L(), newChildNode);
  ctx.e4 = 1;
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
    if ((currentChildrenCount.aw <= index.aw)) {
      $m_Lcom_raquo_laminar_nodes_ParentNode$().il(parentNode, nextChild, lastIndexChild.D, hooks);
      var ev$2 = nextChild.L();
      prevChildRef.D = ev$2;
      ev$2 = null;
      var ev$3 = ((1 + currentChildrenCount.aw) | 0);
      currentChildrenCount.aw = ev$3;
    } else if ((!$m_sr_BoxesRunTime$().l(nextChild.L(), prevChildRef.D))) {
      if ((!(!(!prevChildren.has(nextChild.L()))))) {
        $m_Lcom_raquo_laminar_nodes_ParentNode$().il(parentNode, nextChild, lastIndexChild.D, hooks);
        var ev$4 = nextChild.L();
        prevChildRef.D = ev$4;
        ev$4 = null;
        var ev$5 = ((1 + currentChildrenCount.aw) | 0);
        currentChildrenCount.aw = ev$5;
      } else {
        while (((!$m_sr_BoxesRunTime$().l(nextChild.L(), prevChildRef.D)) && (!$p_Lcom_raquo_laminar_inserters_ChildrenInserter$__containsRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Z($thiz, nextChildrenMap, prevChildRef.D)))) {
          var nextPrevChildRef = prevChildRef.D.nextSibling;
          $m_Lcom_raquo_laminar_nodes_ParentNode$().kR(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.D));
          var ev$6 = nextPrevChildRef;
          prevChildRef.D = ev$6;
          ev$6 = null;
          var ev$7 = ((currentChildrenCount.aw - 1) | 0);
          currentChildrenCount.aw = ev$7;
        }
        if ((!$m_sr_BoxesRunTime$().l(nextChild.L(), prevChildRef.D))) {
          $m_Lcom_raquo_laminar_nodes_ParentNode$().il(parentNode, nextChild, lastIndexChild.D, hooks);
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
    $m_Lcom_raquo_laminar_nodes_ParentNode$().kR(parentNode, $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__prevChildFromRef__Lcom_raquo_ew_JsMap__Lorg_scalajs_dom_Node__Lcom_raquo_laminar_nodes_ChildNode($thiz, prevChildren, prevChildRef.D));
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
$p.pj = (function(childrenSource, renderableSeq, renderableNode, initialHooks) {
  return new $c_Lcom_raquo_laminar_inserters_DynamicInserter($m_s_None$(), true, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((ctx, owner, hooks) => {
    if ((!ctx.eM)) {
      ctx.id();
    }
    return $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(childrenSource, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx$2) => ((components) => {
      this.uN(($m_Lcom_raquo_laminar_Seq$(), new $c_Lcom_raquo_laminar_Seq(components, null, null)), ctx$2, hooks);
    }))(ctx)), owner);
  })), initialHooks);
});
$p.uN = (function(newChildren, ctx, hooks) {
  if ((!ctx.eM)) {
    ctx.id();
  }
  var newChildrenMap = $m_Lcom_raquo_laminar_inserters_InsertContext$().tV(newChildren);
  ctx.e4 = $p_Lcom_raquo_laminar_inserters_ChildrenInserter$__updateChildren__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_Seq__Lcom_raquo_ew_JsMap__Lcom_raquo_laminar_nodes_ReactiveElement__Lcom_raquo_laminar_nodes_ChildNode__I__O__I(this, ctx.dy, newChildren, newChildrenMap, ctx.eK, ctx.eL, ctx.e4, hooks);
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
$p.id = (function() {
  if ((this.eM || (this.e4 !== 0))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("forceSetStrictMode invoked when not allowed, inside parent = " + $m_Lcom_raquo_laminar_DomApi$().sz(this.eK.L())));
  }
  if ((this.dy === null)) {
    this.dy = new Map();
  }
  if ((!(!(!(this.eL.L() instanceof Comment))))) {
    var contentNode = this.eL;
    var newSentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
    $m_Lcom_raquo_laminar_DomApi$().tm(this.eK.L(), newSentinelNode.jb, contentNode.L());
    this.eL = newSentinelNode;
    this.e4 = 1;
    this.dy.set(contentNode.L(), contentNode);
  }
  this.eM = true;
});
$p.ub = (function(after) {
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
        $m_Lcom_raquo_laminar_nodes_ParentNode$().kR(this.eK, maybePrevChild);
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
$p.uh = (function(parentNode, strictMode, hooks) {
  var sentinelNode = new $c_Lcom_raquo_laminar_nodes_CommentNode("");
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(parentNode, sentinelNode, hooks);
  return this.uS(parentNode, sentinelNode, strictMode);
});
$p.uS = (function(parentNode, sentinelNode, strictMode) {
  return new $c_Lcom_raquo_laminar_inserters_InsertContext(parentNode, sentinelNode, strictMode, 0, (strictMode ? new Map() : null));
});
$p.tV = (function(nodes) {
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
$p.qh = (function(items, separator) {
  if ((items === "")) {
    return $m_sci_Nil$();
  } else {
    var this$10 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), items.split(separator).filter(((_$1) => {
      $m_sc_StringOps$();
      return (_$1 !== "");
    })));
    $m_sci_List$();
    return $m_sci_Nil$().iw(this$10);
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
  this.fm = null;
  this.hx = false;
  this.j2 = false;
  this.hw = null;
  this.fm = eventProp;
  this.hx = shouldUseCapture;
  this.j2 = shouldBePassive;
  this.hw = processor;
}
$p = $c_Lcom_raquo_laminar_keys_EventProcessor.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_EventProcessor;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_EventProcessor() {
}
$h_Lcom_raquo_laminar_keys_EventProcessor.prototype = $p;
$p.qc = (function() {
  var newProcessor = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ev) => {
    var this$2 = this.hw.e(ev);
    if (this$2.c()) {
      return $m_s_None$();
    } else {
      this$2.y();
      var x = $m_Lcom_raquo_laminar_DomApi$().tc(ev.target);
      return new $c_s_Some(((x === (void 0)) ? "" : x));
    }
  }));
  return new $c_Lcom_raquo_laminar_keys_EventProcessor(this.fm, this.hx, this.j2, newProcessor);
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
$p.kk = (function(eventProp, shouldUseCapture, shouldBePassive) {
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
  this.r8 = null;
  this.r9 = null;
  this.ra = null;
  this.rb = null;
  this.r8 = "http://www.w3.org/2000/svg";
  this.r9 = "http://www.w3.org/1999/xlink";
  this.ra = "http://www.w3.org/XML/1998/namespace";
  this.rb = "http://www.w3.org/2000/xmlns/";
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr$;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr$() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr$.prototype = $p;
$p.tP = (function(namespace) {
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
  this.na = null;
  this.j6 = null;
  this.na = thisNode;
  this.j6 = owner;
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
  this.rc = null;
  $n_Lcom_raquo_laminar_modifiers_Modifier$ = this;
  this.rc = new $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1();
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
  this.hA = null;
  $n_Lcom_raquo_laminar_modifiers_RenderableNode$ = this;
  this.hA = new $c_Lcom_raquo_laminar_modifiers_RenderableNode$$anon$1();
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
  new $c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => _$4.uO())), $m_Lcom_raquo_laminar_modifiers_RenderableText$());
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
$p.fL = (function(parent, child, hooks) {
  var nextParent = new $c_s_Some(parent);
  child.eF(nextParent);
  if ((hooks !== (void 0))) {
    hooks.ql(parent, child);
  }
  var appended = $m_Lcom_raquo_laminar_DomApi$().rW(parent.L(), child.L());
  if (appended) {
    child.eB(nextParent);
  }
  return appended;
});
$p.kR = (function(parent, child) {
  var removed = false;
  if ($m_sr_BoxesRunTime$().l(child.L().parentNode, parent.L())) {
    child.eF($m_s_None$());
    removed = $m_Lcom_raquo_laminar_DomApi$().u8(parent.L(), child.L());
    child.eB($m_s_None$());
  }
  return removed;
});
$p.il = (function(parent, newChild, referenceChild, hooks) {
  var nextParent = new $c_s_Some(parent);
  newChild.eF(nextParent);
  if ((hooks !== (void 0))) {
    hooks.ql(parent, newChild);
  }
  var inserted = $m_Lcom_raquo_laminar_DomApi$().tl(parent.L(), newChild.L(), referenceChild.L());
  newChild.eB(nextParent);
  return inserted;
});
$p.ue = (function(parent, oldChild, newChild, hooks) {
  var replaced = false;
  if ((oldChild !== newChild)) {
    if (oldChild.fN().bO(parent)) {
      var newChildNextParent = new $c_s_Some(parent);
      oldChild.eF($m_s_None$());
      newChild.eF(newChildNextParent);
      if ((hooks !== (void 0))) {
        hooks.ql(parent, newChild);
      }
      replaced = $m_Lcom_raquo_laminar_DomApi$().uf(parent.L(), newChild.L(), oldChild.L());
      if (replaced) {
        oldChild.eB($m_s_None$());
        newChild.eB(newChildNextParent);
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
$p.uR = (function(element, subscribe) {
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iB(element.cd(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), true);
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
  return (emptyNode$lzy1$1.hV ? emptyNode$lzy1$1.hW : emptyNode$lzy1$1.tk(new $c_Lcom_raquo_laminar_nodes_CommentNode("")));
}
function $p_Lcom_raquo_laminar_receivers_ChildOptionReceiver$__emptyNode$1__sr_LazyRef__Lcom_raquo_laminar_nodes_CommentNode($thiz, emptyNode$lzy1$2) {
  return (emptyNode$lzy1$2.hV ? emptyNode$lzy1$2.hW : $p_Lcom_raquo_laminar_receivers_ChildOptionReceiver$__emptyNode$lzyINIT1$1__sr_LazyRef__Lcom_raquo_laminar_nodes_CommentNode($thiz, emptyNode$lzy1$2));
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
$p.p5 = (function(maybeChildSource) {
  var emptyNode$lzy1 = new $c_sr_LazyRef();
  $m_Lcom_raquo_laminar_api_package$();
  return $m_Lcom_raquo_laminar_inserters_ChildInserter$().rX(maybeChildSource.fb().h6(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((emptyNode$lzy1$2) => ((_$1) => (_$1.c() ? $p_Lcom_raquo_laminar_receivers_ChildOptionReceiver$__emptyNode$1__sr_LazyRef__Lcom_raquo_laminar_nodes_CommentNode(this, emptyNode$lzy1$2) : _$1.y())))(emptyNode$lzy1))).fb(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hA, (void 0));
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
  this.rd = null;
  $n_Lcom_raquo_laminar_receivers_ChildReceiver$ = this;
  this.rd = $m_Lcom_raquo_laminar_receivers_ChildOptionReceiver$();
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
$p.uo = (function(d, scaleFactor) {
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
  if ((!(!$m_jl_Utils$Cache$().fs.call(dict, encodedName)))) {
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
    $thiz.jo = dict;
    $thiz.cj = (((1 | $thiz.cj) << 24) >> 24);
  }
  return $thiz.jo;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.cj) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jo);
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
    $thiz.jp = dict;
    $thiz.cj = (((2 | $thiz.cj) << 24) >> 24);
  }
  return $thiz.jp;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.cj) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.jp);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.cj) << 24) >> 24) === 0)) {
    $thiz.jn = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.cj = (((4 | $thiz.cj) << 24) >> 24);
  }
  return $thiz.jn;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.cj) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.jn);
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
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().d0("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().c0("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().c0("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().c0("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().c0("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
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
  this.jo = null;
  this.jp = null;
  this.jn = null;
  this.cj = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.sK = (function(jsError) {
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
$p.d0 = (function(this$) {
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
  this.jq = null;
  this.nt = null;
  $n_jl_System$SystemProperties$ = this;
  this.jq = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.nt = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.kz = (function(key, default$1) {
  if ((this.jq !== null)) {
    var dict = this.jq;
    return ((!(!$m_jl_Utils$Cache$().fs.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.nt.kz(key, default$1);
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
  this.fs = null;
  $n_jl_Utils$Cache$ = this;
  this.fs = Object.prototype.hasOwnProperty;
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
$p.aO = (function(array) {
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
$p.qI = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bY(a, new $ac_I(a.a.length), 0, end, comparator, ops);
  } else {
    this.cg(a, 0, end, comparator, ops);
  }
});
$p.uC = (function(a, fromIndex, toIndex) {
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
$p.qJ = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var end = ((a.a.length >>> 1) | 0);
  if ((end > 16)) {
    this.bY(a, new $ac_J(((a.a.length >>> 1) | 0)), 0, end, comparator, ops);
  } else {
    this.cg(a, 0, end, comparator, ops);
  }
});
$p.uD = (function(a, fromIndex, toIndex) {
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
$p.qK = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bY(a, new $ac_S(a.a.length), 0, end, comparator, ops);
  } else {
    this.cg(a, 0, end, comparator, ops);
  }
});
$p.uE = (function(a, fromIndex, toIndex) {
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
$p.qH = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bY(a, new $ac_C(a.a.length), 0, end, comparator, ops);
  } else {
    this.cg(a, 0, end, comparator, ops);
  }
});
$p.uB = (function(a, fromIndex, toIndex) {
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
$p.qG = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.bY(a, new $ac_B(a.a.length), 0, end, comparator, ops);
  } else {
    this.cg(a, 0, end, comparator, ops);
  }
});
$p.uA = (function(a, fromIndex, toIndex) {
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
$p.g8 = (function(array, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  var end = array.a.length;
  if ((end > 16)) {
    this.bY(array, $objectGetClass(array).A.Q().A.U(array.a.length), 0, end, comparator$1, ops);
  } else {
    this.cg(array, 0, end, comparator$1, ops);
  }
});
$p.uF = (function(array, fromIndex, toIndex, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.bY(array, $objectGetClass(array).A.Q().A.U(array.a.length), fromIndex, toIndex, comparator$1, ops);
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
        ops.d2(temp, outIndex, ops.bD(a, leftInIndex));
        leftInIndex = ((1 + leftInIndex) | 0);
      } else {
        ops.d2(temp, outIndex, ops.bD(a, rightInIndex));
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
      ops.d2(a, start, aStartPlusOne);
      ops.d2(a, ((1 + start) | 0), aStart);
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
          ops.d2(a, i, ops.bD(a, ((i - 1) | 0)));
          i = ((i - 1) | 0);
        }
        ops.d2(a, ix$2, next);
      }
      m = ((1 + m) | 0);
    }
  }
});
$p.s9 = (function(a, key) {
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
$p.pL = (function(a, b) {
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
$p.km = (function(a, b) {
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
$p.pM = (function(a, b) {
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
$p.pK = (function(a, b) {
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
$p.pJ = (function(a, b) {
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
$p.pN = (function(a, b) {
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
$p.sL = (function(a, value) {
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
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.kh = (function(original, newLength, newType) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.A.Q().A.U(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.pv = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.pz = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.px = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.py = (function(original, newLength) {
  var b = ((original.a.length >>> 1) | 0);
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.pw = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.st = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.ss = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.v(0, ret, 0, copyLength);
  return ret;
});
$p.pA = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.v(0, ret, 0, copyLength);
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
  this.nC = null;
  this.nB = null;
  $n_ju_Formatter$ = this;
  this.nC = new RegExp("(?:(\\d+)\\$)?([-#+ 0,\\(<]*)(\\d+)?(?:\\.(\\d+))?[%A-Za-z]", "g");
  this.nB = new $ac_I(new Int32Array([96, 126, 638, 770, 32, 256, 2, 126, (-1), (-1), (-1), (-1), (-1), (-1), 800, (-1), (-1), (-1), 124, (-1), (-1), (-1), (-1), 544, (-1), (-1)]));
}
$p = $c_ju_Formatter$.prototype = new $h_O();
$p.constructor = $c_ju_Formatter$;
/** @constructor */
function $h_ju_Formatter$() {
}
$h_ju_Formatter$.prototype = $p;
$p.kF = (function(count) {
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
$p.ty = (function(x) {
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
$p.tx = (function(x) {
  var unscaledValueWithSign = x.vg().u();
  if ((unscaledValueWithSign === "0")) {
    return new $c_ju_Formatter$Decimal(false, "0", 0);
  } else {
    var negative = (unscaledValueWithSign.charCodeAt(0) === 45);
    return new $c_ju_Formatter$Decimal(negative, (negative ? unscaledValueWithSign.substring(1) : unscaledValueWithSign), x.va());
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
$p.q4 = (function() {
  return (this.dA === "0");
});
$p.qy = (function(precision) {
  $m_ju_Formatter$();
  if ((!(precision > 0))) {
    throw new $c_jl_AssertionError("Decimal.round() called with non-positive precision");
  }
  return $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, precision);
});
$p.ux = (function(newScale) {
  var roundingPos = ((((this.dA.length + newScale) | 0) - this.d5) | 0);
  var rounded = $p_ju_Formatter$Decimal__roundAtPos__I__ju_Formatter$Decimal(this, roundingPos);
  $m_ju_Formatter$();
  if ((!(rounded.q4() || (rounded.d5 <= newScale)))) {
    throw new $c_jl_AssertionError("roundAtPos returned a non-zero value with a scale too large");
  }
  return ((rounded.q4() || (rounded.d5 === newScale)) ? rounded : new $c_ju_Formatter$Decimal(this.dz, (("" + rounded.dA) + $m_ju_Formatter$().kF(((newScale - rounded.d5) | 0))), newScale));
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
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.aP, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().nY.exec($thiz.aP);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var end = x.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        $thiz.U = ($thiz.U | $m_ju_regex_PatternCompiler$().q7(x.charCodeAt(value)));
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
        $thiz.U = ($thiz.U & (~$m_ju_regex_PatternCompiler$().q7(x$1.charCodeAt(value$1))));
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
  var s = $m_ju_regex_PatternCompiler$().f9(cp);
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
        return (((66 & $thiz.U) !== 2) ? s : (((((cp - 65) | 0) >>> 0) <= 25) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().f9(((32 + cp) | 0))) + "]") : (((((cp - 97) | 0) >>> 0) <= 25) ? ((("[" + $m_ju_regex_PatternCompiler$().f9(((cp - 32) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.aP;
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
          $thiz.kH();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.aP;
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
  var pattern = $thiz.aP;
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
  var amendedToken = compiledToken.replace($m_ju_regex_PatternCompiler$().nZ, ((arg1$2, arg2$2, arg3$2) => {
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
  var pattern = $thiz.aP;
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
      var x1$2 = cls.hE;
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
          return $m_ju_regex_PatternCompiler$().io(cls.d6);
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
        $thiz.fZ("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.U) !== 0)) {
        $thiz.fZ("\\B with UNICODE_CASE", "2018");
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
      var dict = $thiz.gk;
      if ((!(!(!$m_jl_Utils$Cache$().fs.call(dict, groupName))))) {
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
  var pattern = $thiz.aP;
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
  var pattern = $thiz.aP;
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
  var pattern = $thiz.aP;
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
  var pattern = $thiz.aP;
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
  var pattern = $thiz.aP;
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
      var positive = $m_ju_regex_PatternCompiler$().nT;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().nW;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().nU;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().nX;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().nV;
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
  return ((dispatchChar >= 97) ? positive : positive.tQ());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.aP;
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
  var dict = $m_ju_regex_PatternCompiler$().jw;
  if ((!(!(!$m_jl_Utils$Cache$().fs.call(dict, property))))) {
    $thiz.fZ("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.U) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().jw;
  var result = dict$1[property2];
  $thiz.b = ((1 + $thiz.b) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.aP;
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
          return builder.sP();
          break;
        }
        case 38: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if ((($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 38))) {
            $thiz.b = ((1 + $thiz.b) | 0);
            builder.uJ();
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
              builder.rH($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
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
              builder.rJ(pattern, $thiz.b, end);
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
            $thiz.kH();
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
  var pattern = $thiz.aP;
  var len = pattern.length;
  var start = $thiz.b;
  if (((((1 + start) | 0) === len) || (pattern.charCodeAt(((1 + start) | 0)) !== 63))) {
    $thiz.b = ((1 + start) | 0);
    $thiz.c2 = ((1 + $thiz.c2) | 0);
    $thiz.c3.push($thiz.c2);
    return (("(" + $thiz.h5(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var index$1 = ((2 + start) | 0);
    var c1 = pattern.charCodeAt(index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.b = ((3 + start) | 0);
      return ((("" + pattern.substring(start, ((3 + start) | 0))) + $thiz.h5(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var index$2 = ((3 + start) | 0);
      var c2 = pattern.charCodeAt(index$2);
      if ((((((c2 - 65) | 0) >>> 0) <= 25) || ((((c2 - 97) | 0) >>> 0) <= 25))) {
        $thiz.b = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.gk;
        if ((!(!$m_jl_Utils$Cache$().fs.call(dict, name)))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.c2 = ((1 + $thiz.c2) | 0);
        $thiz.c3.push($thiz.c2);
        var dict$1 = $thiz.gk;
        var value = ((($thiz.c3.length | 0) - 1) | 0);
        dict$1[name] = value;
        $thiz.b = ((1 + $thiz.b) | 0);
        return (("(" + $thiz.h5(true)) + ")");
      } else {
        if (((c2 !== 33) && (c2 !== 61))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.fZ("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.b = ((3 + start) | 0);
      $thiz.c2 = ((1 + $thiz.c2) | 0);
      var groupNumber = $thiz.c2;
      return (((("(?:(?=(" + $thiz.h5(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.aP;
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
      builder$1.i5(startCodePoint);
      builder$1.i5(45);
    } else {
      $thiz.b = (($thiz.b + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      builder$1.rI(startCodePoint, endCodePoint);
    }
  } else {
    builder$1.i5(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.aP = null;
  this.U = 0;
  this.hD = false;
  this.b = 0;
  this.c2 = 0;
  this.c3 = null;
  this.gk = null;
  this.aP = pattern;
  this.U = flags;
  this.hD = false;
  this.b = 0;
  this.c2 = 0;
  this.c3 = [0];
  this.gk = ({});
}
$p = $c_ju_regex_PatternCompiler.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $p;
$p.sl = (function() {
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
    this.fZ("MULTILINE", "2018");
  }
  if (((256 & this.U) !== 0)) {
    this.fZ("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.aP);
  } else {
    if ((this.aP.substring(this.b, ((2 + this.b) | 0)) === "\\G")) {
      this.hD = true;
      this.b = ((2 + this.b) | 0);
    }
    var jsPattern = this.h5(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().jv ? "us" : "u");
  var jsFlags = (((66 & this.U) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.aP, this.U, jsPattern, jsFlags, this.hD, (((this.c3.length | 0) - 1) | 0), this.c3, this.gk);
});
$p.fZ = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$p.h5 = (function(insideGroup) {
  var pattern = this.aP;
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
          if ((this.hD && (!insideGroup))) {
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
            this.kH();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().f9(dispatchCP)) + "'"));
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
          var rejected = (((32 & this.U) !== 0) ? "" : (((1 & this.U) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().io(rejected);
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
$p.kH = (function() {
  var pattern = this.aP;
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
  fP: 1
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
  this.nY = null;
  this.nZ = null;
  this.ri = false;
  this.rh = false;
  this.jv = false;
  this.nT = null;
  this.re = null;
  this.nW = null;
  this.nU = null;
  this.rf = null;
  this.nX = null;
  this.nV = null;
  this.rg = null;
  this.jw = null;
  this.rj = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.nY = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.nZ = new RegExp("(\\\\+)(\\d+)", "g");
  this.ri = true;
  this.rh = true;
  this.jv = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.nT = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.re = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.nW = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.nU = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.rf = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.nX = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.nV = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.rg = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
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
  this.jw = r;
  this.rj = new RegExp("(?:^|_)[a-z]", "g");
}
$p = $c_ju_regex_PatternCompiler$.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $p;
$p.sk = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).sl();
});
$p.q7 = (function(c) {
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
$p.io = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().jv ? "." : "[\\d\\D]"));
});
$p.f9 = (function(codePoint) {
  return String.fromCodePoint(codePoint);
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().i($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  fQ: 1
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
  if ($thiz.jy) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().io($thiz.a1);
    return (($thiz.ck === "") ? negThisSegment : (((("(?:(?!" + $thiz.ck) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.a1 === "") ? (($thiz.ck === "") ? "[^\\d\\D]" : (("(?:" + $thiz.ck) + ")")) : (($thiz.ck === "") ? (("[" + $thiz.a1) + "]") : (((("(?:" + $thiz.ck) + "|[") + $thiz.a1) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().f9(codePoint);
  return (((((((codePoint - 92) | 0) >>> 0) <= 1) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.jx = false;
  this.jy = false;
  this.gl = null;
  this.ck = null;
  this.a1 = null;
  this.jx = asciiCaseInsensitive;
  this.jy = isNegated;
  this.gl = "";
  this.ck = "";
  this.a1 = "";
}
$p = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $p;
$p.sP = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.gl === "") ? conjunct : ((("(?:" + this.gl) + conjunct) + ")"));
});
$p.uJ = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.gl = (this.gl + (this.jy ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.ck = "";
  this.a1 = "";
});
$p.rH = (function(cls) {
  var x1 = cls.hE;
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
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().io(cls.d6));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$p.rJ = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I(str, i);
    this.i5(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$p.i5 = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.a1 = (("" + s) + this.a1);
  } else {
    this.a1 = (("" + this.a1) + s);
  }
  if (this.jx) {
    if (((((codePoint - 65) | 0) >>> 0) <= 25)) {
      this.a1 = (("" + this.a1) + $m_ju_regex_PatternCompiler$().f9(((32 + codePoint) | 0)));
    } else if (((((codePoint - 97) | 0) >>> 0) <= 25)) {
      this.a1 = (("" + this.a1) + $m_ju_regex_PatternCompiler$().f9(((codePoint - 32) | 0)));
    }
  }
});
$p.rI = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.a1 = (s + this.a1);
  } else {
    this.a1 = (this.a1 + s);
  }
  if (this.jx) {
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
  fR: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.jz)) {
    $thiz.jA = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.hE), $thiz.d6);
    $thiz.jz = true;
  }
  return $thiz.jA;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.jA = null;
  this.hE = 0;
  this.d6 = null;
  this.jz = false;
  this.hE = kind;
  this.d6 = data;
}
$p = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $p;
$p.tQ = (function() {
  return ((!this.jz) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.jA);
});
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().i($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  fS: 1
}));
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().u7(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().u6(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sD(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sC(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().pU(value);
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
  return $m_RTLong$().kY(lo, hi);
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
$p.kY = (function(lo, hi) {
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
$p.pU = (function(value) {
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
$p.sC = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.iv(rlo, rhi, rlo$1, rhi$1, true);
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
$p.sD = (function(alo, ahi, blo, bhi) {
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
    return this.iv(alo, ahi, blo, bhi, true);
  }
});
$p.u6 = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.iv(rlo, rhi, rlo$1, rhi$1, false);
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
$p.u7 = (function(alo, ahi, blo, bhi) {
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
    return this.iv(alo, ahi, blo, bhi, false);
  }
});
$p.iv = (function(alo, ahi, blo, bhi, askQuotient) {
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
  fU: 1
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
  $m_ju_Arrays$().sL(result, (void 0));
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
$p.pR = (function(it, evidence$1) {
  var n = it.s();
  if ((n > (-1))) {
    var elements = evidence$1.bu(n);
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
    var elementClass = evidence$1.aJ();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.d();
    while (iterator$2.j()) {
      var elem = iterator$2.f();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().g6(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().g5(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
});
$p.et = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.A.Z && $objectGetClass(dest).A.R(srcClass.A))) {
    src.v(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.pu = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  }
  if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().W(original, newLength);
  }
  if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().px(original, newLength);
  }
  if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().ss(original, newLength);
  }
  if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().py(original, newLength);
  }
  if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().st(original, newLength);
  }
  if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().pw(original, newLength);
  }
  if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().pv(original, newLength);
  }
  if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().pz(original, newLength);
  }
  if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().pA(original, newLength);
  }
  throw new $c_s_MatchError(original);
});
$p.sr = (function(original, newLength, ct) {
  var runtimeClass = ct.aJ();
  if (((runtimeClass !== null) && (runtimeClass === $d_V.l()))) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if (runtimeClass.A.R($objectGetClass(original).A.Q().A)) {
    return (runtimeClass.A.X ? this.pu(original, newLength) : $m_ju_Arrays$().kh(original, newLength, $objectGetClass(runtimeClass.A.U(0))));
  } else {
    var dest = ct.bu(newLength);
    $m_s_Array$().et(original, 0, dest, 0, $m_jl_reflect_Array$().aO(original));
    return dest;
  }
});
$p.pO = (function(xs, ys) {
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
  fV: 1
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
  this.jB = null;
  this.o3 = null;
  $n_s_Array$EmptyArrays$ = this;
  this.jB = new $ac_I(0);
  this.o3 = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  fW: 1
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
$p.pt = (function(xs) {
  return ((xs === null) ? null : $m_sc_ArrayOps$().qT(xs));
});
/** @constructor */
function $c_s_PartialFunction$() {
  this.o6 = null;
  this.hG = null;
  $n_s_PartialFunction$ = this;
  this.o6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => this.o6));
  this.hG = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  g2: 1
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
    var a = $m_sr_ScalaRunTime$().pl(\u03b4this$2);
    $m_s_util_Sorting$().kV(a, 0, $m_jl_reflect_Array$().aO(a), ord$1);
    return a;
  } else {
    if ($d_O.R($objectGetClass(\u03b4this$2).A.Q().A)) {
      var a$2 = $m_ju_Arrays$().kh(\u03b4this$2, len$1, $d_O.r().l());
    } else {
      var dest = new $ac_O(len$1);
      $m_s_Array$().et(\u03b4this$2, 0, dest, 0, $m_jl_reflect_Array$().aO(\u03b4this$2));
      var a$2 = dest;
    }
    $m_ju_Arrays$().g8(a$2, ord$1);
    return $m_s_Array$().sr(a$2, len$1, $m_s_reflect_ClassTag$().gW($objectGetClass(\u03b4this$2).A.Q()));
  }
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.o9 = null;
  $n_sc_ArrayOps$ = this;
  this.o9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_ArrayOps$().o9));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.uH = (function(this$, ord) {
  var len = $m_jl_reflect_Array$().aO(this$);
  if ((len <= 1)) {
    return $m_sr_ScalaRunTime$().pl(this$);
  } else if ((this$ instanceof $ac_O)) {
    var a = $m_ju_Arrays$().W(this$, len);
    $m_ju_Arrays$().g8(a, ord);
    return a;
  } else if ((this$ instanceof $ac_I)) {
    if ((ord === $m_s_math_Ordering$Int$())) {
      var a$2 = $m_ju_Arrays$().px(this$, len);
      $m_ju_Arrays$().qI(a$2);
      return a$2;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_J)) {
    if ((ord === $m_s_math_Ordering$Long$())) {
      var a$3 = $m_ju_Arrays$().py(this$, len);
      $m_ju_Arrays$().qJ(a$3);
      return a$3;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_C)) {
    if ((ord === $m_s_math_Ordering$Char$())) {
      var a$4 = $m_ju_Arrays$().pw(this$, len);
      $m_ju_Arrays$().qH(a$4);
      return a$4;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_B)) {
    if ((ord === $m_s_math_Ordering$Byte$())) {
      var a$5 = $m_ju_Arrays$().pv(this$, len);
      $m_ju_Arrays$().qG(a$5);
      return a$5;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_S)) {
    if ((ord === $m_s_math_Ordering$Short$())) {
      var a$6 = $m_ju_Arrays$().pz(this$, len);
      $m_ju_Arrays$().qK(a$6);
      return a$6;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_Z)) {
    if ((ord === $m_s_math_Ordering$Boolean$())) {
      var a$7 = $m_ju_Arrays$().pA(this$, len);
      $m_s_util_Sorting$().kV(a$7, 0, a$7.a.length, $m_s_math_Ordering$Boolean$());
      return a$7;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else {
    return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
  }
});
$p.sU = (function(this$, f) {
  var len = $m_jl_reflect_Array$().aO(this$);
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
$p.qT = (function(this$) {
  return $m_sci_ArraySeq$().fd($m_s_Array$().pu(this$, $m_jl_reflect_Array$().aO(this$)));
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  gf: 1
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
  gj: 1
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
      var srclen = $m_jl_reflect_Array$().aO(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().aO(dest);
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
  var x32 = $thiz.s();
  if ((x32 === (-1))) {
    return $thiz.dq(num.ih(0), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2, y$2) => num.qs(x$2, y$2))));
  }
  if ((x32 === 0)) {
    return num.ih(0);
  }
  return $thiz.du(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2$1, y$2$1) => num.qs(x$2$1, y$2$1))));
}
function $f_sc_IterableOnceOps__product__s_math_Numeric__O($thiz, num) {
  var x33 = $thiz.s();
  if ((x33 === (-1))) {
    return $thiz.dq(num.ih(1), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2, y$2) => num.qR(x$2, y$2))));
  }
  if ((x33 === 0)) {
    return num.ih(1);
  }
  return $thiz.du(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2$1, y$2$1) => num.qR(x$2$1, y$2$1))));
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
  var x36 = $thiz.s();
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
  return (($thiz.s() === 0) ? (("" + start) + end) : $thiz.cP($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bh.t);
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
    var elementClass = evidence$1.aJ();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.d();
    while (it.j()) {
      var elem = it.f();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().g6(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().g5(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
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
  this.oh = null;
  this.gq = null;
  this.oh = head;
  this.gq = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.tf = (function() {
  return this.oh.I().d();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  gt: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.oo = null;
  $n_sc_StringOps$ = this;
  this.oo = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.oo));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.sm = (function(this$, elem) {
  return ($f_T__indexOf__I__I(this$, elem) >= 0);
});
$p.ul = (function(this$, arg) {
  return (false ? arg.ve() : arg);
});
$p.fS = (function(this$, args) {
  return $m_jl_String$().sV(this$, $m_sr_Arrays$().uq(args.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((arg$2) => this.ul(this$, arg$2)))), $d_O.l()));
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  gE: 1
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
$p.kC = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  gJ: 1
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
  this.ov = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().q5($m_jl_System$SystemProperties$().kz("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.ov = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  gR: 1
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
  gU: 1
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
  this.jJ = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.kn = (function() {
  var state = this.jJ;
  if ((state === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "uninitialized");
  }
  return state.I();
});
$p.kD = (function(state) {
  if ((this.jJ !== null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "already initialized");
  }
  this.jJ = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  gW: 1
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
  gY: 1
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
  this.oy = null;
  $n_sci_MapNode$ = this;
  $m_s_reflect_ManifestFactory$IntManifest$();
  this.oy = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  hd: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (($m_jl_reflect_Array$().aO(as) - 1) | 0)));
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
$p.qu = (function(as, ix) {
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
$p.tn = (function(as, ix, elem) {
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
  this.gE = 0;
  $n_sci_Node$ = this;
  this.gE = $doubleToInt((+Math.ceil(6.4)));
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
$p.th = (function(bitmap, bitpos) {
  return $m_jl_Integer$().dm((bitmap & ((bitpos - 1) | 0)));
});
$p.cA = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.th(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  hh: 1
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
  this.jN = null;
  this.bM = null;
  this.dj = null;
  this.fF = null;
  this.jO = null;
  this.oC = null;
  $n_sci_VectorStatics$ = this;
  this.jN = new $ac_O(0);
  this.bM = new ($d_O.r().r().C)(0);
  this.dj = new ($d_O.r().r().r().C)(0);
  this.fF = new ($d_O.r().r().r().r().C)(0);
  this.jO = new ($d_O.r().r().r().r().r().C)(0);
  this.oC = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.fP = (function(a, elem) {
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
  var ac = $objectGetClass(a).A.Q().A.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.v(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.kp = (function(level, a, f) {
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
      this.kp(l, a.a[i], f);
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
      return this.tI(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.tI = (function(a, f, at, v2) {
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
$p.ac = (function(n, a, f) {
  if ((n === 1)) {
    return this.cB(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.ac(((n - 1) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.tJ(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.tJ = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).A.Q().A.U(a.a.length);
  if ((at > 0)) {
    a.v(0, ac, 0, at);
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
  hz: 1
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
$p.g6 = (function(runtimeClass) {
  return ((runtimeClass === $d_B.l()) ? 0 : ((runtimeClass === $d_S.l()) ? 0 : ((runtimeClass === $d_C.l()) ? 0 : ((runtimeClass === $d_I.l()) ? 0 : ((runtimeClass === $d_J.l()) ? $bL(0, 0) : ((runtimeClass === $d_F.l()) ? 0.0 : ((runtimeClass === $d_D.l()) ? 0.0 : ((runtimeClass === $d_Z.l()) ? false : ((runtimeClass === $d_V.l()) ? (void 0) : null)))))))));
});
$p.g5 = (function(runtimeClass, a) {
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
  hH: 1
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
  this.bU = null;
  this.aV = null;
  this.en = _key;
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
$p.h2 = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.dl) && $m_sr_BoxesRunTime$().l(k, \u03b4this$tailLocal1.en))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.aV === null) || (\u03b4this$tailLocal1.dl > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.aV;
    }
  }
});
$p.cS = (function(f) {
  var \u03b4this$tailLocal3 = this;
  while (true) {
    f.bN(\u03b4this$tailLocal3.en, \u03b4this$tailLocal3.bU);
    if ((\u03b4this$tailLocal3.aV !== null)) {
      \u03b4this$tailLocal3 = \u03b4this$tailLocal3.aV;
    } else {
      return (void 0);
    }
  }
});
$p.u = (function() {
  return ((((((("Node(" + this.en) + ", ") + this.bU) + ", ") + this.dl) + ") -> ") + this.aV);
});
var $d_scm_HashMap$Node = new $TypeData().i($c_scm_HashMap$Node, "scala.collection.mutable.HashMap$Node", ({
  hV: 1
}));
/** @constructor */
function $c_scm_HashSet$Node(_key, _hash, _next) {
  this.fK = null;
  this.dT = 0;
  this.bg = null;
  this.fK = _key;
  this.dT = _hash;
  this.bg = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.sO = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.dT) && $m_sr_BoxesRunTime$().l(k, \u03b4this$tailLocal1.fK))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.bg === null) || (\u03b4this$tailLocal1.dT > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.bg;
    }
  }
});
$p.u = (function() {
  return ((((("Node(" + this.fK) + ", ") + this.dT) + ") -> ") + this.bg);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  i1: 1
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
$p.kb = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  ia: 1
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
  this.rp = null;
  this.ry = null;
  this.rq = null;
  this.rt = null;
  this.ru = null;
  this.rs = null;
  this.rr = null;
  this.ro = null;
  this.rz = null;
  this.rm = null;
  this.rx = null;
  this.rn = null;
  this.rv = null;
  this.rw = null;
  $n_s_reflect_ClassTag$ = this;
  this.rp = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.ry = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.rq = $m_s_reflect_ManifestFactory$CharManifest$();
  this.rt = $m_s_reflect_ManifestFactory$IntManifest$();
  this.ru = $m_s_reflect_ManifestFactory$LongManifest$();
  this.rs = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.rr = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.ro = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.rz = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.rm = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.rx = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.rn = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.rv = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.rw = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.gW = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  iG: 1
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
$p.uq = (function(xs, clazz) {
  var length = xs.i();
  var arr = clazz.A.U(length);
  xs.bm(arr, 0, 2147483647);
  return arr;
});
var $d_sr_Arrays$ = new $TypeData().i($c_sr_Arrays$, "scala.runtime.Arrays$", ({
  j9: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.sJ(x, y) : ((x instanceof $Char) ? this.sH(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.sJ = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.sI(xn, y);
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
$p.sI = (function(xn, yn) {
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
$p.sH = (function(xc, y) {
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
  jb: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  jf: 1
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
  jh: 1
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
$p.pl = (function(xs) {
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
$p.k4 = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.cF(), (x.bx() + "("), ",", ")");
});
$p.fU = (function(xs) {
  return ((xs === null) ? null : $m_sci_ArraySeq$().fd(xs));
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
  ji: 1
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
$p.aW = (function(hash, length) {
  return this.s8((hash ^ length));
});
$p.s8 = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.tD = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.sF = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().pU(dv);
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
    return this.sF((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.tD($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.to = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  jk: 1
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
  jl: 1
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
$p.uz = (function(interval, body) {
  return setTimeout((() => {
    body.I();
  }), interval);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  jr: 1
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
$p.uP = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.hX;
  } else {
    var result = [];
    seq.bW(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  jC: 1
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
    var sc = ((scratch === null) ? evidence$2.bu(((iK - i0) | 0)) : scratch);
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
$p.un = (function(a, from, until) {
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
$p.kV = (function(a, from, until, evidence$4) {
  $m_s_math_Ordering$();
  if ((a instanceof $ac_O)) {
    if ((($m_jl_reflect_Array$().aO(a) > 1) && (evidence$4 === null))) {
      throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "Ordering");
    }
    $m_ju_Arrays$().uF(a, from, until, evidence$4);
  } else if ((a instanceof $ac_I)) {
    if ((evidence$4 === $m_s_math_Ordering$Int$())) {
      $m_ju_Arrays$().uC(a, from, until);
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
      $m_ju_Arrays$().uD(a, from, until);
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
      $m_ju_Arrays$().uB(a, from, until);
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
      $m_ju_Arrays$().uA(a, from, until);
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
      $m_ju_Arrays$().uE(a, from, until);
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
      this.un(a, from, until);
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
  jE: 1
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
$p.sd = (function(label) {
  throw $m_s_util_boundary$Break$().s3(label, (void 0));
});
var $d_s_util_boundary$ = new $TypeData().i($c_s_util_boundary$, "scala.util.boundary$", ({
  jF: 1
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
$p.s3 = (function(label, value) {
  return new $c_s_util_boundary$Break(label, value);
});
var $d_s_util_boundary$Break$ = new $TypeData().i($c_s_util_boundary$Break$, "scala.util.boundary$Break$", ({
  jG: 1
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
$p.s0 = (function(t) {
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
  return (this.s0(t) ? new $c_s_Some(t) : $m_s_None$());
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  jJ: 1
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
$p.aW = (function(hash, length) {
  return this.hi((hash ^ length));
});
$p.hi = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.qV = (function(x, y, seed) {
  var h = seed;
  h = this.z(h, $f_T__hashCode__I("Tuple2"));
  h = this.z(h, x);
  h = this.z(h, y);
  return this.aW(h, 2);
});
$p.fa = (function(x, seed, ignorePrefix) {
  var arr = x.bv();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.bx()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.z(h, $f_T__hashCode__I(x.bx()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.z(h, $m_sr_Statics$().E(x.bw(i)));
      i = ((1 + i) | 0);
    }
    return this.aW(h, arr);
  }
});
$p.ka = (function(x, seed, caseClassName) {
  var arr = x.bv();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.bx()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.z(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.z(h, $m_sr_Statics$().E(x.bw(i)));
      i = ((1 + i) | 0);
    }
    return this.aW(h, arr);
  }
});
$p.iA = (function(xs, seed) {
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
  return this.aW(h$2, n);
});
$p.tX = (function(xs, seed) {
  var it = xs.d();
  var h = seed;
  if ((!it.j())) {
    return this.aW(h, 0);
  }
  var x0 = it.f();
  if ((!it.j())) {
    return this.aW(this.z(h, $m_sr_Statics$().E(x0)), 1);
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
      return this.aW(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.hi(this.z(this.z(h0, rangeDiff), prev));
});
$p.b4 = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().aO(a);
  switch (l) {
    case 0: {
      return this.aW(h, 0);
      break;
    }
    case 1: {
      return this.aW(this.z(h, $m_sr_Statics$().E($m_sr_ScalaRunTime$().ao(a, 0))), 1);
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
          return this.aW(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hi(this.z(this.z(h0, rangeDiff), prev));
    }
  }
});
$p.u3 = (function(start, step, last, seed) {
  return this.hi(this.z(this.z(this.z(seed, start), step), last));
});
$p.ti = (function(a, seed) {
  var h = seed;
  var l = a.i();
  switch (l) {
    case 0: {
      return this.aW(h, 0);
      break;
    }
    case 1: {
      return this.aW(this.z(h, $m_sr_Statics$().E(a.o(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().E(a.o(0));
      h = this.z(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().E(a.o(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.z(h, prev);
        var hash = $m_sr_Statics$().E(a.o(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.z(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.z(h, $m_sr_Statics$().E(a.o(i)));
            i = ((1 + i) | 0);
          }
          return this.aW(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hi(this.z(this.z(h0, rangeDiff), prev));
    }
  }
});
$p.tC = (function(xs, seed) {
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
  return ((rangeState === 2) ? this.u3(initial, rangeDiff, prev, seed) : this.aW(h, n));
});
function $s_Lscorry_Main__main__AT__V(args) {
  $m_Lscorry_Main$().tE(args);
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
$p.tE = (function(args) {
  var inputText = $m_Lcom_raquo_laminar_api_package$().n.iX.pk("1.2 3.5 5.8 9.1 9.1 10");
  var numsSignal = new $c_Lcom_raquo_airstream_misc_MapSignal(inputText.eJ, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((text$2) => {
    try {
      var nums = $m_Lscorry_SummaryStatistics$().tZ(text$2);
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
      return $m_sci_Seq$().ia();
    }
    if ((x$1$2 instanceof $c_s_Some)) {
      var nums$1 = x$1$2.dB;
      var modeVals = $m_Lscorry_SummaryStatistics$().tN(nums$1);
      var modeStr = (modeVals.c() ? "no mode" : $f_sc_IterableOnceOps__mkString__T__T__T__T(modeVals, "", ", ", ""));
      return $m_sci_Seq$().k9($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T4("N", ("" + nums$1.i()), "The number of observations in the data set", "https://en.wikipedia.org/wiki/Sample_size_determination"), new $c_T4("Arithmetic Mean", ("" + $m_Lscorry_SummaryStatistics$().h7(nums$1)), "Sum of all values divided by the number of values", "https://en.wikipedia.org/wiki/Arithmetic_mean"), new $c_T4("Geometric Mean", ("" + $m_Lscorry_SummaryStatistics$().t4(nums$1)), "The nth root of the product of n values; useful for growth rates", "https://en.wikipedia.org/wiki/Geometric_mean"), new $c_T4("Median", ("" + $m_Lscorry_SummaryStatistics$().tL(nums$1)), "The middle value when sorted; less sensitive to outliers than the mean", "https://en.wikipedia.org/wiki/Median"), new $c_T4("Mode", ("" + modeStr), "The most frequently occurring value(s); 'no mode' if all values are unique", "https://en.wikipedia.org/wiki/Mode_(statistics)"), new $c_T4("Variance", ("" + $m_Lscorry_SummaryStatistics$().r0(nums$1)), "Average of squared deviations from the mean; measures spread", "https://en.wikipedia.org/wiki/Variance"), new $c_T4("Std Dev", ("" + $m_Lscorry_SummaryStatistics$().uK(nums$1)), "Square root of variance; measures spread in the same unit as the data", "https://en.wikipedia.org/wiki/Standard_deviation"), new $c_T4("Range", ("" + $m_Lscorry_SummaryStatistics$().u2(nums$1)), "Difference between the maximum and minimum values", "https://en.wikipedia.org/wiki/Range_(statistics)")]));
    }
    throw new $c_s_MatchError(x$1$2);
  })), $m_s_None$());
  var corrInput = $m_Lcom_raquo_laminar_api_package$().n.iX.pk("1 2.1 ; 2.5 5 ; 3 4.3 ; 4.2 9 ; 5 7.5 ; 6.1 12 ; 7 10.4 ; 8.3 15");
  var corrSignal = new $c_Lcom_raquo_airstream_misc_MapSignal(corrInput.eJ, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((text$2$1) => {
    try {
      var pairs = $m_Lscorry_SummaryStatistics$().qp(text$2$1);
      if ((pairs.i() < 2)) {
        return $m_sci_Seq$().ia();
      } else {
        var $x_3 = new $c_T4("N", (pairs.i() + " pairs"), "The number of paired observations", "https://en.wikipedia.org/wiki/Sample_size_determination");
        var rho = $m_Lscorry_SummaryStatistics$().uI(pairs);
        var p = $m_Lscorry_SummaryStatistics$().qr(rho, pairs.i());
        var $x_2 = new $c_T4("Spearman rho", ((rho + ", p = ") + $m_sc_StringOps$().fS("%.4f", $m_sr_ScalaRunTime$().fU(new $ac_O([p])))), "Spearman rank correlation: measures monotonic association using ranks instead of raw values. Ranges from -1 to +1. More robust to outliers than Pearson. The p-value tests the null hypothesis that there is no monotonic association (rho = 0). p < 0.05 is conventionally considered statistically significant; p < 0.01 is highly significant; p > 0.1 suggests no evidence of monotonic association. The p-value is computed using the t-distribution approximation: t = rho * sqrt((n-2)/(1-rho\u00b2)), which is accurate for n >= 10. Assumes: (1) both variables are at least ordinal, (2) the relationship is monotonic.", "https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient");
        var r = $m_Lscorry_SummaryStatistics$().qq(pairs);
        var p$2 = $m_Lscorry_SummaryStatistics$().qr(r, pairs.i());
        var $x_1 = new $c_T4("Pearson r", ((r + ", p = ") + $m_sc_StringOps$().fS("%.4f", $m_sr_ScalaRunTime$().fU(new $ac_O([p$2])))), "Pearson product-moment correlation coefficient: measures linear association between two variables. Ranges from -1 (perfect negative) to +1 (perfect positive). Assumes: (1) both variables are continuous, (2) the relationship is linear, (3) no significant outliers, (4) variables are approximately normally distributed.", "https://en.wikipedia.org/wiki/Pearson_correlation_coefficient");
        matchResult2: {
          var \u03b42$;
          var x4$1 = $m_Lscorry_SummaryStatistics$().tY(pairs);
          if ((x4$1 !== null)) {
            var \u03b42$ = x4$1;
            break matchResult2;
          }
          throw new $c_s_MatchError(x4$1);
        }
        var t = (+\u03b42$.ft);
        var df = (\u03b42$.fu | 0);
        var p$3 = (+\u03b42$.fv);
        return new $c_sci_$colon$colon($x_3, new $c_sci_$colon$colon($x_2, new $c_sci_$colon$colon($x_1, new $c_sci_$colon$colon(new $c_T4("Paired t-test", ((((("t = " + $m_sc_StringOps$().fS("%.4f", $m_sr_ScalaRunTime$().fU(new $ac_O([t])))) + ", df = ") + df) + ", p = ") + $m_sc_StringOps$().fS("%.4f", $m_sr_ScalaRunTime$().fU(new $ac_O([p$3])))), "Student's paired t-test: tests whether the mean difference between paired observations is zero. The p-value is the probability of observing a t-statistic this extreme if the true mean difference is zero (two-tailed). p < 0.05 is conventionally considered statistically significant, but consider effect size and sample size too. p < 0.01 is highly significant; p > 0.1 suggests no evidence against equal means. Related to Pearson r: both assume normality and continuous data. A significant Pearson r means the variables co-vary, while a significant t-test means their means differ. They are complementary \u2014 high correlation does not imply equal means, and equal means does not imply no correlation. Assumes: (1) differences are normally distributed, (2) pairs are independent, (3) data is continuous.", "https://en.wikipedia.org/wiki/Student%27s_t-test#Paired_samples"), $m_sci_Nil$()))));
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
      var pairs$1 = $m_Lscorry_SummaryStatistics$().qp(text$2$2);
      return ((pairs$1.i() < 2) ? $m_s_None$() : new $c_s_Some(pairs$1));
    } catch (e$3) {
      if ((((e$3 instanceof $c_jl_Throwable) ? e$3 : new $c_sjs_js_JavaScriptException(e$3)) instanceof $c_jl_Exception)) {
        return $m_s_None$();
      } else {
        throw e$3;
      }
    }
  })), $m_s_None$());
  var app = $m_Lcom_raquo_laminar_api_package$().n.f7().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.qa().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Enter numbers separated by spaces", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $m_Lcom_raquo_laminar_api_package$().n.fM().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().n.q1().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.qW().r("text"), $m_Lcom_raquo_laminar_api_package$().n.qZ().r($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(inputText.eJ).y()), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().kk($m_Lcom_raquo_laminar_api_package$().n.qk(), false, false)).qc(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    inputText.iS.hb(_$1);
  })))])), $m_Lcom_raquo_laminar_api_package$().n.f7().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.pD().r("flex"), $m_Lcom_raquo_laminar_api_package$().n.pP().r("wrap"), $m_Lcom_raquo_laminar_api_package$().n.pX().r("2em"), $m_Lcom_raquo_laminar_api_package$().n.pe().r("flex-start"), $m_Lcom_raquo_laminar_api_package$().n.qm().r("auto"), $m_Lcom_raquo_laminar_api_package$().n.f7().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().pj(new $c_Lcom_raquo_airstream_misc_MapSignal(statsSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((items$2) => items$2.fQ(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$1) => {
    var lbl = x$1$2$1.eQ;
    var val_ = x$1$2$1.eR;
    var tip = x$1$2$1.eS;
    var url = x$1$2$1.eT;
    return new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().n.fM().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().n.qM().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.iY.p4("tip"), $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__dataAttr__T__Lcom_raquo_laminar_keys_HtmlAttr($m_Lcom_raquo_laminar_api_package$().n, "tip").r(tip), $m_Lcom_raquo_laminar_api_package$().n.i3().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, lbl, $m_Lcom_raquo_laminar_modifiers_RenderableText$().by), $m_Lcom_raquo_laminar_api_package$().n.ik().r(url), $m_Lcom_raquo_laminar_api_package$().n.iz().r("_blank")])), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, (": " + val_), $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $m_sci_Nil$()));
  }))))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hA, (void 0)))])), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_receivers_ChildOptionReceiver$()).p5(new $c_Lcom_raquo_airstream_misc_MapSignal(numsSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => {
    var this$58 = ((_$1$2.c() || (_$1$2.y().i() >= 2)) ? _$1$2 : $m_s_None$());
    if (this$58.c()) {
      return $m_s_None$();
    } else {
      var x0$7 = this$58.y();
      return new $c_s_Some($m_Lcom_raquo_laminar_api_package$().n.f7().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lscorry_Plots$().sc(x0$7), $m_Lcom_raquo_laminar_api_package$().n.fM().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().n.i3().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Box plot", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by), $m_Lcom_raquo_laminar_api_package$().n.ik().r("https://en.wikipedia.org/wiki/Box_plot"), $m_Lcom_raquo_laminar_api_package$().n.iz().r("_blank")]))])));
    }
  })), $m_s_None$()))])), $m_Lcom_raquo_laminar_api_package$().n.tg().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().n.qa().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Enter pairs of numbers (pairs separated by semicolons)", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $m_Lcom_raquo_laminar_api_package$().n.fM().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().n.q1().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.qW().r("text"), $m_Lcom_raquo_laminar_api_package$().n.qZ().r($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(corrInput.eJ).y()), new $c_Lcom_raquo_laminar_modifiers_EventListener(($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_keys_EventProcessor$().kk($m_Lcom_raquo_laminar_api_package$().n.qk(), false, false)).qc(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1$1) => {
    corrInput.iS.hb(_$1$1);
  })))])), $m_Lcom_raquo_laminar_api_package$().n.f7().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.pD().r("flex"), $m_Lcom_raquo_laminar_api_package$().n.pP().r("wrap"), $m_Lcom_raquo_laminar_api_package$().n.pX().r("2em"), $m_Lcom_raquo_laminar_api_package$().n.pe().r("flex-start"), $m_Lcom_raquo_laminar_api_package$().n.qm().r("auto"), $m_Lcom_raquo_laminar_api_package$().n.f7().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_inserters_ChildrenInserter$().pj(new $c_Lcom_raquo_airstream_misc_MapSignal(corrSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((items$2$1) => items$2$1.fQ(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => {
    var lbl$1 = x$1$2$2.eQ;
    var val_$1 = x$1$2$2.eR;
    var tip$1 = x$1$2$2.eS;
    var url$1 = x$1$2$2.eT;
    return new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().n.fM().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), new $c_sci_$colon$colon($m_Lcom_raquo_laminar_api_package$().n.qM().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lcom_raquo_laminar_api_package$().n.iY.p4("tip"), $f_Lcom_raquo_laminar_defs_complex_ComplexHtmlKeys__dataAttr__T__Lcom_raquo_laminar_keys_HtmlAttr($m_Lcom_raquo_laminar_api_package$().n, "tip").r(tip$1), $m_Lcom_raquo_laminar_api_package$().n.i3().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, lbl$1, $m_Lcom_raquo_laminar_modifiers_RenderableText$().by), $m_Lcom_raquo_laminar_api_package$().n.ik().r(url$1), $m_Lcom_raquo_laminar_api_package$().n.iz().r("_blank")])), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, (": " + val_$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $m_sci_Nil$()));
  }))))), $m_s_None$()), $m_Lcom_raquo_laminar_modifiers_RenderableSeq$collectionSeqRenderable$(), $m_Lcom_raquo_laminar_modifiers_RenderableNode$().hA, (void 0)))])), ($m_Lcom_raquo_laminar_api_package$(), $m_Lcom_raquo_laminar_receivers_ChildOptionReceiver$()).p5(new $c_Lcom_raquo_airstream_misc_MapSignal(pairsSignal, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$2) => {
    if (_$3$2.c()) {
      return $m_s_None$();
    } else {
      var x0$16 = _$3$2.y();
      return new $c_s_Some($m_Lcom_raquo_laminar_api_package$().n.f7().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$m_Lscorry_Plots$().up(x0$16), $m_Lcom_raquo_laminar_api_package$().n.fM().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [])), $m_Lcom_raquo_laminar_api_package$().n.i3().ay($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Scatter plot", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by), $m_Lcom_raquo_laminar_api_package$().n.ik().r("https://en.wikipedia.org/wiki/Scatter_plot"), $m_Lcom_raquo_laminar_api_package$().n.iz().r("_blank")]))])));
    }
  })), $m_s_None$()))]))]));
  var this$127 = $m_Lcom_raquo_laminar_api_package$().n;
  var container = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => document.getElementById("app")));
  var rootNode = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => app));
  var p$1 = $m_Lcom_raquo_laminar_keys_EventProcessor$().kk(this$127.mx.tW(), false, false);
  $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription(new $c_Lcom_raquo_airstream_misc_CollectStream($m_Lcom_raquo_airstream_web_DomEventStream$().s1(document, p$1.fm.gh, p$1.hx), p$1.hw), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    new $c_Lcom_raquo_laminar_nodes_RootNode(container.I(), rootNode.I());
  })), this$127.uT());
});
var $d_Lscorry_Main$ = new $TypeData().i($c_Lscorry_Main$, "scorry.Main$", ({
  jN: 1
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
  return $m_sc_StringOps$().fS("%.1f", $m_sr_ScalaRunTime$().fU(new $ac_O([v])));
}
function $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement($thiz, xa, ya, xb, yb, color, sw) {
  return $m_Lcom_raquo_laminar_api_package$().n.bo().qb().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x1").r(("" + xa)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y1").r(("" + ya)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x2").r(("" + xb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y2").r(("" + yb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke").r(color), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke-width").r(sw)]));
}
function $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement($thiz, cx$1, boxW$1, yp, txt) {
  return $m_Lcom_raquo_laminar_api_package$().n.bo().hj().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x").r(("" + ((cx$1 + (0.5 * boxW$1)) + 8.0))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y").r(("" + (yp + 4.0))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "text-anchor").r("start"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "font-size").r("11"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, txt, $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)]));
}
function $p_Lscorry_Plots$__px$1__D__D__D__D__D__D($thiz, xMax$1, xMin$1, padLeft$1, plotW$1, v) {
  return ((xMax$1 === xMin$1) ? (padLeft$1 + (0.5 * plotW$1)) : (padLeft$1 + (((v - xMin$1) / (xMax$1 - xMin$1)) * plotW$1)));
}
function $p_Lscorry_Plots$__py$1__D__D__D__D__D__D($thiz, yMax$1, yMin$1, padTop$1, plotH$2, v) {
  return ((yMax$1 === yMin$1) ? (padTop$1 + (0.5 * plotH$2)) : (padTop$1 + ((1.0 - ((v - yMin$1) / (yMax$1 - yMin$1))) * plotH$2)));
}
function $p_Lscorry_Plots$__fmt$2__D__T($thiz, v) {
  return $m_sc_StringOps$().fS("%.1f", $m_sr_ScalaRunTime$().fU(new $ac_O([v])));
}
function $p_Lscorry_Plots$__ln$2__D__D__D__D__Lcom_raquo_laminar_nodes_ReactiveSvgElement($thiz, xa, ya, xb, yb) {
  return $m_Lcom_raquo_laminar_api_package$().n.bo().qb().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x1").r(("" + xa)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y1").r(("" + ya)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "x2").r(("" + xb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "y2").r(("" + yb)), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke").r("#ccc"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr($thiz, "stroke-width").r("1")]));
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
$p.sc = (function(values) {
  var sorted = values.b6($m_s_math_Ordering$DeprecatedDoubleOrdering$());
  var minVal = (+sorted.q());
  var q1 = $m_Lscorry_SummaryStatistics$().kQ(sorted, 0.25);
  var med = $m_Lscorry_SummaryStatistics$().kQ(sorted, 0.5);
  var q3 = $m_Lscorry_SummaryStatistics$().kQ(sorted, 0.75);
  var maxVal = (+sorted.g0());
  return $m_Lcom_raquo_laminar_api_package$().n.bo().kW().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "width").r("100"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "height").r("280"), $m_Lcom_raquo_laminar_api_package$().n.bo().qS().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Box plot: the box spans Q1 (25th percentile) to Q3 (75th percentile), covering the middle 50% of the data (IQR). The red line marks the median. Whiskers extend to min and max. If the median is off-center in the box, the distribution is skewed.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), 50.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), "#333", "1"), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 35.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), 65.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), "#333", "1"), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 35.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), 65.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), "#333", "1"), $m_Lcom_raquo_laminar_api_package$().n.bo().u4().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").r("35"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").r(("" + $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q3))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "width").r("30"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "height").r(("" + ($p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q1) - $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q3)))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "fill").r("#6ca0dc"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "stroke").r("#333"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "stroke-width").r("1")])), $p_Lscorry_Plots$__ln$1__D__D__D__D__T__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 35.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, med), 65.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, med), "#c00", "2"), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, maxVal), $p_Lscorry_Plots$__fmt$1__D__T(this, maxVal)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q3), $p_Lscorry_Plots$__fmt$1__D__T(this, q3)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, med), $p_Lscorry_Plots$__fmt$1__D__T(this, med)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, q1), $p_Lscorry_Plots$__fmt$1__D__T(this, q1)), $p_Lscorry_Plots$__lbl$1__D__D__D__T__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 50.0, 30.0, $p_Lscorry_Plots$__y$1__D__D__D__D__D__D(this, maxVal, minVal, 30.0, 220.0, minVal), $p_Lscorry_Plots$__fmt$1__D__T(this, minVal))]));
});
$p.up = (function(pairs) {
  var xs = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => (+_$1$2.S))));
  var ys = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => (+_$2$2.R))));
  var xMin = (+xs.is($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var xMax = (+xs.ir($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var yMin = (+ys.is($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var yMax = (+ys.ir($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
  var dots = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var x = (+x$1$2.S);
    var y = (+x$1$2.R);
    return $m_Lcom_raquo_laminar_api_package$().n.bo().sh().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "cx").r(("" + $p_Lscorry_Plots$__px$1__D__D__D__D__D__D(this, xMax, xMin, 60.0, 240.0, x))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "cy").r(("" + $p_Lscorry_Plots$__py$1__D__D__D__D__D__D(this, yMax, yMin, 20.0, 240.0, y))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "r").r("4"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "fill").r("#336699")]));
  })));
  var this$12 = new $c_sci_$colon$colon(xMin, new $c_sci_$colon$colon((0.5 * (xMin + xMax)), new $c_sci_$colon$colon(xMax, $m_sci_Nil$())));
  var f = ((v$3) => {
    var v$2 = (+v$3);
    return $m_Lcom_raquo_laminar_api_package$().n.bo().hj().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").r(("" + $p_Lscorry_Plots$__px$1__D__D__D__D__D__D(this, xMax, xMin, 60.0, 240.0, v$2))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").r("278"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").r("middle"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").r("11"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, $p_Lscorry_Plots$__fmt$2__D__T(this, v$2), $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)]));
  });
  if ((this$12 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0$2 = this$12.gy;
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
    return $m_Lcom_raquo_laminar_api_package$().n.bo().hj().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").r("52"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").r(("" + ($p_Lscorry_Plots$__py$1__D__D__D__D__D__D(this, yMax, yMin, 20.0, 240.0, v$2$1) + 4.0))), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").r("end"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").r("11"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, $p_Lscorry_Plots$__fmt$2__D__T(this, v$2$1), $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)]));
  });
  if ((this$18 === $m_sci_Nil$())) {
    var $x_2 = $m_sci_Nil$();
  } else {
    var x0$5 = this$18.gy;
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
  var xLabel = $m_Lcom_raquo_laminar_api_package$().n.bo().hj().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").r("180"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").r("298"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").r("middle"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").r("12"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "x: first number", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)]));
  var yLabel = $m_Lcom_raquo_laminar_api_package$().n.bo().hj().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "x").r("14"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "y").r("140"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "text-anchor").r("middle"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "font-size").r("12"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "transform").r("rotate(-90, 14, 140)"), $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "y: second number", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)]));
  return $m_Lcom_raquo_laminar_api_package$().n.bo().kW().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "width").r("320"), $p_Lscorry_Plots$__attr__T__Lcom_raquo_laminar_keys_SvgAttr(this, "height").r("300"), $m_Lcom_raquo_laminar_api_package$().n.bo().qS().bB($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [$f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($m_Lcom_raquo_laminar_api_package$().n, "Scatter plot: each dot is a pair (x, y). Upward trend = positive correlation; downward = negative. A tight linear pattern means strong Pearson correlation; a tight monotonic (possibly curved) pattern means strong Spearman correlation. Scattered dots suggest weak or no association.", $m_Lcom_raquo_laminar_modifiers_RenderableText$().by)])), $p_Lscorry_Plots$__ln$2__D__D__D__D__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 60.0, 20.0, 60.0, 260.0), $p_Lscorry_Plots$__ln$2__D__D__D__D__Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, 60.0, 260.0, 300.0, 260.0), $m_Lcom_raquo_laminar_api_package$().n.bo().kw().bB(dots), $m_Lcom_raquo_laminar_api_package$().n.bo().kw().bB(xTicks), $m_Lcom_raquo_laminar_api_package$().n.bo().kw().bB(yTicks), xLabel, yLabel]));
});
var $d_Lscorry_Plots$ = new $TypeData().i($c_Lscorry_Plots$, "scorry.Plots$", ({
  jO: 1
}));
var $n_Lscorry_Plots$;
function $m_Lscorry_Plots$() {
  if ((!$n_Lscorry_Plots$)) {
    $n_Lscorry_Plots$ = new $c_Lscorry_Plots$();
  }
  return $n_Lscorry_Plots$;
}
function $p_Lscorry_SummaryStatistics$__ranks__sci_Seq__sci_Seq($thiz, values) {
  var sorted = $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O(values.hm(), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$9$2) => (+_$9$2.S))), $m_s_math_Ordering$DeprecatedDoubleOrdering$());
  var ranked = new $ac_D(values.i());
  var i = 0;
  while ((i < sorted.i())) {
    var j = i;
    while (((j < ((sorted.i() - 1) | 0)) && ((+sorted.o(((1 + j) | 0)).S) === (+sorted.o(i).S)))) {
      j = ((1 + j) | 0);
    }
    var avgRank = ((0.5 * ((i + j) | 0)) + 1.0);
    var x = i;
    var end = j;
    if ((!(x > end))) {
      var i$1 = x;
      while (true) {
        var x0 = i$1;
        ranked.a[(sorted.o(x0).R | 0)] = avgRank;
        if ((i$1 === end)) {
          break;
        }
        i$1 = ((1 + i$1) | 0);
      }
    }
    i = ((1 + j) | 0);
  }
  return $m_sc_ArrayOps$().qT(ranked);
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
        $m_s_util_boundary$().sd(local);
      }
      if ((i === 200)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  } catch (e) {
    if ((e instanceof $c_s_util_boundary$Break)) {
      var ex = e;
      if ((!ex.tv(local))) {
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
$p.h7 = (function(values) {
  return ((+values.d3($m_s_math_Numeric$DoubleIsFractional$())) / values.i());
});
$p.t4 = (function(values) {
  var x = (+$f_sc_IterableOnceOps__product__s_math_Numeric__O(values, $m_s_math_Numeric$DoubleIsFractional$()));
  var y = (1.0 / values.i());
  return (+Math.pow(x, y));
});
$p.tL = (function(values) {
  var sorted = values.b6($m_s_math_Ordering$DeprecatedDoubleOrdering$());
  var n = sorted.i();
  var t = ((n >>> 31) | 0);
  if (((((1 & ((n + t) | 0)) - t) | 0) === 1)) {
    return (+sorted.o((((n + ((n >>> 31) | 0)) | 0) >> 1)));
  } else {
    return (0.5 * ((+sorted.o((((((n + ((n >>> 31) | 0)) | 0) >> 1) - 1) | 0))) + (+sorted.o((((n + ((n >>> 31) | 0)) | 0) >> 1)))));
  }
});
$p.tN = (function(values) {
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
      var idx = (hash & ((m.P.a.length - 1) | 0));
      matchResult13: {
        var nd$2;
        var x36 = m.P.a[idx];
        if ((x36 === null)) {
          var nd$2 = null;
          break matchResult13;
        }
        var nd$2 = x36.h2(x$2, hash);
      }
      if ((nd$2 !== null)) {
        var $x_1 = nd$2.bU;
      } else {
        var table0 = m.P;
        var default$1 = f();
        if ((((1 + m.ca) | 0) >= m.gH)) {
          $p_scm_HashMap__growTable__I__V(m, (m.P.a.length << 1));
        }
        $p_scm_HashMap__put0__O__O__Z__I__I__s_Some(m, x$2, default$1, false, hash, ((table0 === m.P) ? idx : (hash & ((m.P.a.length - 1) | 0))));
        var $x_1 = default$1;
      }
    }
    $x_1.ad(elem);
  }
  var result = $m_sci_HashMap$().gB;
  var mapIt = m.d();
  while (mapIt.j()) {
    var \u03b42$;
    var \u03b42$ = mapIt.f();
    var k = \u03b42$.S;
    var v$1 = \u03b42$.R;
    result = result.fe(k, v$1.ar());
  }
  var counts = new $c_sc_MapView$MapValues(new $c_sc_MapView$Id(result), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => _$1$2.i())));
  var maxCount = ($f_sc_IterableOnceOps__max__s_math_Ordering__O(new $c_sc_MapView$Values(counts), $m_s_math_Ordering$Int$()) | 0);
  return ((maxCount === 1) ? $m_sci_Seq$().ia() : $f_sc_IterableOps__collect__s_PartialFunction__O(counts, new $c_Lscorry_SummaryStatistics$$anon$1(maxCount)).ga().b6($m_s_math_Ordering$DeprecatedDoubleOrdering$()));
});
$p.r0 = (function(values) {
  var m = this.h7(values);
  return ((+values.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$3) => {
    var x$2 = (+x$3);
    return ((x$2 - m) * (x$2 - m));
  }))).d3($m_s_math_Numeric$DoubleIsFractional$())) / values.i());
});
$p.uK = (function(values) {
  var x = this.r0(values);
  return (+Math.sqrt(x));
});
$p.u2 = (function(values) {
  return ((+values.ir($m_s_math_Ordering$DeprecatedDoubleOrdering$())) - (+values.is($m_s_math_Ordering$DeprecatedDoubleOrdering$())));
});
$p.kQ = (function(sorted, q) {
  var pos = (q * ((sorted.i() - 1) | 0));
  var lo = $doubleToInt(pos);
  var x = ((1 + lo) | 0);
  var y = ((sorted.i() - 1) | 0);
  var hi = ((x < y) ? x : y);
  var frac = (pos - lo);
  return (((+sorted.o(lo)) * (1.0 - frac)) + ((+sorted.o(hi)) * frac));
});
$p.tZ = (function(input) {
  var $x_12 = $m_s_Predef$();
  var xs = $f_T__split__T__I__AT($f_T__trim__T(input), "\\s+", 0);
  var evidence$1 = $m_s_reflect_ClassTag$().gW($objectGetClass(xs).A.Q());
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aJ();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  var i = 0;
  while ((i < xs.a.length)) {
    var x1 = i;
    var x = xs.a[x1];
    if (($m_sc_StringOps$(), (x !== ""))) {
      var unboxedElem = (isCharArrayBuilder ? $uC(x) : ((x === null) ? $m_scm_ArrayBuilder$().g6(elementClass) : x));
      jsElems.push(unboxedElem);
    }
    i = ((1 + i) | 0);
  }
  var xs$1 = $m_scm_ArrayBuilder$().g5(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  var f = ((_$3$2) => {
    $m_sc_StringOps$();
    return $m_jl_Double$().qo(_$3$2);
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
  return $x_12.pt(ys);
});
$p.qp = (function(input) {
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
  var evidence$1 = $m_s_reflect_ClassTag$().gW($objectGetClass(ys).A.Q());
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aJ();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  var i$1 = 0;
  while ((i$1 < ys.a.length)) {
    var x = ys.a[i$1];
    if (($m_sc_StringOps$(), (x !== ""))) {
      var unboxedElem = (isCharArrayBuilder ? $uC(x) : ((x === null) ? $m_scm_ArrayBuilder$().g6(elementClass) : x));
      jsElems.push(unboxedElem);
    }
    i$1 = ((1 + i$1) | 0);
  }
  var xs$1 = $m_scm_ArrayBuilder$().g5(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  var f$2 = ((pair$2) => {
    var xs$2 = $f_T__split__T__I__AT(pair$2, "\\s+", 0);
    var f$1 = ((_$6$2) => {
      $m_sc_StringOps$();
      return $m_jl_Double$().qo(_$6$2);
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
  return $x_52.pt(ys$2);
});
$p.qq = (function(pairs) {
  pairs.i();
  var xs = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$7$2) => (+_$7$2.S))));
  var ys = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$8$2) => (+_$8$2.R))));
  var meanX = this.h7(xs);
  var meanY = this.h7(ys);
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
$p.uI = (function(pairs) {
  return this.qq($p_Lscorry_SummaryStatistics$__ranks__sci_Seq__sci_Seq(this, pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$10$2) => (+_$10$2.S))))).hl($p_Lscorry_SummaryStatistics$__ranks__sci_Seq__sci_Seq(this, pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$11$2) => (+_$11$2.R)))))));
});
$p.qP = (function(t, df) {
  return $p_Lscorry_SummaryStatistics$__betai__D__D__D__D(this, (0.5 * df), 0.5, (df / (df + (t * t))));
});
$p.qr = (function(r, n) {
  if (((+Math.abs(r)) >= 1.0)) {
    return 0.0;
  } else {
    var x = (((n - 2) | 0) / (1.0 - (r * r)));
    return this.qP((r * (+Math.sqrt(x))), ((n - 2) | 0));
  }
});
$p.tY = (function(pairs) {
  var diffs = pairs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => ((+x$1$2.S) - (+x$1$2.R)))));
  var n = diffs.i();
  var meanD = this.h7(diffs);
  var x$1 = ((+diffs.C(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    var d$2 = (+d$3);
    return ((d$2 - meanD) * (d$2 - meanD));
  }))).d3($m_s_math_Numeric$DoubleIsFractional$())) / ((n - 1) | 0));
  var sdD = (+Math.sqrt(x$1));
  var x$2 = n;
  var t = (meanD / (sdD / (+Math.sqrt(x$2))));
  var df = ((n - 1) | 0);
  return new $c_T3(t, df, this.qP(t, df));
});
var $d_Lscorry_SummaryStatistics$ = new $TypeData().i($c_Lscorry_SummaryStatistics$, "scorry.SummaryStatistics$", ({
  jP: 1
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
    $thiz.h9(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $thiz.iu(_$2, transaction);
  })));
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V($thiz, nextValue, transaction) {
  $thiz.he(new $c_s_util_Success(nextValue), transaction);
}
function $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V($thiz, nextError, transaction) {
  $thiz.he(new $c_s_util_Failure(nextError), transaction);
}
/** @constructor */
function $c_Lcom_raquo_airstream_ownership_OneTimeOwner(onAccessAfterKilled) {
  this.lM = null;
  this.lL = null;
  this.iO = false;
  this.lL = onAccessAfterKilled;
  $f_Lcom_raquo_airstream_ownership_Owner__$init$__V(this);
  this.iO = false;
}
$p = $c_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_ownership_OneTimeOwner;
/** @constructor */
function $h_Lcom_raquo_airstream_ownership_OneTimeOwner() {
}
$h_Lcom_raquo_airstream_ownership_OneTimeOwner.prototype = $p;
$p.g9 = (function() {
  return this.lM;
});
$p.po = (function(x$0) {
  this.lM = x$0;
});
$p.qn = (function(subscription) {
  if (this.iO) {
    $p_Lcom_raquo_airstream_ownership_Subscription__safeCleanup__V(subscription);
    this.lL.I();
  } else {
    $f_Lcom_raquo_airstream_ownership_Owner__own__Lcom_raquo_airstream_ownership_Subscription__V(this, subscription);
  }
});
$p.q9 = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
  this.iO = true;
});
var $d_Lcom_raquo_airstream_ownership_OneTimeOwner = new $TypeData().i($c_Lcom_raquo_airstream_ownership_OneTimeOwner, "com.raquo.airstream.ownership.OneTimeOwner", ({
  db: 1,
  bl: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(outer) {
  this.mj = null;
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
$p.g9 = (function() {
  return this.mj;
});
$p.po = (function(x$0) {
  this.mj = x$0;
});
$p.q9 = (function() {
  $f_Lcom_raquo_airstream_ownership_Owner__killSubscriptions__V(this);
});
$p.qn = (function(subscription) {
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
$p.ib = (function(scalaValue) {
  return scalaValue;
});
$p.kj = (function(domValue) {
  return domValue;
});
var $d_Lcom_raquo_laminar_codecs_package$$anon$2 = new $TypeData().i($c_Lcom_raquo_laminar_codecs_package$$anon$2, "com.raquo.laminar.codecs.package$$anon$2", ({
  dC: 1,
  bo: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey(name, getRawDomValue, setRawDomValue, separator) {
  this.n5 = null;
  this.n7 = null;
  this.n6 = null;
  this.j0 = null;
  this.n5 = getRawDomValue;
  this.n7 = setRawDomValue;
  this.n6 = separator;
  this.j0 = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator);
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey.prototype = $p;
$p.p4 = (function(items) {
  return new $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(this, ($m_Lcom_raquo_laminar_api_package$().n.rB(), $m_Lcom_raquo_laminar_keys_CompositeKey$().qh(items, this.n6)));
});
var $d_Lcom_raquo_laminar_keys_CompositeKey = new $TypeData().i($c_Lcom_raquo_laminar_keys_CompositeKey, "com.raquo.laminar.keys.CompositeKey", ({
  e7: 1,
  a3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec(separator) {
  this.j1 = null;
  this.j1 = separator;
}
$p = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec() {
}
$h_Lcom_raquo_laminar_keys_CompositeKey$CompositeCodec.prototype = $p;
$p.pC = (function(domValue) {
  return $m_Lcom_raquo_laminar_keys_CompositeKey$().qh(domValue, this.j1);
});
$p.pG = (function(scalaValue) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(scalaValue, "", this.j1, "");
});
$p.kj = (function(domValue) {
  return this.pC(domValue);
});
$p.ib = (function(scalaValue) {
  return this.pG(scalaValue);
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
  this.gh = null;
  this.gh = name;
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
  this.gi = null;
  this.j3 = null;
  this.gi = name;
  this.j3 = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlAttr() {
}
$h_Lcom_raquo_laminar_keys_HtmlAttr.prototype = $p;
$p.r = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().qE(element, attr, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlAttr = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlAttr, "com.raquo.laminar.keys.HtmlAttr", ({
  ef: 1,
  a3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_HtmlProp(name, codec) {
  this.n9 = null;
  this.n8 = null;
  this.n9 = name;
  this.n8 = codec;
}
$p = $c_Lcom_raquo_laminar_keys_HtmlProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_HtmlProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_HtmlProp() {
}
$h_Lcom_raquo_laminar_keys_HtmlProp.prototype = $p;
$p.r = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, prop, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().ut(element, prop, value$2);
  })));
});
var $d_Lcom_raquo_laminar_keys_HtmlProp = new $TypeData().i($c_Lcom_raquo_laminar_keys_HtmlProp, "com.raquo.laminar.keys.HtmlProp", ({
  eg: 1,
  a3: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_keys_SvgAttr(localName, codec, namespacePrefix) {
  this.j5 = null;
  this.j4 = null;
  this.hy = null;
  this.hz = null;
  this.j5 = localName;
  this.j4 = codec;
  var this$2 = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some(((namespacePrefix.y() + ":") + localName)));
  this.hy = (this$2.c() ? localName : this$2.y());
  this.hz = (namespacePrefix.c() ? $m_s_None$() : new $c_s_Some($m_Lcom_raquo_laminar_keys_SvgAttr$().tP(namespacePrefix.y())));
}
$p = $c_Lcom_raquo_laminar_keys_SvgAttr.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_SvgAttr;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_SvgAttr() {
}
$h_Lcom_raquo_laminar_keys_SvgAttr.prototype = $p;
$p.r = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, value, new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, attr, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().qF(element, attr, value$2);
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
$p.cQ = (function(element) {
});
var $d_Lcom_raquo_laminar_modifiers_Modifier$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_Modifier$$anon$1, "com.raquo.laminar.modifiers.Modifier$$anon$1", ({
  ep: 1,
  a4: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_Modifier$$anon$2(f$2, outer) {
  this.nf = null;
  this.nf = f$2;
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
    this.nf.e(element);
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
  this.ng = null;
  this.ng = render$2;
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
$p.s7 = (function(value) {
  return this.ng.e(value);
});
var $d_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_RenderableText$$anon$1, "com.raquo.laminar.modifiers.RenderableText$$anon$1", ({
  ey: 1,
  ew: 1
}));
function $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V($thiz) {
  $thiz.kc(new $c_Lcom_raquo_airstream_ownership_DynamicOwner(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), ("Attempting to use owner of unmounted element: " + $f_sc_IterableOnceOps__mkString__T__T__T__T($m_Lcom_raquo_laminar_DomApi$().sA($thiz.L(), ($m_Lcom_raquo_laminar_DomApi$(), $m_sci_Nil$())), "", " > ", "")));
  }))));
}
/** @constructor */
function $c_Lcom_raquo_laminar_tags_HtmlTag(name, void$1) {
  this.jh = null;
  this.jh = name;
}
$p = $c_Lcom_raquo_laminar_tags_HtmlTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_HtmlTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_HtmlTag() {
}
$h_Lcom_raquo_laminar_tags_HtmlTag.prototype = $p;
$p.ay = (function(modifiers) {
  var element = this.se();
  modifiers.bW(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.cQ(element);
  })));
  return element;
});
$p.se = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement(this, $m_Lcom_raquo_laminar_DomApi$().sv(this));
});
var $d_Lcom_raquo_laminar_tags_HtmlTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_HtmlTag, "com.raquo.laminar.tags.HtmlTag", ({
  eJ: 1,
  bt: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_tags_SvgTag(name, void$1) {
  this.ji = null;
  this.ji = name;
}
$p = $c_Lcom_raquo_laminar_tags_SvgTag.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_tags_SvgTag;
/** @constructor */
function $h_Lcom_raquo_laminar_tags_SvgTag() {
}
$h_Lcom_raquo_laminar_tags_SvgTag.prototype = $p;
$p.bB = (function(modifiers) {
  var element = this.sf();
  modifiers.bW(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((modifier) => {
    modifier.cQ(element);
  })));
  return element;
});
$p.sf = (function() {
  return new $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(this, $m_Lcom_raquo_laminar_DomApi$().pB(this));
});
var $d_Lcom_raquo_laminar_tags_SvgTag = new $TypeData().i($c_Lcom_raquo_laminar_tags_SvgTag, "com.raquo.laminar.tags.SvgTag", ({
  eK: 1,
  bt: 1
}));
/** @constructor */
function $c_jl_Character$() {
  this.jj = null;
  $n_jl_Character$ = this;
  this.jj = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.kZ = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.sB = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().s9(this.jj, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.jj.a[zeroCodePointIndex]) | 0);
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
  if (((((1 & $thiz.e6) << 24) >> 24) === 0)) {
    $thiz.jm = new RegExp("^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$");
    $thiz.e6 = (((1 | $thiz.e6) << 24) >> 24);
  }
  return $thiz.jm;
}
function $p_jl_Double$__doubleStrPat__O($thiz) {
  return (((((1 & $thiz.e6) << 24) >> 24) === 0) ? $p_jl_Double$__doubleStrPat$lzycompute__O($thiz) : $thiz.jm);
}
function $p_jl_Double$__doubleStrHexPat$lzycompute__O($thiz) {
  if (((((2 & $thiz.e6) << 24) >> 24) === 0)) {
    $thiz.jl = new RegExp("^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$");
    $thiz.e6 = (((2 | $thiz.e6) << 24) >> 24);
  }
  return $thiz.jl;
}
function $p_jl_Double$__doubleStrHexPat__O($thiz) {
  return (((((2 & $thiz.e6) << 24) >> 24) === 0) ? $p_jl_Double$__doubleStrHexPat$lzycompute__O($thiz) : $thiz.jl);
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
  var absResult = $thiz.u0(x$1, x$2, x$3, 15);
  return ((x === "-") ? (-absResult) : absResult);
}
function $ps_jl_Double$__fail$1__T__E(s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""));
}
/** @constructor */
function $c_jl_Double$() {
  this.jm = null;
  this.jl = null;
  this.e6 = 0;
}
$p = $c_jl_Double$.prototype = new $h_O();
$p.constructor = $c_jl_Double$;
/** @constructor */
function $h_jl_Double$() {
}
$h_jl_Double$.prototype = $p;
$p.qo = (function(s) {
  var groups = $p_jl_Double$__doubleStrPat__O(this).exec(s);
  return ((groups !== null) ? (+parseFloat(groups[1])) : $p_jl_Double$__parseDoubleSlowPath__T__D(this, s));
});
$p.u0 = (function(integralPartStr, fractionalPartStr, binaryExpStr, maxPrecisionChars) {
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
  return $m_jl_Math$().uo((+parseInt(truncatedMantissaStr, 16)), (($doubleToInt((+parseInt(binaryExpStr, 10))) + fullCorrection) | 0));
});
$p.i9 = (function(a, b) {
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
$p.hg = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.q5 = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().hg(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().hg(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().hg(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.sB(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().hg(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().hg(s);
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
$p.q6 = (function(lo, hi) {
  if ((hi !== 0)) {
    var $x_1 = (hi >>> 0.0).toString(16);
    var s = (lo >>> 0.0).toString(16);
    var beginIndex = s.length;
    return ($x_1 + (("" + "00000000".substring(beginIndex)) + s));
  } else {
    return (lo >>> 0.0).toString(16);
  }
});
$p.tw = (function(lo, hi) {
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
  this.fp = null;
  this.gj = null;
  this.fq = null;
  this.fr = 0;
  this.fo = 0;
  this.fp = declaringClass;
  this.gj = methodName;
  this.fq = fileName;
  this.fr = lineNumber;
  this.fo = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.p = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.fq === that.fq) && (this.fr === that.fr)) && (this.fo === that.fo)) && (this.fp === that.fp)) && (this.gj === that.gj)));
});
$p.u = (function() {
  var result = "";
  if ((this.fp !== "<jscode>")) {
    result = ((("" + result) + this.fp) + ".");
  }
  result = (("" + result) + this.gj);
  if ((this.fq === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.fq);
    if ((this.fr >= 0)) {
      result = ((result + ":") + this.fr);
      if ((this.fo >= 0)) {
        result = ((result + ":") + this.fo);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.x = (function() {
  return (((($f_T__hashCode__I(this.fp) ^ $f_T__hashCode__I(this.gj)) ^ $f_T__hashCode__I(this.fq)) ^ this.fr) ^ this.fo);
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
$p.tR = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  var result = "";
  var i = offset;
  while ((i !== end)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
$p.sV = (function(format, args) {
  return $ct_ju_Formatter__(new $c_ju_Formatter()).sW(format, args).u();
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
  $thiz.nv = s;
  $thiz.nw = writableStackTrace;
  if (writableStackTrace) {
    $thiz.sM();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.nv = null;
    this.nw = false;
    this.nu = null;
    this.hB = null;
  }
  q0(cause) {
    return this;
  }
  bt() {
    return this.nv;
  }
  sM() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.a0 : this);
    this.nu = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  t9() {
    if ((this.hB === null)) {
      if (this.nw) {
        this.hB = $m_jl_StackTrace$().sK(this.nu);
      } else {
        this.hB = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.hB;
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
$p.d2 = (function(a, i, v) {
  a.a[i] = v;
});
$p.bD = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$, "java.util.internal.GenericArrayOps$ReusableAnyRefArrayOps$", ({
  fK: 1,
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
  if (($thiz.hC === null)) {
    throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), "No match available");
  }
  return $thiz.hC;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.nO = null;
  this.nN = null;
  this.nP = 0;
  this.js = null;
  this.jt = 0;
  this.hC = null;
  this.nO = pattern0;
  this.nN = input0;
  this.nP = 0;
  this.js = this.nN;
  this.jt = 0;
  this.hC = null;
}
$p = $c_ju_regex_Matcher.prototype = new $h_O();
$p.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $p;
$p.sN = (function() {
  var this$1 = this.nO;
  var input = this.js;
  var start = this.jt;
  var mtch = this$1.tz(input, start);
  var end = (this$1.ju.lastIndex | 0);
  this.jt = ((mtch !== null) ? ((end === (mtch.index | 0)) ? ((1 + end) | 0) : end) : ((1 + this.js.length) | 0));
  this.hC = mtch;
  return (mtch !== null);
});
$p.qN = (function() {
  return ((($p_ju_regex_Matcher__ensureLastMatch__O(this).index | 0) + this.nP) | 0);
});
$p.pH = (function() {
  return ((this.qN() + this.td().length) | 0);
});
$p.td = (function() {
  return $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
});
var $d_ju_regex_Matcher = new $TypeData().i($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  fN: 1,
  fM: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.nQ = null;
  this.nR = null;
  this.nS = false;
  this.ju = null;
  this.nQ = _pattern;
  this.nR = jsFlags;
  this.nS = sticky;
  this.ju = new RegExp(jsPattern, (this.nR + (this.nS ? "gy" : "g")));
  new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$p = $c_ju_regex_Pattern.prototype = new $h_O();
$p.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $p;
$p.tz = (function(input, start) {
  var regexp = this.ju;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$p.u = (function() {
  return this.nQ;
});
$p.tA = (function(inputStr, limit) {
  if ((inputStr === "")) {
    return new ($d_T.r().C)([""]);
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var matcher = new $c_ju_regex_Matcher(this, inputStr);
    var result = [];
    var prevEnd = 0;
    while ((((result.length | 0) < ((lim - 1) | 0)) && matcher.sN())) {
      if ((matcher.pH() !== 0)) {
        var beginIndex = prevEnd;
        var endIndex = matcher.qN();
        var $x_1 = result.push(inputStr.substring(beginIndex, endIndex));
      }
      prevEnd = matcher.pH();
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
  fO: 1,
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
$p.uV = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.jS;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.cf(x) ? $thiz.e(x) : default$1.e(x));
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
  gZ: 1,
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
    $thiz.b3($m_scm_Buffer$().ie(elems));
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
  im: 1,
  ii: 1
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
  this.hU = false;
  this.hU = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.u = (function() {
  return ("" + this.hU);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  ja: 1,
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
$p.u = (function() {
  return ("" + this.aw);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  jc: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.hV = false;
  this.hW = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.tk = (function(value) {
  this.hW = value;
  this.hV = true;
  return value;
});
$p.u = (function() {
  return ("LazyRef " + (this.hV ? ("of: " + this.hW) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  jd: 1,
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
  jg: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.ax = 0;
  this.dW = 0;
  this.p2 = 0;
  this.hY = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.ax = $f_T__hashCode__I("Seq");
  this.dW = $f_T__hashCode__I("Map");
  this.p2 = $f_T__hashCode__I("Set");
  this.hY = this.iA($m_sci_Nil$(), this.dW);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cG = (function(x, y) {
  return this.qV($m_sr_Statics$().E(x), $m_sr_Statics$().E(y), (-889275714));
});
$p.qD = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.ti(xs, this.ax) : ((xs instanceof $c_sci_List) ? this.tC(xs, this.ax) : this.tX(xs, this.ax)));
});
$p.tK = (function(xs) {
  if (xs.c()) {
    return this.hY;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.dW;
    xs.cS(accum);
    h = this.z(h, accum.hZ);
    h = this.z(h, accum.i0);
    h = this.dZ(h, accum.i1);
    return this.aW(h, accum.i2);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  jL: 1,
  jK: 1
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
  this.hZ = 0;
  this.i0 = 0;
  this.i2 = 0;
  this.i1 = 0;
  this.hZ = 0;
  this.i0 = 0;
  this.i2 = 0;
  this.i1 = 1;
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
$p.rZ = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().cG(k, v);
  this.hZ = ((this.hZ + h) | 0);
  this.i0 = (this.i0 ^ h);
  this.i1 = Math.imul(this.i1, (1 | h));
  this.i2 = ((1 + this.i2) | 0);
});
$p.bN = (function(v1, v2) {
  this.rZ(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  jM: 1,
  aY: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError extends $c_jl_Throwable {
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_AirstreamError$() {
  this.iC = null;
  this.l1 = null;
  this.l2 = null;
  $n_Lcom_raquo_airstream_core_AirstreamError$ = this;
  this.iC = $m_scm_Buffer$().k9($m_sr_ScalaRunTime$().cH(new ($d_F1.r().C)([])));
  this.l1 = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    try {
      console.error(((this.fV(err) + "\n") + this.t8(err, "\n")));
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      console.error("Error in AirstreamError.consoleErrorCallback:");
      console.error(e$2);
    }
  }));
  this.l2 = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err$2) => {
    console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");
    var $x_1 = err$2;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.a0 : $x_1);
  }));
  this.u5(this.l1);
}
$p = $c_Lcom_raquo_airstream_core_AirstreamError$.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_AirstreamError$;
/** @constructor */
function $h_Lcom_raquo_airstream_core_AirstreamError$() {
}
$h_Lcom_raquo_airstream_core_AirstreamError$.prototype = $p;
$p.fV = (function(e) {
  try {
    var errorMessage = e.bt();
  } catch (e$2) {
    var errorMessage = "(Unable to get the message for this error - exception occurred in its getMessage)";
  }
  return (($objectGetClass(e).kA() + ": ") + errorMessage);
});
$p.t8 = (function(err, newline) {
  try {
    return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().uV(err.t9()), "", newline, "");
  } catch (e) {
    return "(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)";
  }
});
$p.u5 = (function(fn) {
  this.iC.ad(fn);
});
$p.d1 = (function(err) {
  var this$1 = this.iC;
  var it = this$1.d();
  while (it.j()) {
    var x0 = it.f();
    try {
      x0.e(err);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      var x$2 = this.l2;
      if (((x0 === null) ? (x$2 === null) : x0.p(x$2))) {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
      }
      console.warn("Error processing an unhandled error callback:");
      $m_sjs_js_timers_package$().uz(0.0, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d(((e$2) => (() => {
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
      }))(e$2)));
    }
  }
});
var $d_Lcom_raquo_airstream_core_AirstreamError$ = new $TypeData().i($c_Lcom_raquo_airstream_core_AirstreamError$, "com.raquo.airstream.core.AirstreamError$", ({
  cQ: 1,
  ie: 1,
  ig: 1
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
  $thiz.g2((void 0));
}
function $f_Lcom_raquo_airstream_core_BaseObservable__foreach__F1__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, onNext, owner) {
  return $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, $m_Lcom_raquo_airstream_core_Observer$().r2(onNext, $m_s_PartialFunction$().hG, true), owner);
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeExternalObserver__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($thiz.fY()) {
    $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
  } else {
    $f_Lcom_raquo_airstream_core_BaseObservable__getOrCreatePendingObserverRemovals__Lcom_raquo_ew_JsArray($thiz).push(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
      $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer);
    })));
  }
}
function $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz, observer) {
  if ($thiz.fY()) {
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
    $thiz.g2(newArray);
    return newArray;
  } else {
    return x;
  }
}
var $d_Lcom_raquo_airstream_core_Observer = new $TypeData().i(1, "com.raquo.airstream.core.Observer", ({
  aR: 1,
  aJ: 1,
  ab: 1
}));
function $f_Lcom_raquo_laminar_api_Implicits__textToTextNode__O__Lcom_raquo_laminar_modifiers_RenderableText__Lcom_raquo_laminar_nodes_TextNode($thiz, value, r) {
  return new $c_Lcom_raquo_laminar_nodes_TextNode(r.s7(value));
}
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$$anon$1() {
  this.m3 = null;
  this.m4 = false;
}
$p = $c_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_api_Laminar$$anon$1;
/** @constructor */
function $h_Lcom_raquo_laminar_api_Laminar$$anon$1() {
}
$h_Lcom_raquo_laminar_api_Laminar$$anon$1.prototype = $p;
$p.tW = (function() {
  if ((!this.m4)) {
    this.m3 = new $c_Lcom_raquo_laminar_keys_EventProp("DOMContentLoaded");
    this.m4 = true;
  }
  return this.m3;
});
var $d_Lcom_raquo_laminar_api_Laminar$$anon$1 = new $TypeData().i($c_Lcom_raquo_laminar_api_Laminar$$anon$1, "com.raquo.laminar.api.Laminar$$anon$1", ({
  du: 1,
  bp: 1,
  dH: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter(key, itemsToAdd) {
  this.nb = null;
  this.j7 = null;
  this.nb = key;
  this.j7 = itemsToAdd;
}
$p = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_CompositeKeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_CompositeKeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_CompositeKeySetter.prototype = $p;
$p.cQ = (function(element) {
  if ((!this.j7.c())) {
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__updateCompositeValue__Lcom_raquo_laminar_keys_CompositeKey__Lcom_raquo_laminar_modifiers_Modifier__sci_List__sci_List__V(element, this.nb, null, this.j7, $m_sci_Nil$());
  }
});
var $d_Lcom_raquo_laminar_modifiers_CompositeKeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_CompositeKeySetter, "com.raquo.laminar.modifiers.CompositeKeySetter", ({
  el: 1,
  a4: 1,
  br: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_EventListener(eventProcessor, callback) {
  this.fn = null;
  this.j8 = null;
  this.j9 = null;
  this.fn = eventProcessor;
  this.j8 = ((ev) => {
    var processor = eventProcessor.hw;
    var this$2 = processor.e(ev);
    if ((!this$2.c())) {
      callback.e(this$2.y());
    }
  });
  this.j9 = (() => {
    var outer = null;
    outer = this;
    var this$3 = ({});
    if ((outer === null)) {
      throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
    }
    this$3.capture = outer.fn.hx;
    this$3.passive = outer.fn.j2;
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
  this.sa(element, false);
});
$p.sa = (function(element, unsafePrepend) {
  if (($f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this) === (-1))) {
    var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((ctx) => {
      $m_Lcom_raquo_laminar_DomApi$().rK(element.L(), this);
      return new $c_Lcom_raquo_airstream_ownership_Subscription(ctx.j6, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
        var listenerIndex = $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I(element, this);
        if ((listenerIndex !== (-1))) {
          $f_Lcom_raquo_laminar_nodes_ReactiveElement__removeEventListener__I__V(element, listenerIndex);
          $m_Lcom_raquo_laminar_DomApi$().u9(element.L(), this);
        }
      })));
    }));
    var sub = (unsafePrepend ? $m_Lcom_raquo_laminar_nodes_ReactiveElement$().uR(element, subscribe) : $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iB(element.cd(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false));
    $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V(element, this, unsafePrepend);
    return sub;
  } else {
    var activate = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => (void 0)));
    return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().qO(element.cd(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner$1) => {
      activate.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner$1));
    })), false);
  }
});
$p.u = (function() {
  return (("EventListener(" + this.fn.fm.gh) + ")");
});
var $d_Lcom_raquo_laminar_modifiers_EventListener = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_EventListener, "com.raquo.laminar.modifiers.EventListener", ({
  em: 1,
  a4: 1,
  ek: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_modifiers_KeySetter(key, value, action) {
  this.nd = null;
  this.ne = null;
  this.nc = null;
  this.nd = key;
  this.ne = value;
  this.nc = action;
}
$p = $c_Lcom_raquo_laminar_modifiers_KeySetter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_modifiers_KeySetter;
/** @constructor */
function $h_Lcom_raquo_laminar_modifiers_KeySetter() {
}
$h_Lcom_raquo_laminar_modifiers_KeySetter.prototype = $p;
$p.cQ = (function(element) {
  this.nc.gX(element, this.nd, this.ne);
});
var $d_Lcom_raquo_laminar_modifiers_KeySetter = new $TypeData().i($c_Lcom_raquo_laminar_modifiers_KeySetter, "com.raquo.laminar.modifiers.KeySetter", ({
  en: 1,
  a4: 1,
  br: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_RootNode(container, child) {
  this.je = null;
  this.nr = null;
  this.ns = null;
  this.nr = child;
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  if ((container === null)) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");
  }
  if ((!$m_Lcom_raquo_laminar_DomApi$().tu(container, document))) {
    throw $ct_jl_Exception__T__(new $c_jl_Exception(), "Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");
  }
  this.ns = container;
  this.tO();
}
$p = $c_Lcom_raquo_laminar_nodes_RootNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_RootNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_RootNode() {
}
$h_Lcom_raquo_laminar_nodes_RootNode.prototype = $p;
$p.cd = (function() {
  return this.je;
});
$p.kc = (function(x$0) {
  this.je = x$0;
});
$p.tO = (function() {
  this.je.p6();
  return $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(this, this.nr, (void 0));
});
$p.L = (function() {
  return this.ns;
});
var $d_Lcom_raquo_laminar_nodes_RootNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_RootNode, "com.raquo.laminar.nodes.RootNode", ({
  eE: 1,
  az: 1,
  aV: 1
}));
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.A.Z) {
    return ($thiz.A.Q().kA() + "[]");
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
  this.jk = null;
  this.A = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.u = (function() {
  return ((this.A.Y ? "interface " : (this.A.X ? "" : "class ")) + this.A.N);
});
$p.kA = (function() {
  if ((this.jk === null)) {
    this.jk = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.jk;
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
/** @constructor */
function $c_s_Predef$() {
  this.rk = null;
  $n_s_Predef$ = this;
  $m_sci_List$();
  this.rk = $m_sci_Map$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.ug = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  g4: 1,
  fY: 1,
  fZ: 1
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
      return $thiz.ft;
      break;
    }
    case 1: {
      return $thiz.fu;
      break;
    }
    case 2: {
      return $thiz.fv;
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
      return $thiz.eQ;
      break;
    }
    case 1: {
      return $thiz.eR;
      break;
    }
    case 2: {
      return $thiz.eS;
      break;
    }
    case 3: {
      return $thiz.eT;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.fw = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.fw = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.bP = (function() {
  return this.fw.pF($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.ab = (function(it) {
  return this.fw.kr(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aq = (function() {
  return this.fw.it($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.dX = (function(elems) {
  return this.fw.kr(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.go = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.go = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.ab = (function(it) {
  return this.go.ab(it);
});
$p.aq = (function() {
  return this.go.aq();
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
  return $thiz.az().ab($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f));
}
function $f_sc_IterableOps__collect__s_PartialFunction__O($thiz, pf) {
  return $thiz.az().ab(new $c_sc_View$Collect($thiz, pf));
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).h0(xs);
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
  gm: 1,
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
  $thiz.gr = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.gr = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.ab = (function(it) {
  return this.gr.ab(it);
});
$p.bP = (function() {
  return this.gr.bP();
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
$p.ig = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((it$2) => (() => it$2.d()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().kt(it))));
});
$p.aq = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2) => this.ig(it$2))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.ab = (function(source) {
  return this.ig(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  gF: 1,
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
  this.aA = null;
  this.bR = null;
  this.b9 = 0;
  this.bE = 0;
  this.X = dataMap;
  this.a5 = nodeMap;
  this.aA = content;
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
$p.aZ = (function() {
  return this.b9;
});
$p.es = (function() {
  return this.bE;
});
$p.dr = (function(index) {
  return this.aA.a[(index << 1)];
});
$p.cy = (function(index) {
  return this.aA.a[((1 + (index << 1)) | 0)];
});
$p.pY = (function(index) {
  return new $c_T2(this.aA.a[(index << 1)], this.aA.a[((1 + (index << 1)) | 0)]);
});
$p.fW = (function(index) {
  return this.bR.a[index];
});
$p.cT = (function(index) {
  return this.aA.a[((((this.aA.a.length - 1) | 0) - index) | 0)];
});
$p.k7 = (function(key, originalHash, keyHash, shift) {
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
    return this.cT($m_sci_Node$().cA(this.a5, mask, bitpos)).k7(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.ii = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ey(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cA(this.X, mask, bitpos);
    return ($m_sr_BoxesRunTime$().l(key, this.dr(index)) ? new $c_s_Some(this.cy(index)) : $m_s_None$());
  } else {
    return (((this.a5 & bitpos) !== 0) ? this.cT($m_sci_Node$().cA(this.a5, mask, bitpos)).ii(key, originalHash, keyHash, ((5 + shift) | 0)) : $m_s_None$());
  }
});
$p.ky = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().ey(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cA(this.X, mask, bitpos);
    return ($m_sr_BoxesRunTime$().l(key, this.dr(index)) ? this.cy(index) : f.I());
  } else {
    return (((this.a5 & bitpos) !== 0) ? this.cT($m_sci_Node$().cA(this.a5, mask, bitpos)).ky(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.I());
  }
});
$p.kg = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().ey(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cA(this.X, mask, bitpos);
    return ((this.bR.a[index] === originalHash) && $m_sr_BoxesRunTime$().l(key, this.dr(index)));
  } else {
    return (((this.a5 & bitpos) !== 0) && this.cT($m_sci_Node$().cA(this.a5, mask, bitpos)).kg(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.qX = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().ey(keyHash, shift);
  var bitpos = $m_sci_Node$().dY(mask);
  if (((this.X & bitpos) !== 0)) {
    var index = $m_sci_Node$().cA(this.X, mask, bitpos);
    var key0 = this.dr(index);
    var key0UnimprovedHash = this.fW(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().l(key0, key))) {
      if (replaceValue) {
        var value0 = this.cy(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.sq(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.cy(index);
      var key0Hash = $m_sc_Hashing$().cz(key0UnimprovedHash);
      return this.so(bitpos, key0Hash, this.kL(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.a5 & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().cA(this.a5, mask, bitpos);
    var subNode = this.cT(index$2);
    var subNodeNew$2 = subNode.qY(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.sp(bitpos, subNode, subNodeNew$2));
  } else {
    return this.sn(bitpos, key, originalHash, keyHash, value);
  }
});
$p.kL = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().ku($ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [new $c_T2(key0, value0), new $c_T2(key1, value1)])));
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
      var nodeMap = $m_sci_Node$().dY(mask0);
      var node = this.kL(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      var xs$2 = $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [node]);
      var array$6 = new $ac_O(xs$2.i());
      var iterator$2 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$2));
      var i$2 = 0;
      while ((iterator$2.bz > 0)) {
        array$6.a[i$2] = iterator$2.f();
        i$2 = ((1 + i$2) | 0);
      }
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().jB, node.aZ(), node.es());
    }
  }
});
$p.kB = (function() {
  return (this.a5 !== 0);
});
$p.kM = (function() {
  return $m_jl_Integer$().dm(this.a5);
});
$p.ij = (function() {
  return (this.X !== 0);
});
$p.kP = (function() {
  return $m_jl_Integer$().dm(this.X);
});
$p.h1 = (function(bitpos) {
  return $m_jl_Integer$().dm((this.X & ((bitpos - 1) | 0)));
});
$p.kN = (function(bitpos) {
  return $m_jl_Integer$().dm((this.a5 & ((bitpos - 1) | 0)));
});
$p.sq = (function(bitpos, newKey, newValue) {
  var dataIx = this.h1(bitpos);
  var idx = (dataIx << 1);
  var src = this.aA;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.v(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.X, this.a5, dst, this.bR, this.b9, this.bE);
});
$p.sp = (function(bitpos, oldNode, newNode) {
  var idx = ((((this.aA.a.length - 1) | 0) - this.kN(bitpos)) | 0);
  var src = this.aA;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.v(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.X, this.a5, dst, this.bR, ((((this.b9 - oldNode.aZ()) | 0) + newNode.aZ()) | 0), ((((this.bE - oldNode.es()) | 0) + newNode.es()) | 0));
});
$p.sn = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.h1(bitpos);
  var idx = (dataIx << 1);
  var src = this.aA;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.v(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.v(idx, dst, destPos, length);
  var dstHashes = this.tn(this.bR, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.X | bitpos), this.a5, dst, dstHashes, ((1 + this.b9) | 0), ((this.bE + keyHash) | 0));
});
$p.tM = (function(bitpos, keyHash, node) {
  var dataIx = this.h1(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.aA.a.length - 2) | 0) - this.kN(bitpos)) | 0);
  var src = this.aA;
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
  var dstHashes = this.qu(this.bR, dataIx);
  this.X = (this.X ^ bitpos);
  this.a5 = (this.a5 | bitpos);
  this.aA = dst;
  this.bR = dstHashes;
  this.b9 = ((((this.b9 - 1) | 0) + node.aZ()) | 0);
  this.bE = ((((this.bE - keyHash) | 0) + node.es()) | 0);
  return this;
});
$p.so = (function(bitpos, keyHash, node) {
  var dataIx = this.h1(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.aA.a.length - 2) | 0) - this.kN(bitpos)) | 0);
  var src = this.aA;
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
  var dstHashes = this.qu(this.bR, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.X ^ bitpos), (this.a5 | bitpos), dst, dstHashes, ((((this.b9 - 1) | 0) + node.aZ()) | 0), ((((this.bE - keyHash) | 0) + node.es()) | 0));
});
$p.cS = (function(f) {
  var iN = $m_jl_Integer$().dm(this.X);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.bN(this.dr(i$1), this.cy(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().dm(this.a5);
  var j = 0;
  while ((j < jN)) {
    this.cT(j).cS(f);
    j = ((1 + j) | 0);
  }
});
$p.kq = (function(f) {
  var i = 0;
  var iN = $m_jl_Integer$().dm(this.X);
  while ((i < iN)) {
    f.gX(this.dr(i), this.cy(i), this.fW(i));
    i = ((1 + i) | 0);
  }
  var jN = $m_jl_Integer$().dm(this.a5);
  var j = 0;
  while ((j < jN)) {
    this.cT(j).kq(f);
    j = ((1 + j) | 0);
  }
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.bE === that.bE) && (this.a5 === that.a5)) && (this.X === that.X)) && (this.b9 === that.b9)) && $m_ju_Arrays$().km(this.bR, that.bR))) {
      var a1 = this.aA;
      var a2 = that.aA;
      var length = this.aA.a.length;
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
$p.pr = (function() {
  var this$1 = this.aA;
  var contentClone = this$1.g();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().dm(this.X) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].ps();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.X, this.a5, contentClone, this.bR.g(), this.b9, this.bE);
});
$p.kx = (function(index) {
  return this.cT(index);
});
$p.qY = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.qX(key, value, originalHash, hash, shift, replaceValue);
});
$p.ps = (function() {
  return this.pr();
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
  this.hP = 0;
  this.ee = 0;
  this.af = null;
  this.hP = originalHash;
  this.ee = hash;
  this.af = content;
  $m_s_Predef$().ug((this.af.i() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.fX = (function(key) {
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
$p.aZ = (function() {
  return this.af.i();
});
$p.k7 = (function(key, originalHash, hash, shift) {
  var this$1 = this.ii(key, originalHash, hash, shift);
  return (this$1.c() ? $m_sc_Iterator$().J.f() : this$1.y());
});
$p.ii = (function(key, originalHash, hash, shift) {
  if ((this.ee === hash)) {
    var index = this.fX(key);
    return ((index >= 0) ? new $c_s_Some(this.af.o(index).R) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.ky = (function(key, originalHash, hash, shift, f) {
  if ((this.ee === hash)) {
    var x36 = this.fX(key);
    if ((x36 === (-1))) {
      return f.I();
    }
    return this.af.o(x36).R;
  } else {
    return f.I();
  }
});
$p.kg = (function(key, originalHash, hash, shift) {
  return ((this.ee === hash) && (this.fX(key) >= 0));
});
$p.qY = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.fX(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.af.o(index).R, value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.af.eC(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.af.er(new $c_T2(key, value))));
});
$p.kB = (function() {
  return false;
});
$p.kM = (function() {
  return 0;
});
$p.cT = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.ij = (function() {
  return true;
});
$p.kP = (function() {
  return this.af.i();
});
$p.dr = (function(index) {
  return this.af.o(index).S;
});
$p.cy = (function(index) {
  return this.af.o(index).R;
});
$p.pY = (function(index) {
  return this.af.o(index);
});
$p.fW = (function(index) {
  return this.hP;
});
$p.cS = (function(f) {
  this.af.bW(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.S;
    var v = x$1$2.R;
    return f.bN(k, v);
  })));
});
$p.kq = (function(f) {
  var iter = this.af.d();
  while (iter.j()) {
    var next = iter.f();
    f.gX(next.S, next.R, this.hP);
  }
});
$p.p = (function(that) {
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
        var index = that.fX(key);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().l(value, that.af.o(index).R)))) {
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
$p.es = (function() {
  return Math.imul(this.af.i(), this.ee);
});
$p.kx = (function(index) {
  return this.cT(index);
});
$p.ps = (function() {
  return new $c_sci_HashCollisionMapNode(this.hP, this.ee, this.af);
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
  this.gB = null;
  $n_sci_HashMap$ = this;
  this.gB = new $c_sci_HashMap($m_sci_MapNode$().oy);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.sY = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : new $c_sci_HashMapBuilder().k6(source).kS());
});
$p.bP = (function() {
  return this.gB;
});
$p.ab = (function(it) {
  return this.sY(it);
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  gN: 1,
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
$p.t0 = (function(it) {
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
  return new $c_sci_MapBuilderImpl().p7(it).qw();
});
$p.bP = (function() {
  return $m_sci_Map$EmptyMap$();
});
$p.ab = (function(it) {
  return this.t0(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  h2: 1,
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
$p.t1 = (function(it) {
  var k = it.s();
  return $ct_scm_HashMap__I__D__(new $c_scm_HashMap(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).pa(it);
});
$p.bP = (function() {
  return $ct_scm_HashMap__(new $c_scm_HashMap());
});
$p.ab = (function(it) {
  return this.t1(it);
});
var $d_scm_HashMap$ = new $TypeData().i($c_scm_HashMap$, "scala.collection.mutable.HashMap$", ({
  hQ: 1,
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
$p.t2 = (function(it) {
  var k = it.s();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).pb(it);
});
$p.aq = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.ab = (function(source) {
  return this.t2(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  hW: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iF)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.oQ = null;
  this.oQ = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.I = (function() {
  return (0, this.oQ)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  j4: 1,
  cE: 1,
  aX: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.oR = null;
  this.oR = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.e = (function(x0) {
  return (0, this.oR)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  j5: 1,
  cF: 1,
  i: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.oS = null;
  this.oS = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.bN = (function(x0, x1) {
  return (0, this.oS)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  j6: 1,
  cG: 1,
  aY: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.oT = null;
  this.oT = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.gX = (function(x0, x1, x2) {
  return (0, this.oT)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  j7: 1,
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
  return this.bV(x, $m_s_PartialFunction$().hG);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  je: 1,
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
$p.pV = (function(f) {
  return ((arg1$2) => f.e(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  jm: 1,
  jn: 1,
  jo: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.jI)));
}
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$8(onNextParam$2, handleObserverErrors$3, onErrorParam$2, outer) {
  this.l5 = null;
  this.l3 = false;
  this.iD = null;
  this.l4 = null;
  this.l5 = onNextParam$2;
  this.l3 = handleObserverErrors$3;
  this.iD = onErrorParam$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.l4 = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$8;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$8() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$8.prototype = $p;
$p.ez = (function() {
  return this.l4;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.hb = (function(nextValue) {
  try {
    this.l5.e(nextValue);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if (this.l3) {
      this.ha(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().d1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    }
  }
});
$p.ha = (function(error) {
  try {
    if (this.iD.cf(error)) {
      this.iD.e(error);
    } else {
      $m_Lcom_raquo_airstream_core_AirstreamError$().d1(error);
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    $m_Lcom_raquo_airstream_core_AirstreamError$().d1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, error));
  }
});
$p.g3 = (function(nextValue) {
  nextValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((error) => {
    this.ha(error);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue$2) => {
    this.hb(nextValue$2);
  })));
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$8 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$8, "com.raquo.airstream.core.Observer$$anon$8", ({
  cS: 1,
  aJ: 1,
  ab: 1,
  aR: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_core_Observer$$anon$9(onTryParam$2, handleObserverErrors$4, outer) {
  this.iE = null;
  this.l6 = false;
  this.l7 = null;
  this.iE = onTryParam$2;
  this.l6 = handleObserverErrors$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.l7 = (void 0);
}
$p = $c_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_core_Observer$$anon$9;
/** @constructor */
function $h_Lcom_raquo_airstream_core_Observer$$anon$9() {
}
$h_Lcom_raquo_airstream_core_Observer$$anon$9.prototype = $p;
$p.ez = (function() {
  return this.l7;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.hb = (function(nextValue) {
  this.g3(new $c_s_util_Success(nextValue));
});
$p.ha = (function(error) {
  this.g3(new $c_s_util_Failure(error));
});
$p.g3 = (function(nextValue) {
  try {
    if (this.iE.cf(nextValue)) {
      this.iE.e(nextValue);
    } else {
      nextValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().d1(err);
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => (void 0))));
    }
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    if ((this.l6 && nextValue.q3())) {
      this.ha(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
    } else {
      nextValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((originalError) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().d1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError(e$2, originalError));
      })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => {
        $m_Lcom_raquo_airstream_core_AirstreamError$().d1(new $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError(e$2));
      })));
    }
  }
});
var $d_Lcom_raquo_airstream_core_Observer$$anon$9 = new $TypeData().i($c_Lcom_raquo_airstream_core_Observer$$anon$9, "com.raquo.airstream.core.Observer$$anon$9", ({
  cT: 1,
  aJ: 1,
  ab: 1,
  aR: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_api_Laminar$svg$(outer) {
  this.m5 = null;
  this.m6 = false;
  this.m7 = null;
  this.m8 = false;
  this.m9 = null;
  this.ma = false;
  this.mb = null;
  this.mc = false;
  this.md = null;
  this.me = false;
  this.mf = null;
  this.mg = false;
  this.mh = null;
  this.mi = false;
  this.r4 = null;
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
$p.sh = (function() {
  if ((!this.m6)) {
    this.m5 = new $c_Lcom_raquo_laminar_tags_SvgTag("circle", false);
    this.m6 = true;
  }
  return this.m5;
});
$p.kw = (function() {
  if ((!this.m8)) {
    this.m7 = new $c_Lcom_raquo_laminar_tags_SvgTag("g", false);
    this.m8 = true;
  }
  return this.m7;
});
$p.qb = (function() {
  if ((!this.ma)) {
    this.m9 = new $c_Lcom_raquo_laminar_tags_SvgTag("line", false);
    this.ma = true;
  }
  return this.m9;
});
$p.u4 = (function() {
  if ((!this.mc)) {
    this.mb = new $c_Lcom_raquo_laminar_tags_SvgTag("rect", false);
    this.mc = true;
  }
  return this.mb;
});
$p.kW = (function() {
  if ((!this.me)) {
    this.md = new $c_Lcom_raquo_laminar_tags_SvgTag("svg", false);
    this.me = true;
  }
  return this.md;
});
$p.hj = (function() {
  if ((!this.mg)) {
    this.mf = new $c_Lcom_raquo_laminar_tags_SvgTag("text", false);
    this.mg = true;
  }
  return this.mf;
});
$p.qS = (function() {
  if ((!this.mi)) {
    this.mh = new $c_Lcom_raquo_laminar_tags_SvgTag("title", false);
    this.mi = true;
  }
  return this.mh;
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
  this.n2 = null;
  this.n4 = false;
  this.n3 = null;
  this.iZ = null;
  this.n2 = initialContext;
  this.n4 = preferStrictMode;
  this.n3 = insertFn;
  this.iZ = hooks;
}
$p = $c_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_inserters_DynamicInserter;
/** @constructor */
function $h_Lcom_raquo_laminar_inserters_DynamicInserter() {
}
$h_Lcom_raquo_laminar_inserters_DynamicInserter.prototype = $p;
$p.sb = (function(element) {
  var this$1 = this.n2;
  var insertContext = (this$1.c() ? $m_Lcom_raquo_laminar_inserters_InsertContext$().uh(element, this.n4, this.iZ) : this$1.y());
  var subscribe = new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((mountContext) => this.n3.gX(insertContext, mountContext.j6, this.iZ)));
  return $m_Lcom_raquo_airstream_ownership_DynamicSubscription$().iB(element.cd(), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((owner) => subscribe.e(new $c_Lcom_raquo_laminar_lifecycle_MountContext(element, owner)))), false);
});
$p.cQ = (function(element) {
  this.sb(element);
});
var $d_Lcom_raquo_laminar_inserters_DynamicInserter = new $TypeData().i($c_Lcom_raquo_laminar_inserters_DynamicInserter, "com.raquo.laminar.inserters.DynamicInserter", ({
  e2: 1,
  a4: 1,
  e6: 1,
  e3: 1
}));
function $ct_Lcom_raquo_laminar_keys_StyleProp__T__sci_Seq__($thiz, name, prefixes) {
  $thiz.eN = name;
  $thiz.eO = prefixes;
  return $thiz;
}
/** @constructor */
function $c_Lcom_raquo_laminar_keys_StyleProp() {
  this.eN = null;
  this.eO = null;
}
$p = $c_Lcom_raquo_laminar_keys_StyleProp.prototype = new $h_Lcom_raquo_laminar_keys_Key();
$p.constructor = $c_Lcom_raquo_laminar_keys_StyleProp;
/** @constructor */
function $h_Lcom_raquo_laminar_keys_StyleProp() {
}
$h_Lcom_raquo_laminar_keys_StyleProp.prototype = $p;
$p.r = (function(value) {
  return new $c_Lcom_raquo_laminar_modifiers_KeySetter(this, $dp_toString__T(value), new $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(((element, styleProp, value$2) => {
    $m_Lcom_raquo_laminar_DomApi$().uv(element, styleProp, value$2);
  })));
});
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_CommentNode(initialText) {
  this.ja = null;
  this.jb = null;
  this.ja = $m_s_None$();
  this.jb = $m_Lcom_raquo_laminar_DomApi$().su(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_CommentNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_CommentNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_CommentNode() {
}
$h_Lcom_raquo_laminar_nodes_CommentNode.prototype = $p;
$p.fN = (function() {
  return this.ja;
});
$p.eB = (function(maybeNextParent) {
  this.ja = maybeNextParent;
});
$p.eF = (function(maybeNextParent) {
});
$p.cQ = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(parentNode, this, (void 0));
});
$p.L = (function() {
  return this.jb;
});
var $d_Lcom_raquo_laminar_nodes_CommentNode = new $TypeData().i($c_Lcom_raquo_laminar_nodes_CommentNode, "com.raquo.laminar.nodes.CommentNode", ({
  ez: 1,
  az: 1,
  a4: 1,
  aK: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_TextNode(initialText) {
  this.jf = null;
  this.jg = null;
  this.jf = $m_s_None$();
  this.jg = $m_Lcom_raquo_laminar_DomApi$().sw(initialText);
}
$p = $c_Lcom_raquo_laminar_nodes_TextNode.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_TextNode;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_TextNode() {
}
$h_Lcom_raquo_laminar_nodes_TextNode.prototype = $p;
$p.fN = (function() {
  return this.jf;
});
$p.eB = (function(maybeNextParent) {
  this.jf = maybeNextParent;
});
$p.eF = (function(maybeNextParent) {
});
$p.cQ = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(parentNode, this, (void 0));
});
$p.uO = (function() {
  return this.jg.data;
});
$p.L = (function() {
  return this.jg;
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
$p.pf = (function(str) {
  var str$1 = $m_jl_String$().tR(str, 0, str.a.length);
  this.t = (("" + this.t) + str$1);
  return this;
});
$p.u = (function() {
  return this.t;
});
$p.i = (function() {
  return this.t.length;
});
$p.pm = (function(index) {
  return this.t.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  fc: 1,
  aW: 1,
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
  if (($thiz.eP === null)) {
    $thiz.e7 = (("" + $thiz.e7) + s);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__V($thiz, s1, s2) {
  if (($thiz.eP === null)) {
    $thiz.e7 = ((("" + $thiz.e7) + s1) + s2);
  } else {
    $p_ju_Formatter__sendToDestSlowPath__O__V($thiz, [s1, s2]);
  }
}
function $p_ju_Formatter__sendToDest__T__T__T__V($thiz, s1, s2, s3) {
  if (($thiz.eP === null)) {
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
      var this$2 = $thiz.eP;
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
  if ($thiz.jr) {
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
    var re = $m_ju_Formatter$().nC;
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
        $thiz.kG(flags);
      }
      $p_ju_Formatter__sendToDest__T__V($thiz, "\n");
    } else if ((conversion$2 === 37)) {
      if ((precision !== (-1))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.kG(flags);
      }
      if ((((1 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((-2) & flags) !== 0)) {
        $thiz.im(37, flags, (-2));
      }
      $p_ju_Formatter__padAndSendToDestNoZeroPad__I__I__T__V($thiz, flags, width, "%");
    } else {
      var conversionLower = (((256 & flags) !== 0) ? (65535 & ((32 + conversion$2) | 0)) : conversion$2);
      var illegalFlags = $m_ju_Formatter$().nB.a[((conversionLower - 97) | 0)];
      if (((illegalFlags === (-1)) || (((256 & flags) & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwUnknownFormatConversionException__C__E($thiz, conversion$2);
      }
      if ((((17 & flags) !== 0) && (width === (-1)))) {
        $p_ju_Formatter__throwMissingFormatWidthException__T__E($thiz, $ps_ju_Formatter__fullFormatSpecifier$1__O__T(execResult));
      }
      if ((((17 & flags) === 17) || ((12 & flags) === 12))) {
        $thiz.kG(flags);
      }
      if (((precision !== (-1)) && ((512 & illegalFlags) !== 0))) {
        $p_ju_Formatter__throwIllegalFormatPrecisionException__I__E($thiz, precision);
      }
      if (((flags & illegalFlags) !== 0)) {
        $thiz.im(conversionLower, flags, illegalFlags);
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
        arg.v5($thiz, formattableFlags, width, precision);
      } else {
        if (((2 & flags) !== 0)) {
          $thiz.im(conversionLower, flags, 2);
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
          $thiz.h4(conversionLower, arg);
        }
        var x3 = (arg | 0);
        if (((x3 >>> 0) > 1114111)) {
          $p_ju_Formatter__throwIllegalFormatCodePointException__I__E($thiz, x3);
        }
        var $x_2 = $m_jl_Character$().kZ(x3);
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
        var $x_3 = $m_RTLong$().kY(x3$2_$_lo, x3$2_$_hi);
      } else {
        if ((!false)) {
          $thiz.h4(conversionLower, arg);
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
        $p_ju_Formatter__formatNumericString__ju_Formatter$LocaleInfo__I__I__T__T__V($thiz, $m_ju_Formatter$RootLocaleInfo$(), flags, width, arg.kZ(radix), prefix);
      } else {
        if ($isInt(arg)) {
          var x2$5 = (arg | 0);
          var str$6 = (isOctal ? (x2$5 >>> 0.0).toString(8) : (x2$5 >>> 0.0).toString(16));
        } else {
          if ((!(arg instanceof $Long))) {
            $thiz.h4(conversionLower, arg);
          }
          var $x_5 = $uJ(arg);
          var x3$3_$_lo = $x_5.l;
          var x3$3_$_hi = $x_5.h;
          var str$6 = (isOctal ? $m_jl_Long$().tw(x3$3_$_lo, x3$3_$_hi) : $m_jl_Long$().q6(x3$3_$_lo, x3$3_$_hi));
        }
        if (((76 & flags) !== 0)) {
          $thiz.im(conversionLower, flags, 76);
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
          $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().ty(x2$6), flags, precision, conversionLower, localeInfo, width);
        }
      } else if (false) {
        $p_ju_Formatter__formatDecimal$1__ju_Formatter$Decimal__I__I__C__ju_Formatter$LocaleInfo__I__V($thiz, $m_ju_Formatter$().tx(arg), flags, precision, conversionLower, localeInfo, width);
      } else {
        $thiz.h4(conversionLower, arg);
      }
      break;
    }
    case 97: {
      if (((typeof arg) === "number")) {
        $p_ju_Formatter__formatHexFloatingPoint__I__I__I__D__V($thiz, flags, width, precision, (+arg));
      } else {
        $thiz.h4(conversionLower, arg);
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
  var rounded = x.qy(((1 + digitsAfterDot) | 0));
  var signStr = (rounded.dz ? "-" : "");
  var intStr = rounded.dA;
  var fractionalDigitCount = ((intStr.length - 1) | 0);
  var missingZeros = ((digitsAfterDot - fractionalDigitCount) | 0);
  var integerPart = intStr.substring(0, 1);
  var fractionalPart = (("" + intStr.substring(1)) + $m_ju_Formatter$().kF(missingZeros));
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
  var rounded = x.ux(scale);
  var signStr = (rounded.dz ? "-" : "");
  var intStr = rounded.dA;
  var intStrLen = intStr.length;
  var minDigits = ((1 + scale) | 0);
  var expandedIntStr = ((intStrLen >= minDigits) ? intStr : (("" + $m_ju_Formatter$().kF(((minDigits - intStrLen) | 0))) + intStr));
  var dotPos = ((expandedIntStr.length - scale) | 0);
  var integerPart = (signStr + expandedIntStr.substring(0, dotPos));
  return (((scale === 0) && (!forceDecimalSep)) ? integerPart : ((integerPart + ".") + expandedIntStr.substring(dotPos)));
}
function $p_ju_Formatter__generalScientificNotation__ju_Formatter$Decimal__I__Z__T($thiz, x, precision, forceDecimalSep) {
  var p = ((precision === 0) ? 1 : precision);
  var rounded = x.qy(p);
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
    var baseStr = $m_jl_Long$().q6(roundedMantissa_$_lo, roundedMantissa_$_hi);
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
  $thiz.eP = dest;
  $thiz.nA = formatterLocaleInfo;
  $thiz.e7 = "";
  $thiz.jr = false;
  return $thiz;
}
function $ct_ju_Formatter__($thiz) {
  $ct_ju_Formatter__jl_Appendable__ju_Formatter$LocaleInfo__($thiz, null, $m_ju_Formatter$RootLocaleInfo$());
  return $thiz;
}
/** @constructor */
function $c_ju_Formatter() {
  this.eP = null;
  this.nA = null;
  this.e7 = null;
  this.jr = false;
}
$p = $c_ju_Formatter.prototype = new $h_O();
$p.constructor = $c_ju_Formatter;
/** @constructor */
function $h_ju_Formatter() {
}
$h_ju_Formatter.prototype = $p;
$p.sW = (function(format, args) {
  return $p_ju_Formatter__format__ju_Formatter$LocaleInfo__T__AO__ju_Formatter(this, this.nA, format, args);
});
$p.u = (function() {
  if (this.jr) {
    throw new $c_ju_FormatterClosedException();
  }
  return ((this.eP === null) ? this.e7 : this.eP.t);
});
$p.kG = (function(flags) {
  throw new $c_ju_IllegalFormatFlagsException($p_ju_Formatter__flagsToString__I__T(this, flags));
});
$p.im = (function(conversionLower, flags, illegalFlags) {
  throw new $c_ju_FormatFlagsConversionMismatchException($p_ju_Formatter__flagsToString__I__T(this, (flags & illegalFlags)), conversionLower);
});
$p.h4 = (function(conversionLower, arg) {
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
$p.d2 = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.bD = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ByteArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ByteArrayOps$, "java.util.internal.GenericArrayOps$ByteArrayOps$", ({
  fG: 1,
  ap: 1,
  aB: 1,
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
$p.bD = (function(a, i) {
  return $bC(a.a[i]);
});
var $d_ju_internal_GenericArrayOps$CharArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$CharArrayOps$, "java.util.internal.GenericArrayOps$CharArrayOps$", ({
  fH: 1,
  ap: 1,
  aB: 1,
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
$p.bD = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$IntArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$IntArrayOps$, "java.util.internal.GenericArrayOps$IntArrayOps$", ({
  fI: 1,
  ap: 1,
  aB: 1,
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
$p.bD = (function(a, i) {
  var $x_1 = a.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
var $d_ju_internal_GenericArrayOps$LongArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$LongArrayOps$, "java.util.internal.GenericArrayOps$LongArrayOps$", ({
  fJ: 1,
  ap: 1,
  aB: 1,
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
$p.bD = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ShortArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ShortArrayOps$, "java.util.internal.GenericArrayOps$ShortArrayOps$", ({
  fL: 1,
  ap: 1,
  aB: 1,
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
$p.u = (function() {
  return "<function1>";
});
$p.bV = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cf = (function(x) {
  return false;
});
$p.k8 = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.e = (function(v1) {
  this.k8(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  g3: 1,
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
$p.d3 = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.cP = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.ga = (function() {
  return $m_sci_Seq$().fT(this);
});
$p.d = (function() {
  return this;
});
$p.h0 = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.ev = (function(n) {
  return this.g7(n, (-1));
});
$p.g7 = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.u = (function() {
  return "<iterator>";
});
/** @constructor */
function $c_sc_Map$() {
  this.gr = null;
  this.oi = null;
  this.oj = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.oi = $ct_O__(new $c_O());
  this.oj = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.oi));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  gv: 1,
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
$p.k9 = (function(elems) {
  return this.ea.dX(elems);
});
$p.ia = (function() {
  return this.ea.bP();
});
$p.ie = (function(it) {
  return this.ea.ab(it);
});
$p.aq = (function() {
  return this.ea.aq();
});
$p.dX = (function(elems) {
  return this.k9(elems);
});
$p.bP = (function() {
  return this.ia();
});
$p.ab = (function(source) {
  return this.ie(source);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cc(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => x$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.f8(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.aY(idx) > 0));
}
function $f_sc_SeqOps__sorted__s_math_Ordering__O($thiz, ord) {
  var len = $thiz.i();
  var b = $thiz.dt();
  if ((len === 1)) {
    b.ad($thiz.q());
  } else if ((len > 1)) {
    b.b5(len);
    var arr = new $ac_O(len);
    $thiz.bm(arr, 0, 2147483647);
    $m_ju_Arrays$().g8(arr, ord);
    var i = 0;
    while ((i < len)) {
      b.ad(arr.a[i]);
      i = ((1 + i) | 0);
    }
  }
  return b.ar();
}
function $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O($thiz, f, ord) {
  return $thiz.b6(new $c_s_math_Ordering$$anon$1(f, ord));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.aY(0) === 0);
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
  var b = $thiz.az().aq();
  var it = $thiz.d();
  while (it.j()) {
    b.ad(f.e(it.f()));
  }
  return b.ar();
}
function $f_sc_StrictOptimizedIterableOps__flatMap__F1__O($thiz, f) {
  var b = $thiz.az().aq();
  var it = $thiz.d();
  while (it.j()) {
    b.b3(f.e(it.f()));
  }
  return b.ar();
}
function $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O($thiz, that) {
  var b = $thiz.az().aq();
  var it1 = $thiz.d();
  var it2 = that.d();
  while ((it1.j() && it2.j())) {
    b.ad(new $c_T2(it1.f(), it2.f()));
  }
  return b.ar();
}
function $f_sc_StrictOptimizedIterableOps__zipWithIndex__O($thiz) {
  var b = $thiz.az().aq();
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
  this.go = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.sZ = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.ab.call(this, it));
});
$p.ab = (function(it) {
  return this.sZ(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  gS: 1,
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
  return this.kt(elems);
});
$p.qB = (function(ll, f) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef) => (() => {
    var it = new $c_sr_ObjectRef(null);
    var itHasNext = false;
    var rest = new $c_sr_ObjectRef(restRef.D);
    while (((!itHasNext) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest.D) === $m_sci_LazyList$().G)))) {
      it.D = f.e(rest.D.q()).d();
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
        return this.kT(x$proxy3, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.qB(rest.D, f))));
      }))));
    } else {
      return this.G;
    }
  }))(new $c_sr_ObjectRef(ll))));
});
$p.um = (function(ll, n) {
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
$p.kt = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.s() === 0) ? this.G : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.qA(coll.d()))))));
});
$p.kT = (function(it, suffix) {
  return (it.j() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.f(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.kT(it, suffix))))) : suffix.I());
});
$p.qA = (function(it) {
  return (it.j() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.f(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.qA(it))))) : this.G);
});
$p.pQ = (function(start, step) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), start, this.pQ(((start + step) | 0), step)))));
});
$p.aq = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.ab = (function(source) {
  return this.kt(source);
});
$p.bP = (function() {
  return this.G;
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  gT: 1,
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
  this.oG = null;
  this.gF = null;
  this.oG = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.gF = outer;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.rR = (function(x) {
  this.gF.ad(x);
  return this;
});
$p.rE = (function(xs) {
  this.gF.b3(xs);
  return this;
});
$p.b5 = (function(size) {
  this.gF.b5(size);
});
$p.ar = (function() {
  return this.oG.e(this.gF.ar());
});
$p.ad = (function(elem) {
  return this.rR(elem);
});
$p.b3 = (function(elems) {
  return this.rE(elems);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  hL: 1,
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
$p.b5 = (function(size) {
});
$p.rS = (function(elem) {
  this.em.ad(elem);
  return this;
});
$p.rF = (function(xs) {
  this.em.b3(xs);
  return this;
});
$p.ar = (function() {
  return this.em;
});
$p.ad = (function(elem) {
  return this.rS(elem);
});
$p.b3 = (function(elems) {
  return this.rF(elems);
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  ba: 1,
  H: 1,
  J: 1,
  N: 1
}));
/** @constructor */
function $c_scm_Iterable$() {
  this.go = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_scm_Iterable$;
/** @constructor */
function $h_scm_Iterable$() {
}
$h_scm_Iterable$.prototype = $p;
var $d_scm_Iterable$ = new $TypeData().i($c_scm_Iterable$, "scala.collection.mutable.Iterable$", ({
  i4: 1,
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
  this.gr = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_scm_HashMap$());
}
$p = $c_scm_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_scm_Map$;
/** @constructor */
function $h_scm_Map$() {
}
$h_scm_Map$.prototype = $p;
var $d_scm_Map$ = new $TypeData().i($c_scm_Map$, "scala.collection.mutable.Map$", ({
  i8: 1,
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
  this.oW = null;
  this.oW = f;
}
$p = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = new $h_sjsr_AnonFunction0();
$p.constructor = $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d;
/** @constructor */
function $h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d() {
}
$h_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d.prototype = $p;
$p.I = (function() {
  return (0, this.oW)();
});
var $d_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d = new $TypeData().i($c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d, "scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d", ({
  jt: 1,
  js: 1,
  cE: 1,
  aX: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(f) {
  this.oX = null;
  this.oX = f;
}
$p = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = new $h_sjsr_AnonFunction1();
$p.constructor = $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1;
/** @constructor */
function $h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1() {
}
$h_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1.prototype = $p;
$p.e = (function(x0) {
  return (0, this.oX)(x0);
});
var $d_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1 = new $TypeData().i($c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1, "scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1", ({
  jv: 1,
  ju: 1,
  cF: 1,
  i: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7(f) {
  this.oY = null;
  this.oY = f;
}
$p = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = new $h_sjsr_AnonFunction2();
$p.constructor = $c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7;
/** @constructor */
function $h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7() {
}
$h_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7.prototype = $p;
$p.bN = (function(x0, x1) {
  return (0, this.oY)(x0, x1);
});
var $d_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7 = new $TypeData().i($c_sjsr_AnonFunction2_$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7, "scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7", ({
  jx: 1,
  jw: 1,
  cG: 1,
  aY: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96(f) {
  this.oZ = null;
  this.oZ = f;
}
$p = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = new $h_sjsr_AnonFunction3();
$p.constructor = $c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96;
/** @constructor */
function $h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96() {
}
$h_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96.prototype = $p;
$p.gX = (function(x0, x1, x2) {
  return (0, this.oZ)(x0, x1, x2);
});
var $d_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96 = new $TypeData().i($c_sjsr_AnonFunction3_$$Lambda$73f37e31ba038fe839c174212837da323f140c96, "scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96", ({
  jz: 1,
  jy: 1,
  cH: 1,
  bF: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c(f) {
  this.p0 = null;
  this.p0 = f;
}
$p = $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c.prototype = new $h_sjsr_AnonFunction4();
$p.constructor = $c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c;
/** @constructor */
function $h_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c() {
}
$h_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c.prototype = $p;
$p.rY = (function(x0, x1, x2, x3) {
  return (0, this.p0)(x0, x1, x2, x3);
});
var $d_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c = new $TypeData().i($c_sjsr_AnonFunction4_$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c, "scala.scalajs.runtime.AnonFunction4.$$Lambda$120c664e6fb20e1c3552e9e8baf775b7682c102c", ({
  jB: 1,
  jA: 1,
  j8: 1,
  fX: 1
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
  $thiz.gY($m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_core_Observer.r().C)([]))));
  $thiz.gZ($m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_airstream_core_InternalObserver.r().C)([]))));
  $thiz.fg(false);
}
function $f_Lcom_raquo_airstream_core_WritableObservable__addObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner) {
  var this$2 = $m_Lcom_raquo_airstream_core_Transaction$onStart$();
  var f = (() => {
    $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz);
    var subscription = $f_Lcom_raquo_airstream_core_WritableObservable__addExternalObserver__Lcom_raquo_airstream_core_Observer__Lcom_raquo_airstream_ownership_Owner__Lcom_raquo_airstream_ownership_Subscription($thiz, observer, owner);
    $thiz.h8(observer);
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
  if ($m_Lcom_raquo_airstream_core_ObserverList$().qv($thiz.ds(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__removeExternalObserverNow__Lcom_raquo_airstream_core_Observer__V($thiz, observer) {
  if ($m_Lcom_raquo_airstream_core_ObserverList$().qv($thiz.dp(), observer)) {
    $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz);
  }
}
function $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz) {
  if ((!$thiz.hk())) {
    $thiz.hf();
    $thiz.fg(true);
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStart__V($thiz) {
  if (($f_Lcom_raquo_airstream_core_WritableObservable__numAllObservers__I($thiz) === 1)) {
    $thiz.hc();
  }
}
function $p_Lcom_raquo_airstream_core_WritableObservable__maybeStop__V($thiz) {
  if ((!$f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z($thiz))) {
    $thiz.hd();
    $thiz.fg(false);
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
  this.la = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.la = outer;
}
$p = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomSource$$anon$1() {
}
$h_Lcom_raquo_airstream_custom_CustomSource$$anon$1.prototype = $p;
$p.tr = (function(x) {
  return ((x !== null) || false);
});
$p.s4 = (function(x, default$1) {
  return ((x !== null) ? (new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this.la, x, _$1);
  }))), (void 0)) : default$1.e(x));
});
$p.cf = (function(x) {
  return this.tr(x);
});
$p.bV = (function(x, default$1) {
  return this.s4(x, default$1);
});
var $d_Lcom_raquo_airstream_custom_CustomSource$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomSource$$anon$1, "com.raquo.airstream.custom.CustomSource$$anon$1", ({
  d1: 1,
  aP: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_airstream_state_Var__$init$__V($thiz) {
  $thiz.iS = $m_Lcom_raquo_airstream_core_Observer$().t3(new $c_Lcom_raquo_airstream_state_Var$$anon$1($thiz), ($m_Lcom_raquo_airstream_core_Observer$(), true));
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_Var$$anon$1(outer) {
  this.lS = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.lS = outer;
}
$p = $c_Lcom_raquo_airstream_state_Var$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lcom_raquo_airstream_state_Var$$anon$1;
/** @constructor */
function $h_Lcom_raquo_airstream_state_Var$$anon$1() {
}
$h_Lcom_raquo_airstream_state_Var$$anon$1.prototype = $p;
$p.tt = (function(x) {
  return true;
});
$p.s6 = (function(x, default$1) {
  new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    this.lS.ur(x, _$1);
  })));
});
$p.cf = (function(x) {
  return this.tt(x);
});
$p.bV = (function(x, default$1) {
  return this.s6(x, default$1);
});
var $d_Lcom_raquo_airstream_state_Var$$anon$1 = new $TypeData().i($c_Lcom_raquo_airstream_state_Var$$anon$1, "com.raquo.airstream.state.Var$$anon$1", ({
  di: 1,
  aP: 1,
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
  aP: 1,
  i: 1,
  j: 1,
  a: 1
}));
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V($thiz) {
  $thiz.pq(new $c_Lcom_raquo_airstream_ownership_TransferableSubscription(new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.cd().p6();
  })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => {
    $thiz.cd().sx();
  }))));
  $thiz.ke((void 0));
  $thiz.kd($m_sci_Map$EmptyMap$());
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__addEventListener__Lcom_raquo_laminar_modifiers_EventListener__Z__V($thiz, listener, unsafePrepend) {
  if (($thiz.fO() === (void 0))) {
    $thiz.ke($m_Lcom_raquo_ew_JsArray$().cR($m_sr_ScalaRunTime$().cH(new ($d_Lcom_raquo_laminar_modifiers_EventListener.r().C)([listener]))));
  } else if (unsafePrepend) {
    var x$1 = $thiz.fO();
    if ((x$1 === (void 0))) {
      var $x_1;
      throw new $c_ju_NoSuchElementException("undefined.get");
    } else {
      var $x_1 = x$1;
    }
    $x_1.unshift(listener);
  } else {
    var x$2 = $thiz.fO();
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
  var x = $thiz.fO();
  if ((x !== (void 0))) {
    x.splice(index, 1);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__indexOfEventListener__Lcom_raquo_laminar_modifiers_EventListener__I($thiz, listener) {
  var x = $thiz.fO();
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
  var keyItemsWithReason = $thiz.i8().cU(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f = ((item) => {
    var these = keyItemsWithReason;
    while ((!these.c())) {
      var x0 = these.q();
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
  var this$1 = $thiz.i8().cU(key, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $m_sci_Nil$())));
  var f$1 = ((t$1) => result.bO(t$1.S));
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
  var newItems = $x_3.ph($x_2);
  var domValues = key.j0.pC(key.n5.e($thiz));
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
  var nextDomValues = $x_5.ph($x_4);
  $thiz.kd($thiz.i8().eD(key, newItems));
  key.n7.bN($thiz, key.j0.pG(nextDomValues));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V($thiz, maybeNextParent) {
  if ($p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, $thiz.fN(), maybeNextParent)) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V($thiz, maybeNextParent) {
  var maybePrevParent = $thiz.fN();
  $thiz.pp(maybeNextParent);
  if ((!$p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent))) {
    $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent);
  }
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__isUnmounting__s_Option__s_Option__Z($thiz, maybePrevParent, maybeNextParent) {
  var isPrevParentActive = ((!maybePrevParent.c()) && (!maybePrevParent.y().cd().c1.c()));
  var isNextParentActive = ((!maybeNextParent.c()) && (!maybeNextParent.y().cd().c1.c()));
  return (isPrevParentActive && (!isNextParentActive));
}
function $p_Lcom_raquo_laminar_nodes_ReactiveElement__setPilotSubscriptionOwner__s_Option__V($thiz, maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, (maybeNextParent.c() ? $m_s_None$() : new $c_s_Some(maybeNextParent.y().cd())));
}
function $f_Lcom_raquo_laminar_nodes_ReactiveElement__unsafeSetPilotSubscriptionOwner__s_Option__V($thiz, maybeNextOwner) {
  if (maybeNextOwner.c()) {
    $thiz.kf().sj();
  } else {
    var x0 = maybeNextOwner.y();
    $thiz.kf().uw(x0);
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
  if ((!$thiz.o5)) {
    if (($thiz.hF === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.hF;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.A.N));
      try {
        var $x_1 = ((($thiz.hF + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.o4 = $x_1;
    $thiz.o5 = true;
  }
  return $thiz.o4;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.hF = null;
    this.o4 = null;
    this.o5 = false;
    this.hF = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  g0: 1,
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
$p.s = (function() {
  return (this.c() ? 0 : 1);
});
$p.bO = (function(elem) {
  return ((!this.c()) && $m_sr_BoxesRunTime$().l(this.y(), elem));
});
$p.d = (function() {
  return (this.c() ? $m_sc_Iterator$().J : new $c_sc_Iterator$$anon$20(this.y()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gm = 0;
  this.o8 = 0;
  this.o7 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.o7 = outer;
  this.gm = 0;
  this.o8 = outer.bv();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.j = (function() {
  return (this.gm < this.o8);
});
$p.f = (function() {
  var result = this.o7.bw(this.gm);
  this.gm = ((1 + this.gm) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  g5: 1,
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
$p.bv = (function() {
  return 2;
});
$p.bw = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.u = (function() {
  return (((("(" + this.S) + ",") + this.R) + ")");
});
$p.bx = (function() {
  return "Tuple2";
});
$p.cF = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().fa(this, (-116390334), true);
});
$p.p = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().l(this.S, x$1.S) && $m_sr_BoxesRunTime$().l(this.R, x$1.R))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bI)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bI: 1,
  g6: 1,
  P: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.ft = null;
  this.fu = null;
  this.fv = null;
  this.ft = _1;
  this.fu = _2;
  this.fv = _3;
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
$p.bv = (function() {
  return 3;
});
$p.bw = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().fa(this, (-192629203), true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().l(this.ft, x$0.ft) && $m_sr_BoxesRunTime$().l(this.fu, x$0.fu)) && $m_sr_BoxesRunTime$().l(this.fv, x$0.fv))));
});
$p.bx = (function() {
  return "Tuple3";
});
$p.u = (function() {
  return (((((("(" + this.ft) + ",") + this.fu) + ",") + this.fv) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bJ)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  bJ: 1,
  d: 1,
  P: 1,
  g7: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.eQ = null;
  this.eR = null;
  this.eS = null;
  this.eT = null;
  this.eQ = _1;
  this.eR = _2;
  this.eS = _3;
  this.eT = _4;
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
$p.bv = (function() {
  return 4;
});
$p.bw = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().fa(this, (-1542739752), true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().l(this.eQ, x$0.eQ) && $m_sr_BoxesRunTime$().l(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().l(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().l(this.eT, x$0.eT))));
});
$p.bx = (function() {
  return "Tuple4";
});
$p.u = (function() {
  return (((((((("(" + this.eQ) + ",") + this.eR) + ",") + this.eS) + ",") + this.eT) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bK)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  bK: 1,
  d: 1,
  P: 1,
  g8: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.fw = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  gi: 1,
  gh: 1,
  a: 1,
  G: 1,
  a0: 1
}));
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.az().ab($ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), $thiz, f));
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
$p.tS = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.s = (function() {
  return 0;
});
$p.f = (function() {
  this.tS();
});
$p.g7 = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  gn: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.oa = null;
  this.gp = false;
  this.oa = a$2;
  this.gp = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.j = (function() {
  return (!this.gp);
});
$p.f = (function() {
  if (this.gp) {
    return $m_sc_Iterator$().J.f();
  } else {
    this.gp = true;
    return this.oa;
  }
});
$p.g7 = (function(from, until) {
  return (((this.gp || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().J : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  go: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(f$8, outer) {
  this.od = null;
  this.of = null;
  this.hI = false;
  this.oe = null;
  this.jF = null;
  this.od = f$8;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jF = outer;
  this.of = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.hI = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.j = (function() {
  while (true) {
    if (this.hI) {
      return true;
    } else if (this.jF.j()) {
      var a = this.jF.f();
      if ((!this.of.i4(this.od.e(a)))) {
        continue;
      }
      this.oe = a;
      this.hI = true;
      return true;
    } else {
      return false;
    }
  }
});
$p.f = (function() {
  if (this.j()) {
    this.hI = false;
    return this.oe;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  gr: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(f$9, outer) {
  this.og = null;
  this.hJ = null;
  this.og = f$9;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.hJ = outer;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.s = (function() {
  return this.hJ.s();
});
$p.j = (function() {
  return this.hJ.j();
});
$p.f = (function() {
  return this.og.e(this.hJ.f());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  gs: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.bQ instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.bQ;
      $thiz.bQ = c.bQ;
      $thiz.e8 = c.e8;
      if ((c.cm !== null)) {
        if (($thiz.cl === null)) {
          $thiz.cl = c.cl;
        }
        var x$proxy10 = c.cl;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().cE();
        }
        x$proxy10.gq = $thiz.cm;
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
      $thiz.bQ = $thiz.cm.tf();
      if (($thiz.cl === $thiz.cm)) {
        var x$proxy12 = $thiz.cl;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().cE();
        }
        $thiz.cl = x$proxy12.gq;
      }
      $thiz.cm = $thiz.cm.gq;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.e8) {
        return true;
      } else {
        if ((!(($thiz.bQ !== null) && $thiz.bQ.j()))) {
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
  this.bQ = null;
  this.cm = null;
  this.cl = null;
  this.e8 = false;
  this.bQ = from;
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
  } else if ((this.bQ !== null)) {
    if (this.bQ.j()) {
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
    var x$proxy13 = this.bQ;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().cE();
    }
    return x$proxy13.f();
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
$p.h0 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.cm === null)) {
    this.cm = c;
    this.cl = c;
  } else {
    var x$proxy14 = this.cl;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().cE();
    }
    x$proxy14.gq = c;
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
  if (($thiz.c4 < 0)) {
    return (-1);
  } else {
    var that = (($thiz.c4 - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.e9 = null;
  this.c4 = 0;
  this.dE = 0;
  this.e9 = underlying;
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
  var size = this.e9.s();
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
  return ((this.c4 !== 0) && this.e9.j());
});
$p.f = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.c4 > 0)) {
    this.c4 = ((this.c4 - 1) | 0);
    return this.e9.f();
  } else {
    return ((this.c4 < 0) ? this.e9.f() : $m_sc_Iterator$().J.f());
  }
});
$p.g7 = (function(from, until) {
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
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.e9, ((sum - 2147483647) | 0), rest))));
  } else {
    this.dE = sum;
    this.c4 = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  gu: 1,
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
    var scout = $thiz.kX();
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
  return ((x >= 0) && ($thiz.aY(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.pE(n);
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
  this.jG = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jG = outer.d();
}
$p = $c_sc_MapOps$$anon$3.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_MapOps$$anon$3;
/** @constructor */
function $h_sc_MapOps$$anon$3() {
}
$h_sc_MapOps$$anon$3.prototype = $p;
$p.j = (function() {
  return this.jG.j();
});
$p.f = (function() {
  return this.jG.f().R;
});
var $d_sc_MapOps$$anon$3 = new $TypeData().i($c_sc_MapOps$$anon$3, "scala.collection.MapOps$$anon$3", ({
  gw: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.gw = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.gw = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.j = (function() {
  return (!this.gw.c());
});
$p.f = (function() {
  var r = this.gw.q();
  this.gw = this.gw.w();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  gD: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.bq = 0;
  $thiz.fz = 0;
  $thiz.bF = (-1);
  return $thiz;
}
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.dd === null)) {
    $thiz.dd = new $ac_I(($m_sci_Node$().gE << 1));
    $thiz.fA = new ($d_sci_Node.r().C)($m_sci_Node$().gE);
  }
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.kB()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.ij()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.dF = node;
  $thiz.bq = 0;
  $thiz.fz = node.kP();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bF = ((1 + $thiz.bF) | 0);
  var cursorIndex = ($thiz.bF << 1);
  var lengthIndex = ((1 + ($thiz.bF << 1)) | 0);
  $thiz.fA.a[$thiz.bF] = node;
  $thiz.dd.a[cursorIndex] = 0;
  $thiz.dd.a[lengthIndex] = node.kM();
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
      var nextNode = $thiz.fA.a[$thiz.bF].kx(nodeCursor);
      if (nextNode.kB()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.ij()) {
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
  this.fz = 0;
  this.dF = null;
  this.bF = 0;
  this.dd = null;
  this.fA = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.j = (function() {
  return ((this.bq < this.fz) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.ed = (-1);
  $thiz.c5 = (-1);
  $thiz.gz = new $ac_I(((1 + $m_sci_Node$().gE) | 0));
  $thiz.gA = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().gE) | 0));
  return $thiz;
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz;
}
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.hO = node;
  $thiz.ed = ((node.kP() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.c5 = ((1 + $thiz.c5) | 0);
  $thiz.gA.a[$thiz.c5] = node;
  $thiz.gz.a[$thiz.c5] = ((node.kM() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.c5 = (($thiz.c5 - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.c5 >= 0)) {
    var nodeCursor = $thiz.gz.a[$thiz.c5];
    $thiz.gz.a[$thiz.c5] = ((nodeCursor - 1) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.gA.a[$thiz.c5].kx(nodeCursor));
    } else {
      var currNode = $thiz.gA.a[$thiz.c5];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.ij()) {
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
  this.hO = null;
  this.c5 = 0;
  this.gz = null;
  this.gA = null;
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
  return ($thiz.fB !== null);
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
  var dataIx = bm.h1(bitpos);
  var idx = (dataIx << 1);
  var src = bm.aA;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.v(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.v(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.bR, dataIx, originalHash);
  bm.X = (bm.X | bitpos);
  bm.aA = dst;
  bm.bR = dstHashes;
  bm.b9 = ((1 + bm.b9) | 0);
  bm.bE = ((bm.bE + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.fB = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.de = $thiz.de.pr();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.fB = null;
  this.de = null;
  this.de = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().o3, $m_s_Array$EmptyArrays$().jB, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.b5 = (function(size) {
});
$p.gb = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().ey(keyHash, shift);
    var bitpos = $m_sci_Node$().dY(mask);
    if (((mapNode.X & bitpos) !== 0)) {
      var index = $m_sci_Node$().cA(mapNode.X, mask, bitpos);
      var key0 = mapNode.dr(index);
      var key0UnimprovedHash = mapNode.fW(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().l(key0, key))) {
        mapNode.aA.a[((1 + (index << 1)) | 0)] = value;
        return (void 0);
      } else {
        var value0 = mapNode.cy(index);
        var key0Hash = $m_sc_Hashing$().cz(key0UnimprovedHash);
        var subNodeNew = mapNode.kL(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.tM(bitpos, key0Hash, subNodeNew);
        return (void 0);
      }
    } else if (((mapNode.a5 & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().cA(mapNode.a5, mask, bitpos);
      var subNode = mapNode.cT(index$2);
      var beforeSize = subNode.aZ();
      var beforeHash = subNode.es();
      this.gb(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.b9 = ((mapNode.b9 + ((subNode.aZ() - beforeSize) | 0)) | 0);
      mapNode.bE = ((mapNode.bE + ((subNode.es() - beforeHash) | 0)) | 0);
      return (void 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
      return (void 0);
    }
  }
  if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.fX(key);
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
$p.kS = (function() {
  if ((this.de.b9 === 0)) {
    return $m_sci_HashMap$().gB;
  } else if ((this.fB !== null)) {
    return this.fB;
  } else {
    this.fB = new $c_sci_HashMap(this.de);
    return this.fB;
  }
});
$p.pd = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().E(elem.S);
  var im = $m_sc_Hashing$().cz(h);
  this.gb(this.de, elem.S, elem.R, h, im, 0);
  return this;
});
$p.f6 = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().E(key);
  this.gb(this.de, key, value, originalHash, $m_sc_Hashing$().cz(originalHash), 0);
  return this;
});
$p.k6 = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(xs, this);
  } else if ((xs instanceof $c_scm_HashMap)) {
    var iter = xs.qg();
    while (iter.j()) {
      var next = iter.f();
      var improvedHash = next.dl;
      var originalHash = (improvedHash ^ ((improvedHash >>> 16) | 0));
      var hash = $m_sc_Hashing$().cz(originalHash);
      this.gb(this.de, next.en, next.bU, originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.pI();
    while (iter$2.j()) {
      var next$2 = iter$2.f();
      var originalHash$2 = xs.vf(next$2.pZ());
      var hash$2 = $m_sc_Hashing$().cz(originalHash$2);
      this.gb(this.de, next$2.q8(), next$2.uU(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.cS(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => this.f6(key$2, value$2))));
  } else {
    var it = xs.d();
    while (it.j()) {
      this.pd(it.f());
    }
  }
  return this;
});
$p.ar = (function() {
  return this.kS();
});
$p.ad = (function(elem) {
  return this.pd(elem);
});
$p.b3 = (function(elems) {
  return this.k6(elems);
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  gO: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.fC = null;
  this.ow = null;
  this.si();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.b5 = (function(size) {
});
$p.si = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.ow = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kn()))));
  this.fC = deferred;
});
$p.uk = (function() {
  this.fC.kD(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().G)));
  return this.ow;
});
$p.rO = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.fC.kD(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kn())))));
  })));
  this.fC = deferred;
  return this;
});
$p.rC = (function(xs) {
  if ((xs.s() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.fC.kD(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().kT(xs.d(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kn()))))));
    this.fC = deferred;
  }
  return this;
});
$p.ar = (function() {
  return this.uk();
});
$p.ad = (function(elem) {
  return this.rO(elem);
});
$p.b3 = (function(elems) {
  return this.rC(elems);
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  gV: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.fD = null;
  this.fD = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.j = (function() {
  return (!($p_sci_LazyList__evaluated__sci_LazyList(this.fD) === $m_sci_LazyList$().G));
});
$p.f = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this.fD) === $m_sci_LazyList$().G)) {
    return $m_sc_Iterator$().J.f();
  } else {
    var res = this.fD.q();
    this.fD = this.fD.au();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  gX: 1,
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
  return $m_sci_Nil$().iw(elems);
});
$p.aq = (function() {
  return new $c_scm_ListBuffer();
});
$p.ab = (function(source) {
  return $m_sci_Nil$().iw(source);
});
$p.bP = (function() {
  return $m_sci_Nil$();
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  h0: 1,
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
  $thiz.eZ = outer;
  $thiz.dJ = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.dJ = 0;
  this.eZ = null;
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
      var result = this.bZ(this.eZ.co, this.eZ.dH);
      break matchResult5;
    }
    if ((x23 === 1)) {
      var result = this.bZ(this.eZ.cp, this.eZ.dI);
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
      var result = this.bZ(this.dK.c6, this.dK.dg);
      break;
    }
    case 1: {
      var result = this.bZ(this.dK.c7, this.dK.dh);
      break;
    }
    case 2: {
      var result = this.bZ(this.dK.c8, this.dK.di);
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
      var result = this.bZ(this.cL.bG, this.cL.cq);
      break;
    }
    case 1: {
      var result = this.bZ(this.cL.bH, this.cL.cr);
      break;
    }
    case 2: {
      var result = this.bZ(this.cL.bI, this.cL.cs);
      break;
    }
    case 3: {
      var result = this.bZ(this.cL.bJ, this.cL.ct);
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
  this.gC = false;
  this.f0 = null;
  this.dN = $m_sci_Map$EmptyMap$();
  this.gC = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.b5 = (function(size) {
});
$p.qw = (function() {
  return (this.gC ? this.f0.kS() : this.dN);
});
$p.rM = (function(key, value) {
  if (this.gC) {
    this.f0.f6(key, value);
  } else if ((this.dN.aZ() < 4)) {
    this.dN = this.dN.eD(key, value);
  } else if (this.dN.bO(key)) {
    this.dN = this.dN.eD(key, value);
  } else {
    this.gC = true;
    if ((this.f0 === null)) {
      this.f0 = new $c_sci_HashMapBuilder();
    }
    this.dN.sg(this.f0);
    this.f0.f6(key, value);
  }
  return this;
});
$p.p7 = (function(xs) {
  return (this.gC ? (this.f0.k6(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.ar = (function() {
  return this.qw();
});
$p.ad = (function(elem) {
  return this.rM(elem.S, elem.R);
});
$p.b3 = (function(elems) {
  return this.p7(elems);
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  ha: 1,
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
$p.fT = (function(it) {
  return ($is_sci_Seq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.ie.call(this, it));
});
$p.ie = (function(it) {
  return this.fT(it);
});
$p.ab = (function(source) {
  return this.fT(source);
});
var $d_sci_Seq$ = new $TypeData().i($c_sci_Seq$, "scala.collection.immutable.Seq$", ({
  hi: 1,
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
  this.oA = 0;
  this.oB = null;
  $n_sci_Vector$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().q5($m_jl_System$SystemProperties$().kz("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 250;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.oA = $x_1;
  this.oB = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.dX = (function(elems) {
  return this.ku(elems);
});
$p.ku = (function(it) {
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
          var x = it.ap().aJ();
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
      return new $c_sci_VectorBuilder().p8(it).qx();
    }
  }
});
$p.bP = (function() {
  return $m_sci_Vector0$();
});
$p.ab = (function(source) {
  return this.ku(source);
});
$p.aq = (function() {
  return new $c_sci_VectorBuilder();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  hp: 1,
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
    a = $thiz.aT;
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
        src$1.v(i$2, dest$1, 0, length$1);
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
        src$2.v(i$3, dest$2, 0, length$2);
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
        src$3.v(i$4, dest$3, 0, length$3);
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
        src$4.v(i$5, dest$4, 0, length$4);
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
        src$5.v(i$6, dest$5, 0, length$5);
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
  $thiz.hQ = false;
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
      var a = (31 & ((((1024 - $thiz.B) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.B >>> 5) | 0));
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
      slice.v(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.T;
        slice.v(copy1$3, dest$5, 0, copy2$3);
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
      var dest$8 = $thiz.aT;
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
      $m_sci_VectorStatics$().kp(((x37 - 2) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((data$3) => {
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
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.Y) + ", a2=") + $thiz.H) + ", a3=") + $thiz.M) + ", a4=") + $thiz.T) + ", a5=") + $thiz.a3) + ", a6=") + $thiz.aT) + ", depth=") + $thiz.O));
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
      $thiz.aT = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.aT.a[0] = $thiz.a3;
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
    $thiz.aT.a[((idx >>> 25) | 0)] = $thiz.a3;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.aT = null;
  this.a3 = null;
  this.T = null;
  this.M = null;
  this.H = null;
  this.Y = null;
  this.N = 0;
  this.B = 0;
  this.K = 0;
  this.hQ = false;
  this.O = 0;
  this.Y = new $ac_O(32);
  this.N = 0;
  this.B = 0;
  this.K = 0;
  this.hQ = false;
  this.O = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.b5 = (function(size) {
});
$p.tj = (function(v) {
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
      var d2 = v.bA;
      var a$1 = v.k;
      this.Y = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().ae(a$1, 0, 32));
      this.O = 2;
      this.K = ((32 - v.bT) | 0);
      var i$1 = ((v.m + this.K) | 0);
      this.N = (31 & i$1);
      this.B = ((i$1 - this.N) | 0);
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
      this.Y = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().ae(a$2, 0, 32));
      this.O = 3;
      this.K = ((1024 - v.bs) | 0);
      var i$2 = ((v.m + this.K) | 0);
      this.N = (31 & i$2);
      this.B = ((i$2 - this.N) | 0);
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
      var d4 = v.aL;
      var s3 = v.aN;
      var s2$2 = v.aM;
      var a$3 = v.k;
      this.Y = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().ae(a$3, 0, 32));
      this.O = 4;
      this.K = ((32768 - v.b2) | 0);
      var i$3 = ((v.m + this.K) | 0);
      this.N = (31 & i$3);
      this.B = ((i$3 - this.N) | 0);
      this.T = new ($d_O.r().r().r().r().C)(32);
      this.T.a[0] = $m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn(v.h, v.bk), v.bl);
      var dest$2 = this.T;
      var length$2 = d4.a.length;
      d4.v(0, dest$2, 1, length$2);
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
      this.K = ((1048576 - v.aE) | 0);
      var i$4 = ((v.m + this.K) | 0);
      this.N = (31 & i$4);
      this.B = ((i$4 - this.N) | 0);
      this.a3 = new ($d_O.r().r().r().r().r().C)(32);
      this.a3.a[0] = $m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn(v.h, v.aQ), v.aR), v.aS);
      var dest$3 = this.a3;
      var length$3 = d5.a.length;
      d5.v(0, dest$3, 1, length$3);
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
      this.aT = new ($d_O.r().r().r().r().r().r().C)(64);
      this.aT.a[0] = $m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn($m_sci_VectorStatics$().dn(v.h, v.aF), v.aG), v.aH), v.aI);
      var dest$4 = this.aT;
      var length$4 = d6.a.length;
      d6.v(0, dest$4, 1, length$4);
      this.a3 = $m_ju_Arrays$().W(s5, 32);
      this.T = $m_ju_Arrays$().W(s4$2, 32);
      this.M = $m_ju_Arrays$().W(s3$3, 32);
      this.H = $m_ju_Arrays$().W(s2$4, 32);
      this.aT.a[((1 + d6.a.length) | 0)] = this.a3;
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
$p.rP = (function(elem) {
  if ((this.N === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.Y.a[this.N] = elem;
  this.N = ((1 + this.N) | 0);
  return this;
});
$p.p8 = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.N === 0) && (this.B === 0)) && (!this.hQ)) ? this.tj(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.qx = (function() {
  if (this.hQ) {
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
    var data$5 = $m_ju_Arrays$().ae(this.aT, 1, i6);
    var a$11 = this.aT.a[0];
    var prefix5 = $m_ju_Arrays$().ae(a$11, 1, a$11.a.length);
    var a$12 = this.aT.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().ae(a$12, 1, a$12.a.length);
    var a$13 = this.aT.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().ae(a$13, 1, a$13.a.length);
    var a$14 = this.aT.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().ae(a$14, 1, a$14.a.length);
    var prefix1$5 = this.aT.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().W(this.aT.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().W(this.aT.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().W(this.aT.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().W(this.aT.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.aT.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
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
  return (((((((("VectorBuilder(len1=" + this.N) + ", lenRest=") + this.B) + ", offset=") + this.K) + ", depth=") + this.O) + ")");
});
$p.ad = (function(elem) {
  return this.rP(elem);
});
$p.b3 = (function(elems) {
  return this.p8(elems);
});
$p.ar = (function() {
  return this.qx();
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  hx: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.oD = null;
  $n_scm_ArrayBuffer$ = this;
  this.oD = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.dX = (function(elems) {
  return this.pS(elems);
});
$p.pS = (function(coll) {
  var k = coll.s();
  if ((k >= 0)) {
    var array = this.qC(this.oD, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bm(array, 0, 2147483647) : coll.d().bm(array, 0, 2147483647));
    if ((actual !== k)) {
      throw $ct_jl_IllegalStateException__T__(new $c_jl_IllegalStateException(), ((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).p9(coll);
  }
});
$p.aq = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.uj = (function(arrayLen, targetLen) {
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
$p.qC = (function(array, curSize, targetSize) {
  var newLen = this.uj(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.v(0, res, 0, curSize);
    return res;
  }
});
$p.ab = (function(source) {
  return this.pS(source);
});
$p.bP = (function() {
  return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  hD: 1,
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
$p.b5 = (function(size) {
  this.em.b5(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  hE: 1,
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
  hK: 1,
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
  $thiz.fI = outer;
  $thiz.dR = 0;
  $thiz.dk = null;
  $thiz.fJ = outer.P.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashMap$HashMapIterator() {
  this.dR = 0;
  this.dk = null;
  this.fJ = 0;
  this.fI = null;
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
    while ((this.dR < this.fJ)) {
      var n = this.fI.P.a[this.dR];
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
    var r = this.ic(x$proxy14);
    var x$proxy15 = this.dk;
    if ((x$proxy15 === null)) {
      $m_sr_Scala3RunTime$().cE();
    }
    this.dk = x$proxy15.aV;
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
$p.b5 = (function(size) {
  this.em.b5(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  i0: 1,
  ba: 1,
  H: 1,
  J: 1,
  N: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.gI = outer;
  $thiz.ep = 0;
  $thiz.dS = null;
  $thiz.gJ = outer.bf.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.ep = 0;
  this.dS = null;
  this.gJ = 0;
  this.gI = null;
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
    while ((this.ep < this.gJ)) {
      var n = this.gI.bf.a[this.ep];
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
    var r = this.ko(x$proxy10);
    var x$proxy11 = this.dS;
    if ((x$proxy11 === null)) {
      $m_sr_Scala3RunTime$().cE();
    }
    this.dS = x$proxy11.bg;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.gK = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.gK = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.b3 = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.b5 = (function(size) {
});
$p.ar = (function() {
  return this.gK;
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
  i3: 1,
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
  return new $c_scm_ListBuffer().iy(elems);
});
$p.aq = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.ab = (function(source) {
  return new $c_scm_ListBuffer().iy(source);
});
$p.bP = (function() {
  return new $c_scm_ListBuffer();
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  i7: 1,
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
  this.jZ = null;
  this.oN = null;
  this.oM = 0;
  this.jZ = underlying;
  this.oN = mutationCount;
  this.oM = (mutationCount.I() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.j = (function() {
  $m_scm_MutationTracker$().kb(this.oM, (this.oN.I() | 0), "mutation occurred during iteration");
  return this.jZ.j();
});
$p.f = (function() {
  return this.jZ.f();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  ib: 1,
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
    return ((x !== null) && x.p($thiz));
  } else {
    return false;
  }
}
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.aJ();
    var x$3 = x.aJ();
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
  this.oV = null;
  this.gM = 0;
  this.oU = 0;
  this.oV = x$1;
  this.gM = 0;
  this.oU = x$1.bv();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.j = (function() {
  return (this.gM < this.oU);
});
$p.f = (function() {
  var result = this.oV.bw(this.gM);
  this.gM = ((1 + this.gM) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  jj: 1,
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
  return this.pT(elems);
});
$p.aq = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.pT = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).ar();
});
$p.ab = (function(source) {
  return this.pT(source);
});
$p.bP = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  jq: 1,
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
  return this.kv(elems);
});
$p.kv = (function(source) {
  return this.aq().b3(source).ar();
});
$p.aq = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), x$1$2$2.eq))), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []));
});
$p.ab = (function(source) {
  return this.kv(source);
});
$p.bP = (function() {
  return $ct_sjsr_WrappedVarArgs__(new $c_sjsr_WrappedVarArgs());
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  jD: 1,
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
  this.f4 = null;
  this.f4 = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().fa(this, (-1408943127), true);
});
$p.p = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_s_util_Failure)) {
    var x = this.f4;
    var x$2 = x$0.f4;
    return ((x === null) ? (x$2 === null) : x.p(x$2));
  } else {
    return false;
  }
});
$p.u = (function() {
  return $m_sr_ScalaRunTime$().k4(this);
});
$p.bv = (function() {
  return 1;
});
$p.bx = (function() {
  return "Failure";
});
$p.bw = (function(n) {
  if ((n === 0)) {
    return this.f4;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.q2 = (function() {
  return true;
});
$p.q3 = (function() {
  return false;
});
$p.y = (function() {
  var $x_1 = this.f4;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.a0 : $x_1);
});
$p.kI = (function(f) {
  return this;
});
$p.qt = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.bV(this.f4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => marker)));
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
$p.ce = (function(fa, fb) {
  return fa.e(this.f4);
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
  this.f5 = null;
  this.f5 = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().fa(this, (-1750213842), true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().l(this.f5, x$0.f5)));
});
$p.u = (function() {
  return $m_sr_ScalaRunTime$().k4(this);
});
$p.bv = (function() {
  return 1;
});
$p.bx = (function() {
  return "Success";
});
$p.bw = (function(n) {
  if ((n === 0)) {
    return this.f5;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.q2 = (function() {
  return false;
});
$p.q3 = (function() {
  return true;
});
$p.y = (function() {
  return this.f5;
});
$p.kI = (function(f) {
  try {
    return new $c_s_util_Success(f.e(this.f5));
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x2 = $m_s_util_control_NonFatal$().e0(e$2);
    if ((!x2.c())) {
      return new $c_s_util_Failure(x2.y());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.a0 : e$2);
  }
});
$p.qt = (function(pf) {
  return this;
});
$p.ce = (function(fa, fb) {
  try {
    return fb.e(this.f5);
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
    this.p1 = null;
    this.rA = null;
    this.p1 = label;
    this.rA = value;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, false, false);
  }
  tv(other) {
    return (this.p1 === other);
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
  jH: 1,
  g9: 1,
  ga: 1,
  gc: 1,
  gb: 1
}));
/** @constructor */
function $c_Lscorry_SummaryStatistics$$anon$1(maxCount$2) {
  this.k1 = 0;
  this.k1 = maxCount$2;
}
$p = $c_Lscorry_SummaryStatistics$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Lscorry_SummaryStatistics$$anon$1;
/** @constructor */
function $h_Lscorry_SummaryStatistics$$anon$1() {
}
$h_Lscorry_SummaryStatistics$$anon$1.prototype = $p;
$p.ts = (function(x) {
  if ((x !== null)) {
    if (((x.R | 0) === this.k1)) {
      return true;
    }
  }
  return false;
});
$p.s5 = (function(x, default$1) {
  if ((x !== null)) {
    var v = (+x.S);
    if (((x.R | 0) === this.k1)) {
      return v;
    }
  }
  return default$1.e(x);
});
$p.cf = (function(x) {
  return this.ts(x);
});
$p.bV = (function(x, default$1) {
  return this.s5(x, default$1);
});
var $d_Lscorry_SummaryStatistics$$anon$1 = new $TypeData().i($c_Lscorry_SummaryStatistics$$anon$1, "scorry.SummaryStatistics$$anon$1", ({
  jQ: 1,
  aP: 1,
  i: 1,
  j: 1,
  a: 1
}));
class $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError extends $c_Lcom_raquo_airstream_core_AirstreamError {
  constructor(error, cause) {
    super();
    this.gd = null;
    this.gc = null;
    this.gd = error;
    this.gc = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fV(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().fV(cause)), null, true, true);
    this.q0(cause);
  }
  cF() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().ka(this, (-889275714), null);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError)) {
      var x = this.gd;
      var x$2 = x$0.gd;
      if (((x === null) ? (x$2 === null) : x.p(x$2))) {
        var x$3 = this.gc;
        var x$4 = x$0.gc;
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
      return this.gd;
    }
    if ((n === 1)) {
      return this.gc;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  u() {
    return ((("ErrorHandlingError: " + this.gd) + "; cause: ") + this.gc);
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
    this.ge = null;
    this.ge = error;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("ObserverError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fV(error)), null, true, true);
  }
  cF() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().ka(this, (-889275714), null);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverError)) {
      var x = this.ge;
      var x$2 = x$0.ge;
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
      return this.ge;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  u() {
    return ("ObserverError: " + this.ge);
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
    this.gg = null;
    this.gf = null;
    this.gg = error;
    this.gf = cause;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ((("ObserverErrorHandlingError: " + $m_Lcom_raquo_airstream_core_AirstreamError$().fV(error)) + "; cause: ") + $m_Lcom_raquo_airstream_core_AirstreamError$().fV(cause)), null, true, true);
    this.q0(cause);
  }
  cF() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().ka(this, (-889275714), null);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$ObserverErrorHandlingError)) {
      var x = this.gg;
      var x$2 = x$0.gg;
      if (((x === null) ? (x$2 === null) : x.p(x$2))) {
        var x$3 = this.gf;
        var x$4 = x$0.gf;
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
      return this.gg;
    }
    if ((n === 1)) {
      return this.gf;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  u() {
    return ((("ObserverErrorHandlingError: " + this.gg) + "; cause: ") + this.gf);
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
    this.fi = null;
    this.fh = 0;
    this.fi = trx;
    this.fh = depth;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, (((("Transaction depth exceeded maxDepth = " + depth) + ": Execution of ") + trx) + " aborted. See `Transaction.maxDepth`."), null, true, true);
  }
  cF() {
    return new $c_s_Product$$anon$1(this);
  }
  x() {
    var acc = (-889275714);
    acc = $m_sr_Statics$().z(acc, $f_T__hashCode__I("TransactionDepthExceeded"));
    acc = $m_sr_Statics$().z(acc, $m_sr_Statics$().E(this.fi));
    acc = $m_sr_Statics$().z(acc, this.fh);
    return $m_sr_Statics$().aW(acc, 2);
  }
  p(x$0) {
    if ((this === x$0)) {
      return true;
    } else if ((x$0 instanceof $c_Lcom_raquo_airstream_core_AirstreamError$TransactionDepthExceeded)) {
      if ((this.fh === x$0.fh)) {
        var x = this.fi;
        var x$2 = x$0.fi;
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
      return this.fi;
    }
    if ((n === 1)) {
      return this.fh;
    }
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  u() {
    return ((("TransactionDepthExceeded: " + this.fi) + "; maxDepth: ") + this.fh);
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
  $thiz.l0();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V($thiz) {
  $thiz.lj = 1;
  $thiz.hr = 0;
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V($thiz) {
  $thiz.hr = ((1 + $thiz.hr) | 0);
  $thiz.hq.ld.I();
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V($thiz) {
  try {
    var $x_1 = new $c_s_util_Success(($thiz.hq.lb.I(), (void 0)));
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
  $x_1.qt(new $c_Lcom_raquo_airstream_custom_CustomSource$$anon$1($thiz));
}
function $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V($thiz) {
  $thiz.hq.lc.I();
}
/** @constructor */
function $c_Lcom_raquo_airstream_state_SourceVar(initial) {
  this.lR = null;
  this.iS = null;
  this.iR = null;
  this.iQ = null;
  this.eJ = null;
  this.lR = (void 0);
  $f_Lcom_raquo_airstream_state_Var__$init$__V(this);
  this.iR = initial;
  this.iQ = new $c_Lcom_raquo_airstream_state_VarSignal(this.iR, new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_Named__displayName__T(this))));
  this.eJ = this.iQ;
}
$p = $c_Lcom_raquo_airstream_state_SourceVar.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_SourceVar;
/** @constructor */
function $h_Lcom_raquo_airstream_state_SourceVar() {
}
$h_Lcom_raquo_airstream_state_SourceVar.prototype = $p;
$p.ez = (function() {
  return this.lR;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.ur = (function(value, transaction) {
  this.iR = value;
  $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this.iQ, value, transaction);
});
$p.fb = (function() {
  return this.eJ;
});
var $d_Lcom_raquo_airstream_state_SourceVar = new $TypeData().i($c_Lcom_raquo_airstream_state_SourceVar, "com.raquo.airstream.state.SourceVar", ({
  de: 1,
  ao: 1,
  aT: 1,
  aJ: 1,
  ab: 1,
  dg: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$31(key$31) {
  this.eN = null;
  this.eO = null;
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
  this.jc = null;
  this.nk = null;
  this.nj = null;
  this.ni = null;
  this.nh = null;
  this.nl = null;
  this.d4 = null;
  this.nl = tag;
  this.d4 = ref;
  this.jc = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveHtmlElement.prototype = $p;
$p.fN = (function() {
  return this.jc;
});
$p.pp = (function(x$1) {
  this.jc = x$1;
});
$p.cQ = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(parentNode, this, (void 0));
});
$p.cd = (function() {
  return this.nk;
});
$p.kc = (function(x$0) {
  this.nk = x$0;
});
$p.kf = (function() {
  return this.nj;
});
$p.fO = (function() {
  return this.ni;
});
$p.i8 = (function() {
  return this.nh;
});
$p.ke = (function(x$1) {
  this.ni = x$1;
});
$p.kd = (function(x$1) {
  this.nh = x$1;
});
$p.pq = (function(x$0) {
  this.nj = x$0;
});
$p.eF = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.eB = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.u = (function() {
  return (("ReactiveHtmlElement(" + ((this.d4 !== null) ? this.d4.outerHTML : ("tag=" + this.nl.jh))) + ")");
});
$p.L = (function() {
  return this.d4;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveHtmlElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveHtmlElement, "com.raquo.laminar.nodes.ReactiveHtmlElement", ({
  eC: 1,
  az: 1,
  a4: 1,
  aK: 1,
  aV: 1,
  bs: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement(tag, ref) {
  this.jd = null;
  this.np = null;
  this.no = null;
  this.nn = null;
  this.nm = null;
  this.nq = null;
  this.e5 = null;
  this.nq = tag;
  this.e5 = ref;
  this.jd = $m_s_None$();
  $f_Lcom_raquo_laminar_nodes_ParentNode__$init$__V(this);
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__$init$__V(this);
}
$p = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_laminar_nodes_ReactiveSvgElement;
/** @constructor */
function $h_Lcom_raquo_laminar_nodes_ReactiveSvgElement() {
}
$h_Lcom_raquo_laminar_nodes_ReactiveSvgElement.prototype = $p;
$p.fN = (function() {
  return this.jd;
});
$p.pp = (function(x$1) {
  this.jd = x$1;
});
$p.cQ = (function(parentNode) {
  $m_Lcom_raquo_laminar_nodes_ParentNode$().fL(parentNode, this, (void 0));
});
$p.cd = (function() {
  return this.np;
});
$p.kc = (function(x$0) {
  this.np = x$0;
});
$p.kf = (function() {
  return this.no;
});
$p.fO = (function() {
  return this.nn;
});
$p.i8 = (function() {
  return this.nm;
});
$p.ke = (function(x$1) {
  this.nn = x$1;
});
$p.kd = (function(x$1) {
  this.nm = x$1;
});
$p.pq = (function(x$0) {
  this.no = x$0;
});
$p.eF = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__willSetParent__s_Option__V(this, maybeNextParent);
});
$p.eB = (function(maybeNextParent) {
  $f_Lcom_raquo_laminar_nodes_ReactiveElement__setParent__s_Option__V(this, maybeNextParent);
});
$p.u = (function() {
  return (("ReactiveSvgElement(" + ((this.e5 !== null) ? this.e5.outerHTML : ("tag=" + this.nq.ji))) + ")");
});
$p.L = (function() {
  return this.e5;
});
var $d_Lcom_raquo_laminar_nodes_ReactiveSvgElement = new $TypeData().i($c_Lcom_raquo_laminar_nodes_ReactiveSvgElement, "com.raquo.laminar.nodes.ReactiveSvgElement", ({
  eD: 1,
  az: 1,
  a4: 1,
  aK: 1,
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
  return $m_jl_Double$().i9($thiz, o);
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
  return $m_jl_Double$().i9($thiz, o);
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
  return $m_RTLong$().kY($thiz, $thizhi);
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
  var str = $m_jl_Character$().kZ(ch);
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
  return $m_ju_regex_PatternCompiler$().sk(regex, 0).tA($thiz, limit);
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
  aW: 1,
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
    this.o0 = null;
    this.o2 = null;
    this.o1 = 0;
    this.o0 = desc;
    this.o2 = regex;
    this.o1 = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    var idx = this.o1;
    var re = this.o2;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.o0 + indexHint) + "\n") + re);
    return ((((idx >= 0) && (re !== null)) && (idx < re.length)) ? (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^") : base);
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().i($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  fT: 1,
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
$p.t5 = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.y = (function() {
  this.t5();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  g1: 1,
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
  return $m_s_util_hashing_MurmurHash3$().fa(this, 1323286827, true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().l(this.dB, x$0.dB)));
});
$p.u = (function() {
  return $m_sr_ScalaRunTime$().k4(this);
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
$p.s = (function() {
  return (-1);
});
$p.bW = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.fR = (function(p) {
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
$p.is = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord);
});
$p.ir = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord);
});
$p.cP = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.ga = (function() {
  return $m_sci_Seq$().fT(this);
});
$p.ch = (function() {
  return $f_sc_IterableOnceOps__reversed__sc_Iterable(this);
});
$p.q = (function() {
  return this.d().f();
});
$p.C = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f);
});
$p.h3 = (function(coll) {
  return this.az().ab(coll);
});
$p.dt = (function() {
  return this.az().aq();
});
$p.bC = (function() {
  return this.b8();
});
$p.f8 = (function(coll) {
  return this.h3(coll);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.hH = null;
  this.dC = 0;
  this.gn = 0;
  this.hH = xs;
  this.dC = 0;
  this.gn = $m_jl_reflect_Array$().aO(this.hH);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.s = (function() {
  return ((this.gn - this.dC) | 0);
});
$p.j = (function() {
  return (this.dC < this.gn);
});
$p.f = (function() {
  if ((this.dC >= $m_jl_reflect_Array$().aO(this.hH))) {
    $m_sc_Iterator$().J.f();
  }
  var r = $m_sr_ScalaRunTime$().ao(this.hH, this.dC);
  this.dC = ((1 + this.dC) | 0);
  return r;
});
$p.ev = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.dC + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.gn;
    } else {
      var a = this.gn;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.dC = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  gg: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.jC = self;
  $thiz.dD = 0;
  $thiz.bz = self.i();
  return $thiz;
}
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bz) ? $thiz.bz : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.jC = null;
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
    var r = this.jC.o(this.dD);
    this.dD = ((1 + this.dD) | 0);
    this.bz = ((this.bz - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
$p.ev = (function(n) {
  if ((n > 0)) {
    this.dD = ((this.dD + n) | 0);
    var b = ((this.bz - n) | 0);
    this.bz = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.g7 = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bz = ((b < 0) ? 0 : b);
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
  $thiz.jD = self;
  $thiz.bi = self.i();
  $thiz.eU = (($thiz.bi - 1) | 0);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
  this.jD = null;
  this.bi = 0;
  this.eU = 0;
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
    var r = this.jD.o(this.eU);
    this.eU = ((this.eU - 1) | 0);
    this.bi = ((this.bi - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
$p.g7 = (function(from, until) {
  if ((this.bi > 0)) {
    if ((this.bi <= from)) {
      this.bi = 0;
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.bi))) {
        this.bi = until;
      }
    } else {
      this.eU = ((this.eU - from) | 0);
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
  n: 1,
  b: 1,
  c: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.gK = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().J);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.rN = (function(elem) {
  this.gK = this.gK.h0(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.ad = (function(elem) {
  return this.rN(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  gp: 1,
  i2: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$7(pf$2, outer) {
  this.oc = null;
  this.ob = null;
  this.fx = 0;
  this.jE = null;
  this.oc = pf$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jE = outer;
  this.fx = 0;
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
  while ((this.fx === 0)) {
    if (this.jE.j()) {
      var x = this.jE.f();
      var v = this.oc.bV(x, this);
      if ((marker !== v)) {
        this.ob = v;
        this.fx = 1;
      }
    } else {
      this.fx = (-1);
    }
  }
  return (this.fx === 1);
});
$p.f = (function() {
  if (this.j()) {
    this.fx = 0;
    return this.ob;
  } else {
    return $m_sc_Iterator$().J.f();
  }
});
var $d_sc_Iterator$$anon$7 = new $TypeData().i($c_sc_Iterator$$anon$7, "scala.collection.Iterator$$anon$7", ({
  gq: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1,
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
  return $thiz.cU(x, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => default$1.e(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.d();
  while (it.j()) {
    var next = it.f();
    f.bN(next.S, next.R);
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
    if (seen.i4(f.e(next))) {
      builder.ad(next);
    }
  }
  return builder.ar();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.ew().aq();
  b.b3($thiz);
  b.b3(suffix);
  return b.ar();
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.ou)) {
    $thiz.ot = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.ou = true;
  }
  return $thiz.ot;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.hN = null;
  this.ot = null;
  this.ou = false;
  $n_sci_ArraySeq$ = this;
  this.hN = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.ks = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.fd($m_s_Array$().pR(it, tag)));
});
$p.it = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2) => this.fd($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2, evidence$1)))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.fd = (function(x) {
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
$p.pF = (function(evidence$1) {
  return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this);
});
$p.kr = (function(it, evidence$1) {
  return this.ks(it, evidence$1);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  gL: 1,
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
  this.fz = 0;
  this.dF = null;
  this.bF = 0;
  this.dd = null;
  this.fA = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_ChampBaseIterator__sci_Node__(this, hm$1.bj);
  while (this.j()) {
    var originalHash = this.dF.fW(this.bq);
    outer.gb(outer.de, this.dF.dr(this.bq), this.dF.cy(this.bq), originalHash, $m_sc_Hashing$().cz(originalHash), 0);
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
  gP: 1,
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
  this.eZ = null;
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
  h4: 1,
  ch: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_Map$Map2$$anon$3(outer) {
  this.dJ = 0;
  this.eZ = null;
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
  h5: 1,
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
$p.bZ = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  h6: 1,
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
$p.bZ = (function(k, v) {
  return v;
});
var $d_sci_Map$Map3$$anon$6 = new $TypeData().i($c_sci_Map$Map3$$anon$6, "scala.collection.immutable.Map$Map3$$anon$6", ({
  h7: 1,
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
$p.bZ = (function(k, v) {
  return new $c_T2(k, v);
});
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  h8: 1,
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
$p.bZ = (function(k, v) {
  return v;
});
var $d_sci_Map$Map4$$anon$9 = new $TypeData().i($c_sci_Map$Map4$$anon$9, "scala.collection.immutable.Map$Map4$$anon$9", ({
  h9: 1,
  cl: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.ed = 0;
  this.hO = null;
  this.c5 = 0;
  this.gz = null;
  this.gA = null;
  this.jK = 0;
  this.ox = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.jK = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().qV(this.jK, $m_sr_Statics$().E(this.ox), (-889275714));
});
$p.tU = (function() {
  if ((!this.j())) {
    $m_sc_Iterator$().J.f();
  }
  this.jK = this.hO.fW(this.ed);
  this.ox = this.hO.cy(this.ed);
  this.ed = ((this.ed - 1) | 0);
  return this;
});
$p.f = (function() {
  return this.tU();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  hb: 1,
  gM: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.bq = 0;
  this.fz = 0;
  this.dF = null;
  this.bF = 0;
  this.dd = null;
  this.fA = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.tT = (function() {
  if ((!this.j())) {
    $m_sc_Iterator$().J.f();
  }
  var payload = this.dF.pY(this.bq);
  this.bq = ((1 + this.bq) | 0);
  return payload;
});
$p.f = (function() {
  return this.tT();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  hc: 1,
  b3: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_sci_MapValueIterator(rootNode) {
  this.bq = 0;
  this.fz = 0;
  this.dF = null;
  this.bF = 0;
  this.dd = null;
  this.fA = null;
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
  var value = this.dF.cy(this.bq);
  this.bq = ((1 + this.bq) | 0);
  return value;
});
var $d_sci_MapValueIterator = new $TypeData().i($c_sci_MapValueIterator, "scala.collection.immutable.MapValueIterator", ({
  he: 1,
  b3: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.bS <= $thiz.aK)) {
    $m_sc_Iterator$().J.f();
  }
  $thiz.eg = ((1 + $thiz.eg) | 0);
  var slice = $thiz.jM.dv($thiz.eg);
  while ((slice.a.length === 0)) {
    $thiz.eg = ((1 + $thiz.eg) | 0);
    slice = $thiz.jM.dv($thiz.eg);
  }
  $thiz.gD = $thiz.f2;
  var count = $thiz.oz;
  var idx = $thiz.eg;
  var c = (((count + ((count >>> 31) | 0)) | 0) >> 1);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.ef = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x46 = $thiz.ef;
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
      $thiz.cM = slice;
      break;
    }
    case 5: {
      $thiz.f1 = slice;
      break;
    }
    case 6: {
      $thiz.jL = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x46);
    }
  }
  $thiz.f2 = (($thiz.gD + Math.imul(slice.a.length, (1 << Math.imul(5, (($thiz.ef - 1) | 0))))) | 0);
  if (($thiz.f2 > $thiz.dP)) {
    $thiz.f2 = $thiz.dP;
  }
  if (($thiz.ef > 1)) {
    $thiz.fE = (((1 << Math.imul(5, $thiz.ef)) - 1) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.aK - $thiz.bS) | 0) + $thiz.dP) | 0);
  if ((pos === $thiz.f2)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.ef > 1)) {
    var io = ((pos - $thiz.gD) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.fE ^ io));
    $thiz.fE = io;
  }
  $thiz.bS = (($thiz.bS - $thiz.aK) | 0);
  var a = $thiz.bb.a.length;
  var b = $thiz.bS;
  $thiz.dO = ((a < b) ? a : b);
  $thiz.aK = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bb = $thiz.bc.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bc = $thiz.bK.a[(31 & ((io >>> 10) | 0))];
    $thiz.bb = $thiz.bc.a[0];
  } else if ((xor < 1048576)) {
    $thiz.bK = $thiz.cM.a[(31 & ((io >>> 15) | 0))];
    $thiz.bc = $thiz.bK.a[0];
    $thiz.bb = $thiz.bc.a[0];
  } else if ((xor < 33554432)) {
    $thiz.cM = $thiz.f1.a[(31 & ((io >>> 20) | 0))];
    $thiz.bK = $thiz.cM.a[0];
    $thiz.bc = $thiz.bK.a[0];
    $thiz.bb = $thiz.bc.a[0];
  } else {
    $thiz.f1 = $thiz.jL.a[((io >>> 25) | 0)];
    $thiz.cM = $thiz.f1.a[0];
    $thiz.bK = $thiz.cM.a[0];
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
    $thiz.bK = $thiz.cM.a[(31 & ((io >>> 15) | 0))];
    $thiz.bc = $thiz.bK.a[(31 & ((io >>> 10) | 0))];
    $thiz.bb = $thiz.bc.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.cM = $thiz.f1.a[(31 & ((io >>> 20) | 0))];
    $thiz.bK = $thiz.cM.a[(31 & ((io >>> 15) | 0))];
    $thiz.bc = $thiz.bK.a[(31 & ((io >>> 10) | 0))];
    $thiz.bb = $thiz.bc.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.f1 = $thiz.jL.a[((io >>> 25) | 0)];
    $thiz.cM = $thiz.f1.a[(31 & ((io >>> 20) | 0))];
    $thiz.bK = $thiz.cM.a[(31 & ((io >>> 15) | 0))];
    $thiz.bc = $thiz.bK.a[(31 & ((io >>> 10) | 0))];
    $thiz.bb = $thiz.bc.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.jM = null;
  this.dP = 0;
  this.oz = 0;
  this.bb = null;
  this.bc = null;
  this.bK = null;
  this.cM = null;
  this.f1 = null;
  this.jL = null;
  this.dO = 0;
  this.aK = 0;
  this.fE = 0;
  this.bS = 0;
  this.eg = 0;
  this.ef = 0;
  this.gD = 0;
  this.f2 = 0;
  this.jM = v;
  this.dP = totalLength;
  this.oz = sliceCount;
  this.bb = v.h;
  this.dO = this.bb.a.length;
  this.aK = 0;
  this.fE = 0;
  this.bS = this.dP;
  this.eg = 0;
  this.ef = 1;
  this.gD = 0;
  this.f2 = this.dO;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.s = (function() {
  return ((this.bS - this.aK) | 0);
});
$p.j = (function() {
  return (this.bS > this.aK);
});
$p.f = (function() {
  if ((this.aK === this.dO)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.bb.a[this.aK];
  this.aK = ((1 + this.aK) | 0);
  return r;
});
$p.ev = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.aK - this.bS) | 0) + this.dP) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.dP;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.dP)) {
      this.aK = 0;
      this.bS = 0;
      this.dO = 0;
    } else {
      while ((newpos >= this.f2)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.gD) | 0);
      if ((this.ef > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.fE ^ io));
        this.fE = io;
      }
      this.dO = this.bb.a.length;
      this.aK = (31 & io);
      this.bS = ((this.aK + ((this.dP - newpos) | 0)) | 0);
      if ((this.dO > this.bS)) {
        this.dO = this.bS;
      }
    }
  }
  return this;
});
$p.bm = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().aO(xs);
  var srcLen = ((this.bS - this.aK) | 0);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? xsLen : ((xsLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var total$1 = ((total < 0) ? 0 : total);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total$1)) {
    if ((this.aK === this.dO)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total$1 - copied) | 0);
    var b = ((this.bb.a.length - this.aK) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.bb;
      var srcPos = this.aK;
      var destPos = ((start + copied) | 0);
      src.v(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().et(this.bb, this.aK, xs, ((start + copied) | 0), count);
    }
    this.aK = ((this.aK + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total$1;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  hf: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1,
  C: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.jQ = 0;
  $thiz.oE = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.jQ = 0;
  this.oE = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.b5 = (function(size) {
  if ((this.jQ < size)) {
    this.ui(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.jT = null;
  this.jS = null;
  $n_scm_ArraySeq$ = this;
  this.jT = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.jS = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.sX = (function(it, evidence$1) {
  return this.iq($m_s_Array$().pR(it, evidence$1));
});
$p.it = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => this.iq(x$2))), new $c_scm_ArrayBuilder$generic(evidence$1.aJ()));
});
$p.iq = (function(x) {
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
$p.pF = (function(evidence$1) {
  return this.jS;
});
$p.kr = (function(it, evidence$1) {
  return this.sX(it, evidence$1);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  hJ: 1,
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
  this.fJ = 0;
  this.fI = null;
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
$p.ic = (function(nd) {
  return new $c_T2(nd.en, nd.bU);
});
var $d_scm_HashMap$$anon$1 = new $TypeData().i($c_scm_HashMap$$anon$1, "scala.collection.mutable.HashMap$$anon$1", ({
  hR: 1,
  aM: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$3(outer) {
  this.dR = 0;
  this.dk = null;
  this.fJ = 0;
  this.fI = null;
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
$p.ic = (function(nd) {
  return nd.bU;
});
var $d_scm_HashMap$$anon$3 = new $TypeData().i($c_scm_HashMap$$anon$3, "scala.collection.mutable.HashMap$$anon$3", ({
  hS: 1,
  aM: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$4(outer) {
  this.dR = 0;
  this.dk = null;
  this.fJ = 0;
  this.fI = null;
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
$p.ic = (function(nd) {
  return nd;
});
var $d_scm_HashMap$$anon$4 = new $TypeData().i($c_scm_HashMap$$anon$4, "scala.collection.mutable.HashMap$$anon$4", ({
  hT: 1,
  aM: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$5(outer) {
  this.dR = 0;
  this.dk = null;
  this.fJ = 0;
  this.fI = null;
  this.jV = 0;
  this.rl = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.rl = outer;
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
  this.jV = 0;
}
$p = $c_scm_HashMap$$anon$5.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$5;
/** @constructor */
function $h_scm_HashMap$$anon$5() {
}
$h_scm_HashMap$$anon$5.prototype = $p;
$p.x = (function() {
  return this.jV;
});
$p.ic = (function(nd) {
  var $x_1 = $m_s_util_hashing_MurmurHash3$();
  var improvedHash = nd.dl;
  this.jV = $x_1.cG((improvedHash ^ ((improvedHash >>> 16) | 0)), $m_sr_Statics$().E(nd.bU));
  return this;
});
var $d_scm_HashMap$$anon$5 = new $TypeData().i($c_scm_HashMap$$anon$5, "scala.collection.mutable.HashMap$$anon$5", ({
  hU: 1,
  aM: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$1(outer) {
  this.ep = 0;
  this.dS = null;
  this.gJ = 0;
  this.gI = null;
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
$p.ko = (function(nd) {
  return nd.fK;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  hX: 1,
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
  this.gJ = 0;
  this.gI = null;
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
$p.ko = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  hY: 1,
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
  this.gJ = 0;
  this.gI = null;
  this.jY = 0;
  this.oL = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.oL = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.jY = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.x = (function() {
  return this.jY;
});
$p.ko = (function(nd) {
  this.jY = $p_scm_HashSet__improveHash__I__I(this.oL, nd.dT);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  hZ: 1,
  bb: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1
}));
/** @constructor */
function $c_s_math_Ordering$$anon$1(f$4, outer) {
  this.k0 = null;
  this.oO = null;
  this.k0 = f$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.oO = outer;
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
  return this.oO.Z(this.k0.e(x), this.k0.e(y));
});
var $d_s_math_Ordering$$anon$1 = new $TypeData().i($c_s_math_Ordering$$anon$1, "scala.math.Ordering$$anon$1", ({
  io: 1,
  F: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1
}));
function $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z($thiz, other) {
  return (other === $thiz.oP);
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
  return ((other === null) ? (x$2 === null) : other.p(x$2));
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
$p.p = (function(obj) {
  if ((obj !== null)) {
    if ((this === obj)) {
      return true;
    }
  }
  if ((obj instanceof $c_s_math_Ordering$Reverse)) {
    var x = this.cO;
    var x$2 = obj.cO;
    return ((x === null) ? (x$2 === null) : x.p(x$2));
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
  a8: 1,
  aa: 1,
  a9: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.gL = null;
  this.gL = runtimeClass;
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
  return $m_sr_Statics$().E(this.gL);
});
$p.u = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.gL);
});
$p.aJ = (function() {
  return this.gL;
});
$p.bu = (function(len) {
  return this.gL.A.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  iH: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  L: 1
}));
/** @constructor */
function $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$11(key$11) {
  this.eN = null;
  this.eO = null;
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
  this.eN = null;
  this.eO = null;
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
  this.eN = null;
  this.eO = null;
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
  this.eN = null;
  this.eO = null;
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
    this.nx = null;
    this.nx = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return (("Flags = '" + this.nx) + "'");
  }
}
var $d_ju_DuplicateFormatFlagsException = new $TypeData().i($c_ju_DuplicateFormatFlagsException, "java.util.DuplicateFormatFlagsException", ({
  fo: 1,
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
    this.nz = null;
    this.ny = 0;
    this.nz = f;
    this.ny = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return ((("Conversion = " + $cToS(this.ny)) + ", Flags = ") + this.nz);
  }
}
var $d_ju_FormatFlagsConversionMismatchException = new $TypeData().i($c_ju_FormatFlagsConversionMismatchException, "java.util.FormatFlagsConversionMismatchException", ({
  fp: 1,
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
    this.nD = null;
    this.nD = msg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return this.nD;
  }
}
var $d_ju_IllegalFormatArgumentIndexException = new $TypeData().i($c_ju_IllegalFormatArgumentIndexException, "java.util.IllegalFormatArgumentIndexException", ({
  fw: 1,
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
    this.nE = 0;
    this.nE = c;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    var i = this.nE;
    return ("Code point = 0x" + (i >>> 0.0).toString(16));
  }
}
var $d_ju_IllegalFormatCodePointException = new $TypeData().i($c_ju_IllegalFormatCodePointException, "java.util.IllegalFormatCodePointException", ({
  fx: 1,
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
    this.nG = 0;
    this.nF = null;
    this.nG = c;
    this.nF = arg;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return ((("" + $cToS(this.nG)) + " != ") + this.nF.A.N);
  }
}
var $d_ju_IllegalFormatConversionException = new $TypeData().i($c_ju_IllegalFormatConversionException, "java.util.IllegalFormatConversionException", ({
  fy: 1,
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
    this.nH = null;
    this.nH = f;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return (("Flags = '" + this.nH) + "'");
  }
}
var $d_ju_IllegalFormatFlagsException = new $TypeData().i($c_ju_IllegalFormatFlagsException, "java.util.IllegalFormatFlagsException", ({
  fz: 1,
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
    this.nI = 0;
    this.nI = p;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return ("" + this.nI);
  }
}
var $d_ju_IllegalFormatPrecisionException = new $TypeData().i($c_ju_IllegalFormatPrecisionException, "java.util.IllegalFormatPrecisionException", ({
  fA: 1,
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
    this.nJ = 0;
    this.nJ = w;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return ("" + this.nJ);
  }
}
var $d_ju_IllegalFormatWidthException = new $TypeData().i($c_ju_IllegalFormatWidthException, "java.util.IllegalFormatWidthException", ({
  fB: 1,
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
    this.nK = null;
    this.nK = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return (("Format specifier '" + this.nK) + "'");
  }
}
var $d_ju_MissingFormatArgumentException = new $TypeData().i($c_ju_MissingFormatArgumentException, "java.util.MissingFormatArgumentException", ({
  fC: 1,
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
    this.nL = null;
    this.nL = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return this.nL;
  }
}
var $d_ju_MissingFormatWidthException = new $TypeData().i($c_ju_MissingFormatWidthException, "java.util.MissingFormatWidthException", ({
  fD: 1,
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
    this.nM = null;
    this.nM = s;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  bt() {
    return (("Conversion = '" + this.nM) + "'");
  }
}
var $d_ju_UnknownFormatConversionException = new $TypeData().i($c_ju_UnknownFormatConversionException, "java.util.UnknownFormatConversionException", ({
  fF: 1,
  Z: 1,
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
  this.jQ = 0;
  this.oE = 0;
  this.fH = null;
  this.oF = false;
  this.jR = null;
  this.fH = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.oF = (elementClass === $d_C.l());
  this.jR = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.pc = (function(elem) {
  var unboxedElem = (this.oF ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().g6(this.fH) : elem));
  this.jR.push(unboxedElem);
  return this;
});
$p.rD = (function(xs) {
  var it = xs.d();
  while (it.j()) {
    this.pc(it.f());
  }
  return this;
});
$p.ui = (function(size) {
});
$p.ar = (function() {
  return $m_scm_ArrayBuilder$().g5(((this.fH === $d_V.l()) ? $d_jl_Void.l() : (((this.fH === $d_sr_Null$.l()) || (this.fH === $d_sr_Nothing$.l())) ? $d_O.l() : this.fH)), this.jR);
});
$p.u = (function() {
  return "ArrayBuilder.generic";
});
$p.ad = (function(elem) {
  return this.pc(elem);
});
$p.b3 = (function(elems) {
  return this.rD(elems);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  hI: 1,
  hG: 1,
  H: 1,
  J: 1,
  N: 1,
  ai: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.jC = null;
  this.dD = 0;
  this.bz = 0;
  this.oI = null;
  this.oH = 0;
  this.oI = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.oH = (mutationCount.I() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.j = (function() {
  $m_scm_MutationTracker$().kb(this.oH, (this.oI.I() | 0), "mutation occurred during iteration");
  return (this.bz > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  hN: 1,
  bP: 1,
  n: 1,
  b: 1,
  c: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(self, mutationCount) {
  this.jD = null;
  this.bi = 0;
  this.eU = 0;
  this.oK = null;
  this.oJ = 0;
  this.oK = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(this, self);
  this.oJ = (mutationCount.I() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedReverseIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = $p;
$p.j = (function() {
  $m_scm_MutationTracker$().kb(this.oJ, (this.oK.I() | 0), "mutation occurred during iteration");
  return (this.bi > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedReverseIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedReverseIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedReverseIterator", ({
  hO: 1,
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
  ip: 1,
  F: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iq: 1
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
  ir: 1,
  F: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  is: 1
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
  iu: 1,
  F: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iv: 1
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
  return $m_jl_Double$().i9((+x), (+y));
});
var $d_s_math_Ordering$DeprecatedDoubleOrdering$ = new $TypeData().i($c_s_math_Ordering$DeprecatedDoubleOrdering$, "scala.math.Ordering$DeprecatedDoubleOrdering$", ({
  iw: 1,
  F: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iy: 1
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
  iB: 1,
  F: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iC: 1
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
  iD: 1,
  F: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iE: 1
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
    return ((x$1 === 0) ? this.a0 : $m_sr_Statics$().to(x$1));
  }
  cF() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().fa(this, 1744042595, true);
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
  if ((!($thiz.kK() === (void 0)))) {
    $thiz.k3($m_Lcom_raquo_airstream_core_Signal$().qf());
  }
  $thiz.qd(newValue);
}
function $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try($thiz) {
  var x = $thiz.kK();
  if ((x === (void 0))) {
    $thiz.k3($m_Lcom_raquo_airstream_core_Signal$().qf());
    var nextValue = $thiz.ki();
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
  var isError = nextValue.q2();
  var elem = false;
  elem = false;
  $thiz.cX(false);
  var this$ = $thiz.dp();
  var index = 0;
  while ((index < (this$.length | 0))) {
    var observer = this$[index];
    index = ((1 + index) | 0);
    observer.g3(nextValue);
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
    observer$1.he(nextValue, transaction);
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
    nextValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
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
      observer.hb(nextValue);
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
    observer$1.iu(nextValue, transaction);
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
    observer.ha(nextError);
  }
  var this$$1 = $thiz.ds();
  var index$1 = 0;
  while ((index$1 < (this$$1.length | 0))) {
    var observer$1 = this$$1[index$1];
    index$1 = ((1 + index$1) | 0);
    observer$1.h9(nextError, transaction);
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
  if (($thiz.aY(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.dt();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.d();
    var different = false;
    while (it.j()) {
      var next = it.f();
      if (seen.i4(f.e(next))) {
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
  this.oP = null;
  $n_s_math_Ordering$Int$ = this;
  this.oP = new $c_s_math_Ordering$Reverse(this);
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
  iz: 1,
  F: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  iA: 1,
  it: 1
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
$p.aJ = (function() {
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
$p.aJ = (function() {
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
$p.aJ = (function() {
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
$p.aJ = (function() {
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
$p.aJ = (function() {
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
$p.aJ = (function() {
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
$p.aJ = (function() {
  return $d_J.l();
});
$p.bu = (function(len) {
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
$p.u = (function() {
  return this.dV;
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
$p.aJ = (function() {
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
$p.aJ = (function() {
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
$p.az = (function() {
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
    if (($thiz.aZ() === that.aZ())) {
      try {
        return $thiz.uL(that);
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
$p.aJ = (function() {
  return $d_O.l();
});
$p.bu = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  iI: 1,
  aO: 1,
  aN: 1,
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
  iK: 1,
  iJ: 1,
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
  iM: 1,
  iL: 1,
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
  iO: 1,
  iN: 1,
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
  iQ: 1,
  iP: 1,
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
  iS: 1,
  iR: 1,
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
$p.aJ = (function() {
  return $d_sr_Nothing$.l();
});
$p.bu = (function(len) {
  return new ($d_sr_Nothing$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  iX: 1,
  aO: 1,
  aN: 1,
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
$p.aJ = (function() {
  return $d_sr_Null$.l();
});
$p.bu = (function(len) {
  return new ($d_sr_Null$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  iY: 1,
  aO: 1,
  aN: 1,
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
$p.aJ = (function() {
  return $d_O.l();
});
$p.bu = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  iZ: 1,
  aO: 1,
  aN: 1,
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
  j1: 1,
  j0: 1,
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
  j3: 1,
  j2: 1,
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
  $f_Lcom_raquo_airstream_core_WritableObservable__addInternalObserver__Lcom_raquo_airstream_core_InternalObserver__Z__V($thiz.kO(), $thiz, false);
}
function $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V($thiz) {
  $f_Lcom_raquo_airstream_core_BaseObservable__removeInternalObserver__Lcom_raquo_airstream_core_InternalObserver__V($thiz.kO(), $thiz);
}
/** @constructor */
function $c_Lcom_raquo_airstream_custom_CustomStreamSource(makeConfig) {
  this.lh = null;
  this.lg = false;
  this.li = null;
  this.le = null;
  this.lf = null;
  this.lk = false;
  this.lj = 0;
  this.hr = 0;
  this.hq = null;
  this.lh = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_custom_CustomSource__$init$__V(this);
  this.hq = makeConfig.rY(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((value) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, value, _$1);
    })));
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err) => {
    new $c_Lcom_raquo_airstream_core_Transaction(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((err$2) => ((_$2) => {
      $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, err$2, _$2);
    }))(err)));
  })), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => this.hr)), new $c_sjsr_AnonFunction0_$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d((() => $f_Lcom_raquo_airstream_core_BaseObservable__isStarted__Z(this))));
}
$p = $c_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_custom_CustomStreamSource;
/** @constructor */
function $h_Lcom_raquo_airstream_custom_CustomStreamSource() {
}
$h_Lcom_raquo_airstream_custom_CustomStreamSource.prototype = $p;
$p.ez = (function() {
  return this.lh;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fY = (function() {
  return this.lg;
});
$p.eA = (function() {
  return this.li;
});
$p.cX = (function(x$1) {
  this.lg = x$1;
});
$p.g2 = (function(x$1) {
  this.li = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.h8 = (function(observer) {
});
$p.dp = (function() {
  return this.le;
});
$p.ds = (function() {
  return this.lf;
});
$p.hk = (function() {
  return this.lk;
});
$p.fg = (function(x$1) {
  this.lk = x$1;
});
$p.gY = (function(x$0) {
  this.le = x$0;
});
$p.gZ = (function(x$0) {
  this.lf = x$0;
});
$p.fc = (function() {
  return this.lj;
});
$p.hf = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onWillStart__V(this);
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStart__V(this);
});
$p.hd = (function() {
  $f_Lcom_raquo_airstream_custom_CustomSource__onStop__V(this);
});
$p.h6 = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.fb = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_custom_CustomStreamSource = new $TypeData().i($c_Lcom_raquo_airstream_custom_CustomStreamSource, "com.raquo.airstream.custom.CustomStreamSource", ({
  d4: 1,
  ao: 1,
  ab: 1,
  at: 1,
  au: 1,
  aS: 1,
  aQ: 1,
  av: 1,
  aU: 1,
  d0: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_state_VarSignal(initial, parentDisplayName) {
  this.lW = null;
  this.lV = false;
  this.lX = null;
  this.iT = 0;
  this.lT = null;
  this.lU = null;
  this.m0 = false;
  this.iU = null;
  this.lY = null;
  this.lZ = 0;
  this.lY = parentDisplayName;
  this.lW = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.iT = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.iU = (void 0);
  this.lZ = 1;
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V(this, initial);
}
$p = $c_Lcom_raquo_airstream_state_VarSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_state_VarSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_state_VarSignal() {
}
$h_Lcom_raquo_airstream_state_VarSignal.prototype = $p;
$p.ez = (function() {
  return this.lW;
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fY = (function() {
  return this.lV;
});
$p.eA = (function() {
  return this.lX;
});
$p.cX = (function(x$1) {
  this.lV = x$1;
});
$p.g2 = (function(x$1) {
  this.lX = x$1;
});
$p.hd = (function() {
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.k2 = (function() {
  return this.iT;
});
$p.k3 = (function(x$1) {
  this.iT = x$1;
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_core_Signal__onStart__V(this);
});
$p.h8 = (function(observer) {
  observer.g3($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.dp = (function() {
  return this.lT;
});
$p.ds = (function() {
  return this.lU;
});
$p.hk = (function() {
  return this.m0;
});
$p.fg = (function(x$1) {
  this.m0 = x$1;
});
$p.gY = (function(x$0) {
  this.lT = x$0;
});
$p.gZ = (function(x$0) {
  this.lU = x$0;
});
$p.kK = (function() {
  return this.iU;
});
$p.qd = (function(x$1) {
  this.iU = x$1;
});
$p.l0 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.fc = (function() {
  return this.lZ;
});
$p.ki = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.hf = (function() {
});
$p.eu = (function() {
  return (this.lY.I() + ".signal");
});
$p.h6 = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this, project, $m_s_None$());
});
$p.fb = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_state_VarSignal = new $TypeData().i($c_Lcom_raquo_airstream_state_VarSignal, "com.raquo.airstream.state.VarSignal", ({
  dj: 1,
  ao: 1,
  ab: 1,
  at: 1,
  au: 1,
  aT: 1,
  bj: 1,
  av: 1,
  bk: 1,
  df: 1
}));
/** @constructor */
function $c_sc_MapView$Values(underlying) {
  this.hK = null;
  this.hK = underlying;
}
$p = $c_sc_MapView$Values.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_MapView$Values;
/** @constructor */
function $h_sc_MapView$Values() {
}
$h_sc_MapView$Values.prototype = $p;
$p.d = (function() {
  return this.hK.eE();
});
$p.s = (function() {
  return this.hK.s();
});
$p.c = (function() {
  return this.hK.c();
});
var $d_sc_MapView$Values = new $TypeData().i($c_sc_MapView$Values, "scala.collection.MapView$Values", ({
  gz: 1,
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
      if (o.i7($thiz)) {
        return $thiz.g4(o);
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
  $thiz.fy = ord;
  $thiz.gv = underlying_;
  $thiz.jI = false;
  return $thiz;
}
function $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__($thiz, underlying, ord) {
  $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying, underlying.i(), ord);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Sorted() {
  this.d7 = 0;
  this.fy = null;
  this.gv = null;
  this.jI = false;
  this.ok = null;
  this.ol = false;
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
$p.ga = (function() {
  return $m_sci_Seq$().fT(this);
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
$p.aY = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.dt = (function() {
  return $m_sc_View$().aq();
});
$p.bC = (function() {
  return "SeqView";
});
$p.az = (function() {
  return $m_sc_View$();
});
$p.u = (function() {
  return $f_sc_View__toString__T(this);
});
$p.ix = (function() {
  if ((!this.ol)) {
    var len = this.d7;
    if ((len === 0)) {
      var res = $m_sci_Nil$();
    } else if ((len === 1)) {
      $m_sci_List$();
      var elems = $ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $c_sjsr_WrappedVarArgs(), [this.gv.q()]);
      var res = $m_sci_Nil$().iw(elems);
    } else {
      var arr = new $ac_O(len);
      this.gv.bm(arr, 0, 2147483647);
      $m_ju_Arrays$().g8(arr, this.fy);
      var res = $m_sci_ArraySeq$().fd(arr);
    }
    this.jI = true;
    this.gv = null;
    this.ok = res;
    this.ol = true;
  }
  return this.ok;
});
$p.qz = (function() {
  return (this.jI ? this.ix() : this.gv);
});
$p.o = (function(i) {
  return this.ix().o(i);
});
$p.i = (function() {
  return this.d7;
});
$p.d = (function() {
  return $m_sc_Iterator$().J.h0(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.ix().d())));
});
$p.s = (function() {
  return this.d7;
});
$p.c = (function() {
  return (this.d7 === 0);
});
$p.kU = (function(ord1) {
  var x$2 = this.fy;
  if (((ord1 === null) ? (x$2 === null) : ord1.p(x$2))) {
    return this;
  } else {
    return (ord1.cW(this.fy) ? new $c_sc_SeqView$Sorted$ReverseSorted(this) : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.qz(), this.d7, ord1));
  }
});
$p.b6 = (function(ord) {
  return this.kU(ord);
});
$p.C = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.f8 = (function(coll) {
  return $m_sc_View$().ig(coll);
});
var $d_sc_SeqView$Sorted = new $TypeData().i($c_sc_SeqView$Sorted, "scala.collection.SeqView$Sorted", ({
  gA: 1,
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
  if ((!$thiz.on)) {
    $thiz.om = $ct_sc_SeqView$Reverse__sc_SeqOps__(new $c_sc_SeqView$Reverse(), $thiz.cI.ix());
    $thiz.on = true;
  }
  return $thiz.om;
}
/** @constructor */
function $c_sc_SeqView$Sorted$ReverseSorted(outer) {
  this.om = null;
  this.on = false;
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
$p.ga = (function() {
  return $m_sci_Seq$().fT(this);
});
$p.q = (function() {
  return this.d().f();
});
$p.cc = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bn = (function() {
  return this.cI.d();
});
$p.aY = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.dt = (function() {
  return $m_sc_View$().aq();
});
$p.bC = (function() {
  return "SeqView";
});
$p.az = (function() {
  return $m_sc_View$();
});
$p.u = (function() {
  return $f_sc_View__toString__T(this);
});
$p.o = (function(i) {
  return $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).o(i);
});
$p.i = (function() {
  return this.cI.d7;
});
$p.d = (function() {
  return $m_sc_Iterator$().J.h0(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).d())));
});
$p.s = (function() {
  return this.cI.d7;
});
$p.c = (function() {
  return (this.cI.d7 === 0);
});
$p.kU = (function(ord1) {
  var x$2 = this.cI.fy;
  if (((ord1 === null) ? (x$2 === null) : ord1.p(x$2))) {
    return this.cI;
  } else {
    return (ord1.cW(this.cI.fy) ? this : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.cI.qz(), this.cI.d7, ord1));
  }
});
$p.b6 = (function(ord) {
  return this.kU(ord);
});
$p.C = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.f8 = (function(coll) {
  return $m_sc_View$().ig(coll);
});
var $d_sc_SeqView$Sorted$ReverseSorted = new $TypeData().i($c_sc_SeqView$Sorted$ReverseSorted, "scala.collection.SeqView$Sorted$ReverseSorted", ({
  gB: 1,
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
  this.op = null;
  this.op = it$3;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.d = (function() {
  return this.op.I();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
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
/** @constructor */
function $c_sc_View$Collect(underlying, pf) {
  this.or = null;
  this.oq = null;
  this.or = underlying;
  this.oq = pf;
}
$p = $c_sc_View$Collect.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Collect;
/** @constructor */
function $h_sc_View$Collect() {
}
$h_sc_View$Collect.prototype = $p;
$p.d = (function() {
  var this$1 = this.or.d();
  return new $c_sc_Iterator$$anon$7(this.oq, this$1);
});
var $d_sc_View$Collect = new $TypeData().i($c_sc_View$Collect, "scala.collection.View$Collect", ({
  gH: 1,
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
  this.hM = null;
  this.os = null;
  this.hM = underlying;
  this.os = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.d = (function() {
  var this$1 = this.hM.d();
  return new $c_sc_Iterator$$anon$8(this.os, this$1);
});
$p.s = (function() {
  return ((this.hM.s() === 0) ? 0 : (-1));
});
$p.c = (function() {
  return this.hM.c();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  gI: 1,
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
  $thiz.eX = underlying;
  $thiz.gx = f;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
  this.eX = null;
  this.gx = null;
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
$p.d = (function() {
  var this$1 = this.eX.d();
  return new $c_sc_Iterator$$anon$9(this.gx, this$1);
});
$p.s = (function() {
  return this.eX.s();
});
$p.c = (function() {
  return this.eX.c();
});
var $d_sc_View$Map = new $TypeData().i($c_sc_View$Map, "scala.collection.View$Map", ({
  aL: 1,
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
  return $m_jl_Double$().i9((+x), (+y));
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
$p.qs = (function(x, y) {
  return $f_s_math_Numeric$DoubleIsFractional__plus__D__D__D(this, (+x), (+y));
});
$p.qR = (function(x, y) {
  return $f_s_math_Numeric$DoubleIsFractional__times__D__D__D(this, (+x), (+y));
});
$p.ih = (function(x) {
  return x;
});
var $d_s_math_Numeric$DoubleIsFractional$ = new $TypeData().i($c_s_math_Numeric$DoubleIsFractional$, "scala.math.Numeric$DoubleIsFractional$", ({
  il: 1,
  F: 1,
  a: 1,
  a8: 1,
  aa: 1,
  a9: 1,
  ij: 1,
  ih: 1,
  ik: 1,
  ix: 1
}));
var $n_s_math_Numeric$DoubleIsFractional$;
function $m_s_math_Numeric$DoubleIsFractional$() {
  if ((!$n_s_math_Numeric$DoubleIsFractional$)) {
    $n_s_math_Numeric$DoubleIsFractional$ = new $c_s_math_Numeric$DoubleIsFractional$();
  }
  return $n_s_math_Numeric$DoubleIsFractional$;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V($thiz) {
  $thiz.iK = ($thiz.e1 !== null);
  $thiz.hs = (-1);
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V($thiz) {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V($thiz.e1);
  if ($thiz.iK) {
    var newParentLastUpdateId = $thiz.e1.k2();
    if ((newParentLastUpdateId !== $thiz.hs)) {
      $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, $thiz.ki(), newParentLastUpdateId);
    }
  }
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__updateCurrentValueFromParent__s_util_Try__I__V($thiz, nextValue, nextParentLastUpdateId) {
  $f_Lcom_raquo_airstream_core_WritableSignal__setCurrentValue__s_util_Try__V($thiz, nextValue);
  $thiz.hs = nextParentLastUpdateId;
}
function $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V($thiz, nextParentValue, transaction) {
  if ($thiz.iK) {
    $thiz.hs = $thiz.e1.k2();
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
$p.uL = (function(that) {
  return this.fR(that);
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
    if (($thiz.aZ() === o.aZ())) {
      try {
        return $thiz.fR(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((map$1) => ((kv$2) => $m_sr_BoxesRunTime$().l(map$1.cU(kv$2.S, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sc_Map$().oj.I()))), kv$2.R)))(o)));
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
  this.lp = null;
  this.lo = false;
  this.lq = null;
  this.ll = null;
  this.ln = null;
  this.ls = false;
  this.iH = null;
  this.lm = null;
  this.lr = 0;
  this.iH = parent;
  this.lm = fn;
  this.lp = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.lr = ((1 + parent.fc()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_CollectStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_CollectStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_CollectStream() {
}
$h_Lcom_raquo_airstream_misc_CollectStream.prototype = $p;
$p.ez = (function() {
  return this.lp;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fY = (function() {
  return this.lo;
});
$p.eA = (function() {
  return this.lq;
});
$p.cX = (function(x$1) {
  this.lo = x$1;
});
$p.g2 = (function(x$1) {
  this.lq = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.h8 = (function(observer) {
});
$p.dp = (function() {
  return this.ll;
});
$p.ds = (function() {
  return this.ln;
});
$p.hk = (function() {
  return this.ls;
});
$p.fg = (function(x$1) {
  this.ls = x$1;
});
$p.gY = (function(x$0) {
  this.ll = x$0;
});
$p.gZ = (function(x$0) {
  this.ln = x$0;
});
$p.hf = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.iH);
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.hd = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.he = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.fc = (function() {
  return this.lr;
});
$p.iu = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.lm.e(nextParentValue));
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
  $x_1.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, _$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
    if ((!nextValue.c())) {
      $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue.y(), transaction);
    }
  })));
});
$p.h9 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.kO = (function() {
  return this.iH;
});
$p.h6 = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.fb = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_CollectStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_CollectStream, "com.raquo.airstream.misc.CollectStream", ({
  d5: 1,
  ao: 1,
  ab: 1,
  at: 1,
  au: 1,
  aS: 1,
  aQ: 1,
  av: 1,
  aU: 1,
  aI: 1,
  be: 1,
  bd: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapSignal(parent, project, recover) {
  this.lw = null;
  this.lv = false;
  this.lx = null;
  this.iI = 0;
  this.lt = null;
  this.lu = null;
  this.lz = false;
  this.iJ = null;
  this.iK = false;
  this.hs = 0;
  this.e1 = null;
  this.iL = null;
  this.iM = null;
  this.ly = 0;
  this.e1 = parent;
  this.iL = project;
  this.iM = recover;
  this.lw = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  this.iI = 0;
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.iJ = (void 0);
  $f_Lcom_raquo_airstream_common_SingleParentSignal__$init$__V(this);
  this.ly = ((1 + parent.fc()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapSignal.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapSignal;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapSignal() {
}
$h_Lcom_raquo_airstream_misc_MapSignal.prototype = $p;
$p.ez = (function() {
  return this.lw;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fY = (function() {
  return this.lv;
});
$p.eA = (function() {
  return this.lx;
});
$p.cX = (function(x$1) {
  this.lv = x$1;
});
$p.g2 = (function(x$1) {
  this.lx = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.k2 = (function() {
  return this.iI;
});
$p.k3 = (function(x$1) {
  this.iI = x$1;
});
$p.h8 = (function(observer) {
  observer.g3($f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this));
});
$p.dp = (function() {
  return this.lt;
});
$p.ds = (function() {
  return this.lu;
});
$p.hk = (function() {
  return this.lz;
});
$p.fg = (function(x$1) {
  this.lz = x$1;
});
$p.gY = (function(x$0) {
  this.lt = x$0;
});
$p.gZ = (function(x$0) {
  this.lu = x$0;
});
$p.kK = (function() {
  return this.iJ;
});
$p.qd = (function(x$1) {
  this.iJ = x$1;
});
$p.l0 = (function() {
  return $f_Lcom_raquo_airstream_core_WritableSignal__tryNow__s_util_Try(this);
});
$p.iu = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onNext__O__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.h9 = (function(nextError, transaction) {
  $f_Lcom_raquo_airstream_common_InternalTryObserver__onError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
});
$p.hf = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onWillStart__V(this);
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStart__V(this);
});
$p.hd = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onStop__V(this);
});
$p.fc = (function() {
  return this.ly;
});
$p.he = (function(nextParentValue, transaction) {
  $f_Lcom_raquo_airstream_common_SingleParentSignal__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue, transaction);
  nextParentValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.iM;
    if (this$2.c()) {
      $f_Lcom_raquo_airstream_core_WritableSignal__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
    } else {
      var x0 = this$2.y();
      try {
        var $x_1 = new $c_s_util_Success(x0.bV(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => null))));
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
      $x_1.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$3$3) => ((tryError) => {
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
    $f_Lcom_raquo_airstream_core_WritableSignal__fireTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextParentValue.kI(this.iL), transaction);
  })));
});
$p.ki = (function() {
  var originalValue = this.e1.l0().kI(this.iL);
  return originalValue.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError) => {
    var this$2 = this.iM;
    if (this$2.c()) {
      return originalValue;
    } else {
      var x0 = this$2.y();
      try {
        var $x_1 = new $c_s_util_Success(x0.bV(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$4) => null))));
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
      return $x_1.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextError$7$3) => ((tryError) => new $c_s_util_Failure(new $c_Lcom_raquo_airstream_core_AirstreamError$ErrorHandlingError(tryError, nextError$7$3))))(nextError)), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((nextValue) => {
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
$p.h6 = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapSignal(this, project, $m_s_None$());
});
$p.fb = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapSignal = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapSignal, "com.raquo.airstream.misc.MapSignal", ({
  d6: 1,
  ao: 1,
  ab: 1,
  at: 1,
  au: 1,
  aT: 1,
  bj: 1,
  av: 1,
  bk: 1,
  aI: 1,
  cO: 1,
  cP: 1
}));
/** @constructor */
function $c_Lcom_raquo_airstream_misc_MapStream(parent, project, recover) {
  this.lD = null;
  this.lC = false;
  this.lE = null;
  this.lA = null;
  this.lB = null;
  this.lI = false;
  this.iN = null;
  this.lF = null;
  this.lG = null;
  this.lH = 0;
  this.iN = parent;
  this.lF = project;
  this.lG = recover;
  this.lD = (void 0);
  $f_Lcom_raquo_airstream_core_BaseObservable__$init$__V(this);
  $f_Lcom_raquo_airstream_core_WritableObservable__$init$__V(this);
  this.lH = ((1 + parent.fc()) | 0);
}
$p = $c_Lcom_raquo_airstream_misc_MapStream.prototype = new $h_O();
$p.constructor = $c_Lcom_raquo_airstream_misc_MapStream;
/** @constructor */
function $h_Lcom_raquo_airstream_misc_MapStream() {
}
$h_Lcom_raquo_airstream_misc_MapStream.prototype = $p;
$p.ez = (function() {
  return this.lD;
});
$p.eu = (function() {
  return $f_Lcom_raquo_airstream_core_Named__defaultDisplayName__T(this);
});
$p.u = (function() {
  return $f_Lcom_raquo_airstream_core_Named__displayName__T(this);
});
$p.fY = (function() {
  return this.lC;
});
$p.eA = (function() {
  return this.lE;
});
$p.cX = (function(x$1) {
  this.lC = x$1;
});
$p.g2 = (function(x$1) {
  this.lE = x$1;
});
$p.p = (function(obj) {
  return (this === obj);
});
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.h8 = (function(observer) {
});
$p.dp = (function() {
  return this.lA;
});
$p.ds = (function() {
  return this.lB;
});
$p.hk = (function() {
  return this.lI;
});
$p.fg = (function(x$1) {
  this.lI = x$1;
});
$p.gY = (function(x$0) {
  this.lA = x$0;
});
$p.gZ = (function(x$0) {
  this.lB = x$0;
});
$p.hf = (function() {
  $f_Lcom_raquo_airstream_core_WritableObservable__maybeWillStart__V(this.iN);
});
$p.hc = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStart__V(this);
});
$p.hd = (function() {
  $f_Lcom_raquo_airstream_common_SingleParentStream__onStop__V(this);
});
$p.he = (function(nextValue, transaction) {
  $f_Lcom_raquo_airstream_common_InternalNextErrorObserver__onTry__s_util_Try__Lcom_raquo_airstream_core_Transaction__V(this, nextValue, transaction);
});
$p.kO = (function() {
  return this.iN;
});
$p.fc = (function() {
  return this.lH;
});
$p.iu = (function(nextParentValue, transaction) {
  try {
    var $x_1 = new $c_s_util_Success(this.lF.e(nextParentValue));
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
  $x_1.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$1) => {
    this.h9(_$1, transaction);
  })), new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$2) => {
    $f_Lcom_raquo_airstream_core_WritableStream__fireValue__O__Lcom_raquo_airstream_core_Transaction__V(this, _$2, transaction);
  })));
});
$p.h9 = (function(nextError, transaction) {
  var this$1 = this.lG;
  if (this$1.c()) {
    $f_Lcom_raquo_airstream_core_WritableStream__fireError__jl_Throwable__Lcom_raquo_airstream_core_Transaction__V(this, nextError, transaction);
  } else {
    var x0 = this$1.y();
    try {
      var $x_1 = new $c_s_util_Success(x0.bV(nextError, new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((_$3) => null))));
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
    $x_1.ce(new $c_sjsr_AnonFunction1_$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1(((tryError) => {
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
$p.h6 = (function(project) {
  return new $c_Lcom_raquo_airstream_misc_MapStream(this, project, $m_s_None$());
});
$p.fb = (function() {
  return this;
});
var $d_Lcom_raquo_airstream_misc_MapStream = new $TypeData().i($c_Lcom_raquo_airstream_misc_MapStream, "com.raquo.airstream.misc.MapStream", ({
  d7: 1,
  ao: 1,
  ab: 1,
  at: 1,
  au: 1,
  aS: 1,
  aQ: 1,
  av: 1,
  aU: 1,
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
$p.kE = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.b6 = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.aY = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.g4 = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.i7 = (function(that) {
  return true;
});
$p.p = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().qD(this);
});
$p.u = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.cf = (function(x) {
  return this.kE((x | 0));
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
$p.aY = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.ex = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.b8 = (function() {
  return "SeqView";
});
$p.C = (function(f) {
  return this.ex(f);
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
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.qe().I() | 0))));
}
function $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.qe().I() | 0))));
}
function $f_Lcom_raquo_laminar_api_Laminar__$init$__V($thiz) {
  $thiz.mx = new $c_Lcom_raquo_laminar_api_Laminar$$anon$1();
  $thiz.r6 = $m_Lcom_raquo_laminar_receivers_ChildReceiver$();
  $thiz.r7 = $m_Lcom_raquo_laminar_receivers_ChildrenReceiver$();
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
$p.cS = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.cf = (function(key) {
  return this.bO(key);
});
$p.cP = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.h3 = (function(coll) {
  return this.kJ().ab(coll);
});
$p.p = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().tK(this);
});
$p.b8 = (function() {
  return "Map";
});
$p.u = (function() {
  return $f_sc_Iterable__toString__T(this);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.eV = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.eV = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.o = (function(idx) {
  return this.eV.o(idx);
});
$p.i = (function() {
  return this.eV.i();
});
$p.d = (function() {
  return this.eV.d();
});
$p.s = (function() {
  return this.eV.s();
});
$p.c = (function() {
  return this.eV.c();
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
  $thiz.gu = underlying;
  $thiz.hL = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.eX = null;
  this.gx = null;
  this.gu = null;
  this.hL = null;
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
$p.aY = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.c = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.ex = (function(f) {
  return $ct_sc_SeqView$Map__sc_SeqOps__F1__(new $c_sc_SeqView$Map(), this, f);
});
$p.b8 = (function() {
  return "SeqView";
});
$p.o = (function(idx) {
  return this.hL.e(this.gu.o(idx));
});
$p.i = (function() {
  return this.gu.i();
});
$p.C = (function(f) {
  return this.ex(f);
});
$p.b6 = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
var $d_sc_SeqView$Map = new $TypeData().i($c_sc_SeqView$Map, "scala.collection.SeqView$Map", ({
  b1: 1,
  aL: 1,
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
  $thiz.eW = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.eW = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.o = (function(i) {
  return this.eW.o(((((this.i() - 1) | 0) - i) | 0));
});
$p.i = (function() {
  return this.eW.i();
});
$p.d = (function() {
  return this.eW.bn();
});
$p.s = (function() {
  return this.eW.s();
});
$p.c = (function() {
  return this.eW.c();
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
  this.mm = null;
  this.mn = false;
  this.mO = null;
  this.mP = false;
  this.mq = null;
  this.mr = false;
  this.mI = null;
  this.mJ = false;
  this.mG = null;
  this.mH = false;
  this.mC = null;
  this.mD = false;
  this.mv = null;
  this.mw = false;
  this.mE = null;
  this.mF = false;
  this.mW = null;
  this.mX = false;
  this.mU = null;
  this.mV = false;
  this.n0 = null;
  this.n1 = false;
  this.mS = null;
  this.mT = false;
  this.mK = null;
  this.mL = false;
  this.mo = null;
  this.mp = false;
  this.mt = null;
  this.mu = false;
  this.my = null;
  this.mz = false;
  this.mA = null;
  this.mB = false;
  this.mM = null;
  this.mN = false;
  this.ms = null;
  this.iY = null;
  this.iX = null;
  this.r5 = null;
  this.mk = null;
  this.ml = false;
  this.mQ = null;
  this.mR = false;
  this.mx = null;
  this.mY = null;
  this.mZ = false;
  this.r6 = null;
  this.r7 = null;
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
$p.i3 = (function() {
  if ((!this.mn)) {
    this.mm = new $c_Lcom_raquo_laminar_tags_HtmlTag("a", false);
    this.mn = true;
  }
  return this.mm;
});
$p.qM = (function() {
  if ((!this.mP)) {
    this.mO = new $c_Lcom_raquo_laminar_tags_HtmlTag("span", false);
    this.mP = true;
  }
  return this.mO;
});
$p.fM = (function() {
  if ((!this.mr)) {
    this.mq = new $c_Lcom_raquo_laminar_tags_HtmlTag("br", true);
    this.mr = true;
  }
  return this.mq;
});
$p.qa = (function() {
  if ((!this.mJ)) {
    this.mI = new $c_Lcom_raquo_laminar_tags_HtmlTag("label", false);
    this.mJ = true;
  }
  return this.mI;
});
$p.q1 = (function() {
  if ((!this.mH)) {
    this.mG = new $c_Lcom_raquo_laminar_tags_HtmlTag("input", true);
    this.mH = true;
  }
  return this.mG;
});
$p.tg = (function() {
  if ((!this.mD)) {
    this.mC = new $c_Lcom_raquo_laminar_tags_HtmlTag("hr", true);
    this.mD = true;
  }
  return this.mC;
});
$p.f7 = (function() {
  if ((!this.mw)) {
    this.mv = new $c_Lcom_raquo_laminar_tags_HtmlTag("div", false);
    this.mw = true;
  }
  return this.mv;
});
$p.ik = (function() {
  if ((!this.mF)) {
    this.mE = new $c_Lcom_raquo_laminar_keys_HtmlAttr("href", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.mF = true;
  }
  return this.mE;
});
$p.uQ = (function() {
  if ((!this.mX)) {
    this.mW = new $c_Lcom_raquo_laminar_keys_HtmlAttr("type", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.mX = true;
  }
  return this.mW;
});
$p.qW = (function() {
  if ((!this.mV)) {
    this.mU = this.uQ();
    this.mV = true;
  }
  return this.mU;
});
$p.qZ = (function() {
  if ((!this.n1)) {
    this.n0 = new $c_Lcom_raquo_laminar_keys_HtmlProp("value", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.n1 = true;
  }
  return this.n0;
});
$p.iz = (function() {
  if ((!this.mT)) {
    this.mS = new $c_Lcom_raquo_laminar_keys_HtmlProp("target", $m_Lcom_raquo_laminar_codecs_package$().dx);
    this.mT = true;
  }
  return this.mS;
});
$p.qk = (function() {
  if ((!this.mL)) {
    this.mK = new $c_Lcom_raquo_laminar_keys_EventProp("input");
    this.mL = true;
  }
  return this.mK;
});
$p.pe = (function() {
  if ((!this.mp)) {
    this.mo = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$3("align-items");
    this.mp = true;
  }
  return this.mo;
});
$p.pD = (function() {
  if ((!this.mu)) {
    this.mt = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$28("display");
    this.mu = true;
  }
  return this.mt;
});
$p.pP = (function() {
  if ((!this.mz)) {
    this.my = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$31("flex-wrap");
    this.mz = true;
  }
  return this.my;
});
$p.pX = (function() {
  if ((!this.mB)) {
    this.mA = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$5("gap");
    this.mB = true;
  }
  return this.mA;
});
$p.qm = (function() {
  if ((!this.mN)) {
    this.mM = new $c_Lcom_raquo_laminar_defs_styles_StyleProps$$anon$11("overflow-x");
    this.mN = true;
  }
  return this.mM;
});
$p.rB = (function() {
  if ((!this.ml)) {
    this.mk = new $c_Lcom_raquo_laminar_keys_CompositeKey$CompositeValueMappers$StringValueMapper$(this);
    this.ml = true;
  }
  return this.mk;
});
$p.bo = (function() {
  if ((!this.mR)) {
    this.mQ = new $c_Lcom_raquo_laminar_api_Laminar$svg$(this);
    this.mR = true;
  }
  return this.mQ;
});
$p.uT = (function() {
  if ((!this.mZ)) {
    this.mY = new $c_Lcom_raquo_laminar_api_Laminar$unsafeWindowOwner$(this);
    this.mZ = true;
  }
  return this.mY;
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
$p.cU = (function(key, default$1) {
  return $f_sc_MapOps__getOrElse__O__F0__O(this, key, default$1);
});
$p.e = (function(key) {
  return $f_sc_MapOps__apply__O__O(this, key);
});
$p.bV = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eE = (function() {
  return new $c_sc_MapOps$$anon$3(this);
});
$p.cf = (function(key) {
  return $f_sc_MapOps__contains__O__Z(this, key);
});
$p.cP = (function(sb, start, sep, end) {
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
$p.aY = (function(len) {
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
  this.gs = null;
  this.gs = underlying;
}
$p = $c_sc_MapView$Id.prototype = new $h_sc_AbstractMapView();
$p.constructor = $c_sc_MapView$Id;
/** @constructor */
function $h_sc_MapView$Id() {
}
$h_sc_MapView$Id.prototype = $p;
$p.bX = (function(key) {
  return this.gs.bX(key);
});
$p.d = (function() {
  return this.gs.d();
});
$p.s = (function() {
  return this.gs.s();
});
$p.c = (function() {
  return this.gs.c();
});
var $d_sc_MapView$Id = new $TypeData().i($c_sc_MapView$Id, "scala.collection.MapView$Id", ({
  gx: 1,
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
  this.gt = null;
  this.jH = null;
  this.gt = underlying;
  this.jH = f;
}
$p = $c_sc_MapView$MapValues.prototype = new $h_sc_AbstractMapView();
$p.constructor = $c_sc_MapView$MapValues;
/** @constructor */
function $h_sc_MapView$MapValues() {
}
$h_sc_MapView$MapValues.prototype = $p;
$p.d = (function() {
  return new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((kv$2) => new $c_T2(kv$2.S, this.jH.e(kv$2.R)))), this.gt.d());
});
$p.bX = (function(key) {
  var this$1 = this.gt.bX(key);
  var f = this.jH;
  return (this$1.c() ? $m_s_None$() : new $c_s_Some(f.e(this$1.y())));
});
$p.s = (function() {
  return this.gt.s();
});
$p.c = (function() {
  return this.gt.c();
});
var $d_sc_MapView$MapValues = new $TypeData().i($c_sc_MapView$MapValues, "scala.collection.MapView$MapValues", ({
  gy: 1,
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
  this.eV = null;
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
$p.aY = (function(len) {
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
$p.C = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.ex = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  gk: 1,
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
  o: 1,
  aD: 1
}));
function $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__($thiz, underlying, f) {
  $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Map() {
  this.eX = null;
  this.gx = null;
  this.gu = null;
  this.hL = null;
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
$p.aY = (function(len) {
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
$p.g1 = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.b8 = (function() {
  return "IndexedSeqView";
});
$p.C = (function(f) {
  return this.g1(f);
});
$p.ex = (function(f) {
  return this.g1(f);
});
var $d_sc_IndexedSeqView$Map = new $TypeData().i($c_sc_IndexedSeqView$Map, "scala.collection.IndexedSeqView$Map", ({
  bR: 1,
  b1: 1,
  aL: 1,
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
  o: 1,
  aD: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Reverse(underlying) {
  this.eW = null;
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
$p.aY = (function(len) {
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
$p.C = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.ex = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  gl: 1,
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
  o: 1,
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
$p.ga = (function() {
  return this;
});
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.jP = null;
  this.hR = null;
  this.jP = underlying;
  this.hR = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.o = (function(n) {
  return this.jP.o(n);
});
$p.i = (function() {
  return this.jP.aU;
});
$p.bC = (function() {
  return "ArrayBufferView";
});
$p.d = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.hR);
});
$p.bn = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(this, this.hR);
});
$p.g1 = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.hR);
});
$p.C = (function(f) {
  return this.g1(f);
});
$p.ex = (function(f) {
  return this.g1(f);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  hF: 1,
  gd: 1,
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
  o: 1,
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
$p.az = (function() {
  return $m_sci_Iterable$();
});
$p.kJ = (function() {
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
        var a = $thiz.i6();
        var b = o.i6();
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hj)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hk)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hl)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hm)));
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
  this.eX = null;
  this.gx = null;
  this.gu = null;
  this.hL = null;
  this.gG = null;
  this.gG = mutationCount;
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
$p.g1 = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gG);
});
$p.qe = (function() {
  return this.gG;
});
$p.C = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gG);
});
$p.ex = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.gG);
});
var $d_scm_CheckedIndexedSeqView$Map = new $TypeData().i($c_scm_CheckedIndexedSeqView$Map, "scala.collection.mutable.CheckedIndexedSeqView$Map", ({
  hP: 1,
  bR: 1,
  b1: 1,
  aL: 1,
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
  o: 1,
  aD: 1,
  hM: 1
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
$p.aZ = (function() {
  return 0;
});
$p.s = (function() {
  return 0;
});
$p.c = (function() {
  return true;
});
$p.k8 = (function(key) {
  throw new $c_ju_NoSuchElementException(("key not found: " + key));
});
$p.bO = (function(key) {
  return false;
});
$p.bX = (function(key) {
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
  this.k8(key);
});
$p.eD = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  h3: 1,
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
$p.aZ = (function() {
  return 1;
});
$p.s = (function() {
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
$p.bO = (function(key) {
  return $m_sr_BoxesRunTime$().l(key, this.cK);
});
$p.bX = (function(key) {
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
$p.ff = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.cK) ? new $c_sci_Map$Map1(this.cK, value) : new $c_sci_Map$Map2(this.cK, this.dG, key, value));
});
$p.fR = (function(p) {
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
  return $m_s_util_hashing_MurmurHash3$().aW(h, 1);
});
$p.eD = (function(key, value) {
  return this.ff(key, value);
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
$p.aZ = (function() {
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
    return this.dH;
  } else if ($m_sr_BoxesRunTime$().l(key, this.cp)) {
    return this.dI;
  } else {
    throw new $c_ju_NoSuchElementException(("key not found: " + key));
  }
});
$p.bO = (function(key) {
  return ($m_sr_BoxesRunTime$().l(key, this.co) || $m_sr_BoxesRunTime$().l(key, this.cp));
});
$p.bX = (function(key) {
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
$p.ff = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.co) ? new $c_sci_Map$Map2(this.co, value, this.cp, this.dI) : ($m_sr_BoxesRunTime$().l(key, this.cp) ? new $c_sci_Map$Map2(this.co, this.dH, this.cp, value) : new $c_sci_Map$Map3(this.co, this.dH, this.cp, this.dI, key, value)));
});
$p.fR = (function(p) {
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
  return $m_s_util_hashing_MurmurHash3$().aW(h, 2);
});
$p.eD = (function(key, value) {
  return this.ff(key, value);
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
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.aZ = (function() {
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
$p.cU = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().l(key, this.c6) ? this.dg : ($m_sr_BoxesRunTime$().l(key, this.c7) ? this.dh : ($m_sr_BoxesRunTime$().l(key, this.c8) ? this.di : default$1.I())));
});
$p.d = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.eE = (function() {
  return new $c_sci_Map$Map3$$anon$6(this);
});
$p.ff = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.c6) ? new $c_sci_Map$Map3(this.c6, value, this.c7, this.dh, this.c8, this.di) : ($m_sr_BoxesRunTime$().l(key, this.c7) ? new $c_sci_Map$Map3(this.c6, this.dg, this.c7, value, this.c8, this.di) : ($m_sr_BoxesRunTime$().l(key, this.c8) ? new $c_sci_Map$Map3(this.c6, this.dg, this.c7, this.dh, this.c8, value) : new $c_sci_Map$Map4(this.c6, this.dg, this.c7, this.dh, this.c8, this.di, key, value))));
});
$p.fR = (function(p) {
  return (((!(!p.e(new $c_T2(this.c6, this.dg)))) && (!(!p.e(new $c_T2(this.c7, this.dh))))) && (!(!p.e(new $c_T2(this.c8, this.di)))));
});
$p.x = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cG(this.c6, this.dg);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cG(this.c7, this.dh);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cG(this.c8, this.di);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dW;
  h = $m_s_util_hashing_MurmurHash3$().z(h, a);
  h = $m_s_util_hashing_MurmurHash3$().z(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dZ(h, c);
  return $m_s_util_hashing_MurmurHash3$().aW(h, 3);
});
$p.eD = (function(key, value) {
  return this.ff(key, value);
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
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.aZ = (function() {
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
$p.cU = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().l(key, this.bG) ? this.cq : ($m_sr_BoxesRunTime$().l(key, this.bH) ? this.cr : ($m_sr_BoxesRunTime$().l(key, this.bI) ? this.cs : ($m_sr_BoxesRunTime$().l(key, this.bJ) ? this.ct : default$1.I()))));
});
$p.d = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.eE = (function() {
  return new $c_sci_Map$Map4$$anon$9(this);
});
$p.ff = (function(key, value) {
  return ($m_sr_BoxesRunTime$().l(key, this.bG) ? new $c_sci_Map$Map4(this.bG, value, this.bH, this.cr, this.bI, this.cs, this.bJ, this.ct) : ($m_sr_BoxesRunTime$().l(key, this.bH) ? new $c_sci_Map$Map4(this.bG, this.cq, this.bH, value, this.bI, this.cs, this.bJ, this.ct) : ($m_sr_BoxesRunTime$().l(key, this.bI) ? new $c_sci_Map$Map4(this.bG, this.cq, this.bH, this.cr, this.bI, value, this.bJ, this.ct) : ($m_sr_BoxesRunTime$().l(key, this.bJ) ? new $c_sci_Map$Map4(this.bG, this.cq, this.bH, this.cr, this.bI, this.cs, this.bJ, value) : $m_sci_HashMap$().gB.fe(this.bG, this.cq).fe(this.bH, this.cr).fe(this.bI, this.cs).fe(this.bJ, this.ct).fe(key, value)))));
});
$p.fR = (function(p) {
  return ((((!(!p.e(new $c_T2(this.bG, this.cq)))) && (!(!p.e(new $c_T2(this.bH, this.cr))))) && (!(!p.e(new $c_T2(this.bI, this.cs))))) && (!(!p.e(new $c_T2(this.bJ, this.ct)))));
});
$p.sg = (function(builder) {
  return builder.f6(this.bG, this.cq).f6(this.bH, this.cr).f6(this.bI, this.cs).f6(this.bJ, this.ct);
});
$p.x = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().cG(this.bG, this.cq);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cG(this.bH, this.cr);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cG(this.bI, this.cs);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().cG(this.bJ, this.ct);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().dW;
  h = $m_s_util_hashing_MurmurHash3$().z(h, a);
  h = $m_s_util_hashing_MurmurHash3$().z(h, b);
  h = $m_s_util_hashing_MurmurHash3$().dZ(h, c);
  return $m_s_util_hashing_MurmurHash3$().aW(h, 4);
});
$p.eD = (function(key, value) {
  return this.ff(key, value);
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gQ)));
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
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (($p_sci_LazyList__evaluated__sci_LazyList($thiz) === $m_sci_LazyList$().G) ? $m_sci_LazyList$().G : ($m_sci_LazyList$(), $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), f.e($thiz.q()), $p_sci_LazyList__mapImpl__F1__sci_LazyList($thiz.au(), f)))))));
}
function $p_sci_LazyList__eagerHeadZipImpl__sc_Iterator__sci_LazyList($thiz, it) {
  return ((($p_sci_LazyList__evaluated__sci_LazyList($thiz) === $m_sci_LazyList$().G) || (!it.j())) ? $m_sci_LazyList$().G : ($m_sci_LazyList$(), $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), new $c_T2($thiz.q(), it.f()), ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sci_LazyList__eagerHeadZipImpl__sc_Iterator__sci_LazyList($thiz.au(), it))))))));
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.t = (("" + b.t) + start);
  if (($thiz.ba === $m_sci_LazyList$Uninitialized$())) {
    b.t = (b.t + "<not computed>");
  } else if (($p_sci_LazyList__evaluated__sci_LazyList($thiz) !== $m_sci_LazyList$().G)) {
    var obj = $thiz.q();
    b.t = (("" + b.t) + obj);
    var cursor = $thiz;
    var scout = $thiz.au();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$1) !== $m_sci_LazyList$().G))) {
        scout = scout.au();
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
            cursor = cursor.au();
            scout = scout.au();
            var this$3 = scout;
            if (((this$3.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$3) !== $m_sci_LazyList$().G))) {
              scout = scout.au();
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
        cursor = cursor.au();
      }
      if ((!(cursor.ba !== $m_sci_LazyList$Uninitialized$()))) {
        b.t = (("" + b.t) + sep);
        b.t = (b.t + "<not computed>");
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
$p.g0 = (function() {
  return $f_sc_LinearSeqOps__last__O(this);
});
$p.aY = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.kE = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.o = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.g4 = (function(that) {
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
$p.au = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) {
    throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
  } else {
    return this.df;
  }
});
$p.sT = (function() {
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
  return (((this.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sc_Iterator$().J : new $c_sci_LazyList$LazyIterator(this));
});
$p.bW = (function(f) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if ((!($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal1) === $m_sci_LazyList$().G))) {
      f.e(\u03b4this$tailLocal1.q());
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
    var left = this.au();
    while ((!($p_sci_LazyList__evaluated__sci_LazyList(left) === $m_sci_LazyList$().G))) {
      reducedRes = f.bN(reducedRes, left.q());
      left = left.au();
    }
    return reducedRes;
  }
});
$p.tG = (function(f) {
  return (((this.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sci_LazyList$().G : $p_sci_LazyList__mapImpl__F1__sci_LazyList(this, f));
});
$p.sQ = (function(f) {
  return (((this.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sci_LazyList$().G : $m_sci_LazyList$().qB(this, f));
});
$p.r3 = (function(that) {
  return ((((this.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) || (that.s() === 0)) ? $m_sci_LazyList$().G : ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sci_LazyList__eagerHeadZipImpl__sc_Iterator__sci_LazyList(this, that.d()))))));
});
$p.uX = (function() {
  return this.r3($m_sci_LazyList$().pQ(0, 1));
});
$p.sG = (function(n) {
  return ((n <= 0) ? this : (((this.ba !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().G)) ? $m_sci_LazyList$().G : $m_sci_LazyList$().um(this, n)));
});
$p.cP = (function(sb, start, sep, end) {
  this.sT();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.bh, start, sep, end);
  return sb;
});
$p.u = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").t;
});
$p.az = (function() {
  return $m_sci_LazyList$();
});
$p.w = (function() {
  return this.au();
});
$p.kX = (function() {
  return this.au();
});
$p.C = (function(f) {
  return this.tG(f);
});
$p.fQ = (function(f) {
  return this.sQ(f);
});
$p.hl = (function(that) {
  return this.r3(that);
});
$p.hm = (function() {
  return this.uX();
});
$p.pE = (function(n) {
  return this.sG(n);
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
  m: 1,
  v: 1,
  y: 1,
  x: 1,
  aZ: 1,
  aE: 1,
  b5: 1,
  b4: 1,
  a: 1
}));
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hA)));
}
function $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, array) {
  $thiz.hX = array;
  return $thiz;
}
function $ct_sjsr_WrappedVarArgs__($thiz) {
  $ct_sjsr_WrappedVarArgs__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs() {
  this.hX = null;
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
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.fQ = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.hl = (function(that) {
  return $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this, that);
});
$p.hm = (function() {
  return $f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this);
});
$p.i7 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.g4 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.i6 = (function() {
  return $m_sci_IndexedSeqDefaults$().ov;
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
$p.g0 = (function() {
  return $f_sc_IndexedSeqOps__last__O(this);
});
$p.aY = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.ga = (function() {
  return this;
});
$p.p = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().qD(this);
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
  return $m_sjsr_WrappedVarArgs$().aq();
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
$p.d3 = (function(num) {
  return $f_sc_IterableOnceOps__sum__s_math_Numeric__O(this, num);
});
$p.is = (function(ord) {
  return $f_sc_IterableOnceOps__min__s_math_Ordering__O(this, ord);
});
$p.ir = (function(ord) {
  return $f_sc_IterableOnceOps__max__s_math_Ordering__O(this, ord);
});
$p.cP = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.ew = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.i = (function() {
  return (this.hX.length | 0);
});
$p.o = (function(idx) {
  return this.hX[idx];
});
$p.bC = (function() {
  return "WrappedVarArgs";
});
$p.f8 = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().kv(coll);
});
$p.cf = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.e = (function(v1) {
  return this.o((v1 | 0));
});
$p.az = (function() {
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
  this.bj = null;
  this.bj = rootNode;
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
$p.kJ = (function() {
  return $m_sci_HashMap$();
});
$p.s = (function() {
  return this.bj.b9;
});
$p.aZ = (function() {
  return this.bj.b9;
});
$p.c = (function() {
  return (this.bj.b9 === 0);
});
$p.d = (function() {
  return (this.c() ? $m_sc_Iterator$().J : new $c_sci_MapKeyValueTupleIterator(this.bj));
});
$p.eE = (function() {
  return (this.c() ? $m_sc_Iterator$().J : new $c_sci_MapValueIterator(this.bj));
});
$p.bO = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cz(keyUnimprovedHash);
  return this.bj.kg(key, keyUnimprovedHash, keyHash, 0);
});
$p.e = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cz(keyUnimprovedHash);
  return this.bj.k7(key, keyUnimprovedHash, keyHash, 0);
});
$p.bX = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cz(keyUnimprovedHash);
  return this.bj.ii(key, keyUnimprovedHash, keyHash, 0);
});
$p.cU = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var keyHash = $m_sc_Hashing$().cz(keyUnimprovedHash);
  return this.bj.ky(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fe = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().E(key);
  var newRootNode = this.bj.qX(key, value, keyUnimprovedHash, $m_sc_Hashing$().cz(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bj) ? this : new $c_sci_HashMap(newRootNode));
});
$p.cS = (function(f) {
  this.bj.cS(f);
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
    return $m_s_util_hashing_MurmurHash3$().hY;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bj);
    return $m_s_util_hashing_MurmurHash3$().iA(hashIterator, $m_s_util_hashing_MurmurHash3$().dW);
  }
});
$p.bC = (function() {
  return "HashMap";
});
$p.eD = (function(key, value) {
  return this.fe(key, value);
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
  hn: 1,
  a: 1,
  Y: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ho)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hy)));
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
$p.b3 = (function(elems) {
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
$p.az = (function() {
  return $m_scm_Iterable$();
});
$p.ar = (function() {
  return this;
});
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jW = loadFactor;
  $thiz.bf = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.jX = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.bf.a.length);
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
  var idx = (hash & (($thiz.bf.a.length - 1) | 0));
  matchResult4: {
    var x10 = $thiz.bf.a[idx];
    if ((x10 === null)) {
      $thiz.bf.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
      break matchResult4;
    }
    var prev = null;
    var n = x10;
    while (((n !== null) && (n.dT <= hash))) {
      if (((n.dT === hash) && $m_sr_BoxesRunTime$().l(elem, n.fK))) {
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
  $thiz.eo = ((1 + $thiz.eo) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.bf.a.length;
  $thiz.jX = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.eo === 0)) {
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
            if (((n.dT & oldlen) === 0)) {
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
  return $doubleToInt((size * $thiz.jW));
}
/** @constructor */
function $c_scm_HashSet() {
  this.jW = 0.0;
  this.bf = null;
  this.jX = 0;
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
$p.aZ = (function() {
  return this.eo;
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
    var $x_1 = x1.sO(elem, hash);
  }
  return ($x_1 !== null);
});
$p.b5 = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jW)));
  if ((target > this.bf.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.i4 = (function(elem) {
  if ((((1 + this.eo) | 0) >= this.jX)) {
    $p_scm_HashSet__growTable__I__V(this, (this.bf.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().E(elem)));
});
$p.pb = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if (false) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, v1$2, $p_scm_HashSet__improveHash__I__I(this, (v2$2 | 0)));
    }));
    xs.uY.v4(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.j()) {
      var next = iter.f();
      $p_scm_HashSet__addElem__O__I__Z(this, next.fK, next.dT);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.pI();
    while (iter$2.j()) {
      var next$2 = iter$2.f();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.q8(), next$2.pZ());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.d = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.az = (function() {
  return $m_scm_HashSet$();
});
$p.s = (function() {
  return this.eo;
});
$p.c = (function() {
  return (this.eo === 0);
});
$p.bC = (function() {
  return "HashSet";
});
$p.x = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.j()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().iA(hashIterator, $m_s_util_hashing_MurmurHash3$().p2);
});
$p.b3 = (function(elems) {
  return this.pb(elems);
});
$p.ad = (function(elem) {
  this.i4(elem);
  return this;
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cz)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cz: 1,
  hC: 1,
  ge: 1,
  h: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  i: 1,
  gC: 1,
  d: 1,
  b2: 1,
  K: 1,
  C: 1,
  I: 1,
  H: 1,
  J: 1,
  N: 1,
  aG: 1,
  id: 1,
  ic: 1,
  l: 1,
  a: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.h1)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i6)));
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
$p.g0 = (function() {
  return $f_sc_IndexedSeqOps__last__O(this);
});
$p.aY = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.i7 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.g4 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fQ = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.hm = (function() {
  return $f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this);
});
$p.cc = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.h3 = (function(coll) {
  return $m_sci_ArraySeq$().ks(coll, this.ap());
});
$p.dt = (function() {
  return $m_sci_ArraySeq$().it(this.ap());
});
$p.ew = (function() {
  return $m_sci_ArraySeq$().hN;
});
$p.tF = (function(f) {
  var a = new $ac_O(this.i());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.e(this.o(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().fd(a);
});
$p.uW = (function(that) {
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
      $x_2.V(elements, $x_1, new $c_T2(this.o(x0), that.o(x0)));
      i = ((1 + i) | 0);
    }
    return $m_sci_ArraySeq$().fd(elements);
  } else {
    var b = $m_sci_ArraySeq$().hN.aq();
    var it1 = this.d();
    var it2 = that.d();
    while ((it1.j() && it2.j())) {
      b.ad(new $c_T2(it1.f(), it2.f()));
    }
    return b.ar();
  }
});
$p.dq = (function(z, f) {
  var array = this.ci();
  var b = z;
  var i = 0;
  while ((i < $m_jl_reflect_Array$().aO(array))) {
    var a = $m_sr_ScalaRunTime$().ao(array, i);
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
  var destLen = $m_jl_reflect_Array$().aO(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().et(this.ci(), 0, xs, start, copied);
  }
  return copied;
});
$p.i6 = (function() {
  return 2147483647;
});
$p.b7 = (function(ord) {
  if (($m_jl_reflect_Array$().aO(this.ci()) <= 1)) {
    return this;
  } else {
    var original = this.ci();
    var newLength = this.i();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    if ($d_O.R($objectGetClass(original).A.Q().A)) {
      var a = $m_ju_Arrays$().kh(original, newLength, $d_O.r().l());
    } else {
      var dest = new $ac_O(newLength);
      $m_s_Array$().et(original, 0, dest, 0, $m_jl_reflect_Array$().aO(original));
      var a = dest;
    }
    $m_ju_Arrays$().g8(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.az = (function() {
  return $m_sci_ArraySeq$().hN;
});
$p.C = (function(f) {
  return this.tF(f);
});
$p.hl = (function(that) {
  return this.uW(that);
});
$p.b6 = (function(ord) {
  return this.b7(ord);
});
$p.f8 = (function(coll) {
  return $m_sci_ArraySeq$().ks(coll, this.ap());
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
$p.aY = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.i7 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.g4 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fQ = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__flatMap__F1__O(this, f);
});
$p.hl = (function(that) {
  return $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this, that);
});
$p.hm = (function() {
  return $f_sc_StrictOptimizedIterableOps__zipWithIndex__O(this);
});
$p.cc = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b6 = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.ew = (function() {
  return $m_sci_Vector$();
});
$p.i = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.m : this.h.a.length);
});
$p.d = (function() {
  return ((this === $m_sci_Vector0$()) ? $m_sci_Vector$().oB : new $c_sci_NewVectorIterator(this, this.i(), this.dw()));
});
$p.bC = (function() {
  return "Vector";
});
$p.bm = (function(xs, start, len) {
  return this.d().bm(xs, start, len);
});
$p.i6 = (function() {
  return $m_sci_Vector$().oA;
});
$p.aX = (function(index) {
  return $m_scg_CommonErrors$().kC(index, ((this.i() - 1) | 0));
});
$p.q = (function() {
  if ((this.h.a.length === 0)) {
    throw new $c_ju_NoSuchElementException("empty.head");
  } else {
    return this.h.a[0];
  }
});
$p.g0 = (function() {
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
    $x_1.kp(((((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0) - 1) | 0), this.dv(i), f);
    i = ((1 + i) | 0);
  }
});
$p.az = (function() {
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
$p.aY = (function(len) {
  var x = this.i();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.s = (function() {
  return this.i();
});
$p.b8 = (function() {
  return "IndexedSeq";
});
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.cc = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.ew = (function() {
  return $m_scm_ArraySeq$().jT;
});
$p.pW = (function(coll) {
  var evidence$1 = this.ap();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.aJ();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.s();
  var it = coll.d();
  while (it.j()) {
    var elem = it.f();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().g6(elementClass) : elem));
    jsElems.push(unboxedElem);
  }
  return $m_scm_ArraySeq$().iq($m_scm_ArrayBuilder$().g5(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems));
});
$p.dt = (function() {
  return $m_scm_ArraySeq$().it(this.ap());
});
$p.bC = (function() {
  return "ArraySeq";
});
$p.bm = (function(xs, start, len) {
  var srcLen = this.i();
  var destLen = $m_jl_reflect_Array$().aO(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().et(this.cb(), 0, xs, start, copied);
  }
  return copied;
});
$p.p = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().aO(this.cb()) !== $m_jl_reflect_Array$().aO(other.cb()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.uG = (function(ord) {
  return $m_scm_ArraySeq$().iq($m_sc_ArrayOps$().uH(this.cb(), ord));
});
$p.az = (function() {
  return $m_scm_ArraySeq$().jT;
});
$p.h3 = (function(coll) {
  return this.pW(coll);
});
$p.f8 = (function(coll) {
  return this.pW(coll);
});
$p.b6 = (function(ord) {
  return this.uG(ord);
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
$p.gV = (function(i) {
  return this.d8.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.d8, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().pN(this.d8, that.d8) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((this.d8.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Boolean$()))) {
    var this$1 = this.d8;
    var a = this$1.g();
    $m_s_util_Sorting$().kV(a, 0, a.a.length, $m_s_math_Ordering$Boolean$());
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
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.o = (function(i) {
  return this.gV(i);
});
$p.e = (function(v1) {
  return this.gV((v1 | 0));
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
$p.gN = (function(i) {
  return this.d9.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.d9, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().pJ(this.d9, that.d9) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((this.d9.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Byte$()))) {
    var this$1 = this.d9;
    var a = this$1.g();
    $m_ju_Arrays$().qG(a);
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
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.o = (function(i) {
  return this.gN(i);
});
$p.e = (function(v1) {
  return this.gN((v1 | 0));
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
  a6: 1,
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
$p.gO = (function(i) {
  return this.cJ.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.cJ, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().pK(this.cJ, that.cJ) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((this.cJ.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Char$()))) {
    var this$1 = this.cJ;
    var a = this$1.g();
    $m_ju_Arrays$().qH(a);
    return new $c_sci_ArraySeq$ofChar(a);
  } else {
    return $c_sci_ArraySeq.prototype.b7.call(this, ord);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cJ);
});
$p.cP = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.cJ).cP(sb, start, sep, end);
});
$p.ci = (function() {
  return this.cJ;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.o = (function(i) {
  return $bC(this.gO(i));
});
$p.e = (function(v1) {
  return $bC(this.gO((v1 | 0)));
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
  a6: 1,
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
$p.gP = (function(i) {
  return this.eb.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.eb, this$1.ax);
});
$p.p = (function(that) {
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
$p.ci = (function() {
  return this.eb;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.o = (function(i) {
  return this.gP(i);
});
$p.e = (function(v1) {
  return this.gP((v1 | 0));
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
  a6: 1,
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
$p.gQ = (function(i) {
  return this.ec.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.ec, this$1.ax);
});
$p.p = (function(that) {
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
$p.ci = (function() {
  return this.ec;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.o = (function(i) {
  return this.gQ(i);
});
$p.e = (function(v1) {
  return this.gQ((v1 | 0));
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
$p.gR = (function(i) {
  return this.da.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.da, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().km(this.da, that.da) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((this.da.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Int$()))) {
    var this$1 = this.da;
    var a = this$1.g();
    $m_ju_Arrays$().qI(a);
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
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.o = (function(i) {
  return this.gR(i);
});
$p.e = (function(v1) {
  return this.gR((v1 | 0));
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
$p.gS = (function(i) {
  var $x_1 = this.db.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.db, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().pL(this.db, that.db) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((((this.db.a.length >>> 1) | 0) <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Long$()))) {
    var this$1 = this.db;
    var a = this$1.g();
    $m_ju_Arrays$().qJ(a);
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
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.o = (function(i) {
  return this.gS(i);
});
$p.e = (function(v1) {
  return this.gS((v1 | 0));
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
$p.ap = (function() {
  return $m_s_reflect_ClassTag$().gW($objectGetClass(this.cn).A.Q());
});
$p.i = (function() {
  return this.cn.a.length;
});
$p.o = (function(i) {
  return this.cn.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.cn, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().pO(this.cn, that.cn) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.qL = (function(ord) {
  if ((this.cn.a.length <= 1)) {
    return this;
  } else {
    var this$1 = this.cn;
    var a = this$1.g();
    $m_ju_Arrays$().g8(a, ord);
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
  return this.qL(ord);
});
$p.b6 = (function(ord) {
  return this.qL(ord);
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
$p.gT = (function(i) {
  return this.dc.a[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.dc, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().pM(this.dc, that.dc) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.b7 = (function(ord) {
  if ((this.dc.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Short$()))) {
    var this$1 = this.dc;
    var a = this$1.g();
    $m_ju_Arrays$().qK(a);
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
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
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
  a6: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.eY = null;
  this.eY = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.i = (function() {
  return this.eY.a.length;
});
$p.gU = (function(i) {
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.eY, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.eY.a.length === that.eY.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.eY);
});
$p.ci = (function() {
  return this.eY;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.o = (function(i) {
  this.gU(i);
});
$p.e = (function(v1) {
  this.gU((v1 | 0));
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
$p.kE = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.o = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.dq = (function(z, op) {
  return $f_sc_LinearSeqOps__foldLeft__O__F2__O(this, z, op);
});
$p.g4 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.b8 = (function() {
  return "LinearSeq";
});
$p.hl = (function(that) {
  return $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O(this, that);
});
$p.hm = (function() {
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
$p.ew = (function() {
  return $m_sci_List$();
});
$p.p3 = (function(prefix) {
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
$p.iw = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.p3(prefix);
  }
  if ((prefix.s() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.c()) {
      return prefix.qU();
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
$p.ph = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.p3(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.tH = (function(f) {
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
$p.sR = (function(f) {
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
$p.aY = (function(len) {
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
$p.g0 = (function() {
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
$p.az = (function() {
  return $m_sci_List$();
});
$p.C = (function(f) {
  return this.tH(f);
});
$p.fQ = (function(f) {
  return this.sR(f);
});
$p.pE = (function(n) {
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
$p.gV = (function(index) {
  return this.eh.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.eh, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().pN(this.eh, that.eh) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.eh);
});
$p.cb = (function() {
  return this.eh;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.o = (function(i) {
  return this.gV(i);
});
$p.e = (function(v1) {
  return this.gV((v1 | 0));
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
$p.gN = (function(index) {
  return this.ei.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.ei, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().pJ(this.ei, that.ei) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ei);
});
$p.cb = (function() {
  return this.ei;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.o = (function(i) {
  return this.gN(i);
});
$p.e = (function(v1) {
  return this.gN((v1 | 0));
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
$p.gO = (function(index) {
  return this.c9.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.c9, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().pK(this.c9, that.c9) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.c9);
});
$p.cP = (function(sb, start, sep, end) {
  var jsb = sb.bh;
  if ((start.length !== 0)) {
    jsb.t = (("" + jsb.t) + start);
  }
  var len = this.c9.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.pf(this.c9);
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
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.o = (function(i) {
  return $bC(this.gO(i));
});
$p.e = (function(v1) {
  return $bC(this.gO((v1 | 0)));
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
$p.gP = (function(index) {
  return this.cu.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.cu, this$1.ax);
});
$p.p = (function(that) {
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
    return $c_scm_ArraySeq.prototype.p.call(this, that);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cu);
});
$p.cb = (function() {
  return this.cu;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.o = (function(i) {
  return this.gP(i);
});
$p.e = (function(v1) {
  return this.gP((v1 | 0));
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
$p.gQ = (function(index) {
  return this.cv.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.cv, this$1.ax);
});
$p.p = (function(that) {
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
    return $c_scm_ArraySeq.prototype.p.call(this, that);
  }
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cv);
});
$p.cb = (function() {
  return this.cv;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.o = (function(i) {
  return this.gQ(i);
});
$p.e = (function(v1) {
  return this.gQ((v1 | 0));
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
$p.gR = (function(index) {
  return this.ej.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.ej, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().km(this.ej, that.ej) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ej);
});
$p.cb = (function() {
  return this.ej;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.o = (function(i) {
  return this.gR(i);
});
$p.e = (function(v1) {
  return this.gR((v1 | 0));
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
$p.gS = (function(index) {
  var $x_1 = this.ek.a;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.ek, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().pL(this.ek, that.ek) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ek);
});
$p.cb = (function() {
  return this.ek;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.o = (function(i) {
  return this.gS(i);
});
$p.e = (function(v1) {
  return this.gS((v1 | 0));
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
  return $m_s_reflect_ClassTag$().gW($objectGetClass(this.dQ).A.Q());
});
$p.i = (function() {
  return this.dQ.a.length;
});
$p.o = (function(index) {
  return this.dQ.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.dQ, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().pO(this.dQ, that.dQ) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dQ);
});
$p.cb = (function() {
  return this.dQ;
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
$p.gT = (function(index) {
  return this.el.a[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.el, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().pM(this.el, that.el) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.el);
});
$p.cb = (function() {
  return this.el;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.o = (function(i) {
  return this.gT(i);
});
$p.e = (function(v1) {
  return this.gT((v1 | 0));
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
  this.f3 = null;
  this.f3 = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.i = (function() {
  return this.f3.a.length;
});
$p.gU = (function(index) {
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.b4(this.f3, this$1.ax);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.f3.a.length === that.f3.a.length) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.d = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.f3);
});
$p.cb = (function() {
  return this.f3;
});
$p.ap = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.o = (function(i) {
  this.gU(i);
});
$p.e = (function(v1) {
  this.gU((v1 | 0));
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
  $thiz.jU = loadFactor;
  $thiz.P = new ($d_scm_HashMap$Node.r().C)($p_scm_HashMap__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.gH = $p_scm_HashMap__newThreshold__I__I($thiz, $thiz.P.a.length);
  $thiz.ca = 0;
  return $thiz;
}
function $ct_scm_HashMap__($thiz) {
  $ct_scm_HashMap__I__D__($thiz, 16, 0.75);
  return $thiz;
}
function $p_scm_HashMap__put0__O__O__I__Z__s_Some($thiz, key, value, hash, getOld) {
  if ((((1 + $thiz.ca) | 0) >= $thiz.gH)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.P.a.length << 1));
  }
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, (hash & (($thiz.P.a.length - 1) | 0)));
}
function $p_scm_HashMap__put0__O__O__Z__s_Some($thiz, key, value, getOld) {
  if ((((1 + $thiz.ca) | 0) >= $thiz.gH)) {
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
        var old$2 = n.bU;
        var this$2 = n;
        this$2.bU = value;
        return (getOld ? new $c_s_Some(old$2) : null);
      }
      prev = n;
      n = n.aV;
    }
    if ((prev === null)) {
      $thiz.P.a[idx] = new $c_scm_HashMap$Node(key, hash, value, x30);
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
  var oldlen = $thiz.P.a.length;
  $thiz.gH = $p_scm_HashMap__newThreshold__I__I($thiz, newlen);
  if (($thiz.ca === 0)) {
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
            $thiz.P.a[i] = preLow.aV;
          }
          if ((preHigh.aV !== null)) {
            $thiz.P.a[((i + oldlen) | 0)] = preHigh.aV;
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
  return $doubleToInt((size * $thiz.jU));
}
/** @constructor */
function $c_scm_HashMap() {
  this.jU = 0.0;
  this.P = null;
  this.gH = 0;
  this.ca = 0;
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
$p.aZ = (function() {
  return this.ca;
});
$p.bO = (function(key) {
  var originalHash = $m_sr_Statics$().E(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var $x_1;
    var x1 = this.P.a[(hash & ((this.P.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.h2(key, hash);
  }
  return ($x_1 !== null);
});
$p.b5 = (function(size) {
  var target = $p_scm_HashMap__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jU)));
  if ((target > this.P.a.length)) {
    $p_scm_HashMap__growTable__I__V(this, target);
  }
});
$p.pa = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if ((xs instanceof $c_sci_HashMap)) {
    var f = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2, v2$2, v3$2) => {
      var h = (v3$2 | 0);
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, v1$2, v2$2, (h ^ ((h >>> 16) | 0)), false);
    }));
    xs.bj.kq(f);
    return this;
  } else if ((xs instanceof $c_scm_HashMap)) {
    var iter = xs.qg();
    while (iter.j()) {
      var next = iter.f();
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, next.en, next.bU, next.dl, false);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.pI();
    while (iter$2.j()) {
      var entry = iter$2.f();
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, entry.q8(), entry.uU(), entry.pZ(), false);
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
  return ((this.ca === 0) ? $m_sc_Iterator$().J : new $c_scm_HashMap$$anon$1(this));
});
$p.eE = (function() {
  return ((this.ca === 0) ? $m_sc_Iterator$().J : new $c_scm_HashMap$$anon$3(this));
});
$p.qg = (function() {
  return ((this.ca === 0) ? $m_sc_Iterator$().J : new $c_scm_HashMap$$anon$4(this));
});
$p.bX = (function(key) {
  var originalHash = $m_sr_Statics$().E(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var x34;
    var x1 = this.P.a[(hash & ((this.P.a.length - 1) | 0))];
    if ((x1 === null)) {
      var x34 = null;
      break matchResult1;
    }
    var x34 = x1.h2(key, hash);
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
    var x1 = this.P.a[(hash & ((this.P.a.length - 1) | 0))];
    if ((x1 === null)) {
      var x35 = null;
      break matchResult1;
    }
    var x35 = x1.h2(key, hash);
  }
  if ((x35 === null)) {
    return $f_sc_MapOps__default__O__O(this, key);
  }
  return x35.bU;
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
      var nd = x1.h2(key, hash);
    }
    return ((nd === null) ? default$1.I() : nd.bU);
  }
});
$p.rU = (function(elem) {
  $p_scm_HashMap__put0__O__O__Z__s_Some(this, elem.S, elem.R, false);
  return this;
});
$p.s = (function() {
  return this.ca;
});
$p.c = (function() {
  return (this.ca === 0);
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
$p.kJ = (function() {
  return $m_scm_HashMap$();
});
$p.b8 = (function() {
  return "HashMap";
});
$p.x = (function() {
  if (this.c()) {
    return $m_s_util_hashing_MurmurHash3$().hY;
  } else {
    var tupleHashIterator = new $c_scm_HashMap$$anon$5(this);
    return $m_s_util_hashing_MurmurHash3$().iA(tupleHashIterator, $m_s_util_hashing_MurmurHash3$().dW);
  }
});
$p.b3 = (function(elems) {
  return this.pa(elems);
});
$p.ad = (function(elem) {
  return this.rU(elem);
});
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cy)));
}
var $d_scm_HashMap = new $TypeData().i($c_scm_HashMap, "scala.collection.mutable.HashMap", ({
  cy: 1,
  hB: 1,
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
  i9: 1,
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
    throw this.aX(index);
  }
});
$p.eC = (function(index, elem) {
  if (((index >= 0) && (index < this.h.a.length))) {
    var a1 = this.h;
    var a1c = a1.g();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.aX(index);
  }
});
$p.er = (function(elem) {
  if ((this.h.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().fP(this.h, elem));
  } else {
    var $x_2 = this.h;
    var $x_1 = $m_sci_VectorStatics$().bM;
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
    throw this.aX(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  hr: 1,
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
  this.gy = null;
  this.a2 = null;
  this.gy = head;
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
$p.bv = (function() {
  return 2;
});
$p.bx = (function() {
  return "::";
});
$p.bw = (function(n) {
  if ((n === 0)) {
    return this.gy;
  }
  if ((n === 1)) {
    return this.a2;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.q = (function() {
  return this.gy;
});
$p.w = (function() {
  return this.a2;
});
$p.kX = (function() {
  return this.a2;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  gK: 1,
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
  aE: 1,
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
$p.bv = (function() {
  return 0;
});
$p.bx = (function() {
  return "Nil";
});
$p.bw = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.te = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.qQ = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.tB = (function() {
  throw new $c_ju_NoSuchElementException("last of empty list");
});
$p.s = (function() {
  return 0;
});
$p.d = (function() {
  return $m_sc_Iterator$().J;
});
$p.q = (function() {
  this.te();
});
$p.w = (function() {
  this.qQ();
});
$p.kX = (function() {
  this.qQ();
});
$p.g0 = (function() {
  this.tB();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  hg: 1,
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
  aE: 1,
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
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().jN, $m_sci_VectorStatics$().jN, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.pi = (function(index) {
  throw this.aX(index);
});
$p.eC = (function(index, elem) {
  throw this.aX(index);
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
$p.p = (function(o) {
  return ((this === o) || ((o instanceof $c_sci_Vector) ? false : $f_sc_Seq__equals__O__Z(this, o)));
});
$p.aX = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.o = (function(i) {
  this.pi(i);
});
$p.e = (function(v1) {
  this.pi((v1 | 0));
});
$p.C = (function(f) {
  return this;
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
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
    throw this.aX(index);
  }
});
$p.eC = (function(index, elem) {
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
    throw this.aX(index);
  }
});
$p.er = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$3 = $m_sci_VectorStatics$().fP(this.k, elem);
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
$p.cZ = (function(f) {
  var prefix1$7 = $m_sci_VectorStatics$().cB(this.h, f);
  var data2$7 = $m_sci_VectorStatics$().ac(2, this.bA, f);
  var suffix1$7 = $m_sci_VectorStatics$().cB(this.k, f);
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
    throw this.aX(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  hs: 1,
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
    throw this.aX(index);
  }
});
$p.eC = (function(index, elem) {
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
    throw this.aX(index);
  }
});
$p.er = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$16 = $m_sci_VectorStatics$().fP(this.k, elem);
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
    var $x_2 = $m_sci_VectorStatics$().fF;
    var x = $m_sci_VectorStatics$().F(this.be, this.k);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().bM;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.m) | 0));
  }
});
$p.cZ = (function(f) {
  var prefix1$21 = $m_sci_VectorStatics$().cB(this.h, f);
  var prefix2$10 = $m_sci_VectorStatics$().ac(2, this.bL, f);
  var data3$11 = $m_sci_VectorStatics$().ac(3, this.bd, f);
  var suffix2$10 = $m_sci_VectorStatics$().ac(2, this.be, f);
  var suffix1$22 = $m_sci_VectorStatics$().cB(this.k, f);
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
    throw this.aX(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  ht: 1,
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
  this.b0 = 0;
  this.bk = null;
  this.b1 = 0;
  this.bl = null;
  this.b2 = 0;
  this.aL = null;
  this.aN = null;
  this.aM = null;
  this.b0 = len1;
  this.bk = prefix2;
  this.b1 = len12;
  this.bl = prefix3;
  this.b2 = len123;
  this.aL = data4;
  this.aN = suffix3;
  this.aM = suffix2;
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
    var io = ((index - this.b2) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aL.a.length) ? this.aL.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aN.a.length) ? this.aN.a[i3].a[i2].a[i1] : ((i2 < this.aM.a.length) ? this.aM.a[i2].a[i1] : this.k.a[i1])));
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
      return this.bl.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.b0)) {
      var io$3 = ((index - this.b0) | 0);
      return this.bk.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aX(index);
  }
});
$p.eC = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.b2)) {
      var io = ((index - this.b2) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.aL.a.length)) {
        var a4 = this.aL;
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
        return new $c_sci_Vector4(this.h, this.b0, this.bk, this.b1, this.bl, this.b2, a4c, this.aN, this.aM, this.k, this.m);
      } else if ((i3 < this.aN.a.length)) {
        var a3$1 = this.aN;
        var a3c$1 = a3$1.g();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.g();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.g();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.h, this.b0, this.bk, this.b1, this.bl, this.b2, this.aL, a3c$1, this.aM, this.k, this.m);
      } else if ((i2 < this.aM.a.length)) {
        var a2$2 = this.aM;
        var a2c$2 = a2$2.g();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.g();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.h, this.b0, this.bk, this.b1, this.bl, this.b2, this.aL, this.aN, a2c$2, this.k, this.m);
      } else {
        var a1$3 = this.k;
        var a1c$3 = a1$3.g();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.h, this.b0, this.bk, this.b1, this.bl, this.b2, this.aL, this.aN, this.aM, a1c$3, this.m);
      }
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
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
      return new $c_sci_Vector4(this.h, this.b0, this.bk, this.b1, a3c$2, this.b2, this.aL, this.aN, this.aM, this.k, this.m);
    } else if ((index >= this.b0)) {
      var io$3 = ((index - this.b0) | 0);
      var a2$4 = this.bk;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.g();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.g();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.h, this.b0, a2c$4, this.b1, this.bl, this.b2, this.aL, this.aN, this.aM, this.k, this.m);
    } else {
      var a1$6 = this.h;
      var a1c$6 = a1$6.g();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.b0, this.bk, this.b1, this.bl, this.b2, this.aL, this.aN, this.aM, this.k, this.m);
    }
  } else {
    throw this.aX(index);
  }
});
$p.er = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$33 = $m_sci_VectorStatics$().fP(this.k, elem);
    var length0$33 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.b0, this.bk, this.b1, this.bl, this.b2, this.aL, this.aN, this.aM, suffix1$33, length0$33);
  } else if ((this.aM.a.length < 31)) {
    var suffix2$22 = $m_sci_VectorStatics$().F(this.aM, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$34 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.b0, this.bk, this.b1, this.bl, this.b2, this.aL, this.aN, suffix2$22, a, length0$34);
  } else if ((this.aN.a.length < 31)) {
    var suffix3$9 = $m_sci_VectorStatics$().F(this.aN, $m_sci_VectorStatics$().F(this.aM, this.k));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$35 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.b0, this.bk, this.b1, this.bl, this.b2, this.aL, suffix3$9, $m_sci_VectorStatics$().bM, a$1, length0$35);
  } else if ((this.aL.a.length < 30)) {
    var data4$10 = $m_sci_VectorStatics$().F(this.aL, $m_sci_VectorStatics$().F(this.aN, $m_sci_VectorStatics$().F(this.aM, this.k)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$36 = ((1 + this.m) | 0);
    return new $c_sci_Vector4(this.h, this.b0, this.bk, this.b1, this.bl, this.b2, data4$10, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$2, length0$36);
  } else {
    var $x_11 = this.h;
    var $x_10 = this.b0;
    var $x_9 = this.bk;
    var $x_8 = this.b1;
    var $x_7 = this.bl;
    var $x_6 = this.b2;
    var $x_5 = this.aL;
    var $x_4 = this.b2;
    var $x_3 = $m_sci_VectorStatics$().jO;
    var x = $m_sci_VectorStatics$().F(this.aN, $m_sci_VectorStatics$().F(this.aM, this.k));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().dj;
    var $x_1 = $m_sci_VectorStatics$().bM;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.m) | 0));
  }
});
$p.cZ = (function(f) {
  var prefix1$39 = $m_sci_VectorStatics$().cB(this.h, f);
  var prefix2$27 = $m_sci_VectorStatics$().ac(2, this.bk, f);
  var prefix3$14 = $m_sci_VectorStatics$().ac(3, this.bl, f);
  var data4$15 = $m_sci_VectorStatics$().ac(4, this.aL, f);
  var suffix3$14 = $m_sci_VectorStatics$().ac(3, this.aN, f);
  var suffix2$27 = $m_sci_VectorStatics$().ac(2, this.aM, f);
  var suffix1$41 = $m_sci_VectorStatics$().cB(this.k, f);
  return new $c_sci_Vector4(prefix1$39, this.b0, prefix2$27, this.b1, prefix3$14, this.b2, data4$15, suffix3$14, suffix2$27, suffix1$41, this.m);
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
      return this.aL;
      break;
    }
    case 4: {
      return this.aN;
      break;
    }
    case 5: {
      return this.aM;
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
    var io = ((index - this.b2) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.aL.a.length) ? this.aL.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aN.a.length) ? this.aN.a[i3].a[i2].a[i1] : ((i2 < this.aM.a.length) ? this.aM.a[i2].a[i1] : this.k.a[i1])));
    } else if ((index >= this.b1)) {
      var io$2 = ((index - this.b1) | 0);
      return this.bl.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.b0)) {
      var io$3 = ((index - this.b0) | 0);
      return this.bk.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aX(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  hu: 1,
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
  this.aB = 0;
  this.aQ = null;
  this.aC = 0;
  this.aR = null;
  this.aD = 0;
  this.aS = null;
  this.aE = 0;
  this.ag = null;
  this.aj = null;
  this.ai = null;
  this.ah = null;
  this.aB = len1;
  this.aQ = prefix2;
  this.aC = len12;
  this.aR = prefix3;
  this.aD = len123;
  this.aS = prefix4;
  this.aE = len1234;
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
$p.o = (function(index) {
  if (((index >= 0) && (index < this.m))) {
    var io = ((index - this.aE) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ag.a.length) ? this.ag.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aj.a.length) ? this.aj.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ai.a.length) ? this.ai.a[i3].a[i2].a[i1] : ((i2 < this.ah.a.length) ? this.ah.a[i2].a[i1] : this.k.a[i1]))));
    } else if ((index >= this.aD)) {
      var io$2 = ((index - this.aD) | 0);
      return this.aS.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aC)) {
      var io$3 = ((index - this.aC) | 0);
      return this.aR.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aB)) {
      var io$4 = ((index - this.aB) | 0);
      return this.aQ.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aX(index);
  }
});
$p.eC = (function(index, elem) {
  if (((index >= 0) && (index < this.m))) {
    if ((index >= this.aE)) {
      var io = ((index - this.aE) | 0);
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
        return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, a5c, this.aj, this.ai, this.ah, this.k, this.m);
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
        return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.ag, a4c$1, this.ai, this.ah, this.k, this.m);
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
        return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.ag, this.aj, a3c$2, this.ah, this.k, this.m);
      } else if ((i2 < this.ah.a.length)) {
        var a2$3 = this.ah;
        var a2c$3 = a2$3.g();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.g();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.ag, this.aj, this.ai, a2c$3, this.k, this.m);
      } else {
        var a1$4 = this.k;
        var a1c$4 = a1$4.g();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.ag, this.aj, this.ai, this.ah, a1c$4, this.m);
      }
    } else if ((index >= this.aD)) {
      var io$2 = ((index - this.aD) | 0);
      var a4$2 = this.aS;
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
      return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, this.aR, this.aD, a4c$2, this.aE, this.ag, this.aj, this.ai, this.ah, this.k, this.m);
    } else if ((index >= this.aC)) {
      var io$3 = ((index - this.aC) | 0);
      var a3$4 = this.aR;
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
      return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, a3c$4, this.aD, this.aS, this.aE, this.ag, this.aj, this.ai, this.ah, this.k, this.m);
    } else if ((index >= this.aB)) {
      var io$4 = ((index - this.aB) | 0);
      var a2$6 = this.aQ;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.g();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.g();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.h, this.aB, a2c$6, this.aC, this.aR, this.aD, this.aS, this.aE, this.ag, this.aj, this.ai, this.ah, this.k, this.m);
    } else {
      var a1$8 = this.h;
      var a1c$8 = a1$8.g();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.ag, this.aj, this.ai, this.ah, this.k, this.m);
    }
  } else {
    throw this.aX(index);
  }
});
$p.er = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$54 = $m_sci_VectorStatics$().fP(this.k, elem);
    var length0$54 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.ag, this.aj, this.ai, this.ah, suffix1$54, length0$54);
  } else if ((this.ah.a.length < 31)) {
    var suffix2$41 = $m_sci_VectorStatics$().F(this.ah, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$55 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.ag, this.aj, this.ai, suffix2$41, a, length0$55);
  } else if ((this.ai.a.length < 31)) {
    var suffix3$29 = $m_sci_VectorStatics$().F(this.ai, $m_sci_VectorStatics$().F(this.ah, this.k));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$56 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.ag, this.aj, suffix3$29, $m_sci_VectorStatics$().bM, a$1, length0$56);
  } else if ((this.aj.a.length < 31)) {
    var suffix4$12 = $m_sci_VectorStatics$().F(this.aj, $m_sci_VectorStatics$().F(this.ai, $m_sci_VectorStatics$().F(this.ah, this.k)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$57 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, this.ag, suffix4$12, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$2, length0$57);
  } else if ((this.ag.a.length < 30)) {
    var data5$13 = $m_sci_VectorStatics$().F(this.ag, $m_sci_VectorStatics$().F(this.aj, $m_sci_VectorStatics$().F(this.ai, $m_sci_VectorStatics$().F(this.ah, this.k))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$58 = ((1 + this.m) | 0);
    return new $c_sci_Vector5(this.h, this.aB, this.aQ, this.aC, this.aR, this.aD, this.aS, this.aE, data5$13, $m_sci_VectorStatics$().fF, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$3, length0$58);
  } else {
    var $x_14 = this.h;
    var $x_13 = this.aB;
    var $x_12 = this.aQ;
    var $x_11 = this.aC;
    var $x_10 = this.aR;
    var $x_9 = this.aD;
    var $x_8 = this.aS;
    var $x_7 = this.aE;
    var $x_6 = this.ag;
    var $x_5 = this.aE;
    var $x_4 = $m_sci_VectorStatics$().oC;
    var x = $m_sci_VectorStatics$().F(this.aj, $m_sci_VectorStatics$().F(this.ai, $m_sci_VectorStatics$().F(this.ah, this.k)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().fF;
    var $x_2 = $m_sci_VectorStatics$().dj;
    var $x_1 = $m_sci_VectorStatics$().bM;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.m) | 0));
  }
});
$p.cZ = (function(f) {
  var prefix1$61 = $m_sci_VectorStatics$().cB(this.h, f);
  var prefix2$47 = $m_sci_VectorStatics$().ac(2, this.aQ, f);
  var prefix3$35 = $m_sci_VectorStatics$().ac(3, this.aR, f);
  var prefix4$18 = $m_sci_VectorStatics$().ac(4, this.aS, f);
  var data5$19 = $m_sci_VectorStatics$().ac(5, this.ag, f);
  var suffix4$18 = $m_sci_VectorStatics$().ac(4, this.aj, f);
  var suffix3$35 = $m_sci_VectorStatics$().ac(3, this.ai, f);
  var suffix2$47 = $m_sci_VectorStatics$().ac(2, this.ah, f);
  var suffix1$64 = $m_sci_VectorStatics$().cB(this.k, f);
  return new $c_sci_Vector5(prefix1$61, this.aB, prefix2$47, this.aC, prefix3$35, this.aD, prefix4$18, this.aE, data5$19, suffix4$18, suffix3$35, suffix2$47, suffix1$64, this.m);
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
      return this.aQ;
      break;
    }
    case 2: {
      return this.aR;
      break;
    }
    case 3: {
      return this.aS;
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
    var io = ((index - this.aE) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.ag.a.length) ? this.ag.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aj.a.length) ? this.aj.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.ai.a.length) ? this.ai.a[i3].a[i2].a[i1] : ((i2 < this.ah.a.length) ? this.ah.a[i2].a[i1] : this.k.a[i1]))));
    } else if ((index >= this.aD)) {
      var io$2 = ((index - this.aD) | 0);
      return this.aS.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aC)) {
      var io$3 = ((index - this.aC) | 0);
      return this.aR.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aB)) {
      var io$4 = ((index - this.aB) | 0);
      return this.aQ.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aX(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  hv: 1,
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
  this.aF = null;
  this.al = 0;
  this.aG = null;
  this.am = 0;
  this.aH = null;
  this.an = 0;
  this.aI = null;
  this.av = 0;
  this.a6 = null;
  this.aa = null;
  this.a9 = null;
  this.a8 = null;
  this.a7 = null;
  this.ak = len1;
  this.aF = prefix2;
  this.al = len12;
  this.aG = prefix3;
  this.am = len123;
  this.aH = prefix4;
  this.an = len1234;
  this.aI = prefix5;
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
$p.o = (function(index) {
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
      return this.aI.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.am)) {
      var io$3 = ((index - this.am) | 0);
      return this.aH.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.al)) {
      var io$4 = ((index - this.al) | 0);
      return this.aG.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ak)) {
      var io$5 = ((index - this.ak) | 0);
      return this.aF.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aX(index);
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
        return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, a6c, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
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
        return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, a5c$1, this.a9, this.a8, this.a7, this.k, this.m);
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
        return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, this.aa, a4c$2, this.a8, this.a7, this.k, this.m);
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
        return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, this.aa, this.a9, a3c$3, this.a7, this.k, this.m);
      } else if ((i2 < this.a7.a.length)) {
        var a2$4 = this.a7;
        var a2c$4 = a2$4.g();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.g();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, this.aa, this.a9, this.a8, a2c$4, this.k, this.m);
      } else {
        var a1$5 = this.k;
        var a1c$5 = a1$5.g();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, a1c$5, this.m);
      }
    } else if ((index >= this.an)) {
      var io$2 = ((index - this.an) | 0);
      var a5$2 = this.aI;
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
      return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, a5c$2, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
    } else if ((index >= this.am)) {
      var io$3 = ((index - this.am) | 0);
      var a4$4 = this.aH;
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
      return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, a4c$4, this.an, this.aI, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
    } else if ((index >= this.al)) {
      var io$4 = ((index - this.al) | 0);
      var a3$6 = this.aG;
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
      return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, a3c$6, this.am, this.aH, this.an, this.aI, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
    } else if ((index >= this.ak)) {
      var io$5 = ((index - this.ak) | 0);
      var a2$8 = this.aF;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.g();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.g();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.h, this.ak, a2c$8, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
    } else {
      var a1$10 = this.h;
      var a1c$10 = a1$10.g();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, this.k, this.m);
    }
  } else {
    throw this.aX(index);
  }
});
$p.er = (function(elem) {
  if ((this.k.a.length < 32)) {
    var suffix1$79 = $m_sci_VectorStatics$().fP(this.k, elem);
    var length0$79 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, this.aa, this.a9, this.a8, this.a7, suffix1$79, length0$79);
  } else if ((this.a7.a.length < 31)) {
    var suffix2$63 = $m_sci_VectorStatics$().F(this.a7, this.k);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$80 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, this.aa, this.a9, this.a8, suffix2$63, a, length0$80);
  } else if ((this.a8.a.length < 31)) {
    var suffix3$52 = $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.k));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$81 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, this.aa, this.a9, suffix3$52, $m_sci_VectorStatics$().bM, a$1, length0$81);
  } else if ((this.a9.a.length < 31)) {
    var suffix4$36 = $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.k)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$82 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, this.aa, suffix4$36, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$2, length0$82);
  } else if ((this.aa.a.length < 31)) {
    var suffix5$15 = $m_sci_VectorStatics$().F(this.aa, $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.k))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$83 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, this.a6, suffix5$15, $m_sci_VectorStatics$().fF, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$3, length0$83);
  } else if ((this.a6.a.length < 62)) {
    var data6$16 = $m_sci_VectorStatics$().F(this.a6, $m_sci_VectorStatics$().F(this.aa, $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.k)))));
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var length0$84 = ((1 + this.m) | 0);
    return new $c_sci_Vector6(this.h, this.ak, this.aF, this.al, this.aG, this.am, this.aH, this.an, this.aI, this.av, data6$16, $m_sci_VectorStatics$().jO, $m_sci_VectorStatics$().fF, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bM, a$4, length0$84);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cZ = (function(f) {
  var prefix1$87 = $m_sci_VectorStatics$().cB(this.h, f);
  var prefix2$70 = $m_sci_VectorStatics$().ac(2, this.aF, f);
  var prefix3$59 = $m_sci_VectorStatics$().ac(3, this.aG, f);
  var prefix4$43 = $m_sci_VectorStatics$().ac(4, this.aH, f);
  var prefix5$22 = $m_sci_VectorStatics$().ac(5, this.aI, f);
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
      return this.aF;
      break;
    }
    case 2: {
      return this.aG;
      break;
    }
    case 3: {
      return this.aH;
      break;
    }
    case 4: {
      return this.aI;
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
      return this.aI.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.am)) {
      var io$3 = ((index - this.am) | 0);
      return this.aH.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.al)) {
      var io$4 = ((index - this.al) | 0);
      return this.aG.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.ak)) {
      var io$5 = ((index - this.ak) | 0);
      return this.aF.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.h.a[index];
    }
  } else {
    throw this.aX(index);
  }
});
$p.C = (function(f) {
  return this.cZ(f);
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  hw: 1,
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
$p.b3 = (function(elems) {
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
$p.C = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aY = (function(len) {
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
$p.rL = (function(x) {
  var this$1 = this.bh;
  var str = ("" + $cToS(x));
  this$1.t = (this$1.t + str);
  return this;
});
$p.u = (function() {
  return this.bh.t;
});
$p.pg = (function(xs) {
  if (false) {
    var this$3 = this.bh;
    var str = xs.uZ;
    this$3.t = (("" + this$3.t) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.bh.pf(xs.c9);
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
  return $bC(this.bh.pm(i));
});
$p.e = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bh.pm(i));
});
$p.h3 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).pg(coll);
});
$p.f8 = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).pg(coll);
});
$p.ad = (function(elem) {
  return this.rL($uC(elem));
});
$p.ar = (function() {
  return this.bh.t;
});
$p.az = (function() {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.i5)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().iy($thiz);
  $thiz.cw = buf.cw;
  $thiz.dU = buf.dU;
  $thiz.hS = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.hT = ((1 + $thiz.hT) | 0);
  if ($thiz.hS) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.hT = 0;
  this.cw = null;
  this.dU = null;
  this.hS = false;
  this.cx = 0;
  this.hT = 0;
  this.cw = $m_sci_Nil$();
  this.dU = null;
  this.hS = false;
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
$p.cc = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.b5 = (function(size) {
});
$p.d = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.cw.d(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.hT)));
});
$p.ew = (function() {
  return $m_scm_ListBuffer$();
});
$p.o = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.cw, i);
});
$p.i = (function() {
  return this.cx;
});
$p.s = (function() {
  return this.cx;
});
$p.c = (function() {
  return (this.cx === 0);
});
$p.qU = (function() {
  this.hS = (!this.c());
  return this.cw;
});
$p.rT = (function(elem) {
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
$p.iy = (function(xs) {
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
$p.rG = (function(xs) {
  var it = xs.d();
  if (it.j()) {
    var fresh = new $c_scm_ListBuffer().iy(it);
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
$p.b8 = (function() {
  return "ListBuffer";
});
$p.az = (function() {
  return $m_scm_ListBuffer$();
});
$p.e = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.cw, i);
});
$p.ar = (function() {
  return this.qU();
});
$p.ad = (function(elem) {
  return this.rT(elem);
});
$p.b3 = (function(elems) {
  return this.rG(elems);
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
  aG: 1,
  b9: 1,
  l: 1,
  t: 1,
  N: 1,
  ai: 1,
  a: 1,
  Y: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.fG = 0;
  $thiz.cN = initialElements;
  $thiz.aU = initialSize;
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
      var z$tailLocal1$tmp1 = op.bN(z$tailLocal1, $thiz.cN.a[start$tailLocal1]);
      start$tailLocal1 = start$tailLocal1$tmp1;
      z$tailLocal1 = z$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.fG = 0;
  this.cN = null;
  this.aU = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.d = (function() {
  return this.r1().d();
});
$p.bn = (function() {
  return this.r1().bn();
});
$p.ch = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aY = (function(len) {
  var x = this.aU;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.C = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.cc = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.s = (function() {
  return this.aU;
});
$p.kl = (function(n) {
  this.cN = $m_scm_ArrayBuffer$().qC(this.cN, this.aU, n);
});
$p.b5 = (function(size) {
  if (((size > this.aU) && (size >= 1))) {
    this.kl(size);
  }
});
$p.o = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().kC(n, ((this.aU - 1) | 0));
  }
  if ((hi > this.aU)) {
    throw $m_scg_CommonErrors$().kC(((hi - 1) | 0), ((this.aU - 1) | 0));
  }
  return this.cN.a[n];
});
$p.i = (function() {
  return this.aU;
});
$p.r1 = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.fG)));
});
$p.ew = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.rQ = (function(elem) {
  this.fG = ((1 + this.fG) | 0);
  var newSize = ((1 + this.aU) | 0);
  if ((this.cN.a.length <= ((newSize - 1) | 0))) {
    this.kl(newSize);
  }
  this.aU = newSize;
  this.cN.a[((newSize - 1) | 0)] = elem;
  return this;
});
$p.p9 = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.aU;
    if ((elemsLength > 0)) {
      this.fG = ((1 + this.fG) | 0);
      this.kl(((this.aU + elemsLength) | 0));
      $m_s_Array$().et(elems.cN, 0, this.cN, this.aU, elemsLength);
      this.aU = ((this.aU + elemsLength) | 0);
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
  var srcLen = this.aU;
  var destLen = $m_jl_reflect_Array$().aO(xs);
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
  return $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 0, this.aU, z, op);
});
$p.du = (function(op) {
  return ((this.aU > 0) ? $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 1, this.aU, this.cN.a[0], op) : $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op));
});
$p.e = (function(v1) {
  return this.o((v1 | 0));
});
$p.az = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.ad = (function(elem) {
  return this.rQ(elem);
});
$p.b3 = (function(elems) {
  return this.p9(elems);
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
  aG: 1,
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
$p.C = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.q = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aY = (function(len) {
  var x = (this.eq.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cc = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.ew = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.o = (function(index) {
  return this.eq[index];
});
$p.i = (function() {
  return (this.eq.length | 0);
});
$p.s = (function() {
  return (this.eq.length | 0);
});
$p.bC = (function() {
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
$p.az = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  jp: 1,
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
  aG: 1,
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
