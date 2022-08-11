class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :activity_id
      t.integer :likes

      t.timestamps
    end
  end
end
