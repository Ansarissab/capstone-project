class BucketList < ApplicationRecord
    belongs_to :user
    has_many :activity_bucket_lists
end
