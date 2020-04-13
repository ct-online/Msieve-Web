# Msieve-Web
Msieve Factorizer for [CrypTool-Online](https://www.cryptool.org/en/cryptool-online)

## About this project

[Msieve](https://msieve.sourceforge.io/) is a C library implementing a suite of algorithms to factor large integers.
The *Msieve-Web* project is a port of *Msieve* to [WebAssembly](https://webassembly.org/) technology.
The relevant algorithm is the self-initializing quadratic sieve (QS).

Visit the corresponding [Msieve Factorizer](https://www.cryptool.org/en/cto-highlights/msieve) page of [CrypTool-Online](https://www.cryptool.org/en/cryptool-online) in order to use *Msieve-Web* in your browser.

## About modifications

Only a few modifications to the orignal *Msieve* source code were needed for *Msieve-Web*. Check the Git history in case you are interested.

## How to build

### Prerequisites

*Msieve-Web* requires having the Emscripten SDK installed and the [GMP library](https://gmplib.org/) compiled with it.

The following instructions only apply to Linux environments.
In case you are using Windows, you can use the *Windows Subsystem for Linux* instead, 
for example by installing *Ubuntu* from the *Windows Store*.

#### Setup toolchain
You need the [Emscripten](https://emscripten.org) toolchain for compiling C code to WebAssembly.
Follow the steps in this link to setup the environment: [Developers Guide](https://webassembly.org/getting-started/developers-guide/)

The following steps will only work if the appropriate *Emscripten* enviornment variables are set, for example by executing:
```
source ./emsdk_env.sh --build=Release
```

#### Building GMP library for WebAssembly
The [GMP library](https://gmplib.org/) is needed by Msieve. It is necessary to compile GMP to *WebAssembly* in order to link it with *Msieve* during compilation.

Download [GMP 6.1.2](https://gmplib.org/download/gmp/gmp-6.1.2.tar.bz2) and extract it to some folder, for example the home folder.
Switch into the `gmp-6.1.2` folder and execute:

```
emconfigure ./configure "CCAS=gcc -c" --disable-assembly
emmake make all NO_ZLIB=1
```

*Msieve-Web* compilation procedures will expect path information to the GMP folder in environment variables `GMP_LIBS` and `GMP_INCLUDES`.
Assuming that the GMP source folder is in `~/gmp-6.1.2`, the variables can be set with the following commands:
```
export GMP_INCLUDES=~/gmp-6.1.2
export GMP_LIBS=$GMP_INCLUDES/.libs
```

### Building Msieve-Web

Go to the *Msieve-Web* source directory and switch into subfolder `msieve`.
Execute:
```
emmake make all NO_ZLIB=1
```

Compilation output will be written into folder `build`.