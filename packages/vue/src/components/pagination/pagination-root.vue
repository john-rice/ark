<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { PolymorphicProps } from '../factory'
import type { RootEmits, RootProps } from './pagination.types'

export interface PaginationRootBaseProps extends RootProps, PolymorphicProps {}
export interface PaginationRootProps
  extends PaginationRootBaseProps,
    /**
     * @vue-ignore
     */
    HTMLAttributes {}
export interface PaginationRootEmits extends RootEmits {}
</script>

<script setup lang="ts">
import { ark } from '../factory'
import { usePagination } from './use-pagination'
import { PaginationProvider } from './use-pagination-context'

const props = defineProps<PaginationRootProps>()
const emits = defineEmits<PaginationRootEmits>()

const pagination = usePagination(props, emits)
PaginationProvider(pagination)
</script>

<template>
  <ark.nav v-bind="pagination.getRootProps()" :as-child="asChild">
    <slot />
  </ark.nav>
</template>
