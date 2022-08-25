class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :content
       t.integer :bucket_list_id
      t.timestamps
    end
  end
end
