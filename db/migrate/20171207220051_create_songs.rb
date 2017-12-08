class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.integer :rank
      t.string :title
      t.float :duration

      t.timestamps
    end
  end
end
