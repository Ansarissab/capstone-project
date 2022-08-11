class Activity < ApplicationRecord
    has_many :activity_bucket_lists
    has_many :likes
end
