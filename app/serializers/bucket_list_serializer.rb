class BucketListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name
  has_many :activities, through: :activity_bucket_lists
  has_many :notes
end
