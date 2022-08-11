class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :activity_id, :likes
end
