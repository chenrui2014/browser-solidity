'use strict'

module.exports = (sources, opts) => {
  return JSON.stringify({
    language: 'Solidity',
    sources: sources,
    settings: {
      optimizer: {
        enabled: opts.optimize === true,
        runs: 500
      }
    },
    libraries: opts.libraries,
    outputSelection: {
      '*': {
        '': [ 'legacyAST' ],
        '*': [ 'abi', 'metadata', 'evm.legacyAssembly', 'evm.bytecode', 'evm.deployedBytecode', 'evm.methodIdentifiers', 'evm.gasEstimates' ]
      }
    }
  })
}
