import {
  SELECT_TOOL_DRAWING_LINE,
  BEGIN_DRAWING_LINE,
  UPDATE_DRAWING_LINE,
  END_DRAWING_LINE,
  SELECT_TOOL_DRAWING_HOLE,
  BEGIN_DRAWING_HOLE,
  UPDATE_DRAWING_HOLE,
  END_DRAWING_HOLE,
  MODE_WAITING_DRAWING_LINE,
  MODE_WAITING_DRAWING_HOLE,
  MODE_DRAWING_HOLE,
  MODE_DRAWING_LINE
} from '../constants';

export default function (state, action) {
  switch (action.type) {
    case SELECT_TOOL_DRAWING_LINE:
      return state.set('mode', MODE_WAITING_DRAWING_LINE);

    case BEGIN_DRAWING_LINE:
      return state.merge({
        mode: MODE_DRAWING_LINE,
        scene: beginDrawingLine(state.scene, action.x, action.y)
      });

    case UPDATE_DRAWING_LINE:
      return state.set('scene', updateDrawingLine(state.scene, action.x, action.y));

    case END_DRAWING_LINE:
      return state.merge({
        mode: MODE_WAITING_DRAWING_LINE,
        scene: endDrawingLine(state.scene, action.x, action.y)
      });

    case SELECT_TOOL_DRAWING_HOLE:
      return state.set('mode', MODE_WAITING_DRAWING_HOLE);

    case BEGIN_DRAWING_HOLE:
      return state.merge({
        mode: MODE_DRAWING_HOLE,
        scene: updateDrawingHole(state.scene, action.x, action.y)
      });

    case UPDATE_DRAWING_HOLE:
      return state.set('scene', updateDrawingHole(state.scene, action.x, action.y));

    case END_DRAWING_HOLE:
      return state.merge({
        mode: MODE_WAITING_DRAWING_HOLE,
        scene: endDrawingHole(state.scene, action.x, action.y)
      });

    default:
      return state;
  }
}


/** lines operations **/
function beginDrawingLine(scene, x, y) {
  return scene;
}

function updateDrawingLine(scene, x, y) {
  return scene;
}

function endDrawingLine(scene, x, y) {
  return scene;
}

/** holes operations **/
function beginDrawingHole(scene, x, y) {
  return scene;
}

function updateDrawingHole(scene, x, y) {
  return scene;
}

function endDrawingHole(scene, x, y) {
  return scene;
}

/** lines features **/
function addLine(scene, vertex1, vertex2) {
  return scene;
}

function removeLine(scene, lineID) {
  return scene;
}

function splitLine(scene, lineID, x, y) {
  return scene;
}


/** vertices features **/
function addVertex(scene, x, y) {
  return scene;
}

function removeVertex(scene, vertexID) {
  return scene;
}