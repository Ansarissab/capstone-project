class ActivityBucketListSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :activity
  belongs_to :bucket_list
end
