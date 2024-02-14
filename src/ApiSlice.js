import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const api= createApi({
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000'}),
    endpoints:(builder)=>({
        getTasks: builder.query({
            query : ()=> '/tasks'
        }),
        addTask : builder.mutation({
            query : (task)=> ({
                url:'/tasks',
                method:'Post',
                body: task
            })
        }),
        updateTask : builder.mutation({
            query : (task)=> ({
                url:`/tasks/${task.id}`,
                method:'Put',
                body: {completed:task.completed,value:task.value}
            })
        }),
        deleteTask : builder.mutation({
            query : (id)=> ({
                url:`/tasks/${id}`,
                method:'Delete',
                // body: {completed:task.completed,value:task.value}
            })
        })
    })
})
export const {useGetTasksQuery,useAddTaskMutation,useUpdateTaskMutation,useDeleteTaskMutation}=api