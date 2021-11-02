// =============================================================================
// Polyhedron Folding Data
// (c) Mathigon
// =============================================================================


import {Obj} from '@mathigon/core';


export interface FoldingDataItem {
  net: number[][];
  hinges: number[][];
  vertices: [number, number, number][];
}

// Data from https://github.com/paaatrick/polyhedra-folding/tree/master/poly

export const FoldingData: Obj<FoldingDataItem> = {
  Tetrahedron: {
    net: [
      [1, 2, 4],
      [3, 1, 4],
      [1, 0, 2],
      [4, 2, 5]
    ],
    hinges: [
      [0, 0, 2, 2, 1.2309594173407747],
      [0, 1, 3, 0, 1.2309594173407747],
      [0, 2, 1, 1, 1.2309594173407747]
    ],
    vertices: [
      [-1, -0.577350269189626, 0],
      [-0.5, 0.288675134594813, 0],
      [0, -0.577350269189626, 0],
      [0, 1.15470053837925, 0],
      [0.5, 0.288675134594813, 0],
      [1, -0.577350269189626, 0]
    ]
  },

  Cube: {
    net: [
      [4, 3, 7, 8],
      [5, 4, 8, 9],
      [1, 0, 3, 4],
      [3, 2, 6, 7],
      [8, 7, 10, 11],
      [11, 10, 12, 13]
    ],
    hinges: [
      [0, 0, 2, 2, 1.5707963267948966],
      [0, 1, 3, 3, 1.5707963267948966],
      [0, 2, 4, 0, 1.5707963267948966],
      [0, 3, 1, 1, 1.5707963267948966],
      [5, 0, 4, 2, 1.5707963267948966]
    ],
    vertices: [
      [-1.5, -0.5, 0],
      [-1.5, 0.5, 0],
      [-0.5, -1.5, 0],
      [-0.5, -0.5, 0],
      [-0.5, 0.5, 0],
      [-0.5, 1.5, 0],
      [0.5, -1.5, 0],
      [0.5, -0.5, 0],
      [0.5, 0.5, 0],
      [0.5, 1.5, 0],
      [1.5, -0.5, 0],
      [1.5, 0.5, 0],
      [2.5, -0.5, 0],
      [2.5, 0.5, 0]
    ]
  },

  Octahedron: {
    net: [
      [1, 5, 6],
      [1, 6, 2],
      [2, 6, 7],
      [6, 9, 7],
      [0, 2, 3],
      [2, 7, 3],
      [3, 7, 8],
      [3, 8, 4]
    ],
    hinges: [
      [0, 2, 1, 0, 1.9106332362490186],
      [1, 1, 2, 0, 1.9106332362490186],
      [2, 1, 3, 2, 1.9106332362490186],
      [2, 2, 5, 0, 1.9106332362490186],
      [4, 1, 5, 2, 1.9106332362490186],
      [6, 0, 5, 1, 1.9106332362490186],
      [7, 0, 6, 2, 1.9106332362490186]
    ],
    vertices: [
      [-1.44337567297406, 1.5, 0],
      [-0.577350269189626, 0, 0],
      [-0.577350269189626, 1, 0],
      [-0.577350269189626, 2, 0],
      [-0.577350269189626, 3, 0],
      [0.288675134594813, -0.5, 0],
      [0.288675134594813, 0.5, 0],
      [0.288675134594813, 1.5, 0],
      [0.288675134594813, 2.5, 0],
      [1.15470053837925, 1, 0]
    ]
  },

  Dodecahedron: {
    net: [
      [10, 16, 23, 24, 17],
      [37, 32, 24, 23, 31],
      [25, 18, 17, 24, 30],
      [4, 3, 10, 17, 11],
      [1, 9, 16, 10, 2],
      [22, 29, 23, 16, 15],
      [15, 8, 14, 21, 22],
      [0, 5, 13, 14, 6],
      [12, 19, 20, 13, 7],
      [33, 34, 27, 20, 26],
      [36, 28, 21, 27, 35],
      [27, 21, 14, 13, 20]
    ],
    hinges: [
      [0, 0, 4, 2, 2.0344439357957027],
      [0, 1, 5, 2, 2.0344439357957027],
      [0, 2, 1, 2, 2.0344439357957027],
      [0, 3, 2, 2, 2.0344439357957027],
      [0, 4, 3, 2, 2.0344439357957027],
      [5, 4, 6, 4, 2.0344439357957027],
      [11, 0, 10, 2, 2.0344439357957027],
      [11, 1, 6, 2, 2.0344439357957027],
      [11, 2, 7, 2, 2.0344439357957027],
      [11, 3, 8, 2, 2.0344439357957027],
      [11, 4, 9, 2, 2.0344439357957027]
    ],
    vertices: [
      [-1.80170732464719, -3.92705098312484, 0],
      [-1.80170732464719, -1.30901699437495, 0],
      [-1.80170732464719, -0.309016994374947, 0],
      [-1.80170732464719, 0.309016994374947, 0],
      [-1.80170732464719, 1.30901699437495, 0],
      [-1.21392207235472, -4.73606797749979, 0],
      [-1.21392207235472, -3.11803398874989, 0],
      [-0.85065080835204, -5.23606797749979, 0],
      [-0.85065080835204, -2.61803398874989, 0],
      [-0.85065080835204, -1.61803398874989, 0],
      [-0.85065080835204, 0, 0],
      [-0.85065080835204, 1.61803398874989, 0],
      [-0.262865556059567, -6.04508497187474, 0],
      [-0.262865556059567, -4.42705098312484, 0],
      [-0.262865556059567, -3.42705098312484, 0],
      [-0.262865556059567, -1.80901699437495, 0],
      [-0.262865556059567, -0.80901699437494701, 0],
      [-0.262865556059567, 0.80901699437494701, 0],
      [-0.262865556059567, 1.80901699437495, 0],
      [0.688190960235587, -5.73606797749979, 0],
      [0.688190960235587, -4.73606797749979, 0],
      [0.688190960235587, -3.11803398874989, 0],
      [0.688190960235587, -2.11803398874989, 0],
      [0.688190960235587, -0.5, 0],
      [0.688190960235587, 0.5, 0],
      [0.688190960235587, 2.11803398874989, 0],
      [1.27597621252806, -5.54508497187474, 0],
      [1.27597621252806, -3.92705098312484, 0],
      [1.27597621252806, -2.30901699437495, 0],
      [1.27597621252806, -1.30901699437495, 0],
      [1.27597621252806, 1.30901699437495, 0],
      [1.63924747653074, -0.80901699437494701, 0],
      [1.63924747653074, 0.80901699437494701, 0],
      [2.22703272882321, -5.23606797749979, 0],
      [2.22703272882321, -4.23606797749979, 0],
      [2.22703272882321, -3.61803398874989, 0],
      [2.22703272882321, -2.61803398874989, 0],
      [2.22703272882321, 0, 0]
    ]
  },

  Icosahedron: {
    net: [
      [0, 5, 6],
      [5, 11, 12],
      [1, 6, 7],
      [6, 12, 13],
      [2, 7, 8],
      [7, 13, 14],
      [3, 8, 9],
      [8, 14, 15],
      [4, 9, 10],
      [9, 15, 16],
      [12, 6, 5],
      [17, 12, 11],
      [13, 7, 6],
      [18, 13, 12],
      [14, 8, 7],
      [19, 14, 13],
      [15, 9, 8],
      [20, 15, 14],
      [16, 10, 9],
      [21, 16, 15]
    ],
    hinges: [
      [0, 1, 10, 1, 2.411864997362827],
      [10, 2, 1, 2, 2.411864997362827],
      [1, 1, 11, 1, 2.411864997362827],
      [2, 1, 12, 1, 2.411864997362827],
      [12, 2, 3, 2, 2.411864997362827],
      [3, 1, 13, 1, 2.411864997362827],
      [10, 0, 3, 0, 2.411864997362827],
      [4, 1, 14, 1, 2.411864997362827],
      [14, 2, 5, 2, 2.411864997362827],
      [5, 1, 15, 1, 2.411864997362827],
      [12, 0, 5, 0, 2.411864997362827],
      [6, 1, 16, 1, 2.411864997362827],
      [16, 2, 7, 2, 2.411864997362827],
      [7, 1, 17, 1, 2.411864997362827],
      [14, 0, 7, 0, 2.411864997362827],
      [8, 1, 18, 1, 2.411864997362827],
      [18, 2, 9, 2, 2.411864997362827],
      [9, 1, 19, 1, 2.411864997362827],
      [16, 0, 9, 0, 2.411864997362827]
    ],
    vertices: [
      [-0.577350269189626, 0, 0],
      [-0.577350269189626, 1, 0],
      [-0.577350269189626, 2, 0],
      [-0.577350269189626, 3, 0],
      [-0.577350269189626, 4, 0],
      [0.288675134594813, -0.5, 0],
      [0.288675134594813, 0.5, 0],
      [0.288675134594813, 1.5, 0],
      [0.288675134594813, 2.5, 0],
      [0.288675134594813, 3.5, 0],
      [0.288675134594813, 4.5, 0],
      [1.15470053837925, -1, 0],
      [1.15470053837925, 0, 0],
      [1.15470053837925, 1, 0],
      [1.15470053837925, 2, 0],
      [1.15470053837925, 3, 0],
      [1.15470053837925, 4, 0],
      [2.02072594216369, -0.5, 0],
      [2.02072594216369, 0.5, 0],
      [2.02072594216369, 1.5, 0],
      [2.02072594216369, 2.5, 0],
      [2.02072594216369, 3.5, 0]
    ]
  }
};
