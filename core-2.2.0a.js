﻿/*! ------------------------------------------------------------------------
//                                jTypes 2.2.0a
//  ------------------------------------------------------------------------
//
//                   Copyright 2013 Gaulinsoft Corporation
//
//       Licensed under the Apache License, Version 2.0 (the "License");
//      you may not use this file except in compliance with the License.
//                   You may obtain a copy of the License at
//
//                 http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
//      distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
//                       limitations under the License.
*/
(function(window, undefined)
{
    // ########## STRICT ##########

    // Enable strict mode
    'use strict';

    // ########## VERSION ##########

    // Set the version number
    var $_version = '2.2.0a235';

    // ########## LANGUAGE ##########

    // Create the compatibility exception, arguments exception format string, and the language prefix
    var $_lang_compatibility       = 'A browser that supports JavaScript 1.8.5 (MSIE 9+) is required.';
    var $_lang_exception_arguments = '"{0}({1})" has some invalid arguments.';
    var $_lang_exception_prefix    = 'jTypes Error: ';

    // Create the language constants
    var $_lang_$$_abstract_conflict_1              = 'Abstract classes cannot have the {0} modifier.';
    var $_lang_$$_abstract_instance                = 'Abstract classes cannot be instantiated.';
    var $_lang_$$_abstract_override                = 'Class must implement the inherited abstract {1} "{0}" with the override modifier.';
    var $_lang_$$_derive_class                     = 'Structs cannot inherit from a class.';
    var $_lang_$$_derive_export                    = 'Class must inherit from an imported class to have a precompiled string.';
    var $_lang_$$_derive_import                    = 'Class must have a precompiled string to inherit from an imported class.';
    var $_lang_$$_derive_sealed                    = 'Classes cannot inherit from a sealed class.';
    var $_lang_$$_derive_unoptimized               = 'Class must inherit from an optimized class to have the optimized modifier.';
    var $_lang_$$_derive_unsafe                    = 'Classes cannot inherit from a .NET class.';
    var $_lang_$$_field_readonly                   = '"{0}" cannot be set because it is a read-only field.';
    var $_lang_$$_field_type                       = '"{0}" must have a value of the type {1}, null, or undefined.';
    var $_lang_$$_import                           = 'Class cannot be imported because the definitions have been altered.';
    var $_lang_$$_keyword                          = '"{0}" is not a valid class modifier.';
    var $_lang_$$_member_abstract                  = '"{0}" cannot have the abstract modifier in a non-abstract class.';
    var $_lang_$$_member_abstract_override         = '"{0}" must implement the inherited abstract {1} with the override modifier.';
    var $_lang_$$_member_keyword                   = '"{1}" has an invalid {0} modifier "{2}".';
    var $_lang_$$_member_keyword_access_2          = '"{0}" cannot have more than one access modifier.';
    var $_lang_$$_member_keyword_conflict_2        = '"{0}" cannot have the {1} and {2} modifiers.';
    var $_lang_$$_member_keyword_escapsulation     = '"{0}" cannot have the public, protected, or private modifiers because it is {1}.';
    var $_lang_$$_member_keyword_polymorphism      = '"{0}" cannot have the abstract, virtual, or override modifiers because it is {1}.';
    var $_lang_$$_member_keyword_readonly          = '"{0}" cannot have the readonly modifier because it is {1}.';
    var $_lang_$$_member_keyword_requires_1        = '"{0}" cannot have the {1} modifier without the {2} modifier.';
    var $_lang_$$_member_name_2                    = '"{0}" cannot have more than one definition.';
    var $_lang_$$_member_name_invalid              = '"{1}" is not a valid {0} name.';
    var $_lang_$$_member_name_null                 = '"" is not a valid {0} name.';
    var $_lang_$$_member_name_package              = '"{0}" cannot have modifiers because it is a packaged member definition.';
    var $_lang_$$_member_name_prototype_2          = '"{0}" cannot have more than one definition or hide an inherited non-prototype member.';
    var $_lang_$$_member_name_static_2             = '"{0}" cannot have more than one static definition.';
    var $_lang_$$_member_override_null             = '"{0}" has no suitable {1} to override.';
    var $_lang_$$_member_property_accessors        = '"{0}" must have both accessors to have an access modifier on the {1} accessor.';
    var $_lang_$$_member_property_accessors_access = '"{0}" must have a more restrictive access modifier on the {1} accessor.';
    var $_lang_$$_member_property_function         = '"{0}" must have a function for the {1} accessor.';
    var $_lang_$$_member_property_keyword          = '"{0}" has an invalid modifier "{2}" on the {1} accessor.';
    var $_lang_$$_member_property_keyword_access_2 = '"{0}" cannot have access modifiers on both property accessors.';
    var $_lang_$$_member_property_name_2           = '"{0}" cannot have more than one definition for the {1} accessor.';
    var $_lang_$$_member_property_name_invalid     = '"{0}" cannot have a "{1}" property accessor.';
    var $_lang_$$_member_property_name_null        = '"{0}" must have at least one property accessor.';
    var $_lang_$$_member_virtual                   = '"{0}" cannot have the virtual modifier in a sealed class.';
    var $_lang_$$_struct_expando                   = 'Structs cannot have expando instances.';
    var $_lang_$$_struct_export                    = 'Structs cannot be exported.';
    var $_lang_export_import                       = 'An imported class cannot be exported.';
    var $_lang_export_struct                       = 'A struct cannot be exported.';

    // ########## NATIVE CODE ##########

    // ---------- OBJECT ----------
    var $__object                   = Object;
    var $__objectProto__            = $__object.prototype;
    var $__create                   = $__object.create;
    var $__defineProperties         = $__object.defineProperties;
    var $__defineProperty           = $__object.defineProperty;
    var $__freeze                   = $__object.freeze;
    var $__getOwnPropertyDescriptor = $__object.getOwnPropertyDescriptor;
    var $__getOwnPropertyNames      = $__object.getOwnPropertyNames;
    var $__getPrototypeOf           = $__object.getPrototypeOf;
    var $__isExtensible             = $__object.isExtensible;
    var $__isFrozen                 = $__object.isFrozen;
    var $__isSealed                 = $__object.isSealed;
    var $__keys                     = $__object.keys;
    var $__preventExtensions        = $__object.preventExtensions;
    var $__propertyIsEnumerable     = $__object.propertyIsEnumerable;
    var $__seal                     = $__object.seal;
    var $__setPrototypeOf           = $__object.setPrototypeOf || null;
    var $__hasOwnProperty__         = $__objectProto__.hasOwnProperty;
    var $__isPrototypeOf__          = $__objectProto__.isPrototypeOf;
    var $__toString__               = $__objectProto__.toString;
    var $__valueOf__                = $__objectProto__.valueOf;

    // ---------- ARRAY ----------
    var $__array               = Array;
    var $__arrayProto__        = $__array.prototype;
    var $__array_isArray       = $__array.isArray;
    var $__array_every__       = $__arrayProto__.every;
    var $__array_filter__      = $__arrayProto__.filter;
    var $__array_forEach__     = $__arrayProto__.forEach;
    var $__array_indexOf__     = $__arrayProto__.indexOf;
    var $__array_lastIndexOf__ = $__arrayProto__.lastIndexOf;
    var $__array_map__         = $__arrayProto__.map;
    var $__array_reduce__      = $__arrayProto__.reduce;
    var $__array_reduceRight__ = $__arrayProto__.reduceRight;
    var $__array_some__        = $__arrayProto__.some;
    var $__array_toString__    = $__arrayProto__.toString;

    // ---------- BOOLEAN ----------
    var $__boolean            = Boolean;
    var $__booleanProto__     = $__boolean.prototype;
    var $__boolean_toString__ = $__booleanProto__.toString;
    var $__boolean_valueOf__  = $__booleanProto__.valueOf;

    // ---------- DATE ----------
    var $__date            = Date;
    var $__dateProto__     = $__date.prototype;
    var $__date_toString__ = $__dateProto__.toString;
    var $__date_valueOf__  = $__dateProto__.valueOf;

    // ---------- ERROR ----------
    var $__error            = Error;
    var $__errorProto__     = $__error.prototype;
    var $__error_toString__ = $__errorProto__.toString;
    var $__error_valueOf__  = $__errorProto__.valueOf;

    // ---------- FUNCTION ----------
    var $__function            = Function;
    var $__functionProto__     = $__function.prototype;
    var $__function_apply__    = $__functionProto__.apply;
    var $__function_call__     = $__functionProto__.call;
    var $__function_toString__ = $__functionProto__.toString;
    var $__function_valueOf__  = $__functionProto__.valueOf;

    // ---------- NUMBER ----------
    var $__number            = Number;
    var $__numberProto__     = $__number.prototype;
    var $__number_toString__ = $__numberProto__.toString;
    var $__number_valueOf__  = $__numberProto__.valueOf;
    
    // Get the number constants as number primitives
    var $__number_maxValue__         = $__number_valueOf__.call($__number.MAX_VALUE);
    var $__number_minValue__         = $__number_valueOf__.call($__number.MIN_VALUE);
    var $__number_negativeInfinity__ = $__number_valueOf__.call($__number.NEGATIVE_INFINITY);
    var $__number_positiveInfinity__ = $__number_valueOf__.call($__number.POSITIVE_INFINITY);

    // Get the global NaN constant as a number primitive
    var $__NaN__ = $__number_valueOf__.call(NaN);

    // ---------- REGEXP ----------
    var $__regexp            =  RegExp;
    var $__regexpProto__     = $__regexp.prototype;
    var $__regexp_toString__ = $__regexpProto__.toString;
    var $__regexp_valueOf__  = $__regexpProto__.valueOf;

    // ---------- STRING ----------
    var $__string            = String;
    var $__stringProto__     = $__string.prototype;
    var $__string_match__    = $__stringProto__.match;
    var $__string_replace__  = $__stringProto__.replace;
    var $__string_toString__ = $__stringProto__.toString;
    var $__string_trim__     = $__stringProto__.trim;
    var $__string_valueOf__  = $__stringProto__.valueOf;

    // ---------- WINDOW ----------
    var $__window            = null;
    var $__windowProto__     = null;
    var $__window_toString__ = null;
    var $__window_valueOf__  = null;

    // If a window constructor is defined
    if (typeof Window !== 'undefined' && typeof Window.prototype !== 'undefined')
    {
        // Create the window references
        $__window            = Window;
        $__windowProto__     = $__window.prototype;
        $__window_toString__ = $__windowProto__.toString;
        $__window_valueOf__  = $__windowProto__.valueOf;
    }
    
    // If any of the major native code methods from recent JavaScript versions are not found, throw an exception
    if (!$__create || !$__defineProperty || !$__freeze || !$__getPrototypeOf || !$__preventExtensions || !$__seal || !$__array_forEach__ || !$__array_indexOf__ || !$__string_trim__)
        throw $_lang_exception_prefix + $_lang_compatibility;
    
    // ########## SHIMS ##########

    // If ECMAScript 6 is not supported
    if (!$__setPrototypeOf)
        (function()
        {
            // Create a simple object
            var $set  = null;
            var $test = {};

            // If the browser does not support the special "__proto__" property, return
            if ($test.__proto__ !== $__objectProto__)
                return;
            
            try
            {
                // Get the descriptor for the special "__proto__" property
                var $descriptor = $__getOwnPropertyDescriptor($__objectProto__, '__proto__') || null;
                
                // Get the set accessor from the descriptor
                $set = $descriptor && $descriptor['set'] || null;

                // If a set accessor was not found, return
                if (typeof $set !== 'function')
                    return;

                // Set the prototype of the object to null
                $set.call($test, null);
            }
            catch (e)
            {
                return;
            }

            // If the prototype of the object was not set to null, return
            if ($__getPrototypeOf($test) !== null)
                return;

            // Create the shim
            $__setPrototypeOf = function($object, $prototype)
            {
                // Set the object prototype
                $set.call($object, $prototype);

                // Return the object
                return $object;
            };
        })();

    // Create the temporary shim (which MUST be called on object instances)
    var $_shims_setPrototypeOf = $__setPrototypeOf;

    // If a shim was not created
    if (!$_shims_setPrototypeOf)
        (function()
        {
            // Create a simple object
            var $test = {};

            // If the browser does not support the special "__proto__" property, return
            if ($test.__proto__ !== $__objectProto__)
                return;

            try
            {
                // Set the prototype of the object to null
                $test.__proto__ = null;
            }
            catch (e)
            {
                return;
            }

            // If the prototype of the object was not set to null, return
            if ($__getPrototypeOf($test) !== null)
                return;
            
            // Create a temporary shim
            $_shims_setPrototypeOf = function($object, $prototype)
            {
                // Set the object prototype
                $object.__proto__ = $prototype;

                // Return the object
                return $object;
            };
        })();

    ////////////////////////////////

    (function()
    {
        var $configurable = function($object, $name)
        {
            // Get the property descriptor
            var $descriptor   = $__getOwnPropertyDescriptor($object, $name);
            
            // Return true if the property is configurable
            return !$descriptor || !!$descriptor['configurable'];
        };
        var $define       = function($object, $name, $function)
        {
            if (typeof $function === 'function' && $configurable($object, $name))
                $__defineProperty($object, $name, { 'configurable': false, 'enumerable': false, 'value': $function, 'writable': false });
        };
        var $lock         = function($object)
        {
            $define($object, 'apply', $__function_apply__);
            $define($object, 'call', $__function_call__);
        };
        
        $lock($__functionProto__);
        $lock($__function_apply__);
        $lock($__function_call__);
    })();
    
    // ########## EXCEPTIONS ##########

    // Create the exceptions helpers
    var $_exceptionArguments = function($name, $arguments)
    {
        // If a name was provided, prepend "$$." for reference
        if ($name)
            $name = '$$.' + $name;
        // The jTypes function is throwing the exception instead
        else
            $name = '$$';

        // Create the types array
        var $types = new $__array($arguments.length);

        // Set the argument types in the types array
        for (var $i = 0, $j = $types.length; $i < $j; $i++)
            $types[$i] = $$.type($arguments[$i]);

        // Return the exception string
        return $_lang_exception_prefix + $$.format($_lang_exception_arguments, $name, $types.join(', '));
    };
    var $_exceptionFormat    = function($message)
    {
        // Return the exception string
        return $_lang_exception_prefix + $$.format.apply($$, arguments);
    };

    // ########## DEFINES ##########

    // Create the defines helpers
    var $_defineField    = function($name, $field, $writable)
    {
        // Define an enumerable field on the jTypes object
        return $__defineProperty($$, $name,
        {
            'configurable': false,
            'enumerable':   true,
            'value':        $field,
            'writable':     !!$writable
        });
    };
    var $_defineMethod   = function($name, $method)
    {
        // If the name does not contain a space, define a non-enumerable method on the jTypes object
        if ($name.indexOf(' ') < 0)
            return $__defineProperty($$, $name,
            {
                'configurable': false,
                'enumerable':   true,
                'value':        $method,
                'writable':     false
            });

        // Create the method names array
        var $names = $name.split(' ') || '';

        // Define each method in the method names array
        for (var $i = 0, $j = $names.length; $i < $j; $i++)
            $_defineMethod($names[$i], $method);
    };
    var $_defineProperty = function($name, $getMethod, $setMethod)
    {
        // If the name does not contain a space, define an enumerable property on the jTypes object
        if ($name.indexOf(' ') < 0)
            return $__defineProperty($$, $name,
            {
                'configurable': false,
                'enumerable':   true,
                'get':          $getMethod || undefined,
                'set':          $setMethod || undefined
            });

        // Create the property names array
        var $names = $name.split(' ') || '';

        // Define each property in the property names array
        for (var $i = 0, $j = $names.length; $i < $j; $i++)
            $_defineProperty($names[$i], $getMethod, $setMethod);
    };

    // ########## LOCK ##########

    // Create the internal lock reference
    var $_lock = {};

    // ##########################
    // ########## CORE ##########
    // ##########################

    // ########## CONSTANTS ##########

    var $_const_construct_arguments = 'c,k,f,m,a,d,d2,p,l';
    var $_const_int_max             = 9007199254740992;
    var $_const_int_min             = -$_const_int_max;
    var $_const_precompile_prefix   = '~jT_';

    // ########## KEYS ##########

    // Create the characters string and keys array
    var $_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var $_keys       = $_const_construct_arguments.split(',') || [];

    // Append the lowercase characters to the characters string
    $_characters += $_characters.toLowerCase();

    // Create the key generator helper
    var $_keyGenerator = function($length, $noTilde)
    {
        // If no length was provided, use a default length of three
        if (!$length)
            $length = 3;

        // Create the key
        var $key = '';

        do
        {
            // Reset the key
            $key = '';

            // Append random characters to the key
            for (var $i = 0; $i < $length; $i++)
                $key += $_characters.charAt(Math.floor($_characters.length * Math.random()));
        }
        // Break if the key was already found in the keys array
        while ($__array_indexOf__.call($_keys, $key) >= 0);

        // Push the key into the keys array
        $_keys.push($key);

        // If the no tidle flag is set, return the key
        if ($noTilde)
            return $key;

        // Return the key
        return '~' + $key;
    };

    // Create the definition obfuscated key hash flag and length setting
    var $_definition_keyHash   = true;
    var $_definition_keyLength = 3;
    var $_definition_keySniff  = $_keyGenerator($_definition_keyLength);

    // Create the definition obfuscated keys
    var $_definition_abstract          = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~abstract';
    var $_definition_baseClass         = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~baseClass';
    var $_definition_cache             = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~cache';
    var $_definition_construct         = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~construct';
    var $_definition_expando_class     = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~expandoClass';
    var $_definition_expando_private   = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~expandoPrivate';
    var $_definition_expando_prototype = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~expandoPrototype';
    var $_definition_expando_public    = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~expandoPublic';
    var $_definition_final             = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~final';
    var $_definition_import            = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~import';
    var $_definition_optimized         = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~optimized';
    var $_definition_private           = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~private';
    var $_definition_precompile        = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~precompile';
    var $_definition_protected         = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~protected';
    var $_definition_public            = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~public';
    var $_definition_struct            = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~struct';
    var $_definition_unsafe            = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~unsafe';

    // #################################################
    // ########## BEGIN jTypes.NET INJECTIONS ##########
    // #################################################

    // Create the definition member obfuscated keys
    var $_definition_member_field_injection    = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~fieldInjection';
    var $_definition_member_field_readonly     = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~fieldReadOnly';
    var $_definition_member_field_type         = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~fieldType';
    var $_definition_member_method_abstract    = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~methodAbstract';
    var $_definition_member_method_final       = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~methodFinal';
    var $_definition_member_method_type        = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~methodType';
    var $_definition_member_method_virtual     = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~methodVirtual';
    var $_definition_member_name               = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~name';
    var $_definition_member_property_accessors = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~propertyAccessors';
    var $_definition_member_type               = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~type';
    var $_definition_member_value              = $_definition_keyHash ? $_keyGenerator($_definition_keyLength) : '~value';

    // Create the injection flags length
    var $_inject_flagCount = 0;

    // Create the injection flags
    var $_inject_private   = $_inject_flagCount++;
    var $_inject_protected = $_inject_flagCount++;
    var $_inject_prototype = $_inject_flagCount++;
    var $_inject_public    = $_inject_flagCount++;
    var $_inject_static    = $_inject_flagCount++;

    // Create the package flag and key lengths
    var $_package_flagCount = 0;
    var $_package_keyLength = 3;
    var $_package_keySniff  = $_keyGenerator($_package_keyLength);

    // Create the member package flags
    var $_package_modifiers = $_package_flagCount++;
    var $_package_type      = $_package_flagCount++;
    var $_package_value     = $_package_flagCount++;

    // Create the unsafe token
    var $_unsafe = '';

    // ###############################################
    // ########## END jTypes.NET INJECTIONS ##########
    // ###############################################

    // Create the accessor member flags length
    var $_accessor_flagCount = 0;

    // Create the accessor member flags
    var $_accessor_modifiers = $_accessor_flagCount++;
    var $_accessor_name      = $_accessor_flagCount++;
    var $_accessor_private   = $_accessor_flagCount++;
    var $_accessor_protected = $_accessor_flagCount++;
    var $_accessor_public    = $_accessor_flagCount++;
    var $_accessor_value     = $_accessor_flagCount++;

    // Create the precompile obfuscated keys
    var $_precompile_cache      = $_keyGenerator(1, true);
    var $_precompile_injections = $_keyGenerator(1, true);
    var $_precompile_matrix     = $_keyGenerator(1, true);
    var $_precompile_null       = $_keyGenerator(1, true);
    var $_precompile_readonly   = $_keyGenerator(1, true);
    var $_precompile_reference  = $_keyGenerator(1, true);

    // ########## CLASSES ##########

    // Create the base class of all classes and the base prototype of all prototypes
    var $_class     = function()
    {
        //
    };
    var $_prototype = $__create(null);

    // Define the class and instance toString methods
    var $_class_toString     = function()
    {
        // Return a class type string
        return '[object Class]';
    };
    var $_prototype_toString = function()
    {
        // Return an instance type string
        return '[object Instance]';
    };

    // Define the toString method on the base prototype of all prototypes
    $__defineProperty($_prototype, 'toString', { 'value': $_prototype_toString });

    // Create the type methods
    var $_class_type     = function()
    {
        // Return the base class of all classes
        return $_class;
    };
    var $_prototype_type = function()
    {
        // Return the base prototype of all prototypes
        return $_prototype;
    };

    // Define the type method on the base prototype of all prototypes
    $__defineProperty($_prototype, 'type', { 'get': function()
    {
        // If the types flag is set, return the prototype type method
        if ($_types)
            return $_prototype_type;
    } });

    // Define the type method on the base class of all classes
    $__defineProperty($_class, 'type', { 'get': function()
    {
        // If the types flag is set, return the class type method
        if ($_types)
            return $_class_type;
    } });

    // Set the base class of all classes base prototype of all prototypes
    $_class.prototype = $_prototype;

    // Freeze the base class of all classes
    $__freeze($_class);

    // ########## FLAGS ##########

    // Create the flags
    var $_clone    = false;// DON'T CHANGE
    var $_debug    = true;// DEFAULT
    var $_lazy     = true;// DEFAULT
    var $_subclass = false;// DON'T CHANGE
    var $_types    = false;// DON'T CHANGE

    // ########## COMPILER ##########

    // Create the definitions compiler helper functions
    var $_definitionsCompilerAccessorMethod = function($definitions, $privateDefinitions, $protectedDefinitions, $publicDefinitions, $accessor, $type, $abstract, $override, $sealed, $virtual, $hasTwoAccessors)
    {
        // Create the property method definition object
        var $method = {};

        // Reference some accessor data
        var $accessorName    = $accessor[$_accessor_name];
        var $accessorPrivate = $accessor[$_accessor_private];

        // Set the method definition object data
        $method[$_definition_member_method_abstract]    = !$accessorPrivate && $abstract;
        $method[$_definition_member_method_final]       = !$accessorPrivate && $sealed;
        $method[$_definition_member_method_virtual]     = !$accessorPrivate && ($virtual || $abstract || $override);
        $method[$_definition_member_name]               = $accessorName.substr(5);
        $method[$_definition_member_property_accessors] = $hasTwoAccessors;
        $method[$_definition_member_type]               = $type;
        $method[$_definition_member_value]              = $accessor[$_accessor_value];

        // Freeze the method definition object
        $__freeze($method);

        // If the accessor has an access modifier
        if ($accessor[$_accessor_modifiers])
        {
            // If the accessor is private, set the method definition in the private definitions object
            if ($accessorPrivate)
                $__defineProperty($privateDefinitions, $accessorName, { 'enumerable': true, 'value': $method });
            // If the accessor is protected, set the method definition in the protected definitions object
            else if ($accessor[$_accessor_protected])
                $__defineProperty($protectedDefinitions, $accessorName, { 'enumerable': true, 'value': $method });
            // If the accessor is public, set the method definition in the public definitions object
            else if ($accessor[$_accessor_public])
                $__defineProperty($publicDefinitions, $accessorName, { 'enumerable': true, 'value': $method });
        }
        // Set the method definition in the definitions object
        else
            $__defineProperty($definitions, $accessorName, { 'enumerable': true, 'value': $method });
    };
    var $_definitionsCompilerBaseAbstract   = function($definitions, $baseDefinitions, $baseKey)
    {
        // Get the base definition object from the base definitions object
        var $baseDefinition = $baseDefinitions[$baseKey];

        // If the base definition is not abstract, return
        if (!$baseDefinition[$_definition_member_method_abstract])
            return;

        // Get the definition from the definitions object
        var $definition = $__hasOwnProperty__.call($definitions, $baseKey) && $definitions[$baseKey] || null;

        // If no definition was found or it does not match the type of the base definition, throw an exception
        if (!$definition || $definition[$_definition_member_type] !== $baseDefinition[$_definition_member_type])
            throw $_exceptionFormat($_lang_$$_abstract_override, $baseDefinition[$_definition_member_name], $baseDefinition[$_definition_member_type]);
    };
    var $_definitionsCompilerBaseMethod     = function($key, $type, $typeName, $baseProtected, $basePublic, $override, $protected, $public)
    {
        // If no type name was provided, use the type as the type name
        if (!$typeName)
            $typeName = $type;

        var $baseDefinition = null;

        // If the method has the protected access modifier, get the protected base definition object
        if ($protected)
            $baseDefinition = $baseProtected[$key] || null;
        // If the method has the public access modifier, get the public base definition object
        else if ($public)
            $baseDefinition = $basePublic[$key] || null;

        // If the method has the override modifier
        if ($override)
        {
            // If no base definition was found, or it is not a virtual base method, or it is a final base method, throw an exception
            if (!$baseDefinition || $baseDefinition[$_definition_member_type] !== $type || !$baseDefinition[$_definition_member_method_virtual] || $baseDefinition[$_definition_member_method_final])
                throw $_exceptionFormat($_lang_$$_member_override_null, $key.charAt(0) === '~' ? $key.substr($key.indexOf('_') + 1) : $key, $typeName);
        }
        // If the base definition is abstract, throw an exception
        else if ($baseDefinition && $baseDefinition[$_definition_member_method_abstract])
            throw $_exceptionFormat($_lang_$$_member_abstract_override, $key.charAt(0) === '~' ? $key.substr($key.indexOf('_') + 1) : $key, $type);
    };
    var $_definitionsCompiler               = function($cacheDefinitions, $privateDefinitions, $protectedDefinitions, $publicDefinitions, $prototypeDefinitions, $staticDefinitions, $key, $value, $baseProtected, $basePublic, $isAbstract, $isFinal, $isImport, $isOptimized, $isStruct)
    {
        // Break the key string into a keywords array and get the member name
        var $keywords = $__string_trim__.call($$.asString($key)).split(' ') || [];
        var $name     = $$.asString($keywords.pop());

        // If the member is a package
        if ($value && $value[$_package_keySniff] === $value)
        {
            // If any keywords were provided, throw an exception
            if ($keywords.length)
                throw $_exceptionFormat($_lang_$$_member_name_package, $name);

            // Unlock the package
            $value = $value.call($_lock);

            // Extract the package data
            $keywords = $$.asString($value[$_package_modifiers]).split(' ') || [];
            $value    = $value[$_package_value];
        }

        // Create the type
        var $type = 'field';

        // If the value is a function, set the type as a method
        if ($$.isFunction($value))
            $type = 'method';
        // If the value is a simple object, set the type as a property
        else if ($$.isSimpleObject($value))
            $type = 'property';

        // If the class has the import flag
        if ($isImport)
        {
            // If the member is a property
            if ($type === 'property')
            {
                // Create the has get and set accessors flags
                var $hasGet = false;
                var $hasSet = false;

                // Create the has override flag
                var $hasOverride = $__array_indexOf__.call($keywords, 'override') >= 0;

                for (var $propertyKey in $value)
                {
                    // Get the member name and value
                    var $memberName  = $$.asString(($__string_trim__.call($$.asString($propertyKey)).split(' ') || []).pop());
                    var $memberValue = $value[$propertyKey];

                    // If the member name is not "get"
                    if ($memberName !== 'get')
                    {
                        // If the member name is not "set", continue
                        if ($memberName !== 'set')
                            continue;

                        // Set the has set flag
                        $hasSet = true;

                        // Set the definition in the cache definitions object
                        $__defineProperty($cacheDefinitions, '~set_' + $name, { 'enumerable': true, 'value': $memberValue });

                        // If the set accessor has the override flag, no get accessor has been provided yet, and an inherited get accessor was found, create the default get accessor
                        if ($hasOverride && !$hasGet && $cacheDefinitions['~get_' + $name])
                            $__defineProperty($cacheDefinitions, '~get_' + $name, { 'configurable': true, 'enumerable': true, 'value': function()
                            {
                                // Return the base property
                                return this.__base[$name];
                            } });
                    }
                    else
                    {
                        // Set the has get flag
                        $hasGet = true;

                        // Set the definition in the cache definitions object
                        $__defineProperty($cacheDefinitions, '~get_' + $name, { 'enumerable': true, 'value': $memberValue });

                        // If the get accessor has the override flag, no set accessor has been provided yet, and an inherited set accessor was found, create the default set accessor
                        if ($hasOverride && !$hasSet && $cacheDefinitions['~set_' + $name])
                            $__defineProperty($cacheDefinitions, '~set_' + $name, { 'configurable': true, 'enumerable': true, 'value': function($v)
                            {
                                // Set the base property
                                this.__base[$name] = $v;
                            } });
                    }
                }
            }
            // Set the definition in the cache definitions object
            else
                $__defineProperty($cacheDefinitions, $name, { 'enumerable': true, 'value': $value });

            return;
        }

        // If the name is empty or whitespace, throw an exception
        if (!$__string_trim__.call($name))
            throw $_exceptionFormat($_lang_$$_member_name_null, $type);

        // If the name is not a valid member name, throw an exception
        if (!$__string_match__.call($name, /^(_|\$|[a-z])[_\$a-z0-9]*$/i))
            throw $_exceptionFormat($_lang_$$_member_name_invalid, $type, $name);

        // If the member name is invalid, throw an exception
        if ($name === 'as' || $isStruct && $name === 'clone' || $name === 'constructor' || $name === 'is' || $name === '__base' || $name === '__data' || $name === '__self' || $name === '__this' || $name === '__type' || $name === '__proto__' || $name === '__defineGetter__' || $name === '__defineSetter__' || $name === '__lookupGetter__' || $name === '__lookupSetter__')
            throw $_exceptionFormat($_lang_$$_member_name_invalid, 'member', $name);

        var $abstract = false;
        var $override = false;
        var $readonly = false;
        var $sealed   = false;
        var $virtual  = false;

        var $private   = false;
        var $protected = false;
        var $public    = false;

        var $typePrototype = false;
        var $typeStatic    = false;

        for (var $i = 0, $j = $keywords.length; $i < $j; $i++)
        {
            // Get the current keyword
            var $keyword = $keywords[$i];

            // If the keyword is abstract, set the abstract flag
            if ($type !== 'field' && $keyword === 'abstract')
                $abstract = true;
            // If the keyword is override, set the override flag
            else if ($type !== 'field' && $keyword === 'override')
                $override = true;
            // If the keyword is private, set the private flag
            else if ($keyword === 'private')
                $private = true;
            // If the keyword is protected, set the protected flag
            else if ($keyword === 'protected')
                $protected = true;
            // If the keyword is prototype, set the prototype flag
            else if ($keyword === 'prototype')
                $typePrototype = true;
            // If the keyword is public, set the public flag
            else if ($keyword === 'public')
                $public = true;
            // If the keyword is readonly, set the readonly flag
            else if ($type === 'field' && $keyword === 'readonly')
                $readonly = true;
            // If the keyword is sealed, set the sealed flag
            else if ($type !== 'field' && $keyword === 'sealed')
                $sealed = true;
            // If the keyword is static, set the static flag
            else if ($keyword === 'static')
                $typeStatic = true;
            // If the keyword is virtual, set the virtual flag
            else if ($type !== 'field' && $keyword === 'virtual')
                $virtual = true;
            // If a keyword was defined, throw an exception
            else if ($keyword)
                throw $_exceptionFormat($_lang_$$_member_keyword, $type, $name, $keyword);
        }
        
        // If the member has more than one access modifier, throw an exception
        if ($private && $protected || $private && $public || $protected && $public)
            throw $_exceptionFormat($_lang_$$_member_keyword_access_2, $name);

        // If the member has the prototype or static flags
        if ($typePrototype || $typeStatic)
        {
            // If the member has the prototype flag
            if ($typePrototype)
            {
                // If the member has the static flag, throw an exception
                if ($typeStatic)
                    throw $_exceptionFormat($_lang_$$_member_keyword_conflict_2, $name, 'prototype', 'static');

                // Set the "prototype" type
                $type = 'prototype';

                // If the member was already defined in the non-static definitions objects, throw an exception
                if ($privateDefinitions[$name] || $protectedDefinitions[$name] || $__hasOwnProperty__.call($prototypeDefinitions, $name) || $publicDefinitions[$name])
                    throw $_exceptionFormat($_lang_$$_member_name_prototype_2, $name);
            }
            // If the member has the static flag
            else if ($typeStatic)
            {
                // Set the "static" type
                $type = 'static';

                // If the member was already defined in the static definitions object, throw an exception
                if ($__hasOwnProperty__.call($staticDefinitions, $name))
                    throw $_exceptionFormat($_lang_$$_member_name_static_2, $name);
            }

            // If the member has polymorphism, throw an exception
            if ($abstract || $override || $virtual)
                throw $_exceptionFormat($_lang_$$_member_keyword_polymorphism, $name, $type);

            // If the member has encapsulation, throw an exception
            if ($private || $protected || $public)
                throw $_exceptionFormat($_lang_$$_member_keyword_escapsulation, $name, $type);

            // If the member has the read-only flag, throw an exception
            if ($readonly)
                throw $_exceptionFormat($_lang_$$_member_keyword_readonly, $name, $type);
        }
        else
        {
            // If the member was already defined in the non-static definitions objects, throw an exception
            if ($__hasOwnProperty__.call($privateDefinitions, $name) || $__hasOwnProperty__.call($protectedDefinitions, $name) || $__hasOwnProperty__.call($prototypeDefinitions, $name) || $__hasOwnProperty__.call($publicDefinitions, $name))
                throw $_exceptionFormat($_lang_$$_member_name_2, $name);

            // If the member is neither protected nor public, set the private flag
            if (!$protected && !$public)
                $private = true;
        }

        // If the member is a method or property
        if ($type === 'method' || $type === 'property')
        {
            // If the member is private
            if ($private)
            {
                // If the member has polymorphism, throw an exception
                if ($abstract || $override || $virtual)
                    throw $_exceptionFormat($_lang_$$_member_keyword_polymorphism, $name, 'private');
            }

            // If the member is abstract
            if ($abstract)
            {
                // If the member is sealed, throw an exception
                if ($sealed)
                    throw $_exceptionFormat($_lang_$$_member_keyword_conflict_2, $name, 'abstract', 'sealed');

                // If the member is virtual, throw an exception
                if ($virtual)
                    throw $_exceptionFormat($_lang_$$_member_keyword_conflict_2, $name, 'abstract', 'virtual');

                // If the class is not abstract, throw an exception
                if (!$isAbstract)
                    throw $_exceptionFormat($_lang_$$_member_abstract, $name);
            }

            // If the member is an override
            if ($override)
            {
                // If the member is virtual, throw an exception
                if ($virtual)
                    throw $_exceptionFormat($_lang_$$_member_keyword_conflict_2, $name, 'override', 'virtual');

                // If there is no base class, throw an exception
                if (!$baseProtected && !$basePublic)
                    throw $_exceptionFormat($_lang_$$_member_override_null, $name, $type);
            }
            // If the member is sealed, throw an exception
            else if ($sealed)
                throw $_exceptionFormat($_lang_$$_member_keyword_requires_1, $name, 'sealed', 'override');

            // If the class is final and the member is virtual, throw an exception
            if ($isFinal && $virtual)
                throw $_exceptionFormat($_lang_$$_member_virtual, $name);
        }

        // Create the definitions object reference
        var $definitions = null;

        // If the member is private, set the private definitions object as the reference
        if ($private)
            $definitions = $privateDefinitions;
        // If the member is protected, set the protected definitions object as the reference
        else if ($protected)
            $definitions = $protectedDefinitions;
        // If the member is public, set the public definitions object as the reference
        else if ($public)
            $definitions = $publicDefinitions;

        switch ($type)
        {
            case 'field':

                // If the field has a reference-type value, set it to null
                if ($$.isReferenceType($value))
                    $value = null;

                // Create the field definition object
                var $field = {};

                // Set the field definition object data
                $field[$_definition_member_field_readonly] = $readonly;
                $field[$_definition_member_name]           = $name;
                $field[$_definition_member_type]           = $type;
                $field[$_definition_member_value]          = $value;

                // Freeze the field definition object
                $__freeze($field);

                // Set the field in the definitions object
                $__defineProperty($definitions, $name, { 'enumerable': true, 'value': $field });

                // If the class is optimized, set the definition in the cache definitions object
                if ($isOptimized)
                    $__defineProperty($cacheDefinitions, $name, { 'enumerable': true, 'value': $value });

                break;

            case 'method':

                // If there is a base class, perform further compiling on the method
                if ($baseProtected || $basePublic)
                    $_definitionsCompilerBaseMethod($name, $type, null, $baseProtected, $basePublic, $override, $protected, $public);

                // Create the method definition object
                var $method = {};

                // Set the field definition object data
                $method[$_definition_member_method_abstract] = $abstract;
                $method[$_definition_member_method_final]    = $sealed;
                $method[$_definition_member_method_virtual]  = $virtual || $abstract || $override;
                $method[$_definition_member_name]            = $name;
                $method[$_definition_member_type]            = $type;
                $method[$_definition_member_value]           = $value;

                // Freeze the method definition object
                $__freeze($method);

                // Set the method in the definitions object
                $__defineProperty($definitions, $name, { 'enumerable': true, 'value': $method });

                // If the class is optimized, set the definition in the cache definitions object
                if ($isOptimized)
                    $__defineProperty($cacheDefinitions, $name, { 'enumerable': true, 'value': $value });

                break;

            case 'property':

                // Create the get and set method data arrays
                var $get = new $__array($_accessor_flagCount);
                var $set = new $__array($_accessor_flagCount);

                // Create the has get and set accessors flags
                var $hasGet = false;
                var $hasSet = false;

                for (var $propertyKey in $value)
                {
                    // Break the property key string into a keywords array and get the member name and value
                    var $propertyKeywords = $__string_trim__.call($$.asString($propertyKey)).split(' ') || [];
                    var $memberName       = $$.asString($propertyKeywords.pop());
                    var $memberValue      = $value[$propertyKey];

                    // If the member name is empty or whitespace, throw an exception
                    if (!$__string_trim__.call($memberName))
                        throw $_exceptionFormat($_lang_$$_member_property_name_null, $name);

                    var $member = null;

                    // If the member name is not "get"
                    if ($memberName !== 'get')
                    {
                        // If the member name is not "set", throw an exception
                        if ($memberName !== 'set')
                            throw $_exceptionFormat($_lang_$$_member_property_name_invalid, $name, $memberName);

                        // If a set accessor was already provided, throw an exception
                        if ($hasSet)
                            throw $_exceptionFormat($_lang_$$_member_property_name_2, $name, 'set');

                        // Set the flag for the property having a set accessor
                        $hasSet = true;

                        // Set the set method name
                        $set[$_accessor_name] = '~set_' + $name;

                        // Set the set method data object as the member
                        $member = $set;

                        // If the set accessor is overriding, no get accessor has been provided yet, and an inherited get accessor was found
                        if ($override && !$hasGet && $definitions['~get_' + $name])
                        {
                            // Inherit the get accessor
                            $get[$_accessor_modifiers] = false;
                            $get[$_accessor_name]      = '~get_' + $name;
                            $get[$_accessor_private]   = $private;
                            $get[$_accessor_protected] = $protected;
                            $get[$_accessor_public]    = $public;
                            $get[$_accessor_value]     = function()
                            {
                                // Return the base property
                                return this.__base[$name];
                            };
                        }
                    }
                    else
                    {
                        // If a get accessor was already provided, throw an exception
                        if ($hasGet)
                            throw $_exceptionFormat($_lang_$$_member_property_name_2, $name, 'get');

                        // Set the flag for the property having a get accessor
                        $hasGet = true;

                        // Set the get method name
                        $get[$_accessor_name] = '~get_' + $name;

                        // Set the get method data object as the member
                        $member = $get;

                        // If the get accessor is overriding, no set accessor has been provided yet, and an inherited set accessor was found
                        if ($override && !$hasSet && $definitions['~set_' + $name])
                        {
                            // Inherit the set accessor
                            $set[$_accessor_modifiers]  = false;
                            $set[$_accessor_name]      = '~set_' + $name;
                            $set[$_accessor_private]   = $private;
                            $set[$_accessor_protected] = $protected;
                            $set[$_accessor_public]    = $public;
                            $set[$_accessor_value]     = function($v)
                            {
                                // Set the base property
                                this.__base[$name] = $v;
                            };
                        }
                    }

                    // If the member is not a function, throw an exception
                    if (!$$.isFunction($memberValue))
                        throw $_exceptionFormat($_lang_$$_member_property_function, $name, $memberName);

                    // Set the member access modifier flags and value
                    $member[$_accessor_private]   = false;
                    $member[$_accessor_protected] = false;
                    $member[$_accessor_public]    = false;
                    $member[$_accessor_value]     = $memberValue;

                    for (var $i = 0, $j = $propertyKeywords.length; $i < $j; $i++)
                    {
                        // Get the property keyword
                        var $propertyKeyword = $propertyKeywords[$i];

                        // If the property keyword is private, set the private flag
                        if ($propertyKeyword === 'private')
                            $member[$_accessor_private] = true;
                        // If the property keyword is protected, set the protected flag
                        else if ($propertyKeyword === 'protected')
                            $member[$_accessor_protected] = true;
                        // If the property keyword is public, set the public flag
                        else if ($propertyKeyword === 'public')
                            $member[$_accessor_public] = true;
                        // If the property keyword was defined, throw an exception
                        else if ($propertyKeyword)
                            throw $_exceptionFormat($_lang_$$_member_property_keyword, $name, $memberName, $propertyKeyword);
                    }

                    // Check if the member has any access modifiers
                    $member[$_accessor_modifiers] = $member[$_accessor_private] || $member[$_accessor_protected] || $member[$_accessor_public];

                    // If the member has any access modifiers
                    if ($member[$_accessor_modifiers])
                    {
                        // If the member has more than one access modifier, throw an exception
                        if ($member[$_accessor_private] && $member[$_accessor_protected] || $member[$_accessor_private] && $member[$_accessor_public] || $member[$_accessor_protected] && $member[$_accessor_public])
                            throw $_exceptionFormat($_lang_$$_member_keyword_access_2, $memberName);

                        // If the member access modifier is not more restrictive than the property access modifier, throw an exception
                        if ($member[$_accessor_public] || $member[$_accessor_protected] && !$public || $member[$_accessor_private] && $private)
                            throw $_exceptionFormat($_lang_$$_member_property_accessors_access, $name, $memberName);
                    }
                }

                // If there is neither a get nor a set method, throw an exception
                if (!$hasGet && !$hasSet)
                    throw $_exceptionFormat($_lang_$$_member_property_name_null, $name);

                // Check if the property has get and set accessor access modifiers
                var $hasGetModifier = $get[$_accessor_modifiers];
                var $hasSetModifier = $set[$_accessor_modifiers];

                // If the get and set methods both have access modifiers, throw an exception
                if ($hasGetModifier && $hasSetModifier)
                    throw $_exceptionFormat($_lang_$$_member_property_keyword_access_2, $name);

                // If there is no set accessor and the get method has an access modifier, throw an exception
                if (!$hasSet && $hasGetModifier)
                    throw $_exceptionFormat($_lang_$$_member_property_accessors, $name, 'get');

                // If there is no get accessor and the set method has an access modifier, throw an exception
                if (!$hasGet && $hasSetModifier)
                    throw $_exceptionFormat($_lang_$$_member_property_accessors, $name, 'set');

                // Check if the property has any inherited get or set accessors
                $hasGet = $hasGet || !!$get[$_accessor_name];
                $hasSet = $hasSet || !!$set[$_accessor_name];

                // If a get method was provided
                if ($hasGet)
                {
                    // If there is a base class, perform further compiling on the get method
                    if ($baseProtected || $basePublic)
                        $_definitionsCompilerBaseMethod($get[$_accessor_name], $type, 'get accessor', $baseProtected, $basePublic, $override, $hasGetModifier ? $get[$_accessor_protected] : $protected, $hasGetModifier ? $get[$_accessor_public] : $public);

                    // Compile the get accessor method
                    $_definitionsCompilerAccessorMethod($definitions, $privateDefinitions, $protectedDefinitions, $publicDefinitions, $get, $type, $abstract, $override, $sealed, $virtual, $hasGet && $hasSet);

                    // If the class is optimized, set the definition in the cache definitions object
                    if ($isOptimized)
                        $__defineProperty($cacheDefinitions, $get[$_accessor_name], { 'enumerable': true, 'value': $get[$_accessor_value] });
                }

                // If a set method was provided
                if ($hasSet)
                {
                    // If there is a base class, perform further compiling on the set method
                    if ($baseProtected || $basePublic)
                        $_definitionsCompilerBaseMethod($set[$_accessor_name], $type, 'set accessor', $baseProtected, $basePublic, $override, $hasSetModifier ? $set[$_accessor_protected] : $protected, $hasSetModifier ? $set[$_accessor_public] : $public);

                    // Compile the set accessor method
                    $_definitionsCompilerAccessorMethod($definitions, $privateDefinitions, $protectedDefinitions, $publicDefinitions, $set, $type, $abstract, $override, $sealed, $virtual, $hasGet && $hasSet);

                    // If the class is optimized, set the definition in the cache definitions object
                    if ($isOptimized)
                        $__defineProperty($cacheDefinitions, $set[$_accessor_name], { 'enumerable': true, 'value': $set[$_accessor_value] });
                }

                break;

            case 'prototype':
            case 'static':

                // Create the member definition object
                var $member = {};

                // Set the member definition object data
                $member[$_definition_member_name]  = $name;
                $member[$_definition_member_type]  = $type;
                $member[$_definition_member_value] = $value;

                // Freeze the member definition object
                $__freeze($member);

                // If the member has the prototype flag, set the member in the prototype definitions object
                if ($typePrototype)
                    $prototypeDefinitions[$name] = $member;
                // If the member has the static flag, set the member in the static definitions object
                else if ($typeStatic)
                    $staticDefinitions[$name] = $member;

                break;
        }
    };
    var $_definitionsCompilerInjections     = function($definitions, $cacheDefinitions, $injections)
    {
        // If no injections array was provided, return
        if (!$$.isArrayLikeObject($injections) || !$definitions && !$cacheDefinitions)
            return;

        for (var $i = 0, $j = $injections.length; $i < $j; $i++)
        {
            // Get the current injection
            var $injection = $injections[$i];

            // If no injection was found, continue
            if (!$injection)
                continue;

            // Get the injection name
            var $injectionName = $injection[$_definition_member_name];

            // If the injection does not have a name, continue
            if (!$injectionName)
                continue;

            // If the class has a definitions object
            if ($definitions)
            {
                // Freeze the injected definition object
                $__freeze($injection);

                // Set the injected definition object into the definitions object
                $__defineProperty($definitions, $injectionName, { 'enumerable': true, 'value': $injection });
            }

            // If the class has a definitions cache, set the definition into the cache definitions object
            if ($cacheDefinitions)
                $__defineProperty($cacheDefinitions, $injectionName, { 'enumerable': true, 'value': $injection[$_definition_member_value] });
        }
    };
    var $_definitionsCompilerLock           = function($reference)
    {
        // Return the lock wrapper function
        return function()
        {
            // If this function was internally called, return the reference
            if (this === $_lock)
                return $reference;
        };
    };

    // ########## RUNTIME ##########

    // Create the construct runtime helper functions
    var $_constructRuntimeClone       = function($class, $type, $private, $public, $cache, $injections)
    {
        // Return the clone method
        return function()
        {
            // Set the subclass flag
            $_subclass = true;

            // Create the cloned instance prototype
            var $instanceNew = new $class();

            // Reset the subclass flag and set the clone flag
            $_subclass = false;
            $_clone    = true;

            // Create the cloned instance
            var $instanceClone = $class.call($instanceNew, $cache, $injections);

            // Reset the clone flag
            $_clone = false;

            // Return the cloned instance casted as the current type
            return $instanceClone.as($type);
        };
    };
    var $_constructRuntimeConstructor = function($private)
    {
        // Create the constructor instance
        var $this = $__create($private);

        // Create the constructor reference
        var $constructor = undefined;

        // Mask the base instance reference with the base constructor get accessor
        $__defineProperty($this, '__base',
        {
            'get': function()
            {
                // If the constructor is not cached
                if ($constructor === undefined)
                {
                    // Get the base constructor
                    $constructor = $private.__base;
                    $constructor = $constructor && $constructor['~constructor'] || null;
                }

                // Return the base constructor
                return $constructor;
            }
        });

        // Freeze the constructor instance object
        $__freeze($this);

        // Return the constructor instance
        return $this;
    };
    var $_constructRuntimeField       = function($descriptor, $configurable, $name, $value, $private, $public, $type, $readonly)
    {
        // Set the descriptor data
        $descriptor['configurable'] = $configurable;
        $descriptor['enumerable']   = true;
        $descriptor['get']          = function()
        {
            // Return the field value
            return $value;
        };

        // If type checking is enabled
        if ($type)
        {
        }
        // If read-only checking is enabled, set the descriptor setting with read-only checking
        else if ($readonly)
            $descriptor['set'] = function($v)
            {
                // If the field is read-only, throw an exception
                if ($readonly())
                    throw $_exceptionFormat($_lang_$$_field_readonly, $name);

                // If the provided value is set to a private instance, set the value to the public instance
                if ($v === $private)
                    $value = $public;
                // Set the value to the provided value
                else
                    $value = $v;
            };
        // Set the descriptor setting without read-only or type checking
        else
            $descriptor['set'] = function($v)
            {
                // If the provided value is set to a private instance, set the value to the public instance
                if ($v === $private)
                    $value = $public;
                // Set the value to the provided value
                else
                    $value = $v;
            };
    };
    var $_constructRuntimeInjection   = function($descriptor, $name, $key, $injections, $type, $readonly)
    {
        // Set the descriptor data
        $descriptor['configurable'] = false;
        $descriptor['enumerable']   = true;
        $descriptor['get']          = function()
        {
            // Return the injected value
            return $injections[$key];
        };

        // If type checking is enabled
        if ($type)
        {
            // If read-only checking is enabled
            if ($readonly)
            {
                // Set the descriptor setting with read-only checking
                $descriptor['set'] = function($v)
                {
                    // If the field is read-only, throw an exception
                    if ($readonly())
                        throw $_exceptionFormat($_lang_$$_field_readonly, $name);

                    // If the value does not match the type, throw an exception
                    if ($v !== undefined && $v !== null && $$.type($v) !== $type)
                        throw $_exceptionFormat($_lang_$$_field_type, $name, $type);

                    // Set the injected value
                    $injections[$key] = $v;
                };
            }
            else
            {
                // Set the descriptor setting without read-only checking
                $descriptor['set'] = function($v)
                {
                    // If the value does not match the type, throw an exception
                    if ($v !== undefined && $v !== null && $$.type($v) !== $type)
                        throw $_exceptionFormat($_lang_$$_field_type, $name, $type);

                    // Set the injected value
                    $injections[$key] = $v;
                };
            }
        }
        else
        {
            // If read-only checking is enabled
            if ($readonly)
            {
                // Set the descriptor setting with read-only checking
                $descriptor['set'] = function($v)
                {
                    // If the field is read-only, throw an exception
                    if ($readonly())
                        throw $_exceptionFormat($_lang_$$_field_readonly, $name);

                    // Set the injected value
                    $injections[$key] = $v;
                };
            }
            else
            {
                // Set the descriptor setting without read-only checking
                $descriptor['set'] = function($v)
                {
                    // Set the injected value
                    $injections[$key] = $v;
                };
            }
        }
    };
    var $_constructRuntimeMerge       = function($descriptor, $merge, $accessor)
    {
        // If the method is a get accessor
        if ($accessor === 'get')
        {
            // Return the merged descriptor (merge set accessor)
            return (
            {
                'configurable': $descriptor['configurable'],
                'enumerable':   $descriptor['enumerable'],
                'get':          $descriptor['get'],
                'set':          $merge['set']
            });
        }
        // If the method is a set accessor, return the merged descriptor
        else if ($accessor === 'set')
        {
            // Return the merged descriptor (merge get accessor)
            return (
            {
                'configurable': $descriptor['configurable'],
                'enumerable':   $descriptor['enumerable'],
                'get':          $merge['get'],
                'set':          $descriptor['set']
            });
        }

        // Return the descriptor
        return $descriptor;
    };
    var $_constructRuntimeMethod      = function($descriptor, $configurable, $this, $function, $private, $public, $type, $accessor)
    {
        // Set the descriptor data
        $descriptor['configurable'] = $configurable;
        $descriptor['enumerable']   = true;

        // Create the method wrapper
        var $method = function()
        {
            // Apply the function in the provided context with the current arguments
            var $return = $function.apply($this, arguments);

            // If the return value is a private instance, return the public instance
            if ($return === $private)
                return $public;

            // Return the return value
            return $return;
        };

        // If the method is a get accessor, set the get descriptor to the method wrapper
        if ($accessor === 'get')
            $descriptor['get'] = $method;
        // If the method is a set accessor, set the set descriptor to the method wrapper
        else if ($accessor === 'set')
            $descriptor['set'] = $method;
        // Set the value descriptor to the method wrapper
        else
            $descriptor['value'] = $method;
    };
    var $_constructRuntimeOverride    = function($descriptor, $key, $definition, $overrides)
    {
        // If the method is virtual
        if ($definition[$_definition_member_method_virtual])
        {
            // If the method is not final
            if (!$definition[$_definition_member_method_final])
            {
                // Get the override descriptor from the overrides object
                var $override = $overrides[$key] || null;

                // If no descriptor was found in the overrides object, set the method descriptor in it
                if (!$override)
                    $overrides[$key] = $descriptor;

                // Return the override descriptor
                return $override;
            }
            // Set the method descriptor in the overrides object
            else
                $overrides[$key] = $descriptor;
        }
        // Clear any method override that may have existed
        else
            $overrides[$key] = null;

        return null;
    };
    var $_constructRuntime            = function($key, $definitions, $overrides, $inherits, $inheritsBase, $readonly, $context, $isProtected, $isPublic, $base, $private, $protected, $public, $injections, $cache)
    {
        // Get the member definition from the definitions object
        var $definition = $definitions[$key];

        // Create the descriptor and get the name
        var $descriptor = {};
        var $name       = $definition[$_definition_member_name];

        switch ($definition[$_definition_member_type])
        {
            case 'field':

                // If an injections array was provided and the field is an injected field, construct the injected field descriptor
                if ($injections && $definition[$_definition_member_field_injection])
                    $_constructRuntimeInjection($descriptor, $name, $definition[$_definition_member_value], $injections, $definition[$_definition_member_field_type], $definition[$_definition_member_field_readonly] ? $readonly : null);
                // Construct the field descriptor
                else
                    $_constructRuntimeField($descriptor, false, $name, $cache ? $cache[$name] : $definition[$_definition_member_value], $private, $public, $definition[$_definition_member_field_type], $definition[$_definition_member_field_readonly] ? $readonly : null);

                // If the field is protected or public
                if ($isProtected || $isPublic)
                {
                    // Set the base field descriptor
                    $__defineProperty($base, $name, $descriptor);

                    // If lazy loading is not enabled
                    if (!$_lazy)
                    {
                        // Set the private field descriptor
                        $__defineProperty($private, $name, $descriptor);

                        // Set the field descriptor in the inherits object
                        $inherits[$name] = $descriptor;

                        // Set the field descriptor in the base inherits object
                        $inheritsBase[$name] = $descriptor;
                    }
                    // Set the protected field descriptor
                    else
                        $__defineProperty($protected, $name, $descriptor);

                    // If the field is public, set the public field descriptor
                    if ($isPublic)
                        $__defineProperty($public, $name, $descriptor);
                }
                // Set the private field descriptor
                else
                    $__defineProperty($private, $name, $descriptor);

                break;

            case 'method':

                // Create the method context
                var $this = $private;

                // If the method is the constructor, set the instance as the constructor instance
                if ($isProtected && $name === '~constructor')
                    $this = $_lazy ? $_constructRuntimeConstructor($private) : $context;

                // Construct the method descriptor
                $_constructRuntimeMethod($descriptor, false, $this, $definition[$_definition_member_value], $private, $public, $definition[$_definition_member_method_type]);

                // If the method is protected or public
                if ($isProtected || $isPublic)
                {
                    // Set the base method descriptor
                    $__defineProperty($base, $name, $descriptor);

                    // Get the override and inherited descriptors
                    var $override = $_constructRuntimeOverride($descriptor, $key, $definition, $overrides);
                    var $inherit  = $override ? $override : $descriptor;

                    // If lazy loading is not enabled
                    if (!$_lazy)
                    {
                        // Set the private method descriptor
                        $__defineProperty($private, $name, $inherit);

                        // Set the method descriptor in the inherits object
                        $inherits[$name] = $inherit;

                        // Set the method descriptor in the base inherits object
                        $inheritsBase[$name] = $descriptor;
                    }
                    // Set the protected method descriptor
                    else
                        $__defineProperty($protected, $name, $inherit);

                    // If the method is public, set the public method descriptor
                    if ($isPublic)
                        $__defineProperty($public, $name, $inherit);
                }
                // Set the private method descriptor
                else
                    $__defineProperty($private, $name, $descriptor);

                break;

            case 'property':

                // Get the property accessor
                var $accessor = $key.substr(1, 3);

                // Check if the property is complex and if a merge operation is being performed
                var $complex      = $definition[$_definition_member_property_accessors];
                var $mergeBase    = $complex && $__hasOwnProperty__.call($base, $name);
                var $mergePrivate = $complex && $__hasOwnProperty__.call($private, $name);
                var $merge        = $mergeBase || $mergePrivate;

                // Construct the property descriptor
                $_constructRuntimeMethod($descriptor, $complex && !$merge, $private, $definition[$_definition_member_value], $private, $public, $definition[$_definition_member_method_type], $accessor);

                // If the property is not complex or is being merged
                if (!$complex || $merge)
                {
                    // Check if a public merge operation is being performed
                    var $mergePublic = $complex && $__hasOwnProperty__.call($public, $name);

                    // If the property is protected or public
                    if ($isProtected || $isPublic)
                    {
                        // Set the base property descriptor (merge if a base descriptor was found)
                        $__defineProperty($base, $name, $mergeBase ? $_constructRuntimeMerge($descriptor, $base[$name], $accessor) : $descriptor);

                        // Get the override and inherited descriptors
                        var $override = $_constructRuntimeOverride($descriptor, $key, $definition, $overrides);
                        var $inherit  = $override ? $override : $descriptor;

                        // If lazy loading is not enabled
                        if (!$_lazy)
                        {
                            // Set the private property descriptor (merge if a private descriptor was found)
                            $__defineProperty($private, $name, $mergePrivate ? $_constructRuntimeMerge($inherit, $private[$name], $accessor) : $inherit);

                            // Set the property descriptor in the inherits object (merge if an inherits descriptor was found)
                            $inherits[$name] = $merge && $__hasOwnProperty__.call($inherits, $name) ? $_constructRuntimeMerge($inherit, $inherits[$name], $accessor) : $inherit;

                            // Set the property descriptor in the base inherits object (merge if an inherits base descriptor was found)
                            $inheritsBase[$name] = $merge && $__hasOwnProperty__.call($inheritsBase, $name) ? $_constructRuntimeMerge($descriptor, $inheritsBase[$name], $accessor) : $descriptor;
                        }
                        else
                        {
                            // Set the protected property descriptor (merge if a base descriptor was found)
                            $__defineProperty($protected, $name, $mergeBase ? $_constructRuntimeMerge($inherit, $protected[$name], $accessor) : $inherit);

                            // If a private merge was found, set the private property descriptor
                            if ($mergePrivate)
                                $__defineProperty($private, $name, $private[$name]);
                        }

                        // If the property is public, set the public property descriptor (merge if a public descriptor was found)
                        if ($isPublic)
                            $__defineProperty($public, $name, $mergePublic ? $_constructRuntimeMerge($inherit, $public[$name], $accessor) : $inherit);
                        // If a public merge was found, set the public property descriptor
                        else if ($mergePublic)
                            $__defineProperty($public, $name, $public[$name]);
                    }
                    // If the property is being merged
                    else if ($merge)
                    {
                        // Set the private property descriptor (merge if a private descriptor was found)
                        $__defineProperty($private, $name, $mergePrivate ? $_constructRuntimeMerge($descriptor, $private[$name], $accessor) : $descriptor);

                        // If a base merge was found
                        if ($mergeBase)
                        {
                            // Set the base property descriptor
                            $__defineProperty($base, $name, $base[$name]);

                            // If lazy loading is enabled, set the protected property descriptor
                            if ($_lazy)
                                $__defineProperty($protected, $name, $protected[$name]);
                        }

                        // If a public merge was found, set the public property descriptor
                        if ($mergePublic)
                            $__defineProperty($public, $name, $public[$name]);
                    }
                    // Set the private property descriptor
                    else
                        $__defineProperty($private, $name, $descriptor);
                }
                else
                {
                    // If the property is protected or public
                    if ($isProtected || $isPublic)
                    {
                        // Set the base property descriptor
                        $__defineProperty($base, $name, { 'configurable': true, 'value': $descriptor });

                        // Get the override and inherited descriptors
                        var $override = $_constructRuntimeOverride($descriptor, $key, $definition, $overrides);
                        var $inherit  = $override ? $override : $descriptor;

                        // If lazy loading is not enabled
                        if (!$_lazy)
                        {
                            // Set the private property descriptor
                            $__defineProperty($private, $name, { 'configurable': true, 'value': $inherit });

                            // Set the property descriptor in the inherits object
                            $inherits[$name] = $inherit;

                            // Set the property descriptor in the base inherits object
                            $inheritsBase[$name] = $descriptor;
                        }
                        // Set the protected property descriptor
                        else
                            $__defineProperty($protected, $name, { 'configurable': true, 'value': $inherit });

                        // If the property is public, set the public property descriptor
                        if ($isPublic)
                            $__defineProperty($public, $name, { 'configurable': true, 'value': $inherit });
                    }
                    // Set the private property descriptor
                    else
                        $__defineProperty($private, $name, { 'configurable': true, 'value': $descriptor });
                }

                break;
        }
    };
    var $_constructRuntimeInherits    = function($inherits, $derivedInherits, $instance)
    {
        for (var $inheritKey in $inherits)
        {
            // If the instance redefined this member, continue
            if ($__hasOwnProperty__.call($instance, $inheritKey))
                continue;

            // Get the inherited member
            var $inherit = $inherits[$inheritKey];

            // Set the instance member descriptor
            $__defineProperty($instance, $inheritKey, $inherit);

            // Set the member descriptor in the derived inherits object
            $derivedInherits[$inheritKey] = $inherit;
        }
    };
    var $_constructRuntimeDump        = function($vars, $statements, $definitions, $references, $key, $index, $level, $protectedOverrides, $publicOverrides)
    {
        // Get the member definition from the definitions object along with the name and type
        var $definition = $definitions[$key];
        var $name       = $definition[$_definition_member_name];
        var $type       = $definition[$_definition_member_type];

        // Create the helper arguments array and handle along with the member reference
        var $arguments = [];
        var $handle    = '';
        var $reference = $_precompile_reference + $level + '$' + $index;

        switch ($type)
        {
            case 'field':

                // Get the field definition data
                var $fieldType = $definition[$_definition_member_field_type];
                var $injection = $definition[$_definition_member_field_injection];
                var $readonly  = $definition[$_definition_member_field_readonly];

                // Set the helper handle
                $handle = 'f';

                // Create the helper arguments
                $arguments = (
                [
                    $_precompile_cache + $level,                                           // CACHE[NAME] => VALUE
                    '"' + $name + '"',                                                     // NAME
                    $injection ? $_precompile_injections : $_precompile_null,              // INJECTIONS
                    !$injection ? $_precompile_matrix + $level + '$0' : $_precompile_null, // PRIVATE
                    !$injection ? $_precompile_matrix + $level + '$2' : $_precompile_null, // PUBLIC
                    $fieldType ? '"' + $fieldType + '"' : $_precompile_null,               // TYPE
                    $readonly ? $_precompile_readonly : $_precompile_null                  // READONLY
                ]);

                break;

            case 'method':

                // Get the method definition data
                var $methodType = $definition[$_definition_member_method_type];

                // Set the helper handle
                $handle = 'm';

                // Create the helper arguments
                $arguments = (
                [
                    $_precompile_cache + $level,                              // CACHE[NAME] => FUNCTION
                    '"' + $name + '"',                                        // NAME
                    $_precompile_matrix + $level + '$0',                      // PRIVATE
                    $_precompile_matrix + $level + '$2',                      // PUBLIC
                    $methodType ? '"' + $methodType + '"' : $_precompile_null // TYPE
                ]);

                break;

            case 'property':

                // Get the property definition data
                var $accessor     = $key.substr(1, 1);
                var $propertyType = $definition[$_definition_member_method_type];

                // Set the helper handle
                $handle = 'a';

                // Create the helper arguments
                $arguments = (
                [
                    $_precompile_cache + $level,                                   // CACHE[NAME] => FUNCTION
                    '"' + $name + '"',                                             // NAME
                    $_precompile_matrix + $level + '$0',                           // PRIVATE
                    $_precompile_matrix + $level + '$2',                           // PUBLIC
                    $propertyType ? '"' + $propertyType + '"' : $_precompile_null, // TYPE
                    '"' + $accessor + '"'                                          // ACCESSOR
                ]);

                break;
        }

        // Append the member definition into the vars string
        $vars.push($reference + '=' + $handle + '(' + $arguments.join(',') + ')');

        // If the member is a property
        if ($type === 'property')
        {
            // Get the complex and merge flags
            var $complex = $definition[$_definition_member_property_accessors];
            var $merge   = $references[$name];

            // If the property is not complex or is being merged
            if (!$complex || $merge)
            {
                // Get the get and set accessor flags
                var $get = $accessor === 'g';
                var $set = $accessor === 's';

                // Get the merge member references
                var $mergeBase      = $merge && $merge[3] || null;
                var $mergePrivate   = $merge && $merge[0] || null;
                var $mergeProtected = $merge && $merge[1] || null;
                var $mergePublic    = $merge && $merge[2] || null;

                // If the property is protected or public
                if ($protectedOverrides || $publicOverrides)
                {
                    // Set the base property reference (merge if a base reference was found)
                    $statements.push('p(' + $_precompile_matrix + $level + '$3,' + ($get ? $reference : $mergeBase || $_precompile_null) + ',' + ($set ? $reference : $mergeBase || $_precompile_null) + ')');

                    var $override = null;

                    // If the property is protected or public, get the override reference
                    if ($protectedOverrides || $publicOverrides)
                        $override = $_constructRuntimeOverride($reference, $key, $definition, $protectedOverrides ? $protectedOverrides : $publicOverrides);

                    // Set the protected property reference (merge if a base reference was found)
                    $statements.push('p(' + $_precompile_matrix + $level + '$1,' + ($get ? ($override !== null ? $override : $reference) : $mergeProtected || $_precompile_null) + ',' + ($set ? ($override !== null ? $override : $reference) : $mergeProtected || $_precompile_null) + ')');

                    // If a private merge was found, set the private property reference
                    if ($mergePrivate)
                        $statements.push('p(' + $_precompile_matrix + $level + '$0,' + ($get ? $_precompile_null : $mergePrivate) + ',' + ($set ? $_precompile_null : $mergePrivate) + ')');

                    // If the property is public, set the public property reference (merge if a public reference was found)
                    if ($publicOverrides)
                        $statements.push('p(' + $_precompile_matrix + $level + '$2,' + ($get ? ($override !== null ? $override : $reference) : $mergePublic || $_precompile_null) + ',' + ($set ? ($override !== null ? $override : $reference) : $mergePublic || $_precompile_null) + ')');
                    // If a public merge was found, set the public property reference
                    else if ($mergePublic)
                        $statements.push('p(' + $_precompile_matrix + $level + '$2,' + ($get ? $_precompile_null : $mergePublic) + ',' + ($set ? $_precompile_null : $mergePublic) + ')');
                }
                // If the property is being merged
                else if ($merge)
                {
                    // Set the private property reference (merge if a private reference was found)
                    $statements.push('p(' + $_precompile_matrix + $level + '$0,' + ($get ? $reference : $mergePrivate || $_precompile_null) + ',' + ($set ? $reference : $mergePrivate || $_precompile_null) + ')');

                    // If a protected merge was found
                    if ($mergeProtected)
                    {
                        // Set the base and protected property references
                        $statements.push('p(' + $_precompile_matrix + $level + '$3,' + ($get ? $_precompile_null : $mergeBase) + ',' + ($set ? $_precompile_null : $mergeBase) + ')');
                        $statements.push('p(' + $_precompile_matrix + $level + '$1,' + ($get ? $_precompile_null : $mergeProtected) + ',' + ($set ? $_precompile_null : $mergeProtected) + ')');
                    }

                    // If a public merge was found, set the public property reference
                    if ($mergePublic)
                        $statements.push('p(' + $_precompile_matrix + $level + '$2,' + ($get ? $_precompile_null : $mergePublic) + ',' + ($set ? $_precompile_null : $mergePublic) + ')');
                }
                // Set the private property reference
                else
                    $statements.push('p(' + $_precompile_matrix + $level + '$0,' + ($get ? $reference : $_precompile_null) + ',' + ($set ? $reference : $_precompile_null) + ')');
            }
            else
            {
                // Create the merge array
                $merge = [null, null, null, null];

                // If the property is protected or public
                if ($protectedOverrides || $publicOverrides)
                {
                    var $override = null;

                    // If the property is protected or public, get the override reference
                    if ($protectedOverrides || $publicOverrides)
                        $override = $_constructRuntimeOverride($reference, $key, $definition, $protectedOverrides ? $protectedOverrides : $publicOverrides);

                    // Set the base and protected property references
                    $merge[1] = $override !== null ? $override : $reference;
                    $merge[3] = $reference;

                    // If the property is public, set the public property reference
                    if ($publicOverrides)
                        $merge[2] = $override !== null ? $override : $reference;
                }
                // Set the private property reference
                else
                    $merge[0] = $reference;

                // Store the merge array in the references collection
                $references[$name] = $merge;
            }
        }
        // If the member is protected or public
        else if ($protectedOverrides || $publicOverrides)
        {
            var $override = null;

            // If the member is a method, get the reference override
            if ($type === 'method')
                $override = $_constructRuntimeOverride($reference, $key, $definition, $protectedOverrides ? $protectedOverrides : $publicOverrides);

            // Set the base member reference
            $statements.push('d(' + $_precompile_matrix + $level + '$3,' + $reference + ')');

            // If the member is public, set the protected and public member references
            if ($publicOverrides)
                $statements.push('d2(' + $_precompile_matrix + $level + '$1,' + $_precompile_matrix + $level + '$2,' + ($override !== null ? $override : $reference) + ')');
            // Set the protected member reference
            else
                $statements.push('d(' + $_precompile_matrix + $level + '$1,' + ($override !== null ? $override : $reference) + ')');
        }
        // Set the private member reference
        else
            $statements.push('d(' + $_precompile_matrix + $level + '$0,' + $reference + ')');
    };
    var $_constructRuntimePrecompile  = function($chain)
    {
        // Create the closures string and the statements and variables arrays
        var $closures   = $_precompile_null + '=null';
        var $statements = [];
        var $vars       = [];

        // Create the protected and public overrides containers
        var $protectedOverrides = {};
        var $publicOverrides    = {};

        for (var $i = 0, $j = $chain.length; $i < $j; $i++)
        {
            // Get the current class
            var $class = $chain[$i];

            // Append the cache closure variable to the closures string
            $closures += ',' + $_precompile_cache + $i + '=c[' + $i + '][k]';

            // Push the stack variable into the variables array
            $vars.push($_precompile_matrix + $i + '=' + $_precompile_matrix + '[' + $i + ']');

            // Push the stack instance variables into the variables array
            $vars.push($_precompile_matrix + $i + '$0=' + $_precompile_matrix + $i + '[0]');
            $vars.push($_precompile_matrix + $i + '$1=' + $_precompile_matrix + $i + '[1]');
            $vars.push($_precompile_matrix + $i + '$2=' + $_precompile_matrix + $i + '[2]');
            $vars.push($_precompile_matrix + $i + '$3=' + $_precompile_matrix + $i + '[3]');

            // Get the private, protected, and public definitions objects 
            var $private   = $class[$_definition_private].call($_lock);
            var $protected = $class[$_definition_protected].call($_lock);
            var $public    = $class[$_definition_public].call($_lock);

            // Get the private, protected, and public keys
            var $privateKeys   = $__keys($private) || [];
            var $protectedKeys = $__keys($protected) || [];
            var $publicKeys    = $__keys($public) || [];

            // Create the references container
            var $references = {};

            // Dump the private definitions into the variables and statements arrays
            for (var $k = 0, $l = $privateKeys.length; $k < $l; $k++)
                $_constructRuntimeDump($vars, $statements, $private, $references, $privateKeys[$k], $k, $i, null, null);

            // Create the index offset
            var $index = $privateKeys.length;

            // Dump the protected definitions into the variables and statements arrays
            for (var $k = 0, $l = $protectedKeys.length; $k < $l; $k++)
                $_constructRuntimeDump($vars, $statements, $protected, $references, $protectedKeys[$k], $k + $index, $i, $protectedOverrides, null);

            // Increment the index offset
            $index += $protectedKeys.length;

            // Dump the public definitions into the variables and statements arrays
            for (var $k = 0, $l = $publicKeys.length; $k < $l; $k++)
                $_constructRuntimeDump($vars, $statements, $public, $references, $publicKeys[$k], $k + $index, $i, null, $publicOverrides);

            // Push the lock statement into the statements array (without locking expandos)
            $statements.push('l(' + $_precompile_matrix + $i + '$3,' + ($class[$_definition_expando_private] ? $_precompile_null : $_precompile_matrix + $i + '$0') + ',' + $_precompile_matrix + $i + '$1,' + ($class[$_definition_expando_public] ? $_precompile_null : $_precompile_matrix + $i + '$2') + ')');
        }

        // Create the precompiled string
        var $precompile = '';

        // Construct the precompiled string from the closures string, variables array, and statements array
        $precompile += 'var ' + $closures + ';';
        $precompile += 'return function(' + $_precompile_matrix + ',' + $_precompile_readonly + ',' + $_precompile_injections + '){';
        $precompile += 'var ' + $vars.join(',') + ';';
        $precompile += $statements.join(';') + ';';
        $precompile += '};';

        // Return the precompiled string
        return $precompile;
    };

    // Create the import runtime helper functions
    var $_importRuntimeAccessor    = function($cache, $name, $private, $public, $type, $accessor)
    {
        // Create the accessor descriptor with the embedded property name
        var $descriptor = { 'name': $name };

        // Format the accessor
        $accessor += 'et';

        // Constructor the accessor descriptor
        $_constructRuntimeMethod($descriptor, false, $private, $cache['~' + $accessor + '_' + $name], $private, $public, $type, $accessor);

        // Return the descriptor
        return $descriptor;
    };
    var $_importRuntimeDescriptor  = function($instance, $descriptor)
    {
        // Set the descriptor on the instance using the embedded member name
        $__defineProperty($instance, $descriptor['name'], $descriptor);
    };
    var $_importRuntimeDescriptor2 = function($formerInstance, $latterInstance, $descriptor)
    {
        // Get the embedded member name
        var $name = $descriptor['name'];

        // Set the descriptor on the former and latter instances
        $__defineProperty($formerInstance, $name, $descriptor);
        $__defineProperty($latterInstance, $name, $descriptor);
    };
    var $_importRuntimeField       = function($cache, $name, $injections, $private, $public, $type, $readonly)
    {
        // Create the field descriptor with the embedded property name
        var $descriptor = { 'name': $name };

        // If an injections array was provided, construct the injection descriptor
        if ($injections)
            $_constructRuntimeInjection($descriptor, $name, $cache[$name], $injections, $type, $readonly);
        // Construct the field descriptor
        else
            $_constructRuntimeField($descriptor, false, $name, $cache[$name], $private, $public, $type, $readonly);

        // Return the descriptor
        return $descriptor;
    };
    var $_importRuntimeLock        = function($base, $private, $protected, $public)
    {
        // Freeze the base instance
        $__freeze($base);

        // If a private instance was provided, freeze the private instance
        if ($private)
            $__freeze($private);

        // Freeze the protected instance
        $__freeze($protected);

        // If a public instance was provided, freeze the public instance
        if ($public)
            $__freeze($public);
    };
    var $_importRuntimeMethod      = function($cache, $name, $private, $public, $type)
    {
        // Create the method descriptor with the embedded property name and the method context
        var $descriptor = { 'name': $name };
        var $this       = $private;

        // If the method is the constructor, create the constructor context
        if ($name === '~constructor')
            $this = $_constructRuntimeConstructor($private);

        // Construct the method descriptor
        $_constructRuntimeMethod($descriptor, false, $this, $cache[$name], $private, $public, $type);

        // Return the descriptor
        return $descriptor;
    };
    var $_importRuntimeProperty    = function($instance, $get, $set)
    {
        // Extract the property name
        var $name = $get && $get['name'] || $set && $set['name'] || '';
        
        // Extract the get and set accessors
        $get = $get && $get['get'] || undefined;
        $set = $set && $set['set'] || undefined;

        // Set the property get/set accessor descriptors on the instance
        $__defineProperty($instance, $name, { 'enumerable': true, 'get': $get, 'set': $set });
    };

    // ########## JTYPES ##########

    // Create the compiler
    var $$ = function()
    {
        // Get the initial arguments
        var $argument    = 0;
        var $baseClass   = null;
        var $constructor = arguments[$argument++];
        var $modifiers   = '';
        var $prototype   = null;

        // If the constructor is not a simple object
        if (!$$.isSimpleObject($constructor))
        {
            // Get the prototype
            $prototype = arguments[$argument++];

            // If the constructor is not a function
            if (!$$.isFunction($constructor))
            {
                // If the constructor is not a class
                if (!$$.isClass($constructor))
                {
                    // If the constructor is not a string, throw an exception
                    if (!$$.isString($constructor))
                        throw $_exceptionArguments(null, arguments);

                    // Use the first argument as the modifiers string
                    $modifiers = $constructor;

                    // If the prototype is a class
                    if ($$.isClass($prototype))
                    {
                        // Use the second argument as the base class
                        $baseClass   = $prototype;
                        $constructor = arguments[$argument++];
                    }
                    // Use the second argument as the constructor
                    else
                        $constructor = $prototype;

                    // If the constructor is not a function
                    if (!$$.isFunction($constructor))
                    {
                        // Use the third argument as the prototype
                        $prototype   = $constructor;
                        $constructor = null;
                    }
                    // Use the fourth argument as the prototype
                    else
                        $prototype = arguments[$argument++];
                }
                else
                {
                    // Use the first argument as the base class
                    $baseClass = $constructor;

                    // If the prototype is a function
                    if ($$.isFunction($prototype))
                    {
                        // Use the second argument as the constructor
                        $constructor = $prototype;
                        $prototype   = arguments[$argument++];
                    }
                    else
                        $constructor = null;
                }
            }

            // If the prototype is not a simple object, throw an exception
            if (!$$.isSimpleObject($prototype))
                throw $_exceptionArguments(null, arguments);
        }
        else
        {
            // Use the first argument as the prototype
            $prototype   = $constructor;
            $constructor = null;
        }

        // If the argument count does not match the number of arguments, throw an exception
        if (!$_unsafe && arguments.length !== $argument)
            throw $_exceptionArguments(null, arguments);

        // If no constructor was provided
        if (!$constructor)
        {
            // If a base class was provided
            if ($baseClass)
            {
                // Use a default constructor
                $constructor = function()
                {
                    // If a base constructor exists, apply it with the arguments
                    if (this.__base)
                        return this.__base.apply(this, arguments);
                };
            }
            // Use an empty function as the default constructor
            else
                $constructor = $$.empty();
        }

        // Create the flags
        var $abstract  = false;
        var $export    = false;
        var $final     = false;
        var $import    = false;
        var $internal  = false;
        var $optimized = false;
        var $struct    = false;
        var $unlocked  = false;
        var $unsafe    = false;

        // Create the expando flags
        var $expandoClass     = false;
        var $expandoPrivate   = false;
        var $expandoPrototype = false;
        var $expandoPublic    = false;

        // If a modifiers string was provided
        if ($modifiers)
        {
            // If the modifiers string is not an import string
            if ($modifiers.length <= $_const_precompile_prefix.length || $modifiers.substr(0, $_const_precompile_prefix.length) !== $_const_precompile_prefix)
            {
                // Create the keywords array
                var $keywords = $__string_trim__.call($modifiers).split(' ') || [];

                for (var $i = 0, $j = $keywords.length; $i < $j; $i++)
                {
                    // Get the current keyword
                    var $keyword = $keywords[$i];

                    // If the keyword is abstract, set the abstract flag
                    if ($keyword === 'abstract')
                        $abstract = true;
                    // If the keyword is expando
                    else if ($keyword === 'expando')
                    {
                        // Set all the expando flags
                        $expandoClass     = true;
                        $expandoPrivate   = true;
                        $expandoPrototype = true;
                        $expandoPublic    = true;
                    }
                    // If the keyword is expando-private, set the expando private flag
                    else if ($keyword === 'expando-private' || $keyword === 'private-expando')
                        $expandoPrivate = true;
                    // If the keyword is expando-public, set the expando public flag
                    else if ($keyword === 'expando-public' || $keyword === 'public-expando')
                        $expandoPublic = true;
                    // If the keyword is expando-prototype, set the expando prototype flag
                    else if ($keyword === 'expando-prototype' || $keyword === 'prototype-expando')
                        $expandoPrototype = true;
                    // If the keyword is expando-static, set the expando class flag
                    else if ($keyword === 'expando-static' || $keyword === 'static-expando')
                        $expandoClass = true;
                    // If the keyword is export, set the export flag
                    else if ($keyword === 'export')
                        $export = true;
                    // If the keyword is internal, set the internal flag
                    else if ($keyword === 'internal')
                        $internal = true;
                    // If the keyword is optimized, set the optimized flag
                    else if ($keyword === 'optimized')
                        $optimized = true;
                    // If the keyword is sealed, set the final flag
                    else if ($keyword === 'sealed')
                        $final = true;
                    // If the keyword is struct, set the struct flag
                    else if ($keyword === 'struct')
                        $struct = true;
                    // If the keyword is unlocked
                    else if ($keyword === 'unlocked')
                    {
                        // Set all the expando flags
                        $expandoClass     = true;
                        $expandoPrivate   = true;
                        $expandoPrototype = true;
                        $expandoPublic    = true;

                        // Set the unlocked flag
                        $unlocked = true;
                    }
                    // If the keyword is the unsafe token, set the unsafe flag
                    else if ($_unsafe && $keyword === $_unsafe)
                        $unsafe = true;
                    // If a different keyword was provided, throw an exception
                    else if ($keyword)
                        throw $_exceptionFormat($_lang_$$_keyword, $keyword);
                }

                // If the class is abstract
                if ($abstract)
                {
                    // If the class is final, throw an exception
                    if ($final)
                        throw $_exceptionFormat($_lang_$$_abstract_conflict_1, 'sealed');

                    // If the struct modifier was provided, throw an exception
                    if ($struct)
                        throw $_exceptionFormat($_lang_$$_abstract_conflict_1, 'struct');
                }
                // If the struct modifier was provided
                else if ($struct)
                {
                    // If the export modifier was provided, throw an exception
                    if ($export)
                        throw $_exceptionFormat($_lang_$$_struct_export);

                    // If either expando private or expando public modifier was provided, throw an exception
                    if ($expandoPrivate || $expandoPublic)
                        throw $_exceptionFormat($_lang_$$_struct_expando);
                }
            }
            // Set the import flag
            else
                $import = true;
        }

        // Create the chain array and current class tracker
        var $chain     = [];
        var $construct = null;
        var $current   = $baseClass;
        var $levels    = 1;

        // If the class has the import flag
        if ($import)
        {
            // Generate the imported construct function factory
            $construct = (new $__function('"use strict";var $=function(' + $_const_construct_arguments + ')' + $modifiers.substr($_const_precompile_prefix.length) + 'return $;')).call($$);

            // Copy the imported construct data into the class
            $abstract = !!$construct['a'];
            $final    = !!$construct['f'];
            $struct   = !!$construct['s'];
            $unsafe   = $_unsafe && $construct['u'] === $_unsafe;
        }

        // If the argument count does not match the number of arguments, throw an exception
        if (!$unsafe && arguments.length !== $argument)
            throw $_exceptionArguments(null, arguments);

        // Create the cache, private, protected, and public references along with the inherited prototype reference
        var $classCache     = null;
        var $classPrivate   = {};
        var $classProtected = null;
        var $classPrototype = null;
        var $classPublic    = null;

        // Create the prototype and static definitions objects
        var $definitionsPrototype = {};
        var $definitionsStatic    = {};

        // Create the base protected and public references
        var $baseProtected = null;
        var $basePublic    = null;

        // If a base class was provided
        if ($baseClass)
        {
            // NON-INTERNAL CLASSES CANNOT EXTEND INTERNAL CLASSES
            // UNLOCKED CLASSES CAN ONLY EXTEND/INHERIT OTHER UNLOCKED CLASSES

            // Get the base protected and public definitions objects
            $baseProtected = $baseClass[$_definition_protected].call($_lock);
            $basePublic    = $baseClass[$_definition_public].call($_lock);

            // If the base class is final, throw an exception
            if ($baseClass[$_definition_final])
                throw $_exceptionFormat($_lang_$$_derive_sealed);

            // If the class is not unsafe and the base class is unsafe, throw an exception
            if (!$unsafe && $baseClass[$_definition_unsafe])
                throw $_exceptionFormat($_lang_$$_derive_unsafe);

            // If the class has the import flag
            if ($import)
            {
                // If the base class doesn't have the import flag, throw an exception
                if (!$baseClass[$_definition_import])
                    throw $_exceptionFormat($_lang_$$_derive_export);

                // Create the chained cache, protected, and public definitions objects
                $classCache     = $__create($baseClass[$_definition_cache]);
                $classProtected = {};
                $classPublic    = {};
            }
            else
            {
                // If the base class has the import flag, throw an exception
                if ($baseClass[$_definition_import])
                    throw $_exceptionFormat($_lang_$$_derive_import);

                // Create the chained cache, chained protected, and chained public definitions objects
                $classCache     = $optimized ? $__create($baseClass[$_definition_cache]) : {};
                $classProtected = $__create($baseProtected);
                $classPublic    = $__create($basePublic);
            }

            // If the class is optimized and the base class is not optimized, throw an exception
            if ($optimized && !$baseClass[$_definition_optimized])
                throw $_exceptionFormat($_lang_$$_derive_unoptimized);

            // If the class has the struct modifier and the base class does not, throw an exception
            if ($struct && !$baseClass[$_definition_struct])
                throw $_exceptionFormat($_lang_$$_derive_class);

            // Set the subclass flag
            $_subclass = true;

            // Construct the inherited prototype
            $classPrototype = new $baseClass();

            // Reset the subclass flag
            $_subclass = false;

            // If a current class was found
            while ($$.isClass($current))
            {
                // Add the current class to the chain array
                $chain.push($current);

                // Find the next class in the chain
                $current = $current[$_definition_baseClass];
            }
        }
        else
        {
            // Create the cache, protected, and public definitions objects along with the inherited prototype
            $classCache     = {};
            $classProtected = {};
            $classPrototype = new $_class();
            $classPublic    = {};
        }

        for (var $key in $prototype)
        {
            // If the property is a special member, continue
            if ($key === 'constructor' || $key === 'prototype')
                continue;

            // Compile the the class definition into the definitions objects
            $_definitionsCompiler($classCache, $classPrivate, $classProtected, $classPublic, $definitionsPrototype, $definitionsStatic, $key, $prototype[$key], $baseProtected, $basePublic, $abstract, $final, $import, $optimized, $struct);
        }

        // If any injections arguments were provided
        if ($unsafe && arguments[$argument])
        {
            // If the class does not have the import flag
            if (!$import)
            {
                // Inject the private, protected, and public definitions objects
                $_definitionsCompilerInjections($classPrivate, $optimized ? $classCache : null, arguments[$argument + $_inject_private]);
                $_definitionsCompilerInjections($classProtected, $optimized ? $classCache : null, arguments[$argument + $_inject_protected]);
                $_definitionsCompilerInjections($classPublic, $optimized ? $classCache : null, arguments[$argument + $_inject_public]);

                // Inject the prototype and static definitions objects
                $_definitionsCompilerInjections($definitionsPrototype, null, arguments[$argument + $_inject_prototype]);
                $_definitionsCompilerInjections($definitionsStatic, null, arguments[$argument + $_inject_static]);
            }
            else
            {
                // Inject the cached definitions objects
                $_definitionsCompilerInjections(null, $classCache, arguments[$argument + $_inject_private]);
                $_definitionsCompilerInjections(null, $classCache, arguments[$argument + $_inject_protected]);
                $_definitionsCompilerInjections(null, $classCache, arguments[$argument + $_inject_public]);
            }
        }

        // IF THE CLASS IS INTERNAL, __type AND __self SHOULD BE MIRRORED ON THE BASE INSTANCE <s>BE PRIVATE INSTEAD OF PUBLIC</s>
        // IF THE CLASS IS UNLOCKED, __base AND __this SHOULD BE MIRRORED ON THE BASE INSTANCE <s>PROTECTED INSTEAD OF PRIVATE</s>; __type AND __self SHOULD BE MIRRORED ON THE BASE INSTANCE <s>BE PRIVATE INSTEAD OF PUBLIC</s> (IF INTERNAL)

        // Create the class
        var $class = function()
        {
            // If the subclass flag is set, return
            if ($_subclass)
                return;

            // If the class is abstract, throw an exception
            if ($abstract)
                throw $_exceptionFormat($_lang_$$_abstract_instance);

            // Create the instance reference and matrix
            var $instance = this;
            var $matrix   = new $__array($levels);

            // USE HAS-OWN FOR THE AS() AND IS() METHOD CHECKS

            // Check if the new operator was used
            var $isInit = false;
            var $isNew  = $_clone || this instanceof $class && this.as === undefined && this.is === undefined;

            // If the new operator was not used
            if (!$isNew)
            {
                // Set the subclass flag
                $_subclass = true;

                // Create the class instance
                $instance = new $class();

                // Reset the subclass flag
                $_subclass = false;
            }

            // Create the casting and checking functions
            var $as = function($type)
            {
                // If the type is not a class or the instance is not an instance of type, return null
                if (!$$.isClass($type) || !($instance instanceof $type))
                    return null;

                // Create the level tracker
                var $level = 0;

                do
                {
                    // If the type was found in the chain array, break
                    if ($chain[$level] === $type)
                        break;
                }
                // If the level is still valid
                while (++$level < $levels);

                // Return the public instance
                return $matrix[$level][2];
            };
            var $is = function($type)
            {
                // If no type was provided, return false
                if (!$type)
                    return false;

                // Return true if the instance is an instance of the type
                return !!($instance instanceof $type);
            };

            // Set the "as" and "is" methods in the construct base
            $__defineProperty($instance, 'as', { 'value': $as });
            $__defineProperty($instance, 'is', { 'value': $is });

            // If the types flag is set, set the "type" method in the construct base
            if ($_types)
                $__defineProperty($instance, 'type', { 'value': function()
                {
                    // Return the class reference
                    return $class;
                } });

            // Create the class instances
            var $base      = $instance;
            var $private   = null;
            var $protected = null;
            var $public    = $instance;

            // Create the internal get accessors
            var $getterReadonly = function()
            {
                // Return true if the class is initialized
                return $isInit;
            };

            // Create the public and protected override caches
            var $protectedOverrides = !$import && !$optimized ? {} : null;
            var $publicOverrides    = !$import && !$optimized ? {} : null;

            // Create the injection objects array and get the cache matrix if the instance is a clone
            var $injections  = $unsafe ? arguments[$_clone ? 1 : 0] : null;
            var $matrixCache = $_clone ? arguments[0] : null;

            // If lazy loading is not enabled and the class does not have the import flag and is not optimized
            if (!$_lazy && !$import && !$optimized)
            {
                // Create the contexts and inherits arrays
                var $contexts = new $__array($levels);
                var $inherits = new $__array($levels);

                for (var $i = 0; $i < $levels; $i++)
                {
                    // Create the base, private, and public instances
                    $base      = $__create($instance);
                    $private   = {};
                    $public    = $__create($instance);

                    // Create the constructor context and matrix instance stack
                    var $context = $__create($private);
                    var $stack   = [$private, $base, $public];

                    // Define the self reference accessors and the public instance accessor on the private and public instances
                    $__defineProperty($private, '__self', { 'value': $instance });
                    $__defineProperty($public, '__self', { 'value': $instance });
                    $__defineProperty($private, '__this', { 'value': $public });

                    // Create the inherits objects
                    var $baseInherits      = {};
                    var $protectedInherits = {};
                    var $publicInherits    = {};

                    // Build the matrix instance stack
                    ($i === 0 ? $construct : $chain[$i][$_definition_construct]).call($_lock, $stack, $baseInherits, $protectedInherits, $publicInherits, $protectedOverrides, $publicOverrides, $getterReadonly, $context, $unsafe ? $injections[$i] : null, $matrixCache ? $matrixCache[$i] : null);

                    // Append the instance stack into the instance matrix and constructor context into the contexts array
                    $matrix[$i]   = $stack;
                    $contexts[$i] = $context;
                    $inherits[$i] = [$baseInherits, $protectedInherits, $publicInherits];
                }

                // Define the derived inherits objects
                var $derivedBaseInherits      = null;
                var $derivedProtectedInherits = null;
                var $derivedPublicInherits    = null;

                for (var $i = $levels - 1; $i >= 0; $i--)
                {
                    // Get the matrix instance stack
                    var $stack = $matrix[$i];

                    // Get the base, private, and public instances from the instance stack
                    $base    = $stack[1];
                    $private = $stack[0];
                    $public  = $stack[2];

                    // Get the current type
                    var $type = $chain[$i];

                    // Define the type accessors on the private and public instances
                    $__defineProperty($private, '__type', { 'value': $type });
                    $__defineProperty($public, '__type', { 'value': $type });

                    // If the instance is a struct
                    if ($struct)
                    {
                        // Create the clone method
                        var $clone = $_constructRuntimeClone($class, $type, $private, $public, $matrix, $injections);

                        // Define the clone method on the private and public instances
                        $__defineProperty($private, 'clone', { 'value': $clone });
                        $__defineProperty($public, 'clone', { 'value': $clone });
                    }

                    // If the stack has a base class
                    if ($i !== $levels - 1)
                    {
                        // Get the base instance reference
                        var $privateBase = $matrix[$i + 1][1];

                        // Define the base instance reference on the private instance
                        $__defineProperty($private, '__base', { 'value': $privateBase });

                        // Get the constructor context
                        var $context = $contexts[$i];

                        // Mask the base instance reference with the base constructor
                        $__defineProperty($context, '__base', { 'value': $privateBase['~constructor'] });

                        // Freeze the constructor context
                        $__freeze($context);

                        // Get the inherits objects
                        var $baseInherits      = $derivedBaseInherits;
                        var $protectedInherits = $derivedProtectedInherits;
                        var $publicInherits    = $derivedPublicInherits;

                        // Get the derived inherits array
                        var $derivedInherits = $inherits[$i];

                        // Get the derived inherits objects
                        $derivedBaseInherits      = $derivedInherits[0];
                        $derivedProtectedInherits = $derivedInherits[1];
                        $derivedPublicInherits    = $derivedInherits[2];

                        // Build the inherits descriptors for the base, private, and public instances
                        $_constructRuntimeInherits($baseInherits, $derivedBaseInherits, $base);
                        $_constructRuntimeInherits($protectedInherits, $derivedProtectedInherits, $private);
                        $_constructRuntimeInherits($publicInherits, $derivedPublicInherits, $public);
                    }
                    else
                    {
                        // Get the derived inherits array
                        var $derivedInherit = $inherits[$i];

                        // Get the derived inherits objects
                        $derivedBaseInherits      = $derivedInherit[0];
                        $derivedProtectedInherits = $derivedInherit[1];
                        $derivedPublicInherits    = $derivedInherit[2];
                    }

                    // Freeze the base instance object
                    $__freeze($base);

                    // If the class is not expando-private, freeze the private instance object
                    if (!$type[$_definition_expando_private])
                        $__freeze($private);

                    // If the class is not expando-public, freeze the public instance object
                    if (!$type[$_definition_expando_public])
                        $__freeze($public);
                }
            }
            else
            {
                // Set the protected instance
                $protected = $instance;

                for (var $i = $levels - 1; $i >= 0; $i--)
                {
                    // Create the base, protected, and public instances
                    $base      = $__create($base);
                    $protected = $__create($protected);
                    $public    = $__create($public);

                    // Create the private instance
                    $private = $__create($protected);

                    // Define the self reference accessors and the public instance accessor on the private and public instances
                    $__defineProperty($private, '__self', { 'value': $instance });
                    $__defineProperty($public, '__self', { 'value': $instance });
                    $__defineProperty($private, '__this', { 'value': $public });

                    // Get the current type
                    var $type = $chain[$i];

                    // Define the type accessors on the private and public instances
                    $__defineProperty($private, '__type', { 'value': $type });
                    $__defineProperty($public, '__type', { 'value': $type });

                    // If the stack has a base class, define the base instance reference on the private instance
                    if ($i !== $levels - 1)
                        $__defineProperty($private, '__base', { 'value': $matrix[$i + 1][3] });

                    // If the instance is a struct
                    if ($struct)
                    {
                        // Create the clone method
                        var $clone = $_constructRuntimeClone($class, $type, $private, $public, $matrix, $injections);

                        // Define the clone method on the private and public instances
                        $__defineProperty($private, 'clone', { 'value': $clone });
                        $__defineProperty($public, 'clone', { 'value': $clone });
                    }

                    // Create the matrix instance stack
                    $matrix[$i] = [$private, $protected, $public, $base];
                }

                // If the instance is a clone or the class does not have the import flag and is not optimized
                if ($_clone || !$import && !$optimized)
                {
                    // Build the matrix instance stack
                    for (var $i = 0; $i < $levels; $i++)
                        ($i === 0 ? $construct : $chain[$i][$_definition_construct]).call($_lock, $matrix[$i], null, null, null, $protectedOverrides, $publicOverrides, $getterReadonly, null, $unsafe ? $injections[$i] : null, $matrixCache ? $matrixCache[$i] : null);
                }
                // Build the precompiled matrix instance stack
                else
                    $construct.call($_lock, $matrix, $getterReadonly, $unsafe ? $injections : null);
            }

            // Create a reference for the return value of the constructor
            var $return = undefined;

            // If the class is not a struct
            if (!$struct)
            {
                // If the class is unsafe
                if ($unsafe)
                {
                    // If any additional arguments were provided, execute the constructor with the extra arguments
                    if (arguments.length > 1)
                        $return = $private['~constructor'].apply($private, $$.asArray(arguments).slice(1));
                    // Execute the constructor
                    else
                        $return = $private['~constructor'].call($private);
                }
                // If arguments were provided, execute the constructor with the arguments
                else if (arguments.length)
                    $return = $private['~constructor'].apply($private, arguments);
                // Execute the constructor
                else
                    $return = $private['~constructor'].call($private);
            }
            // Execute the parameterless constructor
            else
                $private['~constructor'].call($private);

            // Set the initialized flag
            $isInit = true;

            // If the "new" keyword was not used and the return value of the constructor was not undefined, return it
            if (!$isNew && $return !== undefined)
                return $return;

            // Return the public instance
            return $public;
        };

        // Prepend the class to the chain array and set the levels count
        $levels = $chain.unshift($class);

        // If the class has the import flag or is optimized, set the constructor in the cache definitions object
        if ($import || $optimized)
            $__defineProperty($classCache, '~constructor', { 'enumerable': true, 'value': $constructor });

        // Create the class cache
        var $cache      = {};
        var $eval       = null;
        var $precompile = null;

        // If the class does not have the import flag
        if (!$import)
        {
            // If a base class was provided and it is abstract
            if ($baseClass && $baseClass[$_definition_abstract])
            {
                // Get the array of keys for the base protected and public definitions objects
                var $baseProtectedKeys = $__keys($baseProtected) || [];
                var $basePublicKeys    = $__keys($basePublic) || [];

                // Compile the protected definition object for each property defined in the base protected definition object
                for (var $i = 0, $j = $baseProtectedKeys.length; $i < $j; $i++)
                    $_definitionsCompilerBaseAbstract($classProtected, $baseProtected, $baseProtectedKeys[$i]);

                // Compile the public definition object for each property defined in the base public definition object
                for (var $i = 0, $j = $basePublicKeys.length; $i < $j; $i++)
                    $_definitionsCompilerBaseAbstract($classPublic, $basePublic, $basePublicKeys[$i]);
            }

            for (var $definitionsPrototypeMember in $definitionsPrototype)
            {
                // Get the definition from the prototype definitions object
                var $definition = $definitionsPrototype[$definitionsPrototypeMember];

                // If the definition is not a prototype definition, continue
                if ($definition[$_definition_member_type] !== 'prototype')
                    continue;

                // Set the prototype member descriptor
                $__defineProperty($classPrototype, $definition[$_definition_member_name], { 'enumerable': true, 'value': $definition[$_definition_member_value] });
            }

            for (var $definitionsStaticMember in $definitionsStatic)
            {
                // Get the definition from the static definitions object
                var $definition = $definitionsStatic[$definitionsStaticMember];

                // If the definition is not a static definition, continue
                if ($definition[$_definition_member_type] !== 'static')
                    continue;

                // Set the static member descriptor
                $__defineProperty($class, $definition[$_definition_member_name], { 'enumerable': true, 'value': $definition[$_definition_member_value] });
            }

            // Create the constructor definition object
            var $constructorDefinition = {};

            // Set the constructor definition object data
            $constructorDefinition[$_definition_member_method_abstract] = false;
            $constructorDefinition[$_definition_member_method_final]    = false;
            $constructorDefinition[$_definition_member_method_virtual]  = false;
            $constructorDefinition[$_definition_member_name]            = '~constructor';
            $constructorDefinition[$_definition_member_type]            = 'method';
            $constructorDefinition[$_definition_member_value]           = $constructor;

            // Freeze the constructor definition object
            $__freeze($constructorDefinition);

            // Set the constructor in the protected definitions object
            $__defineProperty($classProtected, '~constructor', { 'enumerable': true, 'value': $constructorDefinition });

            // Get the arrays of private, protected, and public member keys
            var $classPrivateKeys   = $__keys($classPrivate) || [];
            var $classProtectedKeys = $__keys($classProtected) || [];
            var $classPublicKeys    = $__keys($classPublic) || [];

            // Create the construct and precompile helper functions
            $construct  = function($stack, $baseInherits, $protectedInherits, $publicInherits, $protectedOverrides, $publicOverrides, $readonly, $context, $injections, $cache)
            {
                // If this function was not internally called, return
                if (this !== $_lock)
                    return;

                // Create the stack instance references
                var $base      = null;
                var $private   = $stack[0];
                var $protected = null;
                var $public    = $stack[2];

                // If lazy loading is enabled
                if ($_lazy)
                {
                    // Set the stack instance references
                    $base      = $stack[3];
                    $protected = $stack[1];
                }
                // Set the stack instance references (no protected)
                else
                    $base = $stack[1];

                // Get the instance caches
                var $cachePrivate   = $cache ? $cache[0] : null;
                var $cacheProtected = $cache ? $cache[1] : null;
                var $cachePublic    = $cache ? $cache[2] : null;

                // Construct each private member in the instance matrix
                for (var $i = 0, $j = $classPrivateKeys.length; $i < $j; $i++)
                    $_constructRuntime($classPrivateKeys[$i], $classPrivate, null, null, null, $readonly, null, false, false, $base, $private, $protected, $public, $injections, $cachePrivate);

                // Construct each protected member in the instance matrix
                for (var $i = 0, $j = $classProtectedKeys.length; $i < $j; $i++)
                    $_constructRuntime($classProtectedKeys[$i], $classProtected, $protectedOverrides, $protectedInherits, $baseInherits, $readonly, $context, true, false, $base, $private, $protected, $public, $injections, $cacheProtected);

                // Construct each public member in the instance matrix
                for (var $i = 0, $j = $classPublicKeys.length; $i < $j; $i++)
                    $_constructRuntime($classPublicKeys[$i], $classPublic, $publicOverrides, $publicInherits, $baseInherits, $readonly, null, false, true, $base, $private, $protected, $public, $injections, $cachePublic);

                // If lazy loading is enabled
                if ($_lazy)
                {
                    // Freeze the base and protected instance objects
                    $__freeze($base);
                    $__freeze($protected);

                    // If the class is not expando-private, freeze the private instance object
                    if (!$expandoPrivate)
                        $__freeze($private);

                    // If the class is not expando-public, freeze the public instance object
                    if (!$expandoPublic)
                        $__freeze($public);
                }
            };
            $precompile = function()
            {
                // If this function was not internally called, return
                if (this !== $_lock)
                    return;

                // If the precompiled string is not found, generate it
                if (!$eval)
                    $eval = $_constructRuntimePrecompile($chain);

                // Create the precompiled string
                var $evalExport = '{' + $eval + '};';

                // Append the class data to the precompiled string
                $evalExport += '$.a=' + ($abstract ? '!0' : '!1') + ';';
                $evalExport += '$.f=' + ($final ? '!0' : '!1') + ';';
                $evalExport += '$.k0=' + $classPrivateKeys.length + ';';
                $evalExport += '$.k1=' + $classProtectedKeys.length + ';';
                $evalExport += '$.k2=' + $classPublicKeys.length + ';';
                $evalExport += '$.l=' + $levels + ';';
                $evalExport += '$.s=' + ($struct ? '!0' : '!1') + ';';

                // If the class is unsafe, append the unsafe (razor) class data to the precompiled string
                if ($unsafe)
                    $evalExport += '$.u="@unsafe";';

                // Return the precompiled string
                return $_const_precompile_prefix + $evalExport;
            };
        }
        else
        {
            // Get the array of cached member keys
            var $classCacheKeys = $__keys($classCache) || [];

            // If the imported class data doesn't validate, throw an exception
            if ($levels !== $construct['l'] || $classCacheKeys.length !== $construct['k0'] + $construct['k1'] + $construct['k2'])
                throw $_exceptionFormat($_lang_$$_import);
        }

        // Freeze the class definitions objects
        $__freeze($classCache);
        $__freeze($classPrivate);
        $__freeze($classProtected);
        $__freeze($classPublic);

        // Set the class cache data
        $cache[$_definition_abstract]          = { 'value': $abstract };
        $cache[$_definition_baseClass]         = { 'value': $baseClass };
        $cache[$_definition_cache]             = { 'value': $classCache };
        $cache[$_definition_construct]         = { 'value': !$import && !$final ? $construct : $$.empty() };
        $cache[$_definition_expando_class]     = { 'value': $expandoClass };
        $cache[$_definition_expando_private]   = { 'value': $expandoPrivate };
        $cache[$_definition_expando_prototype] = { 'value': $expandoPrototype };
        $cache[$_definition_expando_public]    = { 'value': $expandoPublic };
        $cache[$_definition_final]             = { 'value': $final };
        $cache[$_definition_import]            = { 'value': $import };
        $cache[$_definition_optimized]         = { 'value': $optimized };
        $cache[$_definition_private]           = { 'value': $_definitionsCompilerLock($classPrivate) };
        $cache[$_definition_precompile]        = { 'value': $precompile };
        $cache[$_definition_protected]         = { 'value': $_definitionsCompilerLock($classProtected) };
        $cache[$_definition_public]            = { 'value': $_definitionsCompilerLock($classPublic) };
        $cache[$_definition_struct]            = { 'value': $struct };
        $cache[$_definition_unsafe]            = { 'value': $unsafe };

        // Set the class cache recursive key sniffer
        $cache[$_definition_keySniff] = { 'value': $class };

        // Set the class cache
        $__defineProperties($class, $cache);

        // If the types flag is not set, set the prototype constructor
        //if (!$_types)
        //    $__defineProperty($classPrototype, 'constructor', { 'value': $class });

        // If the prototype is not expando, freeze the prototype
        if (!$import && !$expandoPrototype)
            $__freeze($classPrototype);

        // Set the class prototype initially with the "writable" flag (due to some weird WebKit bug involving the internal [[Class]] attribute)
        $class.prototype = $classPrototype;

        // Set the class prototype without the "writable" flag
        $__defineProperty($class, 'prototype', { 'value': $classPrototype, 'writable': false });

        // If a static "toString" definition was not provided, set the class toString method
        if (!$__hasOwnProperty__.call($definitionsStatic, 'toString'))
            $class.toString = $_class_toString;

        // If the class is not expando, freeze the class
        if (!$import && !$expandoClass)
            $__freeze($class);

        // If the class has the import flag or is optimized
        if ($import || $optimized)
        {
            // If the class is optimized
            if ($optimized)
            {
                // Generate the precompiled string and the optimized construct function factory
                $eval      = $_constructRuntimePrecompile($chain);
                $construct = new $__function($_const_construct_arguments, '"use strict";' + $eval);
            }

            // Generate the optimized construct function
            $construct = $construct.call
            (
                $$,                         // this
                $chain,                     // c
                $_definition_cache,         // k
                $_importRuntimeField,       // f
                $_importRuntimeMethod,      // m
                $_importRuntimeAccessor,    // a
                $_importRuntimeDescriptor,  // d
                $_importRuntimeDescriptor2, // d2
                $_importRuntimeProperty,    // p
                $_importRuntimeLock         // l
            );
        }

        // If the export flag is set, return the precompiled class
        if ($export)
            return $precompile.call($_lock);

        // Return the class
        return $class;
    };

    // Define the compiler .toString() method
    $__defineProperty($$, 'toString', { 'value': function()
    {
        // Return the compiler type string
        return '[object jTypes]';
    } });

    // ########## DATA ##########

    // ---------- VERSION ----------
    $_defineField('version', $_version, false);
    
    // ---------- CLASS + PROTOTYPE ----------
    $_defineField('__class', $_class, false);
    $_defineField('__proto', $_prototype, false);
    
    // ---------- INTEGER MAX/MIN ----------
    $_defineField('intMax', $_const_int_max, false);
    $_defineField('intMin', $_const_int_min, false);

    // ########## PACKAGES ##########

    // THESE PACKAGE FUNCTIONS ALONG WITH THE $$() COMPILER SHOULD IGNORE $$.DEBUG AND ENFORCE STRICT (FORCE STRING?) ARGUMENTS

    // Define the package methods for class members
    $__forEach__.call('private protected public prototype static'.split(' ') || [], function($modifier)
    {
        // Create the package method for the access modifier
        var $method = function($modifiers, $type, $value)
        {
            switch (arguments.length)
            {
                case 1:

                    // Set the value
                    $value = $modifiers;

                    // Set the default modifiers and type
                    $modifiers = '';
                    $type      = null;

                    break;

                case 2:

                    if (!$$.isClass($modifiers))
                    {
                        // FORMAT $modifiers
                        $modifiers = $$.asString($modifiers);
                        $value     = $type;

                        // Set the default type
                        $type = null;
                    }
                    else
                    {
                        $value = $type;
                        $type  = $modifiers;

                        // Set the default modifiers
                        $modifiers = '';
                    }

                    // Set the member package data
                    $package[$_package_modifiers] = $modifiers ? $modifier + ' ' + $modifiers : $modifier;
                    $package[$_package_value]     = $value;

                    break;

                case 3:

                    // FORMAT $modifiers
                    $modifiers = $$.asString($modifiers);

                    //

                    break;

                default:

                    // If the debug flag is set, throw an exception
                    if ($$.debug)
                        throw $_exceptionArguments($modifier, arguments);

                    // Return null
                    return null;
            }

            // ADD HOOK FOR INTERNAL TYPES (MAYBE APPEND TO MODIFIERS STRING?)

            // Create the member package
            var $package = new $__array($_package_flagCount);

            // Set the member package data
            $package[$_package_modifiers] = $modifiers ? $modifier + ' ' + $modifiers : $modifier;
            $package[$_package_type]      = $type;
            $package[$_package_value]     = $value;

            // Lock the member package
            $package = $_definitionsCompilerLock($package);

            // Set the member package recursive key sniffer
            $package[$_package_keySniff] = $package;

            // Return the member package
            return $package;
        };

        // If the modifier is the prototype modifier
        if ($modifier === 'prototype')
        {
            // Set the prototype method initially with the "writable" flag (due to some weird WebKit bug involving the internal [[Class]] attribute)
            $$.prototype = $method;

            // Set the prototype method without the "writable" flag
            $__defineProperty($$, 'prototype',
            {
                'value': $method,
                'writable': false
            });
        }
        // Define the package method for the access modifier
        else
            $_defineMethod($modifier, $method);
    });

    // ########## TYPES ##########

    // Define the types method and the "is" methods for internal JavaScript types
    (function()
    {
        // Create the types lookup
        var $lookup = $__create(null);

        // Iterate the internal JavaScript types
        $__array_forEach__.call('Array Boolean Date Error Function Number RegExp String'.split(' ') || [], function($type)
        {
            // Get the type keyword
            var $keyword = $type.toLowerCase();

            // Insert the keyword into the types lookup
            $lookup['[object ' + $type + ']'] = $keyword;

            // Define the "is" method for the type
            $_defineMethod('is' + $type, function($object)
            {
                // Return true if the object matches the type
                return $$.type($object) === $keyword;
            });
        });

        // [object global]    => CHROME, OPERA
        // [object Window]    => FIREFOX, IE, SAFARI
        // [object DOMWindow] => (LEGACY)

        // Iterate the known aliases of the internal JavaScript window type
        $__array_forEach__.call('global Window DOMWindow'.split(' ') || [], function($alias)
        {
            // Insert the window alias into the types lookup
            $lookup['[object ' + $alias + ']'] = 'window';
        });

        // Define the type method
        $_defineMethod('type', function($object)
        {
            // If the object is null or undefined, return the object cast as a string
            if ($object === null || $object === undefined)
                return $object + '';

            // If the object is a class, return the "class" type string
            if ($__hasOwnProperty__.call($object, $_definition_keySniff) && $object[$_definition_keySniff] === $object)
                return 'class';

            // If the object is a class instance, return the "instance" type string
            if ($object instanceof $_class)
                return 'instance';

            // If the object is the window object, return the "window" type string
            if ($object === window || $object.window === $object && !$__hasOwnProperty__.call($object, 'window') && $__getPrototypeOf($object) === null)
                return 'window';
            
            // Return the type string from the types lookup using the native "toString" function
            return $lookup[$__toString__.call($object)] || 'object';
        });
    })();

    // Define the inject flag and the JavaScript type injections
    (function()
    {
        // Create the types array
        var $cache = [];
        var $names = 'Array Boolean Date Error Function Number Object RegExp String Window'.split(' ') || [];
        var $types = [Array, Boolean, Date, Error, Function, Number, Object, RegExp, String, Window];

        // Create the inject and restore iterators
        var $inject  = function($type, $index)
        {
            // Get the type prototype
            var $prototype = $type.prototype;

            // If the type does not have a prototype, return
            if (!$prototype)
                return;

            // If the cache has not been fully built, define the type field
            if ($cache.length < $types.length)
                $_defineField($names[$index], $type, false);
            
            // Cache the prototype type
            $cache[$index] = $prototype.type;

            // Create the prototype type method
            $prototype.type = function()
            {
                // Return the type
                return $type;
            };
        };
        var $restore = function($type, $index)
        {
            // Get the type prototype
            var $prototype = $type.prototype;

            // If the type does not have a prototype, return
            if (!$prototype)
                return;
            
            // Restore the prototype type
            $prototype.type = $cache[$index];
        };

        // Define the inject flag accessors
        $_defineProperty('inject', function()
        {
            // Return the types flag
            return $_types;
        }, function($v)
        {
            // FORMAT $v
            $v = $$.asBool($v);

            // If the types flag has not changed, return
            if ($_types === $v)
                return;

            // Set the types flag
            $_types = $v;

            if ($_types)
            {
                // If the cache has not been fully built
                if ($cache.length < $types.length)
                {
                    // Define the class and instance type fields
                    $_defineField('Class', $_class, false);
                    $_defineField('Instance', $_prototype, false);
                }

                // Construct the injections
                $__array_forEach__.call($types, $inject);
            }
            // Destruct the injections
            else
                $__array_forEach__.call($types, $restore);
        });
    })();

    // ########## CHECKS ##########

    // ---------- ABSTRACT CLASS ----------
    $_defineMethod('isAbstractClass', function($object)
    {
        // Return true if the object is a class and it is abstract
        return $$.isClass($object) && !!$object[$_definition_abstract];
    });

    // ---------- ARGUMENTS OBJECT ----------
    $_defineMethod('isArgumentsObject', function($object)
    {
        // Return true if the object is an arguments object
        return $__toString__.call($object) === '[object Arguments]';
    });

    // ---------- ARRAY-LIKE OBJECT ----------
    $_defineMethod('isArrayLikeObject', function($object)
    {
        // If the object is a null reference or undefined, return false
        if ($object === null || $object === undefined)
            return false;

        // Get the object length
        var $length = $object.length;

        // Return true if the length property is a finite integer greater than or equal to zero
        return $$.isFiniteInt($length) && $length >= 0;
    });

    // ---------- CLASS ----------
    $_defineMethod('isClass', function($object)
    {
        // Return true if the object has a class construct function
        return $object && $object[$_definition_keySniff] === $object;
    });

    // ---------- COMPLEX OBJECT ----------
    $_defineMethod('isComplexObject', function($object)
    {
        // If the object is not an object, return false
        if (!$object || $$.type($object) !== 'object')
            return false;

        // Return true if the prototype of the object is not the object prototype
        return $__getPrototypeOf($object) !== $__objectProto__;
    });

    // ---------- FINITE ----------
    $_defineMethod('isFinite', function($number)
    {
        // Return true if the object is a number and is finite
        return $$.isNumber($number) && !!isFinite($number);
    });

    // ---------- FINITE INTEGER ----------
    $_defineMethod('isFiniteInt', function($number)
    {
        // Return true if the object is a number, finite, and within the maximum and minimum representable integers
        return $$.isFinite($number) && $number <= $_const_int_max && $number >= $_const_int_min && $number === Math.floor($number);
    });

    // ---------- FLAT OBJECT ----------
    $_defineMethod('isFlatObject', function($object)
    {
        // If the object is not an object, return false
        if (!$object || $$.type($object) !== 'object')
            return false;

        // Return true if the prototype of the object is null
        return $__getPrototypeOf($object) === null;
    });

    // ---------- IMPORTED CLASS ----------
    $_defineMethod('isImportedClass', function($object)
    {
        // Return true if the object is a class and it has the import flag
        return $$.isClass($object) && !!$object[$_definition_import];
    });

    // ---------- INFINITY ----------
    $_defineMethod('isInfinity', function($number)
    {
        // Return true if the object is a number, is not NaN, and is not finite
        return $$.isNumber($number) && !isNaN($number) && !isFinite($number);
    });

    // ---------- INSTANCE ----------
    $_defineMethod('isInstance', function($object)
    {
        // If the object is undefined or null, return false
        if ($object === undefined || $object === null)
            return false;

        // Return true if the object is an instance of a class
        return !!($object instanceof $_class);
    });

    // ---------- NOT-A-NUMBER ----------
    $_defineMethod('isNaN', function($number)
    {
        // Return true if the object is a number and is NaN
        return $$.isNumber($number) && !!isNaN($number);
    });

    // ---------- NEGATIVE INFINITY ----------
    $_defineMethod('isNegativeInfinity', function($number)
    {
        // Return true if the object is a number, is not NaN, is not finite, and is less than zero
        return $$.isNumber($number) && !isNaN($number) && !isFinite($number) && $number < 0;
    });

    // ---------- NULL ----------
    $_defineMethod('isNull', function($argument)
    {
        // Return true if the argument is null
        return $argument === null;
    });

    // ---------- OBJECT ----------
    $_defineMethod('isObject', function($object)
    {
        // Return true if the object is neither undefined nor null
        return $object !== undefined && $object !== null;
    });

    // ---------- OBJECT INSTANCE ----------
    $_defineMethod('isObjectInstance', function($object)
    {
        // If the object is a null reference or undefined, return false
        if ($object === null || $object === undefined)
            return false;

        // Return true if the object inherits from the object prototype
        return !!($object instanceof $__object);
    });

    // ---------- OPTIMIZED CLASS ----------
    $_defineMethod('isOptimizedClass', function($object)
    {
        // Return true if the object is a class and it is optimized
        return $$.isClass($object) && !!$object[$_definition_optimized];
    });

    // ---------- POSITIVE INFINITY ----------
    $_defineMethod('isPositiveInfinity', function($number)
    {
        // Return true if the object is a number, is not NaN, is not finite, and is greater than zero
        return $$.isNumber($number) && !isNaN($number) && !isFinite($number) && $number > 0;
    });

    // ---------- PRIMITIVE ----------
    $_defineMethod('isPrimitive', function($object)
    {
        // If the object is a null reference or undefined, return true
        if ($object === null || $object === undefined)
            return true;

        // Get the primitive type of the object
        var $typeOf = typeof $object;

        // Return true if the object is a boolean, number, or string primitive
        return $typeOf === 'boolean' || $typeOf === 'number' || $typeOf === 'string';
    });

    // ---------- PRIMITIVE-TYPE ----------
    $_defineMethod('isPrimitiveType', function($object)
    {
        // If the object is a null reference or undefined, return true
        if ($object === null || $object === undefined)
            return true;

        // Get the type of the object
        var $type = $$.type($object);

        // Return true if the object is a value-type
        return $type === 'string' || $type === 'number' || $type === 'boolean';
    });

    // ---------- REFERENCE-TYPE ----------
    $_defineMethod('isReferenceType', function($object)
    {
        // If the object is a null reference or undefined, return false
        if ($object === null || $object === undefined)
            return false;

        // Get the type of the object
        var $type = $$.type($object);

        // Return true if the object is not a value-type
        return $type !== 'string' && $type !== 'number' && $type !== 'boolean';
    });

    // ---------- SEALED CLASS ----------
    $_defineMethod('isSealedClass', function($object)
    {
        // Return true if the object is a class and it is final
        return $$.isClass($object) && !!$object[$_definition_final];
    });

    // ---------- SIMPLE OBJECT ----------
    $_defineMethod('isSimpleObject', function($object)
    {
        // If the object is not an object, return false
        if (!$object || $$.type($object) !== 'object')
            return false;

        // Return true if the prototype of the object is the object prototype
        return $__getPrototypeOf($object) === $__objectProto__;
    });

    // ---------- STRUCT ----------
    $_defineMethod('isStruct', function($object)
    {
        // Return true if the object is a class and it has the struct modifier
        return $$.isClass($object) && !!$object[$_definition_struct];
    });

    // ---------- UNDEFINED ----------
    $_defineMethod('isUndefined', function($argument)
    {
        // Return true if the argument is undefined
        return $argument === undefined;
    });

    // ---------- VALUE-TYPE ----------
    $_defineMethod('isValueType', function($object)
    {
        // Get the type of the object
        var $type = $$.type($object);

        // Return true if the object is a boolean, number, or string
        return $type === 'boolean' || $type === 'number' || $type === 'string';
    });

    // ---------- WINDOW ----------
    $_defineMethod('isWindow', function($object)
    {
        // If the object is the window object, return true
        if ($object === window)
            return true;

        // Return true if the object is a window reference
        return $$.type($object) === 'window';
    });

    // ########## CASTS ##########

    // ---------- ARRAY ----------
    $_defineMethod('asArray', function($object)
    {
        // If the object is a null reference or undefined, return an empty array
        if ($object === null || $object === undefined)
            return [];

        // Get the type of the object
        var $type = $$.type($object);

        // If the object is already an array, return the array
        if ($type === 'array')
            return $object;

        // If the object is a value type, return an empty array
        if ($type === 'boolean' || $type === 'number' || $type === 'string')
            return [];

        // Get the object collection length and create the array
        var $length = $$.asInt($object.length, true);
        var $array  = new $__array($length);

        // Convert the object to an array
        for (var $i = 0; $i < $length; $i++)
            $array[$i] = $object[$i];

        // Return the array
        return $array;
    });

    // ---------- BOOLEAN ----------
    $_defineMethod('asBool', function($object)
    {
        // Get the primitive type of the object
        var $typeOf = typeof $object;

        // If the object is a primitive boolean, return the object
        if ($typeOf === 'boolean')
            return $object;

        // Get the object type
        var $type = $$.type($object);
        
        // If the object is a boolean object, return the primitive value of the boolean object
        if ($type === 'boolean')
            return $__boolean_valueOf__.call($object);

        // If the object is a number
        if ($type === 'number')
        {
            // If the number is a number object, unbox it into a number primitive
            if ($typeOf !== 'number')
                $object = $__number_valueOf__.call($object);
        }
        // If the object is a string
        else if ($type === 'string')
        {
            // If the string is a string object, unbox it into a string primitive
            if ($typeOf !== 'string')
                $object = $__string_valueOf__.call($object);
        }
        
        // Return the object cast as a boolean
        return !!$object;
    });

    // ---------- FLOAT + NUMBER ----------
    $_defineMethod('asFloat', function($object)
    {
        // If the object is a primitive number, return the number
        if (typeof $object === 'number')
            return $object;

        // Get the object type
        var $type = $$.type($object);

        // If the object is a number object, return the primitive value of the number object
        if ($type === 'number')
            return $__number_valueOf__.call($object);

        // If the object is a string and matches a number
        if ($type === 'string' && $__string_match__.call($__string_trim__.call($object), /^[-+]?[0-9]*\.?[0-9]+(e[-+]?[0-9]+)?$/i))
        {
            // Cast the object as a float
            $object = parseFloat($object);
            
            // If the number is a number object, unbox it into a number primitive
            if (typeof $object !== 'number')
                $object = $__number_valueOf__.call($object);

            // Return the number primitive
            return $object;
        }

        // Return NaN
        return $__NaN__;
    });

    // ---------- INTEGER ----------
    $_defineMethod('asInt', function($object, $finite)
    {
        // Cast the object as a float
        $object = $$.asFloat($object);
        $finite = $finite !== undefined ? $$.asBool($finite) : false;

        // If the object is not not-a-number
        if (!isNaN($object))
        {
            // If the number is greater than the maximum integer, return infinity
            if ($object > $_const_int_max)
                return $finite ? $_const_int_max : $__number_positiveInfinity__;

            // If the number is less than the minimum integer, return negative infinity
            if ($object < $_const_int_min)
                return $finite ? $_const_int_min : $__number_negativeInfinity__;

            // Round the number towards zero
            $object = $object < 0 ? Math.ceil($object) : Math.floor($object);

            // If the number is a number object, unbox it into a number primitive
            if (typeof $object !== 'number')
                $object = $__number_valueOf__.call($object);
        }
        else if ($finite)
            $object = 0;

        // Return the number primitive
        return $object;
    });

    // ---------- OBJECT ----------
    $_defineMethod('asObject', function($object)
    {
        // If the object is a null reference or undefined, return an empty object
        if ($object === null || $object === undefined)
            return {};
        
        // Return the object
        return $object;
    });

    // ---------- STRING ----------
    $_defineMethod('asString', function($object)
    {
        // If the object is a primitive string, return the object
        if (typeof $object === 'string')
            return $object;

        // Get the object type
        var $type = $$.type($object);

        // If the object is a string object, return the primitive value of the string object
        if ($type === 'string')
            return $__string_valueOf__.call($object);

        // If the object is a number object or primitive
        if ($type === 'number')
        {
            // Convert the number to a string
            $object = $__number_toString__.call($object);

            // If the string is a string object, unbox it into a string primitive
            if (typeof $object !== 'string')
                $object = $__string_valueOf__.call($object);

            // Return the string primitive
            return $object;
        }

        // If the object is a boolean object or primitive
        if ($type === 'boolean')
        {
            // Convert the boolean to a string
            $object = $__boolean_toString__.call($object);

            // If the string is a string object, unbox it into a string primitive
            if (typeof $object !== 'string')
                $object = $__string_valueOf__.call($object);

            // Return the string primitive
            return $object;
        }
        
        // Return an empty string primitive
        return '';
    });

    // ########## HELPERS ##########

    // ---------- BOX ----------
    $_defineMethod('box', function($object)
    {
        // If the object is a null reference or undefined, return an empty object
        if ($object === null || $object === undefined)
            return {};

        // If the object is a primitive object, return the object
        if (typeof $object === 'object')
            return $object;

        // Get the object type
        var $type = $$.type($object);

        // If the object is a string primitive, return it as a string object
        if ($type === 'string')
            return new $__string($object);

        // If the object is a number primitive, return it as a number object
        if ($type === 'number')
            return new $__number($object);

        // If the object is a boolean primitive, return it as a boolean object
        if ($type === 'boolean')
            return new $__boolean($object);
        
        // Return the object
        return $object;
    });

    // ---------- COMPLEX ----------
    $_defineMethod('complex', function($prototype)
    {
        // If the prototype is a null reference or undefined, return a flat object
        if ($object === null || $object === undefined)
            return $__create(null);

        // Box the prototype
        $prototype = $$.box($prototype);

        // Return the created object
        return $__create($prototype);
    });

    // ---------- EMPTY ----------
    $_defineMethod('empty', function()
    {
        // Return an empty function
        return function()
        {
            //
        };
    });

    // ---------- EXPORT ----------
    $_defineMethod('export', function($class)
    {
        // CHECK $class
        if (!$$.isClass($class))
        {
            // If the debug flag is set, throw an exception
            if ($$.debug)
                throw $_exceptionArguments('export', arguments);

            // Return an empty string primitive
            return '';
        }

        // If the class has the import flag
        if ($class[$_definition_import])
        {
            // If the debug flag is set, throw an exception
            if ($$.debug)
                throw $_exceptionFormat($_lang_export_import);

            // Return an empty string primitive
            return '';
        }

        // If the class has the struct flag
        if ($class[$_definition_struct])
        {
            // If the debug flag is set, throw an exception
            if ($$.debug)
                throw $_exceptionFormat($_lang_export_struct);

            // Return an empty string primitive
            return '';
        }

        // Return the precompiled string
        return $$.asString($class[$_definition_precompile].call($_lock));
    });

    // ---------- FLATTEN ----------
    $_defineMethod('flatten', function()
    {
        //
    });

    // ---------- FORMAT ----------
    $_defineMethod('format', function($string)
    {
        // CHECK $string
        if (!$$.isString($string))
        {
            // If the debug flag is set, throw an exception
            if ($$.debug)
                throw $_exceptionArguments('format', arguments);

            // Return an empty string primitive
            return '';
        }

        // Get the arguments
        var $arguments = arguments;

        // Return the formatted string
        return $$.asString($__string_replace__.call($string, /\{([0-9]{1,16})\}/g, function($0, $1)
        {
            // Get the argument index
            var $argumentIndex = $$.asInt($1);

            // If the argument index is not finite or exceeded the number of arguments, return the match as the replacement
            if (!isFinite($argumentIndex) || ++$argumentIndex >= $arguments.length)
                return $0;

            // Return the argument as the replacement
            return $$.asString($arguments[$argumentIndex]);
        }));
    });

    // ---------- JOIN ----------
    $_defineMethod('join', function()
    {
        //
    });

    // ---------- LOCK ----------
    $_defineMethod('lock', function()
    {
        //
    });

    // ---------- PARENT ----------
    $_defineMethod('parent', function($class)
    {
        // CHECK $class
        if (!$$.isClass($class))
            return null;

        // Return the base class
        return $class[$_definition_baseClass] || null;
    });

    // ---------- UNBOX ----------
    $_defineMethod('unbox', function($object)
    {
        // If the object is a null reference or undefined, return it
        if ($object === null || $object === undefined)
            return $object;

        // Get the type of the object
        var $typeOf = typeof $object;

        // If the type is a primitive type, return the object
        if ($typeOf === 'string' || $typeOf === 'number' || $typeOf === 'boolean')
            return $object;

        // Get the object type
        var $type = $$.type($object);

        // If the object is a string object, return the string primitive
        if ($type === 'string')
            return $__string_valueOf__.call($object);

        // If the object is a number object, return the number primitive
        if ($type === 'number')
            return $__number_valueOf__.call($object);

        // If the object is a boolean object, return the boolean primitive
        if ($type === 'boolean')
            return $__boolean_valueOf__.call($object);
        
        // Return the object
        return $object;
    });

    // ########## SETTINGS ##########

    // ---------- DEBUG ----------
    $_defineProperty('debug', function()
    {
        // Return the debug flag
        return $_debug;
    }, function($v)
    {
        // Set the debug flag
        $_debug = $$.asBool($v);
    });

    // ---------- LAZY ----------
    $_defineProperty('lazy', function()
    {
        // Return the lazy flag
        return $_lazy;
    }, function($v)
    {
        // Set the lazy flag
        $_lazy = $$.asBool($v);
    });

    // ########## GLOBALS ##########

    // If the AMD module pattern is being used
    if (typeof define === 'function' && define.amd)
    {
        // Define the module
        define(function()
        {
            // Return the jTypes reference
            return $$;
        });
    }
    // If the CommonJS module pattern is being used
    else if (typeof module !== 'undefined' && module && module.exports)
    {
        // Define the module exports
        module.exports = $$;
    }
    else
    {
        // If the "$$" shorthand global variable is not already defined or should be overwritten, define/overwrite it
        if (window.$$ === undefined || window.$$ === window.jTypes)
            window.$$ = $$;

        // Define/overwrite the global variable
        window.jTypes = $$;
    }
})(typeof window !== 'undefined' ? window : {});