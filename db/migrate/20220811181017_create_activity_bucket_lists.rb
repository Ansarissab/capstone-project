class CreateActivityBucketLists < ActiveRecord::Migration[7.0]
  def change
    create_table :activity_bucket_lists do |t|
      t.integer :activity_id
      t.integer :bucket_list_id

      t.timestamps
    end
  end
end
