class BucketList < ApplicationRecord
    belongs_to :user
    has_many :activity_bucket_lists
    has_many :activities, through: :activity_bucket_lists
    has_many :notes
end
