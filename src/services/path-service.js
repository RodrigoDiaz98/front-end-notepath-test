import axios from "axios";
import {baseUrl, headers} from "./API";


export const getUserPath = (pathId) => {
  const url = baseUrl + `paths/${pathId}/path_pieces`;
  const response = axios.get(url, { headers });
  return response;
};

export const newReviewPathPiece = (pieceId,review) => {
  const url = baseUrl + `/api/v1/path_pieces/${pieceId}/path_piece_reviews`;
  const params =  {path_piece_review : {rating: review}};
  const response = axios.post(url, params, { headers });
  return response;
};
export const updateReviewPathPiece = (pieceId,reviewId,review) => {
  const url = baseUrl + `/api/v1/path_pieces/${pieceId}/path_piece_reviews/${reviewId}`;
  const params =  {path_piece_review : {rating: review}};
  const response = axios.put(url, params, { headers });
  return response;
};

export const reviewPath = (pathId,review) => {
  const url = baseUrl + `paths/${pathId}`;
  const params =  {path_review : review};
  const response = axios.put(url, params, { headers });
  return response;
};

export const getAllUserPath = () => {
  const url = baseUrl + `paths/`;
  const response = axios.get(url, { headers });
  return response;
};

export const createPath = (goalId) =>{
  const url = baseUrl + `paths`;
  const params =  {goal_piece_id : goalId};
  const response = axios.post(url,  params,{ headers });
  return response;
}

export const deletePath = (pathId) =>{
  const url = baseUrl + `paths/${pathId}`;
  const response = axios.delete(url,{ headers });
  return response;
}

export const completePiece = (pathId,pieceId) =>{
  const url = baseUrl + `paths/${pathId}/path_pieces/${pieceId}`;
  const params =  {is_completed : true};
  const response = axios.put(url,  params,{ headers });
  return response;
}
